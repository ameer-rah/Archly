import Reveal from "../../components/Reveal";

/**
 * Closing CTA band (Figma frame `104:13`): full-width navy blueprint
 * section, same `.blueprint-grid` treatment as the hero's right panel.
 * `.final-cta-inner` carries `position: relative` in `landing.css` so
 * its text/buttons paint above the section's `::before` fade overlay
 * (an absolutely-positioned element would otherwise stack on top of
 * non-positioned content regardless of DOM order — see the `.footer`
 * fix in `landing.css` for the bug this pattern avoids).
 */

export default function FinalCTA() {
  return (
    <section className="final-cta blueprint-grid">
      <Reveal className="final-cta-inner center">
        <p className="eyebrow eyebrow-light">BE PART OF THE FUTURE</p>
        <h2>Join the movement. Let's build the future of architecture together.</h2>
        <div className="final-cta-buttons">
          <button type="button" className="btn btn-sand">
            Join the Pilot Program
          </button>
          <button type="button" className="btn btn-outline-light">
            For Firms: Get Started
          </button>
        </div>
      </Reveal>
    </section>
  );
}
