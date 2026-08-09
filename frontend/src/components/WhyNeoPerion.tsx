import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import { Sparkles, Layers, Gauge, Shapes, MessagesSquare, Cpu, HeartHandshake, RotateCw } from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   WHY AINCURU — THE AINCURU CODEX
   Seven principles behind every system we build.

   One continuous hand-drawn ink line threads through seven numbered
   folios. Each folio reveals its existing supporting content as the
   user scrolls past it. Layout is a single vertical manuscript spread.
   ────────────────────────────────────────────────────────────────────── */

interface Reason {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  title: string;
  desc: string;
  chips: [string, string];
  /** Optional front image; falls back to the rings motif. */
  image?: string;
  /** Back-of-card content revealed on flip — concrete, distinct from the left copy. */
  back: { headline: string; points: string[] };
}

const REASONS: Reason[] = [
  {
    icon: Sparkles,
    title: "AI-First Development",
    desc: "We leverage AI across the entire lifecycle to accelerate delivery, improve quality, and reduce cost — without ever compromising reliability.",
    chips: ["Faster delivery", "Higher quality"],
    image: "/images/1.jpeg",
    back: {
      headline: "Where AI actually shows up",
      points: [
        "AI-assisted review on every pull request",
        "RAG pipelines shipped with real evals",
        "Automated test & QA generation",
        "Human-in-the-loop on anything risky",
      ],
    },
  },
  {
    icon: Layers,
    title: "End-to-End Product Ownership",
    desc: "From strategy and architecture to development, deployment, and scaling — we own the complete journey so you can focus on growth.",
    chips: ["Strategy → Scale", "One accountable team"],
    image: "/images/2.jpeg",
    back: {
      headline: "One team, the whole journey",
      points: [
        "Product strategy & discovery",
        "Architecture & system design",
        "Build, ship, and iterate",
        "Scale, monitor, and support",
      ],
    },
  },
  {
    icon: Gauge,
    title: "Startup Speed, Enterprise Quality",
    desc: "We pair rapid execution with scalable architecture, so your product is built for today's needs and tomorrow's growth.",
    chips: ["Weeks, not quarters", "Production-grade"],
    back: {
      headline: "Fast — without the tech debt",
      points: [
        "MVP in weeks, not quarters",
        "Scalable architecture from day one",
        "CI/CD and automated testing",
        "No rewrites when you grow",
      ],
    },
  },
  {
    icon: Shapes,
    title: "Tailored Solutions, Not Templates",
    desc: "Every business is unique. We design and develop custom solutions aligned with your goals, workflows, and long-term vision.",
    chips: ["Built around you", "No cookie-cutter"],
    image: "/images/4.avif",
    back: {
      headline: "Built around your workflow",
      points: [
        "Zero off-the-shelf templates",
        "Designed for your exact process",
        "Custom integrations & domain logic",
        "Yours to own, fully",
      ],
    },
  },
  {
    icon: MessagesSquare,
    title: "Transparent Collaboration",
    desc: "Clear communication, milestone-based execution, and continuous feedback keep you informed and involved at every step.",
    chips: ["Milestone-based", "Always in the loop"],
    image: "/images/5.avif",
    back: {
      headline: "You're never in the dark",
      points: [
        "Weekly demos and updates",
        "Shared roadmap and backlog",
        "A direct line to the engineers",
        "Milestone-based delivery",
      ],
    },
  },
  {
    icon: Cpu,
    title: "Future-Ready Technology",
    desc: "We build with modern frameworks, cloud infrastructure, automation, and AI capabilities that keep your business ahead of the curve.",
    chips: ["Cloud-native", "AI-ready"],
    image: "/images/6.avif",
    back: {
      headline: "Built to last",
      points: [
        "Modern, well-supported frameworks",
        "Cloud-native and scalable",
        "AI-ready from the start",
        "Easy to extend and maintain",
      ],
    },
  },
  {
    icon: HeartHandshake,
    title: "Your Long-Term Technology Partner",
    desc: "Our relationship doesn't end at launch. We provide ongoing support, optimization, and strategic guidance as your product evolves.",
    chips: ["We don't disappear", "Years, not months"],
    image: "/images/7.avif",
    back: {
      headline: "We stay after launch",
      points: [
        "Ongoing support with real SLAs",
        "Continuous optimization",
        "Strategic technology guidance",
        "Years of partnership, not months",
      ],
    },
  },
];

/* Hand-tuned Caveat annotations per folio — small editorial marginalia. */
const MARGINALIA: Record<number, string> = {
  0: "first we learn",
  1: "one team, the whole bench",
  2: "weeks, not quarters",
  3: "no templates here",
  4: "we send demos, not slides",
  5: "the stack stays alive",
  6: "still answering, years later",
};

/* Small per-folio technical diagram — drawn inline as an SVG glyph.
   Subtle, monochrome, ~64×64, decorative only. */
function FolioGlyph({ kind }: { kind: number }) {
  const stroke = "currentColor";
  const common = { fill: "none", stroke, strokeWidth: 1, strokeLinecap: "round" as const };
  switch (kind) {
    case 0:
      // Small network of nodes
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-manuscript-walnutDeep" aria-hidden>
          <circle cx="14" cy="20" r="3" {...common} />
          <circle cx="50" cy="14" r="3" {...common} />
          <circle cx="32" cy="34" r="3.5" {...common} />
          <circle cx="14" cy="50" r="3" {...common} />
          <circle cx="50" cy="50" r="3" {...common} />
          <line x1="14" y1="20" x2="32" y2="34" {...common} opacity={0.6} />
          <line x1="50" y1="14" x2="32" y2="34" {...common} opacity={0.6} />
          <line x1="32" y1="34" x2="14" y2="50" {...common} opacity={0.6} />
          <line x1="32" y1="34" x2="50" y2="50" {...common} opacity={0.6} />
          <line x1="14" y1="20" x2="50" y2="14" {...common} opacity={0.3} />
          <line x1="14" y1="50" x2="50" y2="50" {...common} opacity={0.3} />
        </svg>
      );
    case 1:
      // Concentric layers
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-manuscript-walnutDeep" aria-hidden>
          <circle cx="32" cy="32" r="26" {...common} />
          <circle cx="32" cy="32" r="20" {...common} opacity={0.7} />
          <circle cx="32" cy="32" r="14" {...common} opacity={0.5} />
          <circle cx="32" cy="32" r="8" {...common} opacity={0.4} />
          <circle cx="32" cy="32" r="2.5" fill={stroke} />
        </svg>
      );
    case 2:
      // Speedometer arc
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-manuscript-walnutDeep" aria-hidden>
          <path d="M 10 44 A 22 22 0 0 1 54 44" {...common} />
          <path d="M 14 44 A 18 18 0 0 1 50 44" {...common} opacity={0.4} />
          <line x1="32" y1="44" x2="44" y2="26" {...common} />
          <circle cx="32" cy="44" r="2.5" fill={stroke} />
          <line x1="10" y1="44" x2="14" y2="44" {...common} />
          <line x1="54" y1="44" x2="50" y2="44" {...common} />
          <line x1="32" y1="22" x2="32" y2="26" {...common} opacity={0.5} />
        </svg>
      );
    case 3:
      // Compass + frame
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-manuscript-walnutDeep" aria-hidden>
          <rect x="8" y="8" width="48" height="48" {...common} opacity={0.5} />
          <line x1="8" y1="32" x2="56" y2="32" {...common} opacity={0.4} />
          <line x1="32" y1="8" x2="32" y2="56" {...common} opacity={0.4} />
          <polygon points="32,16 36,32 32,48 28,32" fill={stroke} opacity={0.85} />
          <circle cx="32" cy="32" r="2" fill={stroke} />
        </svg>
      );
    case 4:
      // Speech / collaboration — two facing arcs
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-manuscript-walnutDeep" aria-hidden>
          <rect x="6" y="14" width="20" height="14" rx="2" {...common} />
          <rect x="38" y="34" width="20" height="14" rx="2" {...common} />
          <line x1="6" y1="22" x2="2" y2="26" {...common} />
          <line x1="38" y1="44" x2="34" y2="48" {...common} />
          <line x1="26" y1="22" x2="38" y2="22" {...common} opacity={0.5} strokeDasharray="2 3" />
        </svg>
      );
    case 5:
      // Microchip
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-manuscript-walnutDeep" aria-hidden>
          <rect x="18" y="18" width="28" height="28" {...common} />
          <rect x="24" y="24" width="16" height="16" {...common} opacity={0.5} />
          {[20, 28, 36, 44].map((x) => (
            <line key={`t-${x}`} x1={x} y1="18" x2={x} y2="12" {...common} />
          ))}
          {[20, 28, 36, 44].map((x) => (
            <line key={`b-${x}`} x1={x} y1="46" x2={x} y2="52" {...common} />
          ))}
          {[20, 28, 36, 44].map((y) => (
            <line key={`l-${y}`} x1="18" y1={y} x2="12" y2={y} {...common} />
          ))}
          {[20, 28, 36, 44].map((y) => (
            <line key={`r-${y}`} x1="46" y1={y} x2="52" y2={y} {...common} />
          ))}
        </svg>
      );
    case 6:
    default:
      // Two clasped rings / partnership
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14 text-manuscript-walnutDeep" aria-hidden>
          <circle cx="24" cy="32" r="14" {...common} />
          <circle cx="40" cy="32" r="14" {...common} />
        </svg>
      );
  }
}

/* Single folio — one principle revealed in-place */
function Folio({
  reason,
  index,
  side,
}: {
  reason: Reason;
  index: number;
  side: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const reduce = useReducedMotion();
  const Icon = reason.icon;

  return (
    <div
      ref={ref}
      className={`relative grid items-start gap-6 py-14 md:gap-10 md:py-20 lg:grid-cols-12`}
      data-side={side}
    >
      {/* Folio marker — centered on the ink line */}
      <div className="absolute left-6 top-14 z-10 -translate-x-1/2 md:left-1/2 md:top-20">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border bg-manuscript-parchmentLight transition-all duration-700 md:h-14 md:w-14 ${
            inView ? "border-manuscript-rustDeep text-manuscript-rustDeep shadow-[0_8px_24px_rgba(166,67,42,0.18)]" : "border-manuscriptAlpha-ink-30 text-manuscript-inkMuted"
          }`}
        >
          <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.6} />
        </div>
      </div>

      {/* Card — alternates left/right on desktop, always right of the line on mobile */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: reduce ? 0 : 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.05 }}
        className={`pl-14 md:pl-0 ${
          side === "left"
            ? "md:col-span-5 md:col-start-1 md:pr-10 md:text-right"
            : "md:col-span-5 md:col-start-8 md:pl-10 md:text-left"
        }`}
      >
        {/* Folio header */}
        <p className={`chapter-eyebrow ${side === "left" ? "md:justify-end md:flex" : ""}`}>
          Folio {String(index + 1).padStart(2, "0")} · AINCURU Codex
        </p>
        <h3 className="mt-3 font-manuscript text-[clamp(28px,3.2vw,38px)] font-semibold leading-[1.1] tracking-tight text-manuscript-ink">
          {reason.title}
        </h3>

        {/* Body */}
        <p className="mt-4 font-manuscriptBody text-[15.5px] leading-relaxed text-manuscript-inkSoft">
          {reason.desc}
        </p>

        {/* Chips */}
        <div className={`mt-5 flex flex-wrap gap-2 ${side === "left" ? "md:justify-end" : ""}`}>
          {reason.chips.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 border border-manuscriptAlpha-ink-20 bg-manuscript-parchmentLight px-2.5 py-1 font-manuscriptBody text-[12px] font-semibold text-manuscript-ink"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-manuscript-rust" />
              {c}
            </span>
          ))}
        </div>

        {/* Margin annotation — Caveat */}
        {MARGINALIA[index] && (
          <p
            className={`mt-5 font-manuscriptHand text-[18px] italic text-manuscript-rustDeep ${
              side === "left" ? "md:text-right" : "md:text-left"
            }`}
          >
            — {MARGINALIA[index]}
          </p>
        )}
      </motion.div>

      {/* Side card — opposite column, with spot illustration / glyph */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: reduce ? 0 : 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.18 }}
        className={`hidden md:block md:col-span-5 ${
          side === "left" ? "md:col-start-8 md:pl-10" : "md:col-start-1 md:pr-10"
        }`}
      >
        <figure className="manuscript-card relative overflow-hidden border-manuscriptAlpha-ink-20 p-6">
          {/* Top: small folio bar */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.2em] text-manuscript-inkMuted">
              PLATE · {String(index + 1).padStart(2, "0")}
            </span>
            <RotateCw className="h-3.5 w-3.5 text-manuscript-inkMuted" strokeWidth={2} />
          </div>
          <hr className="ink-rule mt-3" />

          {/* Body of plate — glyph + back.headline + back.points */}
          <div className="mt-5 flex items-start gap-5">
            <FolioGlyph kind={index} />
            <div className="flex-1">
              <p className="chapter-eyebrow !text-manuscript-goldDeep">
                Evidence · {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-manuscript text-[18px] font-semibold leading-tight text-manuscript-ink">
                {reason.back.headline}
              </p>
            </div>
          </div>

          <ul className="mt-5 space-y-2.5">
            {reason.back.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 font-manuscriptBody text-[13.5px] leading-snug text-manuscript-inkSoft"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-manuscript-rust" />
                {p}
              </li>
            ))}
          </ul>

          {reason.image && (
            <div className="mt-5 overflow-hidden border border-manuscriptAlpha-ink-15">
              <img
                src={reason.image}
                alt=""
                aria-hidden
                className="h-32 w-full object-cover sepia-[0.4]"
              />
            </div>
          )}
        </figure>
      </motion.div>

      {/* Mobile-only inline plate (shown under text on small screens) */}
      <div className="pl-14 md:hidden">
        <FolioGlyph kind={index} />
      </div>
    </div>
  );
}

/* ─── Codex component ───────────────────────────────────────────────── */

export const WhyNeoPerion = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  // Path length is approximated — use 1.0 mapped to stroke-dashoffset
  const dashOffset = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="why-us" ref={sectionRef} className="parchment-surface relative">
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-20 lg:px-8 lg:pt-28">
        {/* Opening chapter spread */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="chapter-eyebrow">Chapter II — On working with us</p>
          <hr className="ink-rule--gold mx-auto mt-4 w-32" />
          <h2 className="mt-6 font-manuscript text-[clamp(34px,4.5vw,48px)] font-semibold leading-[1.1] tracking-tight text-manuscript-ink">
            Why choose AINCURU
          </h2>
          <p className="mt-5 font-manuscriptBody text-[16px] leading-relaxed text-manuscript-inkSoft">
            Seven reasons the companies we work with keep us on retainer — and why
            the team they keep on speed-dial is the same one they onboarded.
          </p>
          <p className="mt-4 font-manuscript text-[clamp(18px,2vw,22px)] italic text-manuscript-walnutDeep">
            The AINCURU Codex — seven principles behind every system we build.
          </p>
        </div>

        {/* Codex timeline — single continuous ink line + alternating folios */}
        <div className="relative mt-16 pb-10">
          {/* The continuous ink line — left-aligned on mobile, centered on md+ */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 1000"
          >
            {/* Outer soft line — drawn paper crease */}
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="1000"
              stroke="currentColor"
              strokeWidth="0.18"
              className="text-manuscript-inkMuted"
              opacity="0.18"
            />
            {/* The living ink line — animates as user scrolls */}
            {!reduce && (
              <motion.line
                x1="50"
                y1="0"
                x2="50"
                y2="1000"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeDasharray="1 1"
                className="text-manuscript-walnutDeep"
                style={{ pathLength: 1, strokeDashoffset: dashOffset as unknown as number }}
              />
            )}
            {/* Static ink line for reduced-motion */}
            {reduce && (
              <line
                x1="50"
                y1="0"
                x2="50"
                y2="1000"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                className="text-manuscript-walnutDeep"
              />
            )}
          </svg>

          {/* Folios */}
          {REASONS.map((reason, i) => (
            <Folio
              key={reason.title}
              reason={reason}
              index={i}
              side={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>

        {/* Closing ornament */}
        <div className="ornament-dots mx-auto mt-8 max-w-md">
          <span>✦ ✦ ✦</span>
        </div>
      </div>
    </section>
  );
};