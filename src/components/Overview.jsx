import Reveal from './Reveal.jsx'
import { PROJECTS } from './projectsData.jsx'
import './Overview.css'

const RESULTS = [
  { k: '12', t: 'ИИ-проектов КазНМУ' },
  { k: '5000+', t: 'студентов старших курсов охвачено' },
  { k: 'до 50%', t: 'меньше времени на выбор темы' },
  { k: '30%', t: 'меньше время ожидания ответа' },
  { k: '30%', t: 'меньше времени на перевод' },
  { k: '20%', t: 'выше доступность зарубежных источников' },
]

export default function Overview() {
  return (
    <section className="section overview" id="overview">
      <div className="container">
        <Reveal className="overview__head">
          <p className="eyebrow">КазНМУ в AI-Sana</p>
          <h2 className="h2">
            Цифровые ассистенты для обучения, поддержки и коммуникации
          </h2>
          <p className="lead">
            Проекты университета в рамках AI-Sana — от помощи студентам
            и перевода терминов до научной аналитики и цифрового управления.
          </p>
        </Reveal>

        <ul className="overview__grid">
          {PROJECTS.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              className="dircard"
              delay={(i % 4) * 50}
            >
              <span className="dircard__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="dircard__title">{p.name}</h3>
              <p className="dircard__text">{p.short}</p>
              {p.kicker && <span className="dircard__proj">{p.kicker}</span>}
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="container results" id="results">
        <Reveal className="results__head">
          <p className="eyebrow">Первые результаты</p>
          <h2 className="h3">Что уже дают проекты</h2>
        </Reveal>
        <dl className="results__grid">
          {RESULTS.map((r, i) => (
            <Reveal as="div" key={r.t} className="stat" delay={i * 55}>
              <dt className="stat__k">{r.k}</dt>
              <dd className="stat__t">{r.t}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
