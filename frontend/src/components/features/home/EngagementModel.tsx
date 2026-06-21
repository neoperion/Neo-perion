import { Link } from "react-router-dom";
import { Rocket, Repeat, Zap, ArrowRight, Check } from "lucide-react";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

interface Tier {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  name: string;
  duration: string;
  /** PLACEHOLDER price anchor — confirm real ranges before launch. */
  priceFrom: string;
  description: string;
  bestFor: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const TIERS: Tier[] = [
  {
    icon: Rocket,
    name: "MVP Sprint",
    duration: "4–6 weeks",
    priceFrom: "from $15k",
    description: "Validate your idea with a production-grade MVP. Fixed scope, fixed price.",
    bestFor: "Founders, validated concepts, demo-ready in weeks",
    features: [
      "Discovery + architecture (week 1)",
      "Production build (weeks 2–5)",
      "Launch + handoff (week 6)",
      "Fixed-price engagement",
    ],
    cta: "Start an MVP",
    highlight: true,
  },
  {
    icon: Repeat,
    name: "Ongoing Partner",
    duration: "Monthly retainer",
    priceFrom: "from $8k/mo",
    description: "Senior engineers embedded in your team. Roadmap, ship continuously, evolve product.",
    bestFor: "Scaling teams, post-MVP products, growth-stage companies",
    features: [
      "Dedicated senior team",
      "Sprint-based delivery",
      "Architecture + DevOps included",
      "Pause or scale monthly",
    ],
    cta: "Talk to engineering",
  },
  {
    icon: Zap,
    name: "AI Integration Sprint",
    duration: "2–3 weeks",
    priceFrom: "from $6k",
    description: "Drop AI capabilities into an existing product. RAG, agents, automations, copilots.",
    bestFor: "Existing SaaS teams adding AI features",
    features: [
      "Capability audit + scoping",
      "LLM/RAG/agent implementation",
      "Eval + observability",
      "Production rollout",
    ],
    cta: "Scope an AI sprint",
  },
];

export const EngagementModel: React.FC = () => {
  return (
    <Section id="engagement" bg="canvas" rhythm="primary" divider>
      <SectionHeading
        eyebrow="Engagement model"
        title="Three ways to work with us"
        lead="Pick the shape that matches your stage. Every engagement starts with a free 30-minute architecture review — no pitch, just signal."
        className="mb-12 max-w-3xl"
      />

      {/* Unified divided slab — square corners, popular tier highlighted */}
      <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
        {TIERS.map((tier) => {
          const Icon = tier.icon;
          const highlight = tier.highlight;
          return (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 ${highlight ? "bg-[#F4F8FF]" : "bg-paper"}`}
            >
              {highlight && <span className="absolute inset-x-0 top-0 h-1 bg-brand" />}

              {highlight ? (
                <span className="mb-5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                  Most popular
                </span>
              ) : (
                <span className="mb-5 h-[18px]" />
              )}

              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 shrink-0 text-ink" strokeWidth={1.6} />
                <div>
                  <h3 className="text-lg font-bold text-ink">{tier.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted2">
                    {tier.duration}
                  </p>
                </div>
              </div>

              <p className="mt-6 font-display text-[32px] font-bold leading-none text-ink">
                {tier.priceFrom}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-body">{tier.description}</p>

              <div className="mt-6 border-t border-hairline pt-5">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted2">
                  Best for
                </p>
                <p className="text-sm font-medium text-body">{tier.bestFor}</p>
              </div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-body">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.25} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 inline-flex h-12 items-center justify-center gap-2 px-6 text-sm font-semibold transition-colors ${
                  highlight
                    ? "bg-brand text-white hover:bg-brand-hover"
                    : "border border-ink/15 text-ink hover:border-ink/40"
                }`}
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </div>

      <p className="mt-12 text-center text-sm text-muted2">
        All engagements begin with a free 30-minute architecture review. No NDA required.
      </p>
    </Section>
  );
};
