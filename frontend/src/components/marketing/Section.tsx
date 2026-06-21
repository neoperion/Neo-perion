import * as React from "react";

import { cn } from "@/lib/utils";

type Rhythm = "hero" | "primary" | "supporting" | "closing";
type Bg = "canvas" | "paper" | "navy";

const RHYTHM: Record<Rhythm, string> = {
  hero: "py-24 md:py-32",
  primary: "py-20 md:py-24",
  supporting: "py-16 md:py-20",
  closing: "py-24 md:py-32",
};

const BG: Record<Bg, string> = {
  canvas: "bg-canvas text-ink",
  paper: "bg-paper text-ink",
  navy: "bg-navy text-white",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Vertical spacing role — varies the page rhythm instead of a uniform py. */
  rhythm?: Rhythm;
  /** Surface tone. */
  bg?: Bg;
  /** Render a hairline bottom border between sections. */
  divider?: boolean;
  /** Opt out of the inner max-width container (full-bleed children). */
  bleed?: boolean;
  /** Extra classes for the inner container. */
  innerClassName?: string;
}

/**
 * Marketing section wrapper. Owns vertical rhythm, surface tone, the optional
 * hairline divider, and the shared 1200px container so individual sections stop
 * re-declaring `py-24 / container / px-6` ad hoc.
 */
export function Section({
  rhythm = "primary",
  bg = "canvas",
  divider = false,
  bleed = false,
  className,
  innerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        RHYTHM[rhythm],
        BG[bg],
        divider && "border-b border-hairline/60",
        className,
      )}
      {...props}
    >
      {bleed ? (
        children
      ) : (
        <div className={cn("container mx-auto max-w-[1200px] px-6 lg:px-8", innerClassName)}>
          {children}
        </div>
      )}
    </section>
  );
}
