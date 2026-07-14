import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id) ?? projects[0]
  const [applied, setApplied] = useState(false)
  const [saved, setSaved] = useState(false)

  const related = projects.filter((p) => p.id !== project.id && p.location === project.location).slice(0, 2)

  return (
    <main style={{ fontFamily: 'var(--font-body)', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '14px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted-foreground)' }}>
          <Link to="/projects" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>Browse Projects</Link>
          <span>/</span>
          <span style={{ color: 'var(--foreground)' }}>{project.title}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px 80px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, alignItems: 'start' }} className="detail-layout">

        {/* Main content */}
        <div>
          {/* Hero image */}
          <div style={{ width: '100%', aspectRatio: '16/7', overflow: 'hidden', backgroundColor: 'var(--muted)', marginBottom: 32 }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: project.type === 'Internship' ? 'var(--accent)' : '#2563eb',
                border: `1px solid ${project.type === 'Internship' ? 'var(--accent)' : '#2563eb'}`,
                padding: '3px 8px',
              }}
            >
              {project.type}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--muted-foreground)', border: '1px solid var(--border)', padding: '3px 8px' }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, margin: '0 0 8px', lineHeight: 1.1 }}>
            {project.title}
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted-foreground)', margin: '0 0 40px' }}>
            {project.firm} · {project.location} · Posted {project.posted}
          </p>

          {/* Description */}
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, margin: '0 0 16px', borderBottom: '1px solid var(--border)', paddingBottom: 12 }}>
              About the Project
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted-foreground)', margin: 0 }}>
              {project.description}
            </p>
          </section>

          {/* Responsibilities */}
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, margin: '0 0 16px', borderBottom: '1px solid var(--border)', paddingBottom: 12 }}>
              What You'll Do
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {project.responsibilities.map((r) => (
                <li key={r} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: 6, height: 6, backgroundColor: 'var(--accent)', flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--foreground)' }}>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Requirements */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, margin: '0 0 16px', borderBottom: '1px solid var(--border)', paddingBottom: 12 }}>
              Requirements
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {project.requirements.map((r) => (
                <li key={r} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: 6, height: 6, border: '1px solid var(--foreground)', flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--foreground)' }}>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Software */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, margin: '0 0 16px', borderBottom: '1px solid var(--border)', paddingBottom: 12 }}>
              Software Required
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.software.map((s) => (
                <span key={s} style={{ padding: '8px 16px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', fontSize: 13, fontWeight: 500 }}>
                  {s}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside>
          {/* Application card */}
          <div
            style={{
              border: '1px solid var(--border)',
              backgroundColor: 'var(--background)',
              padding: 28,
              marginBottom: 1,
              position: 'sticky',
              top: 80,
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
              {[
                { label: 'Pay', value: project.pay },
                { label: 'Duration', value: project.duration },
                { label: 'Location', value: project.location },
                { label: 'Deadline', value: project.deadline },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 4 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 12 }}>
                {project.applicants} students have applied
              </div>
              <div style={{ backgroundColor: 'var(--muted)', height: 4, borderRadius: 0, overflow: 'hidden' }}>
                <div style={{ backgroundColor: 'var(--accent)', height: '100%', width: `${Math.min((project.applicants / 40) * 100, 100)}%`, transition: 'width 0.4s' }} />
              </div>
            </div>

            {applied ? (
              <div
                style={{
                  padding: '14px',
                  backgroundColor: '#f0faf0',
                  border: '1px solid #86efac',
                  textAlign: 'center',
                  marginBottom: 12,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, color: '#15803d', marginBottom: 4 }}>✓ Application Submitted</div>
                <div style={{ fontSize: 12, color: '#166534' }}>The firm will be in touch within 48 hours.</div>
              </div>
            ) : (
              <button
                onClick={() => setApplied(true)}
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  fontFamily: 'var(--font-body)',
                  marginBottom: 12,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--foreground)')}
              >
                Apply Now
              </button>
            )}

            <button
              onClick={() => setSaved(!saved)}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: saved ? 'var(--card)' : 'transparent',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                transition: 'all 0.15s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              {saved ? '★ Saved' : '☆ Save Project'}
            </button>
          </div>

          {/* Firm info */}
          <div style={{ border: '1px solid var(--border)', borderTop: 'none', backgroundColor: 'var(--card)', padding: 24 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 14 }}>
              About the Firm
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, backgroundColor: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: 'var(--background)', fontSize: 10, fontWeight: 700 }}>{project.firm.slice(0, 2).toUpperCase()}</span>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{project.firm}</div>
                <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{project.location}</div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--muted-foreground)', margin: 0 }}>
              A design-forward architecture practice with over 15 years of experience in civic and residential projects across the region.
            </p>
          </div>
        </aside>
      </div>

      {/* Related projects */}
      {related.length > 0 && (
        <div style={{ backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)', padding: '48px 24px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400, margin: '0 0 28px' }}>
              More in {project.location}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, backgroundColor: 'var(--border)' }}>
              {related.map((p) => (
                <Link key={p.id} to={`/projects/${p.id}`} style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'var(--background)', padding: 24, display: 'block' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.type === 'Internship' ? 'var(--accent)' : '#2563eb', marginBottom: 10 }}>
                    {p.type}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400, margin: '0 0 6px' }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted-foreground)', margin: '0 0 16px' }}>{p.firm} · {p.pay}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .detail-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
