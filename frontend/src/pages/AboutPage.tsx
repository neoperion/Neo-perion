import React, { useEffect } from 'react';
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { EngineeringPrinciples } from "@/components/about/EngineeringPrinciples";
import { FounderSection } from "@/components/about/FounderSection";
import { CompanyStats } from "@/components/about/CompanyStats";
import { MobileGate } from "@/components/mobile";
import { MobileAbout } from "@/components/mobile/About/MobileAbout";
import { useLocation } from 'react-router-dom';

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.neoperion.com/company/about"
    },
    "name": "About Neo Perion Solutions",
    "description": "We are engineers first. Consultants second. Discover Neo Perion's mission and the team building stable, scalable enterprise products."
  };

  return (
    <>
      <SEO 
        title="About Us"
        description="We are engineers first. Consultants second. Discover Neo Perion's mission and the team building stable, scalable enterprise products."
        url="https://www.neoperion.com/company/about"
        jsonLd={jsonLd}
      />
      <MobileGate mobileOnly fallback={
        <div className="min-h-[auto] bg-[#0A0A0B] text-[#09090B] selection:bg-neo-blue/20">
          <Header /><main><AboutHero /><CompanyStats /><CompanyStory /><AboutTimeline /><EngineeringPrinciples /><FounderSection /></main><Footer />
        </div>
      }>
        <MobileAbout />
      </MobileGate>
    </>
  );
}

