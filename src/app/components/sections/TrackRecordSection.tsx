import { useState, useEffect, useRef } from 'react';

export function TrackRecordSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const metrics = [
    { number: 700, label: "Valued Clients" },
    { number: 11, label: "Industry Honors" },
    { number: 20, label: "Media Spending", prefix: "$", suffix: "M" },
    { number: 50, label: "Countries Operations" },
    { number: 2000, label: "Campaigns Delivered", suffix: "+" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate each number
            metrics.forEach((metric, index) => {
              const duration = 2000; // 2 seconds
              const steps = 60;
              const increment = metric.number / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= metric.number) {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = metric.number;
                    return newCounts;
                  });
                  clearInterval(timer);
                } else {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(current);
                    return newCounts;
                  });
                }
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatNumber = (index: number) => {
    const metric = metrics[index];
    const count = counts[index];
    return `${metric.prefix || ''}${count}${metric.suffix || ''}`;
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-12 overflow-hidden bg-[#0B0B12]" id='insights'>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        {/* Oversized Gradient Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl mb-16 lg:mb-12 tracking-tight leading-[1.1] text-white bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
          Success Isn't Just Talk, It's Our Track Record.
        </h2>

        {/* Two-Column Supporting Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20 lg:mb-16">
          <p className="text-base lg:text-lg text-white leading-relaxed">
            As an award-winning digital marketing agency, we don't just talk the talk, we build systems that deliver. With over 700 valued clients and $20M in media spending, our results speak for themselves.
          </p>
          <p className="text-base lg:text-lg text-white leading-relaxed">
            We take pride in earning top honours that reflect our commitment to excellence. From boosting visibility to driving growth, we deliver outcomes that matter, across serious markets worldwide.
          </p>
        </div>

        {/* Metrics Row - Desktop: Single horizontal row */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-12 xl:gap-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl xl:text-6xl mb-3 bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
                {formatNumber(index)}
              </div>
              <div className="text-sm xl:text-base text-white">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Grid - Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:hidden">
          {/* Row 1: 700 Clients | 11 Honors */}
          <div className="text-center">
            <div className="text-4xl mb-3 bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              {formatNumber(0)}
            </div>
            <div className="text-sm text-white">
              Valued Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3 bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              {formatNumber(1)}
            </div>
            <div className="text-sm text-white">
              Industry Honors
            </div>
          </div>

          {/* Row 2: $20M Media | 50 Countries */}
          <div className="text-center">
            <div className="text-4xl mb-3 bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              {formatNumber(2)}
            </div>
            <div className="text-sm text-white">
              Media Spending
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3 bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              {formatNumber(3)}
            </div>
            <div className="text-sm text-white">
              Countries Operations
            </div>
          </div>

          {/* Row 3: 2000+ Campaigns (full width) */}
          <div className="text-center col-span-2">
            <div className="text-4xl mb-3 bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              {formatNumber(4)}
            </div>
            <div className="text-sm text-white">
              Campaigns Delivered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}