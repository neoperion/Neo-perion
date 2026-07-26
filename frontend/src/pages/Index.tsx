import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyNeoPerion } from "@/components/WhyNeoPerion";
import { HomeCTA } from "@/components/HomeCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SITE_URL } from "@/lib/seo";

import { TrustedBy } from "@/components/features/home/TrustedBy";
import { HomeTestimonials } from "@/components/features/home/HomeTestimonials";

/**
 * Homepage. Responsive-first single design language across all breakpoints
 * (the legacy dark-glass MobileHome swap was retired in the Pass 1 redesign).
 */
const Index = () => (
  <div className="min-h-screen bg-canvas text-ink selection:bg-brand/20">
    <SEO
      title="Neo Perion Solutions | AI Automation, Web & App Development"
      description="Neo Perion Solutions develops AI-powered software, automation systems, web applications, and digital platforms that help organizations scale faster."
      keywords="AI automation company, custom web application development, mobile app development, data analytics, AI engineering, India software company"
      url={`${SITE_URL}/`}
    />
    <Header />
    <main>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyNeoPerion />
      <HomeTestimonials />
      <HomeCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
