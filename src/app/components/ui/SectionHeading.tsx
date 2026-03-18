import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  highlight?: ReactNode;
  center?: boolean;
  className?: string;
}

export function SectionHeading({ 
  children, 
  highlight, 
  center = false,
  className = '' 
}: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
        center ? 'text-center' : ''
      } ${className}`}
    >
      {children}
      {highlight && (
        <>
          <br />
          <span className="bg-gradient-to-r from-[#B44CFF] to-[#5A7CFF] bg-clip-text text-transparent">
            {highlight}
          </span>
        </>
      )}
    </motion.h2>
  );
}
