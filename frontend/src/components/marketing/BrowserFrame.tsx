import * as React from "react";

import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface BrowserFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  /** Aspect ratio of the framed image. */
  ratio?: "16/10" | "4/3";
}

const RATIO: Record<NonNullable<BrowserFrameProps["ratio"]>, number> = {
  "16/10": 16 / 10,
  "4/3": 4 / 3,
};

/**
 * Wraps a product screenshot in subtle browser chrome so real product imagery
 * reads as "real software" — replacing decorative/fake visuals.
 */
export function BrowserFrame({
  src,
  alt,
  ratio = "16/10",
  className,
  ...props
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[16px] border border-hairline bg-paper shadow-[0_40px_80px_rgba(15,23,42,0.10)]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5 border-b border-hairline px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
      </div>
      <AspectRatio ratio={RATIO[ratio]}>
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </AspectRatio>
    </div>
  );
}
