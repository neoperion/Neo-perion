import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronRight, Bot, Zap, Cloud, Smartphone, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

interface Capability {
  title: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  description: string;
  features: string[];
  cta: string;
  href: string;
  // PLACEHOLDER visuals — replace with real screenshots/diagrams (16:10, ~1200×750).
  image: string;
}

const CAPABILITIES: Capability[] = [
  {
    title: "AI Systems",
    icon: Bot,
    description:
      "Knowledge graphs, RAG pipelines, and multi-agent workflows built for enterprise scale — evaluated, observable, and production-hardened.",
    features: ["Vector databases", "LLM fine-tuning", "Autonomous agents"],
    cta: "See how we build RAG systems",
    href: "/services/ai-systems-automation",
    image: "/images/home/cap-ai.svg",
  },
  {
    title: "Enterprise Automation",
    icon: Zap,
    description:
      "Workflow automation, CRM integration, and intelligent document processing that removes manual work without breaking your systems.",
    features: ["RPA integration", "Data pipelines", "Webhook triggers"],
    cta: "Automate your operations",
    href: "/services/intelligent-operations-automation",
    image: "/images/home/cap-automation.svg",
  },
  {
    title: "Cloud Native Platforms",
    icon: Cloud,
    description:
      "Multi-tenant SaaS architectures and scalable backends on AWS/GCP — designed to hold up under real production load.",
    features: ["Microservices", "Kubernetes", "Serverless architecture"],
    cta: "Scale your platform",
    href: "/services/cloud-native-web-platforms",
    image: "/images/home/cap-cloud.svg",
  },
  {
    title: "Mobile & Web Products",
    icon: Smartphone,
    description:
      "Cross-platform apps, PWAs, and high-performance dashboards — fast, accessible, and built to ship.",
    features: ["React / Next.js", "Flutter", "Real-time subscriptions"],
    cta: "Ship your product",
    href: "/services/mobile-product-engineering",
    image: "/images/home/cap-mobile.svg",
  },
];

const INTERVAL = 6000;

export const Services = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setActive((prev) => (prev + 1) % CAPABILITIES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const current = CAPABILITIES[active];

  return (
    <Section id="services" bg="paper" rhythm="primary" divider>
      <SectionHeading
        eyebrow="Capabilities"
        title="Engineering excellence"
        lead="We build scalable, secure, and intelligent systems — robust architectures built for long-term production, not demos."
        className="mb-14 max-w-2xl"
      />

      <div
        className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
        onMouseEnter={() => {
          paused.current = true;
        }}
        onMouseLeave={() => {
          paused.current = false;
        }}
      >
        {/* Left — capability list (header motif) */}
        <div className="lg:col-span-5">
          <div>
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              const isActive = idx === active;
              return (
                <button
                  key={cap.title}
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => setActive(idx)}
                  className={`group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors ${
                    idx === 0 ? "" : "border-t border-hairline"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <Icon
                      className={`h-5 w-5 shrink-0 transition-colors ${
                        isActive ? "text-brand" : "text-faint"
                      }`}
                      strokeWidth={1.75}
                    />
                    <span
                      className={`text-[18px] font-semibold tracking-tight transition-colors ${
                        isActive ? "text-brand" : "text-ink group-hover:text-brand"
                      }`}
                    >
                      {cap.title}
                    </span>
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isActive
                        ? "border-brand bg-brand text-white"
                        : "border-hairline bg-paper text-faint group-hover:border-brand group-hover:text-brand"
                    }`}
                  >
                    <ChevronRight size={15} />
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => navigate("/services")}
            className="mt-8 inline-flex w-fit items-center rounded-full border border-brand px-5 py-2.5 text-[13px] font-semibold text-brand transition-colors duration-200 hover:bg-brand hover:text-white"
          >
            View all capabilities
          </button>
        </div>

        {/* Right — live preview card (who-we-are motif, square) */}
        <div className="lg:col-span-7">
          <div className="flex min-h-[540px] flex-col overflow-hidden border border-hairline bg-paper shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-1 flex-col"
              >
                {/* Visual — minimal browser chrome + 16:10 screenshot */}
                <div className="border-b border-hairline">
                  <div className="flex items-center gap-1.5 border-b border-hairline px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
                    <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
                    <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
                  </div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-canvas">
                    <img
                      src={current.image}
                      alt={`${current.title} preview`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-xl font-bold tracking-tight text-ink">{current.title}</h3>
                  <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-body">
                    {current.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {current.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium text-body">
                        <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(current.href)}
                    className="group mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-sm font-semibold text-brand"
                  >
                    {current.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
};
