import React, { useEffect } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NewsletterHero } from "@/components/newsletter/NewsletterHero";
import { SubscriptionForm } from "@/components/newsletter/SubscriptionForm";
import { PastIssues } from "@/components/newsletter/PastIssues";
import { MobileGate, MobileShell } from "@/components/mobile";

export default function Newsletter() {
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

  const newsletterSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "NP Insights Newsletter - Neo Perion",
    "description": "Join founders and CTOs who read our weekly deep dives into AI architecture, product engineering, and scaling enterprise SaaS.",
    "publisher": {
      "@type": "Organization",
      "name": "Neo Perion Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.neoperion.com/images/np-logo.png"
      }
    }
  };

  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-[auto] bg-[#0A0A0B] text-[#09090B] selection:bg-neo-blue/20">
        <SEO 
          title="NP Insights Newsletter | AI & SaaS Engineering | Neo Perion"
          description="Join founders and CTOs who read our weekly deep-dives into AI agent architecture, Postgres scaling, and SaaS product engineering."
          url="https://www.neoperion.com/company/newsletter"
          jsonLd={newsletterSchema}
        />

        <Header />

        <main className="pb-24">
          <NewsletterHero theme="light" />
          
          <div className="max-w-4xl mx-auto px-8 lg:px-16 -mt-8 relative z-20">
            <SubscriptionForm theme="light" />
          </div>

          <PastIssues theme="light" />
        </main>

        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <main className="pb-12">
            <NewsletterHero theme="dark" />
            
            <div className="px-6 -mt-6 relative z-20">
              <SubscriptionForm theme="dark" />
            </div>

            <div className="px-6 mt-12">
              <PastIssues theme="dark" />
            </div>
          </main>
        </div>
      </MobileShell>
    </MobileGate>
  );
}

