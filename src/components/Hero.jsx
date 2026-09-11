import { useEffect, useRef } from 'react'
import heroPhoto from '../assets/photos/hero-kaznmu.jpg'
import heroPhotoWide from '../assets/photos/hero-kaznmu-wide.jpg'
import './Hero.css'

const CARDS = [
  { k: '12', t: 'проектов КазНМУ', d: 'в программе AI-Sana' },
  { k: '6', t: 'подтверждённых', d: 'по паспортам проектов' },
  { k: '3', t: 'направления AI-Sana', d: 'обучение → акселерация' },
  { k: 'KZ · RU · EN', t: 'три языка', d: 'сервисы для студентов' },
]

const TITLE_LINES = ['AI-Sana —', 'трамплин технологий']

export default function Hero() {
  const figRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.08, 60)
        if (figRef.current) figRef.current.style.setProperty('--py', `${shift}px`)
        raf = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__photo" ref={figRef}>
        <img
          src={heroPhoto}
          srcSet={`${heroPhotoWide} 1600w, ${heroPhoto} 1440w`}
          sizes="100vw"
          alt="Студенты и преподаватели Казахского национального медицинского университета им. С.Д. Асфендиярова в лекционной аудитории"
          width="1600"
          height="1200"
          loading="eager"
          fetchpriority="high"
        />
        <div className="hero__scrim" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow hero__rise" style={{ '--d': '0ms' }}>
            Национальная инициатива
          </p>

          <h1 className="hero__title">
            {TITLE_LINES.map((line, i) => (
              <span className="hero__line" key={line}>
                <span style={{ '--d': `${120 + i * 130}ms` }}>{line}</span>
              </span>
            ))}
          </h1>

          <p className="hero__lead hero__rise" style={{ '--d': '440ms' }}>
            Стратегический проект по внедрению искусственного интеллекта
            в систему высшего и научного образования Казахстана.
          </p>
          <p className="hero__extra hero__rise" style={{ '--d': '560ms' }}>
            Цель — подготовить новое поколение специалистов, способных создавать
            и внедрять ИИ-решения в энергетику, агропромышленный комплекс, водное
            хозяйство и цифровое управление.
          </p>

          <div className="hero__actions hero__rise" style={{ '--d': '680ms' }}>
            <a href="#about-ai-sana" className="btn btn--primary">
              Узнать об AI-Sana
              <svg className="btn__arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 3.75v10.5M4 9l5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#projects" className="btn btn--hero-ghost">
              Смотреть проекты
              <svg className="btn__arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3.75 9h10.5M9.75 4l4.5 5-4.5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <ul className="hero__cards hero__rise" style={{ '--d': '820ms' }} aria-label="Ключевые показатели программы">
          {CARDS.map((c) => (
            <li key={c.t} className="hcard">
              <span className="hcard__k">{c.k}</span>
              <span className="hcard__t">{c.t}</span>
              <span className="hcard__d">{c.d}</span>
            </li>
          ))}
        </ul>
      </div>

      <a className="hero__scroll" href="#about-ai-sana" aria-label="Листать вниз">
        <span />
      </a>
    </section>
  )
}
