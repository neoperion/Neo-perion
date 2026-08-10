import React from 'react';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";
import { LocationMap } from "@/components/contact/LocationMap";
import { MobileGate, MobileShell } from "@/components/mobile";
import { SITE_URL } from "@/lib/seo";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seoConfig";

export default function Contact() {
  return (
    <MobileGate mobileOnly fallback={
      <div className="manuscript-root min-h-screen">
        
        <SEO {...seoConfig.contact} />
        <Header />

        <main className="parchment-surface pb-32">
          <ContactHero theme="light" />

          {/* ── Two-panel ──────────────────────────────────────────────── */}
          <div className="max-w-7xl mx-auto px-8 lg:px-16 mt-14">
            <div className="grid lg:grid-cols-[1fr_1px_1fr] items-start gap-12 lg:gap-0">

              {/* LEFT — Send a message */}
              <div className="lg:pr-16">
                <div className="mb-10">
                  <span className="chapter-eyebrow">01 — Send a message</span>
                  <h2 className="mt-3 heading-manuscript text-[1.75rem]">Send us a message</h2>
                  <p className="mt-2.5 text-[13px] text-manuscript-inkMuted leading-relaxed">
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
                <div className="flex-1 w-px bg-manuscript-parchmentDeep" />
                <div className="my-4 w-9 h-9 rounded-full border border-manuscript-parchmentDeep bg-manuscript-parchmentLight flex items-center justify-center shrink-0">
                  <span className="font-mono text-[9px] font-bold text-manuscript-copperMuted tracking-widest">OR</span>
                </div>
                <div className="flex-1 w-px bg-manuscript-parchmentDeep" />
              </div>

              {/* Mobile OR divider */}
              <div className="lg:hidden flex items-center gap-4">
                <div className="flex-1 h-px bg-manuscript-parchmentDeep" />
                <span className="font-mono text-[10px] font-bold text-manuscript-copperMuted tracking-widest">OR</span>
                <div className="flex-1 h-px bg-manuscript-parchmentDeep" />
              </div>

              {/* RIGHT — Book a call */}
              <div className="lg:pl-16">
                <div className="mb-8">
                  <span className="chapter-eyebrow">02 — Book a call</span>
                  <h2 className="mt-3 heading-manuscript text-[1.75rem]">Book a discovery call</h2>
                  <p className="mt-2.5 text-[13px] text-manuscript-inkMuted leading-relaxed">
                    A free 30-minute session with our product architects — no pitch, just honest advice about your project.
                  </p>
                </div>

                {/* Meta chips */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {['30 minutes', 'Video call', 'Free · No obligation'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-manuscript-parchmentDeep text-[12px] text-manuscript-inkMuted font-manuscriptBody font-medium bg-manuscript-parchmentLight"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper shrink-0" />
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
              <div className="flex-1 h-px parchment-surface/[0.06]" />
              <span className="font-mono text-[10px] font-bold text-white/25 tracking-widest">OR</span>
              <div className="flex-1 h-px parchment-surface/[0.06]" />
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


