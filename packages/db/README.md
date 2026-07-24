# `@archly/db`

`@archly/db` contains Archly's type-safe Drizzle schema and PostgreSQL
migrations. This milestone includes schools, users, student profiles, firms,
firm members, job postings, and applications.

## Data model

- Schools enroll many students.
- A user may have one student profile or one firm-member profile.
- A firm has many members and job postings.
- Students apply to job postings, and a database unique constraint prevents a
  student from applying to the same posting twice.
- Money is stored as integer cents (`budget_cents`), never floating point.

Current product decisions:

- Each user has one primary Archly role.
- A firm member belongs to one firm in this first version.
- Firm verification is a multi-state status, not a Boolean.
- Job postings support draft, published, and later workflow states.
- Application statuses follow the current Figma workflow.
- Archly does not store user passwords; authentication is external.

## Commands

From the repository root (this is a pnpm workspace — see the root
`package.json`'s `packageManager` field and `pnpm-workspace.yaml`, not npm):

```sh
pnpm --filter @archly/db typecheck
pnpm --filter @archly/db build
pnpm --filter @archly/db db:generate
```

Set `DATABASE_URL` in a local `.env` only when a database command requires it.
Never commit `.env` or real credentials. Do not run migrations against
production without explicit approval.

This schema intentionally excludes payments, messaging, portfolios, saved
projects, notifications, and advanced geographic data. Add future schema
changes through new migrations; never modify a migration that has already been
shared or applied.
