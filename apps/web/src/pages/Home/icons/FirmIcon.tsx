/**
 * Hero "Are You a Firm?" card icon.
 *
 * Hand-built inline SVG (56x56, 64x64 viewBox): a blueprint-style NYC
 * skyline sketch — five buildings of varying height plus horizontal
 * and vertical dimension-line arrows, echoing architectural drafting
 * conventions. Unlike `StudentIcon`, this one has no background tile;
 * it sits directly on the card's own sand background. Stroke color
 * (`#2c5490`) matches the `--accent` design token.
 */

export default function FirmIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#2c5490" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="6" y="38" width="8" height="16" />
        <rect x="16" y="32" width="8" height="22" />
        <rect x="26" y="16" width="10" height="38" />
        <line x1="31" y1="16" x2="31" y2="10" />
        <rect x="38" y="28" width="8" height="26" />
        <rect x="48" y="36" width="9" height="18" />
        <path d="M6 59h51" />
        <path d="M6 59l2.2-1.6M6 59l2.2 1.6" />
        <path d="M57 59l-2.2-1.6M57 59l-2.2 1.6" />
        <path d="M2 54V18" strokeOpacity="0.55" />
        <path d="M2 18l-1.6 2.2M2 18l1.6 2.2" strokeOpacity="0.55" />
        <path d="M2 54l-1.6-2.2M2 54l1.6-2.2" strokeOpacity="0.55" />
        <path d="M22 20h6" strokeOpacity="0.5" />
        <path d="M22 26h6" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}
