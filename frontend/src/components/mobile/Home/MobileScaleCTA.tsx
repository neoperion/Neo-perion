import { ArrowRight, Blocks } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function MobileScaleCTA() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-16 bg-[#02040A] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background Effects */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neo-blue/50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-neo-blue/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-12 h-12 parchment-surface/[0.03] border border-white/10 rounded-2xl flex items-center justify-center mb-6">
          <Blocks className="text-neo-blue" size={24} />
        </div>

        <h2 className="text-[32px] font-black text-white tracking-tight leading-[1.1] mb-4">
          Scale With <span className="text-neo-blue">Certainty</span>
        </h2>
        
        <p className="text-[15px] font-bold text-white/90 mb-3">
          Your next product deserves engineering, not just development.
        </p>

        <p className="text-[14px] text-white/60 mb-8 leading-relaxed max-w-[280px]">
          Schedule a technical strategy call with our senior architects. We skip the sales pitch and dive straight into actionable engineering architecture.
        </p>

        <div className="w-full flex flex-col gap-3">
          <button 
            onClick={() => navigate('/contact')}
            className="w-full h-12 rounded-xl bg-neo-blue text-white font-bold text-[14px] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Book a strategy call <ArrowRight size={16} />
          </button>
          
          <button 
            onClick={() => navigate('/company/case-studies')}
            className="w-full h-12 rounded-xl parchment-surface/[0.03] border border-white/10 text-white font-bold text-[14px] flex items-center justify-center active:parchment-surface/5 transition-colors"
          >
            See our work
          </button>
        </div>
      </div>
    </section>
  );
}
