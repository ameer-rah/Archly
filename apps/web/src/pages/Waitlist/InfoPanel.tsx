import Reveal from "../../components/Reveal";

const STEPS = [
  {
    title: "You're on the list",
    copy: "You'll get an instant confirmation email — no account needed yet.",
  },
  {
    title: "We verify your details",
    copy: "Confirm your CUNY email so we know you're a current architecture student.",
  },
  {
    title: "We email you at launch",
    copy: "When the pilot opens in your borough, you'll get an invite to create your account.",
  },
];

/**
 * Left half of the split-screen waitlist layout: pitch copy plus a
 * vertical timeline (dot + connecting line) standing in for what used
 * to be a separate "What Happens Next" card section further down the
 * page. Pairs with `FormPanel` in `index.tsx` — together they replace
 * ForFirms's stacked-sections formula with one persistent two-pane
 * screen, so Waitlist stops looking like a shorter ForFirms.
 */
export default function InfoPanel() {
  return (
    <div className="wl-info-panel blueprint-grid">
      <div className="wl-info-inner">
        <p className="eyebrow eyebrow-light reveal reveal-visible">
          PILOT PROGRAM · PRE-LAUNCH
        </p>
        <h1 className="wl-info-title reveal reveal-visible">
          Be part of the <span className="accent-italic">first cohort.</span>
        </h1>
        <p className="wl-info-copy reveal reveal-visible" style={{ transitionDelay: "80ms" }}>
          Archly is opening its pilot to a small group of CUNY architecture
          students first.
        </p>

        <div className="wl-timeline">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={160 + i * 100} className="wl-timeline-row">
              <div className="wl-timeline-dot-col">
                <span className="wl-timeline-dot" />
                {i < STEPS.length - 1 && <span className="wl-timeline-line" />}
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
