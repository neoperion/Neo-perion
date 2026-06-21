import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

interface Capability {
  title: string;
  // PLACEHOLDER icon — drop your own 24×24 SVG at this path (see icons/ folder).
  icon: string;
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
    icon: "/images/home/icons/ai.svg",
    description:
      "Knowledge graphs, RAG pipelines, and multi-agent workflows built for enterprise scale — evaluated, observable, and production-hardened.",
    features: ["Vector databases", "LLM fine-tuning", "Autonomous agents"],
    cta: "See how we build RAG systems",
    href: "/services/ai-systems-automation",
    image: "/images/home/cap-ai.svg",
  },
  {
    title: "Enterprise Automation",
    icon: "/images/home/icons/automation.svg",
    description:
      "Workflow automation, CRM integration, and intelligent document processing that removes manual work without breaking your systems.",
    features: ["RPA integration", "Data pipelines", "Webhook triggers"],
    cta: "Automate your operations",
    href: "/services/intelligent-operations-automation",
    image: "/images/home/cap-automation.svg",
  },
  {
    title: "Cloud Native Platforms",
    icon: "/images/home/icons/cloud.svg",
    description:
      "Multi-tenant SaaS architectures and scalable backends on AWS/GCP — designed to hold up under real production load.",
    features: ["Microservices", "Kubernetes", "Serverless architecture"],
    cta: "Scale your platform",
    href: "/services/cloud-native-web-platforms",
    image: "/images/home/cap-cloud.svg",
  },
  {
    title: "Mobile & Web Products",
    icon: "/images/home/icons/mobile.svg",
    description:
      "Cross-platform apps, PWAs, and high-performance dashboards — fast, accessible, and built to ship.",
    features: ["React / Next.js", "Flutter", "Real-time subscriptions"],
    cta: "Ship your product",
    href: "/services/mobile-product-engineering",
    image: "/images/home/cap-mobile.svg",
  },
];

function VisualFrame({ image, title }: { image: string; title: string }) {
  return (
    <div className="overflow-hidden border border-hairline bg-paper shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
      <div className="flex items-center gap-1.5 border-b border-hairline px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
      </div>
      <div className="aspect-[16/10] w-full overflow-hidden bg-canvas">
        <img src={image} alt={`${title} preview`} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export const Services = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = CAPABILITIES[active];

  return (
    <Section id="services" bg="paper" rhythm="primary" divider>
      <SectionHeading
        eyebrow="Capabilities"
        title="Engineering excellence"
        lead="We build scalable, secure, and intelligent systems — robust architectures built for long-term production, not demos."
        className="mb-12 max-w-2xl"
      />

      <div className="grid gap-x-16 lg:grid-cols-2">
        {/* Left — scrolling capability blocks */}
        <div>
          {CAPABILITIES.map((cap, i) => {
            const isActive = i === active;
            return (
              <div
                key={cap.title}
                data-index={i}
                ref={(el) => (blockRefs.current[i] = el)}
                className="flex min-h-[58vh] flex-col justify-center border-t border-hairline py-12 first:border-t-0 lg:min-h-[64vh]"
              >
                <div
                  className={`transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-brand" : "text-faint"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-hairline" />
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-[10px] border transition-colors duration-300 ${
                        isActive ? "border-brand/30 bg-brand/[0.07]" : "border-hairline bg-canvas"
                      }`}
                    >
                      <img src={cap.icon} alt="" aria-hidden className="h-5 w-5 object-contain" />
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[clamp(24px,3vw,34px)] font-bold leading-tight tracking-tight text-ink">
                    {cap.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[16px] leading-relaxed text-body">
                    {cap.description}
                  </p>

                  {/* Mobile visual (sticky panel is desktop-only) */}
                  <div className="mt-7 lg:hidden">
                    <VisualFrame image={cap.image} title={cap.title} />
                  </div>

                  <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                    {cap.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium text-body">
                        <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate(cap.href)}
                    className="group mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand"
                  >
                    {cap.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right — pinned visual that swaps on scroll */}
        <div className="hidden lg:block">
          <div className="sticky top-28 flex h-[calc(100vh-7rem)] items-center">
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <VisualFrame image={current.image} title={current.title} />
                </motion.div>
              </AnimatePresence>

              {/* progress rail */}
              <div className="mt-6 flex gap-2">
                {CAPABILITIES.map((cap, i) => (
                  <span
                    key={cap.title}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      i === active ? "bg-brand" : "bg-hairline"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
