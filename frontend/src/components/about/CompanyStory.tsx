import React from 'react';

export function CompanyStory() {
  return (
    <section className="py-24 bg-[#0A0A0B] border-b border-[#27272A]/60">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="font-editorial text-2xl md:text-3xl text-neutral-200 leading-[1.6] md:leading-[1.7] space-y-10">
          {/* Answer-first preamble (Phase 4 — GEO). Names the city, who we serve, and the entity
              disambiguation line. Kept above the editorial pull-quote so it is the first readable
              answer both crawlers and assistive tech encounter. No pricing, no invented stats. */}
          <p className="animate-fade-in-up text-neutral-100">
            AINCURU Solutions is a founder-led software and AI company based in Chennai, Tamil
            Nadu, India. We build production-grade AI automation, custom web platforms, and mobile
            applications for startups and SMEs in India and the United States. We are not affiliated
            with Perion Network Ltd.
          </p>
          <p className="animate-fade-in-up">
            <span className="text-8xl md:text-[120px] font-bold text-neo-blue float-left mr-6 mt-2 md:mt-4 leading-[0.75]">
              A
            </span>
            INCURU was founded on one core belief: the traditional software agency model is fundamentally broken.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            We've seen ambitious businesses struggle with fragmented tools, rushed implementations, and vendors who vanish the moment a project ships. Too often, agencies focus on building what's easy to sell rather than what's robust enough to scale.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            We decided to build differently. Our work focuses on stability, clarity, and long-term impact — crafting systems that don't just launch, but keep running clean as your business grows. We are an AI-first product engineering company dedicated to enterprise-grade excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
