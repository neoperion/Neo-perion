import { ArrowRight } from "lucide-react";
import { ThreeCanvas } from "@/components/features/home/ThreeCanvas";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 pb-16 md:pt-0 border-b border-slate-900/5">
      {/* Layer 1: Background Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      
      {/* Layer 2: Ambient Glow Behind the Stone */}
      <div 
        className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[650px] h-[650px] z-[1] pointer-events-none hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,255,0.28), transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Layer 3: Large Stone Background (3D Canvas) */}
      <div 
        className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[650px] h-[650px] z-[2] opacity-[0.45] pointer-events-none hidden md:block"
      >
        <ThreeCanvas />
      </div>

      {/* Layer 4: Content Container */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pointer-events-none">
        <div className="grid lg:grid-cols-[5fr_5fr] gap-12 lg:gap-8 items-center">
          
          {/* Left: Editorial Statement */}
          <div className="space-y-8 fade-in relative z-20 pointer-events-auto">

            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-black tracking-[-0.02em] leading-[1.05] text-slate-900 font-display">
              Build Software <br/>
              That <br/>
              <span className="font-serif italic font-normal text-neo-gradient relative inline-block">
                Scales
                <div className="absolute bottom-1 left-0 w-full h-[6px] bg-neo-gradient rounded-full opacity-50"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-xl">
              We engineer intelligent, cloud-native platforms for enterprises that refuse to move slowly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => scrollToSection("#contact")}
                className="group relative h-14 px-8 bg-slate-900 text-white rounded-full text-base font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/20 inline-flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                  Initiate Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection("#case-studies")}
                className="h-14 px-8 rounded-full border border-slate-200 text-slate-700 text-base font-bold hover:border-slate-900 hover:text-slate-900 transition-colors bg-white/50 backdrop-blur inline-flex items-center justify-center tracking-wide"
              >
                Explore Our Work
              </button>
            </div>
          </div>

          {/* Right: Empty space for 3D Canvas structure spacing */}
          <div className="hidden md:block pointer-events-none w-full h-[600px]">
            {/* Kept for spacing on desktop layout so left content doesn't stretch across screen */}
          </div>
          
        </div>
      </div>
    </section>
  );
};
