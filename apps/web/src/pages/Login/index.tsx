import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import "./login.css";

/**
 * Login (`/login`, Figma frame `77:2`), adapted from the Figma design
 * rather than built verbatim: the frame's single "Continue as a
 * Student" option doesn't fit where the product actually is right
 * now — students don't have accounts yet at all (the pilot's student
 * path is the Waitlist), while firms are the side a login makes sense
 * to lead with. So this page leads with a firm continue path and
 * routes students to the waitlist instead of pretending they can log
 * in.
 *
 * "Continue as a Firm" now links to `/firm-login` — this page is just
 * the chooser between "I'm a firm" and "I'm a student"; the actual
 * firm-specific login screen (with its own Google continue button and
 * "New firm? Create an account" link to Signup) lives there instead
 * of being crammed into this page too.
 *
 * `.login-shell` is a flex column filling the viewport so `Footer`
 * stays pinned to the bottom on this short page instead of floating
 * right under the content — `NavBar` is `position: fixed` so it
 * doesn't participate in this layout, only `main`/`Footer` need to.
 */
export default function Login() {
  return (
    <div className="login-shell">
      <NavBar />
      <PageTransition>
        <main className="login-page">
          <div className="login-box">
            <h1>Log in</h1>
            <p className="login-copy">
              Account login isn't live yet — Archly's account system is still
              being built.
            </p>

            <Link to="/firm-login" className="btn btn-primary login-continue">
              Continue as a Firm
            </Link>

            <div className="login-student-note">
              <p className="login-student-title">Are you a student?</p>
              <p className="login-student-copy">
                Students can't log in yet — join the pilot waitlist instead.
              </p>
              <Link to="/waitlist" className="btn btn-outline login-student-cta">
                Join the Pilot Program
              </Link>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
