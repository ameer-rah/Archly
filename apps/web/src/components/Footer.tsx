import { Link } from "react-router-dom";

/**
 * Site footer (Figma frame `104:22`).
 *
 * By default, solid navy with no top fade — right for Home, where the
 * section above it (Final CTA) is already navy, so they read as one
 * continuous panel. Pages whose last section is sand/tan instead
 * (e.g. ForFirms's Contact section) should pass `blend`, which adds
 * the same sand-to-navy fade used at other seams on that page. Links
 * are inert text, not `<a>`s, except the logo, which routes back to
 * `/` like the nav logo does.
 */

export default function Footer({ blend = false }: { blend?: boolean }) {
  return (
    <footer className={`footer ${blend ? "footer-blend" : ""}`}>
      <Link to="/" className="footer-brand">
        <img src="/archly-wordmark-sand.png" alt="Archly" className="footer-logo" />
      </Link>
      <p>© 2026 Archly Inc. · Connecting architecture students with real work.</p>
      <div className="footer-links">
        <span>Privacy</span>
        <span>Terms</span>
        <span>Contact</span>
      </div>
    </footer>
  );
}
