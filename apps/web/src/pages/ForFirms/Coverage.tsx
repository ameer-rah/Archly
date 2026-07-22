import type { CSSProperties } from "react";
import Reveal from "../../components/Reveal";

const BOROUGHS = ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"];

/**
 * Scattered floating photo cards standing in for the map placeholder —
 * each card floats on its own independent vertical drift (staggered
 * `animationDelay`) while `.tilt-photo` (shared.css) handles the static
 * rotation + hover-straighten, same pattern as tasteskill.dev's
 * suspended card cluster. `top`/`left`/`width` are percentages of
 * `.ff-coverage-map` so the whole cluster scales with the column.
 * `tiltY`/`tiltX` add the same 3D lean tasteskill.dev's cards have —
 * perspective foreshortening so one side of each card reads closer
 * than the other, alternating direction card to card.
 */
const BOROUGH_CARDS = [
  { name: "Manhattan", src: "/borough-manhattan.png", tilt: "-6deg", tiltY: "14deg", tiltX: "-4deg", top: "0%", left: "0%", width: "42%", z: 3, delay: "0s" },
  { name: "Brooklyn", src: "/borough-brooklyn.png", tilt: "5deg", tiltY: "-12deg", tiltX: "3deg", top: "2%", left: "52%", width: "42%", z: 2, delay: "1.4s" },
  { name: "The Bronx", src: "/borough-bronx.png", tilt: "4deg", tiltY: "10deg", tiltX: "4deg", top: "56%", left: "-2%", width: "42%", z: 2, delay: "0.9s" },
  { name: "Queens", src: "/borough-queens.png", tilt: "-4deg", tiltY: "-14deg", tiltX: "-3deg", top: "50%", left: "58%", width: "40%", z: 3, delay: "2.8s" },
  { name: "Staten Island", src: "/borough-staten-island.png", tilt: "-2deg", tiltY: "8deg", tiltX: "5deg", top: "28%", left: "28%", width: "32%", z: 4, delay: "2s" },
] as const;

/**
 * "Where We Operate" section (Figma frame `75:46`). The empty-state map
 * placeholder is replaced with the real five-borough photos, floating
 * as a scattered cluster instead of a flat grid.
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
          <div className="ff-coverage-map">
            {BOROUGH_CARDS.map((card) => (
              <div
                key={card.name}
                className="ff-borough-card"
                style={
                  {
                    top: card.top,
                    left: card.left,
                    width: card.width,
                    zIndex: card.z,
                    animationDelay: card.delay,
                  } as CSSProperties
                }
              >
                <div
                  className="tilt-photo"
                  style={
                    {
                      "--tilt": card.tilt,
                      "--tilt-y": card.tiltY,
                      "--tilt-x": card.tiltX,
                    } as CSSProperties
                  }
                >
                  <img src={card.src} alt={card.name} />
                </div>
                <p className="ff-borough-card-label">{card.name}</p>
              </div>
            ))}
          </div>
          <div className="ff-coverage-label">
            <p className="eyebrow">CURRENT COVERAGE</p>
            <p className="ff-coverage-label-text">New York City · 5 Boroughs</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
