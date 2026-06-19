import { useState, useEffect, useRef } from "react";
import { ArrowRight, Bot, Zap, Cloud, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  {
    id: "ai-systems",
    title: "AI Systems",
    icon: Bot,
    description: "Knowledge graphs, RAG pipelines, and multi-agent workflows built for enterprise scale.",
    features: ["Vector Databases", "LLM Fine-Tuning", "Autonomous Agents"],
    href: "/services/ai-systems-automation"
  },
  {
    id: "automation",
    title: "Enterprise Automation",
    icon: Zap,
    description: "Workflow automation, CRM integration, and intelligent document processing.",
    features: ["RPA Integration", "Data Pipelines", "Webhook Triggers"],
    href: "/services/intelligent-operations-automation"
  },
  {
    id: "cloud",
    title: "Cloud Native Platforms",
    icon: Cloud,
    description: "SaaS, multi-tenant architectures, and scalable backends.",
    features: ["Microservices", "Kubernetes", "Serverless Architecture"],
    href: "/services/cloud-native-web-platforms"
  },
  {
    id: "mobile-web",
    title: "Mobile & Web Products",
    icon: Smartphone,
    description: "Cross-platform apps, PWAs, and high-performance dashboards.",
    features: ["React / Next.js", "Flutter", "Real-time Subscriptions"],
    href: "/services/mobile-product-engineering"
  }
];

export const Services = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the visible entry with the highest intersection ratio
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => 
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          setActiveId(mostVisible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -40% 0px", // Trigger when element is roughly in the middle
        threshold: [0, 0.25, 0.5, 0.75, 1], // Provide granular updates
      }
    );

    SERVICES.forEach((service) => {
      const el = document.getElementById(service.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-900/5">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 relative">
          
          {/* Left Panel - Sticky */}
          <div className="hidden lg:block relative">
            <div className="sticky top-40 h-[600px] flex flex-col justify-center">
              <div className="mb-12">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-neo-blue mb-4">Core Capabilities</p>
                <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900">
                  Engineering <br /><span className="text-neo-gradient">Excellence</span>
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
                        isActive ? 'bg-white shadow-xl shadow-slate-200/50 scale-105 border border-neo-blue' : 'opacity-40 hover:opacity-100'
                      }`}
                      onClick={() => {
                        const el = document.getElementById(service.id);
                        // Using block: 'start' with an offset or just 'center' 
                        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-neo-blue/10' : 'bg-slate-200'}`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-neo-blue' : 'text-slate-500'}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-display font-bold ${isActive ? 'text-neo-navy' : 'text-slate-600'}`}>
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
               <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-neo-blue mb-4">Core Capabilities</p>
               <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900">
                 Engineering <span className="text-neo-gradient">Excellence</span>
               </h2>
            </div>

            {SERVICES.map((service) => (
              <div key={service.id} id={service.id} className="min-h-[40vh] flex flex-col justify-center transition-opacity duration-700">
                <div className={`premium-card p-8 md:p-12 transition-all duration-700 ${activeId === service.id ? 'opacity-100 scale-100' : 'opacity-80 scale-[0.98]'}`}>
                  <service.icon className="w-12 h-12 text-neo-blue mb-8 lg:hidden" />
                  <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 lg:hidden">{service.title}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                          <div className="w-3 h-3 rounded-full bg-neo-gradient neo-glow-card"></div>
                        </div>
                        <span className="text-lg font-semibold text-slate-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => navigate(service.href)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl border-[1.5px] border-neo-blue text-neo-blue font-semibold transition-all duration-300 hover:bg-neo-blue hover:text-white hover:neo-glow-btn"
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
