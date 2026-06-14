import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { BenefitsGrid } from "@/components/careers/BenefitsGrid";
import { JobListings } from "@/components/careers/JobListings";

export default function Careers() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-fade]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
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
        <title>Careers | Neo Perion</title>
        <meta name="description" content="Join Neo Perion and build the future of intelligent software." />
      </Helmet>

      <Header />
      
      <main>
        <CareersHero />
        <BenefitsGrid />
        <JobListings />
      </main>

      <Footer />
    </div>
  );
}
