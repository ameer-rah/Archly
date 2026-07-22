import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't reset scroll position on navigation — without
 * this, clicking a nav link while scrolled halfway down one page lands
 * you at that same scroll offset on the next page, instead of its top.
 * Mounted once in `App.tsx` so every route gets this for free; no
 * per-page setup needed.
 *
 * `behavior: "auto"` is explicit, not just the default: `html` has
 * `scroll-behavior: smooth` globally (for in-page anchor links like
 * ForFirms's "How It Works"), which would otherwise animate this
 * route-change reset too — that should stay an instant jump.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
