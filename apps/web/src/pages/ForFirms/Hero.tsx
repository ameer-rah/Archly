import { Link } from "react-router-dom";

/**
 * ForFirms hero (Figma frame `75:3`): full-width navy blueprint panel,
 * single column (unlike Home's split hero — this page has no visual to
 * split against, matching the Figma layout).
 */
export default function Hero() {
  return (
    <section className="ff-hero blueprint-grid">
      <div className="ff-hero-inner">
        <p className="eyebrow eyebrow-light reveal reveal-visible">
          FOR ARCHITECTURE FIRMS · NEW YORK CITY
        </p>
        <h1 className="ff-hero-title reveal reveal-visible">
          Post a brief.
          <br />
          <span className="accent-italic">Find your next hire.</span>
        </h1>
        <p className="ff-hero-copy reveal reveal-visible" style={{ transitionDelay: "80ms" }}>
          Archly connects NYC architecture firms with vetted, portfolio-ready
          students from CUNY's architecture programs, trained in your tools
          and ready to contribute to real projects.
        </p>
        <div className="ff-hero-buttons reveal reveal-visible" style={{ transitionDelay: "160ms" }}>
          <Link to="/firm-signup" className="btn btn-sand">
            Sign Up &amp; Post a Project
          </Link>
          <a href="#process" className="btn btn-outline-light">
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
