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

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How working with VTSHA works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, transparent process from first contact to ongoing partnership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute "></div>
              )}
              <div className="space-y-4">
                <div className="text-5xl font-bold text-primary/60">{step.number}</div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
