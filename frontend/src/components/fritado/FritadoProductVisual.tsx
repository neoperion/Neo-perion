import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Building,
  UserCheck,
  TrendingUp,
  ArrowRight,
  Mail,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

/* ─────────────────────────────────────────────────
   DATA — kept lean, only what the UI actually shows
   ───────────────────────────────────────────────── */

const SOURCES = [
  { icon: Globe,     label: "Job Boards & Hiring",  count: "412 accounts",  tag: "+42 engineering roles" },
  { icon: Building,  label: "Tech Stack Analysis",  count: "328 stacks",    tag: "AWS · Kafka · Datadog" },
  { icon: UserCheck, label: "Decision-Maker Maps",  count: "582 buyers",    tag: "VP & Director level" },
];

interface Account {
  id: string;
  name: string;
  initials: string;
  location: string;
  headcount: string;
  fit: number;
  contact: { name: string; role: string };
  draft: { subject: string; preview: string };
  signal: string;
}

const ACCOUNTS: Account[] = [
  {
    id: "northstar",
    name: "Northstar Systems",
    initials: "NS",
    location: "Bengaluru, IN",
    headcount: "320",
    fit: 94,
    contact: { name: "Priya M.", role: "VP Engineering" },
    draft: {
      subject: "Priya, quick question on scaling Northstar's 42 new engineering roles",
      preview: "Saw Northstar is adding 40+ engineers to the platform team this quarter. When teams expand this fast, keeping data verification clean usually becomes a bottleneck…",
    },
    signal: "+42 platform engineering hires",
  },
  {
    id: "dataforge",
    name: "DataForge Analytics",
    initials: "DF",
    location: "San Francisco, US",
    headcount: "480",
    fit: 91,
    contact: { name: "Arjun K.", role: "Head of Infrastructure" },
    draft: {
      subject: "Query governance benchmarks following DataForge's Series B",
      preview: "Congrats on the Series B. Seeing your team's expansion into multi-region query telemetry, thought you might find our benchmark report relevant…",
    },
    signal: "$34M Series B announced",
  },
  {
    id: "cloudsync",
    name: "CloudSync Labs",
    initials: "CS",
    location: "London, UK",
    headcount: "180",
    fit: 76,
    contact: { name: "Sarah L.", role: "Director of DevOps" },
    draft: {
      subject: "Architecture notes: multi-region replication at CloudSync",
      preview: "Noticed CloudSync just launched the Kubernetes operator for multi-cloud storage. When syncing across regions, keeping pipeline schemas consistent is where things break…",
    },
    signal: "K8s Operator v2.0 launch",
  },
];

/* ─────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────── */

export const FritadoProductVisual: React.FC = () => {
  const [activeAccount, setActiveAccount] = useState(0);
  const [mobileStage, setMobileStage] = useState<0 | 1 | 2>(0);

  // Gentle auto-rotate accounts every 5s on desktop
  useEffect(() => {
    const t = setInterval(() => setActiveAccount((p) => (p + 1) % ACCOUNTS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const account = ACCOUNTS[activeAccount];

  const stageLabels = ["Discover", "Research & Draft", "Pipeline"] as const;

  return (
    <div className="w-full rounded-2xl border border-manuscriptAlpha-ink-15 bg-white shadow-[0_16px_48px_rgba(80,55,30,0.06)] overflow-hidden font-sans text-manuscript-ink">

      {/* ═══════════════════════════════════════════════
          DESKTOP (lg+)
          ═══════════════════════════════════════════════ */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:items-start">

        {/* ─── COL 1: DISCOVERY ─── */}
        <div className="p-5 space-y-3.5 border-r border-manuscriptAlpha-ink-10">
          <div>
            <span className="text-[11px] font-bold text-manuscript-copper uppercase tracking-wider">
              01 · Discovery
            </span>
            <h3 className="mt-1.5 text-[17px] font-bold text-manuscript-ink tracking-tight leading-snug">
              Find the right accounts
            </h3>
            <p className="mt-0.5 text-[12px] text-manuscript-inkMuted leading-relaxed">
              Continuous prospect discovery across live business data.
            </p>
          </div>

          {/* Key metric */}
          <div className="p-3.5 rounded-xl bg-manuscript-parchmentLight/60 border border-manuscriptAlpha-ink-10">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] text-manuscript-inkMuted">Prospects discovered</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-manuscript-copper">
                <TrendingUp size={11} />
                +196 today
              </span>
            </div>
            <div className="mt-1">
              <span className="text-2xl font-bold text-manuscript-ink tracking-tight">1,884</span>
              <span className="ml-1.5 text-[11px] text-manuscript-inkMuted">verified accounts</span>
            </div>
          </div>

          {/* Top 3 sources */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-semibold text-manuscript-inkMuted uppercase tracking-wider">
              Active Sources
            </span>
            {SOURCES.map((src, i) => {
              const Icon = src.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-manuscriptAlpha-ink-10 hover:border-manuscript-copper/30 transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-manuscript-parchmentLight flex items-center justify-center text-manuscript-copper shrink-0">
                    <Icon size={14} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] font-semibold text-manuscript-ink">{src.label}</div>
                    <div className="text-[10px] text-manuscript-inkMuted">{src.tag}</div>
                  </div>
                  <span className="text-[10px] font-mono text-manuscript-inkMuted shrink-0">{src.count}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── COL 2: INTELLIGENCE & OUTREACH ─── */}
        <div className="p-5 space-y-3.5 bg-manuscript-parchmentLight/20 border-r border-manuscriptAlpha-ink-10">
          <div>
            <span className="text-[11px] font-bold text-manuscript-copper uppercase tracking-wider">
              02 · Research & Outreach
            </span>
            <h3 className="mt-1.5 text-[17px] font-bold text-manuscript-ink tracking-tight leading-snug">
              From signal to personalized message
            </h3>
            <p className="mt-0.5 text-[12px] text-manuscript-inkMuted leading-relaxed">
              Deep background research and rep-approved drafts.
            </p>
          </div>

          {/* Account selector pills */}
          <div className="flex gap-1.5">
            {ACCOUNTS.map((acc, i) => (
              <button
                key={acc.id}
                type="button"
                onClick={() => setActiveAccount(i)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                  activeAccount === i
                    ? "bg-manuscript-ink text-white shadow-sm"
                    : "bg-white text-manuscript-inkMuted border border-manuscriptAlpha-ink-10 hover:border-manuscript-copper/40"
                }`}
              >
                {acc.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Active account card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-15 space-y-2.5"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-manuscript-copper/10 text-manuscript-copper flex items-center justify-center font-bold text-[11px] border border-manuscript-copper/20">
                    {account.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-manuscript-ink">{account.name}</div>
                    <div className="text-[10px] text-manuscript-inkMuted">
                      {account.location} · {account.headcount} employees
                    </div>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/20">
                  {account.fit}%
                </span>
              </div>

              {/* Signal badge */}
              <div className="flex items-center gap-1.5 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper animate-pulse" />
                <span className="font-medium text-manuscript-ink">{account.signal}</span>
              </div>

              {/* Buyer */}
              <div className="flex items-center gap-2 p-2 rounded-lg bg-manuscript-parchmentLight/60 border border-manuscriptAlpha-ink-10">
                <div className="w-6 h-6 rounded-full bg-manuscript-copper text-white flex items-center justify-center font-bold text-[9px] shrink-0">
                  {account.contact.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold text-manuscript-ink block">{account.contact.name}</span>
                  <span className="text-[10px] text-manuscript-inkMuted block">{account.contact.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Email draft preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`draft-${account.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-15 space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-manuscript-ink">
                <Mail size={12} className="text-manuscript-copper" />
                <span>Personalized Email Draft</span>
              </div>
              <div className="text-[12px] font-bold text-manuscript-ink leading-snug">
                {account.draft.subject}
              </div>
              <p className="text-[11px] text-manuscript-inkMuted leading-relaxed line-clamp-3">
                {account.draft.preview}
              </p>
              <div className="flex items-center justify-between pt-1.5 border-t border-manuscriptAlpha-ink-10">
                <span className="text-[10px] text-manuscript-copper font-semibold uppercase tracking-wider">
                  Awaiting rep approval
                </span>
                <span className="text-[10px] text-manuscript-inkMuted">Draft · ready to send</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── COL 3: PIPELINE ─── */}
        <div className="p-5 space-y-3.5">
          <div>
            <span className="text-[11px] font-bold text-manuscript-copper uppercase tracking-wider">
              03 · Pipeline
            </span>
            <h3 className="mt-1.5 text-[17px] font-bold text-manuscript-ink tracking-tight leading-snug">
              Sales-ready opportunities
            </h3>
            <p className="mt-0.5 text-[12px] text-manuscript-inkMuted leading-relaxed">
              Verified accounts ready for your reps to contact.
            </p>
          </div>

          {/* Pipeline metric */}
          <div className="p-3.5 rounded-xl bg-manuscript-parchmentLight/60 border border-manuscriptAlpha-ink-10">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] text-manuscript-inkMuted">Review-ready pipeline</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-manuscript-copper">
                <TrendingUp size={11} />
                +13 today
              </span>
            </div>
            <div className="mt-1">
              <span className="text-2xl font-bold text-manuscript-ink tracking-tight">35</span>
              <span className="ml-1.5 text-[11px] text-manuscript-inkMuted">qualified accounts</span>
            </div>
            <div className="mt-2 pt-2 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[10px] text-manuscript-inkMuted">
              <span>$420K est. ARR</span>
              <span className="font-mono font-medium text-manuscript-ink">18.6% meeting rate</span>
            </div>
          </div>

          {/* Funnel visualization — compact */}
          <div className="space-y-1">
            <span className="text-[10px] font-semibold text-manuscript-inkMuted uppercase tracking-wider">
              Conversion Funnel
            </span>
            {[
              { label: "Discovered",  value: "1,884", width: "100%" },
              { label: "Researched",  value: "840",   width: "72%" },
              { label: "Intent",      value: "312",   width: "48%" },
              { label: "Staged",      value: "62",    width: "28%" },
              { label: "Qualified",   value: "35",    width: "18%" },
            ].map((row, i) => (
              <div key={row.label} className="flex items-center gap-2">
                <span className="text-[10px] text-manuscript-inkMuted w-[62px] shrink-0">{row.label}</span>
                <div className="flex-1 h-4 bg-manuscript-parchmentLight rounded overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: row.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded bg-manuscript-copper"
                    style={{ opacity: 0.3 + i * 0.175 }}
                  />
                </div>
                <span className="text-[10px] font-mono font-semibold text-manuscript-ink w-9 text-right shrink-0">{row.value}</span>
              </div>
            ))}
          </div>

          {/* Account list */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-semibold text-manuscript-inkMuted uppercase tracking-wider">
              Top Accounts
            </span>
            {ACCOUNTS.map((acc, i) => (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                onClick={() => setActiveAccount(i)}
                className={`flex items-center justify-between p-2.5 rounded-lg border cursor-pointer transition-all ${
                  activeAccount === i
                    ? "bg-manuscript-parchmentLight/80 border-manuscript-copper/30"
                    : "bg-white border-manuscriptAlpha-ink-10 hover:border-manuscript-copper/20"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 rounded-md bg-manuscript-copper/10 text-manuscript-copper flex items-center justify-center font-bold text-[10px] shrink-0 border border-manuscript-copper/15">
                    {acc.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold text-manuscript-ink truncate">{acc.name}</div>
                    <div className="text-[10px] text-manuscript-inkMuted">{acc.contact.name} · {acc.contact.role}</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[10px] font-mono font-bold text-manuscript-copper">{acc.fit}%</div>
                  <div className="text-[9px] text-manuscript-inkMuted">{acc.fit >= 90 ? "Qualified" : "Nurturing"}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CRM sync badge */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-manuscript-parchmentLight/40 border border-manuscriptAlpha-ink-10 text-[10px]">
            <span className="flex items-center gap-1.5 font-medium text-manuscript-ink">
              <ShieldCheck size={14} className="text-manuscript-copper" />
              CRM Sync (Salesforce & HubSpot)
            </span>
            <span className="font-semibold text-manuscript-copper uppercase tracking-wider text-[10px]">
              Rep-approved
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar — desktop only */}
      <div className="hidden lg:flex items-center justify-between px-6 py-3 bg-manuscript-parchment/60 border-t border-manuscriptAlpha-ink-10">
        <div className="flex items-center gap-3">
          {["01 Discover", "02 Research", "03 Personalize", "04 Qualify"].map((step, i) => (
            <span
              key={step}
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white border border-manuscriptAlpha-ink-10 text-manuscript-inkMuted"
            >
              {step}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-manuscript-inkMuted">
          <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
          <span className="font-semibold text-manuscript-copper">PRODUCT PREVIEW</span>
          <span>·</span>
          <span>DEMO DATA</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          MOBILE (below lg) — clean swipeable cards
          ═══════════════════════════════════════════════ */}
      <div className="block lg:hidden">

        {/* Stage tabs */}
        <div className="px-4 pt-4 pb-3 bg-white border-b border-manuscriptAlpha-ink-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-manuscript-copper" />
              <span className="text-[11px] font-bold text-manuscript-copper uppercase tracking-wider">
                Interactive Preview
              </span>
            </div>
            <span className="text-[10px] font-semibold text-manuscript-inkMuted bg-manuscript-parchment px-2 py-0.5 rounded-full border border-manuscriptAlpha-ink-10">
              {mobileStage + 1} / 3
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-manuscript-parchment border border-manuscriptAlpha-ink-10">
            {stageLabels.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setMobileStage(i as 0 | 1 | 2)}
                className={`py-2 rounded-lg text-xs font-bold transition-all ${
                  mobileStage === i
                    ? "bg-manuscript-copper text-white shadow-sm"
                    : "text-manuscript-inkMuted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Stage content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mobileStage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="p-4 space-y-3"
          >
            {/* STAGE 0: Discovery */}
            {mobileStage === 0 && (
              <>
                <div className="p-4 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-sm">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-manuscript-inkMuted">Prospects Discovered</span>
                    <span className="text-[11px] font-semibold text-manuscript-copper">+196 today</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-3xl font-bold text-manuscript-ink tracking-tight">1,884</span>
                    <span className="ml-2 text-xs text-manuscript-inkMuted">verified accounts</span>
                  </div>
                </div>

                {SOURCES.map((src, i) => {
                  const Icon = src.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-manuscriptAlpha-ink-10">
                      <div className="w-8 h-8 rounded-lg bg-manuscript-parchmentLight flex items-center justify-center text-manuscript-copper shrink-0">
                        <Icon size={15} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-manuscript-ink">{src.label}</div>
                        <div className="text-[10px] text-manuscript-inkMuted">{src.tag}</div>
                      </div>
                      <span className="text-[10px] font-mono text-manuscript-inkMuted shrink-0">{src.count}</span>
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setMobileStage(1)}
                  className="w-full py-3 rounded-xl bg-manuscript-ink text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:bg-manuscript-copper transition-colors"
                >
                  <span>See Account Research</span>
                  <ArrowRight size={13} />
                </button>
              </>
            )}

            {/* STAGE 1: Research & Draft */}
            {mobileStage === 1 && (
              <>
                {/* Account pills */}
                <div className="flex gap-1.5 overflow-x-auto pb-1">
                  {ACCOUNTS.map((acc, i) => (
                    <button
                      key={acc.id}
                      type="button"
                      onClick={() => setActiveAccount(i)}
                      className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        activeAccount === i
                          ? "bg-manuscript-ink text-white shadow-sm"
                          : "bg-white text-manuscript-ink border border-manuscriptAlpha-ink-15"
                      }`}
                    >
                      {acc.name.split(" ")[0]}
                    </button>
                  ))}
                </div>

                {/* Account snapshot */}
                <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-15 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-bold text-manuscript-ink">{account.name}</div>
                      <div className="text-[11px] text-manuscript-inkMuted">{account.location} · {account.headcount} employees</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-manuscript-copper/10 text-manuscript-copper">{account.fit}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                    <span className="text-manuscript-ink font-medium">{account.signal}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-manuscript-parchmentLight/60 border border-manuscriptAlpha-ink-10">
                    <div className="w-6 h-6 rounded-full bg-manuscript-copper text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                      {account.contact.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-manuscript-ink">{account.contact.name}</span>
                      <span className="text-[10px] text-manuscript-inkMuted block">{account.contact.role}</span>
                    </div>
                  </div>
                </div>

                {/* Draft preview */}
                <div className="p-3.5 rounded-xl bg-white border border-manuscriptAlpha-ink-15 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-manuscript-ink">
                    <Mail size={13} className="text-manuscript-copper" />
                    Personalized Email
                  </div>
                  <div className="text-xs font-bold text-manuscript-ink">{account.draft.subject}</div>
                  <p className="text-[12px] text-manuscript-inkMuted leading-relaxed line-clamp-3">{account.draft.preview}</p>
                  <div className="text-[10px] text-manuscript-copper font-semibold uppercase tracking-wider pt-1.5 border-t border-manuscriptAlpha-ink-10">
                    Awaiting rep approval
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileStage(2)}
                  className="w-full py-3 rounded-xl bg-manuscript-ink text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:bg-manuscript-copper transition-colors"
                >
                  <span>View Pipeline</span>
                  <ArrowRight size={13} />
                </button>
              </>
            )}

            {/* STAGE 2: Pipeline */}
            {mobileStage === 2 && (
              <>
                <div className="p-4 rounded-xl bg-white border border-manuscriptAlpha-ink-15 shadow-sm">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-manuscript-inkMuted">Review-ready pipeline</span>
                    <span className="text-[11px] font-semibold text-manuscript-copper">+13 today</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-3xl font-bold text-manuscript-ink tracking-tight">35</span>
                    <span className="ml-2 text-xs text-manuscript-inkMuted">qualified accounts</span>
                  </div>
                  <div className="mt-2.5 pt-2.5 border-t border-manuscriptAlpha-ink-10 flex justify-between text-[11px] text-manuscript-inkMuted">
                    <span>$420K est. ARR</span>
                    <span className="font-mono font-medium text-manuscript-ink">18.6% meeting rate</span>
                  </div>
                </div>

                {ACCOUNTS.map((acc, i) => (
                  <div
                    key={acc.id}
                    onClick={() => { setActiveAccount(i); setMobileStage(1); }}
                    className="flex items-center justify-between p-3 rounded-lg bg-white border border-manuscriptAlpha-ink-10 cursor-pointer hover:border-manuscript-copper/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-manuscript-copper/10 text-manuscript-copper flex items-center justify-center font-bold text-[11px] shrink-0 border border-manuscript-copper/15">
                        {acc.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-manuscript-ink truncate">{acc.name}</div>
                        <div className="text-[10px] text-manuscript-inkMuted">{acc.contact.name} · {acc.contact.role}</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0 flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-manuscript-copper">{acc.fit}%</span>
                      <ChevronRight size={14} className="text-manuscript-inkMuted" />
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-between p-3 rounded-lg bg-manuscript-parchmentLight/40 border border-manuscriptAlpha-ink-10 text-[11px]">
                  <span className="flex items-center gap-1.5 font-medium text-manuscript-ink">
                    <ShieldCheck size={14} className="text-manuscript-copper" />
                    CRM Sync Active
                  </span>
                  <span className="font-semibold text-manuscript-copper uppercase tracking-wider text-[10px]">
                    Rep-approved
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileStage(0)}
                  className="w-full py-2.5 rounded-xl bg-manuscript-parchment border border-manuscriptAlpha-ink-15 text-manuscript-ink text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:text-manuscript-copper transition-colors"
                >
                  <span>↺ Back to Discovery</span>
                </button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FritadoProductVisual;
