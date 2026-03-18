import { motion } from "motion/react";
import { StarfieldBackground } from "@/app/components/StarfieldBackground";
import { LensDistortionWrapper } from "@/app/components/LensDistortionWrapper";
import { PrimaryButton } from "@/app/components/buttons/PrimaryButton";
import { MicroLabel } from "@/app/components/ui/MicroLabel";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <StarfieldBackground />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[80px] md:text-[96px] lg:text-[112px] xl:text-[120px] font-bold mb-8 tracking-tight leading-[0.95]"
        >
          <h1 className="text-white text-[80px] md:text-[96px] lg:text-[112px] xl:text-[120px] font-bold inline-block m-0 leading-none">
            Digital Marketing
          </h1>
          <br />
          <h1 className="bg-gradient-to-r from-[#d540ff] via-[#7f4eff] to-[#3858ff] bg-clip-text text-transparent text-[80px] md:text-[96px] lg:text-[112px] xl:text-[120px] font-bold inline-block m-0 leading-none">
            Agency in Zambia
          </h1>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          <span className="block font-normal text-[#D4DBE8] drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]">
            Growing markets demand 
          </span>
          <span className="block text-white font-bold mt-2 bg-gradient-to-r from-white via-[#E879F9] to-white bg-clip-text text-transparent">
            more than campaigns.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <MicroLabel className="mb-8">INITIATE SEQUENCE</MicroLabel>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="https://cal.id/sanket-bolinjkar/discovery-call">
              <PrimaryButton className="w-auto min-w-[180px]">
                Book a Call
              </PrimaryButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
