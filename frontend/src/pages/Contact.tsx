import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";
import { LocationMap } from "@/components/contact/LocationMap";
import { MobileGate, MobileShell } from "@/components/mobile";

export default function Contact() {
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
      <div className="min-h-[auto] bg-[#02040A] text-white selection:bg-neo-blue/30">
        <Helmet><title>Contact Us | Neo Perion</title><meta name="description" content="Get in touch with Neo Perion. Let's build something extraordinary together." /></Helmet>
        <Header />
        <main className="pb-24">
          <ContactHero />
          <div className="max-w-7xl mx-auto px-8 lg:px-16 mt-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-12"><ContactForm /><LocationMap /></div>
              <div className="sticky top-32 h-fit">
                <div className="mb-6"><h3 className="text-2xl font-bold text-white mb-2">Book a Discovery Call</h3><p className="text-slate-400">Schedule a 30-minute consultation with our product architects.</p></div>
                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <div className="px-mobile-base pt-8">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">Contact</p>
            <h1 className="text-display-lg text-white tracking-tight">Let's build together.</h1>
            <p className="text-base text-white/70 mt-3 mb-6">Tell us about your project. We respond within 24 hours.</p>
          </div>
          <ContactForm />
          <CalendlyEmbed />
        </div>
      </MobileShell>
    </MobileGate>
  );
}

