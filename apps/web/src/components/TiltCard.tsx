import { useRef, type ReactNode } from "react";

/**
 * Cursor-tracked 3D tilt wrapper for cards.
 *
 * Reads the pointer position relative to the wrapper's own bounding
 * box on every `mousemove` and applies a `rotateX`/`rotateY`/`scale`
 * transform directly via the DOM ref (bypassing React state) so the
 * tilt updates every frame without triggering re-renders. Resets to
 * flat on `mouseleave`; the actual easing back to rest is handled by
 * the `transition` declared on `.tilt-card` in `landing.css`, not by
 * this component.
 *
 * @param children - card content to tilt
 * @param className - extra class(es) merged onto the wrapper (e.g.
 *   `"action-card"` to combine the tilt behavior with card styling)
 */
export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-py * 10}deg) rotateY(${px * 10}deg) scale(1.02)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
