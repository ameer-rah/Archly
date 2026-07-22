import Reveal from "../../components/Reveal";

/**
 * Full-width video placeholder breaking up the page between the
 * editorial text and the values list. Another `.about-media-slot`
 * (see `Hero.tsx`) — reserved for a real product walkthrough or pilot
 * footage once one exists.
 */
export default function MediaBreak() {
  return (
    <section className="section about-media-break">
      <Reveal className="about-media-slot about-media-slot-wide">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" />
        </svg>
        <p>A look at Archly in action, coming soon</p>
      </Reveal>
    </section>
  );
}
