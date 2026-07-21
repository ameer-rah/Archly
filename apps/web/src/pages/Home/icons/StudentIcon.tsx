/**
 * Hero "Join the Pilot Program" card icon.
 *
 * Hand-built inline SVG (56x56, 64x64 viewBox): a navy blueprint-grid
 * tile containing a sand-line-art student silhouette in a graduation
 * cap with a rocket launching past it. Built as a static asset instead
 * of an `<img>` so it stays crisp at any display size and can inherit
 * the site's color tokens directly in the markup. Colors are
 * hex-coded to the design tokens in `index.css` (`#16233a` = navy
 * `--foreground`, `#faf6ec` = `--background`) rather than referencing
 * the CSS variables, since inline `<svg>` fill/stroke attributes don't
 * resolve `var()` the same way element styles do.
 */
export default function StudentIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#16233a" />
      <g stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1">
        <line x1="16" y1="0" x2="16" y2="64" />
        <line x1="32" y1="0" x2="32" y2="64" />
        <line x1="48" y1="0" x2="48" y2="64" />
        <line x1="0" y1="16" x2="64" y2="16" />
        <line x1="0" y1="32" x2="64" y2="32" />
        <line x1="0" y1="48" x2="64" y2="48" />
      </g>
      <g stroke="#faf6ec" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="26" cy="30" r="7" />
        <path d="M16 46c0-6 4.5-10 10-10s10 4 10 10" />
        <path d="M26 20l12-5 12 5-12 5-12-5z" />
        <path d="M32 24.5v5c0 2-3 3.5-6 3.5s-6-1.5-6-3.5v-5" />
        <path d="M50 20v7" strokeDasharray="1.5 1.8" />
        <path d="M45 22c2.5-3 6-4.5 8.5-4.5-0.2 2.5-1.7 6-4.5 8.5" />
        <path d="M45 22c-1.6 0.4-3 1.4-3.8 2.7l3 3c1.3-0.8 2.3-2.2 2.7-3.8" />
        <path d="M42 27.5l-2 3.2 3.2-2" />
        <circle cx="49" cy="21" r="1.1" fill="#faf6ec" stroke="none" />
        <path d="M40 34l3-3" strokeOpacity="0.6" />
        <path d="M43 37l4-4" strokeOpacity="0.6" />
      </g>
    </svg>
  );
}
