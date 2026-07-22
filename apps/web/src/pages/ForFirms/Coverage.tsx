import Reveal from "../../components/Reveal";

const BOROUGHS = ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"];

/**
 * "Where We Operate" section (Figma frame `75:46`). The map is a
 * placeholder frame, same convention as the empty-state pattern on
 * Home — no fabricated map imagery until real coverage data exists.
 */
export default function Coverage() {
  return (
    <section className="section ff-coverage">
      <div className="ff-coverage-grid">
        <Reveal className="ff-coverage-left">
          <p className="eyebrow">WHERE WE OPERATE</p>
          <h2>
            New York City,
            <br />
            <span className="accent-italic">all five boroughs</span>
          </h2>
          <p className="ff-coverage-copy">
            Archly is built specifically for the NYC architecture ecosystem.
            We partner exclusively with CUNY schools, which means students
            who live and study in the same city where your firm operates.
          </p>
          <ul className="ff-borough-list">
            {BOROUGHS.map((b) => (
              <li key={b}>
                <span className="ff-borough-dot" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="ff-coverage-right">
          <div className="ff-map-placeholder" />
          <div className="ff-coverage-label">
            <p className="eyebrow">CURRENT COVERAGE</p>
            <p className="ff-coverage-label-text">New York City · 5 Boroughs</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
