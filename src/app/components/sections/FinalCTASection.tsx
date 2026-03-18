import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/app/components/buttons/PrimaryButton";

export function FinalCTASection() {
  return (
    <section className="relative bg-[#0B0B12] py-32 lg:py-10 overflow-hidden">
      {/* Premium atmospheric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial gradient overlay */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px]"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(213, 64, 255, 0.08) 0%, transparent 60%)",
          }}
        />

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-[#D540FF]/8 rounded-full blur-[140px]"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#7F4EFF]/6 rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            Build the System
            <br />
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              Own the Market
            </span>
          </h2>
          <div className="flex justify-center">
            <a href="#contact">
              <PrimaryButton className="w-auto min-w-[160px]">
                Let's Build
              </PrimaryButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
