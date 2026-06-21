import { Section } from "@/components/marketing/Section";
import { Testimonials } from "@/components/marketing/Testimonials";

// PLACEHOLDER testimonials — replace with real client quotes, names, photos, and logos
// (see public/images/ASSETS.md). Avatars point at placeholder SVGs for now.
const LEAD = {
  quote:
    "Neo Perion didn't just build the platform — they owned the outcome. Six months post-launch they're still the team we call first.",
  name: "Anand Krishnan",
  title: "VP Engineering",
  company: "MediCare Health Network",
  avatar: "/images/testimonials/avatar-1.svg",
};

const SECONDARY = [
  {
    quote:
      "They shipped a serverless platform that held 50k concurrent users on launch day without a hiccup.",
    name: "Priya Raman",
    title: "CTO, Global EduTech",
  },
  {
    quote:
      "Senior engineers from day one. No hand-holding, no offshoring surprises — just clean, production-grade delivery.",
    name: "Daniel Okafor",
    title: "Founder, RetailIQ",
  },
];

export const HomeTestimonials = () => {
  return (
    <Section bg="paper" rhythm="primary" divider>
      <Testimonials lead={LEAD} secondary={SECONDARY} />
    </Section>
  );
};
