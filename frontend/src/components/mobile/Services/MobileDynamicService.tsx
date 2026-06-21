import React from 'react';
import { ServiceData } from '@/data/servicesData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MobileShell } from '../Navigation/MobileShell';

interface Props {
  service: ServiceData;
}

export function MobileDynamicService({ service }: Props) {
  return (
    <MobileShell nav="bottom" showFooter bgClass="bg-[#030B1D]">
      {/* Hero */}
      <section className="pt-24 pb-12 px-6 relative overflow-hidden bg-[#02040A]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <div className="absolute -top-[20%] -right-[10%] w-[120%] h-[60%] blur-[100px] rounded-full pointer-events-none opacity-20" style={{ backgroundColor: service.color }} />
        
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: service.color }}>
          {service.tagline}
        </p>
        <h1 className="text-display-lg text-white tracking-tight mb-4">{service.heroHeadline}</h1>
        <p className="text-base text-white/70 mb-8">{service.heroSubtext}</p>
        
        <button 
          className="w-full h-12 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 relative overflow-hidden border border-white/10 active:scale-[0.98] transition-transform"
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundColor: service.color }} />
          <span className="relative z-10 flex items-center gap-2">{service.ctaText} <ArrowRight size={16} /></span>
        </button>
      </section>

      {/* Overview */}
      <section className="px-6 py-8 border-t border-white/[0.08] bg-[#02040A]">
        <p className="text-sm text-white/80 leading-relaxed font-medium">
          {service.overview}
        </p>
      </section>

      {/* Features */}
      <section className="px-6 py-10 bg-[#030B1D]">
        <h2 className="text-lg font-bold text-white mb-6">Capabilities</h2>
        <div className="space-y-3">
          {service.features.map((feature, i) => (
            <div key={i} className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} style={{ color: service.color }} className="shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-[13px] text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-10 border-t border-white/[0.08] bg-[#02040A]">
        <h2 className="text-lg font-bold text-white mb-6">Process</h2>
        <div className="relative pl-6 space-y-8 border-l border-white/[0.08] ml-2">
          {service.process.map((p, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full border-2 border-[#02040A]" style={{ backgroundColor: service.color }} />
              <p className="text-[10px] font-bold tracking-widest text-white/40 mb-1 uppercase">Step {p.step}</p>
              <h3 className="text-sm font-bold text-white mb-1">{p.title}</h3>
              <p className="text-[13px] text-white/60">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <div className="h-10 bg-[#030B1D]" />
    </MobileShell>
  );
}
