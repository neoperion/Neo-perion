import React from 'react';
import { TrendingUp, Clock, PiggyBank, Rocket } from 'lucide-react';

const outcomes = [
  {
    title: 'Reduce Manual Work',
    description: 'Automate repetitive tasks and free up your team to focus on high-value strategic initiatives.',
    icon: Clock,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
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
    bg: 'bg-amber-500/10'
  }
];

export const BusinessOutcomes: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[120px] px-6 lg:px-12 bg-manuscript-parchmentDark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-manuscript-ink mb-12 text-center">
          What You Gain
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {outcomes.map((outcome, i) => {
            const Icon = outcome.icon;
            return (
              <div 
                key={i}
                className="p-6 md:p-8 rounded-2xl border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentDark hover:bg-manuscript-parchmentDark hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${outcome.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={outcome.color} size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-manuscript-ink mb-3 leading-tight">
                  {outcome.title}
                </h3>
                {/* Hide description on very small screens to maintain 2x2 compactness if needed, or just let it flow */}
                <p className="text-sm text-manuscript-inkSoft hidden md:block leading-relaxed">
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
