import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

interface Capability {
  title: string;
  // Source icon SVG path (kept for the wax-seal-monogram spot illustration).
  icon: string;
  kicker: string;
  shortDesc: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
}

const CAPABILITIES: Capability[] = [
  {
    title: "AI Solutions",
    icon: "/images/home/icons/ai.svg",
    kicker: "Chapter I — AI-driven Solutions",
    shortDesc: "Safe, predictable AI models and agents deployed inside your existing workflows.",
    description:
      "RAG pipelines, AI agents, and LLM integration constrained by strict code and human-in-the-loop checks — so your outputs stay secure, auditable, and production-hardened.",
    features: ["RAG & agents", "LLM integration", "Evals & observability"],
    cta: "Explore AI solutions",
    href: "/services/ai-systems-automation",
  },
  {
    title: "Product Development",
    icon: "/images/home/icons/mobile.svg",
    kicker: "Chapter II — End-to-end Engineering",
    shortDesc: "From MVP to scalable SaaS — owned from first commit to launch.",
    description:
      "We design, build, and ship complete products — from first architecture to launch and scale. One accountable team across strategy, engineering, and deployment.",
    features: ["MVP → scale", "SaaS platforms", "Full ownership"],
    cta: "Build your product",
    href: "/services/enterprise-product-engineering",
  },
  {
    title: "Web Development",
    icon: "/images/home/icons/web.svg",
    kicker: "Chapter III — Modern Web",
    shortDesc: "Fast, accessible web apps and sites engineered to convert.",
    description:
      "High-performance React/Next.js apps, PWAs, and marketing sites — engineered for speed, accessibility, and conversion, and built to scale with your traffic.",
    features: ["React / Next.js", "PWAs", "Performance-first"],
    cta: "Build for the web",
    href: "/services/cloud-native-web-platforms",
  },
  {
    title: "Cloud & DevOps",
    icon: "/images/home/icons/cloud.svg",
    kicker: "Chapter IV — Cloud Infrastructure",
    shortDesc: "Scalable infrastructure and automation on AWS and GCP.",
    description:
      "Kubernetes, CI/CD, and full observability on AWS/GCP. We build cloud infrastructure that holds up under real production load — automated and monitored end to end.",
    features: ["AWS / GCP", "Kubernetes & CI/CD", "Monitoring"],
    cta: "Scale your infrastructure",
    href: "/services/intelligent-operations-automation",
  },
  {
    title: "Technical Consulting",
    icon: "/images/home/icons/consulting.svg",
    kicker: "Chapter V — Senior Guidance",
    shortDesc: "Architecture reviews, due diligence, and fractional-CTO guidance.",
    description:
      "Senior direction when you need it — architecture audits, technical due diligence, and fractional-CTO guidance to de-risk decisions and accelerate your roadmap.",
    features: ["Architecture audits", "Due diligence", "Fractional CTO"],
    cta: "Get expert guidance",
    href: "/services/startup-to-scale-engineering",
  },
];

/**
 * Manuscript chapter card — one capability.
 * Layout: full-bleed spot illustration header (sepia icon on parchment) →
 * wax-seal chapter numeral → kicker → title → short summary → description →
 * features list → ink-rule → CTA.
 */
function ChapterCard({
  cap,
  index,
  reduceMotion,
}: {
  cap: Capability;
  index: number;
  reduceMotion: boolean | null;
}) {
  const navigate = useNavigate();
  const numeral = `Chapter ${String.fromCharCode(0x2160 + index)}`; // roman numeral

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="manuscript-card group flex h-full flex-col overflow-hidden border border-manuscriptAlpha-ink-20"
    >
      {/* Spot illustration — sepia icon on parchment band */}
      <div className="relative flex h-40 items-center justify-center border-b border-manuscriptAlpha-ink-15 bg-gradient-to-br from-manuscript-parchment via-manuscript-parchmentLight to-manuscript-gold/10">
        {/* Concentric ornament rings */}
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          <div className="h-28 w-28 rounded-full border border-manuscript-gold/20" />
          <div className="absolute h-20 w-20 rounded-full border border-manuscript-rust/15" />
        </div>
        <img
          src={cap.icon}
          alt=""
          aria-hidden
          className="relative h-14 w-14 object-contain sepia-[0.55]"
        />
        {/* Wax-seal chapter numeral */}
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-manuscript-rustDeep font-manuscript text-[15px] font-semibold text-manuscript-parchmentLight shadow-sm ring-1 ring-manuscript-walnutDeep">
          {index + 1}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7 lg:p-8">
        {/* Kicker */}
        <p className="chapter-eyebrow">{cap.kicker}</p>
        <h3 className="mt-3 font-manuscript text-[clamp(24px,2.4vw,30px)] font-semibold leading-[1.15] tracking-tight text-manuscript-ink">
          {cap.title}
        </h3>
        <p className="mt-3 font-manuscriptBody text-[15px] font-medium italic text-manuscript-walnutDeep">
          {cap.shortDesc}
        </p>
        <p className="mt-4 font-manuscriptBody text-[15px] leading-relaxed text-manuscript-inkSoft">
          {cap.description}
        </p>

        {/* Features list */}
        <ul className="mt-6 space-y-2">
          {cap.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2.5 font-manuscriptBody text-[14px] font-medium text-manuscript-inkSoft"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-manuscript-gold/40 text-manuscript-rustDeep">
                <Check className="h-3 w-3" strokeWidth={2.5} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Ink-rule + CTA */}
        <div className="mt-7 flex flex-1 flex-col justify-end">
          <hr className="ink-rule--gold mb-5" />
          <div className="flex items-center justify-between">
            <span className="chapter-eyebrow !text-manuscript-inkMuted">
              {numeral}
            </span>
            <button
              onClick={() => navigate(cap.href)}
              className="group/btn inline-flex items-center gap-2 font-manuscriptBody text-[13px] font-semibold text-manuscript-rustDeep transition-colors hover:text-manuscript-ink"
            >
              {cap.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export const Services = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="services" bg="paper" rhythm="primary" divider className="parchment-surface">
      <SectionHeading
        eyebrow="What we do"
        title="Our Services"
        lead="We design, build, and ship production-grade software — from AI solutions to full product development. Senior engineers only, no offshoring."
        className="mb-14 max-w-2xl"
      />

      {/* Chapter cards — 2-column on desktop, 1-column on mobile.
          First card spans 2 columns to open as a chapter spread. */}
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {CAPABILITIES.map((cap, i) => (
          <ChapterCard
            key={cap.title}
            cap={cap}
            index={i}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      {/* Closing ornament */}
      <div className="ornament-dots mx-auto mt-16 max-w-md">
        <span>✦ ✦ ✦</span>
      </div>
    </Section>
  );
};
