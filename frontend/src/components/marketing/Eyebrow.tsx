import * as React from "react";

import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * Restrained section kicker. Used sparingly (≤3 sections on the homepage) with
 * tight `0.08em` tracking — not the dated wide-tracked label on every block.
 */
export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[12px] font-semibold uppercase tracking-[0.08em] text-brand",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
