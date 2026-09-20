import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Search, 
  Mail, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Compass, 
  Zap, 
  TrendingUp, 
  Cpu, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause 
} from "lucide-react";
import { fritadoConfig } from "@/data/fritadoConfig";
import { trackEvent } from "@/shared/analytics";

type TabKey = "lead-flow" | "ai-research" | "outreach" | "nurture" | "pipeline";

interface PillarDefinition {
  id: TabKey;
  num: string;
  label: string;
  oneLiner: string;
  iconSrc: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  arcAngle: number; // For desktop arc coordinate positioning
}

const PILLARS: PillarDefinition[] = [
  {
    id: "lead-flow",
    num: "01",
    label: "Lead Flow",
    oneLiner: "Targeting accounts that match your exact ICP.",
    iconSrc: "/images/searching.png",
    description: "Filter verified directories by employee count, production tech stack, and location. Automatically checks your CRM to skip existing clients.",
    metrics: [
      { label: "Accounts Identified", value: "12,480" },
      { label: "ICP Match Rate", value: "98.4%" },
    ],
    tags: ["Team Size Filters", "Tech Stack Verification", "Funding Triggers", "CRM Exclusion Rules"],
    arcAngle: -56,
  },
  {
    id: "ai-research",
    num: "02",
    label: "AI Research",
    oneLiner: "Deep background briefs compiled in 30 seconds.",
    iconSrc: "/images/artificial-intelligence.png",
    description: "Synthesizes company milestones, recent engineering hires, leadership announcements, and operational challenges so your reps understand the account.",
    metrics: [
      { label: "Signals Analyzed", value: "18,920" },
      { label: "Data Freshness", value: "Real-time" },
    ],
    tags: ["Org Chart Mapping", "Hiring Spikes", "Press Releases", "Trigger Events"],
    arcAngle: -28,
  },
  {
    id: "outreach",
    num: "03",
    label: "Outreach",
    oneLiner: "Contextual messages with 100% human rep sign-off.",
    iconSrc: "/images/customer-service.png",
    description: "Prepares customized message openers tied directly to recent company news. Staged in your review queue with SPF/DKIM domain safeguards.",
    metrics: [
      { label: "Drafts Staged", value: "62 today" },
      { label: "Rep Review Gate", value: "100% human approved" },
    ],
    tags: ["Contextual Openers", "One-Click Rep Signoff", "Sender Reputation Guard", "Email + LinkedIn"],
    arcAngle: 0,
  },
  {
    id: "nurture",
    num: "04",
    label: "Nurture",
    oneLiner: "Intelligent follow-ups that halt in 2s on reply.",
    iconSrc: "/images/group-users.png",
    description: "Coordinates natural follow-ups across email and LinkedIn, automatically pausing the second a prospect replies, objects, or books a demo.",
    metrics: [
      { label: "Active Follow-ups", value: "39" },
      { label: "Pause Latency", value: "< 2s on reply" },
    ],
    tags: ["Natural Pacing", "Instant Reply Listener", "Interest Detection", "Zero Spam Risk"],
    arcAngle: 28,
  },
  {
    id: "pipeline",
    num: "05",
    label: "Pipeline",
    oneLiner: "Clean CRM handoffs to Salesforce & HubSpot.",
    iconSrc: "/images/pipeline.png",
    description: "Hands off interested leads, full conversation histories, and booked meetings straight into HubSpot, Salesforce, or your custom pipeline.",
    metrics: [
      { label: "Review-Ready Today", value: "35 accounts" },
      { label: "CRM Sync", value: "Two-Way Live" },
    ],
    tags: ["HubSpot & Salesforce", "Calendar Bookings", "Full Message History", "Lead Ownership"],
    arcAngle: 56,
  },
];

export const FritadoExperienceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("lead-flow");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mobileProgress, setMobileProgress] = useState<number>(0);
  const touchStartXRef = React.useRef<number | null>(null);
  const touchStartYRef = React.useRef<number | null>(null);

  const goToNextPillar = () => {
    setMobileProgress(0);
    setActiveTab((current) => {
      const currentIdx = PILLARS.findIndex((p) => p.id === current);
      const nextIdx = (currentIdx + 1) % PILLARS.length;
      return PILLARS[nextIdx].id;
    });
  };

  const goToPrevPillar = () => {
    setMobileProgress(0);
    setActiveTab((current) => {
      const currentIdx = PILLARS.findIndex((p) => p.id === current);
      const prevIdx = (currentIdx - 1 + PILLARS.length) % PILLARS.length;
      return PILLARS[prevIdx].id;
    });
  };

  // Auto-advance cycle every 5 seconds (pausing on hover or manual pause)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setMobileProgress((prev) => {
        if (prev >= 100) {
          goToNextPillar();
          return 0;
        }
        return prev + (50 / 5000) * 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered, activeTab]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    const diffY = touchStartYRef.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        goToNextPillar();
      } else {
        goToPrevPillar();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const currentPillar = PILLARS.find((t) => t.id === activeTab) || PILLARS[0];

  const handleTabChange = (id: TabKey) => {
    setActiveTab(id);
    trackEvent("fritado_experience_tab_change", {
      product: "fritado",
      tab: id,
    });
  };

  const handleAction = () => {
    trackEvent("fritado_experience_cta_click", {
      product: "fritado",
      tab: activeTab,
      destination: fritadoConfig.primaryUrl,
    });
    window.open(fritadoConfig.primaryUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      id="experience" 
      className="relative scroll-mt-24 py-14 sm:py-20 lg:py-24 border-b border-manuscript-parchmentDeep bg-manuscript-parchment text-manuscript-ink font-sans overflow-hidden"
    >
      {/* Ambient background grid lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(31,26,20,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,26,20,0.03)_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header with Viewport Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-manuscript-copper">
                PRODUCT EXPERIENCE
              </span>

            </div>
            <h2 className="font-manuscript text-3xl sm:text-4xl lg:text-5xl font-bold text-manuscript-ink tracking-tight leading-tight">
              Built for how high-performing sales reps actually work.
            </h2>
            <p className="mt-3 font-manuscriptBody text-sm sm:text-base text-manuscript-inkMuted leading-relaxed">
              Explore the five essential pillars that power Fritado—from initial ICP discovery to closing qualified CRM meetings.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-manuscriptAlpha-ink-15 text-xs text-manuscript-ink shadow-2xs">
              <Cpu size={14} className="text-manuscript-copper" />
              <span className="font-sans font-semibold">Interactive 5-Pillar Architecture</span>
            </div>
          </div>
        </motion.div>

        {/* ─── DESKTOP WORKSPACE: 5 PILLARS CIRCULAR ARC STEPPER (lg and above: 100% preserved) ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          {/* LEFT: THE 5 PILLARS CIRCULAR ARC STEPPER (Exact Match to Reference Diagram) */}
          <div className="lg:col-span-7 relative flex flex-col justify-center">
            {/* Desktop Arc Layout */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-manuscriptAlpha-ink-15 shadow-[0_8px_32px_rgba(80,55,30,0.05)] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Center Core Circle (Left on desktop) */}
                <div className="md:col-span-5 relative flex flex-col justify-center text-center md:text-left py-4">
                  {/* Decorative Semicircular Track Backdrop */}
                  <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-48 h-72 border-r-4 border-dashed border-manuscript-copper/30 rounded-r-full pointer-events-none" />

                  <div className="relative z-10 space-y-2.5">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-manuscript-copper bg-manuscript-copper/10 px-2.5 py-1 rounded-full inline-block">
                      CORE ARCHITECTURE
                    </span>

                    <h3 className="font-manuscript text-2xl sm:text-3xl lg:text-4xl font-bold text-manuscript-ink tracking-tight leading-[1.15]">
                      The 5 Pillars of a <br />
                      <span className="text-manuscript-copper">Strong Pipeline</span>
                    </h3>

                    <div className="w-12 h-1 bg-manuscript-copper rounded-full mx-auto md:mx-0 my-2" />

                    <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkMuted leading-relaxed">
                      What turns cold accounts into qualified enterprise meetings?
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-manuscript-copper font-semibold">
                        ● Click any pillar to test
                      </span>
                    </div>
                  </div>
                </div>

                {/* The 5 Radial Pillar Nodes & Connector Rows (Right on desktop) */}
                <div className="md:col-span-7 space-y-3.5 relative z-10">
                  {PILLARS.map((pillar) => {
                    const isSelected = activeTab === pillar.id;

                    return (
                      <div
                        key={pillar.id}
                        onClick={() => handleTabChange(pillar.id)}
                        className={`group relative flex items-center gap-3.5 p-2.5 sm:p-3 rounded-2xl transition-all duration-200 cursor-pointer border ${
                          isSelected
                            ? "bg-white border-manuscript-copper shadow-md -translate-x-1"
                            : "bg-manuscript-parchmentLight/50 hover:bg-white border-transparent hover:border-manuscriptAlpha-ink-15"
                        }`}
                      >
                        {/* 3D Elevated Number Disc (Matching Reference Image) */}
                        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full shrink-0 flex items-center justify-center font-mono text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${
                          isSelected
                            ? "bg-manuscript-copper text-white ring-4 ring-manuscript-copper/20 scale-105 shadow-md"
                            : "bg-white text-manuscript-ink border border-manuscriptAlpha-ink-15 group-hover:border-manuscript-copper group-hover:text-manuscript-copper"
                        }`}>
                          {pillar.num}
                        </div>

                        {/* Connector Arrow ──→ */}
                        <div className="hidden sm:flex items-center text-manuscript-copper/60 shrink-0">
                          <span className="w-3 h-px bg-manuscript-copper/40" />
                          <ArrowRight size={12} className="text-manuscript-copper -ml-0.5" />
                        </div>

                        {/* Icon in Circle */}
                        <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center p-1.5 transition-colors ${
                          isSelected
                            ? "bg-manuscript-copper/15"
                            : "bg-white border border-manuscriptAlpha-ink-10"
                        }`}>
                          <img src={pillar.iconSrc} alt={pillar.label} className="w-full h-full object-contain" />
                        </div>

                        {/* Text Block: Title & Short Explanation */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <span className={`font-sans text-sm font-bold truncate transition-colors ${
                              isSelected ? "text-manuscript-copper" : "text-manuscript-ink group-hover:text-manuscript-copper"
                            }`}>
                              {pillar.label}
                            </span>
                            {isSelected && (
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-manuscript-copper px-1.5 py-0.5 rounded bg-manuscript-copper/10 shrink-0">
                                ACTIVE
                              </span>
                            )}
                          </div>
                          <p className="font-manuscriptBody text-xs text-manuscript-inkMuted truncate mt-0.5">
                            {pillar.oneLiner}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: LIVE INTERACTIVE WORKSPACE PREVIEW CARD (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl border border-manuscriptAlpha-ink-15 bg-white shadow-[0_12px_40px_rgba(80,55,30,0.06)] overflow-hidden flex flex-col font-sans">
            {/* Top Preview Toolbar */}
            <div className="px-5 py-3.5 border-b border-manuscriptAlpha-ink-10 bg-manuscript-parchmentLight/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-manuscript-copper animate-pulse" />
                <span className="font-sans text-xs font-bold text-manuscript-ink uppercase tracking-wider">
                  PILLAR {currentPillar.num} · {currentPillar.label.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-manuscript-copper font-bold bg-white px-2 py-0.5 rounded border border-manuscriptAlpha-ink-10">
                LIVE ENGINE
              </div>
            </div>

            {/* Inner Interactive Canvas based on activeTab */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-manuscript-parchmentLight/20">
              {/* Detailed Description */}
              <div>
                <h4 className="font-manuscript text-lg font-bold text-manuscript-ink">
                  {currentPillar.label}: {currentPillar.oneLiner}
                </h4>
                <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkMuted leading-relaxed mt-1">
                  {currentPillar.description}
                </p>
              </div>

              {/* Dynamic Live Canvas per Pillar */}
              <div className="py-1">
                {activeTab === "lead-flow" && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white border border-manuscriptAlpha-ink-10 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-1.5 text-manuscript-inkMuted">
                        <span className="font-bold text-manuscript-ink">FILTER:</span>
                        <span className="px-2 py-0.5 rounded bg-manuscript-parchmentLight text-manuscript-ink text-[11px]">B2B SaaS</span>
                        <span className="px-2 py-0.5 rounded bg-manuscript-parchmentLight text-manuscript-ink text-[11px]">250-1000 HC</span>
                      </div>
                      <span className="font-mono text-manuscript-copper font-bold text-[11px]">1,884 Matches</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: "Northstar Systems", loc: "Bengaluru, IN", tech: "Kubernetes, Kafka", score: "98%" },
                        { name: "DataForge Analytics", loc: "San Francisco, US", tech: "AWS, BigQuery", score: "94%" },
                      ].map((acc, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-white border border-manuscriptAlpha-ink-10 flex items-center justify-between text-xs shadow-2xs">
                          <div>
                            <div className="font-bold text-manuscript-ink">{acc.name}</div>
                            <div className="text-[10px] text-manuscript-inkMuted">{acc.loc} · {acc.tech}</div>
                          </div>
                          <span className="font-mono font-bold text-manuscript-copper text-xs">{acc.score} ICP Fit</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "ai-research" && (
                  <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-10 space-y-2.5 shadow-2xs">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-sans uppercase text-manuscript-copper font-bold">SYNTHESIZED DOSSIER</span>
                        <div className="font-bold text-sm text-manuscript-ink">Northstar Systems · Expansion Stage</div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-manuscript-copper bg-manuscript-copper/10 px-2 py-0.5 rounded border border-manuscript-copper/25">
                        Confidence 96.2%
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10">
                        <div className="text-[9px] text-manuscript-inkMuted uppercase font-semibold">Primary Buyer</div>
                        <div className="font-bold text-manuscript-ink mt-0.5">Priya M.</div>
                        <div className="text-[9px] text-manuscript-inkMuted">VP Engineering</div>
                      </div>
                      <div className="p-2 rounded-lg bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10">
                        <div className="text-[9px] text-manuscript-inkMuted uppercase font-semibold">Expansion Trigger</div>
                        <div className="font-bold text-manuscript-copper mt-0.5">+42 Tech Hires</div>
                        <div className="text-[9px] text-manuscript-inkMuted">Kafka Telemetry</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "outreach" && (
                  <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-10 space-y-2 shadow-2xs text-xs">
                    <div className="flex items-center justify-between border-b border-manuscriptAlpha-ink-10 pb-1.5 text-manuscript-inkMuted text-[11px]">
                      <span>TO: <strong className="text-manuscript-ink">Priya M.</strong> (VP Engineering)</span>
                      <span className="text-[9px] font-bold text-manuscript-copper uppercase">STAGED FOR REVIEW</span>
                    </div>
                    <p className="text-manuscript-ink leading-relaxed font-serif italic text-xs">
                      "Hi Priya — noticed Northstar is scaling platform telemetry across 42 new roles. When scaling this quickly, data validation drag usually slows SDR outbound..."
                    </p>
                    <div className="pt-1.5 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[10px] text-manuscript-inkMuted">
                      <span className="text-manuscript-copper font-medium flex items-center gap-1">
                        <ShieldCheck size={12} /> Human Rep Sign-Off Required
                      </span>
                      <span>Zero Hallucinations</span>
                    </div>
                  </div>
                )}

                {activeTab === "nurture" && (
                  <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-10 space-y-2 text-xs shadow-2xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-manuscript-ink">CADENCE STATUS:</span>
                      <span className="text-[10px] font-bold text-manuscript-copper px-2 py-0.5 rounded bg-manuscript-copper/10">
                        REPLY LISTENER ACTIVE
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-manuscript-copper/10 border border-manuscript-copper/30">
                      <div className="font-bold text-manuscript-ink text-xs">Reply: "Let's talk Thursday at 2"</div>
                      <div className="text-[10px] text-manuscript-copper font-semibold mt-0.5">Sequence auto-halted in 1.4s</div>
                    </div>
                    <div className="text-[10px] text-manuscript-inkMuted flex items-center justify-between">
                      <span>Touchpoint 02 cancelled</span>
                      <span>Zero Spam Collisions</span>
                    </div>
                  </div>
                )}

                {activeTab === "pipeline" && (
                  <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-10 space-y-2 text-xs shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] font-bold text-manuscript-ink">
                      <span>Northstar Systems</span>
                      <span className="text-manuscript-copper">$120k ARR Opportunity</span>
                    </div>
                    <div className="text-[10px] text-manuscript-inkMuted">
                      Owner: Sarah K. (AE) · Stage: Demo Scheduled
                    </div>
                    <div className="pt-1.5 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[10px] text-manuscript-copper font-semibold">
                      <span>Salesforce &amp; HubSpot Synced ✓</span>
                      <span>Calendar Meeting Booked</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-manuscriptAlpha-ink-10">
                {currentPillar.metrics.map((m, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white border border-manuscriptAlpha-ink-10">
                    <div className="text-[9px] font-sans text-manuscript-inkMuted uppercase font-semibold">
                      {m.label}
                    </div>
                    <div className="text-sm font-bold font-sans text-manuscript-ink mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleAction}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-manuscript-copper text-white hover:bg-manuscript-copperDeep transition-colors font-sans text-xs font-semibold shadow-sm group"
                >
                  <span>TEST {currentPillar.label.toUpperCase()} FREE</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── MOBILE WORKSPACE: UNIFIED PILLAR SHOWCASE DECK (below lg) ─── */}
        <div 
          className="block lg:hidden space-y-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Progress & Play/Pause Control Bar */}
          <div className="flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-manuscript-copper animate-pulse" />
              <span className="font-sans font-bold text-manuscript-copper text-[11px] uppercase tracking-wider">
                PILLAR {currentPillar.num} / 05
              </span>
              <button
                type="button"
                onClick={() => setIsHovered(!isHovered)}
                className="px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold border flex items-center gap-1 bg-white border-manuscriptAlpha-ink-15 text-manuscript-ink hover:text-manuscript-copper transition-colors"
                title={isHovered ? "Resume auto-rotation" : "Pause auto-rotation"}
              >
                {isHovered ? (
                  <>
                    <Play size={10} className="text-manuscript-copper" />
                    <span>Paused</span>
                  </>
                ) : (
                  <>
                    <Pause size={10} className="text-manuscript-copper" />
                    <span>Auto</span>
                  </>
                )}
              </button>
            </div>

            {/* 5-Segment Stories Progress Bar */}
            <div className="flex items-center gap-1 w-32">
              {PILLARS.map((p, idx) => {
                const isCur = activeTab === p.id;
                const curIdx = PILLARS.findIndex(pi => pi.id === activeTab);
                return (
                  <div 
                    key={p.id} 
                    className="flex-1 h-1 rounded-full bg-manuscriptAlpha-ink-15 overflow-hidden"
                  >
                    <div 
                      className="h-full bg-manuscript-copper transition-all duration-75"
                      style={{
                        width: isCur 
                          ? `${mobileProgress}%` 
                          : curIdx > idx 
                            ? "100%" 
                            : "0%"
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Horizontal Touch Stepper Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {PILLARS.map((pillar) => {
              const isSelected = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => {
                    handleTabChange(pillar.id);
                    setMobileProgress(0);
                    setIsHovered(true); // pause auto-run when tapped
                  }}
                  className={`shrink-0 py-2 px-3 rounded-xl border text-xs font-sans transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-manuscript-copper text-white border-manuscript-copper shadow-xs font-bold"
                      : "bg-white text-manuscript-ink border-manuscriptAlpha-ink-15 hover:border-manuscript-copper"
                  }`}
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-manuscript-parchment text-manuscript-copper"
                  }`}>
                    {pillar.num}
                  </span>
                  <span>{pillar.label}</span>
                </button>
              );
            })}
          </div>

          {/* Unified Pillar Showcase Card with Swipe Gestures */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="p-4 sm:p-5 rounded-3xl bg-white border border-manuscriptAlpha-ink-15 shadow-md space-y-4 select-none"
          >
            {/* Visual 3D Artwork Header */}
            <div className="relative w-full h-[180px] rounded-2xl overflow-hidden bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 shadow-inner">
              <img 
                src={activeTab === "lead-flow" || activeTab === "outreach" ? "/images/fritado-flow-discover.jpg" : "/images/fritado-flow-engine.jpg"} 
                alt={currentPillar.label}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />
              
              <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono font-bold text-manuscript-copper shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper animate-pulse" />
                <span>PILLAR {currentPillar.num} · {currentPillar.label.toUpperCase()}</span>
              </div>

              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm text-[10px] font-mono text-white">
                LIVE ENGINE
              </div>

              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <p className="font-sans font-bold text-xs leading-snug drop-shadow-sm">
                  {currentPillar.oneLiner}
                </p>
              </div>
            </div>

            {/* Pillar Overview */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 flex items-center justify-center shadow-2xs shrink-0 p-1.5">
                  <img src={currentPillar.iconSrc} alt={currentPillar.label} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-manuscript text-xl font-bold text-manuscript-ink leading-snug">
                  {currentPillar.label}
                </h3>
              </div>

              <p className="font-manuscriptBody text-xs text-manuscript-inkMuted leading-relaxed">
                {currentPillar.description}
              </p>
            </div>

            {/* Live Interactive Simulation Canvas */}
            <div className="pt-1">
              {activeTab === "lead-flow" && (
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-manuscript-parchmentLight/60 border border-manuscriptAlpha-ink-10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-manuscript-inkMuted">
                      <span className="font-bold text-manuscript-ink text-[11px]">FILTER:</span>
                      <span className="px-2 py-0.5 rounded bg-white text-manuscript-ink text-[10px]">B2B SaaS</span>
                      <span className="px-2 py-0.5 rounded bg-white text-manuscript-ink text-[10px]">250-1k HC</span>
                    </div>
                    <span className="font-mono text-manuscript-copper font-bold text-[11px]">1,884 Matches</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { name: "Northstar Systems", loc: "Bengaluru, IN", tech: "Kubernetes, Kafka", score: "98%" },
                      { name: "DataForge Analytics", loc: "San Francisco, US", tech: "AWS, BigQuery", score: "94%" },
                    ].map((acc, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white border border-manuscriptAlpha-ink-15 flex items-center justify-between text-xs shadow-2xs">
                        <div>
                          <div className="font-bold text-manuscript-ink">{acc.name}</div>
                          <div className="text-[10px] text-manuscript-inkMuted">{acc.loc} · {acc.tech}</div>
                        </div>
                        <span className="font-mono font-bold text-manuscript-copper text-xs">{acc.score} Match</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "ai-research" && (
                <div className="p-3.5 rounded-xl bg-manuscript-parchmentLight/50 border border-manuscriptAlpha-ink-15 space-y-2.5 shadow-2xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-sans uppercase text-manuscript-copper font-bold">SYNTHESIZED DOSSIER</span>
                      <div className="font-bold text-xs sm:text-sm text-manuscript-ink">Northstar Systems · Expansion</div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-manuscript-copper bg-manuscript-copper/10 px-2 py-0.5 rounded border border-manuscript-copper/25">
                      96.2% Confidence
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-manuscriptAlpha-ink-10">
                      <div className="text-[9px] text-manuscript-inkMuted uppercase font-semibold">Primary Buyer</div>
                      <div className="font-bold text-manuscript-ink mt-0.5">Priya M.</div>
                      <div className="text-[9px] text-manuscript-inkMuted truncate">VP Engineering</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-manuscriptAlpha-ink-10">
                      <div className="text-[9px] text-manuscript-inkMuted uppercase font-semibold">Trigger Event</div>
                      <div className="font-bold text-manuscript-copper mt-0.5">+42 Hires</div>
                      <div className="text-[9px] text-manuscript-inkMuted truncate">Kafka Stack</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "outreach" && (
                <div className="p-3.5 rounded-xl bg-manuscript-parchmentLight/50 border border-manuscriptAlpha-ink-15 space-y-2 text-xs shadow-2xs">
                  <div className="flex items-center justify-between border-b border-manuscriptAlpha-ink-10 pb-1.5 text-manuscript-inkMuted text-[10px]">
                    <span>TO: <strong className="text-manuscript-ink">Priya M.</strong> (VP Engineering)</span>
                    <span className="font-bold text-manuscript-copper uppercase">STAGED FOR REVIEW</span>
                  </div>
                  <p className="text-manuscript-ink leading-relaxed font-serif italic text-xs">
                    "Hi Priya — noticed Northstar is scaling platform telemetry across 42 new roles. When scaling this quickly, data validation drag usually slows outbound..."
                  </p>
                  <div className="pt-1.5 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[10px] text-manuscript-inkMuted">
                    <span className="text-manuscript-copper font-medium flex items-center gap-1">
                      <ShieldCheck size={12} /> 100% Rep Approved
                    </span>
                    <span>Zero Hallucinations</span>
                  </div>
                </div>
              )}

              {activeTab === "nurture" && (
                <div className="p-3.5 rounded-xl bg-manuscript-parchmentLight/50 border border-manuscriptAlpha-ink-15 space-y-2 text-xs shadow-2xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-manuscript-ink text-xs">CADENCE STATUS:</span>
                    <span className="text-[10px] font-bold text-manuscript-copper px-2 py-0.5 rounded bg-manuscript-copper/10">
                      REPLY LISTENER ACTIVE
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-manuscript-copper/30">
                    <div className="font-bold text-manuscript-ink text-xs">Prospect: "Let's talk Thursday at 2"</div>
                    <div className="text-[10px] text-manuscript-copper font-semibold mt-0.5">Sequence auto-halted in 1.4s</div>
                  </div>
                  <div className="text-[10px] text-manuscript-inkMuted flex items-center justify-between">
                    <span>Touchpoint 02 cancelled</span>
                    <span>Zero Spam Collisions</span>
                  </div>
                </div>
              )}

              {activeTab === "pipeline" && (
                <div className="p-3.5 rounded-xl bg-manuscript-parchmentLight/50 border border-manuscriptAlpha-ink-15 space-y-2 text-xs shadow-2xs">
                  <div className="flex items-center justify-between text-[11px] font-bold text-manuscript-ink">
                    <span>Northstar Systems</span>
                    <span className="text-manuscript-copper font-mono">$120k ARR Deal</span>
                  </div>
                  <div className="text-[10px] text-manuscript-inkMuted">
                    Owner: Sarah K. (AE) · Stage: Demo Scheduled
                  </div>
                  <div className="pt-1.5 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[10px] text-manuscript-copper font-semibold">
                    <span>Salesforce &amp; HubSpot Synced ✓</span>
                    <span>Meeting Booked</span>
                  </div>
                </div>
              )}
            </div>

            {/* Performance Metrics Row */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-manuscriptAlpha-ink-10">
              {currentPillar.metrics.map((m, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-manuscript-parchmentLight/60 border border-manuscriptAlpha-ink-10">
                  <div className="text-[9px] font-sans text-manuscript-inkMuted uppercase font-semibold">
                    {m.label}
                  </div>
                  <div className="text-sm font-bold font-sans text-manuscript-ink mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Action CTA */}
            <button
              type="button"
              onClick={handleAction}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-manuscript-copper text-white hover:bg-manuscript-copperDeep transition-colors font-sans text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <span>TEST {currentPillar.label.toUpperCase()} FREE</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Sticky Bottom Thumb-Zone Navigation Bar */}
          <div className="p-2.5 bg-white/95 backdrop-blur-md rounded-2xl border border-manuscriptAlpha-ink-15 flex items-center justify-between gap-2 shadow-2xs">
            <button
              type="button"
              onClick={goToPrevPillar}
              className="py-1.5 px-3 rounded-xl border border-manuscriptAlpha-ink-15 text-xs font-sans font-bold text-manuscript-ink hover:text-manuscript-copper flex items-center gap-1 active:scale-95 transition-all"
            >
              <ChevronLeft size={13} />
              <span>Prev</span>
            </button>

            <div className="flex items-center gap-1.5">
              {PILLARS.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    handleTabChange(p.id);
                    setMobileProgress(0);
                  }}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    activeTab === p.id ? "w-5 bg-manuscript-copper" : "w-2 bg-manuscriptAlpha-ink-20"
                  }`}
                  aria-label={`Go to pillar ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNextPillar}
              className="py-1.5 px-3.5 rounded-xl bg-manuscript-copper text-white hover:bg-manuscript-copperLight text-xs font-sans font-bold flex items-center gap-1 shadow-xs active:scale-95 transition-all"
            >
              <span>Next</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
