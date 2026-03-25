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
    question: 'What digital marketing services does Mélange Digital offer to businesses in Zambia, Africa?',
    answer: "Mélange Digital delivers a complete range of digital marketing services for Zambia, African businesses, spanning SEO, Google Ads, social media marketing, influencer campaigns, content production, video, branding, web development, and conversion optimisation, tailored to the unique pace and diversity of Africa's emerging digital economy.",
  },
  {
    question: 'Do you manage Google Ads campaigns for businesses in Zambia, Africa?',
    answer: 'Yes. We build and manage performance-driven Google Ads campaigns for Zambia, African businesses across Search, YouTube, Display, and remarketing, engineered for measurable ROI in markets where digital ad spend is growing faster than any other region globally.',
  },
  {
    question: 'Can you support social media marketing and influencer campaigns in Zambia, Africa?',
    answer: 'Yes. We develop social media strategies and influencer marketing campaigns tailored to Zambia, African audiences, across Instagram, YouTube, LinkedIn, Facebook, and TikTok, with particular expertise in market-specific platform behavior.',
  },
  {
    question: 'Do you produce video content and AI-driven marketing assets for African markets?',
    answer: "Yes. Mélange Digital produces premium video, short-form creative, AI avatars, and scalable content systems built for Zambia, Africa's mobile-first, data-conscious audiences, where video consumption is surging, but production budgets demand smart, efficient content solutions.",
  },
  {
    question: 'What is Answer Engine Optimisation and why does it matter for Zambia, African businesses?',
    answer: 'Answer Engine Optimisation positions your brand inside AI-driven search tools like ChatGPT, Gemini, and Perplexity, not just traditional Google results. For Zambia, African businesses, this represents a rare first-mover opportunity: AI search adoption is accelerating rapidly across the continent, and brands that invest in AEO now will establish authority before their competitors even recognise the shift.',
  },
  {
    question: 'Do you provide website development and conversion optimization for Zambia, African businesses?',
    answer: 'Yes. We design and develop high-converting websites and landing pages built for the Zambian, African market conditions, including mobile-first performance, fast load speeds for variable connectivity environments, and conversion pathways optimised for local customer acquisition.',
  },
  {
    question: 'What industries does Mélange Digital work with across Zambia, Africa?',
    answer: "Mélange Digital supports businesses across tourism and hospitality, real estate, healthcare, e-commerce, agriculture, mining, professional services, fintech, and government-facing sectors,  industries that are central to Zambia, Africa's digital transformation and economic growth story.",
  },
  {
    question: 'Why should Zambia, African businesses choose Mélange Digital as their digital marketing agency?',
    answer: "Mélange Digital brings global campaign expertise combined with a genuine understanding of Zambia, Africa's diverse, fast-evolving digital markets. From navigating multi-country audience targeting to producing culturally relevant content across different Zambian regions, their integrated approach delivers measurable growth for businesses ready to lead in Zambia, Africa's digital future.",
  },
  {
    question: 'What is the best way for an Zambia, African business to start with Mélange Digital?',
    answer: 'Begin with a focused strategy call where Mélange Digital maps your current digital presence, identifies the highest-opportunity markets within Zambia, Africa, for your business, and builds a growth roadmap aligned with your industry, audience, and regional expansion goals.',
  },
  {
    question: 'What is the best way for an Zambia, African business to start with Mélange Digital?',
    answer: 'Begin with a focused strategy call where Mélange Digital maps your current digital presence, identifies the highest-opportunity markets within Zambia, Africa, for your business, and builds a growth roadmap aligned with your industry, audience, and regional expansion goals.',
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
              Africa Raises Questions,

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