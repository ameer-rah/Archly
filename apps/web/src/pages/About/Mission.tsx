import type { CSSProperties } from "react";
import Reveal from "../../components/Reveal";
import BlurReveal from "../../components/BlurReveal";

/**
 * "Why Archly Exists" — an asymmetric editorial split (sticky number
 * label + prose + a small tilted photo) instead of a centered prose
 * block, and no gradient fade/blueprint texture around it. Deliberately
 * plainer than the rest of the site's section chrome, so About reads
 * as written content rather than another pitch section. The photos
 * (`public/about-photo-1.jpg`/`-2.jpg`, from `~/Desktop/archly-media/
 * image2.jpg`/`image3.jpg`) use the shared `.tilt-photo` treatment —
 * a static rotation that straightens on hover — and each row's heading
 * uses `BlurReveal` for a heavier scroll-in than the rest of the page.
 */
export default function Mission() {
  return (
    <section className="section about-editorial">
      <div className="about-editorial-inner">
        <Reveal className="about-editorial-row">
          <div className="about-editorial-label">
            <span className="about-editorial-n">01</span>
            <p className="eyebrow">THE GAP</p>
          </div>
          <div className="about-editorial-text">
            <BlurReveal>
              <h2>Getting hired shouldn't be the hard part.</h2>
            </BlurReveal>
            <p>
              CUNY's architecture programs turn out students who already know
              Revit, Rhino, and AutoCAD, and who've spent years in studio
              culture, but the path from classroom to a firm's actual project
              work is still mostly word-of-mouth and cold emails.
            </p>
          </div>
          <div
            className="tilt-photo about-editorial-photo"
            style={{ "--tilt": "-4deg" } as CSSProperties}
          >
            <img src="/about-photo-1.jpg" alt="" />
          </div>
        </Reveal>

        <Reveal delay={100} className="about-editorial-row">
          <div className="about-editorial-label">
            <span className="about-editorial-n">02</span>
            <p className="eyebrow">WHAT WE BUILT</p>
          </div>
          <div className="about-editorial-text">
            <BlurReveal>
              <h2>One place for CUNY students and NYC firms.</h2>
            </BlurReveal>
            <p>
              NYC firms need help on real projects and want talent that's
              local, trained, and ready to contribute, not another national
              internship board. Archly connects the two directly, students
              and firms, in one place.
            </p>
          </div>
          <div
            className="tilt-photo about-editorial-photo"
            style={{ "--tilt": "3deg" } as CSSProperties}
          >
            <img src="/about-photo-2.jpg" alt="" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
