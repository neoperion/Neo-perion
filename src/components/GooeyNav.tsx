import { useRef, useEffect, useState } from 'react';

interface GooeyNavItem {
  label: string;
  href: string;
  onClick?: () => void;
}

interface GooeyNavProps {
  items: GooeyNavItem[];
  initialActiveIndex?: number;
}

const GooeyNav = ({
  items,
  initialActiveIndex = 0
}: GooeyNavProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const particlesRef = useRef<Array<{x: number, y: number, vx: number, vy: number, life: number}>>([]);

  // Initialize canvas
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = containerRef.current.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const handleResize = () => {
      const newRect = containerRef.current?.getBoundingClientRect();
      if (newRect) {
        canvas.width = newRect.width;
        canvas.height = newRect.height;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation loop for particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.01;
        p.vy += 0.1; // gravity

        if (p.life > 0) {
          ctx.fillStyle = `rgba(0, 212, 255, ${p.life})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fill();

          // Glow
          ctx.strokeStyle = `rgba(0, 212, 255, ${p.life * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          particlesRef.current.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const createParticles = (x: number, y: number) => {
    const count = 15;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 3 + Math.random() * 3;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1
      });
    }
  };

  const updateEffectPosition = (element: HTMLElement): void => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };

    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText || element.textContent || '';
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, item: GooeyNavItem): void => {
    e.preventDefault();

    if (activeIndex === index) return;

    const liEl = (e.currentTarget as HTMLElement).parentElement;
    if (!liEl) return;

    // Call custom onClick handler if provided
    if (item.onClick) {
      item.onClick();
    }

    // Create particles from center of clicked element
    const rect = liEl.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      const x = rect.x - containerRect.x + rect.width / 2;
      const y = rect.y - containerRect.y + rect.height / 2;
      createParticles(x, y);
    }

    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (textRef.current) {
      textRef.current.classList.remove('active');
      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number, item: GooeyNavItem): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = (e.currentTarget as HTMLElement).parentElement;
      if (liEl) {
        handleClick(e as any, index, item);
      }
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;

    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi as HTMLElement);
      textRef.current?.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi as HTMLElement);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      <style>{`
        .gooey-container {
          position: relative;
          display: inline-block;
        }

        .gooey-container canvas {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 0;
        }

        .gooey-nav {
          position: relative;
          z-index: 10;
        }

        .gooey-effect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          display: grid;
          place-items: center;
          z-index: 2;
        }

        .gooey-effect.text {
          color: white;
          transition: color 0.3s ease;
          font-weight: inherit;
          font-size: inherit;
        }

        .gooey-effect.text.active {
          color: black;
        }

        .gooey-effect.filter {
          filter: blur(4px);
          mix-blend-mode: screen;
        }

        .gooey-effect.filter::after {
          content: "";
          position: absolute;
          inset: 0;
          background: transparent;
          transform: scale(0);
          opacity: 0;
          border-radius: 9999px;
          z-index: -1;
        }

        .gooey-effect.active::after {
          animation: gooey-expand 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes gooey-expand {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .gooey-nav {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 70px;
        }

        .gooey-nav li {
          position: relative;
          list-style: none;
        }

        .gooey-nav li.active {
          color: black;
        }

        .gooey-nav li.active::after {
          opacity: 1;
          transform: scale(1);
        }

        .gooey-nav li::after {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.15);
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: -1;
        }

        .gooey-nav a {
          display: inline-block;
          padding: 0.6em 1em;
          cursor: pointer;
          color: inherit;
          text-decoration: none;
          outline: none;
          font-weight: 500;
        }
      `}</style>

      <div className="gooey-container" ref={containerRef}>
        <canvas ref={canvasRef} />
        <nav className="flex relative" style={{ transform: 'translate3d(0,0,0.01px)' }}>
          <ul
            ref={navRef}
            className="gooey-nav"
            style={{
              color: 'white',
              textShadow: '0 1px 1px hsl(205deg 30% 10% / 0.2)'
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`rounded-full relative cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                <a
                  onClick={(e) => handleClick(e, index, item)}
                  href={item.href}
                  onKeyDown={(e) => handleKeyDown(e, index, item)}
                  role="button"
                  tabIndex={0}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="gooey-effect filter" ref={filterRef} />
        <span className="gooey-effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNav;

