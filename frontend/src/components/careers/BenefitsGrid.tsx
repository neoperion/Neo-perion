import React from 'react';
import { Heart, Zap, MapPin, Laptop, Coffee, BookOpen } from 'lucide-react';

export function BenefitsGrid() {
  const benefits = [
    { icon: MapPin, title: 'Remote First', desc: 'Work from anywhere in India with flexible hours.' },
    { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health insurance for you and your family.' },
    { icon: Zap, title: 'Latest Gear', desc: 'MacBooks, monitors, and WFH allowance provided.' },
    { icon: BookOpen, title: 'Learning Budget', desc: 'Annual stipend for courses, books, and conferences.' },
    { icon: Coffee, title: 'Paid Time Off', desc: 'Generous vacation policy to help you recharge.' },
    { icon: Laptop, title: 'AI Copilots', desc: 'Premium access to Claude, ChatGPT, and GitHub Copilot.' }
  ];

  return (
    <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5">
      <div className="mb-16 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4">Life at NP</p>
        <h2 className="text-4xl font-black text-white">Why join us?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => {
          const Icon = benefit.icon;
          return (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}