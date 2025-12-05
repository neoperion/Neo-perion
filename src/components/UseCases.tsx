import { Rocket, Briefcase, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const useCases = [
  {
    icon: Rocket,
    title: "Early-stage startups",
    description: "Launch fast with a scalable tech foundation that grows with you. Get enterprise-grade infrastructure without enterprise complexity.",
    tag: "Recommended",
  },
  {
    icon: Briefcase,
    title: "Service agencies",
    description: "Automate client onboarding, billing, and reporting workflows. Spend less time on admin, more time delivering value.",
    tag: "Popular",
  },
  {
    icon: Building2,
    title: "Traditional businesses",
    description: "Digitize operations without chaos. We help you transition smoothly to modern tools while maintaining business continuity.",
    tag: "Growing",
  },
];

export const UseCases = () => {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: '#050816' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Use Cases</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Built for modern teams
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're launching your first product or scaling an established business, 
            <span className="text-primary">NEO</span> <span style={{ color: '#E5E7EB' }}>PERION</span> adapts to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <div key={useCase.title} className="relative h-full rounded-[1.25rem]">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <Card
                  className="p-8 hover-lift cursor-pointer relative overflow-hidden border-border transition-all duration-300 h-full z-10 flex flex-col"
                >
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground border border-primary/50">
                    {useCase.tag}
                  </Badge>
                  <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {useCase.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
