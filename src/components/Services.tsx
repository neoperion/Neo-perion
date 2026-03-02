import { Card } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { servicesData } from "@/data/servicesData";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            What we do at <span className="text-primary">NEO</span> <span style={{ color: '#E5E7EB' }}>PERION</span>
          </h2>
          <p className="text-muted-foreground/70 text-[15px] leading-relaxed">
            End-to-end SaaS services to support and scale your digital operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 4).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="relative h-full rounded-[1.25rem] cursor-pointer group"
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
                  className="p-6 hover-lift cursor-pointer border-border/60 transition-all duration-300 relative z-10 h-full flex flex-col gap-0"
                >
                  <div className="h-11 w-11 bg-primary/10 rounded-xl flex items-center justify-center mb-5 border border-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-[16px] font-black tracking-tight mb-2.5 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground/70 text-[13.5px] leading-relaxed flex-grow">{service.shortDescription}</p>
                  <div className="mt-5 pt-4 border-t border-border/40 flex items-center gap-1.5 text-primary text-[12px] font-bold group-hover:gap-2.5 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* View all services */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border/60 text-muted-foreground/70 text-[13px] font-medium hover:border-primary/40 hover:text-primary transition-all duration-300"
          >
            View all services <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
