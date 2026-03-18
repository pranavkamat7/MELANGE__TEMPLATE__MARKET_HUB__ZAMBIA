import { motion } from 'motion/react';

export function MarketAdaptationSection() {
  return (
    <section className="bg-white text-[#0F172A] py-32 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            One Engine
            <br />
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              Many Markets
            </span>
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#94A3B8] max-w-5xl mx-auto leading-relaxed">
            Language nuance, cultural sensitivity, and market intelligence baked into every authority system we deploy.
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#3f3f46] max-w-5xl mx-auto mt-8 leading-relaxed">
            Execution is always <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent font-medium">local</span>. The <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent font-medium">infrastructure</span> stays <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent font-medium">global</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}