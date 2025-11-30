import { Zap, Users, Eye } from "lucide-react";

const features = [
  {
    icon: Zap,
    label: "Automation",
    title: "Automate routine work so your team can think bigger",
    description: "Free your team from repetitive tasks with intelligent automation workflows that integrate seamlessly with your existing tools.",
    benefits: [
      "Custom workflow automation",
      "AI-powered task management",
      "Integration with 100+ platforms",
    ],
  },
  {
    icon: Users,
    label: "Collaboration",
    title: "Centralize tools into one simple panel",
    description: "Bring all your essential tools together in a unified dashboard that makes collaboration effortless and transparent.",
    benefits: [
      "Single source of truth",
      "Real-time team updates",
      "Customizable dashboards",
    ],
  },
  {
    icon: Eye,
    label: "Visibility",
    title: "Get complete visibility into your operations",
    description: "Make data-driven decisions with comprehensive analytics and reporting that show what's working and what needs attention.",
    benefits: [
      "Advanced analytics & insights",
      "Custom reporting tools",
      "Performance tracking",
    ],
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Solutions built around your workflow
          </h2>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {feature.label}
                  </div>
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                      <Icon className="h-32 w-32 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
