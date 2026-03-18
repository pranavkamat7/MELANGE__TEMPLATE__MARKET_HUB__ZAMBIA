import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
}

export function SecondaryButton({ 
  children, 
  onClick,
  showArrow = false,
  className = '' 
}: SecondaryButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 1000);
    onClick?.(e);
  };

  return (
    <motion.button 
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      onClick={handleClick}
      className={`group relative px-2 py-4 rounded-[20px] text-base overflow-visible flex items-center gap-2 justify-center ${className} ${isActive ? 'active' : ''}`}
    >
      {/* Deep shadow foundation */}
      <div className={`absolute inset-0 rounded-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-shadow duration-300 ${isActive ? 'shadow-[0_16px_60px_rgba(0,0,0,0.85),0_6px_20px_rgba(0,0,0,0.6)]' : 'group-hover:shadow-[0_16px_60px_rgba(0,0,0,0.85),0_6px_20px_rgba(0,0,0,0.6)]'}`} />
      
      {/* Near-black base housing */}
      <div className="absolute inset-0 bg-[#0B0B12] rounded-[20px] border border-white/5" />
      
      {/* Inner reactor core glow - NEW MÉLANGE BLUE */}
      <div className="absolute inset-[3px] rounded-[18px] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-radial from-[#3858FF]/40 via-[#3858FF]/30 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-50 group-hover:opacity-80'}`} />
        <div className={`absolute inset-0 bg-gradient-to-br from-[#3858FF]/25 via-[#3858FF]/25 to-[#3858FF]/25 transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-60 group-hover:opacity-90'}`} />
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#3858FF]/20 to-transparent transition-all duration-500 ${isActive ? '!via-[#3858FF]/35' : 'group-hover:via-[#3858FF]/35'}`} />
      </div>
      
      {/* Glass coating edge highlight */}
      <div className={`absolute inset-0 rounded-[20px] border-t border-l transition-colors duration-300 ${isActive ? 'border-white/25' : 'border-white/15 group-hover:border-white/25'}`} />
      <div className={`absolute inset-0 rounded-[20px] border transition-colors duration-300 ${isActive ? 'border-[#3858FF]/40' : 'border-[#3858FF]/25 group-hover:border-[#3858FF]/40'}`} />
      
      {/* Controlled bloom aura */}
      <div className={`absolute -inset-[1px] rounded-[20px] transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <div className="absolute inset-0 rounded-[20px] shadow-[0_0_30px_rgba(56,88,255,0.4),0_0_60px_rgba(56,88,255,0.25),0_0_90px_rgba(56,88,255,0.15)]" />
      </div>
      
      {/* Magnetic power-up expansion - NEW MÉLANGE BLUE */}
      <div className={`absolute rounded-[18px] bg-gradient-to-r transition-all duration-300 ${isActive ? 'inset-[2px] from-[#3858FF]/20 via-[#3858FF]/20 to-[#3858FF]/20' : 'inset-[4px] from-[#3858FF]/0 via-[#3858FF]/0 to-[#3858FF]/0 group-hover:from-[#3858FF]/20 group-hover:via-[#3858FF]/20 group-hover:to-[#3858FF]/20 group-hover:inset-[2px]'}`} />
      
      {/* Content */}
      <span className="relative z-10 text-white font-semibold tracking-wide">
        {children}
      </span>
      {showArrow && (
        <ArrowRight className={`relative z-10 w-4 h-4 text-white/90 transition-all duration-300 ${isActive ? 'text-white translate-x-0.5' : 'group-hover:text-white group-hover:translate-x-0.5'}`} />
      )}
    </motion.button>
  );
}