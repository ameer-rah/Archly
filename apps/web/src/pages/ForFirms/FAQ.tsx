import { useState } from "react";
import Reveal from "../../components/Reveal";

const QUESTIONS = [
  {
    q: "What does it cost to post a project?",
    a: "Starter is $20/month (or $200/year) and lets you post projects one at a time. Unlimited is $30/month (or $320/year) for firms posting 10+ projects a year. Both plans include a 15% commission on the project's total value, billed to your firm only when the project is completed. Students always receive 100% of their pay.",
  },
  {
    q: "How are students vetted?",
    a: "Every student verifies their CUNY email before they can apply to projects, and profiles are tied to a specific school and discipline: architecture, interior design, urban design, landscape architecture, construction management, or architectural engineering. You'll see their portfolio and resume on every application before you ever have to respond.",
  },
  {
    q: "Can we post contract work instead of formal internships?",
    a: "Yes. A project brief is just a title, discipline, description, budget, and timeline. You're not locked into an internship format. Short contract engagements, single-deliverable work, and ongoing part-time arrangements are all fine.",
  },
  {
    q: "How quickly will we receive applications?",
    a: "Projects appear to matching students the moment they're published, filtered by discipline and location. We're in early pilot, so exact response times will vary as the CUNY student base on the platform grows.",
  },
  {
    q: "Do you handle contracts and payments?",
    a: "Yes. When you hire, you confirm the engagement and sign a simple agreement through the platform. Payment is collected upfront and held in escrow via Stripe until the project is marked complete. The student is paid out automatically once you confirm delivery.",
  },
  {
    q: "What if the student isn't the right fit?",
    a: "Funds stay in escrow until you confirm the project as delivered, so nothing is paid out before that point. If it's not working out beforehand, you can end the engagement and any held payment is refunded rather than released.",
  },
];

/**
 * FAQ accordion (Figma frame `76:55`). Answers are grounded in the
 * actual product decisions elsewhere in the repo (CUNY email
 * verification + discipline taxonomy from `packages/db`'s schema,
 * the Stripe escrow/refund flow from `system-design.md` §7) rather
 * than invented policy.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section ff-faq">
      <Reveal className="ff-faq-inner">
        <p className="eyebrow">FAQ</p>
        <h2>Common questions</h2>

        <div className="ff-faq-list">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="ff-faq-item">
                <button
                  type="button"
                  className="ff-faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className={`ff-faq-toggle ${isOpen ? "ff-faq-toggle-open" : ""}`}>+</span>
                </button>
                <div className={`ff-faq-answer-wrap ${isOpen ? "ff-faq-answer-wrap-open" : ""}`}>
                  <div className="ff-faq-answer-inner">
                    <p className="ff-faq-answer">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
