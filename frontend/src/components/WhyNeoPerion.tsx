import { motion } from "framer-motion";
import { BrainCircuit, Rocket, ShieldCheck, Server, Target, Zap } from "lucide-react";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const items = [
  {
    title: "Deep AI expertise",
    description:
      "We fine-tune LLMs, build custom vector databases, and ship true agentic workflows — not thin API wrappers.",
    icon: BrainCircuit,
  },
  {
    title: "Enterprise grade",
    description: "Bank-level security, SOC2 compliance readiness, and zero-trust architectures.",
    icon: ShieldCheck,
  },
  {
    title: "Fast delivery",
    description: "Proprietary internal tooling lets us ship production-ready platforms in weeks.",
    icon: Rocket,
  },
  {
    title: "Startup friendly",
    description: "Agile, transparent, and built to pivot. We act as your elite technical co-founders.",
    icon: Target,
  },
  {
    title: "Production ready",
    description: "Infinite scale on AWS/GCP — Kubernetes, CI/CD pipelines, and clustered databases.",
    icon: Server,
  },
  {
    title: "Long-term support",
    description: "We don't disappear after launch — ongoing scaling, maintenance, and new features for years.",
    icon: Zap,
  },
];

export const WhyNeoPerion = () => {
  return (
    <Section id="why-us" bg="canvas" rhythm="primary" divider>
      <SectionHeading
        eyebrow="Why Neo Perion"
        title="Built for scale, engineered to last"
        lead="The standards we hold on every engagement — from first commit to long after launch."
        className="mb-12 max-w-2xl"
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex flex-col gap-4 bg-paper p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-hairline bg-canvas">
                <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="mb-2 text-[17px] font-bold tracking-tight text-ink">{item.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted2">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
