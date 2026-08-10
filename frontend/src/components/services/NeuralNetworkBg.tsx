import { useEffect, useRef } from "react";

interface NeuralNetworkBgProps {
  /** Node/line color (defaults to brand orange). */
  color?: string;
  /** Roughly how dense the network is. Higher = more nodes. */
  density?: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

/**
 * Lightweight animated "neural network" background — drifting nodes with
 * connecting lines, drawn on a 2D canvas. No video asset, no heavy deps.
 * Honors prefers-reduced-motion (renders a single static frame) and pauses
 * when the tab is hidden.
 */
export function NeuralNetworkBg({ color = "#A84A28", density = 1 }: NeuralNetworkBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const LINK_DIST = 150;
    let nodes: Node[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;

    const hexToRgb = (hex: string) => {
      const m = hex.replace("#", "");
      const n = parseInt(m.length === 3 ? m.split("").map((c) => c + c).join("") : m, 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    };
    const { r, g, b } = hexToRgb(color);

    const seed = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? canvas.clientWidth;
      height = rect?.height ?? canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor((width * height) / 14000) * density);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const a = (1 - dist / LINK_DIST) * 0.5;
            ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      // nodes
      for (const node of nodes) {
        ctx.fillStyle = `rgba(${r},${g},${b},0.9)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    seed();
    if (reduced) {
      draw();
    } else {
      raf = requestAnimationFrame(step);
    }

    const onResize = () => {
      cancelAnimationFrame(raf);
      seed();
      if (reduced) draw();
      else raf = requestAnimationFrame(step);
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        raf = requestAnimationFrame(step);
      }
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [color, density]);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
}
