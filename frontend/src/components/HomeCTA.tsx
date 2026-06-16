import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white border-b border-slate-900/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-slate-900 shadow-2xl border border-slate-800 overflow-hidden relative p-10 md:p-16 lg:p-20 text-center">
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-snug md:leading-tight mb-6">
              Your next product deserves engineering, not just development.
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 font-medium mb-12">
              Schedule a technical strategy call with our senior architects. No sales pressure, just actionable engineering advice.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary w-full sm:w-auto"
              >
                Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('/case-studies')}
                className="btn-secondary text-white border-white/20 hover:bg-white/5 hover:border-white/40 w-full sm:w-auto"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
