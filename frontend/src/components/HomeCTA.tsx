import { motion } from "framer-motion";
import { ArrowRight, Workflow, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden bg-[#FAFAFA] border-b border-[#E4E4E7]/60">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto rounded-xl border border-[#E4E4E7] bg-white p-10 md:p-16 lg:p-20 shadow-sm"
        >
          <div className="relative z-10 text-center flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neo-blue/5 border border-neo-blue/10 mb-8 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-neo-blue" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue">Scale With Certainty</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl lg:text-[44px] font-display font-bold text-[#09090B] leading-[1.2] mb-6 max-w-3xl mx-auto tracking-tight">
              Your next product deserves <span className="text-neo-blue">engineering</span>, not just development.
            </h2>
            
            {/* Description */}
            <p className="text-base text-slate-500 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
              Schedule a technical strategy call with our senior architects. We skip the sales pitch and dive straight into actionable engineering architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto h-11 px-6 bg-[#09090B] text-white rounded-md text-sm font-bold transition-all hover:bg-slate-800 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2"
              >
                Book a strategy call
                <Workflow className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => navigate('/company/case-studies')}
                className="w-full sm:w-auto h-11 px-6 bg-white border border-[#E4E4E7] text-slate-600 rounded-md text-sm font-bold transition-all hover:border-slate-400 inline-flex items-center justify-center gap-2"
              >
                See our work
                <ArrowRight className="w-4 h-4 text-neo-blue" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
