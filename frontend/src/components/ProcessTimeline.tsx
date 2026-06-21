import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const steps = [
  { num: "01", title: "Discover", desc: "Stakeholder interviews, technical audit, architecture assessment." },
  { num: "02", title: "Architect", desc: "System design, tech stack selection, scalability planning, security review." },
  { num: "03", title: "Build", desc: "Agile sprints, CI/CD pipeline, code reviews, automated testing." },
  { num: "04", title: "Launch", desc: "Staged rollouts, performance monitoring, load testing, documentation." },
  { num: "05", title: "Scale", desc: "Growth engineering, infrastructure scaling, feature iteration, long-term partnership." },
];

export const ProcessTimeline = () => {
  return (
    <Section bg="paper" rhythm="supporting" divider>
      <SectionHeading title="How we build" className="mb-14 max-w-3xl" />

      <div className="relative">
        {/* Connector line */}
        <div className="absolute top-8 left-[18px] hidden h-[calc(100%-80px)] w-px bg-hairline lg:left-1/2 lg:block lg:-translate-x-1/2" />

        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.num}
                className="group relative flex flex-col items-start lg:flex-row lg:items-center"
              >
                <div
                  className={`w-full lg:w-1/2 ${
                    isEven ? "lg:pr-12 lg:text-right" : "lg:order-last lg:pl-12"
                  }`}
                >
                  <div className="rounded-[16px] border border-hairline bg-paper p-6 transition-[border-color,box-shadow] duration-200 hover:border-faint hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
                    <h3 className="mb-2 text-base font-bold text-ink transition-colors group-hover:text-brand">
                      {step.title}
                    </h3>
                    <p className="text-[13px] font-medium leading-relaxed text-muted2">{step.desc}</p>
                  </div>
                </div>

                {/* Center node */}
                <div className="absolute left-0 top-5 -ml-2 flex items-center justify-center lg:left-1/2 lg:top-auto lg:ml-0 lg:-translate-x-1/2">
                  <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brand/30 bg-paper transition-all duration-300 group-hover:scale-105 group-hover:border-brand">
                    <span className="font-mono text-[11px] font-bold text-brand">{step.num}</span>
                  </div>
                </div>

                <div className={`hidden w-1/2 lg:block ${isEven ? "pl-12" : "pr-12"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
