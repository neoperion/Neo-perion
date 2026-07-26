const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "You tell us your goals, current tools, and challenges. We listen carefully to understand your unique context and needs.",
  },
  {
    number: "02",
    title: "Solution Design",
    description: "We map out the best SaaS and automation approach tailored to your workflow, with clear milestones and transparent timelines.",
  },
  {
    number: "03",
    title: "Build & Implement",
    description: "We ship incrementally and refine based on your feedback, ensuring the solution works perfectly in your real-world environment.",
  },
  {
    number: "04",
    title: "Support & Scale",
    description: "We monitor performance, make optimizations, and help you grow. Our partnership doesn't end at launch—it begins there.",
  },
];

import { GlowingEffect } from "@/components/ui/glowing-effect";

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">Our Process</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            How working with <span className="text-primary">AI</span><span style={{ color: '#E5E7EB' }}>NCURU</span> works
          </h2>
          <p className="text-muted-foreground/70 text-[15px] leading-relaxed">
            A simple, transparent process from first contact to ongoing partnership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative h-full">
              <div className="relative rounded-xl h-full">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative z-10 p-6 rounded-xl border border-border/60 h-full flex flex-col gap-3">
                  <div className="text-[52px] font-black leading-none text-primary/15 select-none">{step.number}</div>
                  <h3 className="text-[17px] font-black tracking-tight text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground/70 text-[13.5px] leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
