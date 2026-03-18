import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface BlackHolePosition {
  x: number;
  y: number;
  size: number;
}

interface BlackHoleLensContextType {
  blackHolePosition: BlackHolePosition | null;
  setBlackHolePosition: (pos: BlackHolePosition) => void;
}

const BlackHoleLensContext = createContext<BlackHoleLensContextType | undefined>(undefined);

export function BlackHoleLensProvider({ children }: { children: ReactNode }) {
  const [blackHolePosition, setBlackHolePosition] = useState<BlackHolePosition | null>(null);

  return (
    <BlackHoleLensContext.Provider value={{ blackHolePosition, setBlackHolePosition }}>
      {children}
    </BlackHoleLensContext.Provider>
  );
}

export function useBlackHoleLens() {
  const context = useContext(BlackHoleLensContext);
  if (context === undefined) {
    throw new Error('useBlackHoleLens must be used within a BlackHoleLensProvider');
  }
  return context;
}
