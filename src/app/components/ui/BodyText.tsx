import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface BodyTextProps {
  children: ReactNode;
  size?: 'normal' | 'large';
  color?: 'muted' | 'white';
  center?: boolean;
  maxWidth?: string;
  className?: string;
}

export function BodyText({ 
  children, 
  size = 'large',
  color = 'muted',
  center = false,
  maxWidth = 'max-w-5xl',
  className = '' 
}: BodyTextProps) {
  const sizeClasses = {
    normal: 'text-xl md:text-2xl',
    large: 'text-2xl md:text-3xl lg:text-4xl'
  };

  const colorClasses = {
    muted: 'text-[#94A3B8]',
    white: 'text-white/80'
  };

  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`${sizeClasses[size]} ${colorClasses[color]} ${maxWidth} ${
        center ? 'mx-auto text-center' : ''
      } leading-relaxed ${className}`}
    >
      {children}
    </motion.p>
  );
}
