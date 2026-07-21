## to do's

**Frontend — apps/web (17 pages total, from scratch, matching Figma + dandy.com direction)**
- [x] Landing Page — `pages/Home/` (hero, how-it-works, our-journey, open-projects, final CTA, footer; scroll reveals, parallax, tilt cards, blueprint textures/blends all built)
- [ ] For Students
- [ ] Firms (marketing)
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
pattern as `pages/Home/`. Shared chrome/utilities (`NavBar`, `Footer`,
`Reveal`, `TiltCard`, `useScrollY`) live in `apps/web/src/components/`
— reuse them rather than duplicating per page.

**Backend / infra (per system-design.md build order, after frontend or in parallel)**
- [ ] `packages/db` — Drizzle schema + migrations against Neon
- [ ] `apps/api` skeleton — Hono, Hyperdrive connection, WorkOS auth middleware
- [ ] Auth end-to-end (Google/LinkedIn login + CUNY email verification)
- [ ] Students + Firms CRUD, file uploads to R2
- [ ] Job postings + search (PostGIS radius query) + applications
- [ ] Stripe Billing (subscriptions)
- [ ] Stripe Connect + project escrow flow
- [ ] Messaging
- [ ] Admin verification queue, waitlist migration off Formspree, analytics/observability wiring

**Mobile — apps/mobile (React Native + Expo, per system-design.md §"Mobile")**
- [ ] Scaffold `apps/mobile` (Expo, TypeScript, shares `packages/db` types + the same Workers API — no duplicated business logic between web and mobile)
- [ ] Auth (same WorkOS-backed flow as web)
- [ ] Students/Firms core screens (profile, browse, project detail)
- [ ] Native maps via `react-native-maps` (Apple Maps on iOS, Google Maps on Android) for the radius/browse search, mirroring the web Leaflet implementation
- [ ] Messaging
- [ ] Push notifications
- [ ] Distribution via Expo EAS (App Store / Google Play)

Per system-design.md's build order, mobile starts only once the API
contract is stable (step 10) — not in parallel from day one.
