import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Award {
  id: string;
  title: string;
  year: string;
  logo: string;
  description: string;
}

const awards: Award[] = [
  {
    id: '1',
    title: 'Best Creative Campaign in Digital Media',
    year: '2024',
    logo: 'ISMA',
    description: 'Recognized for creativity and innovation in a digital campaign that stood out and connected deeply with target audiences.',
  },
  {
    id: '2',
    title: 'Best Use of AI in Marketing',
    year: '2024',
    logo: 'ASIA LEADERSHIP',
    description: 'In recognition of outstanding professional achievement and contribution towards nation building.',
  },
  {
    id: '3',
    title: 'Brand Impact Award',
    year: '2024',
    logo: 'IFCA',
    description: 'Celebrates the innovative use of AI to enhance marketing strategies, from personalization to predictive analytics.',
  },
  {
    id: '4',
    title: 'Best Branded Content Campaign',
    year: '2023',
    logo: 'INDIA CONTENT',
    description: 'Celebrated for creating branded content that resonated with audiences and met client goals.',
  },
  {
    id: '5',
    title: 'Digital Transformation Award for MSMEs',
    year: '2022',
    logo: 'MSME',
    description: 'Acknowledged for spearheading digital transformation in MSMEs with innovative marketing technology solutions.',
  },
  {
    id: '6',
    title: 'Best Influencer Marketing Campaign',
    year: '2022',
    logo: 'ISMA',
    description: 'Honored for effectively leveraging influencers to boost brand awareness and drive consumer engagement.',
  },
];

export function AccoladesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative py-16 lg:py-10 overflow-hidden bg-black">
      {/* Flowing Wavy Gradient Background */}
      <div className="absolute inset-0 accolades-wave-background"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-[48px] lg:text-[64px] font-bold text-white mb-3 lg:mb-4 leading-tight">
            Accolades and Honors
          </h2>
          <p className="text-[18px] lg:text-[22px] text-white/80 max-w-[800px] leading-relaxed">
            We bring services to a whole new level. The industry-defining awards below are proof.
          </p>
        </div>

        {/* Desktop: Awards Grid (3 columns) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award) => (
            <div key={award.id} className="group">
              {/* Award Card */}
              <div className="border-b border-white/20 pb-4">
                {/* Logo Placeholder */}
                <div className="mb-4 h-12 flex items-center">
                  <div className="text-white/40 text-xl font-mono tracking-wider">
                    {award.logo}
                  </div>
                </div>

                {/* Title and Toggle */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight mb-1">
                      {award.title}
                    </h3>
                    <p className="text-white/60 text-[14px] lg:text-[16px]">
                      {award.year}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => toggleExpand(award.id)}
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-white hover:text-white/80 transition-colors"
                    aria-label={expandedId === award.id ? 'Collapse' : 'Expand'}
                  >
                    {expandedId === award.id ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Expandable Description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedId === award.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white/70 text-[14px] lg:text-[15px] leading-relaxed pt-2">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Compact Accordion (all collapsed by default) */}
        <div className="lg:hidden space-y-4">
          {awards.map((award) => (
            <div key={award.id} className="border-b border-white/20 pb-4">
              {/* Mobile Accordion Header */}
              <button
                onClick={() => toggleExpand(award.id)}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold text-white leading-tight mb-1">
                    {award.title}
                  </h3>
                  <p className="text-white/60 text-[14px]">
                    {award.year}
                  </p>
                </div>
                
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-white">
                  {expandedId === award.id ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Mobile Expandable Description */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedId === award.id ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-white/70 text-[14px] leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}