import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CaseStudy } from '@/types/caseStudy';
import { ArrowRight } from 'lucide-react';

interface Props {
  caseStudy: CaseStudy;
  index?: number;
  theme?: 'light' | 'dark';
}

export const CaseStudyCard: React.FC<Props> = ({ caseStudy, index = 0, theme = 'light' }) => {
  if (theme === 'light') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="manuscript-card group relative flex flex-col md:flex-row rounded-md overflow-hidden mb-8"
      >
        {/* Full-cover link */}
        <Link
          to={`/company/case-studies/${caseStudy.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`Read ${caseStudy.title}`}
        />

        {/* Cover image */}
        <div className="w-full md:w-2/5 relative aspect-video md:aspect-auto overflow-hidden">
          <div className="absolute inset-0 bg-manuscript-ink/10 group-hover:bg-transparent transition-colors z-10" />
          <img
            src={caseStudy.cover_image}
            alt={caseStudy.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
          {/* Archive number + tags */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-manuscript-copperMuted">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="px-2.5 py-0.5 bg-manuscript-copper/10 text-manuscript-copper text-[10px] font-bold rounded-sm uppercase tracking-wider border border-manuscript-copper/20">
              {caseStudy.industry}
            </span>
            <span className="px-2.5 py-0.5 bg-manuscript-parchmentWarm text-manuscript-inkMuted text-[10px] font-bold rounded-sm uppercase tracking-wider border border-manuscript-parchmentDeep">
              {caseStudy.service_type}
            </span>
          </div>

          <h3 className="heading-manuscript text-2xl md:text-3xl mb-4 group-hover:text-manuscript-copper transition-colors duration-200">
            {caseStudy.title}
          </h3>

          <p className="text-manuscript-inkMuted text-base mb-7 line-clamp-3 font-manuscriptBody leading-relaxed">
            {caseStudy.problem}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mb-7">
            {caseStudy.tech_stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-manuscript-parchmentLight border border-manuscript-parchmentDeep text-manuscript-inkMuted text-[11px] font-mono rounded-sm"
              >
                {tech}
              </span>
            ))}
            {caseStudy.tech_stack.length > 4 && (
              <span className="px-2.5 py-1 bg-manuscript-parchmentLight border border-manuscript-parchmentDeep text-manuscript-inkMuted text-[11px] font-mono rounded-sm">
                +{caseStudy.tech_stack.length - 4} more
              </span>
            )}
          </div>

          {/* CTA link */}
          <div className="flex items-center gap-2 text-manuscript-copper font-semibold font-manuscriptBody text-sm group-hover:gap-3 transition-all">
            Read Full Case Study <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    );
  }

  // Dark (manuscript/rustDeep)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row overflow-hidden rounded-3xl border border-manuscript-gold/20 bg-manuscript-ink/50 shadow-xl shadow-black/10 transition-all duration-300 hover:border-manuscript-gold/50 hover:-translate-y-1 mb-8"
    >
      <Link
        to={`/company/case-studies/${caseStudy.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Read ${caseStudy.title}`}
      />

      <div className="w-full md:w-2/5 relative aspect-video md:aspect-auto overflow-hidden border-r border-manuscript-gold/20">
        <div className="absolute inset-0 z-10 bg-manuscript-ink/30 transition-colors group-hover:bg-transparent" />
        <img
          src={caseStudy.cover_image}
          alt={caseStudy.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-manuscript-gold/50">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="px-2.5 py-0.5 bg-manuscript-gold/10 text-manuscript-gold text-[10px] font-bold rounded-sm uppercase tracking-wider border border-manuscript-gold/20">
            {caseStudy.industry}
          </span>
          <span className="px-2.5 py-0.5 bg-manuscript-ink text-manuscript-parchment/60 text-[10px] font-bold rounded-sm uppercase tracking-wider border border-manuscript-gold/20">
            {caseStudy.service_type}
          </span>
        </div>

        <h3 className="heading-manuscript text-2xl md:text-3xl mb-4 text-manuscript-parchmentLight group-hover:text-manuscript-gold transition-colors duration-200">
          {caseStudy.title}
        </h3>

        <p className="text-manuscript-parchment/70 text-base mb-7 line-clamp-3 font-manuscriptBody leading-relaxed">
          {caseStudy.problem}
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {caseStudy.tech_stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-manuscript-ink/80 border border-manuscript-gold/20 text-manuscript-parchment/60 text-[11px] font-mono rounded-sm"
            >
              {tech}
            </span>
          ))}
          {caseStudy.tech_stack.length > 4 && (
            <span className="px-2.5 py-1 bg-manuscript-ink/80 border border-manuscript-gold/20 text-manuscript-parchment/60 text-[11px] font-mono rounded-sm">
              +{caseStudy.tech_stack.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-manuscript-gold font-semibold font-manuscriptBody text-sm group-hover:gap-3 transition-all">
          Read Full Case Study <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};
