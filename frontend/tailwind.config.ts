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
          navy: "#030B1D",
          deep: "#1E5DFF",
          blue: "#2563FF",
          bright: "#3B82F6",
          highlight: "#4AA8FF",
          light: "#74C8FF",
          silver: "#E8EDF5",
          soft: "#64748B",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'sans-serif'],
        editorial: ['Instrument Serif', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'soft': '0 4px 20px -4px hsl(223 100% 57% / 0.2)',
        'medium': '0 8px 30px -6px hsl(223 100% 57% / 0.25)',
        'glow': '0 0 40px hsl(223 100% 57% / 0.3)',
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
