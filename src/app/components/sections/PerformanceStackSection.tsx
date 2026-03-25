import { motion } from 'motion/react';
import { PrimaryButton } from '@/app/components/buttons/PrimaryButton';
import { useState } from 'react';

export function PerformanceStackSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  
  const flowNodes = [
    { label: 'Search Demand', position: 0, description: 'High-intent capture' },
    { label: 'Google Ads Entry', position: 1, description: 'Precision targeting' },
    { label: 'Landing Page', position: 2, description: 'Conversion architecture' },
    { label: 'Lead Capture', position: 3, description: 'Qualification system' },
    { label: 'Sales Pipeline', position: 4, description: 'Revenue acceleration' }
  ];

  return (
    <section className="relative bg-white pt-12 md:pt-16 lg:pt-20 pb-24 md:pb-32 lg:pb-10 overflow-hidden">
      
      {/* Subtle Mélange neuron background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <radialGradient id="neuronGlow1">
              <stop offset="0%" stopColor="#B44CFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B44CFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="neuronGlow2">
              <stop offset="0%" stopColor="#5A7CFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#5A7CFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="neuronGlow3">
              <stop offset="0%" stopColor="#E879F9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E879F9" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Background neurons */}
          {[...Array(12)].map((_, i) => {
            const x = 10 + (i * 8);
            const y = 20 + (i % 3) * 30;
            const glowId = `neuronGlow${(i % 3) + 1}`;
            return (
              <g key={`neuron-${i}`}>
                <circle cx={`${x}%`} cy={`${y}%`} r="3" fill={`url(#${glowId})`} opacity="0.6" />
                <motion.line
                  x1={`${x}%`}
                  y1={`${y}%`}
                  x2={`${x + 8}%`}
                  y2={`${y + (i % 2 === 0 ? 15 : -15)}%`}
                  stroke="#B44CFF"
                  strokeWidth="0.5"
                  opacity="0"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Centered Text Content - KEEP EXACTLY AS IS */}
        <div className="text-center max-w-[900px] mx-auto mb-16 md:mb-8">
          
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#0B0B12] mb-6"
          >
            Paid Media Built for {' '}
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              Acquisition Economics.
            </span>
          </motion.h2>
          
          {/* Subheadline */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl md:text-3xl font-medium text-[#0B0B12] mb-4"
          >
            Return on Ad Spend That Justifies Itself.
          </motion.h3>
          
          {/* Supporting Sentence */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[18px] md:text-[20px] leading-[1.6] text-[#0B0B12]/50 max-w-[700px] mx-auto"
          >
            We architect Google Ads campaigns for businesses that deliver qualified leads at sustainable costs with complete visibility into every penny spent.
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center mb-16 md:mb-10"
        >
          <a href="https://cal.id/sanket-bolinjkar/discovery-call?duration=30" >
            <PrimaryButton variant="dark" className="min-w-[160px]">Let's Talk</PrimaryButton>
          </a>
          
        </motion.div>

        {/* Glassmorphism Container for Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-[1100px] mx-auto"
        >
          {/* Glass container */}
          <div className="relative rounded-3xl border border-[#0B0B12]/[0.06] bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(11,11,18,0.08)] overflow-hidden">
            
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B44CFF]/[0.02] via-transparent to-[#5A7CFF]/[0.02] pointer-events-none" />
            
            {/* Desktop: Horizontal Flow */}
            <div className="hidden md:block relative px-10 py-12">
              {/* Animated gradient mesh background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0B0B12] to-[#0F172A]"
                  animate={{
                    background: [
                      'linear-gradient(135deg, #0F172A 0%, #0B0B12 50%, #0F172A 100%)',
                      'linear-gradient(135deg, #0B0B12 0%, #0F172A 50%, #0B0B12 100%)',
                      'linear-gradient(135deg, #0F172A 0%, #0B0B12 50%, #0F172A 100%)',
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating gradient orbs */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`orb-${i}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: '50%',
                      width: '200px',
                      height: '200px',
                      background: `radial-gradient(circle, ${
                        i % 3 === 0 ? '#B44CFF' : i % 3 === 1 ? '#E879F9' : '#5A7CFF'
                      }40 0%, transparent 70%)`,
                      filter: 'blur(40px)',
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.1, 0.2, 0.1],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 5 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `
                  linear-gradient(rgba(180, 76, 255, 0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(180, 76, 255, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />

              {/* Horizontal flow connector with animation */}
              <div className="relative mb-8">
                {/* Base connector line */}
                <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] opacity-30" />
                
                {/* Animated flowing energy */}
                <motion.div
                  className="absolute top-1/2 left-0 h-[3px] w-24 bg-gradient-to-r from-transparent via-[#E879F9] to-transparent blur-sm"
                  animate={{
                    x: ['-100px', 'calc(100% + 100px)']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Flow nodes - NO NUMBERS ON DESKTOP */}
                <div className="relative flex items-center justify-between">
                  {flowNodes.map((node, i) => {
                    const isFinalStep = i === flowNodes.length - 1;
                    
                    return (
                      <motion.div
                        key={node.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        whileHover={{ 
                          y: -8,
                          transition: { duration: 0.3 }
                        }}
                        className="relative flex flex-col items-center group cursor-pointer"
                      >
                        {/* Outer glow - expands on hover */}
                        <motion.div 
                          className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#E879F9] via-[#B44CFF] to-[#5A7CFF] blur-lg"
                          initial={{ opacity: isFinalStep ? 0.3 : 0.2, scale: 1 }}
                          whileHover={{ 
                            opacity: isFinalStep ? 0.5 : 0.4,
                            scale: 1.3,
                            transition: { duration: 0.3 }
                          }}
                        />
                        
                        {/* Pulsing ring */}
                        <motion.div
                          className="absolute w-4 h-4 rounded-full border-2 border-[#E879F9]"
                          animate={{
                            scale: [1, 3, 1],
                            opacity: [0.8, 0, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4
                          }}
                        />
                        
                        {/* Main orb - NO NUMBER */}
                        <motion.div 
                          className="relative w-4 h-4 rounded-full bg-gradient-to-br from-[#E879F9] via-[#B44CFF] to-[#5A7CFF] mb-6"
                          style={{
                            boxShadow: isFinalStep 
                              ? '0 0 40px rgba(232, 121, 249, 0.7), 0 0 80px rgba(180, 76, 255, 0.5)'
                              : '0 0 30px rgba(232, 121, 249, 0.5), 0 0 60px rgba(180, 76, 255, 0.3)'
                          }}
                          whileHover={{
                            scale: 1.5,
                            boxShadow: '0 0 50px rgba(232, 121, 249, 0.9), 0 0 100px rgba(180, 76, 255, 0.7)',
                            transition: { duration: 0.3 }
                          }}
                        />

                        {/* Label - scales and glows on hover */}
                        <motion.p 
                          className={`text-white text-xs font-light uppercase tracking-[2.5px] mb-2 text-center ${isFinalStep ? 'font-semibold' : ''}`}
                          style={{
                            filter: isFinalStep 
                              ? 'drop-shadow(0px 0px 15px rgba(232, 121, 249, 0.8))'
                              : 'none'
                          }}
                          whileHover={{
                            scale: 1.05,
                            filter: 'drop-shadow(0px 0px 20px rgba(232, 121, 249, 1))',
                            transition: { duration: 0.3 }
                          }}
                        >
                          {node.label}
                        </motion.p>

                        {/* Gradient underline - expands on hover */}
                        <motion.div 
                          className={`${isFinalStep ? 'h-[3px]' : 'h-[2px]'} w-12 rounded-full bg-gradient-to-r from-[#E879F9] via-[#B44CFF] to-[#5A7CFF] mb-2`}
                          style={{
                            filter: isFinalStep
                              ? 'drop-shadow(0px 0px 15px rgba(232, 121, 249, 1))'
                              : 'drop-shadow(0px 0px 10px rgba(180, 76, 255, 0.8))'
                          }}
                          whileHover={{
                            width: '80px',
                            filter: 'drop-shadow(0px 0px 25px rgba(232, 121, 249, 1)) drop-shadow(0px 0px 50px rgba(180, 76, 255, 1))',
                            transition: { duration: 0.3 }
                          }}
                        />

                        {/* Description - fades in on hover */}
                        <motion.p 
                          className="text-white/90 text-xs font-medium text-center max-w-[120px]"
                          initial={{ opacity: 0.9 }}
                          whileHover={{
                            opacity: 1,
                            scale: 1.05,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {node.description}
                        </motion.p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile: Vertical Flow with Premium Spacing */}
            <div className="md:hidden relative px-6 py-11">
              {/* Dark gradient background - matching desktop */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0B0B12] to-[#0F172A]" />
                
                {/* Grid pattern overlay - matching desktop */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `
                    linear-gradient(rgba(180, 76, 255, 0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(180, 76, 255, 0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }} />

                {/* Subtle gradient orbs - matching desktop feel */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-[#B44CFF]/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-[#5A7CFF]/20 to-transparent rounded-full blur-3xl" />
              </div>
              
              {/* Animated vertical glow line - glowing energy flow */}
              <div className="absolute left-7 top-20 bottom-20 w-[3px] rounded-full overflow-hidden">
                {/* Base line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B44CFF]/50 to-transparent" />
                
                {/* Animated glow traveling down */}
                <motion.div
                  className="absolute w-full h-20 bg-gradient-to-b from-transparent via-[#E879F9] to-transparent blur-sm"
                  animate={{
                    y: ['-100%', '500%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              <div className="relative space-y-6">
                {flowNodes.map((node, i) => {
                  const isExpanded = expandedStep === i;
                  const isFinalStep = i === flowNodes.length - 1;
                  
                  return (
                    <motion.div
                      key={node.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      className="relative"
                    >
                      <button
                        onClick={() => setExpandedStep(isExpanded ? null : i)}
                        className="w-full flex items-center gap-4 text-left"
                      >
                        {/* Node circle - ALL SAME SIZE WITH TAP ANIMATION */}
                        <motion.div 
                          className="relative flex-shrink-0"
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* Outer glow - stronger for final step */}
                          <motion.div 
                            className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#E879F9] via-[#B44CFF] to-[#5A7CFF] blur-md"
                            style={{
                              opacity: isFinalStep ? 0.3 : 0.15
                            }}
                            animate={{
                              scale: isExpanded ? 1.2 : 1,
                              opacity: isExpanded ? (isFinalStep ? 0.5 : 0.3) : (isFinalStep ? 0.3 : 0.15)
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Main orb - ALL SAME SIZE WITH EXPAND ANIMATION */}
                          <motion.div 
                            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#E879F9] via-[#B44CFF] to-[#5A7CFF] flex items-center justify-center transition-all duration-300"
                            style={{
                              boxShadow: isFinalStep 
                                ? '0 0 40px rgba(232, 121, 249, 0.7), 0 0 80px rgba(180, 76, 255, 0.5)'
                                : '0 0 30px rgba(232, 121, 249, 0.5), 0 0 60px rgba(180, 76, 255, 0.3)'
                            }}
                            animate={{
                              boxShadow: isExpanded
                                ? '0 0 50px rgba(232, 121, 249, 0.9), 0 0 100px rgba(180, 76, 255, 0.7)'
                                : isFinalStep 
                                  ? '0 0 40px rgba(232, 121, 249, 0.7), 0 0 80px rgba(180, 76, 255, 0.5)'
                                  : '0 0 30px rgba(232, 121, 249, 0.5), 0 0 60px rgba(180, 76, 255, 0.3)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-white font-black text-lg">{i + 1}</span>
                          </motion.div>
                        </motion.div>

                        {/* Label text WITH ANIMATION */}
                        <motion.div 
                          className="flex-1"
                          animate={{
                            x: isExpanded ? 4 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="relative">
                            <motion.p 
                              className={`text-white text-sm font-light uppercase tracking-[3.5px] transition-all duration-300 ${isFinalStep ? 'font-semibold' : ''}`}
                              style={{
                                filter: isFinalStep 
                                  ? 'drop-shadow(0px 0px 15px rgba(232, 121, 249, 0.8))'
                                  : 'none'
                              }}
                              animate={{
                                filter: isExpanded
                                  ? 'drop-shadow(0px 0px 20px rgba(232, 121, 249, 1))'
                                  : isFinalStep 
                                    ? 'drop-shadow(0px 0px 15px rgba(232, 121, 249, 0.8))'
                                    : 'none'
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {node.label}
                            </motion.p>
                            {/* Gradient underline - thicker for final step WITH EXPAND ANIMATION */}
                            <motion.div 
                              className={`mt-1.5 ${isFinalStep ? 'h-[4px]' : 'h-[3px]'} rounded-full bg-gradient-to-r from-[#E879F9] via-[#B44CFF] to-[#5A7CFF] transition-all duration-300`}
                              style={{
                                filter: isFinalStep
                                  ? 'drop-shadow(0px 0px 25px rgba(232, 121, 249, 1)) drop-shadow(0px 0px 50px rgba(180, 76, 255, 1))'
                                  : 'drop-shadow(0px 0px 20px rgba(232, 121, 249, 1)) drop-shadow(0px 0px 40px rgba(180, 76, 255, 0.9))'
                              }}
                              animate={{
                                width: isExpanded ? '96px' : '64px',
                                filter: isExpanded
                                  ? 'drop-shadow(0px 0px 30px rgba(232, 121, 249, 1)) drop-shadow(0px 0px 60px rgba(180, 76, 255, 1))'
                                  : isFinalStep
                                    ? 'drop-shadow(0px 0px 25px rgba(232, 121, 249, 1)) drop-shadow(0px 0px 50px rgba(180, 76, 255, 1))'
                                    : 'drop-shadow(0px 0px 20px rgba(232, 121, 249, 1)) drop-shadow(0px 0px 40px rgba(180, 76, 255, 0.9))'
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </motion.div>

                        {/* Expand indicator */}
                        <motion.div
                          className="flex-shrink-0 text-white/40"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                              d="M5 7.5L10 12.5L15 7.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      </button>

                      {/* Expandable description */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-[72px] pr-4 pt-3 pb-1">
                          <p className="text-sm text-white/60 font-medium">
                            {node.description}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Outer glow effect for glass container */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#B44CFF]/[0.06] to-[#5A7CFF]/[0.06] blur-xl -z-10 opacity-50" />
        </motion.div>

      </div>
    </section>
  );
}