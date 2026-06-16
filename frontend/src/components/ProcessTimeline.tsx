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
    <section className="py-24 bg-white border-b border-slate-900/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-20">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">Engineering Process</p>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900">
            How We Build.
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-12 left-[28px] md:left-[50%] md:-translate-x-1/2 w-[2px] h-[calc(100%-100px)] bg-slate-100 hidden lg:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className="relative flex flex-col lg:flex-row items-start lg:items-center group">
                  
                  {/* Left Content (or empty for odd in desktop) */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:order-last'}`}>
                    <div className="premium-card p-8">
                      <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center -ml-3 lg:ml-0 top-6 lg:top-auto">
                    <div className="w-14 h-14 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center group-hover:border-blue-100 group-hover:scale-110 transition-all duration-300 z-10">
                      <span className="font-mono font-bold text-blue-600 text-lg">{step.num}</span>
                    </div>
                  </div>

                  {/* Empty space to balance flex row */}
                  <div className={`hidden lg:block w-1/2 ${isEven ? 'pl-16' : 'pr-16'}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
