import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FloatingLines from '@/components/FloatingLines';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { MobileGate, MobileShell } from "@/components/mobile";

export default function SuccessStories() {
  const stories = [
    { client: 'FinTech Startup', title: 'Scaling from MVP to 100k Users', metric: '300% Growth', desc: 'Re-architected the backend to support massive transaction volume.' },
    { client: 'EdTech Platform', title: 'AI-Powered Learning Paths', metric: '40% Retention Increase', desc: 'Integrated custom LLMs to personalize student journeys.' },
    { client: 'Healthcare Enterprise', title: 'HIPAA Compliant Data Pipeline', metric: 'Zero Breaches', desc: 'Built a secure data processing system for patient records.' },
  ];

  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-screen bg-[#02040A] text-white selection:bg-neo-blue/30">
        <Helmet><title>Success Stories | Neo Perion</title></Helmet>
        <Header />
        <main className="pt-32 pb-24">
          <section className="relative text-center px-8 mb-20">
             <h1 className="text-5xl lg:text-7xl font-black mb-6">Success Stories</h1>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto">See how we've helped companies transform their operations and scale their products.</p>
          </section>
          <section className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
            {stories.map((s,i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                 <TrendingUp className="text-neo-blue mb-6" size={32} />
                 <p className="text-sm text-neo-blue font-bold mb-2">{s.client}</p>
                 <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                 <p className="text-slate-400 mb-6">{s.desc}</p>
                 <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                   <p className="text-sm text-slate-500 mb-1">Key Result</p>
                   <p className="text-xl font-bold text-white">{s.metric}</p>
                 </div>
              </div>
            ))}
          </section>
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <main className="pt-8 pb-12">
            <section className="text-left px-6 mb-10">
               <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-3">Impact</p>
               <h1 className="text-display-lg text-white tracking-tight mb-4">Success Stories.</h1>
               <p className="text-base text-white/70">See how we've helped companies transform their operations and scale their products.</p>
            </section>
            <section className="px-6 space-y-4">
              {stories.map((s,i) => (
                <div key={i} className="p-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                   <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-5">
                     <TrendingUp className="text-neo-highlight" size={20} />
                   </div>
                   <p className="text-[11px] font-bold tracking-wider uppercase text-white/50 mb-1">{s.client}</p>
                   <h3 className="text-[17px] font-bold text-white mb-2">{s.title}</h3>
                   <p className="text-[13px] text-white/60 mb-6 line-clamp-2">{s.desc}</p>
                   <div className="p-4 rounded-2xl bg-[#020617]/50 border border-white/[0.04]">
                     <p className="text-[11px] font-semibold text-white/40 mb-1 uppercase tracking-wide">Key Result</p>
                     <p className="text-[18px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-[#00e5ff]">{s.metric}</p>
                   </div>
                </div>
              ))}
            </section>
          </main>
        </div>
      </MobileShell>
    </MobileGate>
  );
}