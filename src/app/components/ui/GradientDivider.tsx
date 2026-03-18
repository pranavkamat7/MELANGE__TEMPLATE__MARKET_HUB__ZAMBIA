interface GradientDividerProps {
  className?: string;
}

export function GradientDivider({ className = '' }: GradientDividerProps) {
  return (
    <div className={`relative h-[2.5px] w-20 lg:w-24 mx-auto ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D540FF]/50 via-[#7F4EFF]/50 via-[#3858FF]/50 to-transparent rounded-full" />
      <div className="absolute inset-0 blur-[3px] bg-gradient-to-r from-transparent via-[#D540FF]/30 via-[#7F4EFF]/30 to-transparent" />
    </div>
  );
}