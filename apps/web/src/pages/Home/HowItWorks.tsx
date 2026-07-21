import { useEffect, useRef, useState } from "react";
import Reveal from "../../components/Reveal";

/** The four-step process shown in display order, left to right. */
const STEPS = [
  {
    title: "Build your profile",
    copy: "Upload your portfolio, set your skills, and tell firms what kind of work excites you.",
  },
  {
    title: "Browse real projects",
    copy: "Filter live briefs from local firms by role, timeline, software, and compensation.",
  },
  {
    title: "Apply in one click",
    copy: "Your profile does the heavy lifting. Firms see your work before they see your resume.",
  },
  {
    title: "Start contributing",
    copy: "Get placed on real projects with real deadlines — and build a portfolio that proves it.",
  },
];

/**
 * "How Archly Works" section (Figma frame `103:2`).
 *
 * The connecting line between the four step dots draws itself in as
 * the user scrolls, rather than fading in all at once. `progress` is
 * a 0-1 value computed from `stepsRef`'s position in the viewport
 * (0 when the steps row's top is at 85% of viewport height, 1 once
 * the whole row has scrolled past that point) and drives:
 * - `.steps-line-fill`'s `scaleX` (the line "drawing" left to right)
 * - each `.step-dot`'s active/inactive state, once `progress` passes
 *   that step's position in the sequence (`i / STEPS.length`)
 *
 * The scroll listener is rAF-throttled the same way `useScrollY` is,
 * but kept local here (rather than reusing that hook) since it needs
 * the element's own bounding rect, not just the raw scroll offset.
 */
export default function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = stepsRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;
          const raw = (vh * 0.85 - rect.top) / rect.height;
          setProgress(Math.min(Math.max(raw, 0), 1));
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section how-it-works">
      <Reveal className="section-head center">
        <p className="eyebrow">HOW ARCHLY WORKS</p>
        <h2>Simple. Transparent. Built for you.</h2>
      </Reveal>

      <div className="steps" ref={stepsRef}>
        <div className="steps-line-track">
          <div className="steps-line-fill" style={{ transform: `scaleX(${progress})` }} />
        </div>
        {STEPS.map((step, i) => {
          const active = progress > i / STEPS.length;
          return (
            <div key={step.title} className="step">
              <div className={`step-dot ${active ? "step-dot-active" : ""}`} />
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
