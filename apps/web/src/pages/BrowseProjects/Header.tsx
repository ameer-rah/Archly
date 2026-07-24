/**
 * Browse Projects header (Figma frame `72:3`): eyebrow + title + search
 * input, directly under the fixed nav — no hero treatment, this is an
 * app/utility page, not a marketing page. "0 OPEN POSITIONS" is
 * literal, not a placeholder: there's no backend yet, so it's
 * genuinely zero, matching the honest empty state below it.
 */
export default function Header() {
  return (
    <div className="bp-header">
      <p className="eyebrow">0 OPEN POSITIONS</p>
      <h1 className="bp-title">Browse Projects</h1>
      <input
        type="text"
        className="ff-field-box bp-search"
        placeholder="Search by project or firm name..."
      />
    </div>
  );
}
