import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';

export default function TechnologyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const displayName = slug?.replace(/-/g, ' ') ?? '';

  const renderContent = () => (
    <section className="max-w-4xl mx-auto px-8">
      {/* Back nav */}
      <button
        onClick={() => navigate('/technologies')}
        className="inline-flex items-center gap-2 text-manuscript-inkMuted hover:text-manuscript-copper transition-colors mb-14 text-[13px] font-manuscriptBody font-medium"
      >
        <ArrowLeft size={14} />
        Engineering Stack
      </button>

      {/* Archive label */}
      <p className="chapter-eyebrow mb-6">Technical Reference</p>

      {/* Copper divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-8 bg-manuscript-copper/35" />
        <span className="font-mono text-[8px] tracking-[0.5em] text-manuscript-copperMuted uppercase">Stack Note</span>
      </div>

      <h1 className="heading-manuscript text-4xl md:text-5xl mb-6 capitalize">
        {displayName} Engineering
      </h1>
      <p className="text-xl text-manuscript-inkMuted mb-14 leading-relaxed font-manuscriptBody">
        We leverage the best tools in the {displayName} ecosystem to deliver highly performant,
        secure, and scalable solutions tailored to your business needs.
      </p>

      {/* Ink rule */}
      <hr className="ink-rule--gold mb-12" />

      <div className="manuscript-card rounded-lg p-9">
        <p className="chapter-eyebrow mb-4">Why We Use This Stack</p>
        <h2 className="heading-manuscript text-2xl mb-8">Engineering Rationale</h2>
        <ul className="space-y-5">
          {[
            'Enterprise-grade reliability and security.',
            'Massive open-source community support.',
            'Superior developer experience and rapid prototyping capabilities.',
            'Proven horizontal scalability under heavy load.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-manuscript-inkMuted font-manuscriptBody text-[16px] leading-relaxed">
              <span className="font-mono text-[9px] tracking-[0.3em] text-manuscript-copperMuted mt-1.5 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-14 pt-10 border-t border-manuscript-parchmentDeep">
        <p className="text-manuscript-inkMuted font-manuscriptBody mb-6 text-[15px]">
          Want to discuss how we use this technology for your project?
        </p>
        <a href="/contact" className="btn-manuscript-primary inline-flex items-center gap-2">
          Start a conversation
        </a>
      </div>
    </section>
  );

  return (
    <MobileGate mobileOnly fallback={
      <div className="manuscript-root min-h-[auto]">
        <Helmet>
          <title>{displayName} Technology | AINCURU</title>
          <meta name="description" content={`How AINCURU uses ${displayName} technologies to build production-grade systems.`} />
        </Helmet>
        <Header />
        <main className="pt-36 pb-24 parchment-surface">
          {renderContent()}
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <Helmet><title>{slug} Technology | AINCURU</title></Helmet>
        <div className="pt-12 pb-12 px-2 bg-[#0A0A0B] text-white min-h-screen">
          <section className="max-w-4xl mx-auto px-6">
            <button
              onClick={() => navigate('/technologies')}
              className="flex items-center gap-2 text-slate-400 hover:text-neo-blue mb-10 text-sm"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <h1 className="text-3xl font-black text-white mb-4 capitalize">{displayName} Engineering</h1>
            <p className="text-base text-slate-400 mb-8 leading-relaxed">
              We leverage the best tools in the {displayName} ecosystem to deliver highly performant, secure, and scalable solutions.
            </p>
            <div className="p-6 rounded-2xl border border-white/5">
              <h2 className="text-xl font-bold mb-4 text-white">Why we use this stack</h2>
              <ul className="space-y-3 text-slate-300">
                {['Enterprise-grade reliability and security.', 'Massive open-source community support.', 'Superior developer experience and rapid prototyping.', 'Proven horizontal scalability under heavy load.'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-neo-blue mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </MobileShell>
    </MobileGate>
  );
}
