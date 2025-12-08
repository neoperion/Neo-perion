import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Services } from "@/components/Services";
import { WhyVTSHA } from "@/components/WhyVTSHA";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#02040A' }}>
      <SEO />
      <Header />
      <main>
        <Hero />
        <ScrollReveal direction="left">
          <Services />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <UseCases />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <HowItWorks />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <WhyVTSHA />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <FAQ />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <About />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
