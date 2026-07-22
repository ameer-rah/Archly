import Reveal from "../../components/Reveal";

/**
 * "Why Archly Exists" — an asymmetric editorial split (sticky number
 * label + prose) instead of a centered prose block, and no gradient
 * fade/blueprint texture around it. Deliberately plainer than the rest
 * of the site's section chrome, so About reads as written content
 * rather than another pitch section.
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
            <h2>Getting hired shouldn't be the hard part.</h2>
            <p>
              CUNY's architecture programs turn out students who already know
              Revit, Rhino, and AutoCAD, and who've spent years in studio
              culture, but the path from classroom to a firm's actual project
              work is still mostly word-of-mouth and cold emails.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="about-editorial-row">
          <div className="about-editorial-label">
            <span className="about-editorial-n">02</span>
            <p className="eyebrow">WHAT WE BUILT</p>
          </div>
          <div className="about-editorial-text">
            <h2>One place for CUNY students and NYC firms.</h2>
            <p>
              NYC firms need help on real projects and want talent that's
              local, trained, and ready to contribute, not another national
              internship board. Archly connects the two directly, students
              and firms, in one place.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
