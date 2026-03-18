import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  layer: 'far' | 'mid' | 'near';
  twinkles: boolean;
  twinklePhase: number;
  twinkleSpeed: number;
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const cometRef = useRef<{ active: boolean; x: number; y: number; vx: number; vy: number; age: number }>({
    active: false,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    age: 0
  });
  const lastCometTimeRef = useRef(0);
  const driftXRef = useRef(0);
  const driftYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Generate stars on resize
      if (starsRef.current.length === 0) {
        generateStars();
      }
    };

    const generateStars = () => {
      starsRef.current = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 900); // Thousands of stars
      
      for (let i = 0; i < starCount; i++) {
        // Determine layer distribution: 50% far, 35% mid, 15% near
        const rand = Math.random();
        let layer: 'far' | 'mid' | 'near';
        if (rand < 0.5) {
          layer = 'far';
        } else if (rand < 0.85) {
          layer = 'mid';
        } else {
          layer = 'near';
        }
        
        // 7.5% of stars twinkle (within 5-10% range)
        const twinkles = Math.random() < 0.075;
        
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: layer === 'far' ? Math.random() * 0.8 + 0.2 : 
                layer === 'mid' ? Math.random() * 1.0 + 0.3 :
                Math.random() * 1.2 + 0.4,
          baseOpacity: layer === 'far' ? Math.random() * 0.3 + 0.2 : 
                       layer === 'mid' ? Math.random() * 0.4 + 0.3 :
                       Math.random() * 0.5 + 0.4,
          layer,
          twinkles,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.015 + 0.01 // Faster twinkle - visible in 5-10 seconds
        });
      }
    };

    const spawnComet = () => {
      const now = Date.now();
      const timeSinceLastComet = now - lastCometTimeRef.current;
      
      // Comets appear every 12-20 seconds - UNCHANGED
      if (timeSinceLastComet < 12000) return;
      
      if (!cometRef.current.active && Math.random() > 0.7) {
        lastCometTimeRef.current = now;
        cometRef.current.active = true;
        cometRef.current.age = 0;
        
        // Random starting position (from edges) - UNCHANGED
        const side = Math.floor(Math.random() * 4);
        switch (side) {
          case 0: // Top
            cometRef.current.x = Math.random() * canvas.width;
            cometRef.current.y = -20;
            cometRef.current.vx = (Math.random() - 0.5) * 3;
            cometRef.current.vy = Math.random() * 2.5 + 2;
            break;
          case 1: // Right
            cometRef.current.x = canvas.width + 20;
            cometRef.current.y = Math.random() * canvas.height;
            cometRef.current.vx = -(Math.random() * 2.5 + 2);
            cometRef.current.vy = (Math.random() - 0.5) * 3;
            break;
          case 2: // Bottom
            cometRef.current.x = Math.random() * canvas.width;
            cometRef.current.y = canvas.height + 20;
            cometRef.current.vx = (Math.random() - 0.5) * 3;
            cometRef.current.vy = -(Math.random() * 2.5 + 2);
            break;
          case 3: // Left
            cometRef.current.x = -20;
            cometRef.current.y = Math.random() * canvas.height;
            cometRef.current.vx = Math.random() * 2.5 + 2;
            cometRef.current.vy = (Math.random() - 0.5) * 3;
            break;
        }
      }
    };

    const animate = (time: number) => {
      // Deep navy/near-black space background
      ctx.fillStyle = '#0a0a12';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // CONTINUOUS VISIBLE DRIFT - 30-60 second full loop
      // Noticeable movement in 10-20 seconds
      // At 60fps, to cross ~1920px in 45 seconds = ~0.71px per frame
      driftXRef.current += 0.6; // Visible drift
      driftYRef.current += 0.35; // Slower vertical drift
      
      // Draw stars with 3-layer parallax and seamless wraparound
      starsRef.current.forEach(star => {
        // Layer-specific drift speeds - ALL layers move
        let layerSpeed = 0;
        if (star.layer === 'far') {
          layerSpeed = 0.3; // Very slow but visible
        } else if (star.layer === 'mid') {
          layerSpeed = 0.65; // Medium drift
        } else {
          layerSpeed = 1.0; // Fastest drift
        }
        
        // ACTUALLY APPLY DRIFT TO RENDERED POSITIONS
        const offsetX = (driftXRef.current * layerSpeed);
        const offsetY = (driftYRef.current * layerSpeed * 0.5);
        
        // Calculate star position with seamless wraparound
        let starX = (star.x + offsetX) % canvas.width;
        let starY = (star.y + offsetY) % canvas.height;
        
        // Ensure positive wraparound (seamless loop)
        if (starX < 0) starX += canvas.width;
        if (starY < 0) starY += canvas.height;
        
        // Calculate opacity with VISIBLE twinkle
        let opacity = star.baseOpacity;
        if (star.twinkles) {
          star.twinklePhase += star.twinkleSpeed;
          // Stronger sine wave for noticeable brightening/fading
          // 32.5% variation (within 25-40% range)
          const twinkle = Math.sin(star.twinklePhase) * 0.325;
          opacity = Math.max(0.1, Math.min(1, star.baseOpacity + twinkle));
        }
        
        // Draw star at ACTUAL DRIFTED POSITION
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(starX, starY, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Spawn comet occasionally (rare) - UNCHANGED
      if (Math.random() > 0.997) {
        spawnComet();
      }

      // Draw and update comet - UNCHANGED
      if (cometRef.current.active) {
        const comet = cometRef.current;
        
        // Draw thinner comet trail - UNCHANGED
        const trailLength = 20;
        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - comet.vx * trailLength,
          comet.y - comet.vy * trailLength
        );
        gradient.addColorStop(0, 'rgba(220, 235, 255, 0.85)');
        gradient.addColorStop(0.4, 'rgba(200, 220, 255, 0.25)');
        gradient.addColorStop(1, 'rgba(180, 200, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(comet.x - comet.vx * trailLength, comet.y - comet.vy * trailLength);
        ctx.stroke();
        
        // Draw small comet head - UNCHANGED
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
        
        // Update comet position - UNCHANGED
        comet.x += comet.vx * 1.8;
        comet.y += comet.vy * 1.8;
        comet.age++;
        
        // Remove comet if out of bounds - UNCHANGED
        if (
          comet.x < -100 || comet.x > canvas.width + 100 ||
          comet.y < -100 || comet.y > canvas.height + 100 ||
          comet.age > 100
        ) {
          comet.active = false;
        }
      }

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#0a0a12' }}
    />
  );
}