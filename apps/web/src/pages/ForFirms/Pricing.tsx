import Reveal from "../../components/Reveal";
import TiltCard from "../../components/TiltCard";

const PLANS = [
  {
    name: "STARTER",
    price: "$20",
    period: "/ month",
    note: "Post projects one at a time. Or $200/year.",
    features: [
      "Post projects individually",
      "15% commission per completed project",
      "Applicant tracking dashboard",
      "Escrow-protected payments",
      "Direct messaging with students",
    ],
    variant: "outline" as const,
  },
  {
    name: "UNLIMITED",
    price: "$30",
    period: "/ month",
    note: "For firms hiring 10+ students a year. Or $320/year.",
    features: [
      "Unlimited project postings",
      "15% commission per completed project",
      "Priority placement in search",
      "Dedicated account support",
      "Everything in Starter",
    ],
    variant: "primary" as const,
  },
];

/**
 * Pricing section (Figma frame `76:2`). Navy blueprint background,
 * matching the Figma's dark pricing treatment — the one section on
 * this page that keeps its dark styling for emphasis, same idea as
 * Home's Final CTA.
 */
export default function Pricing() {
  return (
    <section className="ff-pricing blueprint-grid">
      <Reveal className="section-head center">
        <p className="eyebrow eyebrow-light">SIMPLE PRICING</p>
        <h2 className="ff-pricing-heading">
          Pay to post.
          <br />
          <span className="accent-italic">15% only when you hire.</span>
        </h2>
      </Reveal>

      <div className="ff-plans">
        {PLANS.map((plan, i) => (
          <TiltCard key={plan.name} className="ff-plan-card">
            <Reveal delay={i * 100}>
              <p className="eyebrow eyebrow-light">{plan.name}</p>
              <div className="ff-plan-price">
                <span>{plan.price}</span>
                <span className="ff-plan-period">{plan.period}</span>
              </div>
              <p className="ff-plan-note">{plan.note}</p>
              <ul className="ff-plan-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`btn ${plan.variant === "primary" ? "btn-sand" : "btn-outline-light"} ff-plan-cta`}
              >
                Sign Up Now
              </button>
            </Reveal>
          </TiltCard>
        ))}
      </div>

      <p className="ff-pricing-footnote">
        Want to see the full product first? Preview the full firm signup flow →
      </p>
    </section>
  );
}
