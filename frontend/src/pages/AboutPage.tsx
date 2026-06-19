import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { EngineeringPrinciples } from "@/components/about/EngineeringPrinciples";
import { FounderSection } from "@/components/about/FounderSection";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-fade-in-up');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    };
    
    // Initialize elements as hidden
    document.querySelectorAll('.animate-fade-in-up').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700', 'ease-out');
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-neo-blue/20">
      <Helmet>
        <title>About | Neo Perion</title>
        <meta name="description" content="We are engineers first. Consultants second. Discover Neo Perion's mission and the team building stable, scalable enterprise products." />
      </Helmet>

      {/* Navbar might need a prop to be dark text since background is white. Assuming it handles scrolling/transparent states. */}
      <Navbar />
      
      <main>
        <AboutHero />
        <CompanyStory />
        <AboutTimeline />
        <EngineeringPrinciples />
        <FounderSection />
      </main>

      <Footer />
    </div>
  );
}
