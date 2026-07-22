import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";

/**
 * "Browse Open Projects" section (Figma frame `104:2`).
 *
 * Intentionally always renders the empty state — Archly has no real
 * project listings yet, and per project convention we never fabricate
 * placeholder/sample listings or fake stats to fill the space. This
 * section stays empty-state-only until real firm-posted projects
 * exist to show.
 */
export default function OpenProjects() {
  return (
    <section className="section open-projects">
      <Reveal className="head-row">
        <div>
          <p className="eyebrow">OPEN PROJECTS</p>
          <h2>Browse Open Projects</h2>
        </div>
        <Link to="/browse-projects" className="link-arrow">
          View all projects →
        </Link>
      </Reveal>

      <Reveal delay={100} className="empty-state">
        <h3>No projects posted yet</h3>
        <p>
          Archly is a two-sided marketplace: NYC architecture firms create
          an account and post their own project listings. Once firms join,
          open positions will appear here.
        </p>
        <Link to="/firm-signup" className="btn btn-primary">
          Are you a firm? Post the first project
        </Link>
      </Reveal>
    </section>
  );
}
