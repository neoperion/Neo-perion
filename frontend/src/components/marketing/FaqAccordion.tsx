import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  q: string;
  a: React.ReactNode;
}

export interface FaqAccordionProps {
  items: FaqItem[];
}

/**
 * Objection-handling FAQ built on the shadcn accordion. Single-open, collapsible.
 */
export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`} className="border-hairline">
          <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-body leading-relaxed">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
