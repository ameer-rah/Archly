## to do's

### Next up (immediate plan)
---
Where things actually stand: `packages/db`'s schema + migrations are real
and correct (typecheck/build/lint all clean), but nothing beyond that
exists yet — no live database, no `apps/api` (still a literal empty
folder), no WorkOS/Google credentials. Every frontend form (Waitlist,
Firm Signup) is still a local-only mock with nothing to call. Concrete
next sequence, in order:

1. [ ] Get the company email + company contacts (see "important" below) — blocks both Cloudflare deployment and Google/WorkOS API credentials, so this unblocks everything after it.
2. [ ] Provision a real Neon Postgres instance, put its connection string in `packages/db/.env` (never commit it), run `pnpm --filter @archly/db db:migrate` to actually create the tables. This part has no other blockers — it can happen before step 1 if a personal/temporary Neon project is used.
3. [ ] Scaffold `apps/api` — Hono on Cloudflare Workers, Hyperdrive connection to Neon, `packages/db` already provides everything the routes need. Start with a health-check route + one real table read (e.g. `GET /schools`) to prove the whole chain (Workers → Hyperdrive → Neon → Drizzle) actually works end to end.
4. [ ] Wire up WorkOS AuthKit (Google OAuth first, CUNY email verification next) once credentials exist from step 1.
5. [ ] Wire the first real endpoint to an existing frontend form instead of its local mock — `POST /waitlist` (system-design.md's public, Turnstile-protected endpoint) is the simplest real target since the Waitlist page's fields already match `waitlist_signups` exactly. Firm Signup's `POST /firms` is the next natural target after that, since that page's fields already match the real `firms` table too.

**Frontend — apps/web (17 pages total, from scratch, matching Figma + dandy.com/Handshake direction)**
- [ ] For Students - in progress w/ tahi
- [ ] Project Detail
- [ ] Student Signup
- [ ] Student Dashboard
- [ ] Student Messages
- [ ] Student Profile
- [ ] Firm Dashboard
- [ ] Applications
- [ ] Post a Project
- [ ] Firm Messages
- [ ] Firm Payments
- Note: Home, ForFirms, Waitlist, and About each have a genuinely different page structure (split-hero-then-stacked-sections / stacked-centered-sections / persistent two-pane split / stacked-masthead-then-editorial), not the same template re-skinned — worth keeping in mind for the remaining pages so the site doesn't start reading as one template with different copy.

Each new page gets its own folder under `apps/web/src/pages/`, same
pattern as `pages/Home/` and `pages/ForFirms/`. Shared chrome/utilities
(`NavBar`, `Footer`, `Reveal`, `TiltCard`, `PageTransition`,
`ScrollToTop`, `useScrollY`) live in `apps/web/src/components/`, and
cross-page CSS (buttons, eyebrow, blueprint-grid, reveal animation,
nav/footer chrome) lives in `apps/web/src/styles/shared.css` — reuse
both rather than duplicating per page. Real logo assets (nav + footer
wordmarks, favicon) are wired in `components/NavBar.tsx`/`Footer.tsx`.

Button color convention is systematic: sand/white backgrounds get
blue buttons (`btn-primary`/`btn-outline`/`btn-ghost`), navy/blue
backgrounds get sand-colored buttons (`btn-sand`/`btn-outline-light`).

**Backend / infra (per system-design.md build order, after frontend or in parallel)**
- [x] `packages/db` — Drizzle schema + migrations against Neon. PR #1 was originally closed without merging, but the schema has since actually landed on `main` (users, students, schools, firms, firm_members, job_postings, applications) with clean migrations. Fixed post-merge: a duplicate/ambiguous `student_discipline` enum value (`urban_planning` alongside `urban_design`, not matching system-design.md's documented taxonomy) via a new migration, `drizzle.config.ts` being silently excluded from the TS project (`tsconfig.json`/`tsconfig.build.json` split), and the README's npm-vs-pnpm command mismatch. Still no live Neon instance connected — schema is correct but unproven against a real database.
- [ ] `apps/api` skeleton — Hono, Hyperdrive connection, WorkOS auth middleware
- [ ] Auth end-to-end (Google/LinkedIn login + CUNY email verification)
- [ ] Students + Firms CRUD, file uploads to R2
- [ ] Job postings + search (PostGIS radius query) + applications
- [ ] Stripe Billing (subscriptions)
- [ ] Stripe Connect + project escrow flow
- [ ] Messaging
- [ ] Admin verification queue, waitlist migration off Formspree, analytics/observability wiring

Per system-design.md's build order, mobile starts only once the API
contract is stable (step 10) — not in parallel from day one.

### important
---
- [ ] need company email to deploy website on cloudflare & get google api's
- [ ] need company contacts
