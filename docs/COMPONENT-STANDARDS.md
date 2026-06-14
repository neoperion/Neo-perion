# Neo Perion V2.0 - Component Standards

## 1. Component Naming
- Use PascalCase for component files and function names (e.g., `GlassCard.tsx`, `TechMarquee.tsx`).
- Use descriptive names reflecting the component's purpose.

## 2. Props Convention
- Always define a TypeScript interface for component props.
- Name the interface `[ComponentName]Props` (e.g., `GlassCardProps`).
- Destructure props in the function signature for clarity.
- Provide default values for optional props where appropriate.

## 3. Folder Convention
- `src/components/ui`: Atomic, reusable base components (Buttons, Inputs, Cards).
- `src/components/layout`: Structural components (Navbar, Footer, Sidebar).
- `src/components/shared`: Complex, domain-agnostic components used across multiple pages (CookieConsent).
- `src/components/features`: Domain-specific or complex block components (HeroSection, BentoGrid).

## 4. Reusability Rules
- Base UI components (like `Button` or `Input`) should not contain business logic or fetch data.
- Favor composition over configuration (e.g., passing `children` instead of an array of complex configuration objects).

## 5. Framer Motion Standards
- Keep animations out of low-level generic UI components unless explicitly meant to be animated (e.g., `AnimatedCounter`).
- Use wrapper components or apply `motion` to feature-level components (e.g., `motion.div` around a whole card in a grid).
- Always use `useReducedMotion` hook from framer-motion to respect accessibility preferences if adding complex or heavy animations.
