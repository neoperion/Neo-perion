import React from 'react';
import { Clock, TrendingUp, Layers, Shield } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const METRICS = [
  { icon: Layers, value: 10, suffix: '+', label: 'Projects', detail: 'Shipped successfully' },
  { icon: Layers, value: 6, suffix: '+', label: 'Industries', detail: 'Sectors served globally' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Satisfaction', detail: 'Client success rate' },
  { icon: Shield, value: 'Enterprise', suffix: '', label: 'Security posture', detail: 'SOC 2 ready, NDA-friendly' },
];

const PARTNERS_PLACEHOLDER = [
  'Healthcare',
  'FinTech',
  'EdTech',
  'Logistics',
  'SaaS',
  'Manufacturing',
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="relative py-12 bg-[#0A0A0B] border-b border-[#27272A]/60">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
        {/* Eyebrow */}
        <p className="text-center text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400 mb-6">
          Trusted by engineering teams shipping AI products
        </p>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="bg-neutral-900 p-5 rounded-xl border border-[#27272A] flex flex-col items-start gap-2 hover:border-slate-400 transition-colors"
              >
                <div className="flex items-center gap-2 text-neutral-400">
                  <Icon className="w-4 h-4 text-neo-blue" />
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400">
                    {m.label}
                  </span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-[#09090B] font-display leading-none">
                  {typeof m.value === 'number' ? (
                    <AnimatedCounter end={m.value} suffix={m.suffix} />
                  ) : (
                    <span>{m.value}</span>
                  )}
                </div>
                <div className="text-[11px] text-neutral-400 font-medium">{m.detail}</div>
              </div>
            );
          })}
        </div>

        {/* Industry sectors */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-6">
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400">
            Industries we serve
          </span>
          {PARTNERS_PLACEHOLDER.map((s) => (
            <span
              key={s}
              className="text-[11px] font-semibold text-neutral-400 bg-neutral-900 px-3 py-1 rounded-md border border-[#27272A] hover:border-slate-400 transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
