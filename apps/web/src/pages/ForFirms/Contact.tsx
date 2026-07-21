import Reveal from "../../components/Reveal";

function Field({
  label,
  placeholder,
  textarea = false,
}: {
  label: string;
  placeholder: string;
  textarea?: boolean;
}) {
  return (
    <div className="ff-field">
      <p className="ff-field-label">{label}</p>
      {textarea ? (
        <textarea className="ff-field-box ff-field-textarea" placeholder={placeholder} readOnly />
      ) : (
        <input className="ff-field-box" placeholder={placeholder} readOnly />
      )}
    </div>
  );
}

/**
 * Contact / lead-capture form (Figma frame `76:85`). Inert — no
 * submission handler yet, since there's no backend to send it to
 * (matches the rest of the site's "visual build first" convention).
 */
export default function Contact() {
  return (
    <section className="section ff-contact">
      <Reveal className="ff-contact-inner">
        <p className="eyebrow">GET STARTED</p>
        <h2>Tell us about your firm</h2>
        <p className="ff-contact-copy">
          We'll reach out to set up your account and walk you through posting
          your first project, usually within one business day.
        </p>

        <div className="ff-field-row">
          <Field label="FIRM NAME" placeholder="Your Practice Name" />
          <Field label="CONTACT NAME" placeholder="Principal or HR" />
        </div>
        <div className="ff-field-row">
          <Field label="EMAIL" placeholder="you@yourfirm.com" />
          <Field label="BOROUGH" placeholder="Select borough" />
        </div>
        <Field label="TYPE OF WORK" placeholder="What kind of work do you need?" />
        <Field
          label="TELL US ABOUT THE PROJECT (OPTIONAL)"
          placeholder="Briefly describe the type of work, timeline, and what you're looking for in a student..."
          textarea
        />

        <button type="button" className="btn btn-primary ff-contact-submit">
          Submit · We'll Be in Touch
        </button>
      </Reveal>
    </section>
  );
}
