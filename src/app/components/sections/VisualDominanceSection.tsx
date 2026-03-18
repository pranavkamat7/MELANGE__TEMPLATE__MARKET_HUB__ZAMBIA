import { motion } from 'motion/react';
import { useState } from 'react';
import { MicroLabel } from '@/app/components/ui/MicroLabel';

const heroFeature = {
  title: 'Brand Films',
  outcome: 'Clients commit faster when they see themselves in premium narrative.',
  description: 'Cinematic storytelling engineered for luxury perception and high-ticket positioning.',
};

const supportingFeatures = [
  {
    title: 'Short-Form Systems',
    outcome: 'Authority at volume without dilution.',
    description: 'Controlled high-output content that maintains brand integrity across all touchpoints.',
  },
  {
    title: 'Market Authority Layer',
    outcome: 'Luxury positioning baked into every frame.',
    description: 'Visual systems designed to dominate premium market perception from first impression.',
  }
];

export function VisualDominanceSection() {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  return (
    <section className="relative bg-[#0B0B12] py-24 md:py-32 lg:py-20 overflow-hidden">
      {/* Film grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Subtle spotlight gradient from top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(127, 78, 255, 0.08) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-8"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            If You Don't Look Premium
            <br />
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              You Don't Convert
            </span>
          </h2>
          
          {/* Bridge Line */}
          <div className="mb-12 lg:mb-16">
            <p className="text-sm md:text-base lg:text-lg text-white/60 font-light tracking-[0.3em] uppercase max-w-4xl mx-auto leading-[1.8] spectral-drift-diagonal">
              Perception is conversion. Visual authority closes before sales does.
            </p>
          </div>
        </motion.div>

        {/* Cinematic Panels Layout */}
        <div className="space-y-6 lg:space-y-8">
          {/* HERO: Brand Films - Full Width Cinematic Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredPanel(0)}
            onMouseLeave={() => setHoveredPanel(null)}
            className="group relative"
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden transition-all duration-700 ease-out active:scale-[0.99]"
              animate={hoveredPanel === 0 ? { y: -6 } : { y: 0 }}
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(11, 11, 18, 0.8) 100%)',
                border: hoveredPanel === 0 
                  ? '1px solid rgba(127, 78, 255, 0.5)' 
                  : '1px solid rgba(255, 255, 255, 0.06)',
                boxShadow: hoveredPanel === 0
                  ? '0 32px 96px rgba(127, 78, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                  : '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
              }}
            >
              {/* Animated gradient sweep on top edge */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, #D540FF, #7F4EFF, #3858FF)',
                  opacity: hoveredPanel === 0 ? 1 : 0.5,
                }}
              >
                {hoveredPanel === 0 && (
                  <motion.div
                    className="absolute top-0 h-full w-1/3"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '300%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                )}
              </motion.div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-10 p-8 lg:p-10">
                {/* Left: Visual Indicator */}
                <div className="flex flex-col justify-center items-center lg:items-start space-y-4">
                  {/* Cinematic Icon */}
                  <motion.div
                    className="relative"
                    animate={hoveredPanel === 0 ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div 
                      className="w-20 h-20 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center relative transition-all duration-700"
                      style={{
                        background: 'linear-gradient(135deg, rgba(20, 30, 50, 0.8), rgba(15, 23, 42, 0.9))',
                        border: hoveredPanel === 0 
                          ? '2px solid rgba(127, 78, 255, 0.6)' 
                          : '1px solid rgba(127, 78, 255, 0.3)',
                        boxShadow: hoveredPanel === 0
                          ? '0 0 60px rgba(127, 78, 255, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.1)'
                          : '0 0 30px rgba(127, 78, 255, 0.2)',
                      }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="heroFilmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D540FF" />
                            <stop offset="50%" stopColor="#7F4EFF" />
                            <stop offset="100%" stopColor="#3858FF" />
                          </linearGradient>
                        </defs>
                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="url(#heroFilmGradient)" strokeWidth="2" fill="none"/>
                        <path d="M9 9L9 15L15 12L9 9Z" fill="url(#heroFilmGradient)" opacity="0.9"/>
                        <rect x="2" y="6" width="2" height="2" fill="url(#heroFilmGradient)" opacity="0.9"/>
                        <rect x="2" y="11" width="2" height="2" fill="url(#heroFilmGradient)" opacity="0.9"/>
                        <rect x="2" y="16" width="2" height="2" fill="url(#heroFilmGradient)" opacity="0.9"/>
                        <rect x="20" y="6" width="2" height="2" fill="url(#heroFilmGradient)" opacity="0.9"/>
                        <rect x="20" y="11" width="2" height="2" fill="url(#heroFilmGradient)" opacity="0.9"/>
                        <rect x="20" y="16" width="2" height="2" fill="url(#heroFilmGradient)" opacity="0.9"/>
                      </svg>
                    </div>
                  </motion.div>

                  {/* Hero Label */}
                  <div className="text-center lg:text-left">
                    <div 
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-2 transition-all duration-700"
                      style={{
                        background: hoveredPanel === 0
                          ? 'linear-gradient(135deg, rgba(213, 64, 255, 0.3), rgba(127, 78, 255, 0.2))'
                          : 'linear-gradient(135deg, rgba(127, 78, 255, 0.2), rgba(56, 88, 255, 0.15))',
                        border: hoveredPanel === 0
                          ? '1px solid rgba(213, 64, 255, 0.5)'
                          : '1px solid rgba(127, 78, 255, 0.3)',
                        color: hoveredPanel === 0 ? '#D540FF' : '#7F4EFF',
                      }}
                    >
                      CINEMATIC POSITIONING
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {heroFeature.title}
                  </h3>
                  
                  {/* Outcome - Impact Line */}
                  <p className="text-xl lg:text-2xl text-[#D540FF] font-medium leading-relaxed">
                    {heroFeature.outcome}
                  </p>
                  
                  {/* Description */}
                  <p className="text-base lg:text-lg text-[#94A3B8] leading-relaxed">
                    {heroFeature.description}
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none -z-10 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle at center, rgba(127, 78, 255, 0.15), transparent 70%)',
                  filter: 'blur(40px)',
                  opacity: hoveredPanel === 0 ? 1 : 0,
                }}
              />
            </motion.div>
          </motion.div>

          {/* SUPPORTING: Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {supportingFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredPanel(i + 1)}
                onMouseLeave={() => setHoveredPanel(null)}
                className="group relative"
              >
                <motion.div 
                  className="relative rounded-2xl overflow-hidden p-8 lg:p-10 transition-all duration-700 ease-out active:scale-[0.99]"
                  animate={hoveredPanel === i + 1 ? { y: -4 } : { y: 0 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(11, 11, 18, 0.7) 100%)',
                    border: hoveredPanel === i + 1
                      ? '1px solid rgba(127, 78, 255, 0.4)' 
                      : '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: hoveredPanel === i + 1
                      ? '0 24px 72px rgba(127, 78, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)'
                      : '0 8px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
                  }}
                >
                  {/* Animated gradient sweep on top edge */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden"
                    style={{
                      background: 'linear-gradient(to right, #7F4EFF, #3858FF)',
                      opacity: hoveredPanel === i + 1 ? 1 : 0.3,
                    }}
                  >
                    {hoveredPanel === i + 1 && (
                      <motion.div
                        className="absolute top-0 h-full w-1/3"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
                        }}
                        animate={{
                          x: ['-100%', '300%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Icon with pulsing glow */}
                  <motion.div
                    className="mb-6"
                    animate={hoveredPanel === i + 1 ? { y: [-1, 1, -1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center relative transition-all duration-700"
                      animate={hoveredPanel === i + 1 ? {
                        boxShadow: [
                          '0 0 40px rgba(127, 78, 255, 0.4)',
                          '0 0 50px rgba(127, 78, 255, 0.5)',
                          '0 0 40px rgba(127, 78, 255, 0.4)',
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        background: 'linear-gradient(135deg, rgba(20, 30, 50, 0.7), rgba(15, 23, 42, 0.8))',
                        border: hoveredPanel === i + 1
                          ? '1px solid rgba(127, 78, 255, 0.6)' 
                          : '1px solid rgba(127, 78, 255, 0.2)',
                        boxShadow: hoveredPanel === i + 1
                          ? '0 0 40px rgba(127, 78, 255, 0.4)'
                          : '0 0 20px rgba(127, 78, 255, 0.15)',
                      }}
                    >
                      {/* Grid Icon for Short-Form */}
                      {i === 0 && (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="gridIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#7F4EFF" />
                              <stop offset="100%" stopColor="#3858FF" />
                            </linearGradient>
                          </defs>
                          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="url(#gridIconGradient)" strokeWidth="2" fill="none"/>
                          <rect x="13" y="3" width="8" height="7" rx="1.5" stroke="url(#gridIconGradient)" strokeWidth="2" fill="none"/>
                          <rect x="3" y="13" width="7" height="8" rx="1.5" stroke="url(#gridIconGradient)" strokeWidth="2" fill="none"/>
                          <rect x="13" y="13" width="8" height="8" rx="1.5" fill="url(#gridIconGradient)" opacity="0.5"/>
                        </svg>
                      )}

                      {/* Crown Icon for Market Authority */}
                      {i === 1 && (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="crownIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#7F4EFF" />
                              <stop offset="100%" stopColor="#3858FF" />
                            </linearGradient>
                          </defs>
                          <path d="M3 18L4 8L8 11L12 5L16 11L20 8L21 18H3Z" stroke="url(#crownIconGradient)" strokeWidth="2" fill="none"/>
                          <circle cx="4" cy="8" r="2" fill="url(#crownIconGradient)"/>
                          <circle cx="12" cy="5" r="2" fill="url(#crownIconGradient)"/>
                          <circle cx="20" cy="8" r="2" fill="url(#crownIconGradient)"/>
                          <rect x="3" y="18" width="18" height="2.5" rx="0.5" fill="url(#crownIconGradient)" opacity="0.9"/>
                        </svg>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Outcome - Impact Line */}
                  <p className="text-lg lg:text-xl text-[#7F4EFF] font-medium mb-3 leading-relaxed">
                    {feature.outcome}
                  </p>
                  
                  {/* Description */}
                  <p className="text-base text-[#94A3B8] leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover glow effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none -z-10 transition-opacity duration-700"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(127, 78, 255, 0.1), transparent 70%)',
                      filter: 'blur(30px)',
                      opacity: hoveredPanel === i + 1 ? 1 : 0,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
