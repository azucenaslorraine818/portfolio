import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AccentPicker from './AccentPicker'

const NAV = [
  { to: '/#work', label: 'Work' },
  { to: '/#about', label: 'About' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#beyond', label: 'Beyond code' },
  { to: '/#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)
  const closeMenu = () => setOpen(false)

  // While the mobile menu is open: close it when the visitor taps/clicks
  // anywhere outside the header, or presses Escape (focus returns to the toggle).
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b-2 border-ink bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" onClick={closeMenu} aria-label="Lorraine Azucenas, home" className="flex items-center gap-2 font-display text-xl font-extrabold">
          <span className="h-5 w-5 rounded-full border-2 border-ink bg-accent transition-colors" aria-hidden="true" />
          lorsieloopsie
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-6">
          <ul
            id="primary-menu"
            className={`${
              open
                ? 'absolute inset-x-0 top-full flex flex-col gap-1 border-b-2 border-ink bg-cream px-5 py-4'
                : 'hidden'
            } md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0`}
          >
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={closeMenu}
                  className="block rounded-full px-4 py-2 font-semibold transition-colors hover:bg-accent md:py-1.5"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 md:hidden">
              <p className="mb-2 px-4 text-sm font-semibold text-ink-soft">Pick an accent color</p>
              <AccentPicker className="px-4" />
            </li>
          </ul>

          <AccentPicker className="hidden md:flex" />

          <button
            ref={toggleRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-paper md:hidden"
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
