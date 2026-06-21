import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Repeat, Zap, ArrowRight, Check } from 'lucide-react';

interface Tier {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  duration: string;
  description: string;
  bestFor: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const TIERS: Tier[] = [
  {
    icon: Rocket,
    name: 'MVP Sprint',
    duration: '4–6 weeks',
    description: 'Validate your idea with a production-grade MVP. Fixed scope, fixed price.',
    bestFor: 'Founders, validated concepts, demo-ready in weeks',
    features: [
      'Discovery + architecture (week 1)',
      'Production build (weeks 2–5)',
      'Launch + handoff (week 6)',
      'Fixed-price engagement',
    ],
    cta: 'Start an MVP',
    highlight: true,
  },
  {
    icon: Repeat,
    name: 'Ongoing Engineering Partner',
    duration: 'Monthly retainer',
    description: 'Senior engineers embedded in your team. Roadmap, ship continuously, evolve product.',
    bestFor: 'Scaling teams, post-MVP products, growth-stage companies',
    features: [
      'Dedicated senior team',
      'Sprint-based delivery',
      'Architecture + DevOps included',
      'Pause or scale monthly',
    ],
    cta: 'Talk to engineering',
  },
  {
    icon: Zap,
    name: 'AI Integration Sprint',
    duration: '2–3 weeks',
    description: 'Drop AI capabilities into an existing product. RAG, agents, automations, copilots.',
    bestFor: 'Existing SaaS teams adding AI features',
    features: [
      'Capability audit + scoping',
      'LLM/RAG/agent implementation',
      'Eval + observability',
      'Production rollout',
    ],
    cta: 'Scope an AI sprint',
  },
];

export const EngagementModel: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#FAFAFA] border-b border-[#E4E4E7]/60">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">
            Engagement Model
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 text-balance">
            Three ways to work with us.
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Pick the shape that matches your stage. Every engagement starts with a free 30-minute architecture review &mdash; no pitch, just signal.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative rounded-xl p-8 flex flex-col border border-[#E4E4E7] hover:border-[#A1A1AA] hover:-translate-y-0.5 transition-all duration-150 ease-out ${
                  tier.highlight
                    ? 'ring-1 ring-neo-blue border-neo-blue bg-white'
                    : 'bg-white'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-neo-blue text-white text-[9px] font-bold tracking-[0.15em] uppercase shadow-sm">
                    Most popular
                  </span>
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    tier.highlight ? 'bg-neo-blue text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{tier.duration}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 mb-5 leading-relaxed text-pretty">
                  {tier.description}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-200">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-500 mb-1">
                    Best for
                  </p>
                  <p className="text-sm font-medium text-slate-700">{tier.bestFor}</p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-neo-blue mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg font-semibold text-sm transition-all ${
                    tier.highlight
                      ? 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg'
                      : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-900'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-slate-500 mt-12">
          All engagements begin with a free 30-minute architecture review. No NDA required.
        </p>
      </div>
    </section>
  );
};
