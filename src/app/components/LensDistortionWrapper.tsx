import { ReactNode } from 'react';

interface LensDistortionWrapperProps {
  children: ReactNode;
}

export function LensDistortionWrapper({ children }: LensDistortionWrapperProps) {
  return (
    <>
      {/* SVG filter for text distortion effect */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="heroTextLensDistortion" x="-50%" y="-50%" width="200%" height="200%">
            {/* Create turbulence for distortion */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.008"
              numOctaves="2"
              seed="8"
              result="turbulence"
            />
            {/* Apply displacement to create lens warping */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="3.5"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacement"
            />
            {/* Very subtle blur to smooth the distortion */}
            <feGaussianBlur in="displacement" stdDeviation="0.3" />
          </filter>
        </defs>
      </svg>

      {/* Content wrapper with subtle filter applied */}
      <div 
        style={{ 
          filter: 'url(#heroTextLensDistortion)',
          willChange: 'filter',
        }}
      >
        {children}
      </div>
    </>
  );
}
