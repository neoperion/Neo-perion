import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyNeoPerion } from "@/components/WhyNeoPerion";
import { HomeCTA } from "@/components/HomeCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/seo";
import { seoConfig } from "@/lib/seoConfig";

import { TrustedBy } from "@/components/features/home/TrustedBy";
import { SelectedWork } from "@/components/features/home/SelectedWork";
import { AboutFounderCTA } from "@/components/about/AboutFounderCTA";

/**
 * Homepage. Responsive-first single design language across all breakpoints
 * (the legacy dark-glass MobileHome swap was retired in the Pass 1 redesign).
 */
const Index = () => (
  <div className="min-h-screen bg-canvas text-ink selection:bg-brand/20">
    <SEO {...seoConfig.home} />
    <Header />
    <main>
      <Hero />
      <TrustedBy />
      <Services />
      <AboutFounderCTA />
      <WhyNeoPerion />
      <SelectedWork />
      <HomeCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
