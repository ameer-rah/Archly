import BlurReveal from "../../components/BlurReveal";

/**
 * About hero: a stacked masthead — big centered statement first, a
 * full-width photo underneath (`public/about-hero.jpg`, from
 * `~/Desktop/archly-media/image1.jpg`). Home's hero is a 50/50
 * side-by-side split (text | visual); stacking instead keeps About
 * from reading as the same composition with different copy.
 *
 * The headline uses `BlurReveal` (a heavier scroll-in than the rest of
 * the site's plain fade-up) since this is the page's most important
 * line — see that component's docstring. `.about-hero-media` gets a
 * slow Ken Burns zoom + a top/bottom mask fade, same technique as
 * Home's hero photo.
 */
export default function Hero() {
  return (
    <section className="about-hero">
      <div className="about-hero-text">
        <p className="eyebrow reveal reveal-visible">ABOUT ARCHLY</p>
        <BlurReveal>
          <h1 className="about-hero-title">
            Real projects. <span className="accent-italic">Real impact.</span>
          </h1>
        </BlurReveal>
        <p className="about-hero-copy reveal reveal-visible" style={{ transitionDelay: "80ms" }}>
          Archly connects CUNY architecture students with NYC firms offering
          real work, not busywork, and gives firms direct access to local
          talent trained in the tools they already use.
        </p>
      </div>

      <div className="about-hero-media">
        <img className="about-hero-image" src="/about-hero.jpg" alt="" />
      </div>
    </section>
  );
}
