import LegalLayout from "../../components/LegalLayout";

/**
 * Terms of Service (`/terms`). Grounded in the actual pilot mechanics
 * and business model from system-design.md (CUNY-only eligibility, the
 * 15% commission, Stripe Connect escrow) rather than generic SaaS
 * boilerplate — same pending-legal-review caveat as Privacy.
 */
export default function Terms() {
  return (
    <LegalLayout eyebrow="LEGAL" title="Terms of Service" lastUpdated="July 2026">
      <div className="legal-note">
        <p>
          Archly is currently in its pre-launch pilot phase. These terms
          describe how the pilot works today and will be reviewed by counsel
          before the platform opens beyond the pilot.
        </p>
      </div>

      <h2>Who Can Use Archly</h2>
      <p>
        During the pilot, student accounts are limited to currently enrolled
        CUNY architecture students, verified with a CUNY email address. Firm
        accounts are limited to NYC-based architecture firms that pass our
        verification review before their account is activated.
      </p>

      <h2>How Projects and Payment Work</h2>
      <p>
        Firms post projects and pay to reach students; students apply and are
        never charged. When a firm hires a student for a project, Archly
        charges a 15% commission on the completed project, collected through
        Stripe Connect. Project payments are held in escrow and released to
        the student once the work is marked complete.
      </p>

      <h2>Acceptable Use</h2>
      <ul>
        <li>Don't misrepresent your identity, school enrollment, or firm</li>
        <li>Don't use the platform to solicit work outside of posted projects</li>
        <li>Don't attempt to bypass Archly's commission by moving payment off-platform</li>
        <li>Respect the intellectual property of both students and firms in shared project materials</li>
      </ul>

      <h2>Account Termination</h2>
      <p>
        We can suspend or terminate an account that violates these terms,
        including failed CUNY/firm verification, fraudulent activity, or
        attempts to circumvent commission payments. You can close your
        account at any time by contacting us.
      </p>

      <h2>Disclaimers</h2>
      <p>
        Archly connects students and firms but is not a party to the work
        agreed between them. We don't guarantee project outcomes, and we're
        not liable for disputes between a student and a firm beyond the
        escrow and verification processes described above.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms: legal@archly.co</p>
    </LegalLayout>
  );
}
