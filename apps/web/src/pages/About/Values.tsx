import Reveal from "../../components/Reveal";

const VALUES = [
  {
    n: "01",
    title: "Real work, not busywork",
    copy: "Projects on Archly are actual studio work, not coffee runs or CAD cleanup.",
  },
  {
    n: "02",
    title: "CUNY, exclusively",
    copy: "We partner only with CUNY schools, so every student is local to the city firms are hiring in.",
  },
  {
    n: "03",
    title: "Free for students, always",
    copy: "Students never pay to apply. Firms pay a commission only when they actually hire.",
  },
  {
    n: "04",
    title: "Pilot first",
    copy: "We're launching small, with verified students and firms, before opening more broadly.",
  },
];

/**
 * "What We Believe" as a divided vertical list rather than a card
 * grid — every other page on the site uses numbered cards for this
 * kind of content (ForFirms's process, Waitlist's next-steps), so
 * About uses full-width rows with a hover accent instead.
 */
export default function Values() {
  return (
    <section className="section about-values">
      <Reveal className="section-head">
        <p className="eyebrow">WHAT WE BELIEVE</p>
        <h2>The principles behind the product.</h2>
      </Reveal>

      <div className="about-values-list">
        {VALUES.map((value, i) => (
          <Reveal key={value.n} delay={i * 80} className="about-values-row">
            <span className="about-values-n">{value.n}</span>
            <h3>{value.title}</h3>
            <p>{value.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
