import HeroSection from '../home/HeroSection';
import KPISection from '../home/KPISection';
import ServicesSection from '../home/ServicesSection';
import CasesSection from '../home/CasesSection';
import CTASection from '../home/CTASection';

interface HomePageProps {
  onNavigate: (page: string) => void;
  language: string;
}

export default function HomePage({ onNavigate, language }: HomePageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} language={language} />
      <KPISection language={language} />
      <ServicesSection onNavigate={onNavigate} language={language} />
      <CasesSection onNavigate={onNavigate} language={language} />
      <CTASection onNavigate={onNavigate} language={language} />
    </div>
  );
}
