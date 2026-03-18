import { ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
import { useState } from 'react';
import '@/styles/slick.css';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Partnering with Melange was a game-changer! Their marketing and social media strategy helped us achieve 1.3 Crores in revenue for MakeMyTrip Holidays. The team's dedication and creativity made all the difference!",
    name: "Raspreet Sakaria",
    title: "Senior Manager - Make My Trip Holidays"
  },
  {
    quote: "In three months, our traffic tripled, and subscriptions doubled, thanks to their strategy and performance marketing. Their social media and web expertise felt like an extension of our team.",
    name: "Jitendra Joshi",
    title: "Founder & CEO - Dhruvak"
  },
  {
    quote: "Their data-driven campaigns helped us exceed INR 3 Crores in sales. From strategy to web development and engaging content, they truly made a difference. We felt supported throughout, and their creativity brought our vision to life!",
    name: "Vasundhara Gupta",
    title: "Head - Costa Cruises"
  },
  {
    quote: "Their expert social media tactics, stunning product photography, and seamless website development perfectly captured our vision. We felt like a priority every step of the way!",
    name: "Vidya Pandit",
    title: "Co-founder - Kalon Organics"
  },
  {
    quote: "In just three months, their strategies and website development boosted our e-commerce sales to 3 Lakhs. They understood our brand and delivered solutions that resonated. We're excited for the future!",
    name: "Khushboo Shah",
    title: "Business Head - Duvon Disney"
  }
];

// Split testimonials into two rows
const row1 = [testimonials[0], testimonials[1], testimonials[2]];
const row2 = [testimonials[3], testimonials[4]];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Truncate text to approximately 100 characters
  const truncatedQuote = testimonial.quote.length > 100 
    ? testimonial.quote.substring(0, 100) + '...'
    : testimonial.quote;
  
  const shouldShowReadMore = testimonial.quote.length > 100;
  
  return (
    <div className="relative h-[280px] bg-black/5 backdrop-blur-xl p-8 rounded-2xl border border-black/10 hover:border-[#7F4EFF]/30 transition-all duration-300 flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D540FF]/5 via-transparent to-[#3858FF]/5 rounded-2xl pointer-events-none"></div>
      <div className="relative flex-1 overflow-hidden">
        <p className="text-lg text-gray-900 leading-relaxed">
          "{isExpanded ? testimonial.quote : truncatedQuote}"
          {shouldShowReadMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-sm text-[#7F4EFF] hover:text-[#D540FF] transition-colors font-medium"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </p>
      </div>
      <div className="relative flex items-center justify-between gap-4 mt-6 pt-6 border-t border-black/10">
        <p className="text-sm text-gray-600">
          {testimonial.name} — {testimonial.title}
        </p>
        <a 
          href="#" 
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-900 transition-colors duration-300 whitespace-nowrap"
          onClick={(e) => e.preventDefault()}
        >
          Case Study
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function MobileTestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Truncate text to approximately 80 characters for mobile
  const truncatedQuote = testimonial.quote.length > 80 
    ? testimonial.quote.substring(0, 80) + '...'
    : testimonial.quote;
  
  const shouldShowReadMore = testimonial.quote.length > 80;
  
  return (
    <div className="relative min-h-[320px] bg-black/5 backdrop-blur-xl p-6 rounded-2xl border border-black/10 hover:border-[#7F4EFF]/30 transition-all duration-300 flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D540FF]/5 via-transparent to-[#3858FF]/5 rounded-2xl pointer-events-none"></div>
      <div className="relative flex-1 overflow-hidden">
        <p className="text-base text-gray-900 leading-relaxed">
          "{isExpanded ? testimonial.quote : truncatedQuote}"
          {shouldShowReadMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-sm text-[#7F4EFF] hover:text-[#D540FF] transition-colors font-medium"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </p>
      </div>
      <div className="relative mt-6 pt-6 border-t border-black/10 space-y-2">
        <p className="text-sm text-gray-600">
          {testimonial.name}
        </p>
        <p className="text-xs text-gray-400">
          {testimonial.title}
        </p>
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-900 transition-colors duration-300 mt-2"
          onClick={(e) => e.preventDefault()}
        >
          Case Study
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export function ClientSignalsSection() {
  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
  };

  const mobileSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
  };

  return (
    <section className="relative py-24 lg:py-12 overflow-hidden bg-white">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        {/* Heading */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-5xl lg:text-7xl mb-4 tracking-tight">
            <span className="text-black">Client </span>
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">Signals</span>
          </h2>
          <p className="text-lg lg:text-xl text-black/60 lg:ml-2">
            Proof of execution, not promises.
          </p>
        </div>

        {/* DESKTOP: Two-row marquee (hidden on mobile) */}
        <div className="hidden lg:block space-y-8">
          {/* Row 1 - Scrolls Left to Right */}
          <Slider {...desktopSettings}>
            {[...row1, ...row1].map((testimonial, index) => (
              <div key={index} className="px-3">
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </Slider>

          {/* Row 2 - Scrolls Right to Left */}
          <Slider {...{ ...desktopSettings, rtl: true }}>
            {[...row2, ...row2, ...row2].map((testimonial, index) => (
              <div key={index} className="px-3">
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </Slider>
        </div>

        {/* MOBILE: Swipeable carousel (visible on mobile only) */}
        <div className="lg:hidden">
          <Slider {...mobileSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <MobileTestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}