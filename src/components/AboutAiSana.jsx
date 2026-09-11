import { useEffect, useRef } from 'react'
import Reveal from './Reveal.jsx'
import aiSanaPhoto from '../assets/photos/ai-sana.png'
import './AboutAiSana.css'

const DIRECTIONS = [
  {
    n: '01',
    t: 'Базовые навыки ИИ',
    d: 'Базовые навыки искусственного интеллекта для широкой аудитории.',
  },
  {
    n: '02',
    t: 'Углублённое обучение',
    d: 'Углублённое обучение и предпринимательство на основе искусственного интеллекта.',
  },
  {
    n: '03',
    t: 'Бизнес-акселерация',
    d: 'Акселерация и масштабирование перспективных ИИ-проектов.',
  },
]

export default function AboutAiSana() {
  const figRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 921px)')
    if (!mq.matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const el = figRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const rel = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
        el.style.setProperty('--shift', `${(-rel * 26).toFixed(1)}px`)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="section about-ai" id="about-ai-sana">
      <div className="container about-ai__grid">
        <Reveal className="about-ai__media">
          <figure className="about-ai__figure" ref={figRef}>
            <img
              src={aiSanaPhoto}
              alt="Национальная инициатива AI-Sana — акселерационная программа по искусственному интеллекту"
              width="1086"
              height="1448"
              loading="lazy"
            />
            <span className="about-ai__duotone" aria-hidden="true" />
          </figure>
        </Reveal>

        <div className="about-ai__content">
          <Reveal>
            <p className="eyebrow">О программе</p>
            <h2 className="h2">Что такое AI-Sana</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lead">
              Проект объединяет вузы, научные центры, отраслевых партнёров
              и государственные органы, формируя единую экосистему знаний,
              исследований и технологического предпринимательства.
            </p>
            <p className="about-ai__text">
              На платформе представлены направления обучения, этапы акселерации,
              научные треки и возможности участия для студентов, преподавателей
              и организаций.
            </p>
          </Reveal>

          <div className="about-ai__directions-wrap" id="directions">
            <Reveal as="p" className="about-ai__dir-label" delay={100}>
              Основные направления AI-Sana
            </Reveal>
            <ol className="about-ai__directions">
              {DIRECTIONS.map((item, i) => (
                <Reveal as="li" key={item.n} className="dir" delay={120 + i * 90}>
                  <span className="dir__n">{item.n}</span>
                  <div>
                    <h3 className="dir__t">{item.t}</h3>
                    <p className="dir__d">{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
