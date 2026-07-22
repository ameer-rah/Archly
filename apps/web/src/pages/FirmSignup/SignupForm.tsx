import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

const BOROUGHS = ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"];

const SPECIALTIES = [
  "Architecture",
  "Interior Design",
  "Landscape Architecture",
  "Urban Planning / Design",
  "Construction Management",
];

/**
 * Signup form (Figma frame `80:11`), trimmed to match how auth will
 * actually work: system-design.md's real auth plan is OAuth via WorkOS
 * (Google + LinkedIn) — there's no separate email/password path for
 * firms at all. So Contact Name, Work Email, and Password are gone —
 * WorkOS supplies the authenticated name + email directly once a firm
 * signs in with Google, there's nothing for those fields to do (only
 * Google is offered here for now, not LinkedIn — see `fs-google-btn`).
 * What's left (Firm/Practice Name, NYC Business Address, Borough,
 * Specialty) is the real business-profile data from the `firms` table
 * (system-design.md §4) that Google has no way to know, so it stays as
 * a "complete your profile" step shown after the Google continue button
 * rather than alongside a fake credential form.
 *
 * No backend exists yet, so submission is a local mock — validates
 * and flips to a "submitted for review" success state, matching the
 * real manual-review business rule instead of a fake instant approval.
 */
export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="fs-form-panel">
        <div className="fs-form-inner">
          <p className="eyebrow">SUBMITTED FOR REVIEW</p>
          <h2>Thanks for signing up.</h2>
          <p className="fs-success-copy">
            We manually verify every firm before it can go live. We'll email
            you once your account is approved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fs-form-panel">
      <form className="fs-form-inner" onSubmit={handleSubmit}>
        <h2>Create your firm account</h2>
        <p className="fs-form-subhead">
          Sign in with your firm's Google account, then tell us about your
          practice. We review every firm before it can post.
        </p>

        <button type="button" className="fs-google-btn">
          Continue with Google
        </button>
        <p className="fs-divider">then complete your profile</p>

        <div className="ff-field">
          <p className="ff-field-label">FIRM / PRACTICE NAME</p>
          <input type="text" required className="ff-field-box" placeholder="e.g. Your Studio Name" />
        </div>

        <div className="ff-field">
          <p className="ff-field-label">NYC BUSINESS ADDRESS</p>
          <input type="text" required className="ff-field-box" placeholder="Street, borough, ZIP" />
        </div>

        <div className="ff-field-row">
          <div className="ff-field">
            <p className="ff-field-label">PRIMARY BOROUGH</p>
            <select className="ff-field-box" defaultValue="">
              <option value="" disabled>Select your borough</option>
              {BOROUGHS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div className="ff-field">
            <p className="ff-field-label">SPECIALTY</p>
            <select className="ff-field-box" defaultValue="">
              <option value="" disabled>Select</option>
              {SPECIALTIES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary fs-submit">
          Submit for Review →
        </button>

        <p className="fs-legal">
          By submitting, you agree to Archly's{" "}
          <Link to="/terms">Terms of Service</Link> and confirm this account
          represents a real NYC architecture practice.
        </p>

        <p className="fs-login-prompt">
          Already have an account? <Link to="/firm-login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
