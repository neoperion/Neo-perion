import * as React from "react";

import { cn } from "@/lib/utils";

export interface LogoWallLogo {
  src: string;
  alt: string;
}

export interface LogoWallProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  logos: LogoWallLogo[];
}

/**
 * Monochrome client-logo row. Greyscale at rest, full colour on hover — the
 * standard "trusted by" proof strip. Supply real logo SVGs via `logos`.
 */
export function LogoWall({ label, logos, className, ...props }: LogoWallProps) {
  return (
    <div className={cn("flex flex-col items-center gap-8", className)} {...props}>
      {label ? (
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted2">
          {label}
        </p>
      ) : null}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
        {logos.map((logo, idx) => (
          <img
            key={`${logo.alt}-${idx}`}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="h-7 w-auto opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0 md:h-8"
          />
        ))}
      </div>
    </div>
  );
}
