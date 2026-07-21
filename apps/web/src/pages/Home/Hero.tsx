import { useRef, useState } from "react";
import useScrollY from "../../components/useScrollY";
import TiltCard from "../../components/TiltCard";
import StudentIcon from "./icons/StudentIcon";
import FirmIcon from "./icons/FirmIcon";

/** CUNY program chips shown under the hero action cards. */
const CHIPS = [
  "Spitzer School of Architecture · CCNY",
  "City Tech — Architectural Technology",
  "Other CUNY Architecture Programs",
];

/**
 * Landing page hero (sand content on the left, navy blueprint panel on
 * the right — matches Figma frame `102:3`).
 *
 * Two independent motion effects layer on the right-hand visual:
 * - **Mouse parallax**: `handleMouseMove`/`handleMouseLeave` track the
 *   cursor position relative to `visualRef` and offset the square/circle
 *   shapes in opposite directions for a faux-3D depth effect.
 * - **Scroll drift**: `useScrollY` + `scrollDrift` slide the whole shape
 *   group upward (capped at 90px) as the user scrolls past the hero, so
 *   the visual recedes rather than scrolling flatly with the page.
 *
 * The two action cards are `TiltCard`s (cursor-tilt on hover) wrapping
 * a `StudentIcon`/`FirmIcon`; their "Sign Up" buttons are inert.
 */
export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const scrollY = useScrollY();
  const scrollDrift = Math.min(scrollY * 0.12, 90);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = visualRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: px * 24, y: py * 24 });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow reveal reveal-visible">WHERE STUDIO MEETS OPPORTUNITY</p>
        <h1 className="hero-title reveal reveal-visible">
          Real projects.
          <br />
          Real experience.
          <br />
          <span className="accent-italic">Real impact.</span>
        </h1>
        <p className="hero-copy reveal reveal-visible" style={{ transitionDelay: "80ms" }}>
          Archly connects CUNY architecture students with NYC firms offering
          real internships and contracts — not coffee runs and CAD cleanup,
          but meaningful contributions to built projects across all five
          boroughs.
        </p>

        <div className="hero-cards reveal reveal-visible" style={{ transitionDelay: "160ms" }}>
          <TiltCard className="action-card">
            <div className="action-card-icon">
              <StudentIcon />
            </div>
            <h3>Join the Pilot Program</h3>
            <p>Students, be part of our early launch in NYC.</p>
            <button type="button" className="btn btn-primary btn-sm">
              Sign Up →
            </button>
          </TiltCard>
          <TiltCard className="action-card">
            <div className="action-card-icon">
              <FirmIcon />
            </div>
            <h3>Are You a Firm?</h3>
            <p>Post real projects and start hiring CUNY talent today.</p>
            <button type="button" className="btn btn-outline btn-sm">
              Sign Up →
            </button>
          </TiltCard>
        </div>

        <div className="chip-row reveal reveal-visible" style={{ transitionDelay: "220ms" }}>
          {CHIPS.map((label) => (
            <span key={label} className="chip">
              {label}
            </span>
          ))}
        </div>
      </div>

      <div
        className="hero-visual blueprint-grid"
        ref={visualRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="hero-visual-group"
          style={{ transform: `translateY(-${scrollDrift}px)` }}
        >
          <div
            className="hero-visual-square"
            style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          >
            <div
              className="hero-visual-circle"
              style={{ transform: `translate(${-offset.x * 0.6}px, ${-offset.y * 0.6}px)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
