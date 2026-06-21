import { Check, X } from "lucide-react";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const ROWS = [
  {
    them: "Juniors learning on your budget",
    us: "Senior engineers only — no offshoring",
  },
  {
    them: "Disappears once the invoice clears",
    us: "Stays through scaling, maintenance & new features",
  },
  {
    them: "Thin wrappers around someone else's API",
    us: "Fine-tuned models and real agentic workflows",
  },
  {
    them: "Security bolted on at the end",
    us: "SOC2-ready, zero-trust from day one",
  },
  {
    them: "Quarters of overhead before anything ships",
    us: "Production-ready in weeks, not quarters",
  },
  {
    them: "Scope creep and surprise invoices",
    us: "Fixed scope, fixed price, no surprises",
  },
];

export const WhyNeoPerion = () => {
  return (
    <Section id="why-us" bg="canvas" rhythm="primary" divider>
      <SectionHeading
        eyebrow="Why Neo Perion"
        title="Built for scale, engineered to last"
        lead="We work nothing like a typical agency. Here's the difference — on every engagement, from first commit to long after launch."
        className="mb-12 max-w-2xl"
      />

      <div className="overflow-hidden border border-hairline bg-paper">
        {/* header */}
        <div className="grid grid-cols-2">
          <div className="p-4 md:p-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted2 md:text-[13px]">
              The typical agency
            </span>
          </div>
          <div className="flex items-center gap-2.5 border-l border-brand/20 bg-brand/[0.04] p-4 md:p-6">
            <span className="h-4 w-4 rounded-[5px] bg-brand" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand md:text-[13px]">
              Neo Perion
            </span>
          </div>
        </div>

        {/* rows */}
        {ROWS.map((row) => (
          <div key={row.us} className="grid grid-cols-2 border-t border-hairline">
            <div className="flex items-start gap-3 p-4 md:p-6">
              <X className="mt-0.5 h-[18px] w-[18px] shrink-0 text-faint" strokeWidth={2} />
              <span className="text-[13px] leading-relaxed text-muted2 md:text-[15px]">
                {row.them}
              </span>
            </div>
            <div className="flex items-start gap-3 border-l border-brand/20 bg-brand/[0.04] p-4 md:p-6">
              <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand" strokeWidth={2.25} />
              <span className="text-[13px] font-medium leading-relaxed text-ink md:text-[15px]">
                {row.us}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
