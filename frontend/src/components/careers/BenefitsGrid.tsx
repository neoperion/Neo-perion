import React from 'react';
import { Heart, Zap, MapPin, Laptop, Coffee, BookOpen } from 'lucide-react';

interface BenefitsGridProps {
  theme?: 'light' | 'dark';
}

export function BenefitsGrid({ theme = 'dark' }: BenefitsGridProps) {
  const isLight = theme === 'light';

  const benefits = [
    { icon: MapPin, title: 'Remote First', desc: 'Work from anywhere in India with flexible hours.' },
    { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health insurance for you and your family.' },
    { icon: Zap, title: 'Latest Gear', desc: 'MacBooks, monitors, and WFH allowance provided.' },
    { icon: BookOpen, title: 'Learning Budget', desc: 'Annual stipend for courses, books, and conferences.' },
    { icon: Coffee, title: 'Paid Time Off', desc: 'Generous vacation policy to help you recharge.' },
    { icon: Laptop, title: 'AI Copilots', desc: 'Premium access to Claude, ChatGPT, and GitHub Copilot.' }
  ];

  return (
    <section className={`px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t ${isLight ? 'border-zinc-200' : 'border-white/5'}`}>
      <div className="mb-16 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">Life at NP</p>
        <h2 className={`text-4xl font-black ${isLight ? 'text-[#09090B]' : 'text-white'}`}>Why join us?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => {
          const Icon = benefit.icon;
          return (
            <div 
              key={i} 
              className={`p-8 rounded-2xl border transition-all group ${
                isLight 
                  ? 'border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-sm'
                  : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-neo-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-neo-blue" size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isLight ? 'text-[#09090B]' : 'text-white'}`}>{benefit.title}</h3>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{benefit.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}