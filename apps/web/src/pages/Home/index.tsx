import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import OurJourney from "./OurJourney";
import OpenProjects from "./OpenProjects";
import FinalCTA from "./FinalCTA";
import "./landing.css";

/**
 * Landing page (`/`).
 *
 * Composes the marketing sections in scroll order: hero, how-it-works,
 * our-journey, open-projects, final CTA, footer. All copy is static and
 * every button/nav link is inert (no handlers, no routing) — this is a
 * visual build matching the Figma "Landing Page - Desktop" frame, not a
 * wired-up flow. Section-to-section color transitions (sand/tan/navy)
 * are handled per-section in `./landing.css`.
 *
 * `NavBar` and `Footer` are shared site chrome (used by every page, not
 * just this one) so they live in `components/`, not here — everything
 * else in this folder is specific to the landing page. `PageTransition`
 * wraps just `<main>` (not the nav/footer) so only the page content
 * fades in on route change, not the persistent chrome around it.
 */
export default function Home() {
  return (
    <>
      <NavBar />
      <PageTransition>
        <main>
          <Hero />
          <HowItWorks />
          <OurJourney />
          <OpenProjects />
          <FinalCTA />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
