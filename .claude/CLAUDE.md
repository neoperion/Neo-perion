# Neo-perion — Project Context

Marketing + admin web app for an AI/services company. Public site (home, industries, services, blog, case studies, careers, contact) backed by a Supabase CMS, lead capture, and admin dashboard. Originally generated from Lovable.

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Vite 5.4 + React 18.3 + TypeScript 5.8 (strict OFF) |
| Styling | Tailwind CSS 3.4 + shadcn/ui (Radix primitives) |
| State / Data | zustand 5, TanStack Query 5, zod 3, react-hook-form 7 |
| Routing | React Router DOM 6.30 (routes inline in `App.tsx`) |
| 3D / Motion | Three.js (`@react-three/fiber`), Framer Motion 12 |
| CMS Editor | TipTap 3 (rich text) |
| Backend | Express 5 server (`backend/`) with Calendly webhook + cookie API |
| Database | Supabase (Postgres + RLS + Storage) |
| Analytics | Microsoft Clarity, EmailJS for client-side email |
| Compiler | SWC (not Babel) |

## Repo Layout

```
Neo-perion/
├── frontend/                 # Vite React app (port 8080)
│   ├── src/
│   │   ├── pages/            # 46 page files (public + admin + industries + services)
│   │   ├── components/       # 32 subdirs (about, admin, blog, careers, home, ui, ...)
│   │   ├── lib/              # utils.ts, supabase.ts, constants.ts, seo.ts, resend.ts
│   │   ├── hooks/            # use-mobile, use-toast, useAdminAuth, useBlog(s), useCaseStudies
│   │   ├── services/         # apiClient, authApi, blogApi, leadApi, blogService, caseStudyService
│   │   ├── store/            # authStore, cookieStore, uiStore (zustand)
│   │   ├── types/            # admin, blog, caseStudy, cookie, lead
│   │   └── data/             # static content + mock data
│   ├── components.json       # shadcn config (style: default, base color: slate)
│   ├── tailwind.config.ts    # custom neo-* palette + mobile tokens
│   ├── vite.config.ts        # port 8080, SWC, Zoho verify hook
│   └── eslint.config.js      # flat config; most strict rules DISABLED
├── backend/                  # Express 5 server
│   ├── src/
│   │   ├── server.ts         # entry point
│   │   ├── app.ts            # helmet + cors + morgan; mounts /api/cookies, /api/webhooks
│   │   ├── config/           # env, supabase (anon + admin), validateEnv
│   │   ├── routes/           # cookieRoutes, webhookRoutes
│   │   ├── controllers/      # calendlyController
│   │   └── utils/logger.ts
│   └── supabase/             # LEGACY mirror of migrations (see Gotchas)
└── supabase/                 # CANONICAL migrations (see Gotchas)
    └── migrations/           # 11 tables, ~20 RLS policies, 7 storage buckets
```

## Common Commands

```sh
# Frontend dev (port 8080)
cd frontend && npm run dev

# Frontend build / preview / lint
cd frontend && npm run build
cd frontend && npm run build:dev    # development-mode build
cd frontend && npm run preview
cd frontend && npm run lint

# Backend dev (uses ts-node-dev)
cd backend && npm run dev
```

There is **no** `test`, `typecheck`, or CI script. Treat the test suite and CI as follow-up work.

## Conventions

- **Path alias**: `@/` → `frontend/src/`. Never use long relative imports across directories.
- **shadcn components**: `frontend/src/components/ui/*` (don't add new UI libs; use Radix primitives already there).
- **Styling**: Tailwind classes via `cn()` helper from `lib/utils.ts`. Theme colors use the `neo-*` palette.
- **Components**: function components only; no class components.
- **Forms**: `react-hook-form` + `zod` resolver. Don't hand-roll form state.
- **Data fetching**: TanStack Query in `services/apiClient.ts` and friends; don't raw-`useEffect`+`fetch`.
- **Auth**: client-side admin auth via `useAdminAuth` + `store/authStore.ts`.
- **Supabase client**: single shared instance at `frontend/src/lib/supabase.ts`. Reads `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`.
- **Server-side Supabase**: `backend/src/config/supabase.ts` has both anon and admin (`supabaseAdmin` uses service role key).

## Known Quality Gaps

These are pre-existing — do not "fix" them without an explicit ask, since they have large blast radius:

1. **TypeScript strict mode is OFF** in `frontend/tsconfig.app.json` (`noImplicitAny`, `noUnusedLocals`, `noUnusedParameters`, `strictNullChecks` all `false`). Type-safety work should expect to find latent issues.
2. **ESLint 9 strict rules are disabled** in `frontend/eslint.config.js` (`no-unused-vars`, `no-explicit-any`, `react-hooks/exhaustive-deps`, `react-refresh/only-export-components`). Lint output is decorative.
3. **No tests** — no test runner installed.
4. **No typecheck script** — `npm run build` is the only TS check.
5. **No CI** — quality gates depend on whoever pushes last.
6. **Dead code**: `frontend/src/routes/index.tsx` imports an undefined `PublicRoutes` and is unused.
7. **Stale seed**: `backend/supabase/seeds/seed.sql` references columns that don't exist in current schema (`summary`, `author_name`, `read_time`, `published_at`, `seo_keywords` on blogs/case_studies).
8. **Admin RLS too broad**: existing admin policies use `auth.role() = 'authenticated'` rather than checking `user_roles`. Until the `user_roles` table is properly wired (see `supabase/migrations/006_company_ecosystem.sql`), any authenticated user can write to admin tables.

## Gotchas

- **Two `006_company_ecosystem.sql` files exist** — they are byte-for-byte identical. Canonical location is `supabase/migrations/`. The copy in `backend/supabase/migrations/` is a legacy mirror; new migrations should ONLY go in `supabase/migrations/`.
- **Lovable auto-commits** — `git log` includes bot commits from `lovable.dev` pushes. Don't be surprised by sudden diffs.
- **Zoho domain verification**: `vite.config.ts` has a `closeBundle` hook that copies `zohoverify/verifyforzoho.html` into `dist/`. Keep this file present if you touch the build.

## ⚠️ SECURITY: Service Key Leak

**`frontend/.env.local:3` exposes `VITE_SUPABASE_SERVICE_KEY` — a server-side secret in the browser bundle.** Any `import.meta.env.VITE_*` value is shipped to clients. This is currently committed and may already be in production builds.

**Action required (out of scope for this setup; flagged for the project owner):**
1. Rotate the leaked Supabase service role key in the Supabase dashboard.
2. Remove `VITE_SUPABASE_SERVICE_KEY` from `frontend/.env.local` and any other `frontend/.env*`.
3. Clear `frontend/dist/` and rebuild.
4. Search the repo for any code that reads `VITE_SUPABASE_SERVICE_KEY` on the client and refactor those calls to go through the backend API instead.

Until step 1, assume the service key is public. **Do not propagate this pattern.** New client-side code must use `VITE_SUPABASE_ANON_KEY` only.

## Workflow Agents

When modifying this project, invoke these global ECC agents:

| Change touches | Use |
|---------------|-----|
| `.tsx` / `.ts` components, pages, hooks | `react-reviewer` |
| Type shapes, async code, generics | `typescript-reviewer` |
| SQL in `supabase/migrations/`, RLS, schema | `database-reviewer` |
| Auth, `.env*`, admin routes, payments | `security-reviewer` |
| Any non-trivial change (catch-all) | `code-reviewer` |
| Pre-deploy / smoke check | `verify` |

Plan first with `planner` for non-trivial features. Use `tdd-guide` only when adding a test runner (currently none exists).

## Memory

Project memory lives at `C:\Users\VASANTHARAJ\.claude\projects\D--neo-perion-Neo-perion\memory\`. Add a memory file there when you learn something non-obvious about this project (user preferences, project decisions, gotchas). Update `MEMORY.md` to keep the index current.