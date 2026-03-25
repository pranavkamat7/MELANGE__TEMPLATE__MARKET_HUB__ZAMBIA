import { motion } from 'motion/react';
import { GradientDivider } from '@/app/components/ui/GradientDivider';

export function EngagementProcessSection() {
  return (
    <section className="bg-white text-[#0F172A] py-32 lg:py-18">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Steps with Mélange style - big colored word + smaller black text */}
          <div className="mb-10 lg:mb-12">
            <h2 className="text-[32px] md:text-[40px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-[#1a1a1a]">
              <span className="block">
                <span className="text-[#3858FF] text-[44px] md:text-[56px] lg:text-[72px] font-bold">Diagnose</span> What's Broken.
              </span>
              <span className="block">
                <span className="text-[#D540FF] text-[44px] md:text-[56px] lg:text-[72px] font-bold">Architect</span> What Works.
              </span>
              <span className="block">
                <span className="text-[#7F4EFF] text-[44px] md:text-[56px] lg:text-[72px] font-bold">Execute</span> With Precision.
              </span>
              <span className="block">
                <span className="text-[#3858FF] text-[44px] md:text-[56px] lg:text-[72px] font-bold">Scale</span> What's Proven.
              </span>
            </h2>
          </div>
          
          <GradientDivider className="mb-8 lg:mb-10" />
          
          {/* Subline */}
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-5xl mx-auto text-center text-[#3f3f46]">
            A  <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent font-medium">structured engagement </span> built to move from clarity to compounding results
          </p>
        </motion.div>
      </div>
    </section>
  );
}