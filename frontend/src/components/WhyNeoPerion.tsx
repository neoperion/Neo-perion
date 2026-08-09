import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Compass, Sparkle } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ──────────────────────────────────────────────────────────────────────
   WHY AINCURU — AINCURU METHOD (Living Manuscript / Engineering Codex)

   "An old engineering manuscript brought to life as a modern
   digital interface."

   Desktop composition (≥1280):
     Header (left) ─────────────── Diagram (centre) ─── Cards (right)
                                                         Cards (left)
                            ─── Cards (left)

   Tablet (768–1199):
     Header (full) → Diagram (centred) → 2-col cards → CTA

   Mobile (<768):
     Header → Diagram (smaller) → 5 stacked codex notes → CTA
   ────────────────────────────────────────────────────────────────────── */

type PrincipleId = "context" | "product" | "judgement" | "people" | "continuity";

interface Principle {
  id: PrincipleId;
  number: string;
  label: string;
  title: string;
  description: string;
  supporting: string;
  /** Column on desktop. */
  side: "left" | "right";
  /** Vertical position in the column. */
  slot: "top" | "mid" | "bottom";
  /** Pentagon vertex for the diagram (radians, 0 = top, clockwise). */
  angle: number;
}

/* Single source of truth — central diagram and side cards read from
   the same array. Order = reading order on mobile, pentagon order
   on desktop. */
const PRINCIPLES: Principle[] = [
  {
    id: "context",
    number: "01",
    label: "CONTEXT",
    title: "Context before technology.",
    description:
      "We understand the business, people, workflows, data and constraints before deciding what to build.",
    supporting: "Understand first",
    side: "left",
    slot: "top",
    angle: -Math.PI / 2, // top
  },
  {
    id: "product",
    number: "02",
    label: "PRODUCT",
    title: "From idea to working product.",
    description:
      "We take ideas from discovery and architecture through engineering, design, AI, deployment and beyond.",
    supporting: "Build the right thing",
    side: "right",
    slot: "top",
    angle: -Math.PI / 2 + (2 * Math.PI) / 5, // upper-left
  },
  {
    id: "judgement",
    number: "03",
    label: "JUDGEMENT",
    title: "AI when it earns its place.",
    description:
      "We use AI where it improves the outcome — and don't force it where it doesn't.",
    supporting: "Use with judgement",
    side: "right",
    slot: "mid",
    angle: -Math.PI / 2 + (4 * Math.PI) / 5, // upper-right
  },
  {
    id: "people",
    number: "04",
    label: "PEOPLE",
    title: "Close to the builders.",
    description:
      "The people building the system stay close to the problem and the decisions.",
    supporting: "Close to the builders",
    side: "left",
    slot: "bottom",
    angle: -Math.PI / 2 + (6 * Math.PI) / 5, // lower-left
  },
  {
    id: "continuity",
    number: "05",
    label: "CONTINUITY",
    title: "Shipping isn't the end.",
    description:
      "Real products evolve. We stay to learn, improve and scale with you.",
    supporting: "Improve continuously",
    side: "right",
    slot: "bottom",
    angle: -Math.PI / 2 + (8 * Math.PI) / 5, // lower-right
  },
];

const CTA_TEXT = "Let's Build With Context";

/* ─── Diagram node icons (SVG, monochrome ink + rust accent) ─────────── */
/* Each ~56px viewbox; pure inline SVG so they stay sharp at every size
   and never break the network for a missing asset. */

function MagnifyingGlass() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full" aria-hidden>
      <circle cx="24" cy="24" r="13" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="9" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
      <line x1="33.5" y1="33.5" x2="46" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="33.5" y1="33.5" x2="46" y2="46" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function Lightbulb() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full" aria-hidden>
      <path
        d="M28 8 C 18 8 14 17 18 25 C 20 28 22 30 22 34 L 34 34 C 34 30 36 28 38 25 C 42 17 38 8 28 8 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <line x1="23" y1="38" x2="33" y2="38" stroke="currentColor" strokeWidth="1.2" />
      <line x1="24" y1="42" x2="32" y2="42" stroke="currentColor" strokeWidth="1.2" />
      <line x1="26" y1="46" x2="30" y2="46" stroke="currentColor" strokeWidth="1.2" />
      <line x1="28" y1="8" x2="28" y2="14" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />
    </svg>
  );
}

function Brain() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full" aria-hidden>
      <path
        d="M28 10 C 18 10 14 18 16 24 C 12 26 12 32 16 34 C 14 38 18 44 24 44 L 24 46 L 32 46 L 32 44 C 38 44 42 38 40 34 C 44 32 44 26 40 24 C 42 18 38 10 28 10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M28 14 C 28 22 28 32 28 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.55"
      />
      <path
        d="M20 20 C 22 22 26 24 28 26 M 36 20 C 34 22 30 24 28 26 M 20 32 C 22 34 26 36 28 36 M 36 32 C 34 34 30 36 28 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.45"
      />
    </svg>
  );
}

function Engineers() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full" aria-hidden>
      {/* left figure */}
      <circle cx="20" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M14 24 L 14 40 M 20 22 L 20 40 M 14 28 L 26 28" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      {/* right figure */}
      <circle cx="36" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M30 24 L 30 40 M 36 22 L 36 40 M 30 28 L 42 28" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      {/* drafting table */}
      <line x1="8" y1="46" x2="48" y2="46" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="14" y1="42" x2="42" y2="42" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
      <line x1="20" y1="38" x2="36" y2="38" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
    </svg>
  );
}

function EvolveLoop() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full" aria-hidden>
      <circle cx="28" cy="28" r="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M28 14 A 14 14 0 0 1 42 28 L 46 28 L 40 22 L 40 34 L 46 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 42 A 14 14 0 0 1 14 28 L 10 28 L 16 34 L 16 22 L 10 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <circle cx="28" cy="28" r="2" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

const NODE_ICON: Record<PrincipleId, () => JSX.Element> = {
  context: MagnifyingGlass,
  product: Lightbulb,
  judgement: Brain,
  people: Engineers,
  continuity: EvolveLoop,
};

/* ─── Manuscript card ─────────────────────────────────────────────────── */

function ManuscriptCard({
  principle,
  isActive,
  onActivate,
  onDeactivate,
}: {
  principle: Principle;
  isActive: boolean;
  onActivate: (id: PrincipleId) => void;
  onDeactivate: () => void;
}) {
  const reduce = useReducedMotion();
  const Icon = NODE_ICON[principle.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: reduce ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => onActivate(principle.id)}
      onMouseLeave={() => onDeactivate()}
      onFocus={() => onActivate(principle.id)}
      onBlur={() => onDeactivate()}
      className={`manuscript-card group relative cursor-default p-5 transition-shadow sm:p-6 ${
        isActive ? "shadow-[0_18px_40px_-22px_rgba(166,67,42,0.45)]" : ""
      }`}
      aria-labelledby={`principle-${principle.id}-title`}
    >
      {/* Top bar: index + label + connector dot */}
      <header className="flex items-center justify-between">
        <span className="chapter-eyebrow !text-manuscript-rustDeep">
          {principle.number} · {principle.label}
        </span>
        <span
          className={`h-2.5 w-2.5 rounded-full border transition-colors ${
            isActive
              ? "border-manuscript-rustDeep bg-manuscript-rustDeep"
              : "border-manuscriptAlpha-ink-30 bg-manuscript-parchmentLight"
          }`}
          aria-hidden
        />
      </header>

      <h3
        id={`principle-${principle.id}-title`}
        className="mt-3 font-manuscript text-[20px] font-semibold leading-[1.15] tracking-tight text-manuscript-ink sm:text-[22px]"
      >
        {principle.title}
      </h3>

      <p className="mt-3 font-manuscriptBody text-[13.5px] leading-relaxed text-manuscript-inkSoft sm:text-[14px]">
        {principle.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-manuscriptAlpha-ink-15 pt-4">
        <span className="inline-flex items-center gap-2 font-manuscriptBody text-[11px] font-semibold uppercase tracking-[0.18em] text-manuscript-walnutDeep">
          <span className="block h-5 w-5 shrink-0 text-manuscript-walnutDeep">
            <Icon />
          </span>
          <span className="sr-only">{principle.label} icon</span>
          {principle.supporting}
        </span>
        {/* Decorative inline mark */}
        <Sparkle className="h-3.5 w-3.5 text-manuscript-goldDeep" strokeWidth={1.6} aria-hidden />
      </div>
    </motion.article>
  );
}

/* ─── Central AINCURU METHOD diagram ───────────────────────────────────── */
/* A pentagonal arrangement of 5 nodes around a circular rosette center.
   Geometry is computed from PRINCIPLES — single source of truth.        */

function AincuruMethodDiagram({ activeId }: { activeId: PrincipleId | null }) {
  // Wrapper viewbox: 460×460, centre (230,230), node radius 168
  const CX = 230;
  const CY = 230;
  const R = 168;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden>
      <svg
        viewBox="0 0 460 460"
        className="absolute inset-0 h-full w-full"
      >
        {/* Soft outer construction circles */}
        <g fill="none" stroke="currentColor" strokeWidth="0.6" className="text-manuscript-walnut/40">
          <circle cx={CX} cy={CY} r={R + 26} opacity="0.45" />
          <circle cx={CX} cy={CY} r={R - 32} opacity="0.35" strokeDasharray="2 4" />
        </g>

        {/* Tick marks every 18° on the outer ring — drafting feel */}
        <g stroke="currentColor" strokeWidth="0.5" className="text-manuscript-walnut/55" opacity="0.55">
          {Array.from({ length: 20 }).map((_, i) => {
            const a = (i * 18 * Math.PI) / 180;
            const x1 = CX + Math.cos(a) * (R + 20);
            const y1 = CY + Math.sin(a) * (R + 20);
            const x2 = CX + Math.cos(a) * (R + 32);
            const y2 = CY + Math.sin(a) * (R + 32);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>

        {/* Connector lines — dashed rust, endpoint dots */}
        <g fill="none" strokeWidth="1.2" strokeLinecap="round" className="text-manuscript-rust">
          {PRINCIPLES.map((p) => {
            const x = CX + Math.cos(p.angle) * R;
            const y = CY + Math.sin(p.angle) * R;
            const isActive = activeId === p.id;
            return (
              <g key={p.id}>
                <line
                  x1={CX}
                  y1={CY}
                  x2={x}
                  y2={y}
                  strokeDasharray="3 4"
                  opacity={isActive ? 0.95 : 0.55}
                  className={isActive ? "" : "text-manuscript-walnut"}
                />
                <circle cx={x} cy={y} r="3.5" fill="currentColor" opacity={isActive ? 1 : 0.6} />
              </g>
            );
          })}
        </g>

        {/* Centre rosette — antique compass + rosette combination */}
        <g>
          {/* Faded backing circle */}
          <circle cx={CX} cy={CY} r="64" fill="#E8D8B8" opacity="0.55" />
          {/* Outer ring */}
          <circle cx={CX} cy={CY} r="62" fill="none" stroke="currentColor" strokeWidth="0.9" className="text-manuscript-walnutDeep" />
          {/* Inner ring */}
          <circle cx={CX} cy={CY} r="50" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-manuscript-walnutDeep" opacity="0.7" />
          {/* 16 tick marks */}
          <g stroke="currentColor" strokeWidth="0.8" className="text-manuscript-walnutDeep">
            {Array.from({ length: 16 }).map((_, i) => {
              const a = (i * (360 / 16) * Math.PI) / 180;
              const x1 = CX + Math.cos(a) * 50;
              const y1 = CY + Math.sin(a) * 50;
              const x2 = CX + Math.cos(a) * 62;
              const y2 = CY + Math.sin(a) * 62;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
          </g>
          {/* Compass rose — 8 points */}
          <g className="text-manuscript-walnutDeep" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
            <polygon
              points={`${CX},${CY - 46} ${CX + 6},${CY} ${CX},${CY + 46} ${CX - 6},${CY}`}
              fill="currentColor"
              opacity="0.85"
            />
            <polygon
              points={`${CX - 46},${CY} ${CX},${CY + 6} ${CX + 46},${CY} ${CX},${CY - 6}`}
              fill="currentColor"
              opacity="0.55"
            />
            <polygon
              points={`${CX - 32},${CY - 32} ${CX},${CY - 4} ${CX + 32},${CY - 32} ${CX + 4},${CY}`}
              fill="none"
              opacity="0.55"
            />
            <polygon
              points={`${CX - 32},${CY + 32} ${CX},${CY + 4} ${CX + 32},${CY + 32} ${CX - 4},${CY}`}
              fill="none"
              opacity="0.55"
            />
          </g>
          {/* Centre dot */}
          <circle cx={CX} cy={CY} r="2.5" fill="currentColor" className="text-manuscript-rustDeep" />

          {/* AINCURU METHOD caption — small letter-spaced label */}
          <text
            x={CX}
            y={CY + 78}
            textAnchor="middle"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="8"
            fontWeight="600"
            letterSpacing="2.4"
            className="fill-manuscript-walnutDeep"
          >
            AINCURU METHOD
          </text>
        </g>
      </svg>

      {/* Node pills — absolutely positioned over the SVG using the same
         pentagon math, so they align with the connector endpoints.        */}
      {PRINCIPLES.map((p) => {
        const xPct = 50 + (Math.cos(p.angle) * R * 100) / 460;
        const yPct = 50 + (Math.sin(p.angle) * R * 100) / 460;
        const Icon = NODE_ICON[p.id];
        const isActive = activeId === p.id;
        return (
          <div
            key={p.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${xPct}%`, top: `${yPct}%` }}
          >
            <div
              className={`relative flex h-12 w-12 items-center justify-center rounded-full border bg-manuscript-parchmentLight shadow-[0_6px_18px_rgba(31,26,20,0.22)] transition-all duration-500 sm:h-14 sm:w-14 ${
                isActive
                  ? "border-manuscript-rustDeep text-manuscript-rustDeep scale-110"
                  : "border-manuscriptAlpha-ink-25 text-manuscript-walnutDeep"
              }`}
            >
              <div className="h-6 w-6 sm:h-7 sm:w-7">
                <Icon />
              </div>
              {/* Small chapter-eyebrow label below the node */}
              <span
                className={`pointer-events-none absolute top-full left-1/2 mt-1 -translate-x-1/2 whitespace-nowrap text-center font-manuscriptBody text-[9px] font-semibold uppercase tracking-[0.22em] transition-colors sm:text-[10px] ${
                  isActive ? "text-manuscript-rustDeep" : "text-manuscript-inkMuted"
                }`}
              >
                {p.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── ManuscriptDecoration — corner ornaments & top-right folio note ── */

function BooksAndQuill() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
      {/* stack of books */}
      <rect x="6" y="78" width="60" height="10" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="10" y="68" width="50" height="10" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="14" y="58" width="42" height="10" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="10" y1="73" x2="60" y2="73" stroke="currentColor" strokeWidth="0.5" />
      <line x1="14" y1="63" x2="64" y2="63" stroke="currentColor" strokeWidth="0.5" />
      {/* quill */}
      <path
        d="M 14 86 L 96 14 L 102 20 L 24 92 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M 24 92 L 22 100 L 30 96"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* feather barbs */}
      <path
        d="M 40 38 L 50 32 M 50 48 L 62 40 M 62 60 L 74 50 M 74 70 L 84 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.55"
      />
      {/* ink bottle */}
      <rect x="76" y="84" width="18" height="14" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="80" y="80" width="10" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="85" cy="90" r="1" fill="currentColor" />
    </svg>
  );
}

function CornerCompass() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
      <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />
      {/* 8-point compass rose */}
      <polygon
        points="60,12 64,60 60,108 56,60"
        fill="currentColor"
        opacity="0.85"
      />
      <polygon
        points="12,60 60,56 108,60 60,64"
        fill="currentColor"
        opacity="0.55"
      />
      <polygon
        points="29,29 60,56 91,29 56,60"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <polygon
        points="29,91 60,56 91,91 56,60"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <circle cx="60" cy="60" r="3" fill="currentColor" />
      {/* tick marks */}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 22.5 * Math.PI) / 180;
        const x1 = 60 + Math.cos(a) * 42;
        const y1 = 60 + Math.sin(a) * 42;
        const x2 = 60 + Math.cos(a) * 50;
        const y2 = 60 + Math.sin(a) * 50;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.45"
          />
        );
      })}
    </svg>
  );
}

function ManuscriptDecoration() {
  return (
    <>
      {/* Top-right folio note */}
      <div className="pointer-events-none absolute right-4 top-4 z-10 hidden text-right md:right-6 md:top-6 md:block">
        <p className="font-manuscriptBody text-[10px] font-semibold uppercase tracking-[0.32em] text-manuscript-walnutDeep">
          AINCURU LLP
        </p>
        <p className="mt-1 font-manuscriptBody text-[9px] tracking-[0.22em] text-manuscript-inkMuted">
          ENGINEERING NOTE · 001
        </p>
        <div className="ml-auto mt-1 h-px w-24 bg-manuscript-walnutDeep/50" />
      </div>

      {/* Bottom-left books + quill */}
      <div
        className="pointer-events-none absolute left-2 bottom-2 hidden h-24 w-24 text-manuscript-walnutDeep opacity-70 md:left-4 md:bottom-4 md:h-32 md:w-32 lg:block"
        aria-hidden
      >
        <BooksAndQuill />
      </div>

      {/* Bottom-right compass */}
      <div
        className="pointer-events-none absolute right-2 bottom-2 hidden h-20 w-20 text-manuscript-walnutDeep opacity-70 md:right-4 md:bottom-4 md:h-28 md:w-28 lg:block"
        aria-hidden
      >
        <CornerCompass />
      </div>
    </>
  );
}

/* ─── Manuscript frame — subtle inner hairline ───────────────────────── */

function ManuscriptFrame() {
  return (
    <div
      className="pointer-events-none absolute inset-3 hidden border border-manuscriptAlpha-ink-15 opacity-80 sm:inset-4 md:inset-5 lg:block"
      aria-hidden
    />
  );
}

/* ─── Composition ─────────────────────────────────────────────────────── */
/* Desktop: 12-col grid. Header on left, diagram centred, cards flanking.
   Tablet:  diagram + cards stacked. Mobile: codex reading order.        */

function DesktopComposition({
  activeId,
  onActivate,
  onDeactivate,
}: {
  activeId: PrincipleId | null;
  onActivate: (id: PrincipleId) => void;
  onDeactivate: () => void;
}) {
  const leftCards = PRINCIPLES.filter((p) => p.side === "left");
  const rightCards = PRINCIPLES.filter((p) => p.side === "right");

  return (
    <div className="relative grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-x-8">
      {/* Left cards column */}
      <div className="col-span-12 flex flex-col gap-6 lg:col-span-3 lg:pt-16">
        {leftCards.map((p) => (
          <ManuscriptCard
            key={p.id}
            principle={p}
            isActive={activeId === p.id}
            onActivate={onActivate}
            onDeactivate={onDeactivate}
          />
        ))}
      </div>

      {/* Central diagram column */}
      <div className="col-span-12 flex items-center justify-center lg:col-span-6 lg:py-4">
        <AincuruMethodDiagram activeId={activeId} />
      </div>

      {/* Right cards column */}
      <div className="col-span-12 flex flex-col gap-6 lg:col-span-3 lg:pt-4">
        {rightCards.map((p) => (
          <ManuscriptCard
            key={p.id}
            principle={p}
            isActive={activeId === p.id}
            onActivate={onActivate}
            onDeactivate={onDeactivate}
          />
        ))}
      </div>
    </div>
  );
}

function TabletComposition({
  activeId,
  onActivate,
  onDeactivate,
}: {
  activeId: PrincipleId | null;
  onActivate: (id: PrincipleId) => void;
  onDeactivate: () => void;
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center">
        <AincuruMethodDiagram activeId={activeId} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        {PRINCIPLES.map((p) => (
          <ManuscriptCard
            key={p.id}
            principle={p}
            isActive={activeId === p.id}
            onActivate={onActivate}
            onDeactivate={onDeactivate}
          />
        ))}
      </div>
    </div>
  );
}

function MobileComposition({
  activeId,
  onActivate,
  onDeactivate,
}: {
  activeId: PrincipleId | null;
  onActivate: (id: PrincipleId) => void;
  onDeactivate: () => void;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <div className="w-full max-w-[300px]">
          <AincuruMethodDiagram activeId={activeId} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {PRINCIPLES.map((p) => (
          <ManuscriptCard
            key={p.id}
            principle={p}
            isActive={activeId === p.id}
            onActivate={onActivate}
            onDeactivate={onDeactivate}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Top-level export ────────────────────────────────────────────────── */

export const WhyNeoPerion = () => {
  const reduce = useReducedMotion();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeId, setActiveId] = useState<PrincipleId | null>(null);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="parchment-surface relative overflow-hidden"
    >
      <ManuscriptFrame />
      <ManuscriptDecoration />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        {/* ─── Header ─── */}
        <motion.header
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="chapter-eyebrow flex items-center justify-center gap-2">
            <Sparkle className="h-3 w-3 text-manuscript-goldDeep" strokeWidth={2} aria-hidden />
            <span>Why AINCURU</span>
          </p>
          <hr className="ink-rule--gold mx-auto mt-4 w-32" />
          <h2 className="mt-6 font-manuscript text-[clamp(40px,5.2vw,72px)] font-semibold leading-[1.02] tracking-[-0.02em] text-manuscript-ink">
            The way we build{" "}
            <span className="italic text-manuscript-rustDeep">matters.</span>
          </h2>
          <p className="mt-5 font-manuscriptBody text-[16px] leading-relaxed text-manuscript-inkSoft sm:text-[17px]">
            Five decisions that shape every AINCURU engagement.
          </p>
        </motion.header>

        {/* ─── Composition ─── */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Mobile (<768) */}
          <div className="md:hidden">
            <MobileComposition
              activeId={activeId}
              onActivate={setActiveId}
              onDeactivate={() => setActiveId(null)}
            />
          </div>

          {/* Tablet (768–1199) */}
          <div className="hidden md:block lg:hidden">
            <TabletComposition
              activeId={activeId}
              onActivate={setActiveId}
              onDeactivate={() => setActiveId(null)}
            />
          </div>

          {/* Desktop (≥1200) */}
          <div className="hidden lg:block">
            <DesktopComposition
              activeId={activeId}
              onActivate={setActiveId}
              onDeactivate={() => setActiveId(null)}
            />
          </div>
        </div>

        {/* ─── Closing philosophy ─── */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="relative mx-auto mt-16 max-w-2xl text-center sm:mt-20 lg:mt-24"
        >
          <hr className="ink-rule mx-auto w-48" />
          <p className="mt-6 font-manuscript text-[clamp(22px,2.4vw,30px)] font-medium italic leading-snug text-manuscript-walnutDeep">
            Context before intelligence.
          </p>
          <p className="mt-5 font-manuscriptBody text-[14.5px] leading-relaxed text-manuscript-inkSoft sm:text-[15px]">
            We begin with understanding.
            <br />
            We build with clarity.
            <br />
            We stay to make it better.
          </p>

          {/* ─── CTA ─── */}
          <div className="mt-8 flex justify-center sm:mt-10">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2.5 border border-manuscript-rustDeep bg-manuscript-rustDeep px-6 py-3 font-manuscriptBody text-[14px] font-semibold tracking-[0.02em] text-manuscript-parchmentLight shadow-[0_10px_24px_-12px_rgba(166,67,42,0.55)] transition-all hover:-translate-y-0.5 hover:bg-manuscript-walnutDeep hover:border-manuscript-walnutDeep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-manuscript-goldDeep focus-visible:ring-offset-2 focus-visible:ring-offset-manuscript-parchment"
              aria-label={`${CTA_TEXT} — navigate to contact page`}
            >
              <Compass className="h-4 w-4 text-manuscript-goldDeep transition-transform group-hover:rotate-45" strokeWidth={1.8} aria-hidden />
              <span>{CTA_TEXT}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
            </button>
          </div>

          {/* ─── Closing ornament ─── */}
          <div className="ornament-dots mx-auto mt-10 max-w-xs">
            <span>✦ ✦ ✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
