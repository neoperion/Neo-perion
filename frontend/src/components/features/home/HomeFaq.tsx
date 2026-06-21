import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";

const FAQS = [
  {
    q: "How fast can you ship?",
    a: "Most MVPs go from kickoff to a production deploy in 4–6 weeks. AI integrations into an existing product typically take 2–3 weeks. We scope a fixed timeline in the first week so there are no moving targets.",
  },
  {
    q: "Who actually writes the code?",
    a: "Senior engineers on our core team — no offshoring, no juniors learning on your budget. The people in the kickoff call are the people who ship your product.",
  },
  {
    q: "Who owns the IP and the code?",
    a: "You do, completely. All source, infrastructure, and accounts are transferred to you. We work in your repositories from day one, so there's never a handoff cliff.",
  },
  {
    q: "How does pricing work?",
    a: "MVP Sprints are fixed-scope, fixed-price (from $15k). Ongoing partnerships are a monthly retainer you can pause or scale (from $8k/mo). AI Integration Sprints start from $6k. We confirm the exact number after the free architecture review.",
  },
  {
    q: "What happens after launch?",
    a: "We don't disappear. Most clients move into an ongoing partnership for scaling, maintenance, and new features. If you'd rather take it in-house, we hand off clean, documented code and stay available for support.",
  },
  {
    q: "How do we get started?",
    a: "Book a free 30-minute architecture review. No NDA, no sales pitch — we dig straight into your problem and tell you how we'd build it. If it's a fit, we scope and schedule from there.",
  },
];

export const HomeFaq = () => {
  return (
    <Section bg="canvas" rhythm="supporting" divider>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading title="Questions, answered" />
        </div>
        <div className="lg:col-span-8">
          <FaqAccordion items={FAQS} />
        </div>
      </div>
    </Section>
  );
};
