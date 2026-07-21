## to do's

**Frontend — apps/web (17 pages total, from scratch, matching Figma + dandy.com/Handshake direction)**
- [x] Landing Page — `pages/Home/` (hero, how-it-works, our-journey, open-projects, final CTA, footer; scroll reveals, parallax, tilt cards, blueprint textures/blends all built)
- [x] Firms (marketing) — `pages/ForFirms/` at `/for-firms` (hero, stats, process, coverage, pricing, animated FAQ accordion, contact form; same visual system as Home, all seams blended, real FAQ copy grounded in system-design.md's actual escrow/vetting decisions)
- [ ] For Students
- [ ] Browse Projects
- [ ] Project Detail
- [ ] Student Signup
- [ ] Firm Signup
- [ ] Login
- [ ] Waitlist
- [ ] Student Dashboard
- [ ] Student Messages
- [ ] Student Profile
- [ ] Firm Dashboard
- [ ] Applications
- [ ] Post a Project
- [ ] Firm Messages
- [ ] Firm Payments

Each new page gets its own folder under `apps/web/src/pages/`, same
pattern as `pages/Home/` and `pages/ForFirms/`. Shared chrome/utilities
(`NavBar`, `Footer`, `Reveal`, `TiltCard`, `PageTransition`,
`ScrollToTop`, `useScrollY`) live in `apps/web/src/components/`, and
cross-page CSS (buttons, eyebrow, blueprint-grid, reveal animation,
nav/footer chrome) lives in `apps/web/src/styles/shared.css` — reuse
both rather than duplicating per page. Real logo assets (nav + footer
wordmarks, favicon) are wired in `components/NavBar.tsx`/`Footer.tsx`.
Button color convention is now systematic: sand/white backgrounds get
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

**Mobile — apps/mobile (React Native + Expo, per system-design.md §"Mobile")**
- [x] Figma designs for the mobile app (Student app + Firm app, 18 screens total, Handshake-inspired: floating pill tab bars, message threads, applicant detail, firm profile) — design only, in the "Mobile" page of the Figma file. No code yet.
- [ ] Scaffold `apps/mobile` (Expo, TypeScript, shares `packages/db` types + the same Workers API — no duplicated business logic between web and mobile)
- [ ] Auth (same WorkOS-backed flow as web)
- [ ] Students/Firms core screens (profile, browse, project detail)
- [ ] Native maps via `react-native-maps` (Apple Maps on iOS, Google Maps on Android) for the radius/browse search, mirroring the web Leaflet implementation
- [ ] Messaging
- [ ] Push notifications
- [ ] Distribution via Expo EAS (App Store / Google Play)

Per system-design.md's build order, mobile starts only once the API
contract is stable (step 10) — not in parallel from day one.
