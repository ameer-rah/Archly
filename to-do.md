### to do's

**Frontend — apps/web (all 17 pages, from scratch, matching Figma + dandy.com direction)**
- [ ] Landing Page
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

**Backend / infra (per system-design.md build order, after frontend or in parallel)**
- [ ] `packages/db` — Drizzle schema + migrations against Neon
- [ ] `apps/api` skeleton — Hono, Hyperdrive connection, WorkOS auth middleware
- [ ] Auth end-to-end (Google/LinkedIn login + CUNY email verification)
- [ ] Students + Firms CRUD, file uploads to R2
- [ ] Job postings + search (PostGIS radius query) + applications
- [ ] Stripe Billing (subscriptions)
- [ ] Stripe Connect + project escrow flow
- [ ] Messaging
- [ ] Mobile app (`apps/mobile`)
- [ ] Admin verification queue, waitlist migration off Formspree, analytics/observability wiring
