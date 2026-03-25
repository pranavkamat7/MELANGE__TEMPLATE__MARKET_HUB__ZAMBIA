import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { createServer } from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function startServer(distPath, port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let urlPath = req.url.replace(/^\/zambia\//, "") || "/";
      let filePath = path.join(distPath, urlPath === "/" ? "/index.html" : urlPath);

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(distPath, "index.html");
      }

      const ext = path.extname(filePath);
      const mimeTypes = {
        ".html": "text/html",
        ".js":   "application/javascript",
        ".css":  "text/css",
        ".json": "application/json",
        ".png":  "image/png",
        ".jpg":  "image/jpeg",
        ".svg":  "image/svg+xml",
        ".ico":  "image/x-icon",
        ".woff": "font/woff",
        ".woff2":"font/woff2",
      };

      res.setHeader("Content-Type", mimeTypes[ext] || "text/plain");
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(port, () => resolve(server));
  });
}

// ✅ NEW: Performance CSS injected into the final HTML
const PERFORMANCE_STYLE = `
<style id="prerender-perf">
  /* Force GPU acceleration on all framer motion elements */
  [style*="transform"],
  [style*="opacity"] {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  /* Mobile: simplify all animations */
  @media (max-width: 768px) {
    * {
      /* Shorten all animation durations by 40% on mobile */
      animation-duration: 0.3s !important;
      transition-duration: 0.3s !important;
    }

    /* Disable blur-heavy elements on mobile (your gradient orbs) */
    [class*="blur-"] {
      filter: none !important;
    }

    /* Disable will-change on mobile — eats GPU memory */
    * {
      will-change: auto !important;
    }
  }

  /* Prerender class: freeze everything visible before JS loads */
  html.prerender * {
    animation-play-state: paused !important;
    transition: none !important;
  }
</style>
`;

// ✅ NEW: Script injected into final HTML — runs before framer motion hydrates
// This patches framer motion's internal defaults globally
const PATCH_SCRIPT = `
<script id="prerender-patch">
  (function() {
    // Tell framer motion to use once:true everywhere via a global flag
    window.__FRAMER_MOTION_VIEWPORT_ONCE__ = true;

    // Detect low-end mobile and set a flag
    var cores = navigator.hardwareConcurrency || 4;
    var isMobile = /Mobi|Android/i.test(navigator.userAgent);
    var isLowEnd = isMobile && cores <= 4;

    if (isLowEnd) {
      // Framer Motion respects prefers-reduced-motion
      // We inject it programmatically for low-end devices
      var style = document.createElement('style');
      style.textContent = '@media (prefers-reduced-motion: no-preference) { * { transition-duration: 0.2s !important; animation-duration: 0.2s !important; } }';
      document.head.appendChild(style);
      
      // Set a class so your components can also react to this
      document.documentElement.classList.add('low-end-device');
    }
  })();
</script>
`;

const routes = ["/"];
const PORT = 3034;
const distPath = path.join(__dirname, "dist");

console.log("Starting server...");
const server = await startServer(distPath, PORT);
console.log(`Server running at http://localhost:${PORT}`);

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const route of routes) {
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 812, isMobile: true });

    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    await page.evaluate(() => {
      document.documentElement.classList.add("prerender");

      document.querySelectorAll("*").forEach((el) => {
        const style = el.getAttribute("style") || "";

        const hasMotionStyles =
          style.includes("opacity") ||
          style.includes("transform") ||
          style.includes("will-change");

        if (!hasMotionStyles) return;

        const cleaned = style
          .split(";")
          .map((rule) => rule.trim())
          .filter((rule) => {
            if (!rule) return false;
            const prop = rule.split(":")[0].trim().toLowerCase();
            return ![
              "opacity",
              "transform",
              "will-change",
              "animation",
              "animation-name",
              "animation-duration",
              "animation-delay",
              "animation-play-state",
              "animation-fill-mode",
              "transition",
            ].includes(prop);
          })
          .join("; ");

        const finalStyle = cleaned
          ? `${cleaned}; opacity: 1; transform: none;`
          : "opacity: 1; transform: none;";

        el.setAttribute("style", finalStyle);
      });

      // ✅ NEW: Also remove will-change from ALL elements
      // This is a major mobile GPU memory saver
      document.querySelectorAll("*").forEach((el) => {
        const style = el.getAttribute("style") || "";
        if (style.includes("will-change")) {
          el.setAttribute("style", style.replace(/will-change:[^;]+;?/g, ""));
        }
      });

      // ✅ NEW: Disable blur on mobile-sized viewport
      // Your gradient orbs use blur-[150px] — very expensive on mobile
      if (window.innerWidth < 768) {
        document.querySelectorAll('[class*="blur-"]').forEach((el) => {
          el.style.filter = "none";
          el.style.backdropFilter = "none";
        });
      }
    });

    let html = await page.content();

    // Strip Puppeteer injected scripts
    html = html.replace(/<script[^>]*data-puppeteer[^>]*>[\s\S]*?<\/script>/gi, "");

    // ✅ NEW: Inject performance style into <head>
    html = html.replace("</head>", `${PERFORMANCE_STYLE}\n</head>`);

    // ✅ NEW: Inject patch script as first thing in <body>
    // Must be before any other scripts so it runs before framer motion
    html = html.replace("<body", `${PATCH_SCRIPT}\n<body`);

    const outDir = path.join(distPath, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);
    console.log("✅ Prerendered:", route);

    await page.close();
  } catch (err) {
    console.error(`Failed to prerender ${route}:`, err.message);
  }
}

await browser.close();
server.close();
console.log("All done!");