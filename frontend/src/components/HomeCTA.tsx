import { motion } from "framer-motion";
import { Building2, Sparkles, Workflow } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      {/* Immersive Colorful Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-neo-highlight/20 blur-[100px] md:blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[500px] md:w-[600px] h-[500px] md:h-[600px] bg-neo-blue/20 blur-[80px] md:blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[300px] md:h-[400px] bg-neo-light/30 blur-[100px] md:blur-[150px] rounded-[100%] rotate-45 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto rounded-[2.5rem] p-[1.5px] bg-gradient-to-br from-white to-white/40 shadow-[0_20px_80px_rgba(37,99,255,0.15)] overflow-hidden"
        >
          {/* Inner Card - Glassmorphism */}
          <div className="bg-white/80 backdrop-blur-2xl rounded-[2.4rem] p-10 md:p-16 lg:p-20 relative overflow-hidden">
            
            {/* Subtle animated particles inside the card */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-neo-highlight to-neo-blue opacity-10 blur-[50px] rounded-full pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-neo-light to-neo-blue opacity-10 blur-[60px] rounded-full pointer-events-none"
            />

            <div className="relative z-10 text-center flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neo-blue/5 border border-neo-blue/10 mb-8 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-neo-blue" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-neo-blue">Scale With Certainty</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 leading-[1.15] mb-6 max-w-3xl mx-auto">
                Your next product deserves{" "}
                <span className="text-neo-gradient inline-block mt-2 md:mt-0">
                  engineering, not just development.
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                Schedule a technical strategy call with our senior architects. We skip the sales pitch and dive straight into actionable engineering architecture.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                <button
                  onClick={() => navigate('/contact')}
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white overflow-hidden w-full sm:w-auto transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(37,99,255,0.25)]"
                >
                  <div className="absolute inset-0 bg-neo-gradient"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-neo-gradient-hover transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2 text-[15px] tracking-wide">
                    Book a Strategy Call 
                    <Workflow className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </div>
                </button>
                
                <button
                  onClick={() => navigate('/company/case-studies')}
                  className="group px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-neo-blue/30 hover:bg-slate-50 transition-all w-full sm:w-auto flex items-center justify-center gap-2 text-[15px] tracking-wide hover:shadow-soft"
                >
                  View Our Work
                  <Building2 className="w-5 h-5 text-neo-blue group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
