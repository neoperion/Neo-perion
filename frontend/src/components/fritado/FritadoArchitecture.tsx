import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Building, 
  Radio, 
  UserCheck, 
  Zap, 
  Clock, 
  Cpu, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  ArrowDown,
  Pause,
  Play,
  Sparkles,
  ChevronRight
} from "lucide-react";

interface SignalItem {
  title: string;
  desc: string;
  iconSrc: string;
}

const INPUT_SIGNALS: SignalItem[] = [
  {
    title: "Company Profile",
    desc: "Industry, verified tech stack, team size, funding stage",
    iconSrc: "/images/company.png",
  },
  {
    title: "Market Signals",
    desc: "New capital rounds, expansion news, product launches",
    iconSrc: "/images/global-network.png",
  },
  {
    title: "Decision-Maker Roles",
    desc: "Verified VPs and Directors who own the actual budget",
    iconSrc: "/images/group-users.png",
  },
  {
    title: "Website Intent",
    desc: "Target accounts actively browsing your pricing pages",
    iconSrc: "/images/monitoring-system.png",
  },
  {
    title: "Timing Triggers",
    desc: "Hiring surges, new leadership, and project cycles",
    iconSrc: "/images/critical.png",
  },
];

interface SignalScenario {
  id: string;
  title: string;
  category: string;
  desc: string;
  iconSrc: string;
  triggerDetail: string;
  fitScore: string;
  contextAngle: string;
  stagedAction: string;
  statusBadge: string;
}

const SIGNAL_SCENARIOS: SignalScenario[] = [
  {
    id: "profile",
    title: "Company Profile",
    category: "Verified Tech Stack",
    desc: "Filters companies by verified cloud tooling, headcount, and ARR",
    iconSrc: "/images/company.png",
    triggerDetail: "Fintech enterprise · 450 headcount · Series B · AWS / Kafka",
    fitScore: "96.8% Fit",
    contextAngle: "Targeted Data Compliance & Governance",
    stagedAction: "Executive Briefing prepared for VP Engineering with stack match",
    statusBadge: "Verified Registry",
  },
  {
    id: "market",
    title: "Market Signals",
    category: "Expansion Round",
    desc: "Monitors fresh capital raises and regional expansions",
    iconSrc: "/images/global-network.png",
    triggerDetail: "$28M expansion round announced 14 days ago",
    fitScore: "98.4% Fit",
    contextAngle: "Scale Infrastructure & Rapid Hiring Support",
    stagedAction: "Customized Growth Stage intro staged in queue with funding cite",
    statusBadge: "Live Market News",
  },
  {
    id: "roles",
    title: "Decision Roles",
    category: "Budget Authority",
    desc: "Pins true problem owners who hold direct signing authority",
    iconSrc: "/images/group-users.png",
    triggerDetail: "New VP Engineering & Head of Data appointed",
    fitScore: "99.1% Fit",
    contextAngle: "First 90-Day Engineering Priority Alignment",
    stagedAction: "Direct outreach draft prepared with new leadership context",
    statusBadge: "Budget Owner Verified",
  },
  {
    id: "intent",
    title: "Website Intent",
    category: "High-Intent Surge",
    desc: "Catches target accounts actively reading your pricing pages",
    iconSrc: "/images/monitoring-system.png",
    triggerDetail: "4 sessions on Pricing & API Docs in last 48h from target IP",
    fitScore: "99.6% Fit",
    contextAngle: "High-Urgency Implementation Rationale",
    stagedAction: "Personalized follow-up note ready for 1-click rep signoff",
    statusBadge: "High Buying Intent",
  },
  {
    id: "timing",
    title: "Timing Triggers",
    category: "Hiring Velocity",
    desc: "Detects engineering surges, migrations, and product launches",
    iconSrc: "/images/critical.png",
    triggerDetail: "+35 open engineering roles in pipeline across 3 offices",
    fitScore: "97.5% Fit",
    contextAngle: "Engineering Bandwidth & Ramp Acceleration",
    stagedAction: "Talent scale angle staged with zero generic spam bots",
    statusBadge: "Hiring Velocity",
  },
];

export const FritadoArchitecture: React.FC = () => {
  const [activeSignalIdx, setActiveSignalIdx] = useState<number>(3); // Website Intent by default
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);
  const [cycleProgress, setCycleProgress] = useState<number>(0);

  // Auto-cycle simulation every 4.5 seconds on mobile
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setCycleProgress((prev) => {
        if (prev >= 100) {
          setActiveSignalIdx((curr) => (curr + 1) % SIGNAL_SCENARIOS.length);
          return 0;
        }
        return prev + (50 / 4500) * 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isAutoCycling, activeSignalIdx]);

  const currentScenario = SIGNAL_SCENARIOS[activeSignalIdx];

  return (
    <section id="intelligence" className="scroll-mt-28 py-16 sm:py-24 border-b border-manuscript-parchmentDeep bg-manuscript-parchmentLight text-manuscript-ink font-sans">
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header with Viewport Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-manuscript-copper">
              INTELLIGENCE
            </span>

          </div>
          <h2 className="font-manuscript text-3xl sm:text-4xl font-bold text-manuscript-ink tracking-tight leading-tight">
            Context-driven intelligence
          </h2>
          <p className="mt-4 font-manuscriptBody text-base sm:text-lg text-manuscript-inkMuted leading-relaxed">
            Instead of blindly spraying cold templates, Fritado listens for real buying triggers—like hiring surges, tech stack updates, and website intent—so your sales team reaches out with genuine relevance.
          </p>
        </motion.div>

        {/* Clean Enterprise System Architecture Visual (AINCURU Manuscript Theme with Viewport Reveal) */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-manuscriptAlpha-ink-15 bg-white/80 p-5 sm:p-10 shadow-[0_12px_40px_rgba(80,55,30,0.06)] relative overflow-hidden"
        >
          {/* Architecture Card Header */}
          <div className="flex flex-wrap items-center justify-between pb-4 sm:pb-5 mb-6 sm:mb-8 border-b border-manuscriptAlpha-ink-10 text-xs font-sans text-manuscript-inkMuted gap-2">
            <span className="flex items-center gap-2 text-manuscript-ink font-semibold">
              <Cpu size={16} className="text-manuscript-copper" />
              Real-Time Signal Ingestion &amp; Human Review Architecture
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-bold text-manuscript-copper bg-manuscript-copper/10 px-2.5 py-0.5 rounded border border-manuscript-copper/20">
              REP IN THE LOOP · ZERO BOT SPAM
            </span>
          </div>

          {/* ────────────────────────────────────────────────────────────
              01 DESKTOP ARCHITECTURE DATAFLOW GRID (lg and above: 100% untouched)
          ──────────────────────────────────────────────────────────── */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center">
            {/* Step 1: Input Signals (4 Cols) */}
            <div className="lg:col-span-4 space-y-2.5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-sans text-[11px] font-bold uppercase text-manuscript-copper tracking-wider">
                  01 / BUYING SIGNALS
                </span>
                <span className="text-[10px] font-sans text-manuscript-inkSoft font-medium">5 Live Feeds</span>
              </div>

              {INPUT_SIGNALS.map((sig) => {
                return (
                  <div 
                    key={sig.title} 
                    className="p-3 rounded-lg bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 flex items-start gap-3 transition-colors hover:border-manuscript-copper/40"
                  >
                    <div className="w-7 h-7 rounded bg-white border border-manuscriptAlpha-ink-10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm p-1">
                      <img src={sig.iconSrc} alt={sig.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-sans text-xs font-bold text-manuscript-ink truncate">
                        {sig.title}
                      </h4>
                      <p className="font-manuscriptBody text-[11px] text-manuscript-inkMuted truncate">
                        {sig.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Transition Arrow: 1 to 2 */}
            <div className="hidden lg:flex lg:col-span-1 justify-center text-manuscript-copper">
              <ArrowRight size={22} className="opacity-60" />
            </div>

            {/* Step 2: Fritado AI Core (3.5 Cols) */}
            <div className="lg:col-span-3 space-y-4 p-5 sm:p-6 rounded-xl bg-manuscript-parchmentWarm/60 border border-manuscript-copper/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-manuscript-copper text-white flex items-center justify-center shrink-0">
                  <Cpu size={16} />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-manuscript-ink uppercase tracking-wide">
                    FRITADO ENGINE
                  </h4>
                  <span className="font-sans text-[10px] text-manuscript-copper font-semibold">
                    Context Synthesis
                  </span>
                </div>
              </div>

              <p className="font-manuscriptBody text-xs text-manuscript-inkSoft leading-relaxed">
                Matches what the company is experiencing right now with your product's strengths, producing a tailored outreach angle ready for review.
              </p>

              <div className="pt-3 border-t border-manuscript-copper/20 space-y-1.5 text-[11px] font-sans">
                <div className="flex justify-between">
                  <span className="text-manuscript-inkMuted">Account Fit:</span>
                  <span className="font-semibold text-manuscript-ink">98.4% Match</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-manuscript-inkMuted">Trigger Detected:</span>
                  <span className="font-semibold text-manuscript-ink">Hiring Surge</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-manuscript-inkMuted">Output:</span>
                  <span className="font-semibold text-manuscript-copper">Staged in Review Queue</span>
                </div>
              </div>
            </div>

            {/* Transition Arrow: 2 to 3 */}
            <div className="hidden lg:flex lg:col-span-1 justify-center text-manuscript-copper">
              <ArrowRight size={22} className="opacity-60" />
            </div>

            {/* Step 3: Human Review Boundary & Permitted Outputs (3.5 Cols) */}
            <div className="lg:col-span-3 space-y-3.5">
              <span className="font-sans text-[11px] font-bold uppercase text-manuscript-copper tracking-wider block mb-2">
                02 / CONTROL GATE &amp; OUTPUTS
              </span>

              {/* Human Review Boundary Card */}
              <div className="p-4 rounded-xl bg-manuscript-parchmentLight border border-manuscript-copper/30 space-y-2">
                <div className="flex items-center gap-2 text-manuscript-copper">
                  <ShieldCheck size={16} />
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-manuscript-ink">
                    The Human Review Gate
                  </h4>
                </div>
                <p className="font-manuscriptBody text-xs text-manuscript-inkMuted leading-relaxed">
                  No automated spam ever leaves your domain. Your reps can read, tweak, or approve every message in one click before dispatch.
                </p>
              </div>

              {/* Permitted Outputs */}
              <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-10 space-y-2.5">
                <span className="font-sans text-[10px] font-bold text-manuscript-inkSoft uppercase tracking-wider block">
                  Permitted Next Actions
                </span>
                <div className="flex items-center gap-2.5 text-xs text-manuscript-ink">
                  <div className="w-5 h-5 rounded bg-manuscript-copper/10 text-manuscript-copper flex items-center justify-center shrink-0">
                    <Send size={11} />
                  </div>
                  <span className="font-manuscriptBody font-medium">Send Rep-Approved Email or LinkedIn Note</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-manuscript-ink">
                  <div className="w-5 h-5 rounded bg-manuscript-copper/10 text-manuscript-copper flex items-center justify-center shrink-0">
                    <CheckCircle2 size={11} />
                  </div>
                  <span className="font-manuscriptBody font-medium">Sync Contact &amp; Activity Straight to CRM</span>
                </div>
              </div>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────
              02 MOBILE INTERACTIVE SIGNAL INGESTION & REP CONTROL COCKPIT
              (block lg:hidden — Compact, Dynamic, Zero Scroll Trap)
          ──────────────────────────────────────────────────────────── */}
          <div className="block lg:hidden space-y-4">
            {/* Top Bar: Active Feed Selector & Auto/Pause Controls */}
            <div className="flex items-center justify-between gap-2 pb-1">
              <div className="flex items-center gap-2">
                <span className="font-sans text-[11px] font-bold uppercase text-manuscript-copper tracking-wider">
                  01 / SIGNAL FEEDS
                </span>
                <button
                  type="button"
                  onClick={() => setIsAutoCycling(!isAutoCycling)}
                  className="px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold border flex items-center gap-1 bg-white border-manuscriptAlpha-ink-15 text-manuscript-ink hover:text-manuscript-copper transition-colors"
                >
                  {isAutoCycling ? (
                    <>
                      <Pause size={9} className="text-manuscript-copper" />
                      <span>Live</span>
                    </>
                  ) : (
                    <>
                      <Play size={9} className="text-manuscript-copper" />
                      <span>Paused</span>
                    </>
                  )}
                </button>
              </div>

              {/* Step dots with progress */}
              <div className="flex items-center gap-1">
                {SIGNAL_SCENARIOS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSignalIdx === idx
                        ? "w-4 bg-manuscript-copper"
                        : "w-1.5 bg-manuscriptAlpha-ink-20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Horizontal Scrollable Signal Selector Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {SIGNAL_SCENARIOS.map((sc, idx) => {
                const isSelected = activeSignalIdx === idx;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => {
                      setActiveSignalIdx(idx);
                      setCycleProgress(0);
                      setIsAutoCycling(false); // pause on user selection
                    }}
                    className={`shrink-0 py-1.5 px-2.5 rounded-xl border text-xs font-sans transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-manuscript-copper text-white border-manuscript-copper shadow-xs font-bold"
                        : "bg-white text-manuscript-ink border-manuscriptAlpha-ink-15 hover:border-manuscript-copper/40"
                    }`}
                  >
                    <div className="w-3 h-3 shrink-0">
                      <img src={sc.iconSrc} alt={sc.title} className="w-full h-full object-contain" style={{ filter: isSelected ? "brightness(0) invert(1)" : undefined }} />
                    </div>
                    <span className="text-[11px] whitespace-nowrap">{sc.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Flow Canvas: Ingested Signal → Fritado Engine → Human Review Gate */}
            <div className="rounded-2xl bg-manuscript-parchmentWarm/40 border border-manuscript-copper/25 p-4 space-y-3 shadow-inner">
              {/* Stage A: Live Signal Ingested */}
              <div className="p-3 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-manuscript-copper/10 flex items-center justify-center shrink-0 p-1">
                      <img src={currentScenario.iconSrc} alt={currentScenario.title} className="w-full h-full object-contain" />
                    </div>
                    <span className="font-sans font-bold text-manuscript-ink text-xs">
                      {currentScenario.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-manuscript-copper bg-manuscript-copper/10 px-2 py-0.5 rounded border border-manuscript-copper/25">
                    {currentScenario.statusBadge}
                  </span>
                </div>

                <div className="p-2 rounded-lg bg-manuscript-parchmentLight text-xs font-sans text-manuscript-ink flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium text-manuscript-ink truncate">
                    {currentScenario.triggerDetail}
                  </span>
                  <span className="text-[10px] font-bold text-manuscript-copper shrink-0 font-mono">
                    Ingested ✓
                  </span>
                </div>
              </div>

              {/* Dataflow Arrow Badge */}
              <div className="flex items-center justify-center">
                <div className="px-3 py-0.5 rounded-full bg-manuscript-copper/10 border border-manuscript-copper/25 text-[10px] font-sans font-bold text-manuscript-copper flex items-center gap-1">
                  <span>Synthesizing Context</span>
                  <ArrowDown size={11} className="animate-bounce" />
                </div>
              </div>

              {/* Stage B: Fritado Engine Context Synthesis */}
              <div className="p-3.5 rounded-xl bg-white border border-manuscript-copper/30 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-manuscript-copper text-white flex items-center justify-center shrink-0">
                      <Cpu size={13} />
                    </div>
                    <div>
                      <span className="font-sans font-bold text-manuscript-ink text-xs uppercase tracking-wide">
                        FRITADO ENGINE
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-manuscript-copper">
                    {currentScenario.fitScore}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-manuscript-parchmentLight/80 border border-manuscriptAlpha-ink-10 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-manuscript-copper tracking-wider font-sans">
                    Matched Value Proposition Angle:
                  </div>
                  <div className="text-xs font-manuscriptBody text-manuscript-ink font-semibold leading-snug">
                    "{currentScenario.contextAngle}"
                  </div>
                </div>
              </div>

              {/* Dataflow Arrow Badge */}
              <div className="flex items-center justify-center">
                <div className="px-3 py-0.5 rounded-full bg-manuscript-copper/10 border border-manuscript-copper/25 text-[10px] font-sans font-bold text-manuscript-copper flex items-center gap-1">
                  <span>Routing to Rep Desk</span>
                  <ArrowDown size={11} className="animate-bounce" />
                </div>
              </div>

              {/* Stage C: The Human Review Gate */}
              <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-manuscript-copper font-bold">
                    <ShieldCheck size={14} />
                    <span className="font-sans text-[11px] uppercase tracking-wider text-manuscript-ink">
                      HUMAN REVIEW GATE
                    </span>
                  </div>
                  <span className="text-[9px] font-sans font-bold text-manuscript-copper bg-manuscript-copper/10 px-2 py-0.5 rounded">
                    1-CLICK APPROVAL
                  </span>
                </div>

                <div className="text-xs font-manuscriptBody text-manuscript-inkMuted leading-relaxed">
                  <span className="font-semibold text-manuscript-ink">Staged for Review: </span>
                  {currentScenario.stagedAction}
                </div>

                <div className="pt-2 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[10px] font-sans">
                  <span className="flex items-center gap-1 text-manuscript-ink font-medium">
                    <CheckCircle2 size={11} className="text-manuscript-copper" />
                    <span>Syncs Straight to Salesforce &amp; HubSpot</span>
                  </span>
                  <span className="text-manuscript-copper font-bold">Zero Bot Spam</span>
                </div>
              </div>
            </div>

            {/* Quick Next Feed Button */}
            <div className="flex items-center justify-between pt-1 text-xs">
              <span className="text-[11px] font-sans text-manuscript-inkMuted">
                Feed {activeSignalIdx + 1} of {SIGNAL_SCENARIOS.length}
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveSignalIdx((curr) => (curr + 1) % SIGNAL_SCENARIOS.length);
                  setCycleProgress(0);
                }}
                className="text-xs font-sans font-bold text-manuscript-copper hover:text-manuscript-copperDeep flex items-center gap-1"
              >
                <span>Next Signal Feed</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>

          {/* Architecture Bottom Audit Footer */}
          <div className="mt-8 pt-4 border-t border-manuscriptAlpha-ink-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-sans text-manuscript-inkMuted">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper shrink-0" />
              <span>Real Signals → Context Brief → Rep Approval → High-Value Conversation</span>
            </div>
            <span className="text-manuscript-copper font-semibold shrink-0">Full Rep Control · Zero Blind Automation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
