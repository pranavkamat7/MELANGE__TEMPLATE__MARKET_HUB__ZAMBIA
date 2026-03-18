import { motion, useMotionValue } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

const industries = [
  {
    id: 1,
    title: 'Healthcare & Clinics',
    description: 'Authority-driven patient acquisition and premium medical positioning.',
    icon: 'healthcare',
    depth: 0
  },
  {
    id: 2,
    title: 'Luxury Real Estate',
    description: 'High-ticket buyer targeting and elite property visibility.',
    icon: 'realestate',
    depth: 20
  },
  {
    id: 3,
    title: 'Hospitality & Lifestyle',
    description: 'Revenue-focused guest acquisition and brand amplification.',
    icon: 'hospitality',
    depth: 10
  },
  {
    id: 4,
    title: 'Private Education',
    description: 'Enrollment growth systems and institutional authority building.',
    icon: 'education',
    depth: 15
  },
  {
    id: 5,
    title: 'High-End B2B Services',
    description: 'Executive visibility and trust positioning for service firms.',
    icon: 'b2b',
    depth: 5
  },
  {
    id: 6,
    title: 'Ecommerce & Retail',
    description: 'Performance creative and authority content that drives sales.',
    icon: 'ecommerce',
    depth: 12
  }
];

interface GeometricIconProps {
  type: string;
  isHovered: boolean;
}

function GeometricIcon({ type, isHovered }: GeometricIconProps) {
  const baseClasses = "transition-all duration-700";
  
  switch (type) {
    case 'healthcare':
      // Geometric Plus/Cross
      return (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div
            className="absolute w-8 h-24 rounded-lg bg-gradient-to-b from-cyan-400 via-teal-400 to-purple-400"
            style={{
              boxShadow: isHovered 
                ? '0 0 40px rgba(34, 211, 238, 0.8), 0 0 80px rgba(168, 85, 247, 0.4)' 
                : '0 0 20px rgba(34, 211, 238, 0.4)',
            }}
            animate={isHovered ? { 
              scale: [1, 1.1, 1],
              rotateZ: [0, 5, 0]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-24 h-8 rounded-lg bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-400"
            style={{
              boxShadow: isHovered 
                ? '0 0 40px rgba(34, 211, 238, 0.8), 0 0 80px rgba(168, 85, 247, 0.4)' 
                : '0 0 20px rgba(34, 211, 238, 0.4)',
            }}
            animate={isHovered ? { 
              scale: [1, 1.1, 1],
              rotateZ: [0, -5, 0]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        </div>
      );
    
    case 'realestate':
      // Layered Architecture Rectangles
      return (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div
            className="absolute w-16 h-20 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 opacity-60"
            style={{
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)',
              transform: 'translateX(-8px) translateZ(20px)'
            }}
            animate={isHovered ? { 
              y: [-2, 2, -2],
              rotateY: [0, 5, 0]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-16 h-24 rounded-lg bg-gradient-to-br from-teal-400 to-purple-500 opacity-80"
            style={{
              boxShadow: '0 0 40px rgba(20, 184, 166, 0.6)',
              transform: 'translateZ(10px)'
            }}
            animate={isHovered ? { 
              y: [2, -2, 2],
              scale: [1, 1.05, 1]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute w-16 h-16 rounded-lg bg-gradient-to-br from-purple-400 to-fuchsia-500 opacity-70"
            style={{
              boxShadow: '0 0 35px rgba(168, 85, 247, 0.6)',
              transform: 'translateX(8px) translateZ(0px)'
            }}
            animate={isHovered ? { 
              y: [1, -1, 1],
              rotateY: [0, -5, 0]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      );
    
    case 'hospitality':
      // Diamond/Star Burst
      return (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div
            className="absolute w-20 h-20 rotate-45 rounded-2xl bg-gradient-to-br from-cyan-300 via-purple-400 to-fuchsia-400"
            style={{
              boxShadow: isHovered 
                ? '0 0 60px rgba(34, 211, 238, 0.8), 0 0 100px rgba(217, 70, 239, 0.5)' 
                : '0 0 30px rgba(34, 211, 238, 0.5)',
            }}
            animate={isHovered ? { 
              scale: [1, 1.15, 1],
              rotate: [45, 50, 45]
            } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-16 h-16 rotate-45 rounded-xl bg-gradient-to-tr from-teal-300 to-purple-300 opacity-60"
            animate={isHovered ? { 
              scale: [1, 0.9, 1],
              rotate: [45, 40, 45]
            } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          {[0, 90, 180, 270].map((rotation, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-transparent"
              style={{
                transform: `rotate(${rotation}deg)`,
                opacity: 0.4,
              }}
              animate={isHovered ? { 
                opacity: [0.4, 0.8, 0.4],
                scaleY: [1, 1.2, 1]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            />
          ))}
        </div>
      );
    
    case 'education':
      // Pyramid/Triangle
      return (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg width="120" height="120" viewBox="0 0 120 120" className="absolute">
            <defs>
              <linearGradient id="pyramid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.9" />
              </linearGradient>
              <filter id="pyramid-glow">
                <feGaussianBlur stdDeviation={isHovered ? "8" : "4"} result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <motion.path
              d="M60 20 L100 90 L20 90 Z"
              fill="url(#pyramid-grad)"
              filter="url(#pyramid-glow)"
              strokeWidth="2"
              stroke="rgba(34, 211, 238, 0.6)"
              animate={isHovered ? {
                d: [
                  "M60 20 L100 90 L20 90 Z",
                  "M60 15 L105 90 L15 90 Z",
                  "M60 20 L100 90 L20 90 Z"
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M60 35 L85 75 L35 75 Z"
              fill="rgba(34, 211, 238, 0.3)"
              animate={isHovered ? { opacity: [0.3, 0.6, 0.3] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      );
    
    case 'b2b':
      // Connected Hexagons Network
      return (
        <div className="relative w-32 h-32 flex items-center justify-center">
          {[
            { x: 60, y: 30, delay: 0 },
            { x: 30, y: 60, delay: 0.2 },
            { x: 90, y: 60, delay: 0.4 },
            { x: 60, y: 90, delay: 0.6 }
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-10 h-10"
              style={{
                left: pos.x - 20,
                top: pos.y - 20,
              }}
              animate={isHovered ? {
                scale: [1, 1.2, 1],
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
            >
              <div 
                className="w-full h-full rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 rotate-45"
                style={{
                  boxShadow: isHovered 
                    ? '0 0 30px rgba(34, 211, 238, 0.8)' 
                    : '0 0 15px rgba(34, 211, 238, 0.4)',
                }}
              />
            </motion.div>
          ))}
          <svg className="absolute inset-0" width="120" height="120">
            <line x1="60" y1="30" x2="30" y2="60" stroke="url(#line-grad)" strokeWidth="2" opacity="0.5"/>
            <line x1="60" y1="30" x2="90" y2="60" stroke="url(#line-grad)" strokeWidth="2" opacity="0.5"/>
            <line x1="30" y1="60" x2="60" y2="90" stroke="url(#line-grad)" strokeWidth="2" opacity="0.5"/>
            <line x1="90" y1="60" x2="60" y2="90" stroke="url(#line-grad)" strokeWidth="2" opacity="0.5"/>
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    
    case 'ecommerce':
      // Cube/Package
      return (
        <div className="relative w-32 h-32 flex items-center justify-center perspective-1000">
          <motion.div
            className="relative w-20 h-20"
            style={{ transformStyle: 'preserve-3d' }}
            animate={isHovered ? {
              rotateX: [0, 15, 0],
              rotateY: [0, 15, 0],
            } : {
              rotateY: [0, 360],
            }}
            transition={isHovered ? {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            } : {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Front face */}
            <div 
              className="absolute w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg"
              style={{
                transform: 'translateZ(10px)',
                boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)',
              }}
            />
            {/* Top face */}
            <div 
              className="absolute w-20 h-20 bg-gradient-to-br from-teal-400 to-purple-500 rounded-lg opacity-80"
              style={{
                transform: 'rotateX(90deg) translateZ(10px)',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
              }}
            />
            {/* Right face */}
            <div 
              className="absolute w-20 h-20 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-lg opacity-70"
              style={{
                transform: 'rotateY(90deg) translateZ(10px)',
                boxShadow: '0 0 35px rgba(217, 70, 239, 0.5)',
              }}
            />
          </motion.div>
        </div>
      );
    
    default:
      return null;
  }
}

interface IndustrySlideProps {
  industry: typeof industries[0];
  index: number;
}

function IndustrySlide({ industry, index }: IndustrySlideProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: (index % industries.length) * 0.08 }}
      className="flex-shrink-0 w-[380px] sm:w-[420px] lg:w-[480px] h-[380px] lg:h-[440px] snap-center snap-always"
      style={{
        perspective: '1200px',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="relative h-full rounded-[32px] p-10 lg:p-12 backdrop-blur-2xl transition-all duration-700 overflow-hidden"
        style={{
          background: isHovered
            ? 'linear-gradient(135deg, rgba(15, 15, 20, 0.95), rgba(10, 10, 15, 0.98))'
            : 'linear-gradient(135deg, rgba(20, 20, 28, 0.92), rgba(15, 15, 20, 0.95))',
          border: isHovered 
            ? '1px solid rgba(34, 211, 238, 0.4)' 
            : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isHovered 
            ? '0 0 80px rgba(34, 211, 238, 0.25), 0 20px 60px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
            : '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          transformStyle: 'preserve-3d',
          rotateX: mouseY.get() * 0.5,
          rotateY: mouseX.get() * 0.5,
          translateZ: isHovered ? industry.depth : 0,
        }}
        animate={{
          rotateX: mouseY.get() * 0.5,
          rotateY: mouseX.get() * 0.5,
          translateZ: isHovered ? industry.depth : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Holographic animated border */}
        <motion.div 
          className="absolute inset-0 rounded-[32px] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.8), rgba(20, 184, 166, 0.6), rgba(168, 85, 247, 0.7), rgba(217, 70, 239, 0.6))',
            padding: '1.5px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            opacity: isHovered ? 1 : 0,
          }}
          animate={isHovered ? {
            background: [
              'linear-gradient(135deg, rgba(34, 211, 238, 0.8), rgba(20, 184, 166, 0.6), rgba(168, 85, 247, 0.7), rgba(217, 70, 239, 0.6))',
              'linear-gradient(180deg, rgba(20, 184, 166, 0.6), rgba(168, 85, 247, 0.7), rgba(217, 70, 239, 0.6), rgba(34, 211, 238, 0.8))',
              'linear-gradient(225deg, rgba(168, 85, 247, 0.7), rgba(217, 70, 239, 0.6), rgba(34, 211, 238, 0.8), rgba(20, 184, 166, 0.6))',
              'linear-gradient(270deg, rgba(217, 70, 239, 0.6), rgba(34, 211, 238, 0.8), rgba(20, 184, 166, 0.6), rgba(168, 85, 247, 0.7))',
              'linear-gradient(315deg, rgba(34, 211, 238, 0.8), rgba(20, 184, 166, 0.6), rgba(168, 85, 247, 0.7), rgba(217, 70, 239, 0.6))',
              'linear-gradient(360deg, rgba(20, 184, 166, 0.6), rgba(168, 85, 247, 0.7), rgba(217, 70, 239, 0.6), rgba(34, 211, 238, 0.8))',
            ]
          } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Rim lighting - top edge */}
        <div 
          className="absolute top-0 left-[10%] right-[10%] h-[1px] pointer-events-none transition-opacity duration-700"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.8), rgba(168, 85, 247, 0.6), transparent)',
            opacity: isHovered ? 1 : 0.3,
            filter: 'blur(2px)',
          }}
        />

        {/* Inner holographic glow */}
        <div 
          className="absolute inset-0 rounded-[32px] pointer-events-none transition-opacity duration-700"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(34, 211, 238, 0.15), transparent 50%), radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.12), transparent 50%)',
            opacity: isHovered ? 1 : 0.5,
          }}
        />

        {/* Frosted glass overlay */}
        <div 
          className="absolute inset-0 rounded-[32px] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
            backdropFilter: 'blur(20px)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Icon at top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: (index % industries.length) * 0.08 + 0.2 }}
            className="flex justify-center"
          >
            <GeometricIcon 
              type={industry.icon} 
              isHovered={isHovered}
            />
          </motion.div>

          {/* Text content at bottom */}
          <div className="space-y-3">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % industries.length) * 0.08 + 0.4 }}
              className="text-3xl lg:text-4xl font-bold leading-tight transition-all duration-700"
              style={{
                color: isHovered ? '#22D3EE' : '#FFFFFF',
                textShadow: isHovered ? '0 0 30px rgba(34, 211, 238, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)' : '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              {industry.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % industries.length) * 0.08 + 0.5 }}
              className="text-base lg:text-lg leading-relaxed transition-colors duration-700"
              style={{
                color: isHovered ? 'rgba(165, 243, 252, 0.9)' : 'rgba(255, 255, 255, 0.6)',
              }}
            >
              {industry.description}
            </motion.p>
          </div>
        </div>

        {/* Outer holographic glow */}
        <div 
          className="absolute inset-0 -z-10 rounded-[32px] pointer-events-none transition-opacity duration-700"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(34, 211, 238, 0.25), rgba(168, 85, 247, 0.15), transparent 70%)',
            filter: 'blur(60px)',
            transform: 'translateZ(-20px)',
            opacity: isHovered ? 1 : 0,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function ZambiaCaseStudiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Create many copies for truly infinite scroll
  const infiniteIndustries = Array(20).fill(industries).flat();

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Start at middle position
    const slideWidth = 440; // approximate width + gap
    const startPosition = slideWidth * industries.length * 10; // Start at 10th set
    container.scrollLeft = startPosition;

    let rafId: number;
    let lastScrollLeft = startPosition;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const slideWidth = 440;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Calculate active slide
      const currentIndex = Math.round(scrollLeft / slideWidth);
      const normalizedIndex = currentIndex % industries.length;
      setActiveSlide(normalizedIndex);

      // Seamless loop: when we get near the end or start, instantly jump to equivalent position
      if (scrollLeft < slideWidth * 2) {
        // Near start, jump forward
        container.scrollLeft = scrollLeft + slideWidth * industries.length * 5;
        lastScrollLeft = container.scrollLeft;
      } else if (scrollLeft > maxScroll - slideWidth * 2) {
        // Near end, jump backward
        container.scrollLeft = scrollLeft - slideWidth * industries.length * 5;
        lastScrollLeft = container.scrollLeft;
      }
      
      lastScrollLeft = scrollLeft;
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const slideWidth = 440;
    const currentScroll = container.scrollLeft;
    const currentIndex = Math.round(currentScroll / slideWidth);
    const currentSet = Math.floor(currentIndex / industries.length);
    
    // Scroll to the target index within the current set
    const targetIndex = currentSet * industries.length + index;
    
    container.scrollTo({
      left: slideWidth * targetIndex,
      behavior: 'smooth'
    });
  };

  return (
    <section id="work" className="relative bg-[#0B0B12] py-32 lg:py-48 overflow-hidden">
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
          className="absolute bottom-[15%] right-[8%] w-[400px] h-[400px] bg-gradient-to-tl from-[#E879F9]/15 to-[#B44CFF]/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180, 76, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180, 76, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-20 leading-tight"
        >
          Built for Industries
          <br />
          <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
            Where Authority Drives Revenue
          </span>
        </motion.h2>
        
        {/* Horizontal Scrolling Industries Reel */}
        <div className="relative">
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 px-1 -mx-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {infiniteIndustries.map((industry, index) => (
              <IndustrySlide key={`${industry.id}-${index}`} industry={industry} index={index} />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className="group cursor-pointer"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div 
                  className={`
                    h-2 rounded-full transition-all duration-500
                    ${activeSlide === index 
                      ? 'w-10' 
                      : 'w-2 group-hover:w-3'
                    }
                  `}
                  style={{
                    background: activeSlide === index 
                      ? 'linear-gradient(90deg, #22D3EE, #14B8A6, #A855F7)' 
                      : 'rgba(255, 255, 255, 0.2)',
                    boxShadow: activeSlide === index 
                      ? '0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(168, 85, 247, 0.4)' 
                      : 'none'
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}