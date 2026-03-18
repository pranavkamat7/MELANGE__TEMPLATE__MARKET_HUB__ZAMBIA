import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const systems = [
  'Search Authority',
  'Demand Capture',
  'Narrative Control',
  'Automation',
  'Conversion Architecture'
];

export function SystemCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.6,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.6,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = systems.length - 1;
      if (newIndex >= systems.length) newIndex = 0;
      return newIndex;
    });
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const getVisibleIndices = () => {
    const prev = currentIndex === 0 ? systems.length - 1 : currentIndex - 1;
    const next = currentIndex === systems.length - 1 ? 0 : currentIndex + 1;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getVisibleIndices();

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <motion.div
        key={`glow-${currentIndex}`}
        className="absolute inset-0 opacity-30 blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, #7F4EFF 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, #3858FF 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, #D540FF 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, #7F4EFF 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Side cards (prev and next) */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        {/* Previous card */}
        <motion.div
          initial={{ opacity: 0, x: -200, rotateY: -25, scale: 0.7 }}
          animate={{ opacity: 0.3, x: 0, rotateY: -25, scale: 0.7 }}
          className="bg-[#0B0B12] border border-white/10 p-8 rounded-2xl w-[300px] h-[400px] flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          <h3 className="text-3xl font-bold text-white/50">{systems[prev]}</h3>
        </motion.div>

        {/* Next card */}
        <motion.div
          initial={{ opacity: 0, x: 200, rotateY: 25, scale: 0.7 }}
          animate={{ opacity: 0.3, x: 0, rotateY: 25, scale: 0.7 }}
          className="bg-[#0B0B12] border border-white/10 p-8 rounded-2xl w-[300px] h-[400px] flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          <h3 className="text-3xl font-bold text-white/50">{systems[next]}</h3>
        </motion.div>
      </div>

      {/* Main carousel container */}
      <div className="relative w-[500px] h-[500px]" style={{ perspective: '2000px' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              rotateY: { duration: 0.6 },
              scale: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="relative w-full h-full bg-[#0B0B12] border border-white/20 rounded-3xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{
                  background: [
                    'linear-gradient(45deg, #D540FF, #7F4EFF, #3858FF, #D540FF)',
                    'linear-gradient(90deg, #D540FF, #7F4EFF, #3858FF, #D540FF)',
                    'linear-gradient(135deg, #D540FF, #7F4EFF, #3858FF, #D540FF)',
                    'linear-gradient(180deg, #D540FF, #7F4EFF, #3858FF, #D540FF)',
                    'linear-gradient(45deg, #D540FF, #7F4EFF, #3858FF, #D540FF)',
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Particle effect */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#D540FF] rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -50, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Scanning line effect */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D540FF] to-transparent"
                animate={{
                  top: ['0%', '100%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Content */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-12">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="mb-8"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7F4EFF] to-[#3858FF] flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-[#0B0B12] flex items-center justify-center"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(127, 78, 255, 0.5)',
                          '0 0 40px rgba(213, 64, 255, 0.8)',
                          '0 0 20px rgba(127, 78, 255, 0.5)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-3xl font-bold bg-gradient-to-r from-[#D540FF] to-[#7F4EFF] bg-clip-text text-transparent">
                        {currentIndex + 1}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight"
                >
                  <motion.span
                    className="bg-gradient-to-r from-white via-[#D540FF] to-white bg-clip-text text-transparent"
                    animate={{
                      opacity: [1, 0.85, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    {systems[currentIndex]}
                  </motion.span>
                </motion.h3>

                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="h-1 w-32 bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] rounded-full"
                />
              </div>

              {/* Corner accents */}
              {[
                'top-4 left-4',
                'top-4 right-4',
                'bottom-4 left-4',
                'bottom-4 right-4',
              ].map((position, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${position} w-3 h-3`}
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#D540FF] to-[#7F4EFF] rounded-sm" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => paginate(-1)}
        className="hidden md:flex absolute left-8 z-20 w-14 h-14 rounded-full bg-gradient-to-r from-[#D540FF] to-[#7F4EFF] items-center justify-center hover:scale-110 transition-transform group"
        aria-label="Previous system"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-125 transition-transform" />
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 20px rgba(127, 78, 255, 0.5)',
              '0 0 40px rgba(127, 78, 255, 0.8)',
              '0 0 20px rgba(127, 78, 255, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </button>

      <button
        onClick={() => paginate(1)}
        className="hidden md:flex absolute right-8 z-20 w-14 h-14 rounded-full bg-gradient-to-r from-[#D540FF] to-[#7F4EFF] items-center justify-center hover:scale-110 transition-transform group"
        aria-label="Next system"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-125 transition-transform" />
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 20px rgba(127, 78, 255, 0.5)',
              '0 0 40px rgba(127, 78, 255, 0.8)',
              '0 0 20px rgba(127, 78, 255, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {systems.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`rounded-full transition-all ${
              index === currentIndex ? 'w-12 h-3' : 'w-3 h-3'
            }`}
            animate={{
              backgroundColor:
                index === currentIndex ? '#D540FF' : 'rgba(255, 255, 255, 0.3)',
            }}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to ${systems[index]}`}
          />
        ))}
      </div>
    </div>
  );
}