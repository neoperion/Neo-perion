import { Bot, Puzzle, Globe, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const services = [
  {
    icon: Bot,
    title: "UI/UX Design", 
    description: "Creating intuitive and engaging user interfaces that enhance user experience across web and mobile platforms.",
  },
  {
    icon: Puzzle,
    title: "Custom SaaS Solutions",
    description: "Tailor-made SaaS tools designed specifically to fit your unique business processes and operational needs.",
  },
  {
    icon: Globe,
    title: "Web & App Modernization",
    description: "Transform existing platforms to be faster, cleaner, and more scalable with modern architecture and best practices.",
  },
  {
    icon: Cloud,
    title: "Data & Analytics Support",
    description: "Delivering expert guidance in deploying, monitoring, and interpreting your data through scalable infrastructure and cutting-edge analytics solutions built for real-world impact.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32" style={{ backgroundColor: '#02040A' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            What we do at <span className="text-primary">NEO</span> <span style={{ color: '#E5E7EB' }}>PERION</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end SaaS services to support and scale your digital operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="relative h-full rounded-[1.25rem]">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <Card
                  className="p-6 hover-lift cursor-pointer border-border transition-all duration-300 relative z-10 h-full flex flex-col"
                >
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
