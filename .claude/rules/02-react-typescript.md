# Neo-perion — React / TypeScript Conventions

## Components

- **Function components only.** No class components.
- One component per file unless a tightly-coupled helper is needed (e.g., a sub-component used only by the parent).
- Default export only for page-level components that the router imports; named exports for everything else.
- Props are typed interfaces (not `type` aliases) named `<ComponentName>Props`. Mark optional props with `?` and document defaults in JSDoc only when non-obvious.

## Hooks

- Custom hooks live in `frontend/src/hooks/` with a `use` prefix.
- `useEffect` should reference all deps. (Note: `react-hooks/exhaustive-deps` is currently disabled in eslint — be the human check.)
- Don't put side effects in render. Don't compute values inside render that should be memoized only if measured to be expensive.

## State Management

| Concern | Tool | Location |
|---------|------|----------|
| Server data | TanStack Query (`@tanstack/react-query`) | `services/apiClient.ts` |
| Auth state | zustand | `store/authStore.ts` |
| Cookie consent | zustand | `store/cookieStore.ts` |
| UI state (modals, drawers, toasts) | zustand | `store/uiStore.ts` |
| Form state | react-hook-form | inline in forms |

Pick the lightest tool that fits. Don't introduce Redux, Jotai, Recoil, or MobX.

## Forms

- Use `react-hook-form` with `zod` schema via `@hookform/resolvers/zod`.
- Schemas live next to the form or in `frontend/src/types/`.
- Don't hand-roll controlled inputs for non-trivial forms.

## Data Fetching

- Wrap fetch/Supabase calls in TanStack Query hooks. Never raw `useEffect` + `fetch`.
- Use the existing service wrappers (`leadApi`, `blogApi`, `caseStudyService`) before creating new ones.

## Styling

- Tailwind classes only. No CSS Modules, no styled-components, no Emotion.
- Use `cn()` from `lib/utils.ts` for conditional classes.
- Respect the `neo-*` palette and `mobile-*` design tokens in `tailwind.config.ts` instead of inventing ad-hoc colors.
- Animations: prefer `framer-motion` (`motion` package) for orchestrated animations; CSS for simple transitions.

## Imports

- Use `@/` path alias for anything inside `frontend/src/`.
- Don't import from `frontend/node_modules` paths directly.
- Group imports: external first, then `@/` aliases, then relative — separated by blank lines.

## UI Primitives

- Use shadcn primitives from `frontend/src/components/ui/*` before reaching for a new dep.
- Common ones already installed: button, card, dialog, dropdown-menu, form, input, sheet, sidebar, sonner (toasts), table, tabs, tooltip, select, checkbox, switch, popover, command, calendar, carousel, chart, sheet, separator, skeleton.

## TypeScript

- TypeScript strict mode is **off**. Write defensive code anyway — don't lean on implicit `any`.
- Avoid `any`; prefer `unknown` and narrow.
- Types live in `frontend/src/types/`. Domain types (e.g., `Blog`, `Lead`) are exported from there, not redeclared in components.
- Use `interface` for object shapes that may be extended; use `type` for unions, intersections, and utility compositions.

## Accessibility

- Use semantic HTML (`<button>`, `<nav>`, `<main>`, `<section>`).
- shadcn primitives handle ARIA — don't override unless necessary.
- Run `ecc:accessibility` skill for a11y audits before shipping major UI changes.

## Performance

- Three.js (`<Canvas>`) is heavy — only mount it inside visible viewports. The Hero component conditionally renders the canvas (see `Hero.tsx`).
- Use `React.lazy` for routes that aren't immediately visible (admin routes are a good candidate).
- Avoid creating new arrays/objects in render that get passed to memoized children — that defeats memoization.