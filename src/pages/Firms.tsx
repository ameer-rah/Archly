import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: "What does it cost to post a project?",
    a: "Your first project post is completely free. After that, we charge a flat $299 per project post with no hidden placement fees or ongoing commissions. We don't take a cut of student compensation.",
  },
  {
    q: "How are students vetted?",
    a: "Every student on Archly is enrolled at a CUNY architecture program and has submitted a portfolio and resume for review. We manually approve each profile before it goes live. You're only seeing students who are ready to work.",
  },
  {
    q: "Can we post contract work instead of formal internships?",
    a: "Absolutely — project-based contracts are one of our most popular listing types. Many firms post a 2–6 week deliverable-based engagement. You set the scope, timeline, and compensation.",
  },
  {
    q: "How quickly will we receive applications?",
    a: "Most projects receive their first application within 24 hours of posting. Competitive briefs typically close with 10–30 qualified applicants within one week.",
  },
  {
    q: "Do you handle contracts and payments?",
    a: "We provide standard agreement templates to get you started, but the direct relationship — including payment — is between your firm and the student. We're a talent platform, not a staffing agency.",
  },
  {
    q: "What if the student isn't the right fit?",
    a: "Projects include a 5-day trial period during which either party can exit without penalty. After that, the terms of your agreement govern the engagement.",
  },
]

const steps = [
  {
    n: '01',
    title: 'Create your firm profile',
    desc: 'Register your practice, add your team, and verify your NYC business address. Takes about 10 minutes.',
  },
  {
    n: '02',
    title: 'Post a project brief',
    desc: 'Describe the work, the timeline, the software you use, and what you\'re paying. Our brief builder keeps it structured.',
  },
  {
    n: '03',
    title: 'Review student applications',
    desc: 'Browse portfolios, resumes, and skill matches in your dashboard. Request a short intro call directly through the platform.',
  },
  {
    n: '04',
    title: 'Hire and get to work',
    desc: 'Confirm the engagement, sign a simple agreement, and onboard your student. The whole process — post to hire — takes under a week.',
  },
]

const boroughs = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island']

const featuredFirms = [
  { name: 'Hollwich Kushner', borough: 'Manhattan', specialty: 'Urban Housing', projects: 4 },
  { name: 'Studio Gang NY', borough: 'Brooklyn', specialty: 'Civic + Cultural', projects: 2 },
  { name: 'BIG – Bjarke Ingels NY', borough: 'Manhattan', specialty: 'Mixed-Use', projects: 3 },
  { name: 'Marvel Architects', borough: 'Brooklyn', specialty: 'Affordable Housing', projects: 6 },
  { name: 'Dattner Architects', borough: 'Manhattan', specialty: 'Public Design', projects: 2 },
  { name: 'Aufgang Architects', borough: 'The Bronx', specialty: 'Residential', projects: 3 },
]

export function Firms() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    firmName: '',
    contact: '',
    email: '',
    borough: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const updateField = (k: string, v: string) => setFormData((f) => ({ ...f, [k]: v }))

  return (
    <main style={{ fontFamily: 'var(--font-body)' }}>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&h=900&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            filter: 'brightness(0.28)',
          }}
        />
        <div
          style={{
            position: 'relative',
            maxWidth: 1280,
            margin: '0 auto',
            padding: 'clamp(48px, 8vw, 120px) 24px',
            width: '100%',
          }}
        >
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
            For Architecture Firms · New York City
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 7vw, 88px)',
              fontWeight: 400,
              lineHeight: 1.0,
              color: '#ffffff',
              margin: '0 0 28px',
              maxWidth: 700,
            }}
          >
            Post a brief.
            <br />
            <em style={{ color: 'var(--accent)' }}>Find your next hire.</em>
          </h1>
          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.68)',
              marginBottom: 40,
              maxWidth: 500,
            }}
          >
            Archly connects NYC architecture firms with vetted, portfolio-ready students from CUNY's architecture programs — students who are trained in your tools and ready to contribute to real projects.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#post"
              style={{
                padding: '14px 28px',
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
              }}
            >
              Post Your First Brief
            </a>
            <a
              href="#how-it-works"
              style={{
                padding: '14px 28px',
                border: '1px solid rgba(255,255,255,0.35)',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.05em',
                textDecoration: 'none',
              }}
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            backgroundColor: 'rgba(255,255,255,0.08)',
          }}
          className="firm-stats"
        >
          {[
            { value: '180+', label: 'NYC Firms' },
            { value: '48 hrs', label: 'Avg. First Application' },
            { value: '$0', label: 'First Post Fee' },
            { value: '94%', label: 'Firms Return for More' },
          ].map((s) => (
            <div key={s.label} style={{ padding: '28px 24px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400 }}>
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  marginTop: 6,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <section id="how-it-works" style={{ padding: 'clamp(64px, 8vw, 120px) 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
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
            Simple by design
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 400,
              margin: '0 0 56px',
              lineHeight: 1.1,
            }}
          >
            From brief to hired
            <br />
            <em>in under a week</em>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 1,
              backgroundColor: 'var(--border)',
            }}
          >
            {steps.map((s) => (
              <div key={s.n} style={{ backgroundColor: 'var(--background)', padding: '36px 28px' }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--accent)',
                    marginBottom: 20,
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 21,
                    fontWeight: 400,
                    margin: '0 0 12px',
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted-foreground)', margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage map — boroughs */}
      <section style={{ backgroundColor: 'var(--card)', padding: 'clamp(48px, 7vw, 96px) 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 48,
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
                  marginBottom: 16,
                }}
              >
                Where We Operate
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(30px, 4vw, 48px)',
                  fontWeight: 400,
                  margin: '0 0 20px',
                  lineHeight: 1.1,
                }}
              >
                New York City,
                <br />
                <em>all five boroughs</em>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted-foreground)', marginBottom: 32 }}>
                Archly is built specifically for the NYC architecture ecosystem. We partner exclusively with CUNY schools — which means students who live and study in the same city where your firm operates.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {boroughs.map((b) => (
                  <div
                    key={b}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '12px 16px',
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--background)',
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: 'var(--accent)',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  backgroundColor: 'var(--muted)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop&auto=format"
                  alt="New York City skyline"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: -1,
                  left: -1,
                  right: -1,
                  padding: '20px 24px',
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)',
                }}
              >
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginBottom: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Current coverage
                </div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>
                  New York City · 5 Boroughs · Launching 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured firms */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
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
            In good company
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 400,
              margin: '0 0 40px',
              lineHeight: 1.1,
            }}
          >
            Firms already on Archly
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 1,
              backgroundColor: 'var(--border)',
            }}
          >
            {featuredFirms.map((f) => (
              <div
                key={f.name}
                style={{
                  backgroundColor: 'var(--background)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      backgroundColor: 'var(--foreground)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: 'var(--background)', fontWeight: 700, fontSize: 10 }}>
                      {f.name
                        .split(' ')
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.2 }}>{f.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{f.borough}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-foreground)',
                      border: '1px solid var(--border)',
                      padding: '3px 8px',
                    }}
                  >
                    {f.specialty}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>
                    {f.projects} project{f.projects > 1 ? 's' : ''} posted
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)', padding: 'clamp(64px, 8vw, 96px) 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
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
            Simple pricing
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 400,
              margin: '0 0 48px',
              lineHeight: 1.1,
            }}
          >
            No placement fees.
            <br />
            <em>No commissions.</em>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 1,
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}
            className="pricing-grid"
          >
            {[
              {
                name: 'First Post',
                price: 'Free',
                desc: 'Try the platform with no commitment.',
                features: ['1 project listing', '30-day visibility', 'Unlimited applicants', 'Portfolio access', 'Standard agreement template'],
                cta: 'Get Started Free',
                highlight: false,
              },
              {
                name: 'Per Project',
                price: '$299',
                suffix: '/ post',
                desc: "Pay only when you're ready to hire again.",
                features: ['1 project listing', '60-day visibility', 'Priority placement in search', 'Applicant tracking dashboard', 'Direct messaging', 'Agreement templates'],
                cta: 'Post a Project',
                highlight: true,
              },
              {
                name: 'Studio Plan',
                price: '$799',
                suffix: '/ month',
                desc: 'For firms with ongoing hiring needs.',
                features: ['Unlimited project listings', 'Featured firm badge', 'Early access to new graduates', 'Dedicated account support', 'Custom agreement templates', 'Analytics dashboard'],
                cta: 'Contact Sales',
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                style={{
                  backgroundColor: plan.highlight ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: plan.highlight ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
                  {plan.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 400, lineHeight: 1 }}>
                    {plan.price}
                  </span>
                  {plan.suffix && (
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{plan.suffix}</span>
                  )}
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 28 }}>{plan.desc}</p>
                <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                      <span style={{ color: plan.highlight ? 'rgba(255,255,255,0.9)' : 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#post"
                  style={{
                    padding: '13px',
                    backgroundColor: plan.highlight ? '#ffffff' : 'transparent',
                    color: plan.highlight ? 'var(--accent)' : '#ffffff',
                    border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.3)',
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'block',
                    transition: 'all 0.15s',
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
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
            FAQ
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 400,
              margin: '0 0 40px',
              lineHeight: 1.1,
            }}
          >
            Common questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '20px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>{faq.q}</span>
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 300,
                      color: 'var(--muted-foreground)',
                      flexShrink: 0,
                      transition: 'transform 0.2s',
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: 20 }}>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted-foreground)', margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* Contact / Post brief form */}
      <section
        id="post"
        style={{
          backgroundColor: 'var(--card)',
          borderTop: '1px solid var(--border)',
          padding: 'clamp(64px, 8vw, 96px) 24px',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
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
            Get started
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 46px)',
              fontWeight: 400,
              margin: '0 0 12px',
              lineHeight: 1.1,
            }}
          >
            Tell us about your firm
          </h2>
          <p style={{ fontSize: 15, color: 'var(--muted-foreground)', marginBottom: 40, lineHeight: 1.6 }}>
            We'll reach out to set up your account and walk you through posting your first project — usually within one business day.
          </p>

          {submitted ? (
            <div
              style={{
                padding: '40px',
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: 'var(--foreground)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <span style={{ color: 'var(--background)', fontSize: 18, fontWeight: 700 }}>✓</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, margin: '0 0 12px' }}>
                We'll be in touch soon
              </h3>
              <p style={{ fontSize: 14, color: 'var(--muted-foreground)', margin: '0 0 24px' }}>
                Expect an email at <strong>{formData.email}</strong> within one business day to get your firm profile set up.
              </p>
              <Link
                to="/projects"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
              >
                Browse current student talent →
              </Link>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="form-row">
                <FirmField label="Firm Name" value={formData.firmName} onChange={(v) => updateField('firmName', v)} placeholder="Your Practice Name" required />
                <FirmField label="Contact Name" value={formData.contact} onChange={(v) => updateField('contact', v)} placeholder="Principal or HR" required />
              </div>
              <FirmField label="Email" value={formData.email} onChange={(v) => updateField('email', v)} placeholder="you@yourfirm.com" type="email" required />

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 6 }}>
                  Borough
                </label>
                <select
                  value={formData.borough}
                  onChange={(e) => updateField('borough', e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '11px 12px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--background)',
                    fontSize: 14,
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    color: formData.borough ? 'var(--foreground)' : 'var(--muted-foreground)',
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="">Select borough</option>
                  {boroughs.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 6 }}>
                  Type of Work
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => updateField('projectType', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 12px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--background)',
                    fontSize: 14,
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    color: formData.projectType ? 'var(--foreground)' : 'var(--muted-foreground)',
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="">What kind of work do you need?</option>
                  {['Internship (full-time, stipend)', 'Contract (project-based, flat fee)', 'Both'].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 6 }}>
                  Tell us about the project (optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="Briefly describe the type of work, timeline, and what you're looking for in a student..."
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--background)',
                    fontSize: 14,
                    fontFamily: 'var(--font-body)',
                    resize: 'vertical',
                    outline: 'none',
                    color: 'var(--foreground)',
                    lineHeight: 1.55,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--foreground)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  fontFamily: 'var(--font-body)',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--foreground)')}
              >
                Submit — We'll Be in Touch
              </button>
            </form>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .firm-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

function FirmField({
  label, value, onChange, placeholder, type = 'text', required = false,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; required?: boolean
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 6 }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          padding: '11px 12px',
          border: '1px solid var(--border)',
          backgroundColor: 'var(--background)',
          fontSize: 14,
          fontFamily: 'var(--font-body)',
          outline: 'none',
          color: 'var(--foreground)',
          transition: 'border-color 0.15s',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'var(--foreground)')}
        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
      />
    </div>
  )
}
