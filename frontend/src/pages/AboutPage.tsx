import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { CoreValues } from "@/components/about/CoreValues";
import { WhyNeoPerion } from "@/components/about/WhyNeoPerion";
import { FounderSection } from "@/components/about/FounderSection";

export default function AboutPage() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-fade]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
      <Helmet>
        <title>About | Neo Perion</title>
        <meta name="description" content="Discover Neo Perion's mission, vision, and the team building stable, scalable SaaS solutions." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NEO PERION",
            "url": "https://www.neoperion.com",
            "logo": "https://www.neoperion.com/images/np-logo.png",
            "description": "AI-first product engineering company."
          })}
        </script>
      </Helmet>

      <Header />
      
      <main>
        <AboutHero />
        
        <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5 opacity-0 translate-y-4 transition-all duration-700" data-fade>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-6">Company Story</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                Engineering <br/>the future,<br/>one product at a time.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Neo Perion was founded to help teams navigate SaaS and automation without confusion, chaos, or unnecessary complexity. We've seen businesses struggle with fragmented tools, rushed implementations, and vendors who vanish once the project ships. We decided to build differently.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our work focuses on stability, clarity, and long-term impact — systems that don't just launch, but keep running clean as your business grows.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full"></div>
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img src="/images/np-logo.png" alt="Neo Perion" className="w-full h-full object-cover opacity-80 mix-blend-screen scale-150 p-20" />
              </div>
            </div>
          </div>
        </section>

        <MissionVision />
        <WhyNeoPerion />
        <CoreValues />
        <FounderSection />
      </main>

      <Footer />
    </div>
  );
}
