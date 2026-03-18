import { motion } from 'motion/react';

export function InfrastructureRevealSection() {
  const pills = ['Performance Engine', 'Authority Layer', 'Conversion System'];

  return (
    <section id="infrastructure-section" className="relative bg-[#0a0a12] py-24 md:py-32 lg:py-20 overflow-hidden">
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B12] via-[#0a0a12] to-[#0F172A]" />
      
      {/* Atmospheric purple/blue glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#7F4EFF] opacity-[0.08] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#3858FF] opacity-[0.06] blur-[100px] rounded-full" />
      </div>

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center lg:text-left"
          >
            {/* Energy beam glow behind headline - desktop only */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-[120%] h-[2px] opacity-0 lg:opacity-100 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7F4EFF] to-transparent blur-[30px] opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3858FF] to-transparent blur-[60px] opacity-20" />
            </div>

            <h2 className="relative text-[44px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight">
              <h2 className="text-[44px] md:text-[56px] lg:text-[72px] font-bold text-white inline-block m-0 leading-[1.1] tracking-tight">
                Growth Is Not a Campaign.
              </h2>
              <h2 className="leading-[1.1] tracking-tight block text-[44px] md:text-[56px] lg:text-[72px] font-bold">
                It Is <h2 className="leading-[1.1] tracking-tight text-[44px] md:text-[56px] lg:text-[72px] font-bold bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">Infrastructure.</h2>
              </h2>
            </h2>
          </motion.div>

          {/* RIGHT SIDE - Description and Pills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start"
          >
            <p className="text-[20px] md:text-[24px] lg:text-[26px] leading-[1.5] text-[#D4DBE8] max-w-[480px]">
              We architect compounding growth systems across all digital marketing agency services: paid, search, AI discovery, creative, and automation, engineered for scale and longevity in the Africa.
            </p>

            {/* Pill tags */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start max-w-[480px]">
              {pills.map((pill, index) => (
                <motion.div
                  key={pill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.01] backdrop-blur-sm hover:border-white/[0.14] hover:bg-white/[0.02] transition-all duration-300"
                >
                  <span className="text-[13px] tracking-[0.08em] uppercase text-white/60 font-medium">
                    {pill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}