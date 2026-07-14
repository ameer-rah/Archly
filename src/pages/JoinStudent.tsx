import { useState } from 'react'

type Step = 1 | 2 | 3 | 4

const schools = [
  'University of Toronto — Daniels Faculty',
  'Ryerson University — School of Interior Design',
  'Waterloo School of Architecture',
  'McGill University — Peter Guo-hua Fu School',
  'Carleton University — Azrieli School',
  'University of British Columbia',
  'Dalhousie University',
  'Other',
]

const programs = ['B.Arch', 'M.Arch I', 'M.Arch II', 'MLA', 'BES', 'Other']

const softwareOptions = ['Revit', 'AutoCAD', 'Rhino', 'Grasshopper', 'SketchUp', 'Lumion', 'Enscape', '3ds Max', 'V-Ray', 'Adobe CC', 'ArcGIS', 'Blender']

const projectTypes = ['Residential', 'Civic / Public', 'Commercial', 'Mixed-Use', 'Urban Design', 'Landscape', 'Interior Architecture', 'Heritage / Adaptive Reuse', 'Cultural Institutions', 'Infrastructure']

export function JoinStudent() {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    school: '',
    program: '',
    year: '',
    gpa: '',
    software: [] as string[],
    projectTypes: [] as string[],
    portfolioUrl: '',
    bio: '',
    availability: '',
    type: 'both' as 'internship' | 'contract' | 'both',
  })

  const updateField = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }))

  const toggleArray = (key: 'software' | 'projectTypes', val: string) => {
    setForm((f) => ({
      ...f,
      [key]: f[key].includes(val) ? f[key].filter((x) => x !== val) : [...f[key], val],
    }))
  }

  const steps = [
    { n: 1, label: 'Account' },
    { n: 2, label: 'Education' },
    { n: 3, label: 'Skills' },
    { n: 4, label: 'Portfolio' },
  ]

  if (step === 4 && form.portfolioUrl !== '' && false) {
    // placeholder for success state logic
  }

  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <main style={{ fontFamily: 'var(--font-body)', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
          <div
            style={{
              width: 56,
              height: 56,
              backgroundColor: 'var(--foreground)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 28px',
            }}
          >
            <span style={{ color: 'var(--background)', fontSize: 22, fontWeight: 700 }}>✓</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 400, margin: '0 0 16px', lineHeight: 1.1 }}>
            Welcome to Studio Line
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted-foreground)', marginBottom: 36 }}>
            Your profile is under review. We'll notify you at <strong>{form.email}</strong> once it's live — typically within one business day.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a
              href="/projects"
              style={{
                padding: '14px 28px',
                backgroundColor: 'var(--foreground)',
                color: 'var(--background)',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.05em',
                display: 'block',
                textAlign: 'center',
              }}
            >
              Browse Open Projects
            </a>
            <button
              onClick={() => { setSubmitted(false); setStep(1); setForm({ ...form, email: '' }) }}
              style={{ background: 'none', border: 'none', fontSize: 13, color: 'var(--muted-foreground)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}
            >
              Register another account
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main style={{ fontFamily: 'var(--font-body)', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 'calc(100vh - 60px)',
        }}
        className="join-layout"
      >
        {/* Left — brand panel */}
        <div
          style={{
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
            padding: 'clamp(40px, 6vw, 80px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="join-brand"
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=1200&fit=crop&auto=format)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.18,
            }}
          />
          <div style={{ position: 'relative' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 48 }}>
              For Students
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.1,
                margin: '0 0 28px',
              }}
            >
              Build your future.
              <br />
              <em>One project at a time.</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: 380, margin: 0 }}>
              Join 3,400+ architecture students who've used Studio Line to find meaningful work at real firms — not make-work placements.
            </p>
          </div>

          {/* Step progress on brand panel */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {steps.map((s) => (
                <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      border: `1px solid ${step >= s.n ? 'var(--accent)' : 'rgba(255,255,255,0.2)'}`,
                      backgroundColor: step > s.n ? 'var(--accent)' : step === s.n ? 'transparent' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      fontWeight: 700,
                      color: step > s.n ? '#fff' : step === s.n ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                      transition: 'all 0.2s',
                      flexShrink: 0,
                    }}
                  >
                    {step > s.n ? '✓' : s.n}
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: step >= s.n ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
                      transition: 'color 0.2s',
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div style={{ padding: 'clamp(40px, 6vw, 80px)', overflowY: 'auto' }}>
          <div style={{ maxWidth: 460, margin: '0 auto' }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 8 }}>
              Step {step} of 4
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400, margin: '0 0 32px', lineHeight: 1.1 }}>
              {step === 1 && 'Create your account'}
              {step === 2 && 'Your education'}
              {step === 3 && 'Your skills'}
              {step === 4 && 'Your portfolio'}
            </h2>

            {/* Step 1 */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <Field label="First Name" value={form.firstName} onChange={(v) => updateField('firstName', v)} placeholder="Amara" />
                  <Field label="Last Name" value={form.lastName} onChange={(v) => updateField('lastName', v)} placeholder="Chen" />
                </div>
                <Field label="Email" value={form.email} onChange={(v) => updateField('email', v)} placeholder="amara@university.ca" type="email" />
                <Field label="Password" value={form.password} onChange={(v) => updateField('password', v)} placeholder="Min. 8 characters" type="password" />
                <div style={{ marginTop: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 10 }}>
                    Or sign up with
                  </div>
                  <button
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--card)',
                      cursor: 'pointer',
                      fontSize: 13,
                      fontWeight: 600,
                      fontFamily: 'var(--font-body)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                    }}
                  >
                    <GoogleIcon /> Continue with Google
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <SelectField
                  label="School"
                  value={form.school}
                  onChange={(v) => updateField('school', v)}
                  options={schools}
                  placeholder="Select your school"
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <SelectField
                    label="Program"
                    value={form.program}
                    onChange={(v) => updateField('program', v)}
                    options={programs}
                    placeholder="Select program"
                  />
                  <SelectField
                    label="Year"
                    value={form.year}
                    onChange={(v) => updateField('year', v)}
                    options={['1st', '2nd', '3rd', '4th', '5th', 'Graduate']}
                    placeholder="Year"
                  />
                </div>
                <Field label="GPA (optional)" value={form.gpa} onChange={(v) => updateField('gpa', v)} placeholder="3.8 / 4.0" />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 10 }}>
                    Availability
                  </div>
                  {['Internship (full-time)', 'Contract work (project-based)', 'Both'].map((opt) => (
                    <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', cursor: 'pointer', borderBottom: '1px solid var(--border)', fontSize: 14 }}>
                      <input
                        type="radio"
                        name="type"
                        checked={
                          (opt === 'Internship (full-time)' && form.type === 'internship') ||
                          (opt === 'Contract work (project-based)' && form.type === 'contract') ||
                          (opt === 'Both' && form.type === 'both')
                        }
                        onChange={() =>
                          updateField(
                            'type',
                            opt === 'Internship (full-time)' ? 'internship' : opt === 'Contract work (project-based)' ? 'contract' : 'both',
                          )
                        }
                        style={{ accentColor: 'var(--accent)', width: 16, height: 16 }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 12 }}>
                    Software proficiency <span style={{ color: 'var(--muted-foreground)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(select all that apply)</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {softwareOptions.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleArray('software', s)}
                        style={{
                          padding: '7px 14px',
                          fontSize: 13,
                          fontWeight: 500,
                          border: `1px solid ${form.software.includes(s) ? 'var(--foreground)' : 'var(--border)'}`,
                          backgroundColor: form.software.includes(s) ? 'var(--foreground)' : 'transparent',
                          color: form.software.includes(s) ? 'var(--background)' : 'var(--foreground)',
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
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 12 }}>
                    Project interests
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {projectTypes.map((t) => (
                      <button
                        key={t}
                        onClick={() => toggleArray('projectTypes', t)}
                        style={{
                          padding: '7px 14px',
                          fontSize: 13,
                          fontWeight: 500,
                          border: `1px solid ${form.projectTypes.includes(t) ? 'var(--accent)' : 'var(--border)'}`,
                          backgroundColor: form.projectTypes.includes(t) ? '#fef2f2' : 'transparent',
                          color: form.projectTypes.includes(t) ? 'var(--accent)' : 'var(--foreground)',
                          cursor: 'pointer',
                          fontFamily: 'var(--font-body)',
                          transition: 'all 0.1s',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 10 }}>
                    Short bio <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(140 chars)</span>
                  </div>
                  <textarea
                    value={form.bio}
                    onChange={(e) => updateField('bio', e.target.value.slice(0, 140))}
                    placeholder="Third-year M.Arch student interested in adaptive reuse and civic architecture. Revit and Rhino power user."
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--card)',
                      fontSize: 14,
                      fontFamily: 'var(--font-body)',
                      resize: 'vertical',
                      outline: 'none',
                      color: 'var(--foreground)',
                      lineHeight: 1.5,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--foreground)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                  <div style={{ fontSize: 11, color: 'var(--muted-foreground)', textAlign: 'right', marginTop: 4 }}>{form.bio.length}/140</div>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <Field
                  label="Portfolio URL"
                  value={form.portfolioUrl}
                  onChange={(v) => updateField('portfolioUrl', v)}
                  placeholder="https://yourportfolio.com"
                  type="url"
                />
                <div
                  style={{
                    border: '2px dashed var(--border)',
                    padding: '36px',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 12 }}>↑</div>
                  <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>Upload PDF portfolio</div>
                  <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>Max 20MB · PDF format</div>
                </div>

                {/* Summary */}
                <div style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', padding: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 14 }}>
                    Profile Summary
                  </div>
                  {[
                    { label: 'Name', value: `${form.firstName} ${form.lastName}` || '—' },
                    { label: 'School', value: form.school || '—' },
                    { label: 'Program', value: `${form.program}${form.year ? ', ' + form.year + ' year' : ''}` || '—' },
                    { label: 'Software', value: form.software.join(', ') || '—' },
                    { label: 'Interests', value: form.projectTypes.join(', ') || '—' },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
                      <span style={{ color: 'var(--muted-foreground)', width: 80, flexShrink: 0 }}>{item.label}</span>
                      <span style={{ fontWeight: 500 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
              {step > 1 && (
                <button
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  style={{
                    padding: '13px 24px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: 'var(--font-body)',
                    flex: 1,
                  }}
                >
                  ← Back
                </button>
              )}
              <button
                onClick={() => {
                  if (step < 4) setStep((s) => (s + 1) as Step)
                  else setSubmitted(true)
                }}
                style={{
                  padding: '13px 24px',
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  fontFamily: 'var(--font-body)',
                  flex: 2,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--foreground)')}
              >
                {step < 4 ? 'Continue →' : 'Create Account'}
              </button>
            </div>

            {step === 1 && (
              <p style={{ fontSize: 12, color: 'var(--muted-foreground)', textAlign: 'center', marginTop: 20 }}>
                Already have an account?{' '}
                <a href="#" style={{ color: 'var(--foreground)', fontWeight: 600 }}>
                  Sign in
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .join-layout {
            grid-template-columns: 1fr !important;
          }
          .join-brand {
            min-height: 280px !important;
          }
        }
      `}</style>
    </main>
  )
}

function Field({
  label, value, onChange, placeholder, type = 'text',
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string
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
        style={{
          width: '100%',
          padding: '11px 12px',
          border: '1px solid var(--border)',
          backgroundColor: 'var(--card)',
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

function SelectField({
  label, value, onChange, options, placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[]; placeholder?: string
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 6 }}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '11px 12px',
          border: '1px solid var(--border)',
          backgroundColor: 'var(--card)',
          fontSize: 14,
          fontFamily: 'var(--font-body)',
          outline: 'none',
          color: value ? 'var(--foreground)' : 'var(--muted-foreground)',
          appearance: 'none',
          cursor: 'pointer',
          transition: 'border-color 0.15s',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'var(--foreground)')}
        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}
