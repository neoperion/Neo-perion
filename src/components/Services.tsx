import { Bot, Puzzle, Globe, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "AI & Automation Setup",
    description: "We integrate AI assistants and intelligent workflows into your existing tool stack, automating repetitive tasks and boosting productivity.",
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
    title: "Cloud & Analytics Support",
    description: "Expert help deploying, monitoring, and understanding your data with robust cloud infrastructure and analytics solutions.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What we do at VTSHA
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end SaaS services to support and scale your digital operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="p-6 hover-lift cursor-pointer bg-card border-border"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
