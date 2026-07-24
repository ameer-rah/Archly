import LegalLayout from "../../components/LegalLayout";

/**
 * Privacy Policy (`/privacy`). Describes what Archly actually collects
 * and which vendors process it, grounded in system-design.md's real
 * stack (WorkOS auth, Stripe, PostHog, Cloudflare, Sentry, R2) rather
 * than generic boilerplate — but it's pilot-stage content pending a
 * real legal review before launch, flagged in the note below rather
 * than presented as attorney-vetted.
 */
export default function Privacy() {
  return (
    <LegalLayout eyebrow="LEGAL" title="Privacy Policy" lastUpdated="July 2026">
      <div className="legal-note">
        <p>
          Archly is currently in its pre-launch pilot phase. This policy
          describes our data practices as they exist today and will be
          reviewed by counsel before the platform opens beyond the pilot.
        </p>
      </div>

      <h2>What We Collect</h2>
      <p>
        If you join the waitlist, we collect your full name, email address,
        school, and borough. Once the platform launches, creating an account
        adds the information from your login provider (name, email, profile
        photo) and anything you add to your profile — portfolio links,
        project history, and for firms, company and billing details.
      </p>

      <h2>How We Use It</h2>
      <ul>
        <li>To notify you when the pilot opens in your borough</li>
        <li>To verify you're a current CUNY architecture student before granting account access</li>
        <li>To match students with relevant project postings</li>
        <li>To process payments and payouts for completed projects</li>
        <li>To send account and transaction emails (never marketing without opt-in)</li>
      </ul>

      <h2>Who We Share It With</h2>
      <p>We don't sell your data. We share it only where necessary to run the platform:</p>
      <ul>
        <li><strong>CUNY school administrators</strong> — aggregate placement and usage stats about students at their school, not individual application or message content</li>
        <li><strong>Firms</strong> — your profile and application materials, only for projects you actually apply to</li>
        <li><strong>Service providers</strong> processing data on our behalf:
          <ul>
            <li><strong>WorkOS</strong> — authentication (Google/LinkedIn login, session management)</li>
            <li><strong>Stripe</strong> — subscription billing and Stripe Connect payouts for completed projects</li>
            <li><strong>Cloudflare</strong> — hosting, file storage (R2), bot protection (Turnstile), and no-cookie pageview analytics</li>
            <li><strong>PostHog</strong> — product analytics, to understand how the platform is used</li>
            <li><strong>Sentry</strong> — error tracking, to catch and fix bugs</li>
          </ul>
        </li>
        <li>Law enforcement or regulators, if we're legally required to</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We use industry-standard measures to protect your data — encrypted
        connections, credential storage handled entirely by WorkOS (Archly
        itself never stores a password), and access to production data
        restricted to what's needed to operate the platform. No system is
        perfectly secure, but we take reasonable steps to protect what you
        share with us.
      </p>

      <h2>Data Retention</h2>
      <p>
        Waitlist signups are kept until the pilot launches in your area or you
        ask us to delete them, whichever comes first. Account data is kept for
        as long as your account is active, plus what we're required to retain
        for financial records after a payment.
      </p>

      <h2>Age Restrictions</h2>
      <p>
        Archly is intended for currently enrolled college students and is not
        directed at children. You must be at least 18 years old to create an
        account.
      </p>

      <h2>Your Rights</h2>
      <p>
        You can ask us to access, correct, or delete your data at any time by
        emailing us at the address below. If you're on the waitlist and want
        off, just reply to your confirmation email.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        If we make material changes to this policy, we'll update the date at
        the top of this page and, where appropriate, notify you directly.
      </p>

      <h2>Contact</h2>
      <p>Questions about this policy: privacy@archly.co</p>
    </LegalLayout>
  );
}
