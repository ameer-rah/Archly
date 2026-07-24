import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";

/**
 * Closing section: a plain sand block with an inline link-style CTA,
 * instead of the navy blueprint pill-button band Home/ForFirms end on.
 * Fades into the footer via `<Footer blend />` since this section stays
 * light instead of matching the footer's navy.
 */
export default function CTA() {
  return (
    <section className="section about-cta">
      <Reveal className="about-cta-inner">
        <h2>Be part of the pilot.</h2>
        <div className="about-cta-links">
          <Link to="/waitlist" className="about-cta-link">
            Join as a student →
          </Link>
          <Link to="/firm-signup" className="about-cta-link">
            Get started as a firm →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
