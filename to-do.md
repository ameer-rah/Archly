## to do's

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
- [ ] `packages/db` — Drizzle schema + migrations against Neon. Note: PR #1 (`feat(db): add core PostgreSQL schema and initial migration`, branch `backend/core-database-schema`) did this work but was **closed without merging** — it never landed on `main`, so this is still effectively not done. Worth deciding whether to revive that branch or redo it before starting `apps/api`.
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
