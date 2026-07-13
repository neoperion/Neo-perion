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

export function ServiceSolutionCards({ service }: { service: ServiceData }) {
  if (!service.solutions || service.solutions.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#ffa959] py-24">
      <div className="container relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[#0A0A0B]">
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
              >
                {/* Icon + title inline */}
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={s.title}
                        className="h-15 w-15 object-contain"
                        style={{ filter: 'brightness(0)' }}
                      />
                    ) : (
                      <Icon className="text-[#0A0A0B]" size={28} strokeWidth={1.75} />
                    )}
                  </div>
                  <h3 className="text-[1.1rem] font-bold text-[#0A0A0B]">{s.title}</h3>
                </div>

                {/* Description */}
                <p className="pl-[68px] text-[14px] leading-relaxed text-[#0A0A0B]/65">{s.valueLine}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
