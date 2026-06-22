import { Sparkles, Layers, Gauge, Cpu } from "lucide-react";

const REASONS = [
  {
    icon: Layers,
    title: "Experienced Team",
    desc: "From strategy and architecture to development, we own the complete journey so you can focus on growth.",
  },
  {
    icon: Sparkles,
    title: "Always Fresh Ideas",
    desc: "We leverage AI across the entire lifecycle to accelerate delivery, improve quality, and reduce cost.",
  },
  {
    icon: Gauge,
    title: "Startup Speed",
    desc: "We pair rapid execution with scalable architecture, so your product is built for today's needs.",
  },
  {
    icon: Cpu,
    title: "Affordable Tech",
    desc: "Built with modern frameworks, cloud infrastructure, automation, and AI capabilities.",
  },
];

export const WhyNeoPerion = () => {
  return (
    <section id="why-us" className="relative bg-canvas py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center lg:items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-5/12 flex flex-col items-start pt-4">
            <div className="mb-8">
              <div className="relative inline-block mb-4">
                <h4 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-body">
                  FEATURES
                </h4>
                <div className="absolute -bottom-1 left-0 w-10 h-[2px] bg-brand" />
              </div>
              <h2 className="font-display text-[clamp(36px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] text-ink">
                Why People <span className="text-brand">Choose Us?</span>
              </h2>
            </div>
            
            <p className="text-[16px] leading-relaxed text-body mb-10 max-w-md">
              We leverage modern technology across the entire lifecycle to accelerate delivery, improve quality, and reduce cost — without ever compromising reliability. We pair rapid execution with scalable architecture to build solutions designed for your long-term growth.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex bg-brand text-paper px-8 py-4 text-[13px] font-bold uppercase tracking-[0.05em] transition-all hover:opacity-90 hover:-translate-y-0.5 rounded-sm shadow-[0_4px_14px_rgba(239,68,68,0.2)]"
            >
              BOOK A CONSULTATION
            </a>
          </div>

          {/* Right Column - Features Grid */}
          <div className="w-full lg:w-7/12 grid sm:grid-cols-2">
            {REASONS.map((reason, index) => {
              const Icon = reason.icon;
              // Add borders to create the grid effect from the image
              const borderClasses = 
                index === 0 ? "sm:border-r border-b border-hairline" :
                index === 1 ? "border-b border-hairline" :
                index === 2 ? "sm:border-r border-b sm:border-b-0 border-hairline" :
                "";

              return (
                <div key={index} className={`flex flex-col sm:flex-row gap-5 p-6 sm:p-8 ${borderClasses} hover:bg-brand/[0.02] transition-colors`}>
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand/20 bg-brand/[0.03] text-brand shadow-sm">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="pt-1 sm:pt-0">
                    <h3 className="mb-3 text-[19px] font-bold tracking-tight text-ink">{reason.title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-body">{reason.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
