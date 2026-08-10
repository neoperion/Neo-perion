import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";

/** Persistent CTA that appears after the user scrolls past the first viewport. */
export function ServiceStickyCta({ service, theme = "dark" }: { service: ServiceData; theme?: "dark" | "manuscript" }) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight);
        tickingRef.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => navigate("/contact")}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-mobile-nav inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-manuscript-parchmentLight transition-all duration-300 pb-safe-or-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      } ${
        theme === "manuscript"
          ? "bg-manuscript-copper shadow-[0_10px_30px_rgba(168,74,40,0.25)] hover:bg-manuscript-rustDeep"
          : "bg-brand shadow-[0_10px_30px_rgba(247,126,13,0.25)] hover:bg-[#FB8C2A]"
      }`}
    >
      {service.ctaText} <ArrowRight size={16} />
    </button>
  );
}
