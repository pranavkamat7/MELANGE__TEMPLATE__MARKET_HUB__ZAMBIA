import { motion } from 'motion/react';
import { useState } from 'react';
import { MicroLabel } from '@/app/components/ui/MicroLabel';

interface Industry {
  name: string;
  description: string;
}

const industries: Industry[] = [
  {
    name: 'Healthcare & Clinics',
    description: 'Authority-led patient growth',
  },
  {
    name: 'Luxury Real Estate',
    description: 'High-ticket buyer visibility',
  },
  {
    name: 'Hospitality & Lifestyle',
    description: 'Demand capture for premium brands',
  },
  {
    name: 'Private Education',
    description: 'Enrollment authority systems',
  },
  {
    name: 'High-End B2B Services',
    description: 'Executive trust positioning',
  },
  {
    name: 'Ecommerce & Retail',
    description: 'Performance creative that converts',
  },
];

export function IndustryConstellationSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="Work" className="relative bg-[#0B0B12] py-32 lg:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Built for the Sectors 
            <br />
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              That Are Defining the Continent.
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-[#D4DBE8] max-w-4xl mx-auto leading-relaxed mb-12">
            We deploy authority content, demand capture, and premium positioning across high-trust industries.
          </p>
          <div className="text-sm md:text-base lg:text-lg text-white/60 font-light tracking-[0.3em] uppercase spectral-drift-diagonal">
            Authority Engine
          </div>
        </div>

        {/* DESKTOP: Authority Engine Rail */}
        <div className="hidden lg:block">
          {/* Rail + Nodes */}
          <div className="relative max-w-6xl mx-auto">
            {/* Horizontal Rail Line - Softened */}
            <div 
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: 'linear-gradient(90deg, #D540FF 0%, #7F4EFF 50%, #3858FF 100%)',
                opacity: 0.15
              }}
            />

            {/* Industry Nodes */}
            <div className="grid grid-cols-6 gap-4 pt-8">
              {industries.map((industry, index) => {
                const isSpotlight = index === 0 || index === 1; // Healthcare & Luxury Real Estate
                
                // Define hover color based on dot gradient
                let hoverColor = '#FFFFFF';
                if (index === 0 || index === 1) {
                  hoverColor = '#E879F9'; // Heliotrope pink for Healthcare & Luxury Real Estate
                } else if (index === 2 || index === 3) {
                  hoverColor = '#A78BFA'; // Electric violet for Hospitality & Private Education
                } else if (index === 4 || index === 5) {
                  hoverColor = '#60A5FA'; // Dodger blue for High-End B2B & Ecommerce
                }
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative flex flex-col items-center group cursor-pointer"
                  >
                    {/* Connection Line from Rail to Dot - Softened */}
                    <motion.div
                      className="absolute top-[-32px] left-1/2 -translate-x-1/2 w-[2px] h-8"
                      style={{
                        background: 'linear-gradient(180deg, rgba(127, 78, 255, 0.2) 0%, rgba(127, 78, 255, 0) 100%)',
                      }}
                      animate={{
                        opacity: hoveredIndex === index ? 0.6 : 0.15,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Glass Card Background - Revealed on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl -m-4 p-4"
                      style={{
                        background: hoveredIndex === index 
                          ? 'linear-gradient(135deg, rgba(11, 11, 18, 0.6), rgba(15, 23, 42, 0.5))'
                          : 'transparent',
                        border: hoveredIndex === index 
                          ? isSpotlight 
                            ? '1px solid rgba(213, 64, 255, 0.3)'
                            : '1px solid rgba(127, 78, 255, 0.2)'
                          : '1px solid transparent',
                        boxShadow: hoveredIndex === index 
                          ? isSpotlight
                            ? '0 20px 60px rgba(213, 64, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.03) inset'
                            : '0 20px 60px rgba(127, 78, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.02) inset'
                          : 'none',
                        backdropFilter: hoveredIndex === index ? 'blur(20px)' : 'none',
                      }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 10,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Spotlight Emphasis - Subtle glow for first two */}
                    {isSpotlight && hoveredIndex !== index && (
                      <div 
                        className="absolute inset-0 -m-4 rounded-2xl pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(213, 64, 255, 0.04), transparent 70%)',
                          opacity: index === 0 ? 1 : 0.7,
                        }}
                      />
                    )}

                    {/* Lift Container */}
                    <motion.div
                      className="relative z-10 flex flex-col items-center"
                      animate={{
                        y: hoveredIndex === index ? -8 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Node Dot */}
                      <motion.div
                        className="relative w-3 h-3 rounded-full mb-4"
                        style={{
                          background: isSpotlight 
                            ? 'linear-gradient(135deg, #D540FF, #7F4EFF)'
                            : 'linear-gradient(135deg, #7F4EFF, #3858FF)',
                          boxShadow: hoveredIndex === index 
                            ? isSpotlight
                              ? '0 0 24px rgba(213, 64, 255, 0.9), 0 0 48px rgba(213, 64, 255, 0.4)'
                              : '0 0 20px rgba(127, 78, 255, 0.8), 0 0 40px rgba(127, 78, 255, 0.3)'
                            : isSpotlight
                              ? '0 0 12px rgba(213, 64, 255, 0.5)'
                              : '0 0 8px rgba(127, 78, 255, 0.3)',
                        }}
                        animate={{
                          scale: hoveredIndex === index ? 1.4 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Gradient Glow Edge on hover */}
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute top-[-12px] -inset-6 rounded-2xl pointer-events-none"
                          style={{
                            background: isSpotlight
                              ? 'radial-gradient(circle at 50% 0%, rgba(213, 64, 255, 0.15), transparent 70%)'
                              : 'radial-gradient(circle at 50% 0%, rgba(127, 78, 255, 0.12), transparent 70%)',
                            filter: 'blur(20px)',
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      {/* Industry Text */}
                      <div className="relative text-center">
                        <motion.h3 
                          className="text-sm font-bold text-white mb-1 leading-tight"
                          animate={{
                            color: hoveredIndex === index ? hoverColor : '#FFFFFF',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {industry.name}
                        </motion.h3>
                        <motion.p 
                          className="text-xs leading-snug"
                          style={{
                            color: hoveredIndex === index 
                              ? 'rgba(212, 219, 232, 0.7)'
                              : 'rgba(212, 219, 232, 0.5)',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {industry.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE: Vertical Authority Rail */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Industry Nodes as Premium Cards */}
            <div className="space-y-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  {/* Dark Glass Card */}
                  <motion.div
                    className="relative rounded-2xl p-5"
                    style={{
                      background: 'linear-gradient(135deg, rgba(11, 11, 18, 0.8), rgba(15, 23, 42, 0.7))',
                      border: '1px solid rgba(127, 78, 255, 0.2)',
                      boxShadow: '0 10px 40px rgba(127, 78, 255, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.03) inset',
                      backdropFilter: 'blur(20px)',
                    }}
                    whileTap={{
                      scale: 0.98,
                      boxShadow: '0 5px 20px rgba(127, 78, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Premium Dot Motif */}
                    <div className="flex items-start gap-4">
                      {/* Node Dot */}
                      <motion.div
                        className="relative w-3 h-3 rounded-full mt-1 flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #7F4EFF, #3858FF)',
                          boxShadow: '0 0 12px rgba(127, 78, 255, 0.6)',
                        }}
                        whileTap={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      />

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-base font-bold mb-1 leading-tight text-white">
                          {industry.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#D4DBE8]/65">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}