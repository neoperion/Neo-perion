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
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">Use Cases</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            Built for modern teams
          </h2>
          <p className="text-muted-foreground/70 text-[15px] leading-relaxed">
            Whether you're launching your first product or scaling an established business,{" "}
            <span className="text-primary">NEO</span> <span style={{ color: '#E5E7EB' }}>PERION</span> adapts to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
                  className="p-8 hover-lift cursor-pointer relative overflow-hidden border-border/60 transition-all duration-300 h-full z-10 flex flex-col"
                >
                  <Badge className="absolute top-5 right-5 bg-primary/10 text-primary border border-primary/25 text-[10px] font-bold tracking-widest">
                    {useCase.tag}
                  </Badge>
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight mb-3 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground/70 text-[14px] leading-relaxed flex-grow">
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
