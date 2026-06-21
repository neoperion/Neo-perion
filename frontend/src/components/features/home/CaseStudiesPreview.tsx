import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { mockCaseStudies } from "@/data/mock/caseStudies";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { MarketingCard } from "@/components/marketing/MarketingCard";
import { BrowserFrame } from "@/components/marketing/BrowserFrame";

/** Lead metric = the first clause of the outcome sentence. */
function headlineMetric(outcome: string) {
  return outcome.split(".")[0].trim();
}

export const CaseStudiesPreview: React.FC = () => {
  const navigate = useNavigate();
  const studies = mockCaseStudies.slice(0, 3);
  if (studies.length === 0) return null;

  const [featured, ...compact] = studies;

  return (
    <Section id="case-studies" bg="canvas" rhythm="primary" divider>
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          title="Outcomes, not output"
          lead="We solve complex business problems and ship measurable results. A few of them:"
          className="max-w-2xl"
        />
        <button
          onClick={() => navigate("/company/case-studies")}
          className="group hidden items-center gap-2 text-sm font-semibold text-brand md:flex"
        >
          View all case studies
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Featured */}
        <motion.button
          onClick={() => navigate(`/company/case-studies/${featured.slug}`)}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="group text-left lg:col-span-7"
        >
          <MarketingCard role="feature" className="flex h-full flex-col gap-6">
            <BrowserFrame src={featured.cover_image} alt={featured.title} ratio="16/10" />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted2">
                {featured.industry} · {featured.client_name}
              </span>
              <p className="mt-3 font-display text-[clamp(24px,3.5vw,36px)] font-bold leading-tight text-brand">
                {headlineMetric(featured.outcome)}.
              </p>
              <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-body">
                {featured.problem}
              </p>
            </div>
          </MarketingCard>
        </motion.button>

        {/* Compact, metric-led */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          {compact.map((study, index) => (
            <motion.button
              key={study.slug}
              onClick={() => navigate(`/company/case-studies/${study.slug}`)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index + 1) * 0.06 }}
              className="group h-full text-left"
            >
              <MarketingCard role="metric" className="flex h-full flex-col justify-between gap-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted2">
                    {study.industry} · {study.client_name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-brand" />
                </div>
                <p className="font-display text-xl font-bold leading-snug text-brand">
                  {headlineMetric(study.outcome)}.
                </p>
              </MarketingCard>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center md:hidden">
        <button
          onClick={() => navigate("/company/case-studies")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
        >
          View all case studies
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </Section>
  );
};
