import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-triggered blur-in reveal — same `IntersectionObserver` pattern
 * as `Reveal`, but the CSS transitions `filter: blur(...)` and a larger
 * translateY alongside opacity, instead of just opacity/translateY.
 * Meant for headings that should want a heavier, more "kinetic
 * editorial" entrance than the rest of the page's plain fade-up
 * (inspired by tasteskill.dev's scroll-triggered text blur-ins) — use
 * sparingly, on a page's one or two most important headings, not
 * everywhere `Reveal` is already used.
 *
 * @param children - content to reveal
 * @param delay - CSS transition-delay in ms, for staggering (default 0)
 * @param className - extra class(es) merged onto the wrapper div
 */
export default function BlurReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`blur-reveal ${visible ? "blur-reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
