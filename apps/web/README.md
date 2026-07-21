# @archly/web

The Archly marketing/web frontend — React 19 + Vite + TypeScript.

## Running locally

From the repo root (pnpm workspace):

```bash
pnpm install
pnpm --filter @archly/web dev
```

Or from this directory:

```bash
pnpm dev
```

## Structure

```
src/
├── components/       shared across all pages (NavBar, Footer, Reveal, TiltCard, useScrollY)
└── pages/
    └── Home/         landing page — sections, icons, and styles specific to it
```

Each new page gets its own folder under `pages/`, following the same
pattern as `pages/Home/`. Anything used by more than one page belongs
in `components/` instead.

Design tokens (colors, fonts, base resets) live in `src/index.css` and
are loaded once in `main.tsx`.

## Scripts

- `pnpm dev` — start the Vite dev server
- `pnpm build` — type-check (`tsc -b`) and build for production
- `pnpm typecheck` — type-check only
- `pnpm lint` — run Oxlint
