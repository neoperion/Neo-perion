import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Gauge,
  Shapes,
  MessagesSquare,
  Cpu,
  HeartHandshake,
  Check,
  RotateCw,
} from "lucide-react";

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

/**
 * Codex card — one reason. Front: icon + title + body + chips.
 * Back: concrete proof points revealed on hover/focus.
 * 3D flip preserves the original affordance while keeping the layout
 * static (no scroll-driven sticky, no progress rail).
 */
function CodexCard({
  reason,
  index,
  reduceMotion,
}: {
  reason: Reason;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = reason.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="group relative aspect-[4/5] w-full [perspective:1600px]"
    >
      <div
        className={`relative h-full w-full [transform-style:preserve-3d] ${
          reduceMotion
            ? ""
            : "transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[transform:rotateY(180deg)] motion-reduce:duration-150"
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col overflow-hidden border border-manuscriptAlpha-ink-20 bg-manuscript-parchmentLight [backface-visibility:hidden]">
          {/* Top half — sepia spot illustration */}
          <div className="relative flex h-1/2 items-center justify-center overflow-hidden border-b border-manuscriptAlpha-ink-15 bg-gradient-to-br from-manuscript-parchment via-manuscript-parchmentLight to-manuscript-gold/10">
            {reason.image ? (
              <>
                <img
                  src={reason.image}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover sepia-[0.5]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-manuscript-walnut/45 via-transparent to-manuscript-ink/30" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle,#E8D9BD_1px,transparent_1px)] bg-[size:22px_22px] opacity-50" />
                <div className="absolute h-40 w-40 rounded-full border border-manuscript-gold/20" />
                <div className="absolute h-28 w-28 rounded-full border border-manuscript-gold/15" />
              </>
            )}
            <div className="relative flex h-20 w-20 items-center justify-center border border-manuscriptAlpha-ink-20 bg-manuscript-parchmentLight shadow-[0_8px_24px_rgba(31,26,20,0.18)]">
              <Icon className="h-9 w-9 text-manuscript-rustDeep" strokeWidth={1.5} />
            </div>
            {/* Wax-seal numeral */}
            <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-manuscript-rustDeep font-manuscript text-[15px] font-semibold text-manuscript-parchmentLight shadow-sm ring-1 ring-manuscript-walnutDeep">
              {index + 1}
            </span>
          </div>

          {/* Bottom half — title, body, chips */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-manuscript text-[20px] font-semibold leading-tight tracking-tight text-manuscript-ink">
              {reason.title}
            </h3>
            <p className="mt-2.5 font-manuscriptBody text-[13.5px] leading-relaxed text-manuscript-inkSoft">
              {reason.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {reason.chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 border border-manuscriptAlpha-ink-20 bg-manuscript-parchment px-2.5 py-1 font-manuscriptBody text-[11px] font-semibold text-manuscript-ink"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-manuscript-rust" />
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="chapter-eyebrow !text-manuscript-inkMuted">
                Reason {String(index + 1).padStart(2, "0")}
              </span>
              <span className="inline-flex items-center gap-1 font-manuscriptBody text-[10px] font-semibold uppercase tracking-[0.14em] text-manuscript-goldDeep">
                <RotateCw className="h-3 w-3" strokeWidth={2.25} />
                Flip
              </span>
            </div>
          </div>
        </div>

        {/* BACK — concrete proof points */}
        <div className="absolute inset-0 flex flex-col overflow-hidden border border-manuscriptAlpha-ink-20 bg-manuscript-parchmentDeep p-6 text-manuscript-parchmentLight [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="chapter-eyebrow !text-manuscript-gold">
            {reason.title}
          </span>
          <h4 className="mt-2 font-manuscript text-[19px] font-semibold leading-tight text-manuscript-parchmentLight">
            {reason.back.headline}
          </h4>
          <hr className="ink-rule--gold mt-4" />
          <ul className="mt-5 space-y-3">
            {reason.back.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 font-manuscriptBody text-[13px] leading-snug text-manuscript-parchmentLight/90"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-manuscript-gold/50">
                  <Check className="h-2.5 w-2.5 text-manuscript-gold" strokeWidth={2.5} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export const WhyNeoPerion = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="why-us" className="parchment-surface relative">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-8 lg:py-28">
        {/* Chapter opener */}
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
        </div>

        {/* Codex grid — 3 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {REASONS.map((reason, i) => (
            <CodexCard
              key={reason.title}
              reason={reason}
              index={i}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* Closing ink-rule */}
        <div className="ornament-dots mx-auto mt-16 max-w-md">
          <span>✦ ✦ ✦</span>
        </div>
      </div>
    </section>
  );
};
