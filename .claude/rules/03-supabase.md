# Neo-perion — Supabase / Database Rules

## Tables (current state)

11 tables across the public schema:

- **CMS**: `blogs`, `case_studies`, `testimonials`
- **Careers**: `careers`, `job_applications` (FK → `careers.job_id`)
- **Lead capture**: `leads`, `newsletter_subscribers`, `cookie_consents`
- **Scheduling**: `meetings` (FK → `leads`)
- **Auth-adjacent**: `profiles` (FK → `auth.users`), `user_roles` (FK → `profiles`)

Plus 7 storage buckets: `blog-images`, `case-study-images`, `seo-assets`, `resumes` (private), `career-assets`, `newsletter-assets`, `company-assets`.

## Migrations

- Canonical directory: `supabase/migrations/`. **Never** add a migration to `backend/supabase/migrations/` (legacy mirror).
- Filenames: 3-digit prefix + descriptive slug (e.g., `007_add_user_roles_policies.sql`).
- Migrations are forward-only. Edit history is in git, not in SQL.
- New migrations must be idempotent when possible (`CREATE ... IF NOT EXISTS`, `DROP POLICY IF EXISTS`).

## Row-Level Security (RLS)

- **Every new table must enable RLS** with `ALTER TABLE ... ENABLE ROW LEVEL SECURITY;`.
- Public read policies gate on a flag — never expose unpublished drafts:
  - `blogs`: only `published = true` (verify in the existing migration).
  - `case_studies`: only `published = true`.
  - `testimonials`: only `active = true`.
  - `careers`: only `published = true`.
- Public-insert policies (forms): `leads`, `newsletter_subscribers`, `job_applications`, `cookie_consents`.
- Admin full-access policies: all CMS + lead tables, gated by `auth.role() = 'authenticated'`.

## Known RLS Gap (TODO)

The existing admin policies use `auth.role() = 'authenticated'`, which grants write access to **any** signed-in user — not just admins. The `user_roles` table exists in `006_company_ecosystem.sql` but is not yet used in policies.

When tightening:
1. Define a `SECURITY DEFINER` function `public.is_admin(uid uuid) RETURNS boolean` that checks `user_roles`.
2. Replace `auth.role() = 'authenticated'` with `public.is_admin(auth.uid())` in admin policies.
3. Add an `INSERT` policy on `user_roles` that's restricted to a bootstrap admin (or do it via the Supabase dashboard).

This is a follow-up — don't silently rewrite policies without coordinating.

## Indexes

- Add an index for any column that appears in `WHERE`, `ORDER BY`, or `JOIN` in app code.
- For text-search columns (`title`, `content`), use `pg_trgm` GIN indexes if search is implemented.

## Foreign Keys & Cascades

- All FKs should specify `ON DELETE` behavior explicitly. Don't rely on defaults.
- `job_applications.job_id` → `careers.id`: `ON DELETE SET NULL` (preserve applications even if the posting is removed).
- `meetings.lead_id` → `leads.id`: `ON DELETE SET NULL` (preserve meetings if the lead is purged).
- `user_roles.user_id` → `profiles.id`: `ON DELETE CASCADE`.

## Storage

- Public buckets: `blog-images`, `case-study-images`, `seo-assets`, `career-assets`, `newsletter-assets`, `company-assets` — read by anyone with the URL.
- Private bucket: `resumes` — read requires authenticated download via signed URL. Never make this public.
- Storage RLS policies mirror the underlying table RLS where possible.

## Environment Variables

| Layer | Vars | Notes |
|-------|------|-------|
| Frontend (browser) | `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` | Safe to ship. |
| Frontend (LEAKED — fix ASAP) | `VITE_SUPABASE_SERVICE_KEY` | **Do not propagate.** See `01-project.md` SECURITY. |
| Backend | `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `SUPABASE_ANON_KEY`, `CALENDLY_*`, `RESEND_API_KEY` | Server-side only. |

The backend (`backend/src/config/supabase.ts`) has both an anon client and an admin client (service role). All admin operations on the server side should go through `supabaseAdmin`.

## Query Patterns

- For paginated lists: use `.range(from, to)` over `.limit()` so we get total counts.
- For large blobs (case study content, blog body): don't `SELECT *` — only fetch the columns the view needs.
- For realtime features: `supabase.channel(...).on('postgres_changes', ...)` is the right pattern; not used yet in the codebase.

## Verification Before Shipping a Migration

1. Run the SQL in a Supabase branch / staging project.
2. Verify RLS policies with `SELECT` from an anon key + an authenticated non-admin key.
3. Confirm `pg_dump`-able (no syntax that breaks restore).
4. Update the `tables` / `indexes` / `policies` lists in this file if anything changed.