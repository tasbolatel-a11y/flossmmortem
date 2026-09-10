import { useEffect, useState } from 'react'
import './Header.css'

const NAV = [
  { label: 'О проектах', href: '#overview' },
  { label: 'ИИ-агенты', href: '#projects' },
  { label: 'Результаты', href: '#results' },
  { label: 'Сроки', href: '#timeline' },
  { label: 'Контакты', href: '#contacts' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
  <div className="site-header__inner">
    <a
      href="#top"
      className="brand"
      aria-label="КазНМУ им. С.Д. Асфендиярова — на главную"
    >
      <img
        src="/logo.svg"
        alt="Логотип КазНМУ"
        className="brand__emblem"
      />

      <span className="brand__text">
        <b>КазНМУ</b>
        <span>им. С.Д. Асфендиярова</span>
      </span>
    </a>

    <nav className="site-nav" aria-label="Основная навигация">
      {NAV.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="site-nav__link"
        >
          {item.label}
        </a>
      ))}
    </nav>

    <div className="site-header__actions">
      <a
        href="#projects"
        className="btn btn--primary btn--sm header-cta"
      >
        Посмотреть проекты
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`nav-toggle__glyph${open ? ' is-open' : ''}`}
          aria-hidden="true"
        >
          <span />
          <span />
        </span>

        <span className="nav-toggle__label">
          {open ? 'Закрыть' : 'Меню'}
        </span>
      </button>
    </div>
  </div>

  <div
    id="mobile-nav"
    className={`mobile-nav${open ? ' is-open' : ''}`}
    hidden={!open}
  >
    <nav aria-label="Мобильная навигация">
      {NAV.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="mobile-nav__link"
          onClick={() => setOpen(false)}
        >
          {item.label}
        </a>
      ))}
    </nav>

    <a
      href="#projects"
      className="btn btn--primary mobile-nav__cta"
      onClick={() => setOpen(false)}
    >
      Посмотреть проекты
    </a>
  </div>
</header>
  )
}
