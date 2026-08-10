import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neo: {
          navy: "#0A0A0B",      /* near-black base */
          deep: "#F77E0D",      /* Orange (Wheel) */
          blue: "#FB8C2A",      /* (legacy key names kept; now orange shades) */
          bright: "#FF9A3D",
          highlight: "#FFB05C",
          light: "#FFC480",
          silver: "#E8E6E3",
          soft: "#71717A",
        },
        // ─── REDESIGN TOKENS (Pass 1 — Linear/Vercel restraint) ───
        // Black + Orange (#F77E0D). Neutrals inverted for the dark theme:
        // ink = light text, canvas/paper = dark surfaces, hairline = dark border.
        ink: "#FAFAFA",
        body: "#D4D4D8",
        muted2: "#A1A1AA",
        faint: "#71717A",
        hairline: "#27272A",
        canvas: "#0A0A0B",
        paper: "#121113",
        navy: "#08090D",
        brand: {
          DEFAULT: "#F77E0D",
          hover: "#D96A05",
          tint: "rgba(247,126,13,0.08)",
        },
        // ─── MANUSCRIPT PALETTE (Phase 1 — additive, namespace `manuscript.*`) ───
        // 70% parchment / 20% ink / 7% walnut-rust / 3% gold / sage accent.
        // Old `ink`/`body`/`paper` tokens above are kept for legacy components.
        manuscript: {
          // Parchment tier (canvas, large surfaces)
          parchment:       "#F5ECDC",
          parchmentWarm:   "#EFE2C8",
          parchmentLight:  "#F7EFDB",
          parchmentDeep:   "#E8D8B8",
          // Ink tier (body text, hairlines)
          ink:             "#1F1A14",
          inkSoft:         "#2C241B",
          inkMuted:        "#5A4A3A",
          // Walnut / rust tier (secondary headings, dividers, accents)
          walnut:          "#5B3A1F",
          walnutDeep:      "#3F2812",
          rust:            "#A6432A",
          rustDeep:        "#8B3A1F",
          // Gold tier (primary CTA, eyebrow, ornaments — 3% use)
          gold:            "#B68A35",
          goldWarm:        "#D4A857",
          goldDeep:        "#8E6A20",
          // Copper tier (editorial annotations)
          copper:          "#A84A28",
          copperMuted:     "#C17A55",
          // Sage (tags/badges only)
          sage:            "#6B7F5A",
          sageSoft:        "#8DA37C",
        },
        manuscriptAlpha: {
          // Translucent overlays for glass/parchment layering
          "parchment-90":  "rgba(245, 236, 220, 0.90)",
          "parchment-70":  "rgba(245, 236, 220, 0.70)",
          "parchment-50":  "rgba(245, 236, 220, 0.50)",
          "ink-10":        "rgba(31, 26, 20, 0.10)",
          "ink-20":        "rgba(31, 26, 20, 0.20)",
          "gold-20":       "rgba(182, 138, 53, 0.20)",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'sans-serif'],
        logo: ['"Press Start 2P"', 'monospace'],
        editorial: ['Instrument Serif', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        // ─── MANUSCRIPT TOKENS (Phase 1 — Living Manuscript rebrand) ───
        // Loaded from index.html Google Fonts request. Cormorant for display,
        // Inter retained for body, Caveat for handwritten accents.
        manuscript: ['"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
        manuscriptBody: ['Inter', 'system-ui', 'sans-serif'],
        manuscriptHand: ['Caveat', '"Brush Script MT"', 'cursive'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'soft': '0 4px 20px -4px hsl(28 94% 51% / 0.2)',
        'medium': '0 8px 30px -6px hsl(28 94% 51% / 0.25)',
        'glow': '0 0 40px hsl(28 94% 51% / 0.3)',
      },
      // ─── MOBILE DESIGN TOKENS (Phase A) ───
      spacing: {
        'mobile-xs': '4px',
        'mobile-sm': '8px',
        'mobile-md': '12px',
        'mobile-base': '16px',
        'mobile-lg': '20px',
        'mobile-xl': '24px',
        'mobile-2xl': '32px',
        'mobile-3xl': '48px',
        'mobile-4xl': '64px',
      },
      minHeight: {
        'touch-sm': '44px',
        'touch-md': '48px',
        'touch-lg': '56px',
        'touch-xl': '64px',
      },
      minWidth: {
        'touch-sm': '44px',
        'touch-md': '48px',
        'touch-lg': '56px',
        'touch-xl': '64px',
      },
      height: {
        'mobile-nav': '56px',
        'mobile-nav-compact': '48px',
        'safe-top': 'calc(env(safe-area-inset-top) + 56px)',
      },
      zIndex: {
        'base': '0',
        'raised': '10',
        'sticky': '20',
        'mobile-nav': '40',
        'mobile-sheet': '50',
        'mobile-overlay': '60',
        'mobile-toast': '70',
        'mobile-modal': '80',
        'urgent': '90',
      },
      fontSize: {
        'display-xl': ['clamp(36px, 9vw, 56px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(30px, 7vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-md': ['clamp(24px, 6vw, 36px)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "orb-rotate-slow": {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        "orb-pulse": {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%':      { opacity: '0.9', transform: 'scale(1.08)' },
        },
        "orb-shimmer": {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        "glass-shine": {
          '0%':   { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        "nav-float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-4px)' },
        },
        "dot-pulse": {
          '0%, 100%': { opacity: '0.3' },
          '50%':      { opacity: '1' },
        },
        "gradient-x": {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        "crystal-float": {
          '0%':   { transform: 'translateY(0px) rotate(-3deg)' },
          '50%':  { transform: 'translateY(-15px) rotate(3deg)' },
          '100%': { transform: 'translateY(0px) rotate(-3deg)' },
        },
        "marquee": {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "orb-rotate-slow": "orb-rotate-slow 24s linear infinite",
        "orb-pulse": "orb-pulse 4s ease-in-out infinite",
        "orb-shimmer": "orb-shimmer 6s linear infinite",
        "glass-shine": "glass-shine 2.5s ease-in-out infinite",
        "nav-float": "nav-float 3s ease-in-out infinite",
        "dot-pulse": "dot-pulse 1.4s ease-in-out infinite",
        "gradient-x": "gradient-x 3s linear infinite",
        "crystal-float": "crystal-float 14s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
      },
      backdropBlur: {
        'glass-1': '20px',
        'glass-2': '28px',
        'glass-3': '40px',
      },
      backdropSaturate: {
        'glass': '180%',
        'glass-high': '200%',
        'glass-max': '220%',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
