import { Card } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { servicesData } from "@/data/servicesData";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Services = () => {
  const navigate = useNavigate();

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
          {servicesData.slice(0, 4).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="relative h-full rounded-[1.25rem] cursor-pointer"
                onClick={() => navigate(`/services/${service.slug}`)}
              >
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
                  <p className="text-muted-foreground flex-grow">{service.shortDescription}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* View all services link */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/services')}
            className="text-primary hover:text-primary/80 text-sm font-medium transition-colors flex items-center gap-2 mx-auto"
          >
            View all services <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
