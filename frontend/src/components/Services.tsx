import React from "react";
import { ArrowRight, Bot, Zap, Cloud, Smartphone, Check } from "lucide-react";
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

  return (
    <section id="services" className="py-24 bg-[#FAFAFA] border-b border-[#E4E4E7]/60">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
        {/* Header */}
        <div className="mb-16 text-left max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#09090B] tracking-tight leading-[1.1] mb-6">
            Engineering Excellence
          </h2>
          <p className="text-slate-600 text-[15px] font-medium leading-relaxed">
            We build scalable, secure, and intelligent solutions. No templates, no shortcuts — just robust architectures built for long-term production.
          </p>
        </div>

        {/* 4-Card Grid (shown by default, no scroll interaction required) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white p-6 rounded-xl border border-[#E4E4E7] hover:border-[#A1A1AA] hover:-translate-y-0.5 transition-all duration-150 ease-out"
              >
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-[#E4E4E7] flex items-center justify-center text-neo-blue mb-6 group-hover:bg-neo-blue/5 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#09090B] mb-3 group-hover:text-neo-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed font-medium mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[12px] font-semibold text-slate-700">
                        <Check className="w-3.5 h-3.5 text-neo-blue shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore link */}
                <button
                  onClick={() => navigate(service.href)}
                  className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-bold text-neo-blue hover:text-neo-highlight transition-colors self-start"
                >
                  Explore Capability
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
