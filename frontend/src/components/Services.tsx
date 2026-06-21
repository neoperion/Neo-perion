import { ArrowRight, Bot, Zap, Cloud, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { MarketingCard } from "@/components/marketing/MarketingCard";
import { BrowserFrame } from "@/components/marketing/BrowserFrame";

const LEAD = {
  title: "AI Systems",
  icon: Bot,
  description:
    "Knowledge graphs, RAG pipelines, and multi-agent workflows built for enterprise scale — evaluated, observable, and production-hardened.",
  cta: "See how we build RAG systems",
  href: "/services/ai-systems-automation",
};

const ROWS = [
  {
    title: "Enterprise Automation",
    icon: Zap,
    description: "Workflow automation, CRM integration, and intelligent document processing.",
    cta: "Automate your operations",
    href: "/services/intelligent-operations-automation",
  },
  {
    title: "Cloud Native Platforms",
    icon: Cloud,
    description: "Multi-tenant SaaS architectures and scalable backends on AWS/GCP.",
    cta: "Scale your platform",
    href: "/services/cloud-native-web-platforms",
  },
  {
    title: "Mobile & Web Products",
    icon: Smartphone,
    description: "Cross-platform apps, PWAs, and high-performance dashboards.",
    cta: "Ship your product",
    href: "/services/mobile-product-engineering",
  },
];

export const Services = () => {
  const navigate = useNavigate();
  const LeadIcon = LEAD.icon;

  return (
    <Section id="services" bg="paper" rhythm="primary" divider>
      <SectionHeading
        eyebrow="Capabilities"
        title="Engineering excellence"
        lead="We build scalable, secure, and intelligent systems — robust architectures built for long-term production, not demos."
        className="mb-14 max-w-2xl"
      />

      <div className="grid items-start gap-8 lg:grid-cols-12">
        {/* Lead service */}
        <MarketingCard role="feature" className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex items-start gap-4">
            <LeadIcon className="h-6 w-6 shrink-0 text-brand" strokeWidth={1.75} />
            <div>
              <h3 className="text-2xl font-bold text-ink">{LEAD.title}</h3>
              <p className="mt-2 max-w-[48ch] text-body leading-relaxed">{LEAD.description}</p>
            </div>
          </div>
          <BrowserFrame
            src="/images/home/placeholder-screenshot.svg"
            alt="AI system architecture"
            ratio="16/10"
          />
          <button
            onClick={() => navigate(LEAD.href)}
            className="group inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand"
          >
            {LEAD.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </MarketingCard>

        {/* Secondary services as text rows */}
        <div className="divide-y divide-hairline lg:col-span-5">
          {ROWS.map((row) => {
            const Icon = row.icon;
            return (
              <button
                key={row.title}
                onClick={() => navigate(row.href)}
                className="group flex w-full items-start gap-4 py-6 text-left first:pt-0"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-muted2" strokeWidth={1.75} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-ink transition-transform duration-200 group-hover:translate-x-1">
                      {row.title}
                    </h3>
                    <ArrowRight className="h-4 w-4 -translate-x-1 text-brand opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted2">{row.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
