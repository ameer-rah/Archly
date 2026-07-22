import Reveal from "../../components/Reveal";

/**
 * About hero: a stacked masthead — big centered statement first, a
 * full-width media band underneath. Home's hero is a 50/50 side-by-side
 * split (text | visual); stacking instead keeps About from reading as
 * the same composition with different copy.
 *
 * `.about-media-slot` is a placeholder for a real photo/video of the
 * pilot once one exists — swap its contents for an `<img>`/`<video>`
 * without touching the layout around it.
 */
export default function Hero() {
  return (
    <section className="about-hero">
      <div className="about-hero-text">
        <p className="eyebrow reveal reveal-visible">ABOUT ARCHLY</p>
        <h1 className="about-hero-title reveal reveal-visible">
          Real projects. <span className="accent-italic">Real impact.</span>
        </h1>
        <p className="about-hero-copy reveal reveal-visible" style={{ transitionDelay: "80ms" }}>
          Archly connects CUNY architecture students with NYC firms offering
          real work, not busywork, and gives firms direct access to local
          talent trained in the tools they already use.
        </p>
      </div>

      <Reveal delay={120} className="about-hero-media">
        <div className="about-media-slot about-media-slot-wide">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9" cy="10" r="1.5" fill="currentColor" />
            <path d="M3 16l5-4 4 3 3-2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>Photos and video from the pilot, coming soon</p>
        </div>
      </Reveal>
    </section>
  );
}
