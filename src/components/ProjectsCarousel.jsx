import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { PROJECTS } from './projectsData.jsx'
import './ProjectsCarousel.css'

const TOTAL = PROJECTS.length
const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* rAF tween — native `behavior: "smooth"` is unreliable in some embedded
   browsers, so animate scrollLeft ourselves. `onStep` is invoked as the
   scroll position changes (programmatic scrollLeft writes don't always emit
   a "scroll" event in every environment). */
function animateScrollLeft(el, to, onStep, duration = 420) {
  const max = el.scrollWidth - el.clientWidth
  const target = Math.max(0, Math.min(max, to))
  const done = () => {
    el.scrollLeft = target
    onStep && onStep()
  }
  if (reduceMotion() || duration <= 0) {
    done()
    return
  }
  const start = el.scrollLeft
  const delta = target - start
  if (Math.abs(delta) < 1) {
    onStep && onStep()
    return
  }
  const t0 = performance.now()
  if (el._tween) cancelAnimationFrame(el._tween)
  if (el._tweenFallback) clearTimeout(el._tweenFallback)
  el._tweenFallback = setTimeout(() => {
    if (el._tween) cancelAnimationFrame(el._tween)
    done()
  }, duration + 140)
  const tick = (now) => {
    const p = Math.min(1, (now - t0) / duration)
    const eased = 1 - Math.pow(1 - p, 3)
    el.scrollLeft = start + delta * eased
    onStep && onStep()
    if (p < 1) {
      el._tween = requestAnimationFrame(tick)
    } else {
      clearTimeout(el._tweenFallback)
    }
  }
  el._tween = requestAnimationFrame(tick)
}

function ProjectCard({ p, index, active }) {
  const { Mock } = p
  return (
    <article
      className={`pcard${active ? ' is-active' : ''}`}
      aria-roledescription="слайд"
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
  const scrollerRef = useRef(null)
  const stepRef = useRef(1)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const measureStep = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector('.pcard')
    const track = el.querySelector('.pcarousel__track')
    if (!card || !track) return
    const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0
    stepRef.current = Math.max(1, card.getBoundingClientRect().width + gap)
  }, [])

  const sync = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const left = el.scrollLeft
    setAtStart(left <= 2)
    setAtEnd(left >= max - 2)
    setProgress(max > 0 ? left / max : 0)
    setActive(Math.max(0, Math.min(TOTAL - 1, Math.round(left / (stepRef.current || 1)))))
  }, [])

  const scrollByStep = useCallback(
    (dir) => {
      const el = scrollerRef.current
      if (!el) return
      measureStep()
      animateScrollLeft(el, el.scrollLeft + dir * stepRef.current, sync)
    },
    [measureStep, sync],
  )

  /* interaction wiring — native listeners keep the scroll container clean */
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    measureStep()
    sync()

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      Promise.resolve().then(() => {
        ticking = false
        sync()
      })
    }
    const onResize = () => {
      measureStep()
      sync()
    }
    const onKey = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        scrollByStep(1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        scrollByStep(-1)
      } else if (e.key === 'Home') {
        e.preventDefault()
        animateScrollLeft(el, 0, sync)
      } else if (e.key === 'End') {
        e.preventDefault()
        animateScrollLeft(el, el.scrollWidth, sync)
      }
    }

    /* mouse drag-to-scroll (touch uses native scrolling) */
    let dragging = false
    let startX = 0
    let startLeft = 0
    const onPointerDown = (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return
      dragging = true
      startX = e.clientX
      startLeft = el.scrollLeft
      el.classList.add('is-dragging')
    }
    const onPointerMove = (e) => {
      if (!dragging) return
      el.scrollLeft = startLeft - (e.clientX - startX)
      sync()
    }
    const stopDrag = () => {
      if (!dragging) return
      dragging = false
      el.classList.remove('is-dragging')
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    el.addEventListener('keydown', onKey)
    el.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerup', stopDrag, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      el.removeEventListener('scroll', onScroll)
      el.removeEventListener('keydown', onKey)
      el.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', stopDrag)
      window.removeEventListener('resize', onResize)
    }
  }, [measureStep, sync, scrollByStep])

  return (
    <section className="section pcarousel-section" id="all-projects">
      <div className="container">
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
          <div className="pcarousel__nav">
            <span className="pcarousel__index" aria-live="polite">
              {String(active + 1).padStart(2, '0')}
              <span> / {String(TOTAL).padStart(2, '0')}</span>
            </span>
            <button
              type="button"
              className="pcarousel__arrow"
              onClick={() => scrollByStep(-1)}
              disabled={atStart}
              aria-label="Предыдущий проект"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="pcarousel__arrow"
              onClick={() => scrollByStep(1)}
              disabled={atEnd}
              aria-label="Следующий проект"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>

      <div
        className="pcarousel__viewport"
        ref={scrollerRef}
        role="region"
        aria-roledescription="карусель"
        aria-label="Все проекты КазНМУ"
        tabIndex={0}
      >
        <div className="pcarousel__track">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} active={i === active} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="pcarousel__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(0.04, progress || 0.04)})` }} />
        </div>
      </div>
    </section>
  )
}
