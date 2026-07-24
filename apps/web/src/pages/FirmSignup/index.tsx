import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import BrandPanel from "./BrandPanel";
import SignupForm from "./SignupForm";
import "./firmsignup.css";

/**
 * Firm Signup (`/firm-signup`, Figma frame `80:2`): fixed-width tan
 * brand panel on the left, the actual signup form on the right.
 *
 * `.fs-shell` uses the same flex-column/`flex:1` sticky-footer layout
 * as Login, so `Footer` stays pinned to the bottom instead of
 * floating right under short content.
 */
export default function FirmSignup() {
  return (
    <div className="fs-shell">
      <NavBar />
      <PageTransition>
        <main className="fs-split">
          <BrandPanel />
          <SignupForm />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
