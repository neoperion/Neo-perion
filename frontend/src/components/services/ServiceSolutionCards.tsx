import { motion } from "framer-motion";
import type { ServiceData } from "@/data/servicesData";
import { getIcon } from "./serviceIcons";

const SOLUTION_IMAGES: Record<string, string> = {
  // AI Systems
  'AI Assistants':      '/images/ai.png',
  'AI Agents':          '/images/bot.png',
  'AI Automation':      '/images/organization.png',
  // Enterprise Product Engineering
  'MVP Development':    '/images/settings.png',
  'SaaS Platforms':     '/images/product-development%20(1).png',
  'Product Engineering':'/images/product-development.png',
  // Intelligent Ops / Cloud
  'Cloud Infrastructure':    '/images/cloud-computing.png',
  'CI/CD & Automation':      '/images/pipeline.png',
  'Monitoring & Reliability':'/images/monitoring-system.png',
  // Cloud-Native Web Platforms
  'Web Applications':   '/images/global-network.png',
  'Enterprise Portals': '/images/company.png',
  'Performance & SEO':  '/images/searching.png',
  // Startup-to-Scale
  'Fractional CTO':          '/images/board.png',
  'Architecture Audits':     '/images/checklist.png',
  'Technical Due Diligence': '/images/customer-service.png',
};

export function ServiceSolutionCards({ service, theme = "dark" }: { service: ServiceData; theme?: "dark" | "manuscript" }) {
  if (!service.solutions || service.solutions.length === 0) return null;

  return (
    <section className={`relative overflow-hidden py-24 ${theme === "manuscript" ? "bg-manuscript-parchment" : "bg-[#0A0A0B]"}`}>
      <div className="container relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <h2 className={`font-manuscript text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight ${theme === "manuscript" ? "text-manuscript-ink" : "text-white"}`}>
            What we build
          </h2>
        </div>

        {/* Solutions — flat list on orange bg */}
        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {service.solutions.map((s, i) => {
            const imgSrc = SOLUTION_IMAGES[s.title];
            const Icon = getIcon(s.icon);

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
                className={theme === "manuscript" ? "group rounded-2xl border border-manuscript-walnut/15 bg-manuscript-parchmentLight p-8 shadow-[0_4px_16px_rgba(31,26,20,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(31,26,20,0.08)]" : ""}
              >
                {/* Icon + title inline */}
                <div className="mb-6 flex items-start justify-between">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border ${theme === "manuscript" ? "bg-manuscript-parchmentWarm border-manuscript-walnut/15 shadow-sm" : "bg-white/5 border-white/10"}`}>
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={s.title}
                        className="h-8 w-8 object-contain"
                        style={theme === "dark" ? { filter: 'brightness(0) invert(1)' } : undefined}
                      />
                    ) : (
                      <Icon className={theme === "manuscript" ? "text-manuscript-copper" : "text-brand"} size={28} strokeWidth={1.75} />
                    )}
                  </div>
                  {theme === "manuscript" && (
                     <span className="font-mono text-[10px] font-bold text-manuscript-copper">0{i + 1}</span>
                  )}
                </div>
                
                <h3 className={`mb-3 text-[1.1rem] font-bold ${theme === "manuscript" ? "text-manuscript-ink" : "text-white"}`}>{s.title}</h3>

                {/* Description */}
                <p className={`text-[14px] leading-relaxed ${theme === "manuscript" ? "text-manuscript-inkSoft" : "text-white/70"}`}>{s.valueLine}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
