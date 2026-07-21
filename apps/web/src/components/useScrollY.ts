import { useEffect, useState } from "react";

/**
 * Tracks `window.scrollY`, throttled to one state update per animation
 * frame via `requestAnimationFrame` so fast scrolling doesn't flood
 * React with renders. Used for scroll-linked parallax effects (e.g.
 * the hero visual drifting as the page scrolls in `Hero.tsx`).
 *
 * @returns the current vertical scroll offset in pixels
 */
export default function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}
