import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const allTypes = ['All', 'Internship', 'Contract']
const allLocations = ['All Cities', 'Toronto, ON', 'Vancouver, BC', 'Ottawa, ON', 'Montreal, QC', 'Calgary, AB']
const allSoftware = ['Revit', 'AutoCAD', 'Rhino', 'Grasshopper', 'SketchUp', 'Lumion', 'Enscape', 'ArcGIS', 'Adobe CC']

export function Projects() {
  const [typeFilter, setTypeFilter] = useState('All')
  const [locationFilter, setLocationFilter] = useState('All Cities')
  const [softwareFilter, setSoftwareFilter] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filtered = projects.filter((p) => {
    if (typeFilter !== 'All' && p.type !== typeFilter) return false
    if (locationFilter !== 'All Cities' && p.location !== locationFilter) return false
    if (softwareFilter.length > 0 && !softwareFilter.some((s) => p.software.includes(s))) return false
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.firm.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const toggleSoftware = (s: string) => {
    setSoftwareFilter((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }

  const FilterPanel = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Type */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 12 }}>
          Project Type
        </div>
        {allTypes.map((t) => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '8px 12px',
              marginBottom: 2,
              backgroundColor: typeFilter === t ? 'var(--foreground)' : 'transparent',
              color: typeFilter === t ? 'var(--background)' : 'var(--foreground)',
              border: 'none',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 500,
              fontFamily: 'var(--font-body)',
              transition: 'all 0.1s',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Location */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 12 }}>
          City
        </div>
        {allLocations.map((l) => (
          <button
            key={l}
            onClick={() => setLocationFilter(l)}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '8px 12px',
              marginBottom: 2,
              backgroundColor: locationFilter === l ? 'var(--foreground)' : 'transparent',
              color: locationFilter === l ? 'var(--background)' : 'var(--foreground)',
              border: 'none',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 500,
              fontFamily: 'var(--font-body)',
              transition: 'all 0.1s',
            }}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Software */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 12 }}>
          Software
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {allSoftware.map((s) => (
            <button
              key={s}
              onClick={() => toggleSoftware(s)}
              style={{
                padding: '5px 10px',
                fontSize: 12,
                fontWeight: 500,
                border: `1px solid ${softwareFilter.includes(s) ? 'var(--foreground)' : 'var(--border)'}`,
                backgroundColor: softwareFilter.includes(s) ? 'var(--foreground)' : 'transparent',
                color: softwareFilter.includes(s) ? 'var(--background)' : 'var(--foreground)',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.1s',
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {(typeFilter !== 'All' || locationFilter !== 'All Cities' || softwareFilter.length > 0) && (
        <button
          onClick={() => { setTypeFilter('All'); setLocationFilter('All Cities'); setSoftwareFilter([]) }}
          style={{
            padding: '8px 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 12,
            color: 'var(--accent)',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            textAlign: 'left',
            letterSpacing: '0.06em',
          }}
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <main style={{ fontFamily: 'var(--font-body)', minHeight: '100vh' }}>
      {/* Page header */}
      <div
        style={{
          borderBottom: '1px solid var(--border)',
          padding: 'clamp(32px, 5vw, 64px) 24px 32px',
          backgroundColor: 'var(--background)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
            {filtered.length} open positions
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 400,
              margin: '0 0 24px',
              lineHeight: 1.1,
            }}
          >
            Browse Projects
          </h1>

          {/* Search bar */}
          <div style={{ position: 'relative', maxWidth: 480 }}>
            <input
              type="text"
              placeholder="Search by project or firm name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 44px',
                border: '1px solid var(--border)',
                borderRadius: 0,
                fontSize: 14,
                fontFamily: 'var(--font-body)',
                backgroundColor: 'var(--card)',
                color: 'var(--foreground)',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--foreground)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
            />
            <svg
              style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }}
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>

          {/* Mobile filter toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            style={{
              marginTop: 16,
              padding: '10px 16px',
              border: '1px solid var(--border)',
              background: 'none',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="21" y1="6" x2="3" y2="6"/><line x1="15" y1="12" x2="3" y2="12"/><line x1="9" y1="18" x2="3" y2="18"/>
            </svg>
            Filters {softwareFilter.length + (typeFilter !== 'All' ? 1 : 0) + (locationFilter !== 'All Cities' ? 1 : 0) > 0 && `(${softwareFilter.length + (typeFilter !== 'All' ? 1 : 0) + (locationFilter !== 'All Cities' ? 1 : 0)})`}
          </button>
        </div>
      </div>

      {/* Mobile filters */}
      {mobileFiltersOpen && (
        <div
          className="md:hidden"
          style={{
            padding: '24px',
            borderBottom: '1px solid var(--border)',
            backgroundColor: 'var(--card)',
          }}
        >
          <FilterPanel />
        </div>
      )}

      {/* Main layout */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: 48,
          alignItems: 'start',
          paddingTop: 40,
          paddingBottom: 80,
        }}
        className="projects-layout"
      >
        {/* Sidebar filters — desktop */}
        <aside className="hidden md:block" style={{ position: 'sticky', top: 100 }}>
          <FilterPanel />
        </aside>

        {/* Project grid */}
        <div>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted-foreground)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 24, marginBottom: 12 }}>No projects found</p>
              <p style={{ fontSize: 14 }}>Try adjusting your filters</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, backgroundColor: 'var(--border)' }}>
              {filtered.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'var(--background)' }}
                >
                  <div
                    style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 0, cursor: 'pointer', transition: 'background 0.15s' }}
                    className="project-row"
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--card)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--background)')}
                  >
                    <div style={{ height: 160, overflow: 'hidden', backgroundColor: 'var(--muted)', flexShrink: 0 }}>
                      <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              color: p.type === 'Internship' ? 'var(--accent)' : '#2563eb',
                              border: `1px solid ${p.type === 'Internship' ? 'var(--accent)' : '#2563eb'}`,
                              padding: '2px 7px',
                            }}
                          >
                            {p.type}
                          </span>
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: 10,
                                fontWeight: 600,
                                letterSpacing: '0.10em',
                                textTransform: 'uppercase',
                                color: 'var(--muted-foreground)',
                                border: '1px solid var(--border)',
                                padding: '2px 7px',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400, margin: '0 0 4px', lineHeight: 1.2 }}>
                          {p.title}
                        </h2>
                        <p style={{ fontSize: 13, color: 'var(--muted-foreground)', margin: '0 0 12px' }}>
                          {p.firm} · {p.location}
                        </p>
                        <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--muted-foreground)', margin: 0 }}>
                          {p.description.slice(0, 120)}...
                        </p>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, flexWrap: 'wrap', gap: 8 }}>
                        <div style={{ display: 'flex', gap: 20 }}>
                          <div>
                            <div style={{ fontSize: 10, color: 'var(--muted-foreground)', marginBottom: 2, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Pay</div>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>{p.pay}</div>
                          </div>
                          <div>
                            <div style={{ fontSize: 10, color: 'var(--muted-foreground)', marginBottom: 2, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Duration</div>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>{p.duration}</div>
                          </div>
                          <div>
                            <div style={{ fontSize: 10, color: 'var(--muted-foreground)', marginBottom: 2, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Deadline</div>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>{p.deadline}</div>
                          </div>
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>
                          {p.applicants} applicants
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-layout {
            grid-template-columns: 1fr !important;
          }
          .project-row {
            grid-template-columns: 1fr !important;
          }
          .project-row > div:first-child {
            height: 180px !important;
          }
        }
      `}</style>
    </main>
  )
}
