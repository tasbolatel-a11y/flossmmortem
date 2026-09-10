import Reveal from './Reveal.jsx'
import './FinalCta.css'

const CONTACTS = [
  { icon: 'pin', label: 'г. Алматы, ул. Толе би, 94', href: null },
  { icon: 'phone', label: '+7 727 338 70 90', href: 'tel:+77273387090' },
  { icon: 'globe', label: 'www.kaznmu.kz', href: 'https://www.kaznmu.kz' },
  { icon: 'mail', label: 'it.dep@kaznmu.kz', href: 'mailto:it.dep@kaznmu.kz' },
]

const ICONS = {
  pin: 'M12 21s-7-6.4-7-11a7 7 0 0114 0c0 4.6-7 11-7 11z M12 10.5a2 2 0 100-4 2 2 0 000 4z',
  phone: 'M6.5 4h3l1.5 4-2 1.4a11 11 0 004.6 4.6L17 16l4 1.5v3a1.5 1.5 0 01-1.6 1.5A16.5 16.5 0 013 6.6 1.5 1.5 0 014.5 5z',
  globe: 'M12 3a9 9 0 100 18 9 9 0 000-18z M3.5 9h17 M3.5 15h17 M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3z',
  mail: 'M4 6h16v12H4z M4 7l8 6 8-6',
}

export default function FinalCta() {
  return (
    <section className="section finalcta" id="contacts">
      <div className="container">
        <Reveal className="finalcta__card">
          <p className="eyebrow eyebrow--light">Контакты</p>
          <h2 className="finalcta__title">
            Технологии, которые помогают учиться, преподавать и развиваться
          </h2>

          <div className="finalcta__row">
            <ul className="finalcta__contacts">
              {CONTACTS.map((c) => {
                const inner = (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d={ICONS[c.icon]}
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{c.label}</span>
                  </>
                )
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {inner}
                      </a>
                    ) : (
                      <span className="finalcta__static">{inner}</span>
                    )}
                  </li>
                )
              })}
            </ul>

            <a href="#projects" className="btn btn--outline-light finalcta__btn">
              Посмотреть проекты
              <svg className="btn__arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M3.75 9h10.5M9.75 4l4.5 5-4.5 5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
