import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  background?: 'dark' | 'darker' | 'white';
  className?: string;
}

export function SectionWrapper({ 
  children, 
  background = 'dark',
  className = '' 
}: SectionWrapperProps) {
  const bgColors = {
    dark: 'bg-[#0B0B12]',
    darker: 'bg-[#0F172A]',
    white: 'bg-white text-[#0F172A]'
  };

  return (
    <section className={`${bgColors[background]} py-32 lg:py-48 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}
