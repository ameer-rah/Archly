/**
 * Left brand panel (Figma frame `80:3`): fixed-width tan panel with
 * the pitch + a manual-review notice. `verified BOOLEAN DEFAULT
 * false` on `firms` in system-design.md §4 is literally annotated
 * "per FirmSignup.tsx" — this page's copy just states that rule
 * directly instead of hiding it until after signup.
 */
export default function BrandPanel() {
  return (
    <div className="fs-brand-panel">
      <div className="fs-brand-top">
        <p className="eyebrow">FOR NYC ARCHITECTURE FIRMS</p>
        <h1 className="fs-brand-title">
          Meet your next
          <br />
          <span className="accent-italic">student hire.</span>
        </h1>
        <p className="fs-brand-copy">
          Post real internships and contract work. Review portfolios from
          CUNY architecture students who already know your tools.
        </p>
      </div>

      <div className="fs-notice">
        <p className="fs-notice-title">Manual review before you go live</p>
        <p className="fs-notice-copy">
          Every firm account is verified before it can post — this keeps the
          platform trustworthy for students.
        </p>
      </div>
    </div>
  );
}
