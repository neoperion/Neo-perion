import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Quote } from 'lucide-react';
import { MobileGate, MobileShell } from "@/components/mobile";

export default function Testimonials() {
  const testimonials = [
    { text: "Neo Perion didn't just write code; they transformed our entire product strategy. Their AI expertise is unmatched.", author: "Sarah J.", role: "CTO, TechCorp" },
    { text: "The most reliable engineering partner we've worked with. Period.", author: "Michael T.", role: "Founder, SaaS Start" },
    { text: "Their architecture decisions saved us months of rework when we started scaling rapidly.", author: "Elena R.", role: "VP Engineering, DataCo" },
  ];

  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-screen bg-[#02040A] text-white selection:bg-neo-blue/30">
        <Helmet><title>Testimonials | Neo Perion</title></Helmet>
        <Header />
        <main className="pt-32 pb-24">
          <section className="text-center px-8 mb-20">
             <h1 className="text-5xl lg:text-7xl font-black mb-6">What our clients say</h1>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto">Don't just take our word for it.</p>
          </section>
          <section className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
            {testimonials.map((t,i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent relative">
                 <Quote className="text-neo-blue/20 absolute top-6 right-6" size={60} />
                 <p className="text-lg text-slate-300 italic relative z-10 mb-8">"{t.text}"</p>
                 <div>
                   <p className="font-bold text-white">{t.author}</p>
                   <p className="text-sm text-neo-blue">{t.role}</p>
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
               <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-3">Testimonials</p>
               <h1 className="text-display-lg text-white tracking-tight mb-4">Client Feedback.</h1>
               <p className="text-base text-white/70">Don't just take our word for it. Hear what industry leaders say about our engineering.</p>
            </section>
            <section className="px-6 space-y-4">
              {testimonials.map((t,i) => (
                <div key={i} className="p-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1 relative overflow-hidden">
                   <Quote className="text-white/5 absolute -top-4 -right-4" size={80} />
                   <div className="relative z-10">
                     <p className="text-[14px] text-white/80 italic mb-6 leading-relaxed">"{t.text}"</p>
                     <div className="border-t border-white/[0.08] pt-4">
                       <p className="font-bold text-white text-[15px]">{t.author}</p>
                       <p className="text-[11px] font-bold tracking-wider uppercase text-neo-highlight">{t.role}</p>
                     </div>
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