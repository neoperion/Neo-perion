import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Repeat, Zap, ArrowRight, Check } from "lucide-react";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

interface Tier {
  icon: React.ComponentType<{ className?: string }>;
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
        className="mb-14 max-w-3xl"
      />

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
        {TIERS.map((tier, idx) => {
          const Icon = tier.icon;
          const highlight = tier.highlight;
          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`relative flex flex-col overflow-hidden rounded-[16px] border bg-paper transition-[border-color,box-shadow] duration-200 ${
                highlight
                  ? "border-brand shadow-[0_8px_30px_rgba(30,93,255,0.10)] md:scale-[1.03]"
                  : "border-hairline hover:border-faint"
              }`}
            >
              {highlight && (
                <div className="bg-brand py-2 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  Most popular
                </div>
              )}

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      highlight ? "bg-brand text-white" : "bg-canvas text-ink border border-hairline"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{tier.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted2">
                      {tier.duration}
                    </p>
                  </div>
                </div>

                <p className="mb-5 font-display text-3xl font-bold text-ink">{tier.priceFrom}</p>

                <p className="mb-5 text-sm leading-relaxed text-body">{tier.description}</p>

                <div className="mb-6 border-b border-hairline pb-6">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted2">
                    Best for
                  </p>
                  <p className="text-sm font-medium text-body">{tier.bestFor}</p>
                </div>

                <ul className="mb-8 flex-1 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-body">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`inline-flex h-12 items-center justify-center gap-2 rounded-[12px] px-6 text-sm font-semibold transition-all ${
                    highlight
                      ? "bg-brand text-white hover:bg-brand-hover hover:shadow-md"
                      : "border border-hairline bg-paper text-ink hover:border-faint"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-12 text-center text-sm text-muted2">
        All engagements begin with a free 30-minute architecture review. No NDA required.
      </p>
    </Section>
  );
};
