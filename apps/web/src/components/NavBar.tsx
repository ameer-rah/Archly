import { useEffect, useState } from "react";

/** Nav link labels, in display order. Inert — not wired to routes yet. */
const LINKS = ["For Students", "For Firms", "Browse Projects", "About"];

/**
 * Fixed site header shared by every page.
 *
 * Starts semi-transparent over the hero and gains a solid, blurred
 * background (`.navbar-scrolled`) once the page scrolls past 8px, so
 * text stays legible against whatever section is behind it.
 *
 * All links/buttons are visual-only: no `onClick`, no `<Link>` routing.
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
        <div className="navbar-brand">ARCHLY</div>
        <div className="navbar-links">
          {LINKS.map((label) => (
            <span key={label} className="navbar-link">
              {label}
            </span>
          ))}
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
