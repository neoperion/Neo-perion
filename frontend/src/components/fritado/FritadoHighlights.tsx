import React from "react";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

interface ProofBlock {
  stat: string;
  label: string;
  title: string;
  desc: string;
  iconSrc: string;
  meta: string;
}

const PROOF_BLOCKS: ProofBlock[] = [
  {
    stat: "1,884+",
    label: "PROSPECT ACCURACY",
    title: "Verified buyer profiles",
    desc: "Up-to-date business data pulled from live company job boards, verified LinkedIn changes, and business registries so reps reach real decision-makers.",
    iconSrc: "/images/searching.png",
    meta: "Continuous Ingestion",
  },
  {
    stat: "100%",
    label: "REPUTATION SAFETY",
    title: "Rep-approved messages",
    desc: "Every single email and note waits in a dedicated queue for your sales reps to review and sign off. Zero runaway bots.",
    iconSrc: "/images/security.png",
    meta: "Human in the Loop",
  },
  {
    stat: "6-in-1",
    label: "CONSOLIDATED TOOLKIT",
    title: "One connected workflow",
    desc: "Replaces your disparate scraper, data enricher, email sequencer, and AI writer with one intuitive, focused workspace.",
    iconSrc: "/images/layers.png",
    meta: "Unified Pipeline",
  },
  {
    stat: "< 2s",
    label: "FAST CRM SYNC",
    title: "Instant sequence cutoff",
    desc: "The moment a buyer responds or books time on your calendar, follow-ups halt across all channels so you never look awkward.",
    iconSrc: "/images/settings.png",
    meta: "Zero Spam Risk",
  },
];

export const FritadoHighlights: React.FC = () => {
  return (
    <section id="highlights" className="scroll-mt-28 py-16 sm:py-24 border-b border-manuscript-parchmentDeep bg-manuscript-parchment text-manuscript-ink font-sans overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
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
              HIGHLIGHTS
            </span>

          </div>
          <h2 className="font-manuscript text-3xl sm:text-4xl font-bold text-manuscript-ink tracking-tight leading-tight">
            Product highlights
          </h2>
          <p className="mt-4 font-manuscriptBody text-base sm:text-lg text-manuscript-inkMuted leading-relaxed">
            Built for modern sales teams who protect their domain reputation and prioritize qualified conversations over spam volume.
          </p>
        </motion.div>

        {/* ─── DESKTOP & TABLET 4-COLUMN / 2-COLUMN GRID (sm and above) ─── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROOF_BLOCKS.map((block, idx) => {
            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-xl bg-white/70 border border-manuscriptAlpha-ink-15 hover:border-manuscript-copper transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(80,55,30,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-manuscript-copper/10 border border-manuscript-copper/20 flex items-center justify-center p-1.5">
                      <img src={block.iconSrc} alt={block.label} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-sans font-bold text-manuscript-copper uppercase tracking-wider">
                      {block.label}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-bold font-sans text-manuscript-ink tracking-tight mb-2">
                    {block.stat}
                  </div>

                  <h3 className="font-sans text-sm font-bold text-manuscript-ink uppercase tracking-wide mb-1.5">
                    {block.title}
                  </h3>

                  <p className="font-manuscriptBody text-xs text-manuscript-inkMuted leading-relaxed">
                    {block.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[10px] font-sans text-manuscript-inkMuted">
                  <span>KEY BENEFIT</span>
                  <span className="text-manuscript-ink font-semibold">{block.meta}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── MOBILE 2x2 COMPACT PROOF MATRIX (< sm) ─── */}
        <div className="grid grid-cols-2 gap-2.5 sm:hidden">
          {PROOF_BLOCKS.map((block, idx) => {
            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="p-3.5 rounded-xl bg-white/90 border border-manuscriptAlpha-ink-15 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-7 h-7 rounded-lg bg-manuscript-copper/10 border border-manuscript-copper/20 flex items-center justify-center p-1 shrink-0">
                      <img src={block.iconSrc} alt={block.label} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[9px] font-sans font-bold text-manuscript-copper uppercase tracking-wider text-right truncate pl-1">
                      {block.label.split(" ")[0]}
                    </span>
                  </div>

                  <div className="text-2xl font-bold font-sans text-manuscript-ink tracking-tight mb-1">
                    {block.stat}
                  </div>

                  <h3 className="font-sans text-xs font-bold text-manuscript-ink uppercase tracking-wide mb-1 leading-tight">
                    {block.title}
                  </h3>

                  <p className="font-manuscriptBody text-[11px] text-manuscript-inkMuted leading-relaxed line-clamp-3">
                    {block.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[9.5px] font-sans text-manuscript-inkMuted">
                  <span className="text-manuscript-copper font-semibold">{block.meta}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer Strip */}
        <div className="mt-8 p-3.5 rounded-lg bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 flex items-center gap-2.5 text-xs font-sans text-manuscript-inkMuted">
          <Info size={14} className="text-manuscript-copper shrink-0" />
          <span>
            Fritado integrates directly with your existing mailboxes and CRMs (Salesforce, HubSpot, Pipedrive) without requiring risky DNS overrides or complicated setup.
          </span>
        </div>
      </div>
    </section>
  );
};

export default FritadoHighlights;
