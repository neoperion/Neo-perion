import { BrainCircuit, ShieldCheck, Gauge, Server, HeartHandshake } from "lucide-react";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export const WhyNeoPerion = () => {
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
        <div className="flex flex-col justify-between bg-paper p-8 md:col-span-2 md:row-span-2">
          <div className="flex items-start justify-between">
            <BrainCircuit className="h-7 w-7 text-brand" strokeWidth={1.6} />
            {/* subtle node graph */}
            <svg width="150" height="96" viewBox="0 0 150 96" fill="none" aria-hidden className="opacity-90">
              <line x1="24" y1="24" x2="74" y2="48" stroke="#D7DCE5" stroke-width="1.5" />
              <line x1="24" y1="72" x2="74" y2="48" stroke="#D7DCE5" stroke-width="1.5" />
              <line x1="74" y1="48" x2="126" y2="24" stroke="#1E5DFF" stroke-width="1.5" />
              <line x1="74" y1="48" x2="126" y2="72" stroke="#D7DCE5" stroke-width="1.5" />
              <circle cx="24" cy="24" r="6" fill="#FFFFFF" stroke="#C5CCD8" stroke-width="1.5" />
              <circle cx="24" cy="72" r="6" fill="#FFFFFF" stroke="#C5CCD8" stroke-width="1.5" />
              <circle cx="74" cy="48" r="8" fill="#1E5DFF" />
              <circle cx="126" cy="24" r="6" fill="#FFFFFF" stroke="#1E5DFF" stroke-width="1.5" />
              <circle cx="126" cy="72" r="6" fill="#FFFFFF" stroke="#C5CCD8" stroke-width="1.5" />
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
        </div>

        {/* Stat — shipped */}
        <div className="flex flex-col justify-center bg-paper p-8">
          <span className="font-display text-[clamp(32px,4vw,44px)] font-bold leading-none text-ink">
            23
          </span>
          <span className="mt-2 text-sm text-muted2">Products shipped to production</span>
        </div>

        {/* Stat — abandoned */}
        <div className="flex flex-col justify-center bg-paper p-8">
          <span className="font-display text-[clamp(32px,4vw,44px)] font-bold leading-none text-brand">
            0
          </span>
          <span className="mt-2 text-sm text-muted2">Abandoned after launch</span>
        </div>

        {/* Enterprise grade */}
        <div className="flex flex-col justify-between bg-paper p-8">
          <ShieldCheck className="h-6 w-6 text-ink" strokeWidth={1.6} />
          <div>
            <h3 className="text-[17px] font-bold tracking-tight text-ink">Enterprise grade</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted2">
              SOC2-ready, zero-trust architectures, bank-level security.
            </p>
          </div>
        </div>

        {/* Fast delivery */}
        <div className="flex flex-col justify-between bg-paper p-8">
          <Gauge className="h-6 w-6 text-ink" strokeWidth={1.6} />
          <div>
            <h3 className="text-[17px] font-bold tracking-tight text-ink">Fast delivery</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted2">
              Production-ready platforms in weeks, not quarters.
            </p>
          </div>
        </div>

        {/* Long-term support — dark accent (2x1) */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-navy p-8 text-white md:col-span-2">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:26px_26px]" />
          <HeartHandshake className="relative h-6 w-6 text-brand" strokeWidth={1.6} />
          <div className="relative">
            <h3 className="text-[19px] font-bold tracking-tight">We don&apos;t disappear after launch</h3>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-slate-300">
              Ongoing scaling, maintenance, and new features for years — the team that built it is
              the team that keeps it running.
            </p>
          </div>
        </div>

        {/* Production ready (2x1) */}
        <div className="flex flex-col justify-between bg-paper p-8 md:col-span-2">
          <div className="flex items-center justify-between">
            <Server className="h-6 w-6 text-ink" strokeWidth={1.6} />
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
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
        </div>
      </div>
    </Section>
  );
};
