import * as React from "react";

import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  label: string;
}

export interface StatBandProps extends React.HTMLAttributes<HTMLDivElement> {
  stats: Stat[];
}

/**
 * Row of hard credibility numbers. Value is the dominant element; label is
 * muted support. Values are strings so they can read like "0 abandoned".
 */
export function StatBand({ stats, className, ...props }: StatBandProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3",
        className,
      )}
      {...props}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1">
          <span className="font-display text-[clamp(28px,4vw,40px)] font-bold leading-none text-ink">
            {stat.value}
          </span>
          <span className="text-sm text-muted2">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
