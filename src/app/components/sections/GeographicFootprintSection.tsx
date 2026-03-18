import { motion } from "motion/react";

type Region =
  | "India"
  | "United Kingdom"
  | "United Arab Emirates"
  | "Singapore"
  | "Africa";

type RegionLinks = Record<Region, string>;

export function GeographicFootprintSection(): JSX.Element {
  const regions: Region[] = [
    "India",
    "United Kingdom",
    "United Arab Emirates",
    "Singapore",
    "Africa",
  ];

  const regionLinks: RegionLinks = {
    India: "https://melangedigital.co/india",
    "United Arab Emirates": "https://melangedigital.co/uae",
    "United Kingdom": "https://melangedigital.co/uk",
    Africa: "https://melangedigital.co/zambia",
    Singapore: "https://melangedigital.co/singapore",
  };

  return (
    <section className="relative bg-[#0B0B12] py-24 lg:py-12 overflow-hidden">
      {/* Subtle Mélange gradient wash behind headline */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-[#D540FF]/8 via-[#3858FF]/6 to-transparent blur-3xl pointer-events-none" />

      {/* Ultra-thin horizontal gradient line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
        >
          Built Locally
          <br />
          <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
            Connected Globally
          </span>
        </motion.h2>

        {/* Global presence strip with glowing dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 mb-8 text-base md:text-lg text-white/80"
        >
          {regions.map((region, index) => {
            const href = regionLinks[region]; // always exists due to typing

            return (
              <div key={region} className="flex items-center gap-4">
                <a
                  href={href}
                  className="transition hover:text-white underline-offset-4 hover:underline"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  {region}
                </a>

                {index < regions.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D540FF] to-[#3858FF] shadow-[0_0_8px_rgba(213,64,255,0.6)]" />
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm md:text-base text-[#94A3B8] max-w-2xl mx-auto"
        >
          Local leadership, global delivery infrastructure, tuned to each market.
        </motion.p>
      </div>
    </section>
  );
}