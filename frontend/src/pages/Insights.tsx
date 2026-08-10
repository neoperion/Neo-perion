import React from 'react';
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seoConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileGate, MobileShell } from "@/components/mobile";
import { BookOpen } from 'lucide-react';

export default function Insights() {
  return (
      <div className="manuscript-root min-h-[auto]">
      <SEO {...seoConfig.insights} />
        
        <Header />

        <main className="parchment-surface min-h-[80vh] flex items-center justify-center relative overflow-hidden">
          {/* Engineering grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(91,58,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,31,0.04) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Copper warm glow — centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-manuscript-copper/4 blur-[160px] rounded-full pointer-events-none" />

          <div className="text-center relative z-10 px-8">
            {/* Archive label */}
            <p className="chapter-eyebrow mb-6">Insights &amp; Blog</p>

            {/* Copper divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-manuscript-copper/40" />
              <BookOpen size={16} className="text-manuscript-copper/50" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-manuscript-copper/40" />
            </div>

            <h1 className="heading-manuscript text-5xl lg:text-7xl mb-6">
              Engineering{' '}
              <span className="heading-manuscript--italic text-manuscript-copper">Field Notes</span>
            </h1>
            <p className="text-xl text-manuscript-inkMuted max-w-2xl mx-auto mb-10 font-manuscriptBody leading-relaxed">
              Our thoughts on AI, engineering, and product development.
            </p>

            {/* Coming soon panel */}
            <div className="manuscript-card rounded-md p-8 max-w-md mx-auto">
              <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-manuscript-copperMuted mb-3">
                Status — In Editorial
              </p>
              <hr className="ink-rule--gold mb-5" />
              <p className="font-manuscript text-xl text-manuscript-inkSoft mb-1">
                New articles publishing soon.
              </p>
              <p className="text-[13px] text-manuscript-inkMuted font-manuscriptBody">
                Follow us for updates.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
  );
}
