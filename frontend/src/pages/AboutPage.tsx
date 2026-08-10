import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seoConfig";
import { SITE_URL } from "@/lib/seo";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeCTA } from "@/components/HomeCTA";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutOrigin } from "@/components/about/AboutOrigin";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutLessons } from "@/components/about/AboutLessons";
import { AboutMethod } from "@/components/about/AboutMethod";
import { AboutOfferings } from "@/components/about/AboutOfferings";
import { AboutPeople } from "@/components/about/AboutPeople";
import { AboutFuture } from "@/components/about/AboutFuture";
import { AboutFounderCTA } from "@/components/about/AboutFounderCTA";

import { MobileGate } from "@/components/mobile";
import { MobileAbout } from "@/components/mobile/About/MobileAbout";

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
      "@id": `${SITE_URL}/company/about`
    },
    "name": "About AINCURU LLP",
    "description": "Meet the founders and team behind AINCURU LLP: founder-led AI, web and mobile engineering from Chennai, Tamil Nadu, India."
  };

  return (
    <>
      <SEO {...seoConfig.about} />
      <MobileGate mobileOnly fallback={
        <div className="manuscript-root min-h-[auto] overflow-x-clip max-w-full w-full box-border">
          <Header />
          <main>
            {/* 01 HERO */}
            <AboutHero />
            {/* 02 ORIGIN */}
            <AboutOrigin />
            {/* 03 THE JOURNEY */}
            <AboutTimeline />
            {/* 04 WHAT WE LEARNED */}
            <AboutLessons />
            {/* 05 THE AINCURU METHOD */}
            <AboutMethod />
            {/* 06 WHAT WE BUILD */}
            <AboutOfferings />
            {/* 07 THE PEOPLE */}
            <AboutPeople />
            {/* 08 WHAT COMES NEXT */}
            <AboutFuture />
            {/* 09 FOUNDER LETTER CTA */}
            <AboutFounderCTA />
            {/* 10 FINAL CTA */}
            <HomeCTA />
          </main>
          <Footer />
        </div>
      }>
        <MobileAbout />
      </MobileGate>
    </>
  );
}


