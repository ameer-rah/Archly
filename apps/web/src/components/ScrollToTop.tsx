import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't reset scroll position on navigation — without
 * this, clicking a nav link while scrolled halfway down one page lands
 * you at that same scroll offset on the next page, instead of its top.
 * Mounted once in `App.tsx` so every route gets this for free; no
 * per-page setup needed.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
