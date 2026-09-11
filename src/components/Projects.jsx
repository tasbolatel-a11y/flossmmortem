import Reveal from './Reveal.jsx'
import { FEATURED_PROJECTS } from './projectsData.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal className="projects__head">
          <p className="eyebrow">Проекты</p>
          <h2 className="h2">Проекты КазНМУ</h2>
          <p className="lead">
            Пять ИИ-проектов университета, представленных в расширенном формате.
          </p>
          <span className="projects__count">
            {FEATURED_PROJECTS.length} проектов
          </span>
        </Reveal>
      </div>

      <div className="projects__list">
        {FEATURED_PROJECTS.map((p, i) => (
          <article
            className={`project${i % 2 ? ' project--flip' : ''}`}
            key={p.name}
          >
            <div className="container project__inner">
              <Reveal className="project__media">
                <div className="project__mock">
                  <p.Mock />
                </div>
                <div className="project__float">
                  <span className="project__float-k">{p.stat.k}</span>
                  <span className="project__float-t">{p.stat.t}</span>
                </div>
              </Reveal>

              <Reveal className="project__body" delay={80}>
                <span className="project__n">{String(i + 1).padStart(2, '0')}</span>
                <span className="project__kicker">{p.kicker}</span>
                <h3 className="project__title h3">{p.name}</h3>
                <p className="project__purpose">{p.purpose}</p>
                <ul className="project__features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="project__result">
                  <span>Результат</span>
                  {p.result}
                </p>
                <div className="project__meta">
                  <span
                    className={`badge${p.status.tone === 'done' ? ' badge--done' : ''}`}
                  >
                    <span className="badge__dot" />
                    {p.status.label}
                  </span>
                  <span className="project__term">{p.term}</span>
                </div>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
