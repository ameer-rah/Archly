import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import "./firmlogin.css";

/**
 * Firm Login (`/firm-login`) — the actual destination for `/login`'s
 * "Continue as a Firm", which was inert until this page existed (see
 * `pages/Login/index.tsx`). No separate Figma frame for this exists;
 * it's the firm-specific half of `Login - Desktop` (frame `77:2`)
 * split out into its own route so `/login` can stay a plain chooser
 * between "I'm a firm" and "I'm a student" instead of cramming both
 * paths into one page.
 *
 * "Continue with Google" is inert — same as Signup's, no WorkOS
 * wiring yet — but the flow shape is now real: Login → Firm Login →
 * (no account) → Firm Signup, matching how it'll actually work once
 * OAuth exists (one button, backend decides new vs. returning).
 *
 * `.firm-login-shell` reuses Login's flex-column/`flex:1`
 * sticky-footer layout so `Footer` stays pinned to the bottom on this
 * short page too.
 */
export default function FirmLogin() {
  return (
    <div className="firm-login-shell">
      <NavBar />
      <PageTransition>
        <main className="firm-login-page">
          <div className="firm-login-box">
            <p className="eyebrow">FOR NYC ARCHITECTURE FIRMS</p>
            <h1>Firm Login</h1>
            <p className="firm-login-copy">
              Account login isn't live yet — Archly's account system is
              still being built. Once it's ready, you'll log in here with
              your firm's Google account.
            </p>

            <button type="button" className="btn btn-primary firm-login-google">
              Continue with Google
            </button>

            <p className="firm-login-signup-prompt">
              New firm? <Link to="/firm-signup">Create an account</Link>
            </p>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
