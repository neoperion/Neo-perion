import React from 'react';
import { TrendingUp, Clock, PiggyBank, Rocket } from 'lucide-react';

const outcomes = [
  {
    title: 'Reduce Manual Work',
    description: 'Automate repetitive tasks and free up your team to focus on high-value strategic initiatives.',
    icon: Clock,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Save Operational Costs',
    description: 'Optimize workflows and eliminate inefficiencies to significantly lower your operational overhead.',
    icon: PiggyBank,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    title: 'Increase Team Productivity',
    description: 'Empower your workforce with AI tools that accelerate output and improve decision-making quality.',
    icon: TrendingUp,
    color: 'text-violet-500',
    bg: 'bg-violet-50'
  },
  {
    title: 'Deploy Enterprise AI Faster',
    description: 'Leverage our proven architecture and pre-built components to launch robust AI solutions in weeks, not months.',
    icon: Rocket,
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  }
];

export const BusinessOutcomes: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[120px] px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">
          What You Gain
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {outcomes.map((outcome, i) => {
            const Icon = outcome.icon;
            return (
              <div 
                key={i}
                className="p-6 md:p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${outcome.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={outcome.color} size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {outcome.title}
                </h3>
                {/* Hide description on very small screens to maintain 2x2 compactness if needed, or just let it flow */}
                <p className="text-sm text-slate-600 hidden md:block leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
