import { useEffect, useRef } from "react";

export function useMagnetic(radius = 60) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const nodeX = rect.left + rect.width / 2;
      const nodeY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - nodeX;
      const distanceY = e.clientY - nodeY;
      
      const distance = Math.hypot(distanceX, distanceY);
      
      if (distance < radius) {
        node.style.transform = `translate(${distanceX * 0.35}px, ${distanceY * 0.35}px)`;
        node.style.transition = "transform 0.1s ease-out";
      } else {
        node.style.transform = "translate(0px, 0px)";
        node.style.transition = "transform 0.3s ease-out";
      }
    };

    const handleMouseLeave = () => {
      node.style.transform = "translate(0px, 0px)";
      node.style.transition = "transform 0.3s ease-out";
    };

    window.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [radius]);

  return ref;
}
