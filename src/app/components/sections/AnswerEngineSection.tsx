import { motion } from 'motion/react';

const engines = [
  {
    name: 'ChatGPT',
    description: 'Visibility optimization inside AI answers and recommendation layers',
    iconColor: '#10a37f',
    iconPath: 'M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08-4.778 2.758a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z'
  },
  {
    name: 'Gemini',
    description: 'Entity authority and structured presence across Google AI search',
    iconColor: '#4285f4',
    iconPath: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 16.36h-9.9c-.33 0-.6-.27-.6-.6V8.24c0-.33.27-.6.6-.6h9.9c.33 0 .6.27.6.6v7.52c0 .33-.27.6-.6.6z'
  },
  {
    name: 'Perplexity',
    description: 'Citation-driven trust and answer engine ranking',
    iconColor: '#20808d',
    iconPath: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.47l7 3.5v7.03l-7-3.5V9.47zm9 10.53v-7.03l7-3.5v7.03l-7 3.5z'
  },
  {
    name: 'Claude',
    description: 'Deep semantic coverage for long-form AI discovery',
    iconColor: '#d97757',
    iconPath: 'M12 2.5c-5.24 0-9.5 4.26-9.5 9.5s4.26 9.5 9.5 9.5 9.5-4.26 9.5-9.5-4.26-9.5-9.5-9.5zm0 17c-4.14 0-7.5-3.36-7.5-7.5S7.86 4.5 12 4.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm-.75-12h1.5v5h-1.5V7.5zm0 6.5h1.5v1.5h-1.5V14z'
  }
];

export function AnswerEngineSection() {
  return (
    <section className="relative bg-[#0B0B12] py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Atmospheric purple glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#B44CFF]/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Animated Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-gradient-to-br from-[#B44CFF]/20 to-[#5A7CFF]/10 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-[#E879F9]/15 to-[#7B61FF]/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute top-[30%] right-[20%] w-[250px] h-[250px] bg-gradient-to-br from-[#5A7CFF]/20 to-[#B44CFF]/10 rounded-full blur-[90px]"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Subtle flowing particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#B44CFF] to-[#5A7CFF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}

        {/* Ambient light beams */}
        <motion.div
          className="absolute top-0 left-[30%] w-[2px] h-full bg-gradient-to-b from-transparent via-[#B44CFF]/10 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-0 right-[35%] w-[2px] h-full bg-gradient-to-b from-transparent via-[#5A7CFF]/10 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Glowing grid lines - subtle */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(180, 76, 255, 0.3) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(90, 124, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
        </div>
      </div>
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Search Is No Longer Google</span>
              <br />
              <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
                It's Everywhere
              </span>
            </h2>
            
            <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.5] text-white/90 font-semibold max-w-[800px]">
              Your brand must become the default answer, not just another result.
            </p>
            
            <p className="text-[20px] md:text-[24px] lg:text-[26px] leading-[1.5] text-[#D4DBE8] max-w-[580px]">
              We engineer Answer Engine Optimization across AI search, voice, discovery, and machine-driven intent layers, so your brand becomes the default answer everywhere customers look.
            </p>
          </motion.div>

          {/* Right Side - AI Engine Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-start justify-center lg:justify-end relative"
          >
            {/* Soft spotlight gradient behind cards */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D540FF]/10 via-[#7F4EFF]/15 to-[#3858FF]/10 blur-[100px] rounded-full scale-110 opacity-60" />

            {/* Card Cluster Container */}
            <div className="relative w-full max-w-[660px]">
              {/* ChatGPT - Primary Featured Card (Desktop Only) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group/primary relative mb-6 hidden lg:block"
              >
                {/* Gradient border glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#D540FF] via-[#7F4EFF] to-[#3858FF] rounded-3xl opacity-70 group-hover/primary:opacity-100 transition-opacity duration-500 blur-sm" />
                
                {/* Card */}
                <div className="relative bg-[#0B0B12] rounded-3xl p-8 md:p-10">
                  {/* Gradient accent bar */}
                  <div className="w-20 h-1 bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] rounded-full mb-6" />
                  
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover/primary:scale-110"
                      style={{ backgroundColor: '#10a37f15' }}
                    >
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#10a37f">
                        <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08-4.778 2.758a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover/primary:bg-gradient-to-r group-hover/primary:from-[#D540FF] group-hover/primary:via-[#7F4EFF] group-hover/primary:to-[#3858FF] group-hover/primary:bg-clip-text group-hover/primary:text-transparent transition-all duration-500">
                        ChatGPT
                      </h3>
                      <p className="text-lg text-white/60 leading-relaxed group-hover/primary:text-white/80 transition-colors duration-500">
                        Visibility optimization inside AI answers and recommendation layers
                      </p>
                    </div>
                  </div>

                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D540FF]/5 via-[#7F4EFF]/5 to-[#3858FF]/5 opacity-0 group-hover/primary:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>

              {/* All Cards Grid - Mobile shows all 4, Desktop shows bottom 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {engines.map((engine, i) => (
                  <motion.div
                    key={engine.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className={`group/support relative ${i === 0 ? 'lg:hidden' : ''}`}
                  >
                    {/* Gradient border */}
                    <div 
                      className="absolute -inset-[1px] rounded-2xl opacity-50 group-hover/support:opacity-100 transition-opacity duration-500 blur-sm"
                      style={{
                        background: i === 0 
                          ? 'linear-gradient(135deg, #D540FF, #7F4EFF, #3858FF)'
                          : `linear-gradient(135deg, ${engine.iconColor}80, ${engine.iconColor}40)`
                      }}
                    />
                    
                    {/* Card */}
                    <div className="relative bg-[#0B0B12] rounded-2xl p-6 h-full flex flex-col">
                      {/* Accent bar */}
                      <div 
                        className="w-16 h-1 rounded-full mb-5"
                        style={{ 
                          background: i === 0 
                            ? 'linear-gradient(to right, #D540FF, #7F4EFF, #3858FF)'
                            : engine.iconColor 
                        }}
                      />
                      
                      {/* Logo */}
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 group-hover/support:scale-110"
                        style={{ backgroundColor: `${engine.iconColor}15` }}
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={engine.iconColor}>
                          <path d={engine.iconPath} />
                        </svg>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover/support:bg-gradient-to-r group-hover/support:from-[#D540FF] group-hover/support:via-[#7F4EFF] group-hover/support:to-[#3858FF] group-hover/support:bg-clip-text group-hover/support:text-transparent transition-all duration-500">
                        {engine.name}
                      </h3>
                      <p className="text-base text-white/60 leading-relaxed group-hover/support:text-white/80 transition-colors duration-500">
                        {engine.description}
                      </p>

                      {/* Inner glow */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover/support:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: i === 0
                            ? 'linear-gradient(135deg, rgba(213, 64, 255, 0.05), rgba(127, 78, 255, 0.05), rgba(56, 88, 255, 0.05))'
                            : `linear-gradient(135deg, ${engine.iconColor}10, transparent)`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}