import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Services } from "@/components/Services";
import { WhyVTSHA } from "@/components/WhyVTSHA";
import { Solutions } from "@/components/Solutions";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Metrics } from "@/components/Metrics";
import { Pricing } from "@/components/Pricing";
import { TechStack } from "@/components/TechStack";
import { FAQ } from "@/components/FAQ";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyVTSHA />
        <Solutions />
        <UseCases />
        <HowItWorks />
        <Metrics />
        <Pricing />
        <TechStack />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
