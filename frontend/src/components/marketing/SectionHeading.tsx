import * as React from "react";

import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional kicker — use sparingly. */
  eyebrow?: string;
  title: React.ReactNode;
  /** Optional supporting paragraph below the title. */
  lead?: React.ReactNode;
  align?: "left" | "center";
  /** Heading level for semantics (visual size is fixed). */
  as?: "h1" | "h2";
}

/**
 * Composes the standard section header: optional Eyebrow + H2 + optional lead.
 * One place owns the heading type ramp so every section matches.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Heading = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
      {...props}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className="text-[clamp(28px,4vw,40px)] font-display font-bold leading-[1.1] tracking-[-0.02em] text-ink">
        {title}
      </Heading>
      {lead ? (
        <p
          className={cn(
            "max-w-[65ch] text-base leading-relaxed text-body md:text-lg",
            centered && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
