import { useState, type FormEvent } from "react";
import Reveal from "../../components/Reveal";

const BOROUGHS = ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"];

/**
 * Right half of the split-screen waitlist layout: the actual form,
 * open on the panel rather than boxed in a card — the panel itself is
 * already the "card" against `InfoPanel`'s navy half. Same
 * `waitlist_signups` fields as before (system-design.md §4); pilot is
 * student-only so there's no signup-type toggle.
 *
 * Still a local-only mock submit — no backend exists yet. See
 * system-design.md for the real Formspree/`POST /waitlist` migration
 * path this will eventually use instead of `handleSubmit` below.
 */
export default function FormPanel() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="wl-form-panel">
      <Reveal delay={100} className="wl-form-inner">
        {submitted ? (
          <div className="wl-success">
            <p className="eyebrow">YOU'RE ON THE LIST</p>
            <h2>Thanks for signing up.</h2>
            <p className="wl-success-copy">
              We'll email you as soon as the pilot opens for students in your
              borough.
            </p>
          </div>
        ) : (
          <>
            <p className="eyebrow">JOIN THE PILOT</p>
            <h2>Get early access.</h2>

            <form onSubmit={handleSubmit}>
              <div className="ff-field-row">
                <div className="ff-field">
                  <p className="ff-field-label">FULL NAME</p>
                  <input type="text" required className="ff-field-box" placeholder="Jane Rivera" />
                </div>
                <div className="ff-field">
                  <p className="ff-field-label">EMAIL</p>
                  <input
                    type="email"
                    required
                    className="ff-field-box"
                    placeholder="you@cuny.edu"
                  />
                </div>
              </div>

              <div className="ff-field">
                <p className="ff-field-label">SCHOOL</p>
                <input
                  type="text"
                  className="ff-field-box"
                  placeholder="City College of New York"
                />
              </div>

              <div className="ff-field">
                <p className="ff-field-label">BOROUGH</p>
                <select className="ff-field-box" defaultValue="">
                  <option value="" disabled>
                    Select a borough
                  </option>
                  {BOROUGHS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn btn-primary wl-form-submit">
                Join the Waitlist
              </button>
            </form>
          </>
        )}
      </Reveal>
    </div>
  );
}
