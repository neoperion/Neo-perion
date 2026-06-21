import * as React from "react";

import { cn } from "@/lib/utils";

type Role = "surface" | "feature" | "metric";

const ROLE: Record<Role, string> = {
  surface: "p-6",
  feature: "p-8",
  metric: "p-6",
};

export interface MarketingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  role?: Role;
  /** Enable the standardized hover (border-brighten + soft shadow). */
  interactive?: boolean;
}

/**
 * The single card primitive. 16px radius, hairline border, paper surface.
 * Hover brightens the border and lifts the shadow — no translate, so cards
 * across the page share one quiet, consistent interaction.
 */
export function MarketingCard({
  role = "surface",
  interactive = true,
  className,
  children,
  ...props
}: MarketingCardProps) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-hairline bg-paper",
        ROLE[role],
        interactive &&
          "transition-[border-color,box-shadow] duration-200 hover:border-faint hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
