import { Link } from "react-router-dom";

/**
 * Site footer.
 *
 * By default, solid navy with no top fade — right for Home, where the
 * section above it (Final CTA) is already navy, so they read as one
 * continuous panel. Pages whose last section is sand/tan instead
 * should pass `blend`, which adds the same fade used at other seams
 * on that page (see `pages/About`, `pages/ForFirms` for examples that
 * retarget the fade color for their own last section).
 *
 * Column links are grounded in pages that actually exist — no
 * Handshake-style "Blog"/"Press"/enterprise-support categories, since
 * Archly doesn't have any of that yet and inventing the categories
 * would misrepresent the product. "Contact" stays inert text until a
 * real contact page or address exists.
 */

const COLUMNS = [
  {
    title: "Get Started",
    links: [
      { label: "Join the Pilot", path: "/waitlist" },
      { label: "For Firms", path: "/for-firms" },
      { label: "Log In", path: "/login" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Browse Projects", path: "/browse-projects" },
      { label: "About", path: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", path: "/privacy" },
      { label: "Terms", path: "/terms" },
    ],
  },
];

export default function Footer({ blend = false }: { blend?: boolean }) {
  return (
    <footer className={`footer ${blend ? "footer-blend" : ""}`}>
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link to="/" className="footer-brand">
            <img src="/archly-wordmark-sand.png" alt="Archly" className="footer-logo" />
          </Link>
          <p className="footer-tagline">Build for future architects.</p>
        </div>

        <div className="footer-columns">
          {COLUMNS.map((col) => (
            <div key={col.title} className="footer-col">
              <p className="footer-col-title">{col.title}</p>
              {col.links.map((link) => (
                <Link key={link.label} to={link.path} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="footer-col">
            <p className="footer-col-title">Support</p>
            <span className="footer-link footer-link-inert">Contact</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Archly Inc. · Connecting architecture students with real work.</p>
      </div>
    </footer>
  );
}
