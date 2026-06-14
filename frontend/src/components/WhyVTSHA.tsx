import { CheckCircle2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const benefits = [
  "Clear, no-jargon communication that keeps everyone aligned",
  "Fast turnaround with structured delivery and defined milestones",
  "Long-term support mindset, not just one-off project delivery",
  "Flexible engagement models tailored for startups and SMEs",
  "Proactive recommendations to optimize your tech stack",
];

export const WhyNeoPerion = () => {
  return (
    <section id="why-neo-perion" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70">Why Us</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Why choose <span className="text-primary">NEO</span> <span style={{ color: '#E5E7EB' }}>PERION</span>?
            </h2>
            <p className="text-[15px] text-muted-foreground/70 leading-relaxed">
              We believe technology should empower growth, not complicate it.
              Our approach focuses on delivering simple, stable, and scalable solutions
              while building lasting partnerships with our clients.
            </p>
            <p className="text-[15px] text-muted-foreground/70 leading-relaxed">
              Every team deserves clarity in their tech decisions and reliability
              in their service providers. That's the foundation we build on.
            </p>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="relative rounded-xl h-[72px]">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div
                  className="flex items-center gap-4 px-5 rounded-xl hover-lift border border-border/60 bg-background/50 transition-all duration-300 relative z-10 h-full"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-foreground/90 text-[14px]">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
