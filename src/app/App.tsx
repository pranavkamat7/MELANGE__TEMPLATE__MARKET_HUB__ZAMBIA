import { useState, useEffect } from 'react';
import { Header } from '@/app/components/sections/Header';
import { MobileMenuOverlay } from '@/app/components/sections/MobileMenuOverlay';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { ManifestoSection } from '@/app/components/sections/ManifestoSection';
import { InfrastructureRevealSection } from '@/app/components/sections/InfrastructureRevealSection';
import { SystemThinkingSection } from '@/app/components/sections/SystemThinkingSection';
import { WhyItWorksSection } from '@/app/components/sections/WhyItWorksSection';
import { AnswerEngineSection } from '@/app/components/sections/AnswerEngineSection';
import { PerformanceStackSection } from '@/app/components/sections/PerformanceStackSection';
import { AIContentSection } from '@/app/components/sections/AIContentSection';
import { VisualDominanceSection } from '@/app/components/sections/VisualDominanceSection';
import { AutomationControlSection } from '@/app/components/sections/AutomationControlSection';
import { IndustryConstellationSection } from '@/app/components/sections/IndustryConstellationSection';
import { MarketAdaptationSection } from '@/app/components/sections/MarketAdaptationSection';
import { LusakaCitySection } from '@/app/components/sections/LusakaCitySection';
import { LusakaFAQSection } from '@/app/components/sections/LusakaFAQSection';
import { LeadershipSection } from '@/app/components/sections/LeadershipSection';
import { EngagementProcessSection } from '@/app/components/sections/EngagementProcessSection';
import { GeographicFootprintSection } from '@/app/components/sections/GeographicFootprintSection';
import { FinalStatementSection } from '@/app/components/sections/FinalStatementSection';
import { TrackRecordSection } from '@/app/components/sections/TrackRecordSection';
import { ClientSignalsSection } from '@/app/components/sections/ClientSignalsSection';
import { FinalCTASection } from '@/app/components/sections/FinalCTASection';
import { AccoladesSection } from '@/app/components/sections/AccoladesSection';
import { ContactSection } from '@/app/components/sections/ContactSection';
import { Footer } from '@/app/components/sections/Footer';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    let inactivityTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mark as interacted on first scroll
      if (!hasInteracted) {
        setHasInteracted(true);
      }
      
      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(false);
      }
      
      setLastScrollY(currentScrollY);
      setIsInactive(false);
      clearTimeout(inactivityTimer);
      
      if (currentScrollY <= 100) {
        setIsScrollingUp(true);
        inactivityTimer = setTimeout(() => setIsInactive(true), 10000);
      }
    };

    const handleActivity = () => {
      // Mark as interacted on first activity
      if (!hasInteracted) {
        setHasInteracted(true);
      }
      
      setIsInactive(false);
      clearTimeout(inactivityTimer);
      
      if (window.scrollY <= 100) {
        inactivityTimer = setTimeout(() => setIsInactive(true), 10000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('touchmove', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('keydown', handleActivity);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('touchmove', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      clearTimeout(inactivityTimer);
    };
  }, [lastScrollY, hasInteracted]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="bg-[#0B0B12] text-white">
      <MobileMenuOverlay 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <Header 
        isScrollingUp={isScrollingUp}
        isInactive={isInactive}
        hasInteracted={hasInteracted}
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <HeroSection />
      <ManifestoSection />
      <InfrastructureRevealSection />
      <SystemThinkingSection />
      <WhyItWorksSection />
      <AnswerEngineSection />
      <PerformanceStackSection />
      <AIContentSection />
      <VisualDominanceSection />
      <AutomationControlSection />
      <IndustryConstellationSection />
      <MarketAdaptationSection />
      <LusakaCitySection />
      <LusakaFAQSection />
      <LeadershipSection />
      <EngagementProcessSection />
      <GeographicFootprintSection />
      <FinalStatementSection />
      <TrackRecordSection />
      <ClientSignalsSection />
      <FinalCTASection />
      <AccoladesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}