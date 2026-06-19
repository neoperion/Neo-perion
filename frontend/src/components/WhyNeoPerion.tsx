import { motion } from "framer-motion";
import { BrainCircuit, Rocket, ShieldCheck, Server, Target, Zap } from "lucide-react";

const bentoItems = [
  {
    title: "Deep AI Expertise",
    description: "We don't just use APIs; we fine-tune LLMs, build custom vector databases, and implement true agentic workflows that transform how your business operates.",
    icon: <BrainCircuit className="w-7 h-7 text-blue-600" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-50 to-blue-50/50",
    visual: (
      <div className="absolute -right-10 -bottom-10 w-80 h-80 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
         <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
           <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[spin_20s_linear_infinite]" />
           <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="animate-[spin_15s_linear_infinite_reverse]" />
           <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
         </svg>
      </div>
    )
  },
  {
    title: "Enterprise Grade",
    description: "Bank-level security, SOC2 compliance readiness, and zero-trust architectures.",
    icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
    className: "md:col-span-1 md:row-span-1 bg-white",
    visual: null
  },
  {
    title: "Fast Delivery",
    description: "Proprietary internal tooling allows us to ship production-ready platforms 10x faster.",
    icon: <Rocket className="w-7 h-7 text-rose-500" />,
    className: "md:col-span-1 md:row-span-1 bg-white",
    visual: null
  },
  {
    title: "Startup Friendly",
    description: "Agile, transparent, and built to pivot. We act as your elite technical co-founders.",
    icon: <Target className="w-7 h-7 text-amber-500" />,
    className: "md:col-span-1 md:row-span-1 bg-white",
    visual: null
  },
  {
    title: "Production Ready",
    description: "Infinite scale on AWS/GCP. Kubernetes, CI/CD pipelines, and clustered databases.",
    icon: <Server className="w-7 h-7 text-violet-600" />,
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-tr from-slate-50 to-violet-50/50",
    visual: (
       <div className="absolute right-8 bottom-0 flex items-end gap-2 opacity-20 group-hover:opacity-40 transition-opacity duration-700 h-32">
          <div className="w-8 h-16 bg-violet-500 rounded-t-lg animate-pulse"></div>
          <div className="w-8 h-24 bg-violet-600 rounded-t-lg animate-pulse" style={{ animationDelay: '200ms' }}></div>
          <div className="w-8 h-12 bg-violet-400 rounded-t-lg animate-pulse" style={{ animationDelay: '400ms' }}></div>
          <div className="w-8 h-28 bg-violet-700 rounded-t-lg animate-pulse" style={{ animationDelay: '600ms' }}></div>
       </div>
    )
  },
  {
    title: "Long-term Support",
    description: "We don't disappear after launch. We provide ongoing scaling, maintenance, and feature development for years to come.",
    icon: <Zap className="w-7 h-7 text-neo-blue" />,
    className: "md:col-span-3 md:row-span-1 bg-slate-900 text-white",
    visual: (
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
    ),
    isDark: true
  }
];

export const WhyNeoPerion = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white border-b border-slate-900/5 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm text-xs font-bold tracking-widest uppercase text-slate-800 mb-8">
             <span className="w-2 h-2 rounded-full bg-slate-900"></span>
             The Neo Perion Advantage
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight leading-[1.1]">
            Built for Scale. <br className="hidden sm:block" />
            <span className="font-serif italic font-medium text-slate-600">Engineered for Excellence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto md:auto-rows-[minmax(280px,auto)]">
          {bentoItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className={`relative overflow-hidden rounded-[2rem] border p-8 md:p-10 flex flex-col group transition-all duration-500 hover:-translate-y-1 ${item.isDark ? 'border-slate-800 shadow-2xl shadow-slate-900/20' : 'border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50'} ${item.className}`}
            >
              {item.visual}
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.isDark ? 'bg-white/10 backdrop-blur-sm' : 'bg-white shadow-sm border border-slate-100'}`}>
                  {item.icon}
                </div>
                
                <div className="mt-auto">
                  <h3 className={`text-2xl font-bold font-display mb-3 tracking-tight ${item.isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`font-medium leading-relaxed text-base md:text-lg ${item.isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
