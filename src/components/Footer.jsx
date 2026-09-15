import './Footer.css'

const NAV = [
  { label: 'Об AI-Sana', href: '#about-ai-sana' },
  { label: 'Этапы', href: '#stages' },
  { label: 'Проекты', href: '#all-projects' },
  { label: 'Контакты', href: '#contacts' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <a href="#top" className="site-footer__mark" aria-label="Наверх">
            <img src="/logo.svg" alt="Логотип КазНМУ" className="site-footer__emblem" />
            <span>
              <b>КазНМУ</b>
              Казахский национальный медицинский университет
              имени С.Д. Асфендиярова
            </span>
          </a>
          <p className="site-footer__note">Алматы — 2025 · Департамент цифровизации</p>
        </div>

        <nav className="site-footer__nav" aria-label="Разделы">
          <span className="site-footer__coltitle">Разделы</span>
          {NAV.map((i) => (
            <a key={i.href} href={i.href}>
              {i.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__contacts">
          <span className="site-footer__coltitle">Контакты</span>
          <p>г. Алматы, ул. Толе би, 94</p>
          <a href="tel:+77273387090">+7 727 338 70 90</a>
          <a href="https://www.kaznmu.kz" target="_blank" rel="noreferrer">
            www.kaznmu.kz
          </a>
          <a href="mailto:it.dep@kaznmu.kz">it.dep@kaznmu.kz</a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>
          © 2025 Казахский национальный медицинский университет имени
          С.Д. Асфендиярова
        </span>
        <span>AI-Sana · ИИ-проекты КазНМУ</span>
      </div>
    </footer>
  )
}
