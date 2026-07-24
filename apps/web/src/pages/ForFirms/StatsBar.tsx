import Reveal from "../../components/Reveal";

const STATS = [
  { value: "5", label: "NYC BOROUGHS SERVED" },
  { value: "CUNY", label: "EXCLUSIVE TALENT POOL" },
  { value: "15%", label: "COMMISSION · PAY ONLY ON SUCCESS" },
  { value: "$0", label: "COST TO STUDENTS" },
];

/**
 * Stats strip directly under the hero (Figma frame `75:13`). Solid navy,
 * continuous with the hero above it — no fade/blend, matching the same
 * "same color, no seam" treatment used between FinalCTA and Footer on
 * the Home page.
 */

export default function StatsBar() {
  return (
    <section className="ff-stats blueprint-grid">
      {STATS.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 80} className="ff-stat">
          <div className="ff-stat-value">{stat.value}</div>
          <div className="ff-stat-label">{stat.label}</div>
        </Reveal>
      ))}
    </section>
  );
}
