import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
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
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
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

function Stage({ reason, index }: { reason: Reason; index: number }) {
  const Icon = reason.icon;
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Text */}
      <div className="relative min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="font-mono text-[15px] font-semibold text-brand">
              {String(index + 1).padStart(2, "0")}
              <span className="text-faint"> / {String(REASONS.length).padStart(2, "0")}</span>
            </span>
            <h3 className="mt-5 font-display text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
              {reason.title}
            </h3>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-body">{reason.desc}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {reason.chips.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-1.5 border border-hairline bg-paper px-3 py-1.5 text-[12px] font-semibold text-body"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Visual — 3D flip card (front: image/rings · back: concrete proof points) */}
      <div className="relative aspect-[4/3] w-full">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.06 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            className="group absolute inset-0 [perspective:1600px]"
          >
            <div className="relative h-full w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] motion-reduce:duration-150">
              {/* FRONT */}
              <div className="absolute inset-0 overflow-hidden border border-hairline bg-gradient-to-br from-canvas to-brand/[0.08] [backface-visibility:hidden]">
                {reason.image ? (
                  <>
                    <img
                      src={reason.image}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/45 via-transparent to-navy/25" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle,#D7DCE5_1px,transparent_1px)] bg-[size:26px_26px] opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute h-64 w-64 rounded-full border border-brand/15 [animation:spin_22s_linear_infinite]" />
                      <div className="absolute h-44 w-44 rounded-full border border-brand/10 [animation:spin_16s_linear_infinite_reverse]" />
                      <div className="relative flex h-28 w-28 items-center justify-center border border-hairline bg-paper shadow-[0_16px_50px_rgba(15,23,42,0.12)]">
                        <Icon className="h-12 w-12 text-brand" strokeWidth={1.5} />
                      </div>
                    </div>
                  </>
                )}

                <span className="absolute left-6 top-6 flex items-center gap-1.5 border border-hairline bg-paper px-3 py-1.5 text-[12px] font-semibold text-body shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {reason.chips[0]}
                </span>

                {/* flip affordance */}
                <span className="absolute bottom-5 right-5 flex items-center gap-2 border border-hairline bg-paper/90 px-3 py-1.5 text-[11px] font-semibold text-ink shadow-sm backdrop-blur-sm">
                  <RotateCw className="h-3.5 w-3.5 text-brand" strokeWidth={2.25} />
                  What we do
                </span>
              </div>

              {/* BACK — the same image, dimmed (opacity), with proof points over it */}
              <div className="absolute inset-0 flex flex-col justify-center overflow-hidden border border-hairline bg-navy p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                {reason.image && (
                  <img
                    src={reason.image}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-navy/55" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(30,93,255,0.18),transparent_60%)]" />
                <span className="relative text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8FB8FF]">
                  {reason.title}
                </span>
                <h4 className="relative mt-2 font-display text-[clamp(20px,2.2vw,26px)] font-bold leading-tight">
                  {reason.back.headline}
                </h4>
                <ul className="relative mt-5 space-y-2.5">
                  {reason.back.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#8FB8FF]" strokeWidth={2.25} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export const WhyNeoPerion = () => {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.max(0, Math.min(REASONS.length - 1, Math.floor(p * REASONS.length)));
    setActive(idx);
  });

  return (
    <section
      ref={ref}
      id="why-us"
      className="relative bg-canvas"
      style={{ height: `${REASONS.length * 78}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden border-b border-hairline">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <p className="mb-10 text-[12px] font-semibold uppercase tracking-[0.08em] text-brand">
            Why Choose Neo Perion
          </p>

          <Stage reason={REASONS[active]} index={active} />

          {/* progress rail */}
          <div className="mt-12 flex gap-2">
            {REASONS.map((r, i) => (
              <span
                key={r.title}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i <= active ? "bg-brand" : "bg-hairline"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
