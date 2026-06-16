import { ArrowRight, CheckCircle2, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CaseStudiesPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="case-studies" className="py-24 bg-white border-b border-slate-900/5">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Full-width premium case study block (Stripe-style) */}
        <div className="premium-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase">
                  Featured Case Study
                </span>
                <span className="text-slate-400 text-sm font-medium">
                  Healthcare + AI
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 leading-tight mb-6">
                Transforming Legacy Healthcare with AI-Driven RPA
              </h2>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Challenge</h4>
                  <p className="text-slate-600 font-medium">40+ hours wasted per clinic on manual data entry and processing.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Architecture</h4>
                  <p className="text-slate-600 font-medium">Python · UiPath · OpenAI API · React</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 mb-10">
                <h4 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Impact</h4>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    <span className="text-slate-900 font-bold">15% error reduction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-emerald-500" />
                    <span className="text-slate-900 font-bold">40 hrs saved/week</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => navigate('/case-studies')}
                  className="btn-ghost px-0"
                >
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Dashboard Mockup */}
            <div className="bg-slate-50 border-l border-slate-100 p-8 md:p-12 lg:p-16 flex items-center justify-center relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[80px]"></div>
              
              <div className="w-full max-w-md bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 relative z-10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-slate-900">HealthAdmin Pro</span>
                  </div>
                  <span className="text-xs font-medium bg-emerald-50 text-emerald-600 px-2 py-1 rounded">Secure</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-sm text-slate-500 font-medium">Processing Queue</span>
                    <span className="text-sm font-bold text-slate-900">0 Items</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-sm text-slate-500 font-medium">Daily Accuracy</span>
                    <span className="text-sm font-bold text-emerald-600">99.8%</span>
                  </div>
                  
                  <div className="mt-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">System Topology</span>
                    <div className="flex items-center justify-between text-xs font-mono bg-slate-900 text-slate-300 p-4 rounded-xl">
                       <span>Ingest</span>
                       <ArrowRight className="h-3 w-3 text-slate-600" />
                       <span className="text-blue-400">LLM Parse</span>
                       <ArrowRight className="h-3 w-3 text-slate-600" />
                       <span className="text-emerald-400">EHR Sync</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};
