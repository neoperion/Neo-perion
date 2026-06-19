import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhyNeoPerion } from "@/components/WhyNeoPerion";
import { Philosophy } from "@/components/Philosophy";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeCTA } from "@/components/HomeCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

import { TechMarquee } from "@/components/features/home/TechMarquee";
import { IndustriesSection } from "@/components/features/home/IndustriesSection";
import { TechnologyExpertise } from "@/components/features/home/TechnologyExpertise";
import { CaseStudiesPreview } from "@/components/features/home/CaseStudiesPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#02040A]">
      <SEO />
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <IndustriesSection />
        <Services />
        <WhyNeoPerion />
        <TechnologyExpertise />
        <ProcessTimeline />
        <CaseStudiesPreview />
        <Philosophy />
        <HomeContact />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
