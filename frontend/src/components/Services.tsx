import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

/* ──────────────────────────────────────────────────────────────────────
   SERVICES — THE AINCURU WORKSHOP
   Five disciplines. One engineering philosophy.

   Layout: left vertical folio list, right hand-drawn manuscript plate.
   Active discipline redraws its SVG illustration via stroke-dasharray.
   ────────────────────────────────────────────────────────────────────── */

interface Capability {
  title: string;
  kicker: string;
  shortDesc: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  /** Visual metaphor — one of the inline SVG plate components. */
  plate: PlateKey;
}

type PlateKey = "quill" | "blueprint" | "elevation" | "infrastructure" | "compass";

const CAPABILITIES: Capability[] = [
  {
    title: "AI Solutions",
    kicker: "Discipline I",
    shortDesc: "Safe, predictable AI models and agents deployed inside your existing workflows.",
    description:
      "RAG pipelines, AI agents, and LLM integration constrained by strict code and human-in-the-loop checks — so your outputs stay secure, auditable, and production-hardened.",
    features: ["RAG & agents", "LLM integration", "Evals & observability"],
    cta: "Explore AI solutions",
    href: "/services/ai-systems-automation",
    plate: "quill",
  },
  {
    title: "Product Development",
    kicker: "Discipline II",
    shortDesc: "From MVP to scalable SaaS — owned from first commit to launch.",
    description:
      "We design, build, and ship complete products — from first architecture to launch and scale. One accountable team across strategy, engineering, and deployment.",
    features: ["MVP → scale", "SaaS platforms", "Full ownership"],
    cta: "Build your product",
    href: "/services/enterprise-product-engineering",
    plate: "blueprint",
  },
  {
    title: "Web Development",
    kicker: "Discipline III",
    shortDesc: "Fast, accessible web apps and sites engineered to convert.",
    description:
      "High-performance React/Next.js apps, PWAs, and marketing sites — engineered for speed, accessibility, and conversion, and built to scale with your traffic.",
    features: ["React / Next.js", "PWAs", "Performance-first"],
    cta: "Build for the web",
    href: "/services/cloud-native-web-platforms",
    plate: "elevation",
  },
  {
    title: "Cloud & DevOps",
    kicker: "Discipline IV",
    shortDesc: "Scalable infrastructure and automation on AWS and GCP.",
    description:
      "Kubernetes, CI/CD, and full observability on AWS/GCP. We build cloud infrastructure that holds up under real production load — automated and monitored end to end.",
    features: ["AWS / GCP", "Kubernetes & CI/CD", "Monitoring"],
    cta: "Scale your infrastructure",
    href: "/services/intelligent-operations-automation",
    plate: "infrastructure",
  },
  {
    title: "Technical Consulting",
    kicker: "Discipline V",
    shortDesc: "Architecture reviews, due diligence, and fractional-CTO guidance.",
    description:
      "Senior direction when you need it — architecture audits, technical due diligence, and fractional-CTO guidance to de-risk decisions and accelerate your roadmap.",
    features: ["Architecture audits", "Due diligence", "Fractional CTO"],
    cta: "Get expert guidance",
    href: "/services/startup-to-scale-engineering",
    plate: "compass",
  },
];

/* ─── Manuscript plate: shared frame + per-plate art ─────────────────── */

const PLATE_FRAME = (
  <>
    {/* Outer plate border with corner ticks */}
    <rect x="20" y="20" width="560" height="420" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="14" y="14" width="572" height="432" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.5" />
    {/* Corner registration crosses */}
    {[
      [20, 20],
      [580, 20],
      [20, 440],
      [580, 440],
    ].map(([x, y]) => (
      <g key={`${x}-${y}`} stroke="currentColor" strokeWidth="1">
        <line x1={x - 8} y1={y} x2={x + 8} y2={y} />
        <line x1={x} y1={y - 8} x2={x} y2={y + 8} />
      </g>
    ))}
    {/* Title strip top */}
    <line x1="20" y1="62" x2="580" y2="62" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <text
      x="36"
      y="50"
      fontFamily="Caveat, cursive"
      fontSize="18"
      fill="currentColor"
      opacity="0.7"
    >
      Plate — AINCURU workshop
    </text>
    <text
      x="564"
      y="50"
      textAnchor="end"
      fontFamily="Inter, sans-serif"
      fontSize="9"
      letterSpacing="2"
      fill="currentColor"
      opacity="0.6"
    >
      FOLIO · V
    </text>
    {/* Bottom scale rule */}
    <line x1="36" y1="408" x2="564" y2="408" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    {Array.from({ length: 11 }).map((_, i) => (
      <line
        key={i}
        x1={36 + i * 52.8}
        y1="408"
        x2={36 + i * 52.8}
        y2={i % 5 === 0 ? 414 : 411}
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.4"
      />
    ))}
  </>
);

function Quill() {
  return (
    <g>
      {/* Quill — angled nib with feather body */}
      <path
        d="M 120 360 C 180 300 240 240 320 180 C 360 150 400 130 440 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Feather barbs */}
      <path
        d="M 150 340 L 165 320 M 175 320 L 190 300 M 200 300 L 215 280 M 225 280 L 240 260 M 250 260 L 265 240 M 275 240 L 290 220 M 300 220 L 315 200 M 325 200 L 340 180 M 350 180 L 365 160 M 375 160 L 390 145 M 400 145 L 415 132"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Nib detail */}
      <line x1="120" y1="360" x2="135" y2="375" stroke="currentColor" strokeWidth="1.2" />
      <line x1="120" y1="360" x2="125" y2="365" stroke="currentColor" strokeWidth="0.6" />
      {/* Ink dot trail */}
      <circle cx="120" cy="360" r="2.2" fill="currentColor" />
      <circle cx="108" cy="372" r="1.4" fill="currentColor" opacity="0.6" />
      <circle cx="96" cy="384" r="1" fill="currentColor" opacity="0.4" />

      {/* Network nodes — intelligence graph */}
      <g opacity="0.85">
        <line x1="380" y1="100" x2="450" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="450" y1="140" x2="510" y2="110" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="450" y1="140" x2="490" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="490" y1="200" x2="540" y2="240" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="380" y1="100" x2="490" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="380" y1="100" x2="490" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="380" y1="100" x2="330" y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="330" y1="160" x2="280" y2="120" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="280" y1="120" x2="220" y2="170" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="220" y1="170" x2="260" y2="230" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="260" y1="230" x2="180" y2="270" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <circle cx="380" cy="100" r="3" fill="currentColor" />
        <circle cx="450" cy="140" r="4" fill="currentColor" />
        <circle cx="510" cy="110" r="2.5" fill="currentColor" />
        <circle cx="490" cy="200" r="3.5" fill="currentColor" />
        <circle cx="540" cy="240" r="2" fill="currentColor" />
        <circle cx="330" cy="160" r="2.5" fill="currentColor" />
        <circle cx="280" cy="120" r="3" fill="currentColor" />
        <circle cx="220" cy="170" r="2" fill="currentColor" />
        <circle cx="260" cy="230" r="2.5" fill="currentColor" />
        <circle cx="180" cy="270" r="2" fill="currentColor" />
      </g>

      {/* Caveat annotation */}
      <text
        x="380"
        y="80"
        fontFamily="Caveat, cursive"
        fontSize="22"
        fill="currentColor"
        opacity="0.85"
      >
        a learned quill
      </text>
    </g>
  );
}

function Blueprint() {
  return (
    <g>
      {/* Outer drawing frame */}
      <rect x="100" y="100" width="400" height="260" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4" strokeDasharray="4 4" />

      {/* Gear — large */}
      <g transform="translate(220 230)">
        <circle r="70" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle r="46" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle r="14" fill="none" stroke="currentColor" strokeWidth="1" />
        {/* Teeth */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x1 = Math.cos(a) * 70;
          const y1 = Math.sin(a) * 70;
          const x2 = Math.cos(a) * 86;
          const y2 = Math.sin(a) * 86;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />;
        })}
        {/* Spokes */}
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 6;
          return <line key={i} x1={0} y1={0} x2={Math.cos(a) * 46} y2={Math.sin(a) * 46} stroke="currentColor" strokeWidth="0.6" opacity="0.6" />;
        })}
      </g>

      {/* Gear — small meshed */}
      <g transform="translate(380 160)">
        <circle r="36" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle r="10" fill="none" stroke="currentColor" strokeWidth="0.8" />
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 10;
          const x1 = Math.cos(a) * 36;
          const y1 = Math.sin(a) * 36;
          const x2 = Math.cos(a) * 46;
          const y2 = Math.sin(a) * 46;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />;
        })}
      </g>

      {/* Dimension line */}
      <line x1="100" y1="380" x2="500" y2="380" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="100" y1="374" x2="100" y2="386" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="500" y1="374" x2="500" y2="386" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <text x="300" y="394" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fill="currentColor" opacity="0.6">
        FROM IDEA · TO LAUNCH
      </text>

      {/* Annotation */}
      <text
        x="120"
        y="130"
        fontFamily="Caveat, cursive"
        fontSize="22"
        fill="currentColor"
        opacity="0.85"
      >
        one bench, the whole journey
      </text>
      <line x1="120" y1="138" x2="305" y2="138" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    </g>
  );
}

function Elevation() {
  return (
    <g>
      {/* Architectural elevation — building facade */}
      {/* Ground line */}
      <line x1="80" y1="370" x2="540" y2="370" stroke="currentColor" strokeWidth="1.4" />
      {/* Ground hatch */}
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1={80 + i * 19.2}
          y1="370"
          x2={80 + i * 19.2 + 10}
          y2="380"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.5"
        />
      ))}

      {/* Main building block */}
      <rect x="160" y="180" width="220" height="190" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {/* Wing */}
      <rect x="380" y="240" width="120" height="130" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {/* Lower annex */}
      <rect x="120" y="290" width="40" height="80" fill="none" stroke="currentColor" strokeWidth="1" />

      {/* Roof line on main */}
      <line x1="160" y1="180" x2="270" y2="150" stroke="currentColor" strokeWidth="1.2" />
      <line x1="270" y1="150" x2="380" y2="180" stroke="currentColor" strokeWidth="1.2" />

      {/* Windows — grid */}
      {Array.from({ length: 4 }).map((_, col) =>
        Array.from({ length: 5 }).map((_, row) => (
          <rect
            key={`w-${col}-${row}`}
            x={170 + col * 52}
            y={200 + row * 32}
            width="32"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.7"
          />
        )),
      )}
      {/* Wing windows */}
      {Array.from({ length: 3 }).map((_, col) =>
        Array.from({ length: 3 }).map((_, row) => (
          <rect
            key={`ww-${col}-${row}`}
            x={390 + col * 36}
            y={255 + row * 36}
            width="26"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.7"
          />
        )),
      )}

      {/* Door */}
      <rect x="240" y="320" width="40" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="275" cy="345" r="1" fill="currentColor" />

      {/* Scale figure for human reference */}
      <g transform="translate(110 320)" opacity="0.7">
        <circle cx="0" cy="0" r="3" fill="currentColor" />
        <line x1="0" y1="3" x2="0" y2="30" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="12" x2="-6" y2="20" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="12" x2="6" y2="20" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="30" x2="-5" y2="42" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="30" x2="5" y2="42" stroke="currentColor" strokeWidth="1" />
      </g>

      {/* Dimension marks */}
      <line x1="160" y1="395" x2="380" y2="395" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="160" y1="391" x2="160" y2="399" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="380" y1="391" x2="380" y2="399" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <text x="270" y="408" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fill="currentColor" opacity="0.6">
        SCALE · 1:200
      </text>

      <text
        x="120"
        y="130"
        fontFamily="Caveat, cursive"
        fontSize="22"
        fill="currentColor"
        opacity="0.85"
      >
        elevation — built to stand
      </text>
    </g>
  );
}

function Infrastructure() {
  return (
    <g>
      {/* Three server racks */}
      {[160, 270, 380].map((x, idx) => (
        <g key={idx}>
          <rect x={x} y="150" width="80" height="200" fill="none" stroke="currentColor" strokeWidth="1.2" />
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i}>
              <rect x={x + 6} y={160 + i * 22} width="68" height="16" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.75" />
              <circle cx={x + 14} cy={168 + i * 22} r="1.5" fill="currentColor" opacity={i % 3 === 0 ? "1" : "0.4"} />
              <circle cx={x + 22} cy={168 + i * 22} r="1.5" fill="currentColor" opacity={i % 3 === 1 ? "1" : "0.4"} />
              <line x1={x + 30} y1={168 + i * 22} x2={x + 64} y2={168 + i * 22} stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
            </g>
          ))}
          {/* Rack base shadow */}
          <line x1={x - 4} y1="352" x2={x + 84} y2="352" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        </g>
      ))}

      {/* Connection lines between racks — mesh */}
      <g opacity="0.6">
        <path d="M 240 200 C 255 180 255 180 270 200" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <path d="M 240 240 C 255 220 255 220 270 240" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <path d="M 240 280 C 255 260 255 260 270 280" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <path d="M 350 200 C 365 180 365 180 380 200" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <path d="M 350 240 C 365 220 365 220 380 240" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <path d="M 350 280 C 365 260 365 260 380 280" fill="none" stroke="currentColor" strokeWidth="0.6" />
      </g>

      {/* Up-link arrows to a cloud */}
      <path d="M 220 150 C 220 110 240 90 310 90 C 380 90 400 110 400 150" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" strokeDasharray="3 3" />
      <text
        x="310"
        y="78"
        textAnchor="middle"
        fontFamily="Caveat, cursive"
        fontSize="20"
        fill="currentColor"
        opacity="0.85"
      >
        AWS · GCP · K8s
      </text>

      {/* Ground line */}
      <line x1="100" y1="370" x2="520" y2="370" stroke="currentColor" strokeWidth="1" />
      <text x="310" y="395" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fill="currentColor" opacity="0.6">
        CI · CD · OBSERVABILITY
      </text>
    </g>
  );
}

function Compass() {
  return (
    <g>
      {/* Map grid behind */}
      <g opacity="0.35">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v-${i}`} x1={100 + i * 40} y1="100" x2={100 + i * 40} y2="380" stroke="currentColor" strokeWidth="0.3" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h-${i}`} x1="100" y1={100 + i * 40} x2="500" y2={100 + i * 40} stroke="currentColor" strokeWidth="0.3" />
        ))}
      </g>

      {/* Compass rose */}
      <g transform="translate(300 240)">
        {/* Outer ring */}
        <circle r="100" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle r="80" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
        <circle r="60" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />

        {/* Cardinal points — N S E W */}
        {[0, 90, 180, 270].map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <polygon
              points="0,-95 -8,0 0,-10 8,0"
              fill="currentColor"
              opacity="0.85"
            />
          </g>
        ))}
        {/* Diagonals */}
        {[45, 135, 225, 315].map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <line x1="0" y1="-92" x2="0" y2="0" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
            <line x1="0" y1="0" x2="0" y2="92" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
          </g>
        ))}
        {/* Tick marks around */}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * 10 * Math.PI) / 180;
          const r1 = 100;
          const r2 = i % 9 === 0 ? 88 : 94;
          return (
            <line
              key={`t-${i}`}
              x1={Math.sin(a) * r1}
              y1={-Math.cos(a) * r1}
              x2={Math.sin(a) * r2}
              y2={-Math.cos(a) * r2}
              stroke="currentColor"
              strokeWidth={i % 9 === 0 ? "1.2" : "0.4"}
            />
          );
        })}
        {/* Center pivot */}
        <circle r="4" fill="currentColor" />
        <circle r="10" fill="none" stroke="currentColor" strokeWidth="0.6" />

        {/* Cardinal labels */}
        <text x="0" y="-105" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="3" fontWeight="600" fill="currentColor">N</text>
        <text x="105" y="4" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="3" fontWeight="600" fill="currentColor">E</text>
        <text x="0" y="115" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="3" fontWeight="600" fill="currentColor">S</text>
        <text x="-105" y="4" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="3" fontWeight="600" fill="currentColor">W</text>
      </g>

      <text
        x="100"
        y="130"
        fontFamily="Caveat, cursive"
        fontSize="22"
        fill="currentColor"
        opacity="0.85"
      >
        find the bearing — then build
      </text>
    </g>
  );
}

const PLATES: Record<PlateKey, () => JSX.Element> = {
  quill: Quill,
  blueprint: Blueprint,
  elevation: Elevation,
  infrastructure: Infrastructure,
  compass: Compass,
};

/* ─── Plate component — animates stroke-dashoffset on art change ────── */

function Plate({ plate, label, folio, reduce }: { plate: PlateKey; label: string; folio: string; reduce: boolean | null }) {
  const PlateArt = PLATES[plate];
  const containerRef = useRef<SVGSVGElement | null>(null);

  // Trigger redraw animation when plate changes
  const [drawKey, setDrawKey] = useState(0);
  useEffect(() => {
    setDrawKey((k) => k + 1);
  }, [plate]);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-manuscriptAlpha-ink-20 bg-manuscript-parchmentLight shadow-[0_24px_60px_rgba(31,26,20,0.10)]">
      {/* Paper grain overlay — very subtle */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:repeating-linear-gradient(45deg,theme(colors.manuscript.ink)_0px,theme(colors.manuscript.ink)_1px,transparent_1px,transparent_4px)]" />

      <svg
        ref={containerRef}
        key={drawKey}
        viewBox="0 0 600 460"
        className="relative h-full w-full text-manuscript-ink"
        role="img"
        aria-label={`${label} — workshop plate ${folio}`}
      >
        {PLATE_FRAME}
        <motion.g
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 1.1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Children of PlateArt — wrapped so we can stagger their draw */}
          <PlateArt />
        </motion.g>
      </svg>

      {/* Folio label, lower-right */}
      <div className="pointer-events-none absolute bottom-3 right-4 flex items-baseline gap-2 text-manuscript-inkMuted">
        <span className="font-mono text-[10px] tracking-[0.2em]">{folio}</span>
        <span className="font-manuscript text-[14px] italic">{label}</span>
      </div>
      {/* Caveat annotation, lower-left */}
      <div className="pointer-events-none absolute bottom-2 left-4 font-manuscriptHand text-[14px] italic text-manuscript-rustDeep">
        — AINCURU
      </div>
    </div>
  );
}

/* ─── Workshop component ─────────────────────────────────────────────── */

export const Services = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const reduce = useReducedMotion();
  const active = CAPABILITIES[activeIdx];

  return (
    <Section id="services" bg="paper" rhythm="primary" divider className="parchment-surface">
      <SectionHeading
        eyebrow="What we do"
        title="Our Services"
        lead="We design, build, and ship production-grade software — from AI solutions to full product development. Senior engineers only, no offshoring."
        className="mb-14 max-w-2xl"
      />

      {/* Opening essay */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="font-manuscript text-[clamp(20px,2vw,24px)] italic leading-relaxed text-manuscript-walnutDeep">
          The AINCURU Workshop — five disciplines, one engineering philosophy.
        </p>
      </div>

      {/* Workshop layout: left folio list + right manuscript plate */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left — vertical folio list */}
        <ul
          role="tablist"
          aria-label="Service disciplines"
          className="lg:col-span-5"
        >
          {CAPABILITIES.map((cap, i) => {
            const isActive = i === activeIdx;
            return (
              <li
                key={cap.title}
                role="presentation"
                className="border-b border-manuscriptAlpha-ink-15 first:border-t-0"
              >
                <button
                  type="button"
                  role="tab"
                  id={`workshop-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls={`workshop-panel-${i}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIdx(i)}
                  onMouseEnter={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                  className={`group/folio flex w-full items-start gap-4 py-5 text-left transition-colors duration-300 ${
                    isActive ? "text-manuscript-ink" : "text-manuscript-inkMuted hover:text-manuscript-ink"
                  }`}
                >
                  {/* Folio numeral */}
                  <span
                    aria-hidden
                    className={`mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-semibold tracking-[0.05em] transition-all duration-300 ${
                      isActive
                        ? "bg-manuscript-rustDeep text-manuscript-parchmentLight ring-1 ring-manuscript-walnutDeep"
                        : "border border-manuscriptAlpha-ink-20 text-manuscript-inkMuted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Title + kicker */}
                  <span className="flex flex-1 flex-col">
                    <span className="chapter-eyebrow !text-manuscript-goldDeep transition-opacity duration-300 group-hover/folio:opacity-100">
                      {cap.kicker}
                    </span>
                    <span className={`mt-1 font-manuscript text-[clamp(22px,2.2vw,28px)] font-semibold leading-tight tracking-tight transition-all duration-300 ${isActive ? "text-manuscript-ink" : "text-manuscript-inkMuted"}`}>
                      {cap.title}
                    </span>
                    <span className={`mt-1.5 font-manuscriptBody text-[14px] leading-relaxed transition-all duration-300 ${isActive ? "max-h-12 text-manuscript-inkSoft opacity-100" : "max-h-0 overflow-hidden text-manuscript-inkSoft opacity-0 md:max-h-12 md:opacity-60"}`}>
                      {cap.shortDesc}
                    </span>
                  </span>

                  {/* Active indicator — gold ink mark */}
                  <span
                    aria-hidden
                    className={`mt-2 h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                      isActive ? "bg-manuscript-gold ring-4 ring-manuscript-gold/15" : "bg-manuscriptAlpha-ink-15"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right — manuscript plate + description panel */}
        <div
          className="lg:col-span-7"
          role="tabpanel"
          id={`workshop-panel-${activeIdx}`}
          aria-labelledby={`workshop-tab-${activeIdx}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: reduce ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -8 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <Plate
                plate={active.plate}
                label={active.title}
                folio={String(activeIdx + 1).padStart(2, "0")}
                reduce={reduce}
              />

              {/* Description + features + CTA */}
              <div className="mt-7 max-w-2xl">
                <p className="font-manuscriptBody text-[15px] leading-relaxed text-manuscript-inkSoft">
                  {active.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {active.features.map((f) => (
                    <li
                      key={f}
                      className="font-manuscriptBody text-[13px] font-medium tracking-wide text-manuscript-walnutDeep"
                    >
                      <span className="mr-2 text-manuscript-gold">·</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => navigate(active.href)}
                  className="group/cta mt-7 inline-flex items-center gap-2 font-manuscriptBody text-[13px] font-semibold uppercase tracking-[0.12em] text-manuscript-rustDeep transition-colors hover:text-manuscript-ink"
                >
                  {active.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Closing ink-rule */}
      <div className="ornament-dots mx-auto mt-20 max-w-md">
        <span>✦ ✦ ✦</span>
      </div>
    </Section>
  );
};