import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import Hero from "./Hero";
import Mission from "./Mission";
import Values from "./Values";
import CTA from "./CTA";
import "./about.css";

/**
 * About page (`/about`): split hero, editorial "why Archly exists"
 * text, a media placeholder break, a divided values list, then a
 * plain-text closing CTA. Deliberately styled differently from
 * ForFirms/Waitlist (no navy blueprint hero, no card grids, no
 * gradient-fade section seams) so About reads as story content rather
 * than another pitch page built from the same template.
 *
 * Wrapped in `.about-page` so `about.css` can override the shared
 * `.footer-blend` fade color — this page ends its CTA on `--secondary`
 * (tan) instead of the `--background` (sand) every other blended
 * footer assumes, so the default fade would otherwise mismatch.
 */
export default function About() {
  return (
    <div className="about-page">
      <NavBar />
      <PageTransition>
        <main>
          <Hero />
          <Mission />
          <Values />
          <CTA />
        </main>
      </PageTransition>
      <Footer blend />
    </div>
  );
}
