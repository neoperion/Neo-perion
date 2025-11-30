import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Full Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/images/hands.png" 
          alt="AI and Human Connection" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-primary/10"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Service-Based SaaS for Growing Teams
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Scale your business with{" "}
              <span className="gradient-text">smart, reliable</span> SaaS services
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              VTSHA helps companies leverage SaaS-based solutions, automation, and tech services 
              without complexity. Focus on growth while we handle the tech infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold text-lg shadow-lg"
              >
                Get Started with VTSHA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#services")}
                className="font-semibold text-lg hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                View Services
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Human support</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative fade-in lg:block hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/0 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
