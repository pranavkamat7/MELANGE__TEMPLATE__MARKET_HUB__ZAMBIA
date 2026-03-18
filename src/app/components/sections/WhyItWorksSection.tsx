import { motion } from 'motion/react';

const outcomes = [
  {
    title: 'Rankings Compound',
    description: 'Across Google and AI discovery layers',
    gradient: 'from-[#D540FF] to-[#7F4EFF]'
  },
  {
    title: 'Ads Become Cheaper',
    description: 'As authority and intent stack over time',
    gradient: 'from-[#7F4EFF] to-[#3858FF]'
  },
  {
    title: 'Trust Removes Friction',
    description: 'Premium positioning accelerates decisions',
    gradient: 'from-[#D540FF] to-[#3858FF]'
  },
  {
    title: 'Conversion Becomes Systematic',
    description: 'Traffic turns into predictable revenue',
    gradient: 'from-[#3858FF] to-[#7F4EFF]'
  }
];

export function WhyItWorksSection() {
  return (
    <section className="relative min-h-screen flex items-center py-24 md:py-32 lg:py-10 overflow-hidden bg-[#0B0B12]">
      {/* Dramatic gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#D540FF]/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#3858FF]/20 blur-[150px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7F4EFF]/15 blur-[120px] rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-white">Why It </span>
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">Works</span>
          </h2>
          
          <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.5] text-white/90 font-semibold max-w-[800px] mx-auto">
            When these systems compound together, growth becomes inevitable, not fragile.
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Gradient border container */}
              <div className={`absolute -inset-[1px] bg-gradient-to-br ${outcome.gradient} rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              
              {/* Card */}
              <div className="relative bg-[#0B0B12] rounded-3xl p-8 md:p-10 lg:p-6 h-full">
                {/* Gradient accent bar */}
                <div className={`w-16 h-1 bg-gradient-to-r ${outcome.gradient} rounded-full mb-4 lg:mb-3`} />
                
                {/* Title with gradient on hover */}
                <h3 className="text-2xl lg:text-lg font-bold mb-3 lg:mb-2 leading-tight text-white group-hover:bg-gradient-to-r group-hover:from-[#D540FF] group-hover:via-[#7F4EFF] group-hover:to-[#3858FF] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {outcome.title}
                </h3>
                
                {/* Description */}
                <p className="text-base lg:text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {outcome.description}
                </p>

                {/* Subtle inner gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${outcome.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}