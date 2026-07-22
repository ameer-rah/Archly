import { Link } from "react-router-dom";
import TiltCard from "../../components/TiltCard";
import useScrollY from "../../components/useScrollY";

/** CUNY program chips shown under the hero action cards. */
const CHIPS = [
  "Spitzer School of Architecture · CCNY",
  "City Tech · Architectural Technology",
  "Other CUNY Architecture Programs",
];

/**
 * Landing page hero (sand content on the left, navy blueprint panel on
 * the right — matches Figma frame `102:3`).
 *
 * The right panel shows a real photo (`public/home-hero.jpg`, from
 * `~/Desktop/archly-media/image5.jpg`) instead of the earlier
 * placeholder (abstract mouse-parallax square/circle shapes), now
 * that real imagery exists. `.hero-visual` is absolutely positioned
 * and wider than a strict half-column so the photo can bleed in
 * toward the text side (see `landing.css`), with its own edges faded
 * to transparent via a CSS mask rather than a hard rectangular cutoff.
 * Two motion effects layer on top of that: a slow continuous
 * Ken Burns zoom (pure CSS, `landing.css`'s `hero-visual-ken-burns`
 * keyframes) and a scroll-linked parallax drift here (image moves
 * slower than the page scroll, receding as you scroll past the hero) —
 * same drift technique the old placeholder shapes used, just applied
 * to the photo now instead.
 *
 * The two action cards are `TiltCard`s (cursor-tilt on hover). The
 * pilot card's button links to `/waitlist`; the firm card links to
 * `/firm-signup`.
 */
export default function Hero() {
  const scrollY = useScrollY();
  const scrollDrift = Math.min(scrollY * 0.15, 120);

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
          real internships and contracts: not coffee runs and CAD cleanup,
          but meaningful contributions to built projects across all five
          boroughs.
        </p>

        <div className="hero-cards reveal reveal-visible" style={{ transitionDelay: "160ms" }}>
          <TiltCard className="action-card">
            <h3>Join the Pilot Program</h3>
            <p>Students, be part of our early launch in NYC.</p>
            <Link to="/waitlist" className="btn btn-primary btn-sm">
              Sign Up
            </Link>
          </TiltCard>
          <TiltCard className="action-card">
            <h3>Are You a Firm?</h3>
            <p>Post real projects and start hiring CUNY talent today.</p>
            <Link to="/firm-signup" className="btn btn-outline btn-sm">
              Sign Up
            </Link>
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

      <div className="hero-visual" style={{ transform: `translateY(-${scrollDrift}px)` }}>
        <img className="hero-visual-image" src="/home-hero.jpg" alt="" />
      </div>
    </section>
  );
}
