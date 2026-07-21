import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import Hero from "./Hero";
import StatsBar from "./StatsBar";
import Process from "./Process";
import Coverage from "./Coverage";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Contact from "./Contact";
import "./forfirms.css";

/**
 * "For Firms" marketing page (`/for-firms`, Figma frame `75:2`).
 *
 * Same visual system as the Home landing page (sand/tan/navy rhythm,
 * blueprint textures, scroll reveals, tilt cards) — built from the
 * Figma layout and copy, but re-colored to the site's established
 * sand + navy + blue palette rather than the Figma frame's older
 * navy/orange treatment, for consistency with Home.
 */
export default function ForFirms() {
  return (
    <>
      <NavBar />
      <PageTransition>
        <main>
          <Hero />
          <StatsBar />
          <Process />
          <Coverage />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
      </PageTransition>
      <Footer blend />
    </>
  );
}
