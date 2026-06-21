import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { industriesData } from "@/data/industriesData";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

export const IndustriesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Section bg="canvas" rhythm="primary" divider className="overflow-hidden">
      <SectionHeading
        title="Industries we transform"
        lead="We partner with forward-thinking teams across key sectors to build scalable, secure, and intelligent products."
        className="mb-14 max-w-2xl"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {industriesData.map((industry, index) => {
          const Icon = industry.icon;
          const preview = industry.caseStudyPreview;
          return (
            <motion.button
              key={industry.id}
              type="button"
              onClick={() => navigate(`/industries/${industry.slug}`)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group flex flex-col rounded-[16px] border border-hairline bg-paper p-5 text-left transition-[border-color,box-shadow] duration-200 hover:border-faint hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hairline bg-canvas text-brand">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-brand" />
              </div>

              <h3 className="mb-1 text-base font-bold text-ink transition-colors group-hover:text-brand">
                {industry.title}
              </h3>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-muted2">
                {industry.tagline}
              </p>

              <div className="mb-6 flex flex-wrap gap-1.5">
                {industry.solutions?.slice(0, 3).map((solution, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-hairline bg-canvas px-2 py-0.5 text-[10px] font-semibold text-muted2"
                  >
                    {solution}
                  </span>
                ))}
              </div>

              {preview && (
                <div className="mt-auto flex flex-col gap-2 border-t border-hairline pt-4">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted2">
                      Featured result
                    </span>
                    <p className="mt-1 text-[12px] font-semibold leading-relaxed text-body">
                      {preview.result}
                    </p>
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-display text-xl font-bold leading-none text-brand">
                      {preview.metric}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted2">
                      {preview.metricLabel}
                    </span>
                  </div>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </Section>
  );
};
