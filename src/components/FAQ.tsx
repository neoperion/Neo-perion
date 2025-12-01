import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do we start working together?",
    answer: "Simply reach out via our contact form or email. We'll schedule a quick discovery call to understand your needs, then provide a clear proposal with timeline and pricing. No lengthy sales process—just straightforward conversation.",
  },
  {
    question: "Do you only work with tech companies?",
    answer: "Not at all! While we specialize in tech solutions, we work with businesses across all industries—from traditional retail to healthcare to professional services. If you need digital transformation, we can help.",
  },
  {
    question: "What if I don't have any technical background?",
    answer: "That's perfectly fine—most of our clients aren't technical experts. We pride ourselves on clear, jargon-free communication. We'll explain everything in plain language and guide you through every decision.",
  },
  {
    question: "How long does a typical project take?",
    answer: "It varies based on scope, but most initial implementations take 4-8 weeks. We work in sprints with regular check-ins, so you'll see progress quickly. For ongoing retainers, we deliver improvements continuously.",
  },
  {
    question: "Can you work with our existing tools?",
    answer: "Absolutely. We specialize in integrating and enhancing existing tool stacks. Whether you're using Salesforce, HubSpot, custom software, or anything else, we'll make it work better together.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We offer flexible support packages including monthly retainers, on-demand hours, or project-based engagements. Many clients start with a project and transition to ongoing partnership.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: '#050816' }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:border-primary/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
