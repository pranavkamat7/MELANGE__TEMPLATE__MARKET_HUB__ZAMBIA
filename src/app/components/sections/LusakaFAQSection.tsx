import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { PrimaryButton } from '@/app/components/buttons/PrimaryButton';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What services does Mélange Digital provide for businesses in Lusaka',
    answer: 'Mélange Digital provides full-service marketing for Lusaka companies, including SEO, Google Ads management, social media marketing, influencer campaigns, content production, video, branding, web development, and conversion optimization.',
  },
  {
    question: 'Do you offer SEO services to rank on Google in Lusaka',
    answer: 'Yes. Our Lusaka-focused SEO services improve search visibility through technical SEO, high-intent content, on-page structure, and local relevance signals across Zambia.',
  },
  {
    question: 'Do you manage Google Ads campaigns in Lusaka',
    answer: 'Yes. We run high-intent Google Ads campaigns for Lusaka businesses across Search, YouTube, Display, and remarketing, built for measurable ROI.',
  },
  {
    question: 'Can you support social media marketing and influencer campaigns in Lusaka',
    answer: 'Yes. We build social media strategy and influencer marketing campaigns for Lusaka audiences across Instagram, TikTok, YouTube, and LinkedIn.',
  },
  {
    question: 'Do you produce video content and AI-driven marketing assets',
    answer: 'Yes. Mélange Digital produces premium video, short-form creative, AI avatars, and scalable content systems designed for authority and modern discovery.',
  },
  {
    question: 'What is Answer Engine Optimization and why does it matter in Lusaka',
    answer: 'Answer Engine Optimization helps brands appear in AI-driven search results like ChatGPT, Gemini, and Perplexity, alongside traditional Google rankings, which is increasingly important in Lusaka\'s competitive market.',
  },
  {
    question: 'Do you provide website development and conversion optimization',
    answer: 'Yes. We design and build high-converting websites and landing pages optimized for Lusaka traffic, lead capture, and premium customer acquisition.',
  },
  {
    question: 'What industries do you work with in Lusaka and Zambia',
    answer: 'We support businesses across real estate, hospitality, healthcare, ecommerce, tourism, professional services, and government-facing sectors that require serious visibility and growth.',
  },
  {
    question: 'How do companies choose the best marketing agency in Lusaka',
    answer: 'Look for proven SEO expertise, profitable paid media execution, strong creative output, transparent reporting, and real market understanding in Zambia.',
  },
  {
    question: 'What is the best way to start with Mélange Digital',
    answer: 'The first step is a short strategy call, followed by a structured growth roadmap tailored for Lusaka demand.',
  },
];

function AccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-black/5 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-full py-7 px-8 md:px-10 flex items-start justify-between gap-6 text-left hover:bg-gradient-to-r hover:from-[#D540FF]/[0.02] hover:to-transparent transition-all duration-300"
      >
        <span className="text-lg md:text-xl font-semibold text-black leading-tight group-hover:text-[#7F4EFF] transition-colors duration-300">
          {item.question}
        </span>
        <div className="flex-shrink-0 mt-1">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-[#D540FF]" />
            ) : (
              <Plus className="w-5 h-5 text-[#7F4EFF]/60 group-hover:text-[#7F4EFF] transition-colors" />
            )}
          </motion.div>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-8 md:px-10 pb-7">
          <p className="text-base md:text-lg text-black/70 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function LusakaFAQSection() {
  const [showMoreQuestions, setShowMoreQuestions] = useState(false);
  const initialFaqs = faqs.slice(0, 5);
  const moreFaqs = faqs.slice(5);

  return (
    <section className="relative bg-white py-24 md:py-32 lg:py-20 overflow-hidden">
      {/* Subtle gradient orbs in background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#D540FF]/[0.03] to-transparent blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#3858FF]/[0.03] to-transparent blur-3xl rounded-full" />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              Lusaka Growth Questions,
            </span>{' '}
            <span className="text-black">Answered</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl lg:text-2xl text-black/60 leading-relaxed"
          >
            Straight answers on SEO, Google Ads, content systems, and conversion infrastructure for Lusaka companies competing at the top end.
          </motion.p>
        </div>

        {/* FAQ Accordion - Centered Column */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Animated gradient border container */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Animated gradient border */}
              <motion.div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, #D540FF, #7F4EFF, #3858FF, #D540FF)',
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Inner container to create border effect */}
              <div className="absolute inset-[2px] bg-white rounded-3xl" />
              
              {/* FAQ Content */}
              <div className="relative bg-gradient-to-br from-white via-white to-[#F8F9FF] rounded-3xl">
                {/* First 5 FAQs */}
                {initialFaqs.map((faq, index) => (
                  <AccordionItem key={index} item={faq} index={index} />
                ))}

                {/* View More Questions Accordion - shows at position 6 when collapsed */}
                {!showMoreQuestions && (
                  <div className="border-b border-black/5 last:border-b-0">
                    <button
                      onClick={() => setShowMoreQuestions(true)}
                      className="group w-full py-7 px-8 md:px-10 flex items-start justify-between gap-6 text-left hover:bg-gradient-to-r hover:from-[#D540FF]/[0.02] hover:to-transparent transition-all duration-300"
                    >
                      <span className="text-lg md:text-xl font-semibold text-black leading-tight group-hover:text-[#7F4EFF] transition-colors duration-300">
                        View More Questions
                      </span>
                      <div className="flex-shrink-0 mt-1">
                        <Plus className="w-5 h-5 text-[#7F4EFF]/60 group-hover:text-[#7F4EFF] transition-colors" />
                      </div>
                    </button>
                  </div>
                )}

                {/* Expanded More Questions - shows questions 6-10 */}
                {showMoreQuestions && (
                  <>
                    {moreFaqs.map((faq, index) => (
                      <AccordionItem key={index + 5} item={faq} index={index + 5} />
                    ))}
                    
                    {/* View Less Questions - appears at bottom after expanded questions */}
                    <div className="border-b border-black/5 last:border-b-0">
                      <button
                        onClick={() => setShowMoreQuestions(false)}
                        className="group w-full py-7 px-8 md:px-10 flex items-start justify-between gap-6 text-left hover:bg-gradient-to-r hover:from-[#D540FF]/[0.02] hover:to-transparent transition-all duration-300"
                      >
                        <span className="text-lg md:text-xl font-semibold text-black leading-tight group-hover:text-[#7F4EFF] transition-colors duration-300">
                          View Less Questions
                        </span>
                        <div className="flex-shrink-0 mt-1">
                          <Minus className="w-5 h-5 text-[#D540FF]" />
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <a href="https://melangedigital.co/zambia/digital-marketing-agency-lusaka/" >
                <PrimaryButton variant="dark" className="min-w-[180px]">Explore</PrimaryButton>
            </a>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}