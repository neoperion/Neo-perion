import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";
import { LocationMap } from "@/components/contact/LocationMap";
import { MobileGate, MobileShell } from "@/components/mobile";
import { SITE_URL } from "@/lib/seo";

export default function Contact() {
  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-screen bg-[#0A0A0B] text-white">
        <Helmet>
          <title>Contact Neo Perion Solutions | Get a Free AI Consultation</title>
          <meta name="description" content="Email, phone, WhatsApp and a short form. We reply within one business day. Neo Perion Solutions — Chennai, Tamil Nadu, India." />
          <link rel="canonical" href={`${SITE_URL}/contact`} />
          <meta property="og:url" content={`${SITE_URL}/contact`} />
          <meta property="og:title" content="Contact Neo Perion Solutions | Get a Free AI Consultation" />
          <meta property="og:description" content="Email, phone, WhatsApp and a short form. We reply within one business day. Neo Perion Solutions — Chennai, Tamil Nadu, India." />
          <meta name="twitter:url" content={`${SITE_URL}/contact`} />
          <meta name="twitter:title" content="Contact Neo Perion Solutions | Get a Free AI Consultation" />
          <meta name="twitter:description" content="Email, phone, WhatsApp and a short form. We reply within one business day. Neo Perion Solutions — Chennai, Tamil Nadu, India." />
        </Helmet>
        <Header heroDark />

        <main className="bg-[#0A0A0B] pb-32">
          <ContactHero />

          {/* ── Two-panel ──────────────────────────────────────────────── */}
          <div className="max-w-7xl mx-auto px-8 lg:px-16 mt-14">
            <div className="grid lg:grid-cols-[1fr_1px_1fr] items-start gap-12 lg:gap-0">

              {/* LEFT — Send a message */}
              <div className="lg:pr-16">
                <div className="mb-10">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#F77E0D]">01</span>
                  <h2 className="mt-2 text-[1.75rem] font-black tracking-tight text-white leading-tight">Send us a message</h2>
                  <p className="mt-2.5 text-[13px] text-white/40 leading-relaxed">
                    Tell us about your project and we'll respond within 24 hours.
                  </p>
                </div>

                <ContactForm />

                <div className="mt-12 pt-10 border-t border-white/[0.06]">
                  <LocationMap />
                </div>
              </div>

              {/* Vertical OR divider */}
              <div className="hidden lg:flex flex-col items-center self-stretch py-2">
                <div className="flex-1 w-px bg-white/[0.06]" />
                <div className="my-4 w-9 h-9 rounded-full border border-white/[0.10] bg-[#0A0A0B] flex items-center justify-center shrink-0">
                  <span className="font-mono text-[9px] font-bold text-white/30 tracking-widest">OR</span>
                </div>
                <div className="flex-1 w-px bg-white/[0.06]" />
              </div>

              {/* Mobile OR divider */}
              <div className="lg:hidden flex items-center gap-4">
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="font-mono text-[10px] font-bold text-white/25 tracking-widest">OR</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              {/* RIGHT — Book a call */}
              <div className="lg:pl-16">
                <div className="mb-8">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#F77E0D]">02</span>
                  <h2 className="mt-2 text-[1.75rem] font-black tracking-tight text-white leading-tight">Book a discovery call</h2>
                  <p className="mt-2.5 text-[13px] text-white/40 leading-relaxed">
                    A free 30-minute session with our product architects — no pitch, just honest advice about your project.
                  </p>
                </div>

                {/* Meta chips */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {['30 minutes', 'Video call', 'Free · No obligation'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] text-white/45 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F77E0D] shrink-0" />
                      {tag}
                    </span>
                  ))}
                </div>

                <CalendlyEmbed />
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    }>
      {/* Mobile layout */}
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8 bg-[#0A0A0B]">
          <ContactHero />
          <div className="px-5 pt-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#F77E0D] mb-2">01 — Message</p>
            <h2 className="text-2xl font-black text-white tracking-tight mb-6">Send us a message</h2>
            <ContactForm />

            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-white/[0.06]" />
              <span className="font-mono text-[10px] font-bold text-white/25 tracking-widest">OR</span>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>

            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#F77E0D] mb-2">02 — Call</p>
            <h2 className="text-2xl font-black text-white tracking-tight mb-4">Book a discovery call</h2>
            <p className="text-[13px] text-white/40 leading-relaxed mb-6">Free 30-minute session with our product architects.</p>
            <CalendlyEmbed />

            <div className="mt-10 pt-8 border-t border-white/[0.06]">
              <LocationMap />
            </div>
          </div>
        </div>
      </MobileShell>
    </MobileGate>
  );
}
