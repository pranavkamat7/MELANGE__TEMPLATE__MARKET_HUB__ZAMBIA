import { motion } from 'motion/react';

export function FinalStatementSection() {
  return (
    <section className="bg-white text-[#0F172A] py-32 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Best Brands Don't Shout.

            <br />
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              They Compound.
            </span>
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#3f3f46] max-w-5xl mx-auto leading-relaxed">
            We help brands stop competing on volume and start compounding on <span className="bg-gradient-to-r from-[#D540FF] to-[#7F4EFF] bg-clip-text text-transparent font-medium">authority</span>, <span className="bg-gradient-to-r from-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent font-medium">structure</span>, and <span className="bg-gradient-to-r from-[#3858FF] to-[#D540FF] bg-clip-text text-transparent font-medium">intelligent systems.</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}