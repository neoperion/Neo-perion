import React from "react";

export const ProcessTimeline = () => {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Stakeholder interviews, technical audit, architecture assessment."
    },
    {
      num: "02",
      title: "ARCHITECT",
      desc: "System design, tech stack selection, scalability planning, security review."
    },
    {
      num: "03",
      title: "BUILD",
      desc: "Agile sprints, CI/CD pipeline, code reviews, automated testing."
    },
    {
      num: "04",
      title: "LAUNCH",
      desc: "Staged rollouts, performance monitoring, load testing, documentation."
    },
    {
      num: "05",
      title: "SCALE",
      desc: "Growth engineering, infrastructure scaling, feature iteration, long-term partnership."
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] border-b border-[#E4E4E7]/60">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">
            Engineering Process
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#09090B] tracking-tight">
            How We Build.
          </h2>
        </div>

        {/* Timeline body */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-8 left-[18px] md:left-[50%] md:-translate-x-1/2 w-[1px] h-[calc(100%-80px)] bg-[#E4E4E7] hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className="relative flex flex-col lg:flex-row items-start lg:items-center group">
                  
                  {/* Left Content (or empty for odd in desktop) */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:order-last'}`}>
                    <div className="bg-white border border-[#E4E4E7] p-6 rounded-xl shadow-sm hover:border-[#A1A1AA] transition-colors duration-150 ease-out">
                      <h3 className="text-base font-bold text-[#09090B] group-hover:text-neo-blue transition-colors duration-300 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-[13px] leading-relaxed font-semibold">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node (Refined from large bubble to small elegant badge) */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center -ml-2 lg:ml-0 top-5 lg:top-auto">
                    <div className="w-9 h-9 rounded-full bg-white border border-neo-blue/30 shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:border-neo-blue transition-all duration-300 z-10">
                      <span className="font-mono font-bold text-neo-blue text-[11px]">{step.num}</span>
                    </div>
                  </div>

                  {/* Empty space to balance flex row */}
                  <div className={`hidden lg:block w-1/2 ${isEven ? 'pl-12' : 'pr-12'}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
