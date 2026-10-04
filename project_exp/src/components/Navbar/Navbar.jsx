import { useLang } from '../../i18n/LanguageContext'
import LangToggle from '../LangToggle/LangToggle'
import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#showcase', label: 'navShowcase' },
  { href: '#services', label: 'navServices' },
  { href: '#about',    label: 'navAbout' },
  { href: '#contact',  label: 'navContact' },
]

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          MF<span className="logo-dot">.</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={closeMenu}>{t[l.label]}</a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn btn-outline nav-cta"
            >
              {t.navCv}
            </a>
          </li>
          <li><LangToggle /></li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}