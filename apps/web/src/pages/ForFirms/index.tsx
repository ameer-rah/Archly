import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import Hero from "./Hero";
import StatsBar from "./StatsBar";
import Process from "./Process";
import Coverage from "./Coverage";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import "./forfirms.css";

/**
 * "For Firms" marketing page (`/for-firms`, Figma frame `75:2`).
 *
 * Same visual system as the Home landing page (sand/tan/navy rhythm,
 * blueprint textures, scroll reveals, tilt cards) — built from the
 * Figma layout and copy, but re-colored to the site's established
 * sand + navy + blue palette rather than the Figma frame's older
 * navy/orange treatment, for consistency with Home.
 *
 * Dropped the old Contact/"Tell us about your firm" section — it was
 * an entirely inert (`readOnly`) lead-capture form collecting mostly
 * the same info as the now-real `/firm-signup` flow. Keeping a fake
 * dead-end form at the bottom of the page next to real, working
 * "Sign Up Now" links (Pricing) was worse than not having it: a firm
 * reading to the end could easily fill it out thinking it was the
 * real signup. `.forfirms-page` wraps the page so the `Footer` fade
 * (see `forfirms.css`) can be re-targeted at FAQ's tan background,
 * now that FAQ is the last section instead of Contact's sand one.
 */
export default function ForFirms() {
  return (
    <div className="forfirms-page">
      <NavBar />
      <PageTransition>
        <main>
          <Hero />
          <StatsBar />
          <Process />
          <Coverage />
          <Pricing />
          <FAQ />
        </main>
      </PageTransition>
      <Footer blend />
    </div>
  );
}
