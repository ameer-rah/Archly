import Reveal from "../../components/Reveal";

/**
 * Roadmap rows, in chronological order. `tag` is the pill label shown
 * next to the title (`null` renders no pill, used for the final
 * long-term item which has no "Current/Soon/Later" status).
 */
const ROADMAP = [
  {
    title: "Pilot Program",
    tag: "Current",
    copy: "Testing with select CUNY students and NYC firms. Gathering feedback and improving.",
  },
  {
    title: "Public Launch",
    tag: "Soon",
    copy: "Opening Archly to all CUNY architecture students and NYC firms.",
  },
  {
    title: "Expand & Grow",
    tag: "Later",
    copy: "Bringing Archly to more CUNY campuses and connecting more talent.",
  },
  {
    title: "Long-Term Vision",
    tag: null,
    copy: "Building the go-to platform for architecture talent and professional collaboration.",
  },
];

/**
 * "Our Journey" section (Figma frame `103:23`): pilot-stage progress
 * card on the left, full roadmap list on the right.
 *
 * The stage-progress bar's fill (`.stage-fill`) animates from 0 to its
 * final width via a pure-CSS transition keyed off `.journey-left`
 * gaining the `.reveal-visible` class (see `landing.css`), rather than
 * a JS-driven progress value like `HowItWorks` uses — there's no
 * scroll-position dependency here, it's a one-shot reveal.
 */
export default function OurJourney() {
  return (
    <section className="section our-journey">
      <div className="journey-grid">
        <Reveal className="journey-left">
          <p className="eyebrow">OUR JOURNEY</p>
          <h2>We're building something great.</h2>
          <p className="journey-copy">
            We're currently in pilot mode, working closely with students and
            firms to shape the future of Archly.
          </p>

          <div className="stage-card">
            <p className="eyebrow">CURRENT STAGE</p>
            <div className="stage-row">
              <h3>Pilot Program</h3>
              <span className="stage-status">● In Progress</span>
            </div>
            <div className="stage-track">
              <div className="stage-fill" />
            </div>
            <div className="stage-foot">
              <span>Stage 1 of 4</span>
              <span>Next: Public Launch</span>
            </div>
          </div>

          <p className="journey-contact">Have questions? Contact us →</p>
        </Reveal>

        <Reveal delay={120} className="roadmap-card">
          {ROADMAP.map((item) => (
            <div key={item.title} className="roadmap-row">
              <div className="roadmap-dot" />
              <div>
                <div className="roadmap-title-row">
                  <h4>{item.title}</h4>
                  {item.tag && <span className="tag">{item.tag}</span>}
                </div>
                <p>{item.copy}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
