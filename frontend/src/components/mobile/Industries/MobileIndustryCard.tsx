import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { industriesData } from '@/data/industriesData';

export function MobileIndustryCard() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#030B1D] py-10 px-mobile-base pb-24 space-y-12">
      {industriesData.map((industry, index) => {
        const Icon = industry.icon;
        
        return (
          <motion.div 
            key={industry.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative p-6 rounded-[2rem] parchment-surface/[0.02] border border-white/[0.08] backdrop-blur-glass-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-[0.08] blur-3xl pointer-events-none" style={{ backgroundImage: `linear-gradient(to bottom right, ${industry.color}, transparent)` }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl parchment-surface/[0.05] border border-white/[0.1] mb-5 shadow-glow">
                <Icon className="w-6 h-6" style={{ color: industry.color }} />
              </div>
              
              <h2 className="text-3xl font-display font-bold text-white mb-3 tracking-tight">{industry.title}</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-6">{industry.description}</p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 border-b border-white/[0.08] pb-2">Key Solutions</h3>
                <div className="space-y-2">
                  {industry.solutions.map((sol, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: industry.color }} />
                      {sol}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#020617]/50 rounded-2xl p-5 border border-white/[0.04] mb-6">
                <h3 className="text-[13px] font-bold text-white mb-4 tracking-tight">The AINCURU Advantage</h3>
                <div className="space-y-4">
                  {industry.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: industry.color }} />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">{benefit.title}</h4>
                        <p className="text-xs text-white/50 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => navigate(`/industries/${industry.id}`)}
                className="w-full flex items-center justify-center gap-2 h-12 rounded-xl text-white font-bold text-[13px] parchment-surface/[0.05] border border-white/[0.1] hover:parchment-surface/[0.1] active:scale-[0.98] transition-all"
              >
                Explore {industry.title}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
