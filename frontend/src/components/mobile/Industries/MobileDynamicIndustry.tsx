import React from 'react';
import { IndustryData } from '@/data/industriesData';
import { ArrowRight } from 'lucide-react';
import { MobileShell } from '../Navigation/MobileShell';

interface Props {
  industry: IndustryData;
}

export function MobileDynamicIndustry({ industry }: Props) {
  return (
    <MobileShell nav="bottom" showFooter bgClass="bg-[#02040A]">
      {/* Hero */}
      <section className="pt-24 pb-12 px-6 relative overflow-hidden bg-[#02040A]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <div className="absolute -top-[10%] left-[-20%] w-[140%] h-[70%] blur-[100px] rounded-full pointer-events-none opacity-20" style={{ backgroundColor: industry.color }} />
        
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 relative z-10" style={{ color: industry.color }}>
          {industry.tagline}
        </p>
        <h1 className="text-display-lg text-white tracking-tight mb-4 relative z-10">{industry.heroHeadline}</h1>
        <p className="text-base text-white/70 mb-8 relative z-10">{industry.heroSubtext}</p>
        
        <button 
          className="w-full h-12 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 relative overflow-hidden border border-white/10 active:scale-[0.98] transition-transform z-10"
        >
          <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundColor: industry.color }} />
          <span className="relative z-10 flex items-center gap-2">{industry.ctaText} <ArrowRight size={16} /></span>
        </button>
      </section>

      {/* Offerings */}
      <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
        <h2 className="text-lg font-bold text-white mb-6">Solutions</h2>
        <div className="grid grid-cols-1 gap-4">
          {industry.offerings.map((offering, i) => (
            <div key={i} className="p-6 rounded-3xl border border-white/[0.08] parchment-surface/[0.02] relative overflow-hidden backdrop-blur-glass-1">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <offering.icon size={80} style={{ color: industry.color }} />
              </div>
              <div className="w-12 h-12 rounded-xl parchment-surface/[0.05] border border-white/[0.1] flex items-center justify-center mb-5 relative z-10">
                <offering.icon size={24} style={{ color: industry.color }} />
              </div>
              <h3 className="text-[16px] font-bold text-white mb-2 relative z-10">{offering.title}</h3>
              <p className="text-[13px] text-white/60 leading-relaxed relative z-10">{offering.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="px-6 py-12 border-t border-white/[0.08] bg-[#02040A]">
        <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-4 uppercase">Proven Impact</p>
        <div className="p-6 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent">
          <p className="text-[11px] font-bold text-white/40 mb-1 uppercase tracking-wider">{industry.caseStudyPreview.client}</p>
          <h3 className="text-[17px] font-bold text-white mb-4 leading-tight">{industry.caseStudyPreview.title}</h3>
          <p className="text-[13px] text-white/60 mb-6 leading-relaxed">{industry.caseStudyPreview.result}</p>
          <div className="p-5 rounded-2xl bg-[#030B1D] border border-white/[0.05]">
            <p className="text-[32px] font-display font-black leading-none mb-1" style={{ color: industry.color }}>{industry.caseStudyPreview.metric}</p>
            <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest">{industry.caseStudyPreview.metricLabel}</p>
          </div>
        </div>
      </section>

      <div className="h-10 bg-[#02040A]" />
    </MobileShell>
  );
}
