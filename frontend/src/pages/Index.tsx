import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Metrics } from "@/components/Metrics";
import { Services } from "@/components/Services";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhyNeoPerion } from "@/components/WhyNeoPerion";
import { Philosophy } from "@/components/Philosophy";
import { HomeCTA } from "@/components/HomeCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Metrics />
        <Services />
        <ProcessTimeline />
        <WhyNeoPerion />
        <Philosophy />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
