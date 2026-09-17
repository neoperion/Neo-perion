import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Building,
  UserCheck,
  Radio,
  Database,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Check,
  TrendingUp,
  ArrowRight,
  Mail,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

interface DiscoverySource {
  id: string;
  name: string;
  category: string;
  records: string;
  confidence: string;
  signalTag: string;
  icon: React.ElementType;
}

const DISCOVERY_SOURCES: DiscoverySource[] = [
  {
    id: "web",
    name: "Hiring & Job Boards",
    category: "Live Engineering Signals",
    records: "412 accounts",
    confidence: "98.4%",
    signalTag: "+42 engineering roles",
    icon: Globe,
  },
  {
    id: "technographics",
    name: "Verified Tech Stacks",
    category: "Infrastructure In Use",
    records: "328 stacks",
    confidence: "94.1%",
    signalTag: "AWS · Kafka · Datadog",
    icon: Building,
  },
  {
    id: "linkedin",
    name: "Verified Decision-Makers",
    category: "Target Buyer Mapping",
    records: "582 buyers",
    confidence: "99.2%",
    signalTag: "VP & Director level",
    icon: UserCheck,
  },
  {
    id: "market",
    name: "Funding & Milestones",
    category: "Company Growth Triggers",
    records: "184 events",
    confidence: "91.8%",
    signalTag: "Series B expansion",
    icon: Radio,
  },
  {
    id: "intent",
    name: "Website Intent Traffic",
    category: "De-anonymized Visits",
    records: "162 sessions",
    confidence: "97.0%",
    signalTag: "Pricing page surge",
    icon: Zap,
  },
  {
    id: "regulatory",
    name: "Public Business Filings",
    category: "Registry Data",
    records: "216 records",
    confidence: "95.5%",
    signalTag: "Annual disclosures & filings",
    icon: Database,
  },
];

interface AccountProfile {
  id: string;
  name: string;
  ticker: string;
  domain: string;
  headcount: string;
  location: string;
  industry: string;
  intentScore: number;
  contact: {
    name: string;
    role: string;
    email: string;
    linkedin: string;
  };
  stages: {
    id: number;
    title: string;
    actionLabel: string;
    latency: string;
    summary: string;
  }[];
  draft: {
    subject: string;
    body: string;
    channel: string;
    timestamp: string;
  };
  signals: {
    type: string;
    detail: string;
    time: string;
  }[];
  traceLog: string[];
}

const ACCOUNTS: Record<string, AccountProfile> = {
  northstar: {
    id: "northstar",
    name: "Northstar Systems",
    ticker: "NS",
    domain: "northstar.io",
    headcount: "320 employees",
    location: "Bengaluru, IN",
    industry: "Enterprise Infrastructure",
    intentScore: 94,
    contact: {
      name: "Priya M.",
      role: "VP Engineering (Platform)",
      email: "priya.m@northstar.io",
      linkedin: "linkedin.com/in/priya-m-northstar",
    },
    stages: [
      {
        id: 1,
        title: "Researching account",
        actionLabel: "HIRING SURGE CAPTURED",
        latency: "140ms",
        summary: "Spotted 42 platform engineering openings across Bengaluru & SF hubs.",
      },
      {
        id: 2,
        title: "Finding decision maker",
        actionLabel: "VP OF ENGINEERING MATCH",
        latency: "280ms",
        summary: "Identified Priya M. leading infrastructure and data platform hiring.",
      },
      {
        id: 3,
        title: "Analyzing intent",
        actionLabel: "HIGH SITE INTENT",
        latency: "310ms",
        summary: "3 sessions exploring our real-time compliance and security documentation.",
      },
      {
        id: 4,
        title: "Writing personalized message",
        actionLabel: "STAGED FOR REP APPROVAL",
        latency: "420ms",
        summary: "Tailored draft referencing their hiring spike queued for rep review.",
      },
      {
        id: 5,
        title: "Queuing follow-up",
        actionLabel: "READY FOR SALESFORCE",
        latency: "Awaiting",
        summary: "Enqueued for Salesforce opportunity sync as soon as rep clicks approve.",
      },
    ],
    draft: {
      channel: "Email · Direct Outreach",
      timestamp: "Today at 12:45 UTC",
      subject: "Priya, quick question on scaling Northstar's 42 new engineering roles",
      body: "Hi Priya — saw Northstar is adding 40+ engineers to the platform team this quarter. When teams expand distributed telemetry this fast, keeping data verification clean across services usually becomes a major bottleneck. We built Fritado to automate the account research and data verification so your engineers stay focused on shipping core features. Worth a 10-minute intro next Tuesday?",
    },
    signals: [
      { type: "Hiring Surge", detail: "+42 Platform Engineers hiring in Q3", time: "2h ago" },
      { type: "Production Tech Stack", detail: "Active stack: Kafka, Datadog, Snowflake", time: "5h ago" },
      { type: "Website Intent", detail: "3 visits to pricing & compliance documentation", time: "1d ago" },
    ],
    traceLog: [
      "[12:45:01] Ingested 42 platform engineering job posts from greenhouse.io/northstar",
      "[12:45:06] Verified decision-maker: Priya M. (VP Engineering, Platform)",
      "[12:45:11] Checked site intent: 3 visits to pricing & compliance documentation",
      "[12:45:16] Drafted personalized outreach referencing team growth",
      "[12:45:20] Paused in review queue: Awaiting sales rep approval before dispatch",
    ],
  },
  dataforge: {
    id: "dataforge",
    name: "DataForge Analytics",
    ticker: "DF",
    domain: "dataforge.ai",
    headcount: "480 employees",
    location: "San Francisco, US",
    industry: "Data Warehouse Telemetry",
    intentScore: 91,
    contact: {
      name: "Arjun K.",
      role: "Head of Infrastructure",
      email: "arjun.k@dataforge.ai",
      linkedin: "linkedin.com/in/arjun-dataforge",
    },
    stages: [
      {
        id: 1,
        title: "Researching account",
        actionLabel: "SERIES B MILESTONE",
        latency: "120ms",
        summary: "Announced $34M Series B round dedicated to distributed query governance.",
      },
      {
        id: 2,
        title: "Finding decision maker",
        actionLabel: "TECH LEAD CONFIRMED",
        latency: "240ms",
        summary: "Targeted Arjun K. who oversees infrastructure and cluster observability.",
      },
      {
        id: 3,
        title: "Analyzing intent",
        actionLabel: "WHITE PAPER DOWNLOAD",
        latency: "290ms",
        summary: "De-anonymized 4 visits from IP range reading enterprise security tiers.",
      },
      {
        id: 4,
        title: "Writing personalized message",
        actionLabel: "STAGED FOR REVIEW",
        latency: "390ms",
        summary: "Prepared personalized value memo focusing on query latency and data hygiene.",
      },
      {
        id: 5,
        title: "Queuing follow-up",
        actionLabel: "READY FOR HUBSPOT",
        latency: "Awaiting",
        summary: "Enqueued for HubSpot Enterprise sync upon rep sign-off.",
      },
    ],
    draft: {
      channel: "LinkedIn InMail · Direct Message",
      timestamp: "Today at 11:20 UTC",
      subject: "Query governance benchmarks following DataForge's Series B",
      body: "Arjun, congrats on the Series B milestone. Seeing your team's expansion into multi-region query telemetry, thought you might find our performance benchmark report relevant. Fritado gives infrastructure teams direct visibility into data hygiene and saves hours of manual debugging every week. Happy to share the report if helpful?",
    },
    signals: [
      { type: "Funding Event", detail: "$34M Series B announced for cluster expansion", time: "1d ago" },
      { type: "Leadership Update", detail: "Arjun promoted to Head of Infrastructure", time: "2w ago" },
      { type: "Website Intent", detail: "4 visits to enterprise security whitepaper", time: "3h ago" },
    ],
    traceLog: [
      "[11:20:04] Ingested Series B funding alert from SEC Form D filing ($34M)",
      "[11:20:10] Verified Arjun K. as primary technical stakeholder",
      "[11:20:15] Correlated 4 visits to enterprise compliance documentation",
      "[11:20:18] LinkedIn InMail draft prepared",
      "[11:20:22] Staged in review queue: Requires rep sign-off",
    ],
  },
  cloudsync: {
    id: "cloudsync",
    name: "CloudSync Labs",
    ticker: "CS",
    domain: "cloudsync.dev",
    headcount: "180 employees",
    location: "London, UK",
    industry: "Multi-Cloud Storage",
    intentScore: 76,
    contact: {
      name: "Sarah L.",
      role: "Director of DevOps",
      email: "sarah.l@cloudsync.dev",
      linkedin: "linkedin.com/in/sarah-cloudsync",
    },
    stages: [
      {
        id: 1,
        title: "Researching account",
        actionLabel: "OPERATOR RELEASE",
        latency: "160ms",
        summary: "Launched Kubernetes operator for multi-cloud storage synchronization.",
      },
      {
        id: 2,
        title: "Finding decision maker",
        actionLabel: "DEVOPS LEAD IDENTIFIED",
        latency: "310ms",
        summary: "Mapped Sarah L., Director of DevOps managing cluster deployments.",
      },
      {
        id: 3,
        title: "Analyzing intent",
        actionLabel: "LATENCY DOCS VISITED",
        latency: "260ms",
        summary: "2 sessions on replication latency benchmarks and storage sync guides.",
      },
      {
        id: 4,
        title: "Writing personalized message",
        actionLabel: "NURTURE SEQUENCE STAGED",
        latency: "440ms",
        summary: "Staged technical architecture comparison guide for gentle engagement.",
      },
      {
        id: 5,
        title: "Queuing follow-up",
        actionLabel: "NURTURE QUEUE",
        latency: "Awaiting",
        summary: "Routing to Nurture workflow pending weekly review.",
      },
    ],
    draft: {
      channel: "Email · Technical Memo",
      timestamp: "Today at 09:14 UTC",
      subject: "Architecture notes: multi-region replication at CloudSync",
      body: "Hi Sarah — noticed CloudSync just launched the Kubernetes operator for multi-cloud storage. When syncing storage across regions, keeping pipeline schemas consistent is usually where things break down. We put together a brief breakdown of how similar teams automate pipeline validation without slowing down deployments. Would love to send it over if you're interested.",
    },
    signals: [
      { type: "Product Launch", detail: "Kubernetes Operator v2.0 deployed", time: "3d ago" },
      { type: "Documentation Visit", detail: "2 sessions on replication latency benchmarks", time: "18h ago" },
    ],
    traceLog: [
      "[09:14:02] Monitored GitHub release: Kubernetes Operator v2.0",
      "[09:14:08] Matched contact: Sarah L. (Director of DevOps)",
      "[09:14:12] Checked engagement: 2 visits to replication benchmarks",
      "[09:14:16] Technical sequence staged for rep review",
    ],
  },
  nexagrowth: {
    id: "nexagrowth",
    name: "NexaGrowth Cloud",
    ticker: "NX",
    domain: "nexagrowth.io",
    headcount: "540 employees",
    location: "Austin, US",
    industry: "Cloud Cost Intelligence",
    intentScore: 89,
    contact: {
      name: "Vikram S.",
      role: "VP Growth & Operations",
      email: "vikram.s@nexagrowth.io",
      linkedin: "linkedin.com/in/vikram-nexa",
    },
    stages: [
      {
        id: 1,
        title: "Researching account",
        actionLabel: "140% YOY EXPANSION",
        latency: "135ms",
        summary: "Reported 140% YoY expansion with new enterprise procurement tier.",
      },
      {
        id: 2,
        title: "Finding decision maker",
        actionLabel: "GROWTH LEAD MAPPED",
        latency: "260ms",
        summary: "Identified Vikram S. overseeing B2B pipeline growth and automation.",
      },
      {
        id: 3,
        title: "Analyzing intent",
        actionLabel: "API DOCS VISITED",
        latency: "320ms",
        summary: "Multiple visits to API integration documentation and SLA contracts.",
      },
      {
        id: 4,
        title: "Writing personalized message",
        actionLabel: "EXECUTIVE INTRO STAGED",
        latency: "410ms",
        summary: "Drafted executive pitch highlighting pipeline velocity and CRM integration.",
      },
      {
        id: 5,
        title: "Queuing follow-up",
        actionLabel: "READY FOR CRM ROUTING",
        latency: "Awaiting",
        summary: "Staged for direct AE routing upon rep approval.",
      },
    ],
    draft: {
      channel: "Email · Executive Direct",
      timestamp: "Today at 08:30 UTC",
      subject: "Scaling outbound pipeline alongside NexaGrowth's 140% expansion",
      body: "Vikram — really impressive trajectory on NexaGrowth's enterprise tier. In high-velocity scaling phases, having SDRs spend half their day manually researching accounts usually throttles sales momentum. Fritado delivers verified buyer briefs and personalized drafts straight into HubSpot so your reps spend their time in conversations. Worth a 15-minute walkthrough this week?",
    },
    signals: [
      { type: "Revenue Growth", detail: "140% YoY enterprise customer increase", time: "4d ago" },
      { type: "API Evaluation", detail: "5 sessions on webhook & CRM integration APIs", time: "6h ago" },
    ],
    traceLog: [
      "[08:30:02] Verified 140% YoY enterprise revenue milestone",
      "[08:30:07] Matched buyer: Vikram S. (VP Growth & Operations)",
      "[08:30:12] Detected 5 visits to CRM integration guides",
      "[08:30:16] Staged draft outreach in CRM queue for rep sign-off",
    ],
  },
};

export const FritadoProductVisual: React.FC = () => {
  const [selectedAccountId, setSelectedAccountId] = useState<string>("northstar");
  const [selectedSourceId, setSelectedSourceId] = useState<string>("web");
  const [activeStepId, setActiveStepId] = useState<number>(4);
  const [queueFilter, setQueueFilter] = useState<"all" | "high" | "nurture">("all");
  const [mobileTab, setMobileTab] = useState<"discovery" | "intelligence" | "pipeline">("discovery");
  const [approvedAccounts, setApprovedAccounts] = useState<Record<string, boolean>>({});
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const goToNextStage = () => {
    setProgress(0);
    setMobileTab((curr) => {
      if (curr === "discovery") return "intelligence";
      if (curr === "intelligence") return "pipeline";
      return "discovery";
    });
  };

  const goToPrevStage = () => {
    setProgress(0);
    setMobileTab((curr) => {
      if (curr === "pipeline") return "intelligence";
      if (curr === "intelligence") return "discovery";
      return "pipeline";
    });
  };

  // Auto-play timer effect (6 seconds per stage)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNextStage();
          return 0;
        }
        return prev + (50 / 6000) * 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isAutoPlaying, mobileTab]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    const diffY = touchStartY - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        goToNextStage();
      } else {
        goToPrevStage();
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  const account = ACCOUNTS[selectedAccountId] || ACCOUNTS.northstar;

  const opportunitiesList = Object.values(ACCOUNTS).filter((acc) => {
    if (queueFilter === "high") return acc.intentScore >= 90;
    if (queueFilter === "nurture") return acc.intentScore < 90;
    return true;
  });

  return (
    <div className="w-full rounded-2xl border border-manuscriptAlpha-ink-15 bg-white shadow-[0_24px_72px_rgba(80,55,30,0.08)] overflow-hidden font-sans text-manuscript-ink">
      {/* ─── DESKTOP WORKSPACE (lg and above: 100% preserved) ─── */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:divide-x divide-manuscriptAlpha-ink-10 bg-manuscript-parchmentLight/30">
        {/* ─── PANEL 1: SOURCE DISCOVERY (01) ─── */}
        <div className="lg:col-span-4 p-5 sm:p-6 space-y-5 bg-manuscript-parchmentLight/50">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[11px] font-bold text-manuscript-copper uppercase tracking-wider">
              01 · ACCOUNT DISCOVERY
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-sans font-semibold bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/25">
              6 SOURCES ACTIVE
            </span>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-manuscript-ink tracking-tight">
              Find the right accounts
            </h3>
            <p className="text-xs text-manuscript-inkMuted mt-0.5">
              Continuous prospect discovery across live business data
            </p>
          </div>

          {/* Primary Ingestion Metric Card */}
          <div className="p-4 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-sm">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-manuscript-inkMuted font-medium">Prospects discovered</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-manuscript-copper">
                <TrendingUp size={13} />
                ↑ 196 today
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold font-sans text-manuscript-ink tracking-tight">
                1,884
              </span>
              <span className="text-xs text-manuscript-inkMuted">verified accounts</span>
            </div>
            <div className="mt-3 pt-3 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[11px] text-manuscript-inkMuted">
              <span>Coverage: 412 Job Openings · 582 Key Buyers · 162 Site Visitors</span>
            </div>
          </div>

          {/* Active Data Streams List */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-sans text-manuscript-inkMuted px-1 uppercase tracking-wider font-semibold">
              <span>ACTIVE DATA SOURCES</span>
              <span>CONFIDENCE</span>
            </div>

            {DISCOVERY_SOURCES.map((src, idx) => {
              const Icon = src.icon;
              const isSelected = selectedSourceId === src.id;
              return (
                <motion.button
                  key={src.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  type="button"
                  onClick={() => setSelectedSourceId(src.id)}
                  className={`group w-full text-left p-2.5 rounded-lg border transition-all duration-200 flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-white border-manuscript-copper shadow-[0_2px_14px_rgba(168,74,40,0.12)]"
                      : "bg-white/80 border-manuscriptAlpha-ink-10 hover:bg-white hover:border-manuscript-copper/40"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-[2px] ${
                        isSelected
                          ? "bg-manuscript-copper text-white"
                          : "bg-manuscript-parchmentLight text-manuscript-inkMuted"
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-manuscript-ink truncate">{src.name}</div>
                      <div className="text-[11px] text-manuscript-inkMuted truncate">{src.signalTag}</div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-[11px] font-mono font-bold text-manuscript-ink group-hover:text-manuscript-copper transition-colors">{src.confidence}</div>
                    <div className="text-[10px] text-manuscript-inkMuted font-sans">{src.records}</div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ─── PANEL 2: AI WORKFLOW & ACTION (02) ─── */}
        <div className="lg:col-span-4 p-5 sm:p-6 space-y-5 bg-white">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[11px] font-bold text-manuscript-copper uppercase tracking-wider">
              02 · INTELLIGENCE & OUTREACH
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-sans font-semibold bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/25">
              STEP {activeStepId} OF 5
            </span>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-manuscript-ink tracking-tight">
              From signal to personalized message
            </h3>
            <p className="text-xs text-manuscript-inkMuted mt-0.5">
              Deep background research and rep-approved drafts
            </p>
          </div>

          {/* 4 Pipeline Velocity Metrics */}
          <div className="grid grid-cols-4 gap-2 p-2.5 rounded-xl bg-manuscript-parchmentLight/50 border border-manuscriptAlpha-ink-10">
            <div className="text-center">
              <div className="text-[10px] font-sans text-manuscript-inkMuted uppercase font-semibold">Accounts</div>
              <div className="text-xs sm:text-sm font-bold font-sans text-manuscript-ink mt-0.5">1,884</div>
            </div>
            <div className="text-center border-l border-manuscriptAlpha-ink-10">
              <div className="text-[10px] font-sans text-manuscript-inkMuted uppercase font-semibold">In Review</div>
              <div className="text-xs sm:text-sm font-bold font-sans text-manuscript-copper mt-0.5">62</div>
            </div>
            <div className="text-center border-l border-manuscriptAlpha-ink-10">
              <div className="text-[10px] font-sans text-manuscript-inkMuted uppercase font-semibold">Follow-ups</div>
              <div className="text-xs sm:text-sm font-bold font-sans text-manuscript-ink mt-0.5">39</div>
            </div>
            <div className="text-center border-l border-manuscriptAlpha-ink-10">
              <div className="text-[10px] font-sans text-manuscript-inkMuted uppercase font-semibold">High Fit</div>
              <div className="text-xs sm:text-sm font-bold font-sans text-manuscript-copper mt-0.5">28</div>
            </div>
          </div>

          {/* Active Target Account Header Card */}
          <div className="p-3.5 rounded-xl bg-manuscript-parchmentLight/60 border border-manuscriptAlpha-ink-15">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-manuscript-copper/10 border border-manuscript-copper/25 text-manuscript-copper flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {account.ticker}
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-manuscript-inkMuted block font-semibold">
                    ACTIVE ACCOUNT RESEARCH
                  </span>
                  <h4 className="text-sm font-bold text-manuscript-ink mt-0.5">
                    {account.name}
                  </h4>
                  <p className="text-[11px] text-manuscript-inkMuted">
                    {account.location} · {account.headcount} · {account.industry}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-sans font-bold bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/25 shrink-0">
                Fit · {account.intentScore}%
              </span>
            </div>
          </div>

          {/* Interactive 5-Step Execution Trace */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-sans text-manuscript-inkMuted px-1 mb-1 font-semibold uppercase tracking-wider">
              RESEARCH &amp; QUALIFICATION TIMELINE:
            </div>
            {account.stages.map((st) => {
              const isActive = activeStepId === st.id;
              const isPast = st.id < activeStepId;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setActiveStepId(st.id)}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-between gap-3 ${
                    isActive
                      ? "bg-manuscript-parchmentLight border-manuscript-copper shadow-[0_2px_12px_rgba(168,74,40,0.12)] ring-1 ring-manuscript-copper/25"
                      : isPast
                        ? "bg-white border-manuscriptAlpha-ink-10 hover:bg-manuscript-parchmentLight/50"
                        : "bg-white/60 border-manuscriptAlpha-ink-10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-all duration-300 ${
                        isPast
                          ? "bg-emerald-600 text-white"
                          : isActive
                            ? "bg-manuscript-copper text-white shadow-xs animate-pulse"
                            : "bg-manuscript-parchmentLight text-manuscript-inkMuted"
                      }`}
                    >
                      {isPast ? <Check size={11} strokeWidth={2.5} /> : st.id}
                    </div>
                    <div className="min-w-0">
                      <div className={`text-xs ${isActive ? "text-manuscript-ink font-semibold" : isPast ? "text-manuscript-ink" : "text-manuscript-inkMuted"}`}>
                        {st.title}
                      </div>
                      <div className="text-[11px] text-manuscript-inkMuted truncate">{st.summary}</div>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono shrink-0 transition-colors ${
                      isActive ? "text-manuscript-copper font-bold" : "text-manuscript-inkMuted"
                    }`}
                  >
                    {isPast ? "Done" : st.latency}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── PANEL 3: PIPELINE QUALIFICATION (03) ─── */}
        <div className="lg:col-span-4 p-5 sm:p-6 space-y-5 bg-manuscript-parchmentLight/50">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[11px] font-bold text-manuscript-copper uppercase tracking-wider">
              03 · QUALIFICATION
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-sans font-semibold bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/25">
              35 REVIEW-READY LEADS
            </span>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-manuscript-ink tracking-tight">
              Sales-ready opportunities
            </h3>
            <p className="text-xs text-manuscript-inkMuted mt-0.5">
              Verified accounts ready for your sales reps to contact
            </p>
          </div>

          {/* Main Opportunities Metric Card */}
          <div className="p-4 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-sm">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-manuscript-inkMuted font-medium">Review-ready pipeline</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-manuscript-copper">
                <TrendingUp size={13} />
                ↑ 13 today
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold font-sans text-manuscript-ink tracking-tight">
                35
              </span>
              <span className="text-xs text-manuscript-inkMuted">review-ready accounts</span>
            </div>
            <div className="mt-3 pt-3 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[11px] text-manuscript-inkMuted">
              <span>Estimated Pipeline: $420,000 ARR</span>
              <span className="text-manuscript-ink font-mono font-medium">18.6% meeting rate</span>
            </div>
          </div>

          {/* Animated Pipeline Stage Velocity Bars (Animates Once: 700-900ms) */}
          <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-[10px] font-sans font-semibold text-manuscript-inkMuted uppercase tracking-wider">
              <span>PIPELINE STAGE VELOCITY</span>
              <span className="font-mono text-manuscript-copper font-bold">1-TIME AUDIT</span>
            </div>
            <div className="grid grid-cols-5 gap-2 items-end h-16 pt-1 px-1">
              {[
                { stage: "Discovered", count: "1,884", pct: "100%", color: "bg-manuscript-inkMuted/30" },
                { stage: "Researched", count: "840", pct: "70%", color: "bg-manuscript-inkMuted/45" },
                { stage: "Intent", count: "312", pct: "48%", color: "bg-manuscript-copper/50" },
                { stage: "Staged", count: "62", pct: "32%", color: "bg-manuscript-copper/80" },
                { stage: "Qualified", count: "35", pct: "22%", color: "bg-manuscript-copper" },
              ].map((bar, bIdx) => (
                <div key={bar.stage} className="flex flex-col items-center h-full justify-end gap-1">
                  <div className="text-[9px] font-mono font-bold text-manuscript-ink">{bar.count}</div>
                  <div className="w-full bg-manuscript-parchmentLight rounded-t h-10 relative overflow-hidden flex items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: bar.pct }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.15 + bIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-full rounded-t ${bar.color}`}
                    />
                  </div>
                  <div className="text-[8px] font-sans text-manuscript-inkMuted truncate w-full text-center">{bar.stage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline Queue Table */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-sans text-manuscript-inkMuted font-semibold uppercase tracking-wider">
                PIPELINE QUEUE · CLICK ROW TO AUDIT
              </div>

              <div className="flex items-center gap-1 text-[10px]">
                <button
                  type="button"
                  onClick={() => setQueueFilter("all")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    queueFilter === "all"
                      ? "bg-manuscript-copper text-white font-semibold shadow-2xs"
                      : "text-manuscript-inkMuted hover:text-manuscript-ink bg-white border border-manuscriptAlpha-ink-10"
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setQueueFilter("high")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    queueFilter === "high"
                      ? "bg-manuscript-copper text-white font-semibold shadow-2xs"
                      : "text-manuscript-inkMuted hover:text-manuscript-ink bg-white border border-manuscriptAlpha-ink-10"
                  }`}
                >
                  High Intent
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-manuscriptAlpha-ink-15 bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-[10px] font-sans text-manuscript-inkMuted border-b border-manuscriptAlpha-ink-10 uppercase tracking-wider font-semibold bg-manuscript-parchmentLight/60">
                    <th className="py-2.5 px-3 font-medium">COMPANY</th>
                    <th className="py-2.5 px-2 font-medium">CONTACT</th>
                    <th className="py-2.5 px-2 font-medium">FIT</th>
                    <th className="py-2.5 px-3 font-medium text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-manuscriptAlpha-ink-10">
                  {opportunitiesList.map((opp, oIdx) => {
                    const isSelected = selectedAccountId === opp.id;
                    return (
                      <motion.tr
                        key={opp.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: oIdx * 0.05 }}
                        onClick={() => setSelectedAccountId(opp.id)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? "bg-manuscript-parchmentLight"
                            : "hover:bg-manuscript-parchmentLight/40"
                        }`}
                      >
                        <td className="py-2.5 px-3 font-medium truncate max-w-[120px]">
                          <div className="text-manuscript-ink font-semibold">{opp.name}</div>
                          <span className="block text-[10px] text-manuscript-inkMuted font-mono">{opp.domain}</span>
                        </td>
                        <td className="py-2.5 px-2 text-manuscript-inkSoft truncate max-w-[90px]">
                          <div>{opp.contact.name}</div>
                          <span className="block text-[10px] text-manuscript-inkMuted truncate">{opp.contact.role.split(" ")[0]}</span>
                        </td>
                        <td className="py-2.5 px-2">
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-manuscript-copper">
                            {opp.intentScore}%
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-sans font-semibold ${
                              opp.intentScore >= 90
                                ? "bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/25"
                                : "bg-manuscript-parchmentLight text-manuscript-ink border border-manuscriptAlpha-ink-10"
                            }`}
                          >
                            {opp.intentScore >= 90 ? "Qualified" : "Nurturing"}
                          </span>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* CRM Audit Verification Strip */}
          <div className="p-3 rounded-lg bg-white border border-manuscriptAlpha-ink-15 flex items-center justify-between text-[11px] text-manuscript-inkMuted shadow-2xs">
            <span className="flex items-center gap-1.5 text-manuscript-ink font-medium">
              <ShieldCheck size={14} className="text-manuscript-copper" />
              Two-way CRM Sync (Salesforce &amp; HubSpot)
            </span>
            <span className="font-sans font-semibold text-manuscript-copper uppercase tracking-wider">
              REP-APPROVED HANDOFF
            </span>
          </div>
        </div>
      </div>

      {/* ─── INTEGRATED PROCESS RAIL (Section 17: Discover, Research, Personalize, Nurture, Engage, Qualify) ─── */}
      <div className="hidden lg:flex items-center justify-between px-6 py-3.5 bg-manuscript-parchment border-t border-manuscriptAlpha-ink-15">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-manuscript-inkMuted">
            PROCESS RAIL:
          </span>
        </div>

        <div className="flex items-center gap-2">
          {[
            { id: "discover", label: "01 Discover" },
            { id: "research", label: "02 Research" },
            { id: "personalize", label: "03 Personalize" },
            { id: "nurture", label: "04 Nurture" },
            { id: "engage", label: "05 Engage" },
            { id: "qualify", label: "06 Qualify" },
          ].map((railStep, rIdx) => {
            const isCurrent = 
              (rIdx === 0 && selectedSourceId !== "" && activeStepId === 1) ||
              (rIdx === 1 && (activeStepId === 2 || activeStepId === 3)) ||
              (rIdx === 2 && activeStepId === 4) ||
              (rIdx === 3 && activeStepId === 5) ||
              (rIdx === 4 && activeStepId === 4) ||
              (rIdx === 5 && selectedAccountId !== "");

            const isPast = 
              (rIdx === 0 && activeStepId >= 2) ||
              (rIdx === 1 && activeStepId >= 4) ||
              (rIdx === 2 && activeStepId >= 5);

            return (
              <div
                key={railStep.id}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans transition-all duration-300 ${
                  isCurrent
                    ? "bg-manuscript-copper text-white font-bold shadow-xs"
                    : isPast
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-medium"
                      : "bg-white/80 text-manuscript-inkMuted border border-manuscriptAlpha-ink-10 hover:text-manuscript-ink"
                }`}
              >
                {isPast ? <Check size={11} className="text-emerald-600" /> : null}
                <span>{railStep.label}</span>
              </div>
            );
          })}
        </div>

        <div className="text-[11px] font-sans text-manuscript-inkMuted flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
          <span className="font-semibold text-manuscript-copper">PRODUCT PREVIEW</span>
          <span>·</span>
          <span>DEMO DATA</span>
        </div>
      </div>

      {/* ─── MOBILE WORKSPACE (below lg: noise-free, touch-first, zero excessive scrolling) ─── */}
      <div 
        className="block lg:hidden bg-manuscript-parchmentLight/30"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Stories-Style 3-Segment Progress Bar */}
        <div className="px-4 pt-3 pb-1 bg-white">
          <div className="grid grid-cols-3 gap-1.5">
            {/* Segment 01 */}
            <div className="h-1 rounded-full bg-manuscript-parchment overflow-hidden border border-manuscriptAlpha-ink-10">
              <div 
                className="h-full bg-manuscript-copper transition-all duration-75"
                style={{
                  width: mobileTab === "discovery" 
                    ? `${progress}%` 
                    : (mobileTab === "intelligence" || mobileTab === "pipeline" ? "100%" : "0%")
                }}
              />
            </div>
            {/* Segment 02 */}
            <div className="h-1 rounded-full bg-manuscript-parchment overflow-hidden border border-manuscriptAlpha-ink-10">
              <div 
                className="h-full bg-manuscript-copper transition-all duration-75"
                style={{
                  width: mobileTab === "intelligence" 
                    ? `${progress}%` 
                    : (mobileTab === "pipeline" ? "100%" : "0%")
                }}
              />
            </div>
            {/* Segment 03 */}
            <div className="h-1 rounded-full bg-manuscript-parchment overflow-hidden border border-manuscriptAlpha-ink-10">
              <div 
                className="h-full bg-manuscript-copper transition-all duration-75"
                style={{
                  width: mobileTab === "pipeline" ? `${progress}%` : "0%"
                }}
              />
            </div>
          </div>
        </div>

        {/* Top Control Bar & Segmented Switcher */}
        <div className="px-4 py-3 bg-white border-b border-manuscriptAlpha-ink-10 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-manuscript-copper animate-pulse" />
              <span className="font-sans font-bold text-manuscript-copper text-[11px] uppercase tracking-wider">
                INTERACTIVE TOUR
              </span>
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold border flex items-center gap-1 bg-white border-manuscriptAlpha-ink-15 text-manuscript-ink hover:text-manuscript-copper transition-colors"
                title={isAutoPlaying ? "Pause auto-tour" : "Resume auto-tour"}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause size={10} className="text-manuscript-copper" />
                    <span>Auto</span>
                  </>
                ) : (
                  <>
                    <Play size={10} className="text-manuscript-copper" />
                    <span>Paused</span>
                  </>
                )}
              </button>
            </div>
            <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-manuscript-parchment border border-manuscriptAlpha-ink-15 text-manuscript-inkMuted uppercase tracking-wider">
              STAGE {mobileTab === "discovery" ? "01" : mobileTab === "intelligence" ? "02" : "03"} / 03
            </span>
          </div>

          {/* 3-Stage Segmented Pills */}
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-manuscript-parchment border border-manuscriptAlpha-ink-15">
            <button
              type="button"
              onClick={() => {
                setMobileTab("discovery");
                setProgress(0);
              }}
              className={`py-2 px-1 rounded-lg text-xs font-sans font-bold transition-all flex items-center justify-center gap-1 ${
                mobileTab === "discovery"
                  ? "bg-manuscript-copper text-white shadow-xs"
                  : "text-manuscript-inkMuted hover:text-manuscript-ink"
              }`}
            >
              <span>01 Discover</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono ${
                mobileTab === "discovery" ? "bg-white/20 text-white" : "bg-manuscriptAlpha-ink-10 text-manuscript-inkMuted"
              }`}>
                6
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileTab("intelligence");
                setProgress(0);
              }}
              className={`py-2 px-1 rounded-lg text-xs font-sans font-bold transition-all flex items-center justify-center gap-1 ${
                mobileTab === "intelligence"
                  ? "bg-manuscript-copper text-white shadow-xs"
                  : "text-manuscript-inkMuted hover:text-manuscript-ink"
              }`}
            >
              <span>02 Outreach</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono ${
                mobileTab === "intelligence" ? "bg-white/20 text-white" : "bg-manuscriptAlpha-ink-10 text-manuscript-inkMuted"
              }`}>
                {account.intentScore}%
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileTab("pipeline");
                setProgress(0);
              }}
              className={`py-2 px-1 rounded-lg text-xs font-sans font-bold transition-all flex items-center justify-center gap-1 ${
                mobileTab === "pipeline"
                  ? "bg-manuscript-copper text-white shadow-xs"
                  : "text-manuscript-inkMuted hover:text-manuscript-ink"
              }`}
            >
              <span>03 Pipeline</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono ${
                mobileTab === "pipeline" ? "bg-white/20 text-white" : "bg-manuscriptAlpha-ink-10 text-manuscript-inkMuted"
              }`}>
                35
              </span>
            </button>
          </div>

          {/* Touch Gesture Hint Banner */}
          <div className="flex items-center justify-between text-[10px] text-manuscript-inkMuted px-1 font-sans">
            <span className="flex items-center gap-1 text-manuscript-copper/80">
              <ChevronLeft size={11} />
              <span>Swipe left / right or tap Next</span>
              <ChevronRight size={11} />
            </span>
            <span className="text-[9px] text-manuscript-inkMuted/60 uppercase">
              Touch to explore
            </span>
          </div>
        </div>

        {/* ─── STAGE 01: DISCOVERY (Noise-Free) ─── */}
        {mobileTab === "discovery" && (
          <div className="p-4 space-y-3.5">
            {/* Clean Metrics Summary */}
            <div className="p-4 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-manuscript-inkMuted">Prospects Discovered</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-manuscript-copper bg-manuscript-copper/10 px-2 py-0.5 rounded-full border border-manuscript-copper/20">
                  <TrendingUp size={11} />
                  ↑ 196 today
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-sans text-manuscript-ink tracking-tight">1,884</span>
                <span className="text-xs text-manuscript-inkMuted">verified target accounts</span>
              </div>
              <div className="text-[11px] text-manuscript-inkMuted pt-2 border-t border-manuscriptAlpha-ink-10">
                Coverage: 412 Job Openings · 582 Key Buyers · 162 Site Visitors
              </div>
            </div>

            {/* 6 Signal Sources (Compact 2-Column Grid) */}
            <div className="space-y-2">
              <div className="text-[11px] font-sans text-manuscript-inkMuted uppercase tracking-wider font-semibold px-1">
                Active Signal Sources (Tap to inspect)
              </div>

              <div className="grid grid-cols-2 gap-2">
                {DISCOVERY_SOURCES.map((src) => {
                  const Icon = src.icon;
                  const isSelected = selectedSourceId === src.id;
                  return (
                    <button
                      key={src.id}
                      type="button"
                      onClick={() => setSelectedSourceId(src.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-[88px] ${
                        isSelected
                          ? "bg-white border-manuscript-copper ring-2 ring-manuscript-copper/20 shadow-xs"
                          : "bg-white/90 border-manuscriptAlpha-ink-10 hover:border-manuscript-copper/40"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-manuscript-copper text-white" : "bg-manuscript-parchment text-manuscript-ink"
                        }`}>
                          <Icon size={13} />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-manuscript-copper">
                          {src.confidence}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-manuscript-ink truncate leading-tight">
                          {src.name}
                        </div>
                        <div className="text-[10px] text-manuscript-inkMuted truncate mt-0.5">
                          {src.records}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Trigger Preview Chip */}
            {(() => {
              const activeSrc = DISCOVERY_SOURCES.find((s) => s.id === selectedSourceId) || DISCOVERY_SOURCES[0];
              return (
                <div className="p-3 rounded-xl bg-white border border-manuscriptAlpha-ink-15 flex items-center justify-between gap-3 text-xs shadow-2xs">
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-manuscript-copper font-bold block">
                      Active Trigger · {activeSrc.category}
                    </span>
                    <span className="font-semibold text-manuscript-ink text-xs truncate block">
                      {activeSrc.signalTag}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-manuscript-inkMuted shrink-0">
                    {activeSrc.confidence}
                  </span>
                </div>
              );
            })()}

            {/* Advance to Tab 2 CTA */}
            <button
              type="button"
              onClick={() => setMobileTab("intelligence")}
              className="w-full py-3 px-4 rounded-xl bg-manuscript-ink text-white hover:bg-manuscript-copper transition-colors text-xs font-bold font-sans uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Inspect Account Outreach</span>
              <ArrowRight size={13} />
            </button>
          </div>
        )}

        {/* ─── STAGE 02: OUTREACH & INTELLIGENCE (Noise-Free) ─── */}
        {mobileTab === "intelligence" && (
          <div className="p-4 space-y-3.5">
            {/* Account Quick Selector Pills */}
            <div>
              <div className="text-[11px] font-sans text-manuscript-inkMuted uppercase tracking-wider font-semibold px-1 mb-1.5">
                Target Accounts (Tap to switch):
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {Object.values(ACCOUNTS).map((acc) => {
                  const isSelected = selectedAccountId === acc.id;
                  return (
                    <button
                      key={acc.id}
                      type="button"
                      onClick={() => setSelectedAccountId(acc.id)}
                      className={`shrink-0 py-1.5 px-3 rounded-xl border text-xs font-sans transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-manuscript-ink text-white border-manuscript-ink shadow-xs"
                          : "bg-white text-manuscript-ink border-manuscriptAlpha-ink-15 hover:border-manuscript-copper"
                      }`}
                    >
                      <span className="font-semibold">{acc.name.split(" ")[0]}</span>
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full ${
                        isSelected ? "bg-manuscript-copper text-white" : "bg-manuscript-parchment text-manuscript-copper"
                      }`}>
                        {acc.intentScore}%
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Target Account Snapshot */}
            <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-2xs space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-manuscript-ink truncate">
                      {account.name}
                    </span>
                    <span className="text-[10px] font-mono text-manuscript-inkMuted">
                      ({account.domain})
                    </span>
                  </div>
                  <p className="text-[11px] text-manuscript-inkMuted mt-0.5">
                    {account.location} · {account.headcount} · {account.industry}
                  </p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/25 shrink-0">
                  Fit {account.intentScore}%
                </span>
              </div>

              {/* Verified Buyer Contact */}
              <div className="p-2 rounded-lg bg-manuscript-parchmentLight/80 border border-manuscriptAlpha-ink-10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-6 h-6 rounded-full bg-manuscript-copper text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                    {account.contact.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-manuscript-ink block truncate">{account.contact.name}</span>
                    <span className="text-[10px] text-manuscript-inkMuted block truncate">{account.contact.role}</span>
                  </div>
                </div>
                <span className="text-[10px] font-sans font-bold text-manuscript-copper bg-manuscript-copper/10 px-2 py-0.5 rounded-full border border-manuscript-copper/20 shrink-0">
                  Verified Buyer
                </span>
              </div>
            </div>

            {/* Compact 5-Step Progress Stepper */}
            <div className="p-3 rounded-xl bg-white border border-manuscriptAlpha-ink-15 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-sans text-manuscript-inkMuted uppercase tracking-wider font-semibold">
                <span>Execution Timeline</span>
                <span className="text-manuscript-copper font-bold">Step {activeStepId} of 5</span>
              </div>

              <div className="grid grid-cols-5 gap-1">
                {account.stages.map((st) => {
                  const isActive = activeStepId === st.id;
                  const isPast = st.id < activeStepId;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setActiveStepId(st.id)}
                      className={`py-1.5 px-0.5 rounded-lg border text-center transition-all flex flex-col items-center gap-0.5 ${
                        isActive
                          ? "bg-manuscript-copper text-white border-manuscript-copper shadow-xs font-bold"
                          : isPast
                            ? "bg-manuscript-copper/10 text-manuscript-copper border-manuscript-copper/25"
                            : "bg-manuscript-parchment text-manuscript-inkMuted border-manuscriptAlpha-ink-10"
                      }`}
                    >
                      <span className="text-[10px] font-mono">
                        {isPast ? "✓" : `0${st.id}`}
                      </span>
                      <span className="text-[8px] uppercase tracking-tighter truncate w-full">
                        {st.title.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage 1-line event summary */}
              {(() => {
                const activeStage = account.stages.find((s) => s.id === activeStepId) || account.stages[3];
                return (
                  <div className="p-2 rounded-lg bg-manuscript-parchmentLight/60 border border-manuscriptAlpha-ink-10 text-xs">
                    <div className="flex items-center justify-between font-sans text-[10px] text-manuscript-copper font-bold uppercase mb-0.5">
                      <span>{activeStage.actionLabel}</span>
                      <span className="font-mono text-manuscript-inkMuted">{activeStage.latency}</span>
                    </div>
                    <p className="text-manuscript-ink font-manuscriptBody text-xs leading-relaxed">
                      {activeStage.summary}
                    </p>
                  </div>
                );
              })()}
            </div>

            {/* Staged Cold Outreach Preview Card */}
            <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between text-xs border-b border-manuscriptAlpha-ink-10 pb-2">
                <div className="flex items-center gap-1.5 font-bold font-sans text-manuscript-ink">
                  <Mail size={13} className="text-manuscript-copper" />
                  <span>Personalized Email Staged</span>
                </div>
                <span className="text-[10px] font-sans font-bold text-manuscript-copper bg-manuscript-copper/10 px-2 py-0.5 rounded border border-manuscript-copper/20">
                  Rep Review Gate
                </span>
              </div>

              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-manuscript-inkMuted block font-semibold">
                  Subject:
                </span>
                <h5 className="text-xs font-bold text-manuscript-ink mt-0.5">
                  {account.draft.subject}
                </h5>
              </div>

              <div className="p-2.5 rounded-lg bg-manuscript-parchmentLight/50 border border-manuscriptAlpha-ink-10 text-xs text-manuscript-ink leading-relaxed font-manuscriptBody">
                {account.draft.body}
              </div>

              {/* One-Tap Rep Approval Button with kinetic pulse cue */}
              <button
                type="button"
                onClick={() => {
                  setApprovedAccounts((prev) => ({ ...prev, [account.id]: !prev[account.id] }));
                  setIsAutoPlaying(false);
                }}
                className={`w-full py-2.5 px-4 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  approvedAccounts[account.id]
                    ? "bg-manuscript-copper text-white shadow-xs"
                    : "bg-manuscript-ink text-white hover:bg-manuscript-copper shadow-sm ring-2 ring-manuscript-copper/40 animate-pulse"
                }`}
              >
                {approvedAccounts[account.id] ? (
                  <>
                    <Check size={14} />
                    <span>Approved &amp; Pushed to CRM</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={14} className="text-manuscript-copper" />
                    <span>Approve &amp; Sync to CRM</span>
                  </>
                )}
              </button>
            </div>

            {/* Advance to Tab 3 CTA */}
            <button
              type="button"
              onClick={() => setMobileTab("pipeline")}
              className="w-full py-2.5 px-4 rounded-xl bg-manuscript-parchment border border-manuscriptAlpha-ink-15 text-manuscript-ink hover:text-manuscript-copper transition-colors text-xs font-bold font-sans uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>View Review-Ready Pipeline (35)</span>
              <ChevronRight size={13} />
            </button>
          </div>
        )}

        {/* ─── STAGE 03: PIPELINE (No Clunky Horizontal Table) ─── */}
        {mobileTab === "pipeline" && (
          <div className="p-4 space-y-3.5">
            {/* Metric Summary Card */}
            <div className="p-4 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-manuscript-inkMuted">Review-ready pipeline</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-manuscript-copper bg-manuscript-copper/10 px-2 py-0.5 rounded-full border border-manuscript-copper/20">
                  <TrendingUp size={11} />
                  ↑ 13 today
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-sans text-manuscript-ink tracking-tight">35</span>
                <span className="text-xs text-manuscript-inkMuted">qualified accounts</span>
              </div>
              <div className="border-t border-manuscriptAlpha-ink-10 pt-2 flex items-center justify-between text-xs text-manuscript-inkSoft font-sans">
                <span>Est. Pipeline: <strong className="text-manuscript-ink font-semibold">$420,000 ARR</strong></span>
                <span>Meeting rate: <strong className="text-manuscript-copper font-bold font-mono">18.6%</strong></span>
              </div>
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-sans text-manuscript-inkMuted uppercase tracking-wider font-semibold">
                Accounts ({opportunitiesList.length})
              </span>
              <div className="flex items-center gap-1 text-xs">
                <button
                  type="button"
                  onClick={() => setQueueFilter("all")}
                  className={`px-2.5 py-1 rounded-lg font-sans text-xs transition-colors ${
                    queueFilter === "all"
                      ? "bg-manuscript-copper text-white font-bold shadow-2xs"
                      : "text-manuscript-inkMuted bg-white border border-manuscriptAlpha-ink-10"
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setQueueFilter("high")}
                  className={`px-2.5 py-1 rounded-lg font-sans text-xs transition-colors ${
                    queueFilter === "high"
                      ? "bg-manuscript-copper text-white font-bold shadow-2xs"
                      : "text-manuscript-inkMuted bg-white border border-manuscriptAlpha-ink-10"
                  }`}
                >
                  High Fit
                </button>
              </div>
            </div>

            {/* Mobile-Friendly Account Cards */}
            <div className="space-y-2">
              {opportunitiesList.map((opp) => {
                const isSelected = selectedAccountId === opp.id;
                const isApproved = approvedAccounts[opp.id];
                return (
                  <div
                    key={opp.id}
                    onClick={() => setSelectedAccountId(opp.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white border-manuscript-copper ring-1 ring-manuscript-copper/25 shadow-xs"
                        : "bg-white/95 border-manuscriptAlpha-ink-15 hover:border-manuscript-copper/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-manuscript-copper/10 border border-manuscript-copper/25 text-manuscript-copper flex items-center justify-center font-bold text-xs shrink-0">
                          {opp.ticker}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-xs text-manuscript-ink truncate">
                            {opp.name}
                          </div>
                          <div className="text-[10px] text-manuscript-inkMuted font-mono truncate">
                            {opp.domain}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0 flex flex-col items-end gap-1">
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/25">
                          {opp.intentScore}% Fit
                        </span>
                        <span className={`text-[9px] font-sans font-semibold px-1.5 py-0.5 rounded ${
                          isApproved
                            ? "bg-manuscript-copper text-white"
                            : opp.intentScore >= 90
                              ? "bg-manuscript-parchment text-manuscript-copper border border-manuscript-copper/30"
                              : "bg-manuscript-parchmentLight text-manuscript-inkMuted"
                        }`}>
                          {isApproved ? "✓ Synced" : opp.intentScore >= 90 ? "Qualified" : "Nurturing"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[11px] gap-2">
                      <span className="text-manuscript-inkSoft truncate min-w-0">
                        Buyer: <strong className="text-manuscript-ink font-semibold">{opp.contact.name}</strong> ({opp.contact.role.split(" ")[0]})
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAccountId(opp.id);
                          setMobileTab("intelligence");
                        }}
                        className="font-bold text-manuscript-copper hover:underline inline-flex items-center gap-0.5 shrink-0 ml-2 text-xs"
                      >
                        <span>Draft</span>
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CRM Verification Strip */}
            <div className="p-3 rounded-xl bg-white border border-manuscriptAlpha-ink-15 flex items-center justify-between text-xs shadow-2xs">
              <span className="flex items-center gap-1.5 text-manuscript-ink font-medium">
                <ShieldCheck size={14} className="text-manuscript-copper shrink-0" />
                <span>Two-way CRM Sync (Salesforce &amp; HubSpot)</span>
              </span>
              <span className="font-sans font-bold text-manuscript-copper text-[10px] uppercase tracking-wider shrink-0">
                VERIFIED
              </span>
            </div>
          </div>
        )}

        {/* Sticky Bottom Thumb-Zone Guidance Bar */}
        <div className="sticky bottom-0 z-20 px-4 py-3 bg-white/95 backdrop-blur-md border-t border-manuscriptAlpha-ink-15 flex items-center justify-between gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
          {/* Step Dots & Prompt */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              {(["discovery", "intelligence", "pipeline"] as const).map((tab, idx) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setMobileTab(tab);
                    setProgress(0);
                  }}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    mobileTab === tab
                      ? "w-5 bg-manuscript-copper"
                      : "w-2 bg-manuscriptAlpha-ink-20 hover:bg-manuscript-copper/50"
                  }`}
                  aria-label={`Go to stage ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[11px] font-sans font-medium text-manuscript-inkMuted truncate">
              {mobileTab === "discovery" && "1/3: 6 live data feeds"}
              {mobileTab === "intelligence" && "2/3: 1-click rep review"}
              {mobileTab === "pipeline" && "3/3: 35 qualified deals"}
            </span>
          </div>

          {/* Next / Loop Stage Button */}
          <button
            type="button"
            onClick={goToNextStage}
            className="shrink-0 py-1.5 px-3.5 rounded-xl bg-manuscript-copper text-white hover:bg-manuscript-copperLight transition-all text-xs font-bold font-sans uppercase tracking-wider flex items-center gap-1 shadow-xs active:scale-95"
          >
            <span>{mobileTab === "pipeline" ? "Loop ↺" : "Next →"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FritadoProductVisual;
