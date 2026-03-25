import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { PrimaryButton } from '@/app/components/buttons/PrimaryButton';

const systems = [
  {
    number: '01',
    title: 'Search Dominance',
    description: 'Own the search results your buyers actually use'
  },
  {
    number: '02',
    title: 'Intent Capture',
    description: 'Convert commercial intent into a qualified pipeline'
  },
  {
    number: '03',
    title: 'Market Positioning',
    description: 'Shape what markets believe about your brand'
  },
  {
    number: '04',
    title: 'Execution Automation',
    description: 'Scale output without scaling headcount'
  },
  {
    number: '05',
    title: 'Conversion Architecture',
    description: 'Turn traffic into recurring, predictable revenue'
  }
];

export function SystemThinkingSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply active state logic on mobile/tablet
      if (window.innerWidth >= 1024) {
        setActiveCard(null);
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      let closestIndex = null;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance && rect.top < viewportCenter && rect.bottom > viewportCenter) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-8"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-black">The Stack </span>
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">African Brands </span>
            <br />
            <span className="text-black">Actually Need.</span>
          </h2>
          
          {/* Supporting text */}
          <p className="text-[22px] md:text-[24px] lg:text-[26px] leading-[1.5] max-w-[700px] mx-auto mb-4">
            <span className="text-black">What We </span>
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">Stack</span>
            <span className="text-black"> Deploy Across  </span>
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">Every Market</span>
            <span className="text-black">:</span>
          </p>
          <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.5] text-black/70 font-semibold max-w-[800px] mx-auto">
            Five interconnected layers. One compounding strategy. Built for the best marketing agency in Zambia to deploy at scale.
          </p>
        </motion.div>

        {/* CTA Button - Mobile Only (shown above cards on mobile) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center mb-6 lg:mb-8"
        >
          <a href="https://cal.id/sanket-bolinjkar/discovery-call?duration=30" >
            <PrimaryButton variant="dark" className="min-w-[160px]">Get an Audit</PrimaryButton>
          </a>
          
        </motion.div>

        {/* Cards Grid - Desktop: 3 top, 2 bottom centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 max-w-[1400px] mx-auto">
          {systems.map((system, index) => {
            const isActive = activeCard === index;
            
            // Grid positioning: All cards in one row on desktop
            const gridClass = 'lg:col-span-1';
            
            return (
              <motion.div
                key={system.number}
                ref={(el) => (cardRefs.current[index] = el)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className={`
                  group relative bg-white rounded-3xl border p-6 lg:p-5
                  transition-all duration-500 ease-out
                  ${gridClass}
                  ${isActive 
                    ? 'border-[#B44CFF]/40 shadow-[0_12px_40px_rgba(180,76,255,0.25)] bg-gradient-to-br from-[#B44CFF]/5 to-[#5A7CFF]/5' 
                    : 'border-black/10 hover:border-[#B44CFF]/40 hover:shadow-[0_12px_40px_rgba(180,76,255,0.2)]'
                  }
                `}
              >
                {/* Animated gradient border */}
                <motion.div
                  className={`
                    absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500
                    ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}
                  `}
                  style={{
                    background: 'linear-gradient(135deg, #B44CFF, #E879F9, #5A7CFF)',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                {/* Gradient accent line */}
                <motion.div
                  className={`
                    absolute top-0 left-8 right-8 h-[3px] rounded-full
                    bg-gradient-to-r from-[#B44CFF] via-[#E879F9] to-[#5A7CFF]
                    transition-opacity duration-500
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number Badge */}
                  <motion.div
                    className={`
                      inline-flex items-center justify-center w-10 h-10 lg:w-9 lg:h-9 rounded-full mb-4 lg:mb-3
                      transition-all duration-500
                      ${isActive 
                        ? 'bg-gradient-to-br from-[#B44CFF]/20 to-[#5A7CFF]/20 shadow-lg shadow-[#B44CFF]/30' 
                        : 'bg-gradient-to-br from-[#B44CFF]/10 to-[#5A7CFF]/10 group-hover:from-[#B44CFF]/20 group-hover:to-[#5A7CFF]/20'
                      }
                    `}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-base lg:text-sm font-bold bg-gradient-to-r from-[#B44CFF] to-[#5A7CFF] bg-clip-text text-transparent">
                      {system.number}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-lg font-bold text-black mb-3 lg:mb-2 leading-tight">
                    {system.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black/60 text-base lg:text-sm leading-relaxed">
                    {system.description}
                  </p>
                </div>

                {/* Subtle glow overlay */}
                <div 
                  className={`
                    absolute inset-0 rounded-3xl pointer-events-none
                    bg-gradient-to-br from-[#B44CFF]/8 via-[#E879F9]/5 to-[#5A7CFF]/8
                    transition-opacity duration-500
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}
                />

                {/* Corner glow accent */}
                <motion.div
                  className={`
                    absolute -top-1 -right-1 w-20 h-20 rounded-full
                    bg-gradient-to-br from-[#B44CFF]/30 to-[#E879F9]/30
                    blur-2xl opacity-0 transition-opacity duration-500
                    ${isActive ? 'opacity-60' : 'group-hover:opacity-40'}
                  `}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}