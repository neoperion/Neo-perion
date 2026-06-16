import { useState, useEffect } from "react";
import { ArrowRight, Bot, Zap, Cloud, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  {
    id: "ai-systems",
    title: "AI Systems",
    icon: Bot,
    description: "Knowledge graphs, RAG pipelines, and multi-agent workflows built for enterprise scale.",
    features: ["Vector Databases", "LLM Fine-Tuning", "Autonomous Agents"],
  },
  {
    id: "automation",
    title: "Enterprise Automation",
    icon: Zap,
    description: "Workflow automation, CRM integration, and intelligent document processing.",
    features: ["RPA Integration", "Data Pipelines", "Webhook Triggers"],
  },
  {
    id: "cloud",
    title: "Cloud Native Platforms",
    icon: Cloud,
    description: "SaaS, multi-tenant architectures, and scalable backends.",
    features: ["Microservices", "Kubernetes", "Serverless Architecture"],
  },
  {
    id: "mobile-web",
    title: "Mobile & Web Products",
    icon: Smartphone,
    description: "Cross-platform apps, PWAs, and high-performance dashboards.",
    features: ["React / Next.js", "Flutter", "Real-time Subscriptions"],
  }
];

export const Services = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(SERVICES[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const elements = SERVICES.map(s => document.getElementById(s.id));
      const viewportCenter = window.innerHeight / 2;

      let currentActive = SERVICES[0].id;
      for (const el of elements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            currentActive = el.id;
          }
        }
      }
      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-900/5">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 relative">
          
          {/* Left Panel - Sticky */}
          <div className="hidden lg:block relative">
            <div className="sticky top-40 h-[600px] flex flex-col justify-center">
              <div className="mb-12">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">Core Capabilities</p>
                <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900">
                  Engineering <br />Excellence
                </h2>
              </div>
              
              <div className="space-y-6">
                {SERVICES.map((service) => {
                  const isActive = activeId === service.id;
                  const Icon = service.icon;
                  return (
                    <div 
                      key={service.id} 
                      className={`flex items-center gap-6 p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                        isActive ? 'bg-white shadow-xl shadow-slate-200/50 scale-105 border border-slate-100' : 'opacity-40 hover:opacity-100'
                      }`}
                      onClick={() => {
                        const el = document.getElementById(service.id);
                        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${isActive ? 'bg-blue-600' : 'bg-slate-200'}`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-display font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel - Scrolling Content */}
          <div className="space-y-24 lg:space-y-64 lg:py-64 pb-32">
            {/* Mobile Header (Hidden on Desktop) */}
            <div className="lg:hidden mb-12">
               <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">Core Capabilities</p>
               <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900">
                 Engineering Excellence
               </h2>
            </div>

            {SERVICES.map((service) => (
              <div key={service.id} id={service.id} className="min-h-[40vh] flex flex-col justify-center">
                <div className="premium-card p-8 md:p-12">
                  <service.icon className="w-12 h-12 text-blue-600 mb-8 lg:hidden" />
                  <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 lg:hidden">{service.title}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                        </div>
                        <span className="text-lg font-semibold text-slate-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => navigate('/services')}
                    className="btn-secondary w-full sm:w-auto"
                  >
                    Explore Capability <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
