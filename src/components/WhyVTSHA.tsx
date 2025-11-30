import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Clear, no-jargon communication that keeps everyone aligned",
  "Fast turnaround with structured delivery and defined milestones",
  "Long-term support mindset, not just one-off project delivery",
  "Flexible engagement models tailored for startups and SMEs",
  "Proactive recommendations to optimize your tech stack",
];

export const WhyVTSHA = () => {
  return (
    <section id="why-vtsha" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Why choose VTSHA?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe technology should empower growth, not complicate it. 
              Our approach focuses on delivering simple, stable, and scalable solutions 
              while building lasting partnerships with our clients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every team deserves clarity in their tech decisions and reliability 
              in their service providers. That's the foundation we build on.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 p-4 bg-background rounded-lg hover-lift"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
