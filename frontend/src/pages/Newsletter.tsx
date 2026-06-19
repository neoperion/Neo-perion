import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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

  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-screen bg-[#02040A] text-white selection:bg-neo-blue/30">
        <Helmet>
          <title>Newsletter & Insights | Neo Perion</title>
          <meta name="description" content="Join founders and CTOs who read our weekly deep dives into AI architecture, product engineering, and scaling enterprise SaaS." />
        </Helmet>

        <Header />

        <main className="pb-24">
          <NewsletterHero />
          
          <div className="max-w-4xl mx-auto px-8 lg:px-16 -mt-8 relative z-20">
            <SubscriptionForm />
          </div>

          <PastIssues />
        </main>

        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <main className="pb-12">
            <NewsletterHero />
            
            <div className="px-6 -mt-6 relative z-20">
              <SubscriptionForm />
            </div>

            <div className="px-6 mt-12">
              <PastIssues />
            </div>
          </main>
        </div>
      </MobileShell>
    </MobileGate>
  );
}
