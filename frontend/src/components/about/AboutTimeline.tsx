import React from 'react';

const milestones = [
  {
    year: 'ORIGIN',
    title: 'The first builds',
    description:
      'AI, data and software projects turned classroom knowledge into real engineering experience.',
  },
  {
    year: 'EXPERIMENTATION',
    title: 'Learning by shipping',
    description:
      'Hackathons, prototypes and early client work taught us to move beyond demonstrations and build systems people could actually use.',
  },
  {
    year: 'FIRST PRODUCTS',
    title: 'From projects to products',
    description:
      'We began working on complete digital products — from education platforms and commerce systems to intelligent applications. Projects like FunNova and Izhaiyam proved our capability to deliver at scale.',
  },
  {
    year: 'ENGINEERING',
    title: 'A broader problem set',
    description:
      'Web platforms, SaaS products, automation, AI systems and business software became part of the same engineering practice.',
  },
  {
    year: 'AINCURU',
    title: 'A company with a clearer direction',
    description:
      'AINCURU brings those experiences together around one idea: build technology with context, engineering discipline and a reason to exist.',
  },
];

export function AboutTimeline() {
  return (
    <section className="py-16 md:py-24 parchment-surface--light border-b border-manuscript-parchmentDeep">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="mb-12 md:mb-20">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper mb-6">
            02 · THE JOURNEY
          </p>
          <h2 className="heading-manuscript text-4xl md:text-5xl">From building projects<br/><span className="italic text-manuscript-rustDeep">to building a company.</span></h2>
        </div>

        <div className="relative">
          {/* Vertical spine — copper ink */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-manuscript-copper/25 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } group`}
              >
                {/* Timeline node */}
                <div className="absolute left-[15px] md:left-1/2 w-3 h-3 rounded-full bg-manuscript-parchment border-2 border-manuscript-copper -translate-x-1/2 mt-7 md:mt-0 z-10 group-hover:scale-125 transition-transform duration-300" />

                {/* Content card */}
                <div
                  className={`w-full md:w-1/2 pl-10 md:pl-0 box-border ${
                    index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'
                  }`}
                >
                  <div className="manuscript-card rounded-lg p-6 md:p-8 w-full box-border">
                    <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-manuscript-copper mb-2 block">
                      {milestone.year}
                    </span>
                    <h3 className="heading-manuscript text-xl mb-3">{milestone.title}</h3>
                    <p className="text-manuscript-inkMuted leading-relaxed text-[15px]">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
