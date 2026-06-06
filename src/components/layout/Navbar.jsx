import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from '../ui/Icons.jsx'

const NAV_LINKS = [
  { label: 'Inicio', href: 'inicio' },
  { label: 'Areas de Practica', href: 'areas' },
  { label: 'El Equipo', href: 'equipo' },
  { label: 'Contacto', href: 'contacto' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href)).filter(
      Boolean,
    )

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.55 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          type="button"
          className="navbar-brand"
          onClick={() => handleNavigate('inicio')}
        >
          Estudio Juridico Integral
        </button>

        <nav className="navbar-links navbar-links-desktop" aria-label="Navegacion principal">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavigate(link.href)}
              className={`nav-link ${activeSection === link.href ? 'is-active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="navbar-links navbar-links-mobile" aria-label="Navegacion movil">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavigate(link.href)}
              className={`nav-link ${activeSection === link.href ? 'is-active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
