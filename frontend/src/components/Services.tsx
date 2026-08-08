import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, ChevronRight, Sparkles, Blocks, Code2, Cloud, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

interface Capability {
  title: string;
  // PLACEHOLDER icon — drop your own 24×24 SVG at this path (see icons/ folder).
  icon: string;
  // Blue accent icon used by the right-side hover card.
  accent: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  kicker: string;
  shortDesc: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  // Hover background — product UI screenshot or GIF (drop yours in /public/images/home).
  image: string;
}

const CAPABILITIES: Capability[] = [
  {
    title: "AI Solutions",
    icon: "/images/home/icons/ai.svg",
    accent: Sparkles,
    kicker: "AI-driven Solutions",
    shortDesc: "Safe, predictable AI models and agents deployed inside your existing workflows.",
    description:
      "RAG pipelines, AI agents, and LLM integration constrained by strict code and human-in-the-loop checks — so your outputs stay secure, auditable, and production-hardened.",
    features: ["RAG & agents", "LLM integration", "Evals & observability"],
    cta: "Explore AI solutions",
    href: "/services/ai-systems-automation",
    image: "/images/home/cap-ai.svg",
  },
  {
    title: "Product Development",
    icon: "/images/home/icons/mobile.svg",
    accent: Blocks,
    kicker: "End-to-end Engineering",
    shortDesc: "From MVP to scalable SaaS — owned from first commit to launch.",
    description:
      "We design, build, and ship complete products — from first architecture to launch and scale. One accountable team across strategy, engineering, and deployment.",
    features: ["MVP → scale", "SaaS platforms", "Full ownership"],
    cta: "Build your product",
    href: "/services/enterprise-product-engineering",
    image: "/images/home/cap-mobile.svg",
  },
  {
    title: "Web Development",
    icon: "/images/home/icons/web.svg",
    accent: Code2,
    kicker: "Modern Web",
    shortDesc: "Fast, accessible web apps and sites engineered to convert.",
    description:
      "High-performance React/Next.js apps, PWAs, and marketing sites — engineered for speed, accessibility, and conversion, and built to scale with your traffic.",
    features: ["React / Next.js", "PWAs", "Performance-first"],
    cta: "Build for the web",
    href: "/services/cloud-native-web-platforms",
    image: "/images/home/cap-web.svg",
  },
  {
    title: "Cloud & DevOps",
    icon: "/images/home/icons/cloud.svg",
    accent: Cloud,
    kicker: "Cloud Infrastructure",
    shortDesc: "Scalable infrastructure and automation on AWS and GCP.",
    description:
      "Kubernetes, CI/CD, and full observability on AWS/GCP. We build cloud infrastructure that holds up under real production load — automated and monitored end to end.",
    features: ["AWS / GCP", "Kubernetes & CI/CD", "Monitoring"],
    cta: "Scale your infrastructure",
    href: "/services/intelligent-operations-automation",
    image: "/images/home/cap-cloud.svg",
  },
  {
    title: "Technical Consulting",
    icon: "/images/home/icons/consulting.svg",
    accent: Compass,
    kicker: "Senior Guidance",
    shortDesc: "Architecture reviews, due diligence, and fractional-CTO guidance.",
    description:
      "Senior direction when you need it — architecture audits, technical due diligence, and fractional-CTO guidance to de-risk decisions and accelerate your roadmap.",
    features: ["Architecture audits", "Due diligence", "Fractional CTO"],
    cta: "Get expert guidance",
    href: "/services/startup-to-scale-engineering",
    image: "/images/home/cap-consulting.svg",
  },
];

/** Mobile inline visual (template unchanged) — simple framed product image. */
function VisualFrame({ image, title }: { image: string; title: string }) {
  return (
    <div className="manuscript-card overflow-hidden border border-manuscriptAlpha-ink-20 shadow-[0_24px_60px_rgba(31,26,20,0.16)]">
      <div className="flex items-center gap-1.5 border-b border-manuscriptAlpha-ink-15 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-manuscriptAlpha-ink-15" />
        <span className="h-2.5 w-2.5 rounded-full bg-manuscriptAlpha-ink-15" />
        <span className="h-2.5 w-2.5 rounded-full bg-manuscriptAlpha-ink-15" />
      </div>
      <div className="aspect-[16/10] w-full overflow-hidden bg-manuscript-parchment">
        <img src={image} alt={`${title} preview`} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

const HOVER_GIF = "/images/feed%20your%20mind.gif";

// Per-service card backgrounds (fall back to the neural gif).
const CARD_BG: Record<string, string> = {
  "Product Development": "/images/product.mp4",
  "Cloud & DevOps": "/images/cloud.mp4",
  "Web Development": "/images/web.mp4",
  "Technical Consulting": "/images/technical.mp4",
};

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

/**
 * Right-side panel (same size as the existing service-block visual).
 * Always shows the neural-particle gif as a dark background with the content
 * in white — title + kicker + description + a round arrow CTA. Swaps per
 * active capability as you scroll.
 */
function HoverVisualCard({ cap }: { cap: Capability }) {
  const navigate = useNavigate();
  const bg = CARD_BG[cap.title] ?? HOVER_GIF;
  return (
    <div className="manuscript-card relative aspect-[16/10] w-full overflow-hidden rounded-md border border-manuscriptAlpha-ink-20 shadow-[0_24px_60px_rgba(31,26,20,0.28)]">
      {/* Background — per-service video/image, else the neural-particle gif */}
      {isVideo(bg) ? (
        <video
          key={bg}
          src={bg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover sepia-[0.35]"
        />
      ) : (
        <img
          src={bg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover sepia-[0.35]"
        />
      )}
      {/* Legibility gradient — darker where the text sits (left) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-manuscript-ink/95 via-manuscript-ink/70 to-manuscript-walnutDeep/25" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center p-6 lg:p-9">
        <h4 className="font-manuscript text-[22px] lg:text-[27px] font-semibold tracking-tight text-manuscript-parchmentLight">{cap.title}</h4>
        <p className="mt-1 lg:mt-2 font-manuscriptBody text-[11px] lg:text-[12px] font-semibold uppercase tracking-[0.14em] text-manuscript-gold">
          {cap.kicker}
        </p>
        <p className="mt-2 lg:mt-4 max-w-md font-manuscriptBody text-[13px] lg:text-[14.5px] leading-relaxed text-manuscript-parchmentLight/85 line-clamp-2 lg:line-clamp-none">
          {cap.description}
        </p>
        <button
          type="button"
          onClick={() => navigate(cap.href)}
          aria-label={`${cap.title} — learn more`}
          className="mt-4 lg:mt-7 flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-manuscript-gold text-manuscript-ink shadow-lg shadow-manuscript-ink/30 transition-colors duration-200 hover:bg-manuscript-goldDeep hover:text-manuscript-parchmentLight"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export const Services = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = CAPABILITIES[active];

  return (
    <Section id="services" bg="paper" rhythm="primary" divider className="parchment-surface">
      <SectionHeading
        eyebrow="What we do"
        title="Our Services"
        lead="We design, build, and ship production-grade software — from AI solutions to full product development. Senior engineers only, no offshoring."
        className="mb-12 max-w-2xl"
      />

      <div className="grid gap-x-16 lg:grid-cols-2 relative">
        {/* Mobile sticky visual (Top) */}
        <div className="sticky top-16 z-20 block w-full lg:hidden mb-8 pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <HoverVisualCard cap={current} />
            </motion.div>
          </AnimatePresence>
          {/* Progress rail for mobile */}
          <div className="mt-4 flex gap-2">
            {CAPABILITIES.map((cap, i) => (
              <span
                key={cap.title}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i === active ? "bg-manuscript-gold" : "bg-manuscriptAlpha-ink-15"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Left — scrolling capability blocks */}
        <div>
          {CAPABILITIES.map((cap, i) => {
            const isActive = i === active;
            return (
              <div
                key={cap.title}
                data-index={i}
                ref={(el) => (blockRefs.current[i] = el)}
                className="flex min-h-[60vh] flex-col justify-center border-t border-manuscriptAlpha-ink-15 py-10 first:border-t-0 lg:min-h-[48vh]"
              >
                <div
                  className={`transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-manuscript-goldDeep" : "text-manuscript-inkMuted"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-manuscriptAlpha-ink-20" />
                    <img src={cap.icon} alt="" aria-hidden className="h-6 w-6 object-contain" />
                  </div>

                  <h3 className="mt-5 font-manuscript text-[clamp(24px,3vw,34px)] font-semibold leading-tight tracking-tight text-manuscript-ink">
                    {cap.title}
                  </h3>
                  <p className="mt-4 max-w-md font-manuscriptBody text-[16px] leading-relaxed text-manuscript-inkSoft">
                    {cap.description}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                    {cap.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 font-manuscriptBody text-sm font-medium text-manuscript-inkSoft">
                        <Check className="h-4 w-4 shrink-0 text-manuscript-rustDeep" strokeWidth={2} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate(cap.href)}
                    className="group mt-7 inline-flex w-fit items-center gap-1.5 font-manuscriptBody text-sm font-semibold text-manuscript-rustDeep transition-colors hover:text-manuscript-ink"
                  >
                    {cap.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right — pinned hover card that swaps on scroll */}
        <div className="hidden lg:block">
          <div className="sticky top-28 flex h-[calc(100vh-7rem)] items-center">
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <HoverVisualCard cap={current} />
                </motion.div>
              </AnimatePresence>

              {/* progress rail */}
              <div className="mt-6 flex gap-2">
                {CAPABILITIES.map((cap, i) => (
                  <span
                    key={cap.title}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      i === active ? "bg-manuscript-gold" : "bg-manuscriptAlpha-ink-15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
