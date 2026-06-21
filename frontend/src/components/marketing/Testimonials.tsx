import * as React from "react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MarketingCard } from "./MarketingCard";

export interface LeadTestimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  logo?: string;
}

export interface SecondaryTestimonial {
  quote: string;
  name: string;
  title: string;
}

export interface TestimonialsProps extends React.HTMLAttributes<HTMLDivElement> {
  lead: LeadTestimonial;
  secondary?: SecondaryTestimonial[];
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * One large editorial pull-quote (face + company logo) plus optional secondary
 * quotes. Replaces the generic 3-card testimonial carousel.
 */
export function Testimonials({ lead, secondary = [], className, ...props }: TestimonialsProps) {
  return (
    <div className={cn("flex flex-col gap-12", className)} {...props}>
      <figure className="flex flex-col gap-8">
        <blockquote className="font-display text-[clamp(22px,3vw,32px)] font-medium leading-snug text-ink md:max-w-[28ch]">
          “{lead.quote}”
        </blockquote>
        <figcaption className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            {lead.avatar ? <AvatarImage src={lead.avatar} alt={lead.name} /> : null}
            <AvatarFallback>{initials(lead.name)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold text-ink">{lead.name}</span>
            <span className="text-sm text-muted2">
              {lead.title}, {lead.company}
            </span>
          </div>
          {lead.logo ? (
            <img
              src={lead.logo}
              alt={lead.company}
              className="ml-auto h-7 w-auto opacity-70 grayscale"
            />
          ) : null}
        </figcaption>
      </figure>

      {secondary.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {secondary.map((item, idx) => (
            <MarketingCard key={`${item.name}-${idx}`} role="surface">
              <blockquote className="text-body leading-relaxed">“{item.quote}”</blockquote>
              <div className="mt-4 flex flex-col">
                <span className="text-sm font-semibold text-ink">{item.name}</span>
                <span className="text-sm text-muted2">{item.title}</span>
              </div>
            </MarketingCard>
          ))}
        </div>
      ) : null}
    </div>
  );
}
