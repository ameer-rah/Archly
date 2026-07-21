import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/shared.css";

/**
 * Nav links, in display order. Only pages that actually exist get a
 * `path` (and real routing via `<Link>`); the rest stay inert text
 * until those pages are built.
 */
const LINKS: { label: string; path?: string }[] = [
  { label: "For Students" },
  { label: "For Firms", path: "/for-firms" },
  { label: "Browse Projects" },
  { label: "About" },
];

/**
 * Fixed site header shared by every page.
 *
 * Starts semi-transparent over the hero and gains a solid, blurred
 * background (`.navbar-scrolled`) once the page scrolls past 8px, so
 * text stays legible against whatever section is behind it.
 *
 * Buttons stay visual-only (no backend yet), but nav links that point
 * to a real page use `<Link>` for client-side routing.
 */
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <img src="/archly-wordmark.png" alt="Archly" className="navbar-logo" />
        </Link>
        <div className="navbar-links">
          {LINKS.map(({ label, path }) =>
            path ? (
              <Link key={label} to={path} className="navbar-link">
                {label}
              </Link>
            ) : (
              <span key={label} className="navbar-link">
                {label}
              </span>
            ),
          )}
        </div>
        <div className="navbar-actions">
          <button type="button" className="btn btn-ghost">
            Log In
          </button>
          <button type="button" className="btn btn-primary">
            Join the Pilot
          </button>
        </div>
      </div>
    </nav>
  );
}
