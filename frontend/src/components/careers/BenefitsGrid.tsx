import React from 'react';
import { Heart, Zap, MapPin, Laptop, Coffee, BookOpen } from 'lucide-react';

interface BenefitsGridProps {
  theme?: 'light' | 'dark';
}

export function BenefitsGrid({ theme = 'dark' }: BenefitsGridProps) {
  const isLight = theme === 'light';

  const benefits = [
    { icon: MapPin,    title: 'Remote First',     desc: 'Work from anywhere in India with flexible hours.' },
    { icon: Heart,     title: 'Health & Wellness', desc: 'Comprehensive health insurance for you and your family.' },
    { icon: Zap,       title: 'Latest Gear',       desc: 'MacBooks, monitors, and WFH allowance provided.' },
    { icon: BookOpen,  title: 'Learning Budget',   desc: 'Annual stipend for courses, books, and conferences.' },
    { icon: Coffee,    title: 'Paid Time Off',     desc: 'Generous vacation policy to help you recharge.' },
    { icon: Laptop,    title: 'AI Copilots',       desc: 'Premium access to Claude, ChatGPT, and GitHub Copilot.' },
  ];

  if (isLight) {
    // Desktop — manuscript treatment
    return (
      <section className="px-8 lg:px-16 py-24 parchment-surface--warm border-t border-manuscript-parchmentDeep">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="chapter-eyebrow mb-4">Life at AINCURU</p>
            <h2 className="heading-manuscript text-4xl">Why join us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="manuscript-card rounded-lg p-8 group"
                >
                  <div className="w-11 h-11 rounded-md bg-manuscript-parchment border border-manuscript-copper/25 flex items-center justify-center mb-6 group-hover:border-manuscript-copper/60 transition-colors duration-200">
                    <Icon className="text-manuscript-copper" size={20} />
                  </div>
                  <h3 className="heading-manuscript text-xl mb-3">{benefit.title}</h3>
                  <p className="text-manuscript-inkMuted text-[14px] leading-relaxed font-manuscriptBody">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Dark (mobile)
  return (
    <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5">
      <div className="mb-16 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">Life at NP</p>
        <h2 className="text-4xl font-black text-white">Why join us?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => {
          const Icon = benefit.icon;
          return (
            <div
              key={i}
              className="p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-neo-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-neo-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{benefit.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}