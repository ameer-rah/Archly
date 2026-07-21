/**
 * Site footer (Figma frame `104:22`).
 *
 * Solid navy to match the final CTA directly above it — no fade
 * between the two, by design, so they read as one continuous panel
 * (see `.footer` in `landing.css`). Links are inert text, not `<a>`s.
 */

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">ARCHLY</div>
      <p>© 2026 Archly Inc. · Connecting architecture students with real work.</p>
      <div className="footer-links">
        <span>Privacy</span>
        <span>Terms</span>
        <span>Contact</span>
      </div>
    </footer>
  );
}
