import React from 'react';
import { Shield, BarChart3, Minimize2, Target } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: "Build for Scale",
    description: "If it can't handle 10x traffic, we won't ship it. We build robust systems designed for high availability."
  },
  {
    icon: BarChart3,
    title: "Measure Everything",
    description: "Data over intuition. We instrument from day one, ensuring every decision is backed by analytics."
  },
  {
    icon: Minimize2,
    title: "Avoid Complexity",
    description: "Simple systems last longer than clever ones. We aggressively cut unnecessary technical debt."
  },
  {
    icon: Target,
    title: "Own Outcomes",
    description: "We succeed when your product succeeds. We act as your true technical partners, not just vendors."
  }
];

export function EngineeringPrinciples() {
  return (
    <section className="py-24 bg-white border-b border-slate-900/5">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="mb-16">
          <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">Core Philosophy</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
            Engineering Principles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="premium-card p-10 flex flex-col items-start group hover:border-neo-blue/20">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-neo-blue/5 group-hover:border-neo-blue/20 transition-colors">
                <principle.icon className="w-6 h-6 text-neo-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{principle.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
