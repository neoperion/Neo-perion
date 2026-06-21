import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, ShieldCheck, Gauge, Server, HeartHandshake } from "lucide-react";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const WhyNeoPerion = () => {
  const reduce = useReducedMotion();
  const rise = reduce ? 0 : 14;
  const reveal = (i: number) => ({
    initial: { opacity: 0, y: rise },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] as const },
  });

  return (
    <Section id="why-us" bg="canvas" rhythm="primary" divider>
      <SectionHeading
        eyebrow="Why Neo Perion"
        title="Built for scale, engineered to last"
        lead="The standards we hold on every engagement — from first commit to long after launch."
        className="mb-12 max-w-2xl"
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-4 md:auto-rows-[212px]">
        {/* Spotlight — Deep AI expertise (2x2) */}
        <motion.div
          {...reveal(0)}
          className="flex flex-col justify-between bg-paper p-8 md:col-span-2 md:row-span-2"
        >
          <div className="flex items-start justify-between">
            <BrainCircuit className="h-7 w-7 text-brand" strokeWidth={1.6} />
            <svg width="150" height="96" viewBox="0 0 150 96" fill="none" aria-hidden>
              <line x1="24" y1="24" x2="74" y2="48" stroke="#D7DCE5" strokeWidth="1.5" />
              <line x1="24" y1="72" x2="74" y2="48" stroke="#D7DCE5" strokeWidth="1.5" />
              <motion.line
                x1="74"
                y1="48"
                x2="126"
                y2="24"
                stroke="#1E5DFF"
                strokeWidth="1.5"
                initial={{ pathLength: reduce ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeInOut" }}
              />
              <line x1="74" y1="48" x2="126" y2="72" stroke="#D7DCE5" strokeWidth="1.5" />
              <circle cx="24" cy="24" r="6" fill="#FFFFFF" stroke="#C5CCD8" strokeWidth="1.5" />
              <circle cx="24" cy="72" r="6" fill="#FFFFFF" stroke="#C5CCD8" strokeWidth="1.5" />
              <circle cx="126" cy="24" r="6" fill="#FFFFFF" stroke="#1E5DFF" strokeWidth="1.5" />
              <circle cx="126" cy="72" r="6" fill="#FFFFFF" stroke="#C5CCD8" strokeWidth="1.5" />
              <motion.circle
                cx="74"
                cy="48"
                r="8"
                fill="#1E5DFF"
                initial={{ scale: reduce ? 1 : 0.5, opacity: reduce ? 1 : 0 }}
                whileInView={{ scale: reduce ? 1 : [0.5, 1.18, 1], opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-ink">Deep AI expertise</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted2">
              We fine-tune LLMs, build custom vector databases, and ship true agentic workflows —
              not thin wrappers around someone else&apos;s API.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Generative AI", "RAG", "Agents", "Evals"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-hairline bg-canvas px-2.5 py-1 text-[11px] font-semibold text-muted2"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stat — shipped */}
        <motion.div {...reveal(1)} className="flex flex-col justify-center bg-paper p-8">
          <span className="font-display text-[clamp(32px,4vw,44px)] font-bold leading-none text-ink">
            <AnimatedCounter end={23} duration={1400} />
          </span>
          <span className="mt-2 text-sm text-muted2">Products shipped to production</span>
        </motion.div>

        {/* Stat — abandoned */}
        <motion.div {...reveal(2)} className="flex flex-col justify-center bg-paper p-8">
          <span className="font-display text-[clamp(32px,4vw,44px)] font-bold leading-none text-brand">
            0
          </span>
          <span className="mt-2 text-sm text-muted2">Abandoned after launch</span>
        </motion.div>

        {/* Enterprise grade */}
        <motion.div {...reveal(3)} className="group flex flex-col justify-between bg-paper p-8">
          <ShieldCheck
            className="h-6 w-6 text-ink transition-transform duration-300 group-hover:-translate-y-0.5"
            strokeWidth={1.6}
          />
          <div>
            <h3 className="text-[17px] font-bold tracking-tight text-ink">Enterprise grade</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted2">
              SOC2-ready, zero-trust architectures, bank-level security.
            </p>
          </div>
        </motion.div>

        {/* Fast delivery */}
        <motion.div {...reveal(4)} className="group flex flex-col justify-between bg-paper p-8">
          <Gauge
            className="h-6 w-6 text-ink transition-transform duration-300 group-hover:-translate-y-0.5"
            strokeWidth={1.6}
          />
          <div>
            <h3 className="text-[17px] font-bold tracking-tight text-ink">Fast delivery</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted2">
              Production-ready platforms in weeks, not quarters.
            </p>
          </div>
        </motion.div>

        {/* Long-term support — dark accent (2x1) */}
        <motion.div
          {...reveal(5)}
          className="relative flex flex-col justify-between overflow-hidden bg-navy p-8 text-white md:col-span-2"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:26px_26px]" />
          <HeartHandshake className="relative h-6 w-6 text-brand" strokeWidth={1.6} />
          <div className="relative">
            <h3 className="text-[19px] font-bold tracking-tight">We don&apos;t disappear after launch</h3>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-slate-300">
              Ongoing scaling, maintenance, and new features for years — the team that built it is
              the team that keeps it running.
            </p>
          </div>
        </motion.div>

        {/* Production ready (2x1) */}
        <motion.div
          {...reveal(6)}
          className="flex flex-col justify-between bg-paper p-8 md:col-span-2"
        >
          <div className="flex items-center justify-between">
            <Server className="h-6 w-6 text-ink" strokeWidth={1.6} />
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              99.99% uptime
            </span>
          </div>
          <div>
            <h3 className="text-[17px] font-bold tracking-tight text-ink">Production ready</h3>
            <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-muted2">
              Infinite scale on AWS/GCP — Kubernetes, CI/CD pipelines, and clustered databases from
              day one.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
