# Neo Perion V2.0 - Design System

## 1. Color Palette

**Brand Colors:**
- **Primary (Cyan):** `#06b6d4` (Tailwind `cyan-500`)
- **Secondary (Purple):** `#a855f7` (Tailwind `purple-500`)
- **Accent (Blue):** `#3b82f6` (Tailwind `blue-500`)

**Background & Surface (Dark Theme Default):**
- **Background (Deep Space):** `#050816`
- **Surface 1:** `rgba(15, 23, 42, 0.6)` (Slate 900 / 60%)
- **Surface 2:** `rgba(30, 41, 59, 0.4)` (Slate 800 / 40%)

**Text Colors:**
- **Primary Text:** `#ffffff`
- **Secondary Text:** `#94a3b8` (Slate 400)
- **Muted Text:** `#64748b` (Slate 500)

## 2. Typography

- **Headings (Display):** `Inter` or `Outfit` (sans-serif, robust, tech-focused)
- **Body:** `Inter` (sans-serif, highly legible)
- **Code:** `Fira Code` or `JetBrains Mono`

## 3. Spacing System

Tailwind's default spacing scale (`0.25rem` base).
- **Section Padding:** `py-24` (desktop), `py-16` (mobile)
- **Component Gap:** `gap-6` (standard), `gap-8` (large)

## 4. Border Radius

- **Buttons & Inputs:** `rounded-lg` (0.5rem)
- **Cards & Surfaces:** `rounded-2xl` (1rem)
- **Modals:** `rounded-3xl` (1.5rem)

## 5. Shadows & Glows

- **Subtle Drop Shadow:** `shadow-lg shadow-black/20`
- **Glow Effect (Primary):** `shadow-[0_0_30px_rgba(6,182,212,0.3)]`
- **Glow Effect (Hover):** `hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]`

## 6. Glassmorphism Rules

For surfaces overlapping complex backgrounds (like 3D canvases):
- Background: `bg-slate-900/60` (or `/40`)
- Backdrop Filter: `backdrop-blur-xl`
- Border: `border border-white/10`
- Transition: `transition-all duration-300`

## 7. Animation Standards (Framer Motion)

- **Entry Animations:** Fade in and slide up (`y: 20`, `opacity: 0` -> `y: 0`, `opacity: 1`).
- **Hover States:** Scale up slightly (`scale: 1.02`).
- **Timing:** Use spring physics where possible (`type: 'spring', stiffness: 300, damping: 20`) or ease-out for standard transitions (`duration: 0.3, ease: 'easeOut'`).
