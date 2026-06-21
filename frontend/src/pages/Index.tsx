import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhyNeoPerion } from "@/components/WhyNeoPerion";
import { HomeCTA } from "@/components/HomeCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

import { WhoWeAre } from "@/components/features/home/WhoWeAre";
import { IndustriesSection } from "@/components/features/home/IndustriesSection";
import { TechnologyExpertise } from "@/components/features/home/TechnologyExpertise";
import { CaseStudiesPreview } from "@/components/features/home/CaseStudiesPreview";
import { EngagementModel } from "@/components/features/home/EngagementModel";
import { HomeTestimonials } from "@/components/features/home/HomeTestimonials";
import { HomeFaq } from "@/components/features/home/HomeFaq";

/**
 * Homepage. Responsive-first single design language across all breakpoints
 * (the legacy dark-glass MobileHome swap was retired in the Pass 1 redesign).
 */
const Index = () => (
  <div className="min-h-screen bg-canvas text-ink selection:bg-brand/20">
    <SEO />
    <Header />
    <main>
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyNeoPerion />
      <CaseStudiesPreview />
      <HomeTestimonials />
      <EngagementModel />
      <ProcessTimeline />
      <TechnologyExpertise />
      <IndustriesSection />
      <HomeFaq />
      <HomeCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
