import type { ReactNode } from "react";

/**
 * Wraps a page's content so it fades/slides in on mount (see
 * `.page-fade-in` in `shared.css`). Since React Router fully unmounts
 * the previous route's page and mounts the new one on navigation, this
 * animation replays automatically on every page switch — no route
 * change detection needed.
 *
 * Every page's `index.tsx` should wrap its top-level return in this,
 * the same way every page already uses `NavBar`/`Footer`, so new pages
 * get the same fade-in for free.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return <div className="page-fade-in">{children}</div>;
}
