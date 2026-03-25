import { motion } from 'motion/react';
import { MicroLabel } from '@/app/components/ui/MicroLabel';

const features = [
  {
    title: 'Authority Content Systems',
    description: 'AI-assisted editorial engines that produce high-volume and credibility-first content.',
    icon: 'network',
    isPrimary: true
  },
  {
    title: 'AI-Assisted Production',
    description: 'Personalised AI presenters built from real people, enabling consistent, on-brand video content for authentic audiences.',
    icon: 'avatar',
    isPrimary: false
  },
  {
    title: 'Video & Visual Systems',
    description: 'Controlled AI video production with precise messaging built for digital platforms, not generic automation.',
    icon: 'video',
    isPrimary: false
  }
];

export function AIContentSection() {
  return (
    <section className="bg-white text-[#0F172A] py-16 md:py-32 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Lead the Conversation 
            <br />
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              in Your Market.
            </span>
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#94A3B8] max-w-5xl mx-auto leading-relaxed">
            Content infrastructure that makes your brand the most visible and most trusted voice in your market.
          </p>
        </motion.div>

        {/* Dark Container Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 lg:p-8"
          style={{
            background: 'linear-gradient(135deg, #0B0B12 0%, #0F172A 100%)',
            boxShadow: '0 20px 60px rgba(11, 11, 18, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
          }}
        >
          {/* Subtle gradient border glow */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-40"
            style={{
              background: 'linear-gradient(135deg, rgba(180, 76, 255, 0.2), rgba(90, 124, 255, 0.2))',
              padding: '1px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Bridge Line Above Cards */}
          <div className="text-center mb-8">
            <MicroLabel className="text-white/60">
              Three controlled systems we deploy.
            </MicroLabel>
          </div>

          {/* Premium Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 relative z-10">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div 
                  className="relative h-full rounded-2xl p-8 lg:p-6 transition-all duration-300"
                  style={{
                    background: feature.isPrimary 
                      ? 'linear-gradient(135deg, rgba(20, 30, 55, 0.95), rgba(35, 45, 70, 0.95))'
                      : 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
                    border: feature.isPrimary 
                      ? '1px solid rgba(255, 255, 255, 0.15)' 
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: feature.isPrimary
                      ? '0 8px 40px rgba(127, 78, 255, 0.3), 0 4px 24px rgba(0, 0, 0, 0.4)'
                      : '0 4px 24px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Mélange gradient top accent */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                    style={{
                      background: 'linear-gradient(to right, #E879F9, #B44CFF, #7B61FF, #5A7CFF)',
                    }}
                  />

                  {/* Icon with gradient glow */}
                  <div className="mb-6 lg:mb-4 flex justify-center">
                    <div 
                      className="w-16 h-16 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center relative transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(180, 76, 255, 0.15), rgba(90, 124, 255, 0.15))',
                        border: '1px solid rgba(180, 76, 255, 0.3)',
                        boxShadow: '0 4px 16px rgba(180, 76, 255, 0.2)',
                      }}
                    >
                      {/* Enhanced icon glow on hover */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(232, 121, 249, 0.3), rgba(180, 76, 255, 0.3))',
                          filter: 'blur(12px)',
                        }}
                      />
                      
                      {/* AI Avatar Icon */}
                      {feature.icon === 'avatar' && (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                          <defs>
                            <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#E879F9" />
                              <stop offset="50%" stopColor="#B44CFF" />
                              <stop offset="100%" stopColor="#5A7CFF" />
                            </linearGradient>
                          </defs>
                          <path d="M16 4C12.5 4 10 6.5 10 10C10 11.5 10.5 13 11.5 14C9 15 7 17.5 7 20.5V24C7 24.5 7.5 25 8 25H24C24.5 25 25 24.5 25 24V20.5C25 17.5 23 15 20.5 14C21.5 13 22 11.5 22 10C22 6.5 19.5 4 16 4Z" stroke="url(#avatarGradient)" strokeWidth="1.5" fill="none"/>
                          <line x1="12" y1="8" x2="14" y2="10" stroke="url(#avatarGradient)" strokeWidth="0.8" opacity="0.6"/>
                          <line x1="20" y1="8" x2="18" y2="10" stroke="url(#avatarGradient)" strokeWidth="0.8" opacity="0.6"/>
                          <circle cx="14" cy="11" r="1" fill="url(#avatarGradient)" opacity="0.8"/>
                          <circle cx="18" cy="11" r="1" fill="url(#avatarGradient)" opacity="0.8"/>
                        </svg>
                      )}

                      {/* AI Video Icon */}
                      {feature.icon === 'video' && (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                          <defs>
                            <linearGradient id="videoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#E879F9" />
                              <stop offset="50%" stopColor="#B44CFF" />
                              <stop offset="100%" stopColor="#5A7CFF" />
                            </linearGradient>
                          </defs>
                          <rect x="4" y="8" width="18" height="16" rx="2" stroke="url(#videoGradient)" strokeWidth="1.5" fill="none"/>
                          <path d="M12 12L12 20L18 16L12 12Z" fill="url(#videoGradient)" opacity="0.8"/>
                          <line x1="24" y1="10" x2="28" y2="10" stroke="url(#videoGradient)" strokeWidth="1.5"/>
                          <line x1="24" y1="16" x2="28" y2="16" stroke="url(#videoGradient)" strokeWidth="1.5"/>
                          <line x1="24" y1="22" x2="28" y2="22" stroke="url(#videoGradient)" strokeWidth="1.5"/>
                          <circle cx="26" cy="10" r="1.5" fill="url(#videoGradient)"/>
                          <circle cx="26" cy="16" r="1.5" fill="url(#videoGradient)"/>
                        </svg>
                      )}

                      {/* Authority Network Icon */}
                      {feature.icon === 'network' && (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                          <defs>
                            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#E879F9" />
                              <stop offset="50%" stopColor="#B44CFF" />
                              <stop offset="100%" stopColor="#5A7CFF" />
                            </linearGradient>
                          </defs>
                          <circle cx="16" cy="10" r="3" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none"/>
                          <circle cx="8" cy="22" r="3" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none"/>
                          <circle cx="24" cy="22" r="3" stroke="url(#networkGradient)" strokeWidth="1.5" fill="none"/>
                          <line x1="16" y1="13" x2="10" y2="20" stroke="url(#networkGradient)" strokeWidth="1.2" opacity="0.6"/>
                          <line x1="16" y1="13" x2="22" y2="20" stroke="url(#networkGradient)" strokeWidth="1.2" opacity="0.6"/>
                          <circle cx="16" cy="10" r="1.5" fill="url(#networkGradient)"/>
                          <circle cx="8" cy="22" r="1" fill="url(#networkGradient)" opacity="0.8"/>
                          <circle cx="24" cy="22" r="1" fill="url(#networkGradient)" opacity="0.8"/>
                          <circle cx="12" cy="16" r="0.8" fill="url(#networkGradient)" opacity="0.6"/>
                          <circle cx="20" cy="16" r="0.8" fill="url(#networkGradient)" opacity="0.6"/>
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Title - High contrast white */}
                  <h3 className="text-xl lg:text-xl font-bold text-white mb-4 lg:mb-3 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description - Off-white for readability */}
                  <p className="text-base lg:text-base text-[#E2E8F0] leading-relaxed opacity-90">
                    {feature.description}
                  </p>

                  {/* Hover gradient glow effect */}
                  <div 
                    className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(232, 121, 249, 0.4), rgba(180, 76, 255, 0.4), rgba(90, 124, 255, 0.4))',
                      filter: 'blur(16px)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}