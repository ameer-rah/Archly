import Reveal from "../../components/Reveal";
import TiltCard from "../../components/TiltCard";

const STEPS = [
  {
    n: "01",
    title: "Create your firm profile",
    copy: "Register your practice, add your team, and verify your NYC business address. Takes about 10 minutes.",
  },
  {
    n: "02",
    title: "Post a project brief",
    copy: "Describe the work, the timeline, the software you use, and what you're paying. Our brief builder keeps it structured.",
  },
  {
    n: "03",
    title: "Review student applications",
    copy: "Browse portfolios, resumes, and skill matches in your dashboard. Request a short intro call directly through the platform.",
  },
  {
    n: "04",
    title: "Hire and get to work",
    copy: "Confirm the engagement, sign a simple agreement, and onboard your student. The whole process takes under a week.",
  },
];

/**
 * "Simple By Design" process section (Figma frame `75:26`). Four
 * numbered TiltCards, matching the hover-tilt treatment used on the
 * Home page's hero action cards.
 */
export default function Process() {
  return (
    <section className="section ff-process">
      <Reveal className="section-head center">
        <p className="eyebrow">SIMPLE BY DESIGN</p>
        <h2>
          From brief to hired
          <br />
          <span className="accent-italic">in under a week</span>
        </h2>
      </Reveal>

      <div className="ff-process-grid">
        {STEPS.map((step) => (
          <TiltCard key={step.n} className="ff-process-card">
            <span className="ff-process-n">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
