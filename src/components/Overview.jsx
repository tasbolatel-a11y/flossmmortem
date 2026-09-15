import Reveal from './Reveal.jsx'
import { FEATURED_PROJECTS } from './projectsData.jsx'
import './Overview.css'

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
          {FEATURED_PROJECTS.map((p, i) => (
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
    </section>
  )
}
