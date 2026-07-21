import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-triggered fade/slide-up wrapper.
 *
 * Wraps `children` in a div that starts hidden (`.reveal`) and adds
 * `.reveal-visible` the first time it crosses 15% into the viewport,
 * via `IntersectionObserver`. The observer disconnects after the first
 * trigger — the reveal only plays once per mount, it doesn't re-hide
 * on scroll-back. The actual fade/translate values live in
 * `.reveal` / `.reveal-visible` in `landing.css`; this component only
 * toggles the class.
 *
 * @param children - content to reveal
 * @param delay - CSS transition-delay in ms, for staggering multiple
 *   `Reveal`s in the same section (default 0)
 * @param className - extra class(es) merged onto the wrapper div
 */
export default function Reveal({
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
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
