import { motion } from "motion/react";
import { PrimaryButton } from "@/app/components/buttons/PrimaryButton";
import { useState } from "react";
import mariaPhoto from "@/assets/maria.png";

export function LeadershipSection() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 1000);
  };

  return (
    <section id="about" className="bg-[#0B0B12] py-32 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Two-column layout: Portrait (left) + Text (right) */}
        <div className="grid lg:grid-cols-[28%_1fr] gap-12 lg:gap-16 items-center lg:items-start">
          {/* LEFT: Portrait with animated neon frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-[220px] lg:max-w-[280px] mx-auto lg:ml-auto lg:mr-0"
          >
            {/* Soft glow behind portrait */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#B44CFF]/15 via-[#5A7CFF]/10 to-transparent blur-3xl"
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Animated gradient border frame */}
            <div
              className="relative rounded-[24px] overflow-hidden group"
              id="About"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-70"
                style={{
                  background:
                    "linear-gradient(0deg, #B44CFF, #5A7CFF, #E879F9, #B44CFF)",
                }}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner container to create border effect */}
              <div className="absolute inset-[4px] bg-[#0B0B12] rounded-[20px]" />

              {/* Portrait container with breathing space */}
              <div className="relative p-6 bg-transparent rounded-[24px] z-10">
                <div className="relative overflow-hidden rounded-[18px]">
                  {/* Black & white portrait with soft luxury monochrome */}
                  <img
                    src={mariaPhoto}
                    alt="Maria Masiri - Regional Director, Zambia"
                    className="w-full h-auto object-cover grayscale brightness-110 contrast-95"
                    width="600"
                    height="700"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Clipped corner accents - subtle authority interface signature */}
              {/* Top-right corner */}
              <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-4 h-4 border-t-[1.5px] border-r-[1.5px] border-[#5A7CFF]/40"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
                />
              </div>

              {/* Bottom-left corner */}
              <div className="absolute bottom-0 left-0 w-6 h-6 overflow-hidden">
                <div
                  className="absolute bottom-0 left-0 w-4 h-4 border-b-[1.5px] border-l-[1.5px] border-[#B44CFF]/40"
                  style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text signature - left aligned on desktop, center on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Headline */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Regional Operator
              <br />
              <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
                On the Ground
              </span>
            </h2>

            {/* Name */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Maria Masiri
            </h3>

            {/* Role */}
            <p className="text-lg md:text-xl text-[#94A3B8]">
              Regional Director, Zambia
            </p>

            {/* Updated description sentence */}
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Leading execution in the Africa, backed by infrastructure designed
              to scale globally.
            </p>

            {/* CTA Button - gradient outline with soft glow hover */}
            <div className="flex justify-center lg:justify-start">
              <a href="tel:+260 763108811">
                <PrimaryButton className="min-w-[180px]">
                  Call Now
                </PrimaryButton>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
