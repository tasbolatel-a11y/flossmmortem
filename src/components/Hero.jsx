import { useEffect, useRef } from 'react'
import heroPhoto from '../assets/photos/hero-kaznmu.jpg'
import heroPhotoWide from '../assets/photos/hero-kaznmu-wide.jpg'
import './Hero.css'

const CARDS = [
  { k: '5', t: 'ИИ-проектов', d: 'единая программа' },
  { k: '5000+', t: 'студентов', d: 'охват старших курсов' },
  { k: 'до 50%', t: 'экономии времени', d: 'на рутинных задачах' },
  { k: '2025', t: 'год реализации', d: 'все проекты' },
]

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
          <p className="hero__eyebrow">Казахский национальный медицинский университет им. С.Д. Асфендиярова</p>
          <h1 className="hero__title">ИИ-агенты для современного ВУЗа</h1>
          <p className="hero__lead">
            Цифровые решения КазНМУ для автоматизации обучения, поддержки студентов
            и эффективного взаимодействия с университетом.
          </p>
          <a href="#projects" className="btn btn--primary hero__cta">
            Изучить проекты
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

        <ul className="hero__cards" aria-label="Ключевые показатели программы">
          {CARDS.map((c) => (
            <li key={c.t} className="hcard">
              <span className="hcard__k">{c.k}</span>
              <span className="hcard__t">{c.t}</span>
              <span className="hcard__d">{c.d}</span>
            </li>
          ))}
        </ul>
      </div>

      <a className="hero__scroll" href="#overview" aria-label="Листать вниз">
        <span />
      </a>
    </section>
  )
}
