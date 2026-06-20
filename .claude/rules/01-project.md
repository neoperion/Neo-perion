# Neo-perion — Project Workflow Rules

These rules extend the global common rules (coding-style, testing, security, agents, etc.) with project-specific workflow guidance.

## Before Committing

1. Run `cd frontend && npm run lint` if any `.ts`/`.tsx` files changed.
2. Confirm `cd frontend && npm run build` succeeds if you touched build-affecting files (vite.config.ts, tsconfig, package.json, tailwind.config, components.json, src/main.tsx, src/App.tsx).
3. Run `git status` and review the diff before staging.
4. If you touched `supabase/migrations/`, sanity-check the SQL with `database-reviewer` agent.

## Database Migrations

- New SQL goes in `supabase/migrations/` ONLY. The mirror at `backend/supabase/migrations/` is legacy and should NOT receive new files.
- Filenames: prefix with the next 3-digit number (`007_*.sql`, `008_*.sql`, ...). Do not edit committed migrations — add a new one.
- Migrations are forward-only. Roll back with a new migration, not a `DROP`.

## Environment Variables

- New env vars go in `frontend/.env.example` first (placeholder values only).
- Never commit real `frontend/.env`, `frontend/.env.local`, or `backend/.env` files. They are gitignored for a reason.
- **Never** add `VITE_SUPABASE_SERVICE_KEY` or any server-side key to `frontend/.env*`. The PreToolUse hook in `.claude/settings.json` will block this; the guardrail exists because the current `frontend/.env.local:3` already leaks this.
- For server-side work (admin operations, service role), route through the Express backend at `backend/src/config/supabase.ts` using `supabaseAdmin`.

## Admin Routes

- Admin pages live under `frontend/src/pages/admin/`.
- Auth state lives in `store/authStore.ts` and is checked via `hooks/useAdminAuth.ts`.
- Before assuming auth behavior in a new admin route, read both files end-to-end.

## API Layer

- Components should call `services/*` (e.g., `leadApi.ts`, `blogApi.ts`) rather than constructing Supabase queries directly.
- New API wrappers go in `frontend/src/services/` and should return typed promises (use the types in `src/types/`).

## Routing

- Routes are defined inline in `frontend/src/App.tsx` (lines ~66-111). Add new public routes there.
- The dead `frontend/src/routes/index.tsx` (imports undefined `PublicRoutes`) is NOT to be used. Do not "complete" it without a coordinated refactor.

## Lovable Workflow

- This repo is auto-committed by Lovable's bots. Expect noise in `git log`. Do not fight the bot — focus on whether your own commits are clean and well-described.
- Pushes to `main` are gated through Lovable, not direct git. The `.claude/settings.json` `deny` list blocks `git push origin main` to enforce this.

## Follow-up Backlog (do not silently fix)

These are real problems but each needs explicit owner authorization before changing — list lives here so they don't get lost:

- Rotate leaked `VITE_SUPABASE_SERVICE_KEY` in Supabase dashboard, remove from `frontend/.env.local`, rebuild `frontend/dist/`.
- Delete duplicate `backend/supabase/migrations/006_company_ecosystem.sql` and the rest of the legacy mirror.
- Delete or finish `frontend/src/routes/index.tsx`.
- Re-enable TypeScript strict mode (`tsconfig.app.json`) — expect a large fix-up pass.
- Re-enable ESLint strict rules — same.
- Fix stale `backend/supabase/seeds/seed.sql` to match current schema (or delete).
- Tighten admin RLS policies to check `user_roles` instead of `auth.role() = 'authenticated'`.
- Add a test runner, typecheck script, and CI.