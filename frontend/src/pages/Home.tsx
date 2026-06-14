import React from 'react';
import { HeroSection } from '@/components/features/home/HeroSection';
import { TechMarquee } from '@/components/features/home/TechMarquee';
import { IndustriesSection } from '@/components/features/home/IndustriesSection';
import { ServicesSection } from '@/components/features/home/ServicesSection';
import { BentoGrid } from '@/components/features/home/BentoGrid';
import { TechnologyExpertise } from '@/components/features/home/TechnologyExpertise';
import { ProcessTimeline } from '@/components/features/home/ProcessTimeline';
import { CaseStudiesPreview } from '@/components/features/home/CaseStudiesPreview';
import { Testimonials } from '@/components/features/home/Testimonials';
import { CtaSection } from '@/components/features/home/CtaSection';

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#050816]">
      <HeroSection />
      <TechMarquee />
      <IndustriesSection />
      <ServicesSection />
      <BentoGrid />
      <TechnologyExpertise />
      <ProcessTimeline />
      <CaseStudiesPreview />
      <Testimonials />
      <CtaSection />
    </main>
  );
};
