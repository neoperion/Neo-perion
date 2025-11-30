import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-20 md:py-32">
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
                className="font-semibold text-lg"
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
            <div className="relative z-10 bg-card rounded-2xl shadow-2xl p-8 space-y-6 hover-lift">
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                  <p className="text-2xl font-bold text-primary">127</p>
                </div>
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="h-6 w-6 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-3 bg-secondary rounded-full w-full"></div>
                <div className="h-3 bg-secondary rounded-full w-5/6"></div>
                <div className="h-3 bg-secondary rounded-full w-4/6"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-accent/10 rounded-lg text-center">
                  <p className="text-2xl font-bold text-accent">98%</p>
                  <p className="text-xs text-muted-foreground mt-1">Uptime</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-xs text-muted-foreground mt-1">Support</p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg text-center">
                  <p className="text-2xl font-bold text-accent">3x</p>
                  <p className="text-xs text-muted-foreground mt-1">Growth</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
