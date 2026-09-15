import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { PROJECTS } from './projectsData.jsx'
import './ProjectsCarousel.css'

const TOTAL = PROJECTS.length
const INITIAL_COUNT = 4

function ProjectCard({ p, index, enterDelay }) {
  const { Mock } = p
  return (
    <article
      className={`pcard${enterDelay != null ? ' pcard--enter' : ''}`}
      style={enterDelay != null ? { animationDelay: `${enterDelay}ms` } : undefined}
      aria-label={`${index + 1} из ${TOTAL}: ${p.name}`}
    >
      <div className="pcard__media">
        <Mock />
      </div>

      <div className="pcard__body">
        <div className="pcard__top">
          <span className="pcard__num">{String(index + 1).padStart(2, '0')}</span>
          {p.kicker && <span className="pcard__kicker">{p.kicker}</span>}
        </div>

        <h3 className="pcard__name">{p.name}</h3>
        <p className="pcard__desc">{p.desc}</p>
        <p className="pcard__benefit">{p.benefit}</p>

        <div className="pcard__foot">
          {p.url ? (
            <a
              className="pcard__link"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Перейти к проекту: ${p.name}`}
            >
              <span>Перейти к проекту</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M7 17 17 7M9 7h8v8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <button
              type="button"
              className="pcard__link"
              disabled
              aria-disabled="true"
              aria-label={`Перейти к проекту: ${p.name}`}
            >
              <span>Перейти к проекту</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M7 17 17 7M9 7h8v8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default function ProjectsCarousel() {
  const [showAll, setShowAll] = useState(false)

  const initial = PROJECTS.slice(0, INITIAL_COUNT)
  const rest = PROJECTS.slice(INITIAL_COUNT)

  return (
    <section className="section pcarousel-section" id="all-projects">
      <div className="container pcarousel__container">
        <Reveal className="pcarousel__head">
          <p className="eyebrow">Каталог проектов</p>
          <h2 className="h2">Все проекты КазНМУ</h2>
          <p className="lead">
            12 проектов университета в области искусственного интеллекта,
            образования, медицины, науки и цифрового управления.
          </p>
        </Reveal>

        <Reveal className="pcarousel__bar">
          <span className="pcarousel__count">{TOTAL} проектов</span>
        </Reveal>

        <div className="pgrid">
          {initial.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}

          {showAll &&
            rest.map((p, i) => (
              <ProjectCard
                key={p.name}
                p={p}
                index={INITIAL_COUNT + i}
                enterDelay={i * 70}
              />
            ))}
        </div>

        {!showAll && (
          <div className="pgrid__toggle">
            <button
              type="button"
              className="pgrid__toggle-btn"
              onClick={() => setShowAll(true)}
            >
              <span>Показать все проекты</span>
              <svg className="pgrid__toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
