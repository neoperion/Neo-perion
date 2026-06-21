import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhyNeoPerion } from "@/components/WhyNeoPerion";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeCTA } from "@/components/HomeCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

import { IndustriesSection } from "@/components/features/home/IndustriesSection";
import { TechnologyExpertise } from "@/components/features/home/TechnologyExpertise";
import { CaseStudiesPreview } from "@/components/features/home/CaseStudiesPreview";

import { EngagementModel } from "@/components/features/home/EngagementModel";

import { MobileGate, MobileHome } from "@/components/mobile";

const Index = () => (
  <MobileGate mobileOnly fallback={
    <div className="min-h-[auto] bg-[#FAFAFA] text-slate-900 selection:bg-neo-blue/20">
      <SEO />
      <Header />
      <main>
        <Hero />
        <CaseStudiesPreview />
        <EngagementModel />
        <Services />
        <WhyNeoPerion />
        <TechnologyExpertise />
        <IndustriesSection />
        <ProcessTimeline />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  }>
    <MobileHome />
  </MobileGate>
);

export default Index;

