import { Brain, Building2, Rocket, Clock, HeartHandshake, Blocks, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const WhyNeoPerion = () => {
  const navigate = useNavigate();

  return (
    <section id="why-AINCURU" className="py-20 md:py-32 bg-[#050816] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">Why AINCURU</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              An engineering partner <br /> built for the <span className="text-neo-blue">AI era</span>.
            </h2>
          </div>
          <button 
            onClick={() => navigate('/contact')}
            className="flex items-center gap-2 text-neo-blue font-bold hover:text-neo-blue transition-colors group"
          >
            Start your project <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[280px]">
          
          {/* AI Expertise - Large Square */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-amber-950/40 to-[#0A0F24] border border-neo-blue/20 hover:border-neo-blue/40 transition-colors flex flex-col relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-neo-blue/10 blur-[80px] rounded-full group-hover:bg-neo-blue/20 transition-colors"></div>
            <div className="h-16 w-16 bg-neo-blue/20 rounded-2xl flex items-center justify-center mb-8 border border-neo-blue/30">
              <Brain className="h-8 w-8 text-neo-blue" />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">Deep AI Expertise</h3>
            <p className="text-slate-400 text-lg leading-relaxed flex-grow">
              We don't just use APIs. We build custom RAG pipelines, fine-tune models, and deploy autonomous multi-agent systems that solve complex enterprise challenges.
            </p>
          </div>

          {/* Enterprise Grade - Wide Rectangle */}
          <div className="md:col-span-2 rounded-3xl p-8 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
                <Building2 className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Enterprise Grade</h3>
            </div>
            <p className="text-slate-400">
              Scalable, secure architectures built on top-tier cloud providers. We ensure your data is safe and your platforms stay online 99.99% of the time.
            </p>
          </div>

          {/* Startup Friendly - Small Square */}
          <div className="rounded-3xl p-6 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors flex flex-col justify-center text-center items-center">
            <Rocket className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-display font-bold text-white mb-2">Startup Friendly</h3>
            <p className="text-slate-400 text-sm">Flexible engagements for fast growth.</p>
          </div>

          {/* Fast Delivery - Small Square */}
          <div className="rounded-3xl p-6 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors flex flex-col justify-center text-center items-center">
            <Clock className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-display font-bold text-white mb-2">Fast Delivery</h3>
            <p className="text-slate-400 text-sm">Agile sprints and rapid milestones.</p>
          </div>

          {/* Product Engineering - Wide Rectangle */}
          <div className="md:col-span-2 rounded-3xl p-8 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20">
                <Blocks className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Product Engineering</h3>
            </div>
            <p className="text-slate-400">
              End-to-end development from frontend UI to complex backend logic, ensuring a cohesive and high-performance user experience.
            </p>
          </div>

          {/* Long-term Support - Wide Rectangle */}
          <div className="md:col-span-2 rounded-3xl p-8 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <HeartHandshake className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Long-term Support</h3>
            </div>
            <p className="text-slate-400">
              We aren't just an agency; we act as your dedicated engineering team, providing continuous support, updates, and maintenance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
