import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/insights', label: 'Insights', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand">
          Carol
        </Link>
        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-tools">
          <button type="button" aria-label="Language">
            <span className="material-symbols-outlined">translate</span>
          </button>
        </div>
      </div>
    </header>
  )
}
