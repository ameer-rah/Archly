import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Nav() {
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  const links = [
    { to: '/projects', label: 'Browse Projects' },
    { to: '/join', label: 'For Students' },
    { to: '/#firms', label: 'For Firms' },
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div
            style={{
              width: 28,
              height: 28,
              backgroundColor: 'var(--foreground)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                color: 'var(--background)',
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-body)',
              }}
            >
              SL
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--foreground)',
            }}
          >
            Studio Line
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                color: loc.pathname === l.to ? 'var(--accent)' : 'var(--muted-foreground)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--foreground)')}
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  loc.pathname === l.to ? 'var(--accent)' : 'var(--muted-foreground)')
              }
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/join"
            style={{
              padding: '8px 18px',
              backgroundColor: 'var(--foreground)',
              color: 'var(--background)',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              border: '1px solid var(--foreground)',
              transition: 'all 0.15s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'var(--accent)'
              el.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'var(--foreground)'
              el.style.borderColor = 'var(--foreground)'
            }}
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                backgroundColor: 'var(--foreground)',
                transition: 'all 0.2s',
                transformOrigin: 'center',
                transform:
                  open && i === 0
                    ? 'translateY(6.5px) rotate(45deg)'
                    : open && i === 2
                      ? 'translateY(-6.5px) rotate(-45deg)'
                      : open && i === 1
                        ? 'scaleX(0)'
                        : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--background)',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                color: 'var(--foreground)',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/join"
            onClick={() => setOpen(false)}
            style={{
              padding: '12px 18px',
              backgroundColor: 'var(--foreground)',
              color: 'var(--background)',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
              letterSpacing: '0.04em',
            }}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  )
}
