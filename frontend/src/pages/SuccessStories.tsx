import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FloatingLines from '@/components/FloatingLines';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    { client: 'FinTech Startup', title: 'Scaling from MVP to 100k Users', metric: '300% Growth', desc: 'Re-architected the backend to support massive transaction volume.' },
    { client: 'EdTech Platform', title: 'AI-Powered Learning Paths', metric: '40% Retention Increase', desc: 'Integrated custom LLMs to personalize student journeys.' },
    { client: 'Healthcare Enterprise', title: 'HIPAA Compliant Data Pipeline', metric: 'Zero Breaches', desc: 'Built a secure data processing system for patient records.' },
  ];

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
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
               <TrendingUp className="text-cyan-400 mb-6" size={32} />
               <p className="text-sm text-cyan-400 font-bold mb-2">{s.client}</p>
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
  );
}