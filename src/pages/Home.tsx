import { Link } from 'react-router-dom'

const stats = [
  { value: '240+', label: 'Open Projects' },
  { value: '180+', label: 'Architecture Firms' },
  { value: '3,400', label: 'Students Placed' },
  { value: '94%', label: 'Offer Rate' },
]

const howItWorks = [
  {
    step: '01',
    title: 'Build your profile',
    desc: 'Upload your portfolio, set your skills, and tell firms what kind of work excites you.',
  },
  {
    step: '02',
    title: 'Browse real projects',
    desc: 'Filter live briefs from local firms by role, timeline, software, and compensation.',
  },
  {
    step: '03',
    title: 'Apply in one click',
    desc: 'Your profile does the heavy lifting. Firms see your work before they see your resume.',
  },
  {
    step: '04',
    title: 'Start contributing',
    desc: 'Get placed on real projects with real deadlines — and build a portfolio that proves it.',
  },
]

const testimonials = [
  {
    quote:
      "I got placed on a community center project in my second year. By graduation I had three built projects in my portfolio.",
    name: 'Amara Chen',
    school: 'University of Toronto, M.Arch II',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=80&h=80&fit=crop&auto=format',
  },
  {
    quote:
      "Studio Line saved us weeks of recruiting. We posted a brief on Monday and had shortlisted candidates by Thursday.",
    name: 'James Thorpe',
    school: 'Principal, Thorpe Atelier',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format',
  },
  {
    quote:
      "The quality of students on the platform is genuinely impressive. They come in knowing our projects and ready to contribute.",
    name: 'Sofia Reyes',
    school: 'Studio Director, Reyes + Park',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
  },
]

const featuredProjects = [
  {
    id: '1',
    title: 'Community Center Redesign',
    firm: 'Thornton Architects',
    type: 'Internship',
    duration: '3 months',
    pay: '$2,800/mo',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: '2',
    title: 'Mixed-Use Development Package',
    firm: 'Park & Associates',
    type: 'Contract',
    duration: '6 weeks',
    pay: '$4,200',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=380&fit=crop&auto=format',
  },
  {
    id: '3',
    title: 'Adaptive Reuse — Warehouse District',
    firm: 'Reyes Studio',
    type: 'Internship',
    duration: '4 months',
    pay: '$2,500/mo',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=380&fit=crop&auto=format',
  },
]

export function Home() {
  return (
    <main style={{ fontFamily: 'var(--font-body)' }}>
      {/* Hero */}
      <section
        style={{
          minHeight: 'calc(100vh - 60px)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=1000&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.35)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            maxWidth: 1280,
            margin: '0 auto',
            padding: '80px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            minHeight: 'calc(100vh - 60px)',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 24,
              }}
            >
              Architecture Talent Platform
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 8vw, 96px)',
                fontWeight: 400,
                lineHeight: 1.0,
                color: '#ffffff',
                margin: 0,
                marginBottom: 32,
              }}
            >
              Real projects.
              <br />
              Real experience.
              <br />
              <em style={{ color: 'var(--accent)' }}>Real impact.</em>
            </h1>
            <p
              style={{
                fontSize: 'clamp(15px, 2vw, 18px)',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.72)',
                marginBottom: 40,
                maxWidth: 520,
              }}
            >
              Studio Line connects architecture students with local firms offering real internships and contract
              work — not coffee runs and CAD cleanup, but meaningful contributions to built projects.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link
                to="/join"
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'var(--accent)',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#a82e22')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)')}
              >
                Join as a Student
              </Link>
              <Link
                to="/projects"
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.4)',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = 'rgba(255,255,255,0.1)'
                  el.style.borderColor = 'rgba(255,255,255,0.7)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = 'transparent'
                  el.style.borderColor = 'rgba(255,255,255,0.4)'
                }}
              >
                Browse Open Projects
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div
            style={{
              marginTop: 64,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              backgroundColor: 'rgba(255,255,255,0.12)',
              borderTop: '1px solid rgba(255,255,255,0.15)',
              paddingTop: 32,
            }}
            className="stats-grid"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 3vw, 42px)',
                    fontWeight: 400,
                    color: '#ffffff',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: 6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div
        style={{
          backgroundColor: 'var(--foreground)',
          color: 'var(--background)',
          padding: '14px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            animation: 'marquee 28s linear infinite',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {[
            'Community Centers',
            'Mixed-Use Development',
            'Adaptive Reuse',
            'Urban Planning',
            'Residential Design',
            'Public Infrastructure',
            'Cultural Institutions',
            'Interior Architecture',
          ]
            .concat([
              'Community Centers',
              'Mixed-Use Development',
              'Adaptive Reuse',
              'Urban Planning',
              'Residential Design',
              'Public Infrastructure',
              'Cultural Institutions',
              'Interior Architecture',
            ])
            .map((item, i) => (
              <span key={i} style={{ marginRight: 48 }}>
                {item} <span style={{ color: 'var(--accent)', marginRight: 48 }}>—</span>
              </span>
            ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
      `}</style>

      {/* How it works */}
      <section style={{ padding: 'clamp(64px, 8vw, 120px) 24px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 64 }}>
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 16,
              }}
            >
              How it works
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 400,
                lineHeight: 1.1,
                margin: 0,
                maxWidth: 480,
              }}
            >
              From student to
              <br />
              <em>contributing architect</em>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 1,
              backgroundColor: 'var(--border)',
            }}
          >
            {howItWorks.map((item) => (
              <div
                key={item.step}
                style={{
                  backgroundColor: 'var(--background)',
                  padding: '40px 32px',
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--accent)',
                    marginBottom: 20,
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 400,
                    margin: '0 0 12px',
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: 'var(--muted-foreground)',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        style={{
          backgroundColor: 'var(--card)',
          padding: 'clamp(64px, 8vw, 120px) 24px',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 48,
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 12,
                }}
              >
                Open Now
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: 'var(--foreground)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--foreground)',
                paddingBottom: 2,
                whiteSpace: 'nowrap',
              }}
            >
              View all 240+ →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 1,
              backgroundColor: 'var(--border)',
            }}
          >
            {featuredProjects.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'var(--background)' }}
              >
                <div
                  style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'none')}
                >
                  <div
                    style={{
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      backgroundColor: 'var(--muted)',
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 12,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: p.type === 'Internship' ? 'var(--accent)' : '#2563eb',
                          border: `1px solid ${p.type === 'Internship' ? 'var(--accent)' : '#2563eb'}`,
                          padding: '3px 8px',
                        }}
                      >
                        {p.type}
                      </span>
                      <span
                        style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)' }}
                      >
                        {p.pay}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 20,
                        fontWeight: 400,
                        margin: '0 0 6px',
                        lineHeight: 1.2,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 13, color: 'var(--muted-foreground)', margin: '0 0 16px' }}>
                      {p.firm} · {p.duration}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: 'clamp(64px, 8vw, 120px) 24px', maxWidth: 1280, margin: '0 auto' }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 48,
            textAlign: 'center',
          }}
        >
          What they're saying
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 32,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                padding: '36px',
                borderTop: '2px solid var(--foreground)',
                backgroundColor: i === 1 ? 'var(--foreground)' : 'var(--background)',
                color: i === 1 ? 'var(--background)' : 'var(--foreground)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 1.55,
                  margin: '0 0 28px',
                  fontStyle: 'italic',
                }}
              >
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img
                  src={t.photo}
                  alt={t.name}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    filter: i === 1 ? 'brightness(0.8)' : 'none',
                  }}
                />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                  <div
                    style={{
                      fontSize: 12,
                      color: i === 1 ? 'rgba(255,255,255,0.6)' : 'var(--muted-foreground)',
                    }}
                  >
                    {t.school}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For Firms CTA */}
      <section
        id="firms"
        style={{
          backgroundColor: 'var(--foreground)',
          color: 'var(--background)',
          padding: 'clamp(64px, 8vw, 120px) 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 20,
              }}
            >
              For Architecture Firms
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 400,
                lineHeight: 1.1,
                margin: '0 0 24px',
              }}
            >
              Post a brief.
              <br />
              <em>Find your next hire.</em>
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.65)',
                marginBottom: 36,
                maxWidth: 420,
              }}
            >
              Access vetted, portfolio-ready architecture students in your city. Post a project brief in minutes
              and receive qualified applications within 48 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Zero recruitment fees for the first project',
                'Pre-screened portfolios and skills',
                'Match with students who know your software stack',
                'Simple onboarding and contract templates',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      backgroundColor: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <span style={{ color: '#fff', fontSize: 10, fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <a
                href="mailto:firms@studioline.app"
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  backgroundColor: 'var(--accent)',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                }}
              >
                Post Your First Brief →
              </a>
            </div>
          </div>

          <div
            style={{
              aspectRatio: '4/3',
              backgroundColor: '#1a1a18',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1603966985783-edd5e66a2f3d?w=800&h=600&fit=crop&auto=format"
              alt="Architecture firm studio"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
              }}
            >
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>
                Average time to first application
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 36,
                  color: '#ffffff',
                  fontWeight: 400,
                }}
              >
                18 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '48px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 24,
                height: 24,
                backgroundColor: 'var(--foreground)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: 'var(--background)', fontWeight: 700, fontSize: 9, letterSpacing: '0.05em' }}>
                SL
              </span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Studio Line
            </span>
          </div>
          <p style={{ fontSize: 12, color: 'var(--muted-foreground)', margin: 0 }}>
            © 2025 Studio Line Inc. · Connecting architecture students with real work.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 12,
                  color: 'var(--muted-foreground)',
                  textDecoration: 'none',
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
