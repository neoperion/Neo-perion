import { motion } from "framer-motion";
import { BrainCircuit, Rocket, ShieldCheck, Server, Target, Zap } from "lucide-react";

const bentoItems = [
  {
    title: "Deep AI Expertise",
    description: "We don't just use APIs; we fine-tune LLMs, build custom vector databases, and implement true agentic workflows that transform how your business operates.",
    icon: <BrainCircuit className="w-6 h-6 text-blue-600" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-50 to-blue-50/30",
    visual: (
      <div className="absolute -right-10 -bottom-10 w-80 h-80 pointer-events-none opacity-[0.08] group-hover:opacity-15 transition-opacity duration-700">
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
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    className: "md:col-span-1 md:row-span-1 bg-white",
    visual: null
  },
  {
    title: "Fast Delivery",
    description: "Proprietary internal tooling allows us to ship production-ready platforms 10x faster.",
    icon: <Rocket className="w-6 h-6 text-rose-500" />,
    className: "md:col-span-1 md:row-span-1 bg-white",
    visual: null
  },
  {
    title: "Startup Friendly",
    description: "Agile, transparent, and built to pivot. We act as your elite technical co-founders.",
    icon: <Target className="w-6 h-6 text-amber-500" />,
    className: "md:col-span-1 md:row-span-1 bg-white",
    visual: null
  },
  {
    title: "Production Ready",
    description: "Infinite scale on AWS/GCP. Kubernetes, CI/CD pipelines, and clustered databases.",
    icon: <Server className="w-6 h-6 text-violet-600" />,
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-tr from-slate-50 to-violet-50/30",
    visual: (
       <div className="absolute right-8 bottom-0 flex items-end gap-2 opacity-[0.08] group-hover:opacity-15 transition-opacity duration-700 h-28">
          <div className="w-6 h-12 bg-violet-500 rounded-t animate-pulse"></div>
          <div className="w-6 h-20 bg-violet-600 rounded-t animate-pulse" style={{ animationDelay: '200ms' }}></div>
          <div className="w-6 h-10 bg-violet-400 rounded-t animate-pulse" style={{ animationDelay: '400ms' }}></div>
          <div className="w-6 h-24 bg-violet-700 rounded-t animate-pulse" style={{ animationDelay: '600ms' }}></div>
       </div>
    )
  },
  {
    title: "Long-term Support",
    description: "We don't disappear after launch. We provide ongoing scaling, maintenance, and feature development for years to come.",
    icon: <Zap className="w-6 h-6 text-neo-highlight" />,
    className: "md:col-span-3 md:row-span-1 bg-[#09090B] text-white",
    visual: (
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
    ),
    isDark: true
  }
];

export const WhyNeoPerion = () => {
  return (
    <section id="why-us" className="py-24 bg-[#FAFAFA] border-b border-[#E4E4E7]/60 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E4E4E7] bg-white shadow-sm text-[10px] font-bold tracking-widest uppercase text-slate-800 mb-6">
             <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
             The Neo Perion Advantage
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#09090B] tracking-tight leading-[1.1]">
            Built for Scale. <br className="hidden sm:block" />
            <span className="font-serif italic font-normal text-slate-500">Engineered for Excellence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto md:auto-rows-[minmax(240px,auto)]">
          {bentoItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={index}
              className={`relative overflow-hidden rounded-xl border p-6 md:p-8 flex flex-col group transition-all duration-150 ease-out hover:-translate-y-0.5 ${
                item.isDark 
                  ? 'border-slate-800 bg-[#09090B] text-white shadow-lg' 
                  : 'border-[#E4E4E7] bg-white hover:border-[#A1A1AA] hover:shadow-sm'
              } ${item.className}`}
            >
              {item.visual}
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 ${
                  item.isDark ? 'bg-white/10 backdrop-blur-sm' : 'bg-slate-50 border border-[#E4E4E7]'
                }`}>
                  {item.icon}
                </div>
                
                <div className="mt-auto">
                  <h3 className={`text-lg font-bold font-display mb-2 tracking-tight ${item.isDark ? 'text-white' : 'text-[#09090B]'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-[13px] leading-relaxed font-medium ${item.isDark ? 'text-slate-300' : 'text-slate-500'}`}>
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
