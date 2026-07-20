import React, { useEffect, useRef } from 'react';
import './why-choose.css';

export function WhyChooseSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------- icons ---------------- */
    const I: Record<string, string> = {
      brain: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/></svg>',
      cloud: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
      shield: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
      layers: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="M2 12.5 12 17l10-4.5"/><path d="M2 17.5 12 22l10-4.5"/></svg>',
      zap: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>',
      code: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
      trend: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/></svg>',
      check: '<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>',
      x: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
      arrow: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
      play: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m10 8.5 5 3.5-5 3.5Z"/></svg>',
      rocket: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.18 2.18 0 0 0-2.9-.1Z"/><path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2Z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0"/><path d="M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/></svg>',
      users: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      user: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>'
    };
    root.querySelectorAll('.np-node__ring').forEach((r: any) => { r.innerHTML = I[r.dataset.icon]; });
    root.querySelectorAll('[data-icon-host]').forEach((h: any) => { h.innerHTML = I[h.dataset.iconHost]; });

    /* ---------------- capability data ---------------- */
    const CAPS: Record<string, any> = {
      ai: { icon: 'brain', title: 'AI Engineering', desc: 'AI is embedded in our entire engineering lifecycle.', items: ['AI-assisted code generation', 'Intelligent code review', 'Automated test generation', 'RAG-powered documentation', 'Predictive issue detection'] },
      cloud: { icon: 'cloud', title: 'Cloud Native', desc: 'Born on the cloud — architected for it, not migrated to it.', items: ['AWS-native architecture', 'Kubernetes orchestration', 'Auto-scaling by default', 'Multi-AZ resilience', 'Infrastructure as Code (Terraform)'] },
      security: { icon: 'shield', title: 'Security First', desc: 'Security is engineered into every layer from day one.', items: ['Least-privilege IAM design', 'Encryption at rest & in transit', 'Automated vulnerability scans', 'Secrets management built in', 'Compliance-ready audit trails'] },
      arch: { icon: 'layers', title: 'Product Architecture', desc: 'Systems designed before they are built — for the long run.', items: ['Domain-driven design', 'API-first service contracts', 'Event-driven workflows', 'Scalable data models', 'Modular, future-proof structure'] },
      auto: { icon: 'zap', title: 'Automation', desc: 'Everything that can be automated, is automated.', items: ['End-to-end CI/CD pipelines', 'Automated testing gates', 'Self-healing remediation', 'Scheduled ops runbooks', 'One-click environment spin-up'] },
      devops: { icon: 'code', title: 'DevOps Excellence', desc: 'Ship fast and safely — without breaking what works.', items: ['Blue-green deployments', 'Zero-downtime releases', 'Observability by default', 'Instant rollback paths', 'SLO-driven operations'] },
      growth: { icon: 'trend', title: 'Scalable Growth', desc: 'Built for 10x traffic — not just for launch day.', items: ['Horizontal autoscaling', 'Load-tested headroom', 'Performance budgets', 'Cost-aware scaling', 'Growth-ready data layer'] }
    };

    const detail = root.querySelector('#npDetail') as HTMLElement,
          dIcon = root.querySelector('#npDetailIcon') as HTMLElement,
          dTitle = root.querySelector('#npDetailTitle') as HTMLElement,
          dDesc = root.querySelector('#npDetailDesc') as HTMLElement,
          dList = root.querySelector('#npDetailList') as HTMLElement,
          nodes = [...root.querySelectorAll('.np-node')] as HTMLElement[];

    function setCap(key: string) {
      const c = CAPS[key]; if (!c) return;
      detail.classList.remove('is-closed');
      dIcon.innerHTML = I[c.icon];
      dTitle.textContent = c.title;
      dDesc.textContent = c.desc;
      dList.innerHTML = c.items.map((t: string) => `<li><i>${I.check}</i>${t}</li>`).join('');
      nodes.forEach(n => n.classList.toggle('is-active', n.dataset.cap === key));
      detail.classList.remove('is-pop'); void detail.offsetWidth; detail.classList.add('is-pop');
    }
    
    const clickHandlers = nodes.map(n => {
      const handler = () => setCap(n.dataset.cap!);
      n.addEventListener('click', handler);
      return { node: n, handler };
    });
    
    const closeBtn = root.querySelector('#npDetailClose');
    const closeHandler = () => {
      detail.classList.add('is-closed');
      nodes.forEach(n => n.classList.remove('is-active'));
    };
    if (closeBtn) closeBtn.addEventListener('click', closeHandler);

    setCap('ai');

    /* ---------------- stats count-up ---------------- */
    const stats = [...root.querySelectorAll('[data-count]')] as HTMLElement[];
    function runCounts() {
      stats.forEach(el => {
        const target = parseFloat(el.dataset.count!), dec = parseInt(el.dataset.dec || '0', 10),
              suf = el.dataset.suffix || '', dur = reduce ? 0 : 1100, start = performance.now();
        function step(t: number) {
          const p = dur ? Math.min((t - start) / dur, 1) : 1, e = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * e).toFixed(dec) + suf;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { runCounts(); io.disconnect(); }
      }), { threshold: .4 });
      const npStats = root.querySelector('#npStats');
      if (npStats) io.observe(npStats);
    } else runCounts();

    /* ====================================================================
       DNA HELIX — silver/white particle ribbons, faint warm accents
       ==================================================================== */
    const stage = root.querySelector('#npStage') as HTMLElement,
          canvas = root.querySelector('#npHelix') as HTMLCanvasElement;
    if (!stage || !canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let W = 0, H = 0, dpr = 1, raf = 0, t0 = performance.now(), running = false;

    function makeSprite(inner: string, mid: string, outer: string) {
      const c = document.createElement('canvas'); c.width = c.height = 64;
      const g = c.getContext('2d')!;
      const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grd.addColorStop(0, inner);
      grd.addColorStop(.28, mid);
      grd.addColorStop(1, outer);
      g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
      return c;
    }
    const SP_SOFT = makeSprite('rgba(255,250,244,.7)', 'rgba(255,228,196,.22)', 'rgba(255,255,255,0)');
    const SP_HOT = makeSprite('rgba(255,255,250,1)', 'rgba(255,214,160,.5)', 'rgba(255,255,255,0)');

    function sprite(s: HTMLCanvasElement, x: number, y: number, d: number, a: number) {
      ctx!.globalAlpha = a;
      ctx!.drawImage(s, x - d / 2, y - d / 2, d, d);
      ctx!.globalAlpha = 1;
    }

    let cx = 0, top = 0, bottom = 0, len = 0, Rbase = 0;
    const TURNS = 2.6;
    function taper(u: number) {
      if (u < 0.07) return .72 + .28 * (u / .07);
      if (u > 0.85) return 1 - .7 * ((u - .85) / .15);
      return 1;
    }
    function pt(u: number, ph: number, spin: number) {
      const th = u * TURNS * 2 * Math.PI + spin + ph;
      const R = Rbase * taper(u);
      return { x: cx + Math.sin(th) * R, y: top + u * len, z: Math.cos(th), th };
    }

    const SPARK: any[] = [];
    for (let i = 0; i < 16; i++) SPARK.push({
      rx: (Math.random() * 2 - 1), ry: Math.random(),
      r: .7 + Math.random() * 1.5, ph: Math.random() * 6.28, sp: .6 + Math.random() * 1.2,
      big: Math.random() > .85
    });

    function drawRibbon(wantFront: boolean, spin: number) {
      const N = 200;
      for (let s = 0; s < 2; s++) {
        const ph = s * Math.PI;
        for (let i = 0; i <= N; i++) {
          const u = i / N, p = pt(u, ph, spin);
          if ((p.z >= 0) !== wantFront) continue;
          const d = (p.z + 1) / 2;
          const wf = .25 + .75 * Math.abs(Math.sin(p.th));
          const w = (3 + 8 * wf) * (.5 + .5 * d);
          sprite(SP_SOFT, p.x, p.y, w * 2.9, .03 + .07 * d);
          for (let k = 0; k < 3; k++) {
            const off = Math.random() * 2 - 1;
            const edge = Math.abs(off) > .72;
            const px = p.x + off * w + (Math.random() - .5) * 1.5;
            const py = p.y + (Math.random() - .5) * 2.6;
            const a = (edge ? .4 : .2) * (.25 + .75 * d);
            ctx!.fillStyle = edge ? `rgba(255,244,232,${a})` : `rgba(206,201,194,${a})`;
            ctx!.fillRect(px, py, edge ? 1.6 : 1.2, edge ? 1.6 : 1.2);
          }
        }
      }
    }

    function drawRungs(wantFront: boolean, spin: number) {
      const RN = 16, SEG = 8;
      for (let i = 0; i <= RN; i++) {
        const u = i / RN; if (u < .03 || u > .96) continue;
        const a = pt(u, 0, spin), b = pt(u, Math.PI, spin);
        for (let k = 0; k < SEG; k++) {
          const f0 = k / SEG, f1 = (k + 1) / SEG, fm = (f0 + f1) / 2;
          const zm = a.z + (b.z - a.z) * fm;
          if ((zm >= 0) !== wantFront) continue;
          const x0 = a.x + (b.x - a.x) * f0, x1 = a.x + (b.x - a.x) * f1;
          const dd = (zm + 1) / 2;
          ctx!.strokeStyle = `rgba(233,228,221,${.035 + .15 * dd})`;
          ctx!.lineWidth = 1 + .5 * dd;
          ctx!.beginPath(); ctx!.moveTo(x0, a.y); ctx!.lineTo(x1, a.y); ctx!.stroke();
        }
        for (const f of [.3, .5, .7]) {
          const z = a.z + (b.z - a.z) * f;
          if ((z >= 0) !== wantFront) continue;
          const x = a.x + (b.x - a.x) * f, dd = (z + 1) / 2;
          sprite(SP_SOFT, x, a.y, 5 + 7 * dd, .14 + .2 * dd);
        }
      }
    }

    function drawCrossings(spin: number) {
      let prev = Math.sin(pt(0, 0, spin).th);
      for (let i = 1; i <= 150; i++) {
        const u = i / 150, p = pt(u, 0, spin), s = Math.sin(p.th);
        if ((s >= 0) !== (prev >= 0)) {
          const k = taper(u);
          sprite(SP_HOT, cx, p.y, 30 * k + 12, .4);
          sprite(SP_SOFT, cx, p.y, 78 * k + 20, .22);
        }
        prev = s;
      }
    }

    function drawSphere(x: number, y: number, r: number, d: number) {
      const g = ctx!.createRadialGradient(x - r * .4, y - r * .45, r * .1, x, y, r);
      g.addColorStop(0, `rgba(${128 + d * 62},${122 + d * 58},${114 + d * 54},1)`);
      g.addColorStop(.35, 'rgba(32,30,28,1)');
      g.addColorStop(1, 'rgba(6,5,5,1)');
      ctx!.fillStyle = g;
      ctx!.beginPath(); ctx!.arc(x, y, r, 0, Math.PI * 2); ctx!.fill();
      ctx!.strokeStyle = `rgba(255,255,255,${.08 + .16 * d})`;
      ctx!.lineWidth = 1.1;
      ctx!.beginPath(); ctx!.arc(x, y, r - .6, Math.PI * .15, Math.PI * .95); ctx!.stroke();
      ctx!.fillStyle = `rgba(255,252,246,${.4 + .35 * d})`;
      ctx!.beginPath(); ctx!.arc(x - r * .38, y - r * .42, Math.max(1, r * .15), 0, Math.PI * 2); ctx!.fill();
    }

    function drawSpheres(wantFront: boolean, spin: number) {
      const list = [];
      for (let s = 0; s < 2; s++) {
        const ph = s * Math.PI;
        for (let i = 0; i < 11; i++) {
          const u = .045 + (i / 10) * .9 + (s ? .045 : 0);
          if (u > .985) continue;
          const p = pt(u, ph, spin);
          if ((p.z >= 0) !== wantFront) continue;
          const d = (p.z + 1) / 2;
          list.push({ x: p.x, y: p.y, z: p.z, r: (5.5 + 3.2 * d) * (.55 + .45 * taper(u)) });
        }
      }
      list.sort((a, b) => a.z - b.z);
      for (const s of list) drawSphere(s.x, s.y, s.r, (s.z + 1) / 2);
    }

    function draw(now: number) {
      const t = reduce ? 1.2 : (now - t0) / 1000;
      const spin = t * .5;
      ctx!.clearRect(0, 0, W, H);

      ctx!.globalCompositeOperation = 'lighter';

      /* BACK layer */
      drawRungs(false, spin);
      drawRibbon(false, spin);
      ctx!.globalCompositeOperation = 'source-over';
      drawSpheres(false, spin);

      ctx!.globalCompositeOperation = 'lighter';
      drawCrossings(spin);

      /* FRONT layer */
      drawRungs(true, spin);
      drawRibbon(true, spin);
      ctx!.globalCompositeOperation = 'source-over';
      drawSpheres(true, spin);

      /* sparkles + base glow */
      ctx!.globalCompositeOperation = 'lighter';
      for (const sp of SPARK) {
        const x = cx + sp.rx * Rbase * 2.3, y = top + sp.ry * len;
        const tw = reduce ? .6 : (.3 + .7 * (0.5 + 0.5 * Math.sin(t * sp.sp + sp.ph)));
        sprite(SP_SOFT, x, y, sp.r * 5, .2 * tw);
        if (sp.big) {
          ctx!.strokeStyle = `rgba(255,250,242,${.22 * tw})`;
          ctx!.lineWidth = .8;
          ctx!.beginPath();
          ctx!.moveTo(x - sp.r * 3.4, y); ctx!.lineTo(x + sp.r * 3.4, y);
          ctx!.moveTo(x, y - sp.r * 3.4); ctx!.lineTo(x, y + sp.r * 3.4);
          ctx!.stroke();
        }
      }
      sprite(SP_HOT, cx, bottom + 4, 60, .55);
      sprite(SP_SOFT, cx, bottom + 4, 170, .35);
      const st = ctx!.createLinearGradient(cx - W * .26, 0, cx + W * .26, 0);
      st.addColorStop(0, 'rgba(255,220,180,0)');
      st.addColorStop(.5, 'rgba(255,224,186,.3)');
      st.addColorStop(1, 'rgba(255,220,180,0)');
      ctx!.fillStyle = st;
      ctx!.fillRect(cx - W * .26, bottom + 1.5, W * .52, 2.2);

      ctx!.globalCompositeOperation = 'source-over';
      if (!reduce) raf = requestAnimationFrame(draw);
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = stage.clientWidth; H = stage.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2; top = H * .015; bottom = H * .85; len = bottom - top;
      Rbase = Math.min(W * .165, 96);
    }

    function boot() {
      if (running) return; running = true;
      resize(); t0 = performance.now();
      draw(performance.now());
    }

    const handleResize = () => {
      if (!running) return;
      cancelAnimationFrame(raf); resize(); draw(performance.now());
    };

    window.addEventListener('resize', handleResize);
    
    let observer: ResizeObserver | null = null;
    if ('ResizeObserver' in window) {
      observer = new ResizeObserver(() => {
        if (!running) return;
        if (Math.abs(stage.clientHeight - H) < 2 && Math.abs(stage.clientWidth - W) < 2) return;
        cancelAnimationFrame(raf); resize(); draw(performance.now());
      });
      observer.observe(stage);
    }

    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { boot(); io?.disconnect(); }
      }), { threshold: .15 });
      io.observe(stage);
    } else {
      boot();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (observer) observer.disconnect();
      if (io) io.disconnect();
      cancelAnimationFrame(raf);
      
      clickHandlers.forEach(({ node, handler }) => node.removeEventListener('click', handler));
      if (closeBtn) closeBtn.removeEventListener('click', closeHandler);
    };
  }, []);

  return (
    <section className="np-dna" aria-labelledby="np-dna-title" ref={containerRef}>
      <div className="np-dna__grid">

        {/* ============ LEFT ============ */}
        <div className="np-left">
          <p className="np-eyebrow">Why Clients Choose Neo Perion</p>
          <h2 className="np-h2" id="np-dna-title">Engineering DNA<br />That Builds <em>Excellence</em></h2>
          <p className="np-sub">We combine AI, engineering, and automation to deliver scalable products that drive real business growth.</p>

          <p className="np-jlabel">The Requirements Journey</p>
          <div className="np-journey">
            <div className="np-step"><span className="np-step__dot"></span><span className="np-step__num">01</span>
              <div><h4>Discovery &amp; Planning</h4><p>We analyze your vision, market, and goals to build the right plan.</p></div></div>
            <div className="np-step"><span className="np-step__dot"></span><span className="np-step__num">02</span>
              <div><h4>Product Design</h4><p>User-centric design and prototype validation for actionable clarity.</p></div></div>
            <div className="np-step"><span className="np-step__dot"></span><span className="np-step__num">03</span>
              <div><h4>Development</h4><p>Agile engineering with AI-assisted development for faster velocity.</p></div></div>
            <div className="np-step"><span className="np-step__dot"></span><span className="np-step__num">04</span>
              <div><h4>Quality Assurance</h4><p>Automated testing, performance checks, and real-world validation.</p></div></div>
            <div className="np-step"><span className="np-step__dot"></span><span className="np-step__num">05</span>
              <div><h4>Deployment &amp; Scaling</h4><p>Seamless deployment, monitoring, and continuous scaling.</p></div></div>
          </div>
        </div>

        {/* ============ CENTER STAGE ============ */}
        <div className="np-stage" id="npStage">
          <canvas id="npHelix" aria-hidden="true"></canvas>

          <div className="np-base" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><b></b></div>

          {/* core badge */}
          <div className="np-core" aria-hidden="true">
            <span className="np-core__disc">
              <span className="np-core__hex">
                <img src="/images/np-logo.png" alt="Neo Perion Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              </span>
            </span>
          </div>

          {/* capability nodes */}
          <button className="np-node np-node--row is-active" style={{ '--x': '56%', '--y': '0%' } as React.CSSProperties} data-cap="ai" data-side="l" aria-label="AI Engineering details">
            <span className="np-node__ring" data-icon="brain"></span>
            <span className="np-node__label">AI Engineering</span>
          </button>
          <button className="np-node" style={{ '--x': '11%', '--y': '19%' } as React.CSSProperties} data-cap="cloud" data-side="l" aria-label="Cloud Native details">
            <span className="np-node__ring" data-icon="cloud"></span>
            <span className="np-node__label">Cloud Native</span>
          </button>
          <button className="np-node" style={{ '--x': '89%', '--y': '21%' } as React.CSSProperties} data-cap="security" data-side="r" aria-label="Security First details">
            <span className="np-node__ring" data-icon="shield"></span>
            <span className="np-node__label">Security First</span>
          </button>
          <button className="np-node" style={{ '--x': '8%', '--y': '44%' } as React.CSSProperties} data-cap="arch" data-side="l" aria-label="Product Architecture details">
            <span className="np-node__ring" data-icon="layers"></span>
            <span className="np-node__label">Product Architecture</span>
          </button>
          <button className="np-node" style={{ '--x': '92%', '--y': '46%' } as React.CSSProperties} data-cap="auto" data-side="r" aria-label="Automation details">
            <span className="np-node__ring" data-icon="zap"></span>
            <span className="np-node__label">Automation</span>
          </button>
          <button className="np-node" style={{ '--x': '13%', '--y': '68%' } as React.CSSProperties} data-cap="devops" data-side="l" aria-label="DevOps Excellence details">
            <span className="np-node__ring" data-icon="code"></span>
            <span className="np-node__label">DevOps Excellence</span>
          </button>
          <button className="np-node" style={{ '--x': '87%', '--y': '68%' } as React.CSSProperties} data-cap="growth" data-side="r" aria-label="Scalable Growth details">
            <span className="np-node__ring" data-icon="trend"></span>
            <span className="np-node__label">Scalable Growth</span>
          </button>
        </div>

        {/* ============ RIGHT ============ */}
        <div className="np-right">
          <div className="np-detail" id="npDetail" aria-live="polite">
            <div className="np-detail__body">
              <div className="np-detail__head">
                <span className="np-detail__chip" id="npDetailIcon"></span>
                <h3 id="npDetailTitle">AI Engineering</h3>
                <button className="np-detail__close" id="npDetailClose" aria-label="Close details" data-icon-host="x"></button>
              </div>
              <p className="np-detail__desc" id="npDetailDesc"></p>
              <ul className="np-detail__list" id="npDetailList"></ul>
              <a className="np-detail__more" href="#contact">LEARN MORE <span data-icon-host="arrow"></span></a>
            </div>
            <p className="np-detail__hint">Select a capability on the helix to see how it's engineered into every project.</p>
          </div>

          <div className="np-stats" id="npStats">
            <div className="np-stat"><span className="np-stat__chip" data-icon-host="rocket"></span>
              <div><b data-count="10" data-suffix="+">0+</b><span>Projects Delivered</span></div></div>
            <div className="np-stat"><span className="np-stat__chip" data-icon-host="shield"></span>
              <div><b data-count="6" data-suffix="+">0+</b><span>Industries Served</span></div></div>
            <div className="np-stat"><span className="np-stat__chip" data-icon-host="users"></span>
              <div><b data-count="98" data-suffix="%">0%</b><span>Client Satisfaction</span></div></div>
            <div className="np-stat"><span className="np-stat__chip" data-icon-host="code"></span>
              <div><b data-count="40" data-suffix="%">0%</b><span>Faster Delivery</span></div></div>
          </div>

          <div className="np-tech">
            <p>Engineered With</p>
            <div>
              <span>AWS</span><span>Kubernetes</span><span>Docker</span><span>Terraform</span>
              <span>CI/CD</span><span>React</span><span>Node.js</span><span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============ CTA ============ */}
      <div className="np-cta">
        <p className="np-cta__title">Ready to engineer something <em>built to last?</em></p>
        <div className="np-cta__actions">
          <a className="np-btn np-btn--solid" href="#contact">Start Your Project <span data-icon-host="arrow"></span></a>
          <a className="np-btn np-btn--ghost" href="#process"><span data-icon-host="play"></span> View Our Process</a>
        </div>
        <div className="np-trust">
          <div className="np-avatars" aria-hidden="true">
            <i data-icon-host="user"></i><i data-icon-host="user"></i><i data-icon-host="user"></i><i data-icon-host="user"></i>
          </div>
          <p>Trusted by industry leaders worldwide.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
