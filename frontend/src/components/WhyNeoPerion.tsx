import { motion } from "framer-motion";
import { BrainCircuit, Rocket, ShieldCheck, Server, Target, Zap } from "lucide-react";

import { Section } from "@/components/marketing/Section";

const bentoItems = [
  {
    title: "Deep AI Expertise",
    description:
      "We don't just call APIs — we fine-tune LLMs, build custom vector databases, and implement true agentic workflows that change how your business operates.",
    icon: BrainCircuit,
    accent: true,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Enterprise Grade",
    description: "Bank-level security, SOC2 compliance readiness, and zero-trust architectures.",
    icon: ShieldCheck,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Fast Delivery",
    description: "Proprietary internal tooling lets us ship production-ready platforms in weeks.",
    icon: Rocket,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Startup Friendly",
    description: "Agile, transparent, and built to pivot. We act as your elite technical co-founders.",
    icon: Target,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Production Ready",
    description: "Infinite scale on AWS/GCP. Kubernetes, CI/CD pipelines, and clustered databases.",
    icon: Server,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Long-term Support",
    description:
      "We don't disappear after launch. Ongoing scaling, maintenance, and feature development for years.",
    icon: Zap,
    isDark: true,
    className: "md:col-span-3 md:row-span-1",
  },
];

export const WhyNeoPerion = () => {
  return (
    <Section id="why-us" bg="canvas" rhythm="primary" divider className="overflow-hidden">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-ink">
          Built for scale.{" "}
          <span className="font-serif font-normal italic text-muted2">
            Engineered for excellence.
          </span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:auto-rows-[minmax(240px,auto)] md:grid-cols-3">
        {bentoItems.map((item, index) => {
          const Icon = item.icon;
          const isDark = item.isDark;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`group relative flex flex-col overflow-hidden rounded-[16px] border p-6 transition-[border-color,box-shadow] duration-200 md:p-8 ${
                isDark
                  ? "border-navy bg-navy text-white"
                  : "border-hairline bg-paper hover:border-faint hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
              } ${item.className}`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  isDark ? "bg-white/10" : "bg-canvas border border-hairline"
                }`}
              >
                <Icon
                  className={item.accent ? "h-6 w-6 text-brand" : isDark ? "h-6 w-6 text-white" : "h-6 w-6 text-ink"}
                  strokeWidth={1.75}
                />
              </div>

              <div className="mt-auto pt-6">
                <h3
                  className={`mb-2 font-display text-lg font-bold tracking-tight ${
                    isDark ? "text-white" : "text-ink"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-[13px] font-medium leading-relaxed ${
                    isDark ? "text-slate-300" : "text-muted2"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
