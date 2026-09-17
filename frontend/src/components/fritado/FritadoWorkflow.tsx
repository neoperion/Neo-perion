import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Send, 
  RefreshCw,
  TrendingUp,
  Cpu,
  Share2,
  ChevronDown,
  Pause,
  Play
} from "lucide-react";
import { trackEvent } from "@/shared/analytics";
import { fritadoConfig } from "@/data/fritadoConfig";

interface WorkflowCardItem {
  id: string;
  num: string;
  shortTitle: string;
  headline: string;
  description: string;
  icon: React.ElementType;
  specs: string;
  metric: string;
  image: string;
  imageAlt: string;
}

const WORKFLOW_CARDS: WorkflowCardItem[] = [
  {
    id: "discover",
    num: "01.",
    shortTitle: "Amplify Discovery",
    headline: "Target Verified Accounts",
    description: "Filters public business registries and hiring boards by employee count, modern tech stack, and capital raises. Automatically checks your CRM to prevent pitching existing clients.",
    icon: Search,
    specs: "1,884 target accounts indexed daily · Zero dead inboxes",
    metric: "1,884 Accounts / Day",
    image: "/images/fritado-flow-discover.jpg",
    imageAlt: "Abstract 3D parametric copper flow representing account discovery",
  },
  {
    id: "research",
    num: "02.",
    shortTitle: "Command Intelligence",
    headline: "Assemble Deep Context",
    description: "Compiles recent funding rounds, open engineering positions, and decision-maker roles into an executive briefing dossier in under 30 seconds before anyone reaches out.",
    icon: Database,
    specs: "30-second executive dossier · 100% verified registry data",
    metric: "30s Dossier Assembly",
    image: "/images/fritado-flow-engine.jpg",
    imageAlt: "Isometric 3D interconnected system representing deep intelligence",
  },
  {
    id: "personalize",
    num: "03.",
    shortTitle: "Eliminate Spam",
    headline: "Contextual Evidence Outreach",
    description: "Prepares customized message openers connected directly to recent company initiatives. Every staged message waits in your rep's review desk with SPF/DKIM domain safeguards.",
    icon: Sparkles,
    specs: "100% rep sign-off required · 99.4% inbox placement",
    metric: "100% Rep Approved",
    image: "/images/fritado-flow-discover.jpg",
    imageAlt: "Abstract sculptural wave representing evidence-based outreach",
  },
  {
    id: "handoff",
    num: "04.",
    shortTitle: "Scale with Clarity",
    headline: "Automated CRM Pipeline Handoff",
    description: "Monitors replies with instant 2-second sequence auto-pausing and hands off qualified meetings, conversation trails, and opportunity cards directly into HubSpot and Salesforce.",
    icon: CheckCircle2,
    specs: "Instant 2s cutoff on reply · Bi-directional live sync",
    metric: "Two-Way CRM Sync",
    image: "/images/fritado-flow-engine.jpg",
    imageAlt: "Interconnected system architecture representing CRM handoff",
  },
];

export const FritadoWorkflow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1); // Card 02 active by default, exactly like screenshot
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mobileProgress, setMobileProgress] = useState<number>(0);

  // Always Auto-Run simulation (cycles smoothly every 4 seconds unless paused or hovered)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setMobileProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((curr) => (curr + 1) % WORKFLOW_CARDS.length);
          return 0;
        }
        return prev + (50 / 4000) * 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  const handleCardClick = (idx: number) => {
    setActiveIndex(idx);
    setMobileProgress(0);
    trackEvent("fritado_workflow_card_select", {
      step: WORKFLOW_CARDS[idx].shortTitle,
      stepNum: WORKFLOW_CARDS[idx].num,
    });
  };

  const handleCta = () => {
    trackEvent("fritado_workflow_cta_click", {
      destination: fritadoConfig.primaryUrl,
    });
    window.open(fritadoConfig.primaryUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      id="overview" 
      className="relative scroll-mt-24 py-14 sm:py-20 lg:py-24 border-b border-manuscript-parchmentDeep bg-manuscript-parchment text-manuscript-ink font-sans overflow-hidden"
    >
      {/* ─── AMBIENT GRID LINES (Matching Reference Screenshot) ─── */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(31,26,20,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,26,20,0.04)_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* ─── SECTION HEADER (Exact Typography & Pill Button Balance with Viewport Reveal) ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          {/* Left: Eyebrow + Master Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-manuscriptAlpha-ink-15 text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-manuscript-copper mb-4 shadow-2xs">
              <Share2 size={12} className="text-manuscript-copper" />
              <span>HOW IT WORKS</span>
            </div>

            <h2 className="font-manuscript text-3xl sm:text-4xl lg:text-5xl font-bold text-manuscript-ink tracking-tight leading-[1.12]">
              We've orchestrated <br />
              <span className="text-manuscript-copper">Growth Intelligence.</span>
            </h2>
          </div>

          {/* Right: Paragraph + Dark Pill CTA Button */}
          <div className="max-w-md flex flex-col items-start lg:items-end text-left lg:text-right space-y-4">
            <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkMuted leading-relaxed">
              Fritado brings clarity, not complexity—uniting prospect discovery, deep account research, personalized outreach, and CRM pipeline handoffs into one connected, rep-governed rhythm.
            </p>

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleCta}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-manuscript-ink text-white hover:bg-manuscript-copper transition-colors duration-200 text-xs font-semibold font-sans shadow-md group"
            >
              <span>Explore Workflow</span>
              <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>

        {/* ─── INTERACTIVE EXPANDING CARD DECK (Matching Reference Image) ─── */}
        {/* On Desktop: Smooth horizontal flex expansion with auto-run */}
        {/* On Mobile: Compact responsive interactive cards without long scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hidden md:flex gap-4 items-stretch min-h-[520px]"
        >
          {WORKFLOW_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isActive = activeIndex === idx;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(idx)}
                className={`relative rounded-3xl transition-all duration-500 ease-out cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isActive 
                    ? "flex-[2.6] bg-white border border-manuscriptAlpha-ink-15 shadow-[0_16px_40px_rgba(80,55,30,0.08)] p-6 z-10 -translate-y-1" 
                    : "flex-1 bg-white/90 hover:bg-white border border-manuscriptAlpha-ink-10 hover:border-manuscript-copper/40 p-5 shadow-2xs hover:shadow-sm"
                }`}
              >
                {/* When ACTIVE: Show full image, rich title, and detailed copy */}
                {isActive ? (
                  <div className="flex flex-col h-full justify-between space-y-4">
                    {/* Top Image (Abstract 3D Wave from AI generator) */}
                    <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 shadow-inner shrink-0">
                      <img 
                        src={card.image} 
                        alt={card.imageAlt}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold text-manuscript-copper shadow-xs">
                        STAGE {card.num}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-2.5 pt-1">
                      <div className="w-8 h-8 rounded-full bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 flex items-center justify-center text-manuscript-copper shadow-2xs">
                        <Icon size={16} />
                      </div>

                      <h3 className="font-manuscript text-xl sm:text-2xl font-bold text-manuscript-ink tracking-tight leading-snug">
                        {card.headline}
                      </h3>

                      <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkMuted leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Status & Specs */}
                    <div className="pt-3 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-manuscript-copper font-medium text-[11px]">
                        <ShieldCheck size={13} />
                        <span>{card.specs}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-manuscript-ink px-2 py-0.5 rounded bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10">
                        {card.metric}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* When COLLAPSED: Show large watermark number at top, icon and title at bottom */
                  <div className="flex flex-col h-full justify-between select-none">
                    {/* Top Watermark Number */}
                    <div>
                      <span className="font-manuscript text-3xl lg:text-4xl font-bold text-manuscript-inkMuted/30 block tracking-tighter">
                        {card.num}
                      </span>
                    </div>

                    {/* Bottom Icon & Title */}
                    <div className="space-y-3 pt-6">
                      <div className="w-7 h-7 rounded-full bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 flex items-center justify-center text-manuscript-inkMuted shadow-2xs">
                        <Icon size={14} />
                      </div>

                      <div className="font-sans text-xs lg:text-sm font-bold text-manuscript-ink leading-tight">
                        {card.shortTitle}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* ─── MOBILE RESPONSIVE VERSION (Expanding Card Deck with Fluid Animations) ─── */}
        <div className="md:hidden space-y-3">
          {/* Top Progress & Play/Pause Control Bar */}
          <div className="flex items-center justify-between text-xs px-1 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-manuscript-copper animate-pulse" />
              <span className="font-sans font-bold text-manuscript-copper text-[11px] uppercase tracking-wider">
                STAGE {WORKFLOW_CARDS[activeIndex].num}
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

            {/* 4-Segment Progress Bar */}
            <div className="flex items-center gap-1.5 w-28">
              {WORKFLOW_CARDS.map((_, idx) => (
                <div 
                  key={idx} 
                  className="flex-1 h-1 rounded-full bg-manuscriptAlpha-ink-15 overflow-hidden"
                >
                  <div 
                    className="h-full bg-manuscript-copper transition-all duration-75"
                    style={{
                      width: activeIndex === idx 
                        ? `${mobileProgress}%` 
                        : activeIndex > idx 
                          ? "100%" 
                          : "0%"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Expanding Cards Stack (Matches Desktop Deck) */}
          <div className="space-y-2.5">
            {WORKFLOW_CARDS.map((card, idx) => {
              const Icon = card.icon;
              const isActive = activeIndex === idx;

              return (
                <div
                  key={card.id}
                  onClick={() => {
                    handleCardClick(idx);
                    setIsHovered(true); // pause auto-run when tapped
                  }}
                  className={`rounded-2xl transition-all duration-500 ease-out overflow-hidden border cursor-pointer ${
                    isActive
                      ? "bg-white border-manuscript-copper ring-2 ring-manuscript-copper/20 shadow-md p-4 sm:p-5"
                      : "bg-white/80 hover:bg-white border-manuscriptAlpha-ink-15 p-3.5 shadow-2xs hover:border-manuscript-copper/40"
                  }`}
                >
                  {isActive ? (
                    /* ─── ACTIVE EXPANDED MOBILE CARD ─── */
                    <div className="space-y-3.5 animate-fadeIn">
                      {/* 3D Wave Artwork */}
                      <div className="relative w-full h-[190px] rounded-xl overflow-hidden bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 shadow-inner">
                        <img 
                          src={card.image} 
                          alt={card.imageAlt}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold text-manuscript-copper shadow-xs">
                          STAGE {card.num}
                        </div>
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white shadow-xs">
                          {card.metric}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 flex items-center justify-center text-manuscript-copper shadow-2xs shrink-0">
                            <Icon size={14} />
                          </div>
                          <span className="font-sans text-xs font-bold text-manuscript-copper uppercase tracking-wider">
                            {card.shortTitle}
                          </span>
                        </div>

                        <h3 className="font-manuscript text-lg sm:text-xl font-bold text-manuscript-ink leading-snug">
                          {card.headline}
                        </h3>

                        <p className="font-manuscriptBody text-xs text-manuscript-inkMuted leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      {/* Governance Footnote */}
                      <div className="pt-2.5 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-manuscript-copper font-medium text-[11px]">
                          <ShieldCheck size={13} />
                          <span>{card.specs}</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-manuscript-ink px-2 py-0.5 rounded bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10">
                          Active
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* ─── COLLAPSED SLIM MOBILE CARD ─── */
                    <div className="flex items-center justify-between select-none py-0.5">
                      <div className="flex items-center gap-3">
                        <span className="font-manuscript text-xl font-bold text-manuscript-copper block tracking-tighter w-8">
                          {card.num}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 flex items-center justify-center text-manuscript-inkMuted shrink-0">
                          <Icon size={12} />
                        </div>
                        <div className="font-sans text-xs font-bold text-manuscript-ink">
                          {card.shortTitle}
                        </div>
                      </div>

                      <div className="text-[11px] font-sans font-semibold text-manuscript-inkMuted flex items-center gap-1">
                        <span>Explore</span>
                        <span className="text-manuscript-copper font-bold">↓</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Micro-Bar */}
        <div className="mt-8 pt-6 border-t border-manuscriptAlpha-ink-10 flex flex-wrap items-center justify-between gap-3 text-xs text-manuscript-inkMuted">
          <span className="font-sans text-[11px] font-bold text-manuscript-inkSoft uppercase tracking-wider">
            Connected Outbound Rhythm:
          </span>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-3 py-1 rounded-full bg-white border border-manuscriptAlpha-ink-15 font-medium text-manuscript-ink">
              100% Rep-Audited
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-manuscriptAlpha-ink-15 font-medium text-manuscript-ink">
              SPF/DKIM/DMARC Protection
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-manuscriptAlpha-ink-15 font-medium text-manuscript-ink">
              HubSpot &amp; Salesforce Sync
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
