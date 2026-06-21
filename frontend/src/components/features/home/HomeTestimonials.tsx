import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

// PLACEHOLDER testimonials — replace with real client quotes, names & companies.
const FEATURED = {
  quote:
    "Neo Perion didn't just build the platform — they owned the outcome. Six months post-launch they're still the team we call first.",
  name: "Anand Krishnan",
  title: "VP Engineering",
  company: "MediCare Health Network",
};

const QUOTES = [
  { quote: "They shipped a serverless platform that held 50k concurrent users on launch day without a hiccup.", name: "Priya Raman", title: "CTO", company: "Global EduTech" },
  { quote: "Senior engineers from day one. No hand-holding, no offshoring surprises — just clean, production-grade delivery.", name: "Daniel Okafor", title: "Founder", company: "RetailIQ" },
  { quote: "They cut our infra costs while doubling throughput. The kind of engineering that pays for itself.", name: "Sarah Chen", title: "Head of Product", company: "FinFlow" },
  { quote: "Onboarding that used to take weeks now takes a day — they rebuilt it properly, end to end.", name: "Marcus Lee", title: "COO", company: "Shiply" },
  { quote: "We've worked with three agencies. Neo Perion is the only one we renewed — twice.", name: "Aisha Khan", title: "VP Product", company: "Lumen" },
  { quote: "Clear scope, fixed price, shipped on time. Refreshingly boring in exactly the right way.", name: "Tom Becker", title: "CEO", company: "Northwind" },
];

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand/10 font-semibold text-brand"
      style={{ width: size, height: size, fontSize: size * 0.34 }}
    >
      {initials(name)}
    </span>
  );
}

function QuoteCard({ q }: { q: (typeof QUOTES)[number] }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col justify-between gap-6 border border-hairline bg-paper p-7 md:w-[380px]">
      <blockquote className="text-[15px] leading-relaxed text-body">{q.quote}</blockquote>
      <figcaption className="flex items-center gap-3">
        <Avatar name={q.name} />
        <div>
          <div className="text-sm font-semibold text-ink">{q.name}</div>
          <div className="text-[13px] text-muted2">{q.title}, {q.company}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export const HomeTestimonials = () => {
  const reduce = useReducedMotion();

  const reveal = {
    initial: { opacity: 0, y: reduce ? 0 : 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const },
  };

  return (
    <Section bg="paper" rhythm="primary" divider>
      <SectionHeading
        eyebrow="Testimonials"
        title="The team they keep on speed-dial"
        lead="Senior engineering that earns repeat work — a few words from the people we build with."
        className="mb-12 max-w-2xl"
      />

      {/* Featured — quote + centered attribution (no invented metrics) */}
      <motion.div
        {...reveal}
        className="grid overflow-hidden border border-hairline bg-paper shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:grid-cols-3"
      >
        <div className="md:col-span-2 p-8 md:p-12">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden className="text-brand/25">
            <path
              d="M10 7H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3H6m12-11h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3h-2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <blockquote className="mt-5 max-w-[26ch] font-display text-[clamp(21px,2.5vw,30px)] font-medium leading-snug text-ink md:max-w-[30ch]">
            {FEATURED.quote}
          </blockquote>
        </div>

        <div className="flex flex-col justify-center gap-5 border-t border-hairline bg-canvas p-8 md:border-l md:border-t-0 md:p-12">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted2">
            {FEATURED.company}
          </span>
          <div className="flex items-center gap-3.5">
            <Avatar name={FEATURED.name} size={52} />
            <div>
              <div className="text-[15px] font-semibold text-ink">{FEATURED.name}</div>
              <div className="text-sm text-muted2">{FEATURED.title}</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Auto-scrolling marquee (two equal groups → seamless -50% loop) */}
      <div className="np-marquee-group relative mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="np-marquee flex w-max will-change-transform">
          <div className="flex gap-5 pr-5">
            {QUOTES.map((q, i) => (
              <QuoteCard key={`a-${i}`} q={q} />
            ))}
          </div>
          <div className="flex gap-5 pr-5" aria-hidden>
            {QUOTES.map((q, i) => (
              <QuoteCard key={`b-${i}`} q={q} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
