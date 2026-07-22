import { useState } from "react";

const DISCIPLINES = [
  "All Disciplines",
  "Architecture",
  "Architectural Technology",
  "Interior Design",
  "Urban Design / Planning",
  "Landscape Architecture",
  "Construction Management",
  "Architectural Engineering",
];

/**
 * Filter sidebar (Figma frame `72:9`), trimmed to only what the real
 * search endpoint supports (`GET /job-postings` query params: `lat`,
 * `lng`, `radiusMiles`, `discipline`, `budgetMin`, `budgetMax`,
 * `timeline`, `keyword` — system-design.md §5). The Figma mockup also
 * had Project Type, Skills & Software, and Work Preference filters,
 * but `job_postings` has no matching columns for any of them
 * (system-design.md §4) — they were never actually built into the
 * data model, so keeping them would promise filtering that can't work
 * even once the backend exists. Left out rather than left broken.
 *
 * Location/Discipline/Budget/Timeline hold local state even though
 * there's no backend to filter against yet — "Apply Filters" has
 * nothing to do until real project data exists, but the controls
 * themselves aren't inert.
 *
 * The location map is a static placeholder, not a real Leaflet map:
 * system-design.md calls Leaflet "already built", but no map library
 * or component exists anywhere in this codebase yet, and there's no
 * real geo data to plot until firms start posting projects. Swap this
 * for `react-leaflet` once both of those are true.
 */
export default function Sidebar() {
  const [budget, setBudget] = useState(5000);

  return (
    <aside className="bp-sidebar">
      <div className="bp-filter-group">
        <p className="bp-filter-label">LOCATION</p>
        <select className="ff-field-box bp-select" defaultValue="New York, NY">
          <option>New York, NY</option>
        </select>
        <select className="ff-field-box bp-select" defaultValue="25">
          <option value="10">Within 10 miles</option>
          <option value="25">Within 25 miles</option>
          <option value="50">Within 50 miles</option>
        </select>
        <div className="bp-map-placeholder">
          <div className="bp-map-radius">
            <span className="bp-map-dot" />
          </div>
        </div>
      </div>

      <div className="bp-filter-group">
        <p className="bp-filter-label">DISCIPLINE</p>
        <select className="ff-field-box bp-select" defaultValue={DISCIPLINES[0]}>
          {DISCIPLINES.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="bp-filter-group">
        <div className="bp-filter-label-row">
          <p className="bp-filter-label">BUDGET</p>
          <p className="bp-filter-value">${budget.toLocaleString()}{budget === 5000 ? "+" : ""}</p>
        </div>
        <input
          type="range"
          min={250}
          max={5000}
          step={250}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="bp-slider"
        />
        <div className="bp-slider-labels">
          <span>$250</span>
          <span>$5,000+</span>
        </div>
      </div>

      <div className="bp-filter-group">
        <p className="bp-filter-label">TIMELINE</p>
        <select className="ff-field-box bp-select" defaultValue="Anytime">
          <option>Anytime</option>
          <option>Within 1 month</option>
          <option>Within 3 months</option>
          <option>Within 6 months</option>
        </select>
      </div>

      <div className="bp-filter-buttons">
        <button type="button" className="btn btn-primary bp-apply">
          Apply Filters
        </button>
        <button type="button" className="btn btn-outline bp-save">
          Save Search
        </button>
      </div>
    </aside>
  );
}
