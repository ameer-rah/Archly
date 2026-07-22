import { useRef, type ReactNode } from "react";

/**
 * Cursor-tracked 3D tilt wrapper for cards.
 *
 * Reads the pointer position relative to the tilting element's own
 * bounding box on every `mousemove` and applies a `rotateX`/`rotateY`/
 * `scale` transform directly via the DOM ref (bypassing React state)
 * so the tilt updates every frame without triggering re-renders.
 * Resets to flat on `mouseleave`; the actual easing back to rest is
 * handled by the `transition` declared on `.tilt-card` in each page's
 * CSS, not by this component.
 *
 * `.tilt-card-frame` (static `perspective`, from `shared.css`) wraps
 * `.tilt-card` so the rotated card still gets a real vanishing-point
 * tilt, without combining `perspective()` and the rotation in one JS
 * transform on the same element — that combined form, especially
 * alongside `transform-style: preserve-3d`, was the trigger for a
 * Gecko-family rendering bug (Firefox, Zen, Brave; not Chromium) where
 * a card's content went unpainted after the tilt animated back to rest
 * on mouseleave. The actual fix was dropping `preserve-3d` entirely —
 * see the removed-property note in `shared.css`'s `.tilt-card` comment
 * — since none of these cards have children that need independent 3D
 * depth; this frame split plus `backface-visibility`/`will-change`
 * (also in `shared.css`) are defense-in-depth, not the root fix.
 *
 * @param children - card content to tilt
 * @param className - extra class(es) merged onto the tilting element
 *   (e.g. `"action-card"` to combine the tilt behavior with card
 *   styling) — NOT onto the perspective frame, which stays unstyled.
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
    el.style.transform = `rotateX(${-py * 10}deg) rotateY(${px * 10}deg) scale(1.02)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  }

  return (
    <div className="tilt-card-frame">
      <div
        ref={ref}
        className={`tilt-card ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
  );
}
