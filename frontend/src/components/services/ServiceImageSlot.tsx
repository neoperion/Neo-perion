import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface ServiceImageSlotProps {
  src?: string;
  /** Short label shown on the placeholder so you know which image goes here. */
  label: string;
  className?: string;
}

/**
 * Renders an image, or — when the src is missing/404s — a branded dark
 * placeholder with the slot label, so the layout always looks intentional
 * while you're still dropping real images in.
 */
export function ServiceImageSlot({ src, label, className = "" }: ServiceImageSlotProps) {
  const [failed, setFailed] = useState(false);
  const show = src && !failed;

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentLight ${className}`}>
      {show ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(120%_120%_at_70%_0%,#1A1A1D_0%,#F4EBD7_70%)]">
          <ImageIcon className="text-brand/60" size={28} />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-manuscript-inkMuted">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
