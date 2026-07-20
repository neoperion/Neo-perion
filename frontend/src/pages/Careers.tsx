import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { CareersHero } from "@/components/careers/CareersHero";
import { BenefitsGrid } from "@/components/careers/BenefitsGrid";
import { JobListings } from "@/components/careers/JobListings";
import { MobileGate, MobileShell } from "@/components/mobile";
import { SITE_URL } from "@/lib/seo";

export default function Careers() {
  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Careers at Neo Perion",
    "description": "Join our team of elite engineers, designers, and AI architects building next-generation SaaS and AI applications.",
    "publisher": {
      "@type": "Organization",
      "name": "Neo Perion Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://neoperion.com/images/np-logo.png"
      }
    }
  };

  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-[auto] bg-[#0A0A0B] text-white selection:bg-neo-blue/20">
        <SEO
          title="Careers — Join Neo Perion Solutions | Chennai"
          description="Join our team of senior engineers, designers and AI architects building production-grade software and AI systems for startups and SMEs."
          url={`${SITE_URL}/company/careers`}
          jsonLd={careersSchema}
        />
        <Header />
        
        <main className="pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <CareersHero theme="dark" />
          <BenefitsGrid theme="dark" />
          <JobListings theme="dark" />
        </main>
        
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <div className="px-mobile-base pt-8">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">Careers</p>
            <h1 className="text-display-lg text-white tracking-tight">Build the future.</h1>
            <p className="text-base text-white/70 mt-3 mb-6">Join Neo Perion and build the future of intelligent software.</p>
          </div>
          <BenefitsGrid theme="dark" />
          <JobListings theme="dark" />
        </div>
      </MobileShell>
    </MobileGate>
  );
}

