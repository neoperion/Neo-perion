import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";
import { getIcon } from "./serviceIcons";

const STEP_IMAGES: Record<string, string> = {
  'Discover':       '/images/database-storage.png',
  'Design':         '/images/artificial-intelligence.png',
  'Build':          '/images/build.png',
  'Deploy & Scale': '/images/group-users.png',
  'Launch':         '/images/settings.png',
  'Scale':          '/images/product-development%20(1).png',
  'Develop':        '/images/pipeline.png',
  'Test & Launch':  '/images/monitoring-system.png',
  'Support & Scale':'/images/cloud-computing.png',
  // startup-to-scale
  'Audit':    '/images/checklist.png',
  'Assess':   '/images/monitoring-system.png',
  'Roadmap':  '/images/pipeline.png',
  'Execute':  '/images/board.png',
};

const COLORFUL = new Set<string>([]);

export function ServiceJourney({ service }: { service: ServiceData }) {
  if (!service.journey || service.journey.length === 0) return null;

  return (
    <section className="bg-[#0A0A0B] py-24">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="mb-3 text-[11px] font-bold tracking-[0.28em] uppercase text-[#F77E0D]">
            Our Process
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-white">
              How We Build
            </h2>
            <p className="text-[15px] text-neutral-500">
              {service.journey.length} deliberate steps from brief to production.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07]">
          {service.journey.map((step, i) => {
            const Icon = getIcon(step.icon);
            const imgSrc = STEP_IMAGES[step.title];
            const isColorful = imgSrc && COLORFUL.has(imgSrc);

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.48, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                className="group relative grid grid-cols-1 gap-6 border-b border-white/[0.06] bg-white/[0.015] p-7 transition-all duration-200 hover:bg-white/[0.035] last:border-0 md:grid-cols-[80px_1fr_1fr] md:gap-10 md:items-center lg:p-9"
              >
                {/* Left orange bar */}
                <div className="absolute left-0 top-0 h-full w-[3px] scale-y-0 origin-center rounded-r bg-[#F77E0D] transition-transform duration-200 group-hover:scale-y-100" />

                {/* Icon box */}
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-200 group-hover:scale-105 ${isColorful ? 'bg-white' : 'bg-[#F77E0D]'}`}>
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={step.title}
                      className="h-9 w-9 object-contain"
                      style={!isColorful ? { filter: 'invert(1)' } : undefined}
                    />
                  ) : (
                    <Icon className="text-[#0A0A0B]" size={28} strokeWidth={1.75} />
                  )}
                </div>

                {/* Title + desc */}
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-[#F77E0D]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-6 bg-[#F77E0D]/30" />
                  </div>
                  <h3 className="text-[1.2rem] font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-neutral-400">{step.description}</p>
                </div>

                {/* Benefits */}
                {step.benefits && step.benefits.length > 0 && (
                  <ul className="flex flex-col gap-2.5">
                    {step.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="shrink-0 text-[#F77E0D]" strokeWidth={2} />
                        <span className="text-[13px] text-neutral-400">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
