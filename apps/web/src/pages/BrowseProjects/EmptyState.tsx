import { Link } from "react-router-dom";

/**
 * Honest empty state (Figma frame `72:76`) — Archly has no backend
 * yet, so there are genuinely zero project postings. Says so directly
 * instead of showing fabricated project cards, and points firms
 * (the only people who could actually change that) straight to the
 * real signup flow rather than the marketing page.
 */
export default function EmptyState() {
  return (
    <div className="bp-empty">
      <h2>No projects posted yet</h2>
      <p>
        Archly is a two-sided marketplace — NYC architecture firms create an
        account and post their own project listings. Once firms join, open
        positions will appear here, filterable by location and radius.
      </p>
      <Link to="/firm-signup" className="btn btn-primary">
        Are you a firm? Post the first project →
      </Link>
    </div>
  );
}
