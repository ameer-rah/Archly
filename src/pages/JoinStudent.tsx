import { useState, useRef } from 'react'

type Step = 1 | 2 | 3 | 4 | 5

const cunySchools = [
  'CCNY – Bernard and Anne Spitzer School of Architecture',
  'City College of New York (CCNY) – Architecture',
  'New York City College of Technology (City Tech)',
  'Queens College – Urban Studies',
  'Hunter College – Urban Affairs & Planning',
  'Baruch College – Real Estate & Urban Studies',
  'Brooklyn College – Environmental Studies',
  'Lehman College',
  'Other CUNY School',
]

const programs = ['B.Arch', 'B.S. Architecture', 'M.Arch I', 'M.Arch II', 'MUP', 'MS Urban Design', 'BES', 'Other']
const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', 'Graduate – 1st Year', 'Graduate – 2nd Year', 'Graduate – 3rd Year']

const softwareOptions = [
  'Revit', 'AutoCAD', 'Rhino', 'Grasshopper', 'SketchUp', 'Lumion',
  'Enscape', 'V-Ray', '3ds Max', 'Adobe Illustrator', 'Adobe Photoshop',
  'InDesign', 'ArcGIS / QGIS', 'Blender', 'Unreal Engine',
]

const projectTypeOptions = [
  'Residential', 'Affordable Housing', 'Civic / Public', 'Commercial',
  'Mixed-Use', 'Urban Design', 'Landscape Architecture', 'Interior Architecture',
  'Heritage / Adaptive Reuse', 'Cultural Institutions', 'Infrastructure', 'Sustainability',
]

const boroughs = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island']

type CompletedProject = {
  id: number
  title: string
  type: string
  role: string
  year: string
  description: string
  imageFile: string
}

export function JoinStudent() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const resumeInputRef = useRef<HTMLInputElement>(null)
  const [resumeFileName, setResumeFileName] = useState('')
  const [portfolioFileName, setPortfolioFileName] = useState('')
  const portfolioInputRef = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    borough: '',
    school: '',
    program: '',
    year: '',
    gpa: '',
    graduationYear: '',
    bio: '',
    software: [] as string[],
    projectTypes: [] as string[],
    availability: 'both' as string,
    startDate: '',
    portfolioUrl: '',
    linkedIn: '',
    website: '',
  })

  const [completedProjects, setCompletedProjects] = useState<CompletedProject[]>([
    { id: 1, title: '', type: '', role: '', year: '', description: '', imageFile: '' },
  ])

  const updateField = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }))

  const toggleArray = (key: 'software' | 'projectTypes', val: string) => {
    setForm((f) => ({
      ...f,
      [key]: f[key].includes(val) ? f[key].filter((x) => x !== val) : [...f[key], val],
    }))
  }

  const addProject = () => {
    setCompletedProjects((prev) => [
      ...prev,
      { id: Date.now(), title: '', type: '', role: '', year: '', description: '', imageFile: '' },
    ])
  }

  const removeProject = (id: number) => {
    setCompletedProjects((prev) => prev.filter((p) => p.id !== id))
  }

  const updateProject = (id: number, key: keyof CompletedProject, val: string) => {
    setCompletedProjects((prev) => prev.map((p) => (p.id === id ? { ...p, [key]: val } : p)))
  }

  const steps = [
    { n: 1, label: 'Account' },
    { n: 2, label: 'Education' },
    { n: 3, label: 'Skills' },
    { n: 4, label: 'Portfolio' },
    { n: 5, label: 'Resume' },
  ]

  if (submitted) {
    return (
      <main style={{ fontFamily: 'var(--font-body)', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
          <div style={{ width: 56, height: 56, backgroundColor: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
            <span style={{ color: 'var(--background)', fontSize: 22, fontWeight: 700 }}>✓</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 400, margin: '0 0 16px', lineHeight: 1.1 }}>
            Welcome to Archly
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted-foreground)', marginBottom: 36 }}>
            Your profile is under review. We'll notify you at <strong>{form.email}</strong> within one business day.
          </p>
          <a href="/projects" style={{ padding: '14px 28px', backgroundColor: 'var(--foreground)', color: 'var(--background)', textDecoration: 'none', fontSize: 14, fontWeight: 600, display: 'block', textAlign: 'center' }}>
            Browse Open Projects
          </a>
        </div>
      </main>
    )
  }

  return (
    <main style={{ fontFamily: 'var(--font-body)', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 60px)' }} className="join-layout">

        {/* Left brand panel */}
        <div
          style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)', padding: 'clamp(40px, 6vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}
          className="join-brand"
        >
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=1200&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.14 }} />
          <div style={{ position: 'relative' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 44 }}>For Students · NYC</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 400, lineHeight: 1.1, margin: '0 0 20px' }}>
              Build your future.<br /><em>One project at a time.</em>
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.52)', maxWidth: 340, margin: '0 0 28px' }}>
              Archly is exclusively for CUNY architecture students. Get matched with NYC firms posting real internships and contracts.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              {[{ v: '240+', l: 'Open Projects' }, { v: 'CUNY', l: 'Exclusive' }, { v: '5', l: 'Boroughs' }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400 }}>{s.v}</div>
                  <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', marginTop: 48 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 26, height: 26, border: `1px solid ${step >= s.n ? 'var(--accent)' : 'rgba(255,255,255,0.15)'}`, backgroundColor: step > s.n ? 'var(--accent)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: step > s.n ? '#fff' : step === s.n ? 'var(--accent)' : 'rgba(255,255,255,0.25)', flexShrink: 0, transition: 'all 0.2s' }}>
                  {step > s.n ? '✓' : s.n}
                </div>
                <span style={{ fontSize: 12, fontWeight: 500, color: step >= s.n ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.25)', transition: 'color 0.2s' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div style={{ padding: 'clamp(36px, 6vw, 72px)', overflowY: 'auto' }}>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 6 }}>Step {step} of 5</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 400, margin: '0 0 28px', lineHeight: 1.1 }}>
              {step === 1 && 'Create your account'}
              {step === 2 && 'Your education'}
              {step === 3 && 'Skills & interests'}
              {step === 4 && 'Projects & portfolio'}
              {step === 5 && 'Resume & links'}
            </h2>

            {/* ── Step 1 ── */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <F label="First Name" value={form.firstName} onChange={(v) => updateField('firstName', v)} placeholder="Amara" />
                  <F label="Last Name" value={form.lastName} onChange={(v) => updateField('lastName', v)} placeholder="Chen" />
                </div>
                <F label="Email" value={form.email} onChange={(v) => updateField('email', v)} placeholder="amara@cuny.edu" type="email" />
                <F label="Phone" value={form.phone} onChange={(v) => updateField('phone', v)} placeholder="(212) 555-0100" type="tel" />
                <F label="Password" value={form.password} onChange={(v) => updateField('password', v)} placeholder="Min. 8 characters" type="password" />
                <div>
                  <label style={LS}>Borough you're based in</label>
                  <select value={form.borough} onChange={(e) => updateField('borough', e.target.value)} style={SS(!!form.borough)}>
                    <option value="">Select your borough</option>
                    {boroughs.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, marginTop: 4 }}>
                  <button style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--card)', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    <GoogleIcon /> Continue with Google
                  </button>
                </div>
              </div>
            )}

            {/* ── Step 2 ── */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label style={LS}>CUNY School</label>
                  <select value={form.school} onChange={(e) => updateField('school', e.target.value)} style={SS(!!form.school)}>
                    <option value="">Select your school</option>
                    {cunySchools.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <p style={{ fontSize: 11, color: 'var(--accent)', marginTop: 5, fontStyle: 'italic' }}>Archly is open to CUNY architecture students only.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={LS}>Program</label>
                    <select value={form.program} onChange={(e) => updateField('program', e.target.value)} style={SS(!!form.program)}>
                      <option value="">Select</option>
                      {programs.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={LS}>Year</label>
                    <select value={form.year} onChange={(e) => updateField('year', e.target.value)} style={SS(!!form.year)}>
                      <option value="">Select</option>
                      {years.map((y) => <option key={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <F label="GPA (optional)" value={form.gpa} onChange={(v) => updateField('gpa', v)} placeholder="3.8 / 4.0" />
                  <F label="Expected Graduation" value={form.graduationYear} onChange={(v) => updateField('graduationYear', v)} placeholder="May 2026" />
                </div>
                <div>
                  <label style={LS}>I'm looking for</label>
                  {[{ l: 'Internship (full-time, paid)', v: 'internship' }, { l: 'Contract work (project-based)', v: 'contract' }, { l: 'Both — open to either', v: 'both' }].map((opt) => (
                    <label key={opt.v} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', cursor: 'pointer', borderBottom: '1px solid var(--border)', fontSize: 14 }}>
                      <input type="radio" name="availability" checked={form.availability === opt.v} onChange={() => updateField('availability', opt.v)} style={{ accentColor: 'var(--accent)', width: 15, height: 15 }} />
                      {opt.l}
                    </label>
                  ))}
                </div>
                <F label="Earliest start date" value={form.startDate} onChange={(v) => updateField('startDate', v)} placeholder="September 2025" />
              </div>
            )}

            {/* ── Step 3 ── */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <label style={LS}>Software proficiency <span style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 400 }}>— select all that apply</span></label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 8 }}>
                    {softwareOptions.map((s) => (
                      <Chip key={s} active={form.software.includes(s)} onClick={() => toggleArray('software', s)} accent={false}>{s}</Chip>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={LS}>Project type interests</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 8 }}>
                    {projectTypeOptions.map((t) => (
                      <Chip key={t} active={form.projectTypes.includes(t)} onClick={() => toggleArray('projectTypes', t)} accent={true}>{t}</Chip>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={LS}>Short bio <span style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 400 }}>— max 200 chars</span></label>
                  <textarea value={form.bio} onChange={(e) => updateField('bio', e.target.value.slice(0, 200))} placeholder="Second-year M.Arch student at CCNY focused on affordable housing and adaptive reuse in NYC. Proficient in Revit and Rhino." rows={4} style={TAS} onFocus={(e) => (e.target.style.borderColor = 'var(--foreground)')} onBlur={(e) => (e.target.style.borderColor = 'var(--border)')} />
                  <div style={{ fontSize: 11, color: 'var(--muted-foreground)', textAlign: 'right', marginTop: 3 }}>{form.bio.length}/200</div>
                </div>
              </div>
            )}

            {/* ── Step 4 — Portfolio & completed projects ── */}
            {step === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted-foreground)', margin: 0 }}>
                  Add projects you've completed — academic, professional, or personal. These appear on your public profile.
                </p>

                {completedProjects.map((proj, idx) => (
                  <div key={proj.id} style={{ border: '1px solid var(--border)', padding: '20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>Project {idx + 1}</span>
                      {completedProjects.length > 1 && (
                        <button onClick={() => removeProject(proj.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'var(--font-body)' }}>Remove</button>
                      )}
                    </div>
                    <F label="Project Title" value={proj.title} onChange={(v) => updateProject(proj.id, 'title', v)} placeholder="East Harlem Community Center" />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      <div>
                        <label style={LS}>Project Type</label>
                        <select value={proj.type} onChange={(e) => updateProject(proj.id, 'type', e.target.value)} style={SS(!!proj.type)}>
                          <option value="">Select</option>
                          {['Academic', 'Professional', 'Competition', 'Personal / Speculative', 'Research'].map((t) => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                      <F label="Year Completed" value={proj.year} onChange={(v) => updateProject(proj.id, 'year', v)} placeholder="2024" />
                    </div>
                    <F label="Your Role" value={proj.role} onChange={(v) => updateProject(proj.id, 'role', v)} placeholder="Lead Designer / Team of 3" />
                    <div>
                      <label style={LS}>Brief Description</label>
                      <textarea value={proj.description} onChange={(e) => updateProject(proj.id, 'description', e.target.value.slice(0, 300))} placeholder="What was the project? What was your contribution?" rows={3} style={TAS} onFocus={(e) => (e.target.style.borderColor = 'var(--foreground)')} onBlur={(e) => (e.target.style.borderColor = 'var(--border)')} />
                      <div style={{ fontSize: 11, color: 'var(--muted-foreground)', textAlign: 'right', marginTop: 2 }}>{proj.description.length}/300</div>
                    </div>
                    <div>
                      <label style={LS}>Project image (optional)</label>
                      {proj.imageFile ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', border: '1px solid var(--border)', backgroundColor: 'var(--card)' }}>
                          <span style={{ fontSize: 13, flex: 1 }}>🖼 {proj.imageFile}</span>
                          <button onClick={() => updateProject(proj.id, 'imageFile', '')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted-foreground)', fontSize: 14, fontFamily: 'var(--font-body)' }}>✕</button>
                        </div>
                      ) : (
                        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px', border: '2px dashed var(--border)', cursor: 'pointer', fontSize: 13, color: 'var(--muted-foreground)' }}>
                          <span>↑</span> Upload image (JPG, PNG · max 5MB)
                          <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => { const f = e.target.files?.[0]; if (f) updateProject(proj.id, 'imageFile', f.name) }} />
                        </label>
                      )}
                    </div>
                  </div>
                ))}

                <button onClick={addProject} style={{ padding: '12px', border: '1px dashed var(--border)', backgroundColor: 'transparent', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  + Add another project
                </button>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                  <label style={LS}>Portfolio PDF (optional but recommended)</label>
                  {portfolioFileName ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--card)' }}>
                      <span style={{ fontSize: 13, flex: 1 }}>📄 {portfolioFileName}</span>
                      <button onClick={() => setPortfolioFileName('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted-foreground)', fontSize: 14, fontFamily: 'var(--font-body)' }}>✕</button>
                    </div>
                  ) : (
                    <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '24px', border: '2px dashed var(--border)', cursor: 'pointer', textAlign: 'center' }}>
                      <span style={{ fontSize: 28 }}>↑</span>
                      <span style={{ fontWeight: 600, fontSize: 13 }}>Upload Portfolio PDF</span>
                      <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>Max 20MB · PDF format</span>
                      <input ref={portfolioInputRef} type="file" accept=".pdf" style={{ display: 'none' }} onChange={(e) => { const f = e.target.files?.[0]; if (f) setPortfolioFileName(f.name) }} />
                    </label>
                  )}
                </div>
                <F label="Portfolio URL (optional)" value={form.portfolioUrl} onChange={(v) => updateField('portfolioUrl', v)} placeholder="https://yourportfolio.com" type="url" />
              </div>
            )}

            {/* ── Step 5 — Resume & links ── */}
            {step === 5 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <label style={LS}>Resume / CV</label>
                  {resumeFileName ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px', border: '1px solid #86efac', backgroundColor: '#f0faf0' }}>
                      <span style={{ fontSize: 13, flex: 1, color: '#15803d' }}>✓ {resumeFileName}</span>
                      <button onClick={() => setResumeFileName('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#15803d', fontSize: 14, fontFamily: 'var(--font-body)' }}>✕</button>
                    </div>
                  ) : (
                    <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '36px', border: '2px dashed var(--border)', cursor: 'pointer', textAlign: 'center' }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--foreground)')} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}>
                      <span style={{ fontSize: 36 }}>↑</span>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>Upload your resume</span>
                      <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>PDF or DOCX · Max 5MB</span>
                      <input ref={resumeInputRef} type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={(e) => { const f = e.target.files?.[0]; if (f) setResumeFileName(f.name) }} />
                    </label>
                  )}
                </div>
                <F label="LinkedIn (optional)" value={form.linkedIn} onChange={(v) => updateField('linkedIn', v)} placeholder="linkedin.com/in/yourname" />
                <F label="Personal Website (optional)" value={form.website} onChange={(v) => updateField('website', v)} placeholder="https://yoursite.com" type="url" />

                <div style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', padding: 20, marginTop: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 12 }}>Profile Summary</div>
                  {[
                    { label: 'Name', value: [form.firstName, form.lastName].filter(Boolean).join(' ') || '—' },
                    { label: 'School', value: form.school || '—' },
                    { label: 'Program', value: [form.program, form.year].filter(Boolean).join(' · ') || '—' },
                    { label: 'Looking for', value: form.availability === 'both' ? 'Internship & Contract' : form.availability === 'internship' ? 'Internship' : 'Contract' },
                    { label: 'Software', value: form.software.slice(0, 4).join(', ') + (form.software.length > 4 ? ` +${form.software.length - 4} more` : '') || '—' },
                    { label: 'Projects', value: String(completedProjects.filter((p) => p.title).length) + ' added' },
                    { label: 'Resume', value: resumeFileName || 'Not uploaded' },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
                      <span style={{ color: 'var(--muted-foreground)', width: 90, flexShrink: 0 }}>{item.label}</span>
                      <span style={{ fontWeight: 500 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              {step > 1 && (
                <button onClick={() => setStep((s) => (s - 1) as Step)} style={{ padding: '13px 20px', border: '1px solid var(--border)', backgroundColor: 'transparent', cursor: 'pointer', fontSize: 14, fontWeight: 500, fontFamily: 'var(--font-body)', flex: 1 }}>
                  ← Back
                </button>
              )}
              <button
                onClick={() => { if (step < 5) setStep((s) => (s + 1) as Step); else setSubmitted(true) }}
                style={{ padding: '13px 24px', backgroundColor: 'var(--foreground)', color: 'var(--background)', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', fontFamily: 'var(--font-body)', flex: 2, transition: 'background 0.15s' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--foreground)')}
              >
                {step < 5 ? 'Continue →' : 'Create Account'}
              </button>
            </div>
            {step === 1 && (
              <p style={{ fontSize: 12, color: 'var(--muted-foreground)', textAlign: 'center', marginTop: 20 }}>
                Already have an account? <a href="#" style={{ color: 'var(--foreground)', fontWeight: 600 }}>Sign in</a>
              </p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .join-layout { grid-template-columns: 1fr !important; }
          .join-brand { min-height: 260px !important; }
        }
      `}</style>
    </main>
  )
}

// ─── Shared style helpers ────────────────────────────────────────────────────

const LS: React.CSSProperties = {
  display: 'block',
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--muted-foreground)',
  marginBottom: 6,
}

const SS = (hasValue: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '11px 12px',
  border: '1px solid var(--border)',
  backgroundColor: 'var(--card)',
  fontSize: 14,
  fontFamily: 'var(--font-body)',
  outline: 'none',
  color: hasValue ? 'var(--foreground)' : 'var(--muted-foreground)',
  appearance: 'none',
  cursor: 'pointer',
})

const TAS: React.CSSProperties = {
  width: '100%',
  padding: '11px 12px',
  border: '1px solid var(--border)',
  backgroundColor: 'var(--card)',
  fontSize: 14,
  fontFamily: 'var(--font-body)',
  resize: 'vertical',
  outline: 'none',
  color: 'var(--foreground)',
  lineHeight: 1.55,
}

// ─── Field ───────────────────────────────────────────────────────────────────

function F({ label, value, onChange, placeholder, type = 'text' }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <label style={LS}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ width: '100%', padding: '11px 12px', border: '1px solid var(--border)', backgroundColor: 'var(--card)', fontSize: 14, fontFamily: 'var(--font-body)', outline: 'none', color: 'var(--foreground)', transition: 'border-color 0.15s' }}
        onFocus={(e) => (e.target.style.borderColor = 'var(--foreground)')}
        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
      />
    </div>
  )
}

// ─── Chip ────────────────────────────────────────────────────────────────────

function Chip({ children, active, onClick, accent }: { children: React.ReactNode; active: boolean; onClick: () => void; accent: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: '6px 13px', fontSize: 12, fontWeight: 500, border: `1px solid ${active ? (accent ? 'var(--accent)' : 'var(--foreground)') : 'var(--border)'}`, backgroundColor: active ? (accent ? '#fef2f2' : 'var(--foreground)') : 'transparent', color: active ? (accent ? 'var(--accent)' : 'var(--background)') : 'var(--foreground)', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'all 0.1s' }}
    >
      {children}
    </button>
  )
}

// ─── Google icon ─────────────────────────────────────────────────────────────

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
