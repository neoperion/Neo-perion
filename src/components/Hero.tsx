import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32" style={{ background: 'radial-gradient(circle at top left, #111827 0%, #02040A 50%, #000000 100%)' }}>
      {/* Full Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/images/hands.png" 
          alt="AI and Human Connection" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-primary/5"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
              Where Quality {" "}
              <span className="gradient-text">Isn’t a Trend-</span>It’s How It’s Always Been Done.

            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
Solutions that run smooth, clients that stay loyal, results that speak louder than marketing. 
We build it, launch it, and support you every step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold text-lg shadow-glow transition-all duration-300 hover:scale-105"
              >
                Get Started with NEO PERION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#services")}
                className="font-semibold text-lg border-2 border-muted-foreground/30 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
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
          <div className="relative fade-in lg:flex hidden justify-center items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="relative flex justify-center items-center">
              <img 
                src="/images/human.png" 
                alt="Innovation Visual" 
                className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
