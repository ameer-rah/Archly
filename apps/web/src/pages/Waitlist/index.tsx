import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import InfoPanel from "./InfoPanel";
import FormPanel from "./FormPanel";
import "./waitlist.css";

/**
 * Pilot waitlist page (`/waitlist`): a single persistent two-pane
 * split screen (navy pitch + timeline on the left, the form on the
 * right) instead of ForFirms's stacked-sections formula — Waitlist is
 * one conversion action, not a multi-section pitch, so it shouldn't
 * read as a shorter ForFirms. The split's own right-column fade
 * handles the transition into the footer, so `Footer` renders plain
 * here (see `waitlist.css`'s `.wl-form-panel::after`).
 */
export default function Waitlist() {
  return (
    <>
      <NavBar />
      <PageTransition>
        <main>
          <section className="wl-split">
            <InfoPanel />
            <FormPanel />
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
