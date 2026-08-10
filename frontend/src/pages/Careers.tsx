import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seoConfig";
import { CareersHero } from "@/components/careers/CareersHero";
import { BenefitsGrid } from "@/components/careers/BenefitsGrid";
import { JobListings } from "@/components/careers/JobListings";
import { MobileGate, MobileShell } from "@/components/mobile";
import { SITE_URL } from "@/lib/seo";

export default function Careers() {
  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Careers at AINCURU",
    "description": "Join our team of elite engineers, designers, and AI architects building next-generation SaaS and AI applications.",
    "publisher": {
      "@type": "Organization",
      "name": "AINCURU LLP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aincuru.com/images/np-logo.png"
      }
    }
  };

  return (
    <div className="manuscript-root min-h-[auto]">
      <SEO {...seoConfig.careers} />
      <Header />
      
      <main className="pb-24 relative overflow-hidden parchment-surface">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(91,58,31,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(91,58,31,0.035)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <CareersHero theme="light" />
        <BenefitsGrid theme="light" />
        <JobListings theme="light" />
      </main>
      
      <Footer />
    </div>
  );
}
