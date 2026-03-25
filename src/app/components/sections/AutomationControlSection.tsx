import { motion } from 'motion/react';
import { useState } from 'react';
import { Database, Zap, GitBranch, TrendingUp } from 'lucide-react';

const nodes = [
  { 
    id: 1, 
    label: 'CRM', 
    subtitle: 'Unified Data',
    microOutcome: 'One source of truth',
    icon: Database 
  },
  { 
    id: 2, 
    label: 'Outbound Automation', 
    subtitle: 'Scaled Outreach',
    microOutcome: 'Volume without chaos',
    icon: Zap 
  },
  { 
    id: 3, 
    label: 'Lead Orchestration', 
    subtitle: 'Intelligent Routing',
    microOutcome: 'Zero lost leads',
    icon: GitBranch 
  },
  { 
    id: 4, 
    label: 'Revenue Pipeline', 
    subtitle: 'Conversion Engine',
    microOutcome: 'Predictable growth',
    icon: TrendingUp,
    isOutcome: true 
  },
];

export function AutomationControlSection() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section className="bg-white text-[#0F172A] py-24 md:py-32 lg:py-20 relative overflow-hidden">
      {/* Premium grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180, 76, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180, 76, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(180, 76, 255, 0.03), transparent)',
          }}
        />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              Intelligent Systems. Predictable Revenue.
            </span>
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#94A3B8] max-w-5xl mx-auto leading-relaxed">
            CRM, revenue pipelines, and outbound automation are designed to help firms grow quickly without the operational chaos that stifles progress.
          </p>
        </div>

        {/* DESKTOP: HORIZONTAL PIPELINE IN DARK GLASS PANEL */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl p-12 lg:p-16"
            style={{
              background: 'linear-gradient(135deg, rgba(11, 11, 18, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
              border: '1px solid rgba(127, 78, 255, 0.2)',
              boxShadow: `
                0 40px 100px rgba(0, 0, 0, 0.3),
                0 0 0 1px rgba(127, 78, 255, 0.1) inset,
                0 2px 0 rgba(255, 255, 255, 0.03) inset
              `,
            }}
          >
            {/* Film grain overlay */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
              }}
            />

            {/* Bridge Line - Inside container at top */}
            <div className="mb-12 text-center relative z-10">
              <p className="text-sm md:text-base lg:text-lg text-white/60 font-light tracking-[0.3em] uppercase max-w-4xl mx-auto leading-[1.8] spectral-drift-diagonal">
                We build the operational infrastructure that closes the gap.
              </p>
            </div>

            <div className="relative" style={{ height: '360px' }}>
              {/* Neon signal connector line with pulsing animation */}
              <div className="absolute top-[160px] left-0 right-0 flex items-center justify-center">
                <div className="relative w-full max-w-[1000px] h-[2px]">
                  {/* Background glow */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(127, 78, 255, 0.3) 10%, rgba(127, 78, 255, 0.3) 90%, transparent)',
                      boxShadow: '0 0 30px rgba(127, 78, 255, 0.4)',
                    }}
                  />
                  
                  {/* Pulsing connector animation */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(232, 121, 249, 0.6) 50%, transparent)',
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Animated signal particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`signal-${i}`}
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(232, 121, 249, 1), rgba(127, 78, 255, 0.8))',
                        boxShadow: '0 0 12px rgba(232, 121, 249, 0.9), 0 0 24px rgba(232, 121, 249, 0.5)',
                        left: 0,
                      }}
                      animate={{
                        left: ['0%', '100%'],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.375,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  ))}

                  {/* Enhanced connection on hover */}
                  {hoveredNode !== null && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute inset-0 origin-left rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, rgba(213, 64, 255, 0.5), rgba(127, 78, 255, 0.5))',
                        boxShadow: '0 0 40px rgba(213, 64, 255, 0.7)',
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Pipeline Nodes */}
              <div className="relative h-full flex items-center justify-between max-w-[1000px] mx-auto">
                {nodes.map((node, i) => {
                  const Icon = node.icon;
                  const isOutcome = node.isOutcome;
                  
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.8, 
                        delay: i * 0.15,
                        type: 'spring',
                        bounce: 0.4
                      }}
                      onMouseEnter={() => setHoveredNode(i)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="relative flex flex-col items-center"
                      style={{ zIndex: hoveredNode === i ? 20 : 10 }}
                    >
                      {/* Node container */}
                      <motion.div
                        className="relative"
                        animate={hoveredNode === i ? { y: -12 } : { y: 0 }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                      >
                        {/* Outer energy ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            width: isOutcome ? '180px' : '140px',
                            height: isOutcome ? '180px' : '140px',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                          }}
                          animate={hoveredNode === i ? {
                            scale: [1, 1.15, 1],
                            opacity: [0.3, 0.6, 0.3],
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div
                            className="w-full h-full rounded-full"
                            style={{
                              background: hoveredNode === i 
                                ? 'radial-gradient(circle, rgba(213, 64, 255, 0.4), transparent 60%)'
                                : 'radial-gradient(circle, rgba(127, 78, 255, 0.2), transparent 60%)',
                              filter: 'blur(25px)',
                            }}
                          />
                        </motion.div>

                        {/* Rotating orbital ring */}
                        {hoveredNode === i && (
                          <motion.div
                            className="absolute"
                            style={{
                              width: isOutcome ? '130px' : '110px',
                              height: isOutcome ? '130px' : '110px',
                              left: '50%',
                              top: '50%',
                              transform: 'translate(-50%, -50%)',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                          >
                            <div
                              className="w-full h-full rounded-full"
                              style={{
                                border: '1px solid transparent',
                                borderTopColor: 'rgba(213, 64, 255, 0.7)',
                                borderRightColor: 'rgba(127, 78, 255, 0.4)',
                              }}
                            />
                          </motion.div>
                        )}

                        {/* Main node container */}
                        <div className={isOutcome ? 'relative w-[120px] h-[120px]' : 'relative w-[100px] h-[100px]'}>
                          {/* Glass container */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                              background: hoveredNode === i
                                ? 'linear-gradient(135deg, rgba(20, 25, 40, 0.9), rgba(15, 20, 35, 0.95))'
                                : 'linear-gradient(135deg, rgba(20, 25, 40, 0.8), rgba(15, 20, 35, 0.85))',
                              border: hoveredNode === i
                                ? isOutcome 
                                  ? '2px solid rgba(213, 64, 255, 0.7)'
                                  : '2px solid rgba(127, 78, 255, 0.6)'
                                : isOutcome
                                  ? '1.5px solid rgba(213, 64, 255, 0.4)'
                                  : '1px solid rgba(127, 78, 255, 0.3)',
                              boxShadow: hoveredNode === i
                                ? isOutcome
                                  ? '0 20px 60px rgba(213, 64, 255, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                                  : '0 20px 60px rgba(127, 78, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08) inset'
                                : isOutcome
                                  ? '0 10px 40px rgba(213, 64, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
                                  : '0 10px 40px rgba(127, 78, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.04) inset',
                              backdropFilter: 'blur(20px)',
                              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                            animate={hoveredNode === i ? { scale: 1.08 } : { scale: 1 }}
                          >
                            {/* Inner gradient accent */}
                            <div
                              className="absolute inset-0 rounded-2xl"
                              style={{
                                background: hoveredNode === i
                                  ? isOutcome
                                    ? 'radial-gradient(circle at 30% 30%, rgba(213, 64, 255, 0.25), transparent 60%)'
                                    : 'radial-gradient(circle at 30% 30%, rgba(127, 78, 255, 0.2), transparent 60%)'
                                  : isOutcome
                                    ? 'radial-gradient(circle at 30% 30%, rgba(213, 64, 255, 0.15), transparent 60%)'
                                    : 'radial-gradient(circle at 30% 30%, rgba(127, 78, 255, 0.1), transparent 60%)',
                              }}
                            />

                            {/* Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.div
                                animate={hoveredNode === i ? { rotate: [0, -8, 8, 0] } : {}}
                                transition={{ duration: 0.6 }}
                              >
                                <Icon
                                  size={isOutcome ? 48 : 40}
                                  strokeWidth={1.5}
                                  style={{
                                    color: isOutcome ? '#D540FF' : '#7F4EFF',
                                    filter: hoveredNode === i 
                                      ? isOutcome
                                        ? 'drop-shadow(0 0 16px rgba(213, 64, 255, 0.7))'
                                        : 'drop-shadow(0 0 14px rgba(127, 78, 255, 0.6))'
                                      : isOutcome
                                        ? 'drop-shadow(0 0 10px rgba(213, 64, 255, 0.4))'
                                        : 'drop-shadow(0 0 8px rgba(127, 78, 255, 0.3))',
                                    transition: 'all 0.5s ease',
                                  }}
                                />
                              </motion.div>
                            </div>
                          </motion.div>

                          {/* Corner accents */}
                          {hoveredNode === i && (
                            <>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute -top-1 -left-1 w-3 h-3 rounded-full"
                                style={{
                                  background: isOutcome 
                                    ? 'linear-gradient(135deg, #D540FF, #E879F9)'
                                    : 'linear-gradient(135deg, #7F4EFF, #D540FF)',
                                  boxShadow: isOutcome
                                    ? '0 0 16px rgba(213, 64, 255, 0.9)'
                                    : '0 0 14px rgba(127, 78, 255, 0.8)',
                                }}
                              />
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full"
                                style={{
                                  background: 'linear-gradient(135deg, #3858FF, #7F4EFF)',
                                  boxShadow: '0 0 14px rgba(56, 88, 255, 0.8)',
                                }}
                              />
                            </>
                          )}
                        </div>

                        {/* Number badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + 0.5, type: 'spring' }}
                          className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{
                            background: hoveredNode === i
                              ? isOutcome
                                ? 'linear-gradient(135deg, #D540FF, #E879F9)'
                                : 'linear-gradient(135deg, #7F4EFF, #D540FF)'
                              : 'linear-gradient(135deg, #7F4EFF, #3858FF)',
                            color: '#FFFFFF',
                            boxShadow: hoveredNode === i
                              ? isOutcome
                                ? '0 0 24px rgba(213, 64, 255, 0.8), 0 4px 12px rgba(0, 0, 0, 0.3)'
                                : '0 0 20px rgba(127, 78, 255, 0.7), 0 4px 12px rgba(0, 0, 0, 0.25)'
                              : '0 0 16px rgba(127, 78, 255, 0.5), 0 4px 12px rgba(0, 0, 0, 0.2)',
                            transition: 'all 0.5s ease',
                          }}
                        >
                          {String(node.id).padStart(2, '0')}
                        </motion.div>
                      </motion.div>

                      {/* Labels with micro-outcome */}
                      <div className="mt-8 text-center max-w-[160px]">
                        <h3
                          className="text-lg font-bold mb-1 tracking-tight transition-all duration-500"
                          style={{
                            color: hoveredNode === i 
                              ? isOutcome ? '#D540FF' : '#E879F9'
                              : 'rgba(255, 255, 255, 0.9)',
                          }}
                        >
                          {node.label}
                        </h3>
                        <p 
                          className="text-sm mb-2 transition-all duration-500"
                          style={{
                            color: hoveredNode === i ? '#E879F9' : 'rgba(255, 255, 255, 0.5)',
                          }}
                        >
                          {node.subtitle}
                        </p>
                        {/* Micro-outcome text */}
                        <p 
                          className="text-xs font-medium transition-all duration-500"
                          style={{
                            color: hoveredNode === i 
                              ? isOutcome ? '#D540FF' : '#7F4EFF'
                              : 'rgba(127, 78, 255, 0.6)',
                          }}
                        >
                          {node.microOutcome}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* MOBILE: VERTICAL PIPELINE IN DARK GLASS PANEL */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(11, 11, 18, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
              border: '1px solid rgba(127, 78, 255, 0.2)',
              boxShadow: `
                0 40px 100px rgba(0, 0, 0, 0.3),
                0 0 0 1px rgba(127, 78, 255, 0.1) inset,
                0 2px 0 rgba(255, 255, 255, 0.03) inset
              `,
            }}
          >
            {/* Film grain overlay */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
              }}
            />

            {/* Bridge Line - Inside container at top */}
            <div className="mb-8 text-center relative z-10">
              <p className="text-sm md:text-base text-white/60 font-light tracking-[0.3em] uppercase max-w-4xl mx-auto leading-[1.8] spectral-drift-diagonal">
                We build the operational infrastructure that closes the gap.
              </p>
            </div>

            <div className="relative space-y-10">
              {nodes.map((node, i) => {
                const Icon = node.icon;
                const isOutcome = node.isOutcome;
                
                return (
                  <div key={node.id} className="relative">
                    {/* Node */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.7, 
                        delay: i * 0.1,
                        type: 'spring',
                        bounce: 0.4
                      }}
                      className="flex flex-col items-center relative"
                    >
                      {/* Labels above node */}
                      <div className="text-center mb-4 relative z-20">
                        <h3 
                          className="text-xl md:text-2xl font-bold mb-1 tracking-tight"
                          style={{ color: isOutcome ? '#D540FF' : 'rgba(255, 255, 255, 0.95)' }}
                        >
                          {node.label}
                        </h3>
                        <p 
                          className="text-sm md:text-base mb-1"
                          style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        >
                          {node.subtitle}
                        </p>
                        <p 
                          className="text-xs font-medium"
                          style={{ color: isOutcome ? '#D540FF' : 'rgba(127, 78, 255, 0.7)' }}
                        >
                          {node.microOutcome}
                        </p>
                      </div>

                      {/* Outer pulsing energy rings */}
                      <motion.div
                        className="absolute"
                        style={{
                          width: isOutcome ? '160px' : '140px',
                          height: isOutcome ? '160px' : '140px',
                          top: '70px',
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <div
                          className="w-full h-full rounded-full"
                          style={{
                            background: isOutcome
                              ? 'radial-gradient(circle, rgba(213, 64, 255, 0.4), transparent 65%)'
                              : 'radial-gradient(circle, rgba(127, 78, 255, 0.3), transparent 65%)',
                            filter: 'blur(30px)',
                          }}
                        />
                      </motion.div>

                      {/* Rotating gradient ring */}
                      <motion.div
                        className="absolute"
                        style={{
                          width: isOutcome ? '130px' : '110px',
                          height: isOutcome ? '130px' : '110px',
                          top: '85px',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      >
                        <div
                          className="w-full h-full rounded-full"
                          style={{
                            border: '1px solid transparent',
                            borderTopColor: isOutcome 
                              ? 'rgba(213, 64, 255, 0.5)'
                              : 'rgba(127, 78, 255, 0.4)',
                            borderRightColor: isOutcome
                              ? 'rgba(127, 78, 255, 0.3)'
                              : 'rgba(127, 78, 255, 0.25)',
                          }}
                        />
                      </motion.div>

                      {/* Main node container */}
                      <div className={isOutcome ? 'relative w-[120px] h-[120px]' : 'relative w-[110px] h-[110px]'}>
                        {/* Glass container */}
                        <motion.div
                          className="absolute inset-0 rounded-[28px]"
                          style={{
                            background: 'linear-gradient(135deg, rgba(20, 25, 40, 0.9), rgba(15, 20, 35, 0.95))',
                            border: isOutcome
                              ? '2px solid rgba(213, 64, 255, 0.6)'
                              : '1.5px solid rgba(127, 78, 255, 0.4)',
                            boxShadow: isOutcome
                              ? `
                                0 20px 60px rgba(213, 64, 255, 0.4),
                                0 10px 30px rgba(127, 78, 255, 0.3),
                                0 0 0 1px rgba(255, 255, 255, 0.08) inset,
                                0 2px 0 rgba(255, 255, 255, 0.1) inset
                              `
                              : `
                                0 20px 60px rgba(127, 78, 255, 0.3),
                                0 10px 30px rgba(127, 78, 255, 0.2),
                                0 0 0 1px rgba(255, 255, 255, 0.06) inset,
                                0 2px 0 rgba(255, 255, 255, 0.08) inset
                              `,
                            backdropFilter: 'blur(20px)',
                          }}
                          animate={{
                            y: [-2, 2, -2],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.2,
                          }}
                        >
                          {/* Inner gradient accent */}
                          <div
                            className="absolute inset-0 rounded-[28px]"
                            style={{
                              background: isOutcome
                                ? 'radial-gradient(circle at 35% 35%, rgba(213, 64, 255, 0.25), transparent 65%)'
                                : 'radial-gradient(circle at 35% 35%, rgba(127, 78, 255, 0.18), transparent 65%)',
                            }}
                          />

                          {/* Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: i * 0.3,
                              }}
                            >
                              <Icon
                                size={isOutcome ? 52 : 48}
                                strokeWidth={1.5}
                                style={{
                                  color: isOutcome ? '#D540FF' : '#7F4EFF',
                                  filter: isOutcome
                                    ? 'drop-shadow(0 0 18px rgba(213, 64, 255, 0.7))'
                                    : 'drop-shadow(0 0 16px rgba(127, 78, 255, 0.6))',
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Corner accent dots */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.5, type: 'spring' }}
                          className="absolute -top-2 -left-2 w-3 h-3 rounded-full"
                          style={{
                            background: isOutcome
                              ? 'linear-gradient(135deg, #D540FF, #E879F9)'
                              : 'linear-gradient(135deg, #7F4EFF, #D540FF)',
                            boxShadow: isOutcome
                              ? '0 0 16px rgba(213, 64, 255, 0.9)'
                              : '0 0 14px rgba(127, 78, 255, 0.8)',
                          }}
                        />
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.6, type: 'spring' }}
                          className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, #3858FF, #7F4EFF)',
                            boxShadow: '0 0 14px rgba(56, 88, 255, 0.8)',
                          }}
                        />

                        {/* Number badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.4, type: 'spring', bounce: 0.5 }}
                          className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                          style={{
                            background: isOutcome
                              ? 'linear-gradient(135deg, #D540FF, #E879F9)'
                              : 'linear-gradient(135deg, #7F4EFF, #D540FF)',
                            color: '#FFFFFF',
                            boxShadow: isOutcome
                              ? '0 0 24px rgba(213, 64, 255, 0.8), 0 6px 16px rgba(0, 0, 0, 0.3)'
                              : '0 0 20px rgba(127, 78, 255, 0.7), 0 6px 16px rgba(0, 0, 0, 0.25)',
                          }}
                        >
                          {String(node.id).padStart(2, '0')}
                        </motion.div>
                      </div>

                      {/* Vertical connector with downward pulsing animation */}
                      {i < nodes.length - 1 && (
                        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-10 bottom-[-40px] z-10">
                          {/* Base line */}
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: 'linear-gradient(180deg, rgba(127, 78, 255, 0.5), rgba(127, 78, 255, 0.5))',
                              boxShadow: '0 0 20px rgba(127, 78, 255, 0.5)',
                            }}
                          />
                          
                          {/* Animated signal particles */}
                          {[0, 1].map((particleIndex) => (
                            <motion.div
                              key={`particle-${i}-${particleIndex}`}
                              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                              style={{
                                background: 'radial-gradient(circle, rgba(213, 64, 255, 1), rgba(127, 78, 255, 0.9))',
                                boxShadow: '0 0 12px rgba(213, 64, 255, 1), 0 0 24px rgba(213, 64, 255, 0.6)',
                              }}
                              animate={{
                                y: [0, 40],
                                opacity: [0, 1, 1, 0],
                                scale: [0.8, 1.2, 1, 0.8],
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.3 + particleIndex * 1,
                                repeat: Infinity,
                                ease: 'linear',
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
