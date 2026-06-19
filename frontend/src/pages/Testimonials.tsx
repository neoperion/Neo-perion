import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { text: "Neo Perion didn't just write code; they transformed our entire product strategy. Their AI expertise is unmatched.", author: "Sarah J.", role: "CTO, TechCorp" },
    { text: "The most reliable engineering partner we've worked with. Period.", author: "Michael T.", role: "Founder, SaaS Start" },
    { text: "Their architecture decisions saved us months of rework when we started scaling rapidly.", author: "Elena R.", role: "VP Engineering, DataCo" },
  ];

  return (
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
  );
}