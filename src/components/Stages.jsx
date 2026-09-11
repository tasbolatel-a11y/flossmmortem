import Reveal from './Reveal.jsx'
import './Stages.css'

const STAGES = [
  {
    n: '01',
    t: 'Обучение',
    d: 'Базовые навыки искусственного интеллекта для широкой аудитории — студентов, преподавателей и сотрудников.',
  },
  {
    n: '02',
    t: 'Углублённое обучение и предпринимательство',
    d: 'Продвинутые треки по ИИ и подготовка команд к созданию собственных технологических решений.',
  },
  {
    n: '03',
    t: 'Акселерация',
    d: 'Поддержка и масштабирование перспективных ИИ-проектов, использование опыта акселерации ведущих университетов.',
  },
]

export default function Stages() {
  return (
    <section className="section stages" id="stages">
      <div className="container">
        <Reveal className="stages__head">
          <p className="eyebrow">Этапы</p>
          <h2 className="h2">Поэтапная реализация программы</h2>
          <p className="lead">
            AI-Sana выстроена как последовательный путь: от базовой грамотности
            в области ИИ — к предпринимательству и акселерации проектов.
          </p>
        </Reveal>

        <ol className="stages__rail">
          {STAGES.map((s, i) => (
            <Reveal as="li" key={s.n} className="stage" delay={i * 110}>
              <div className="stage__top">
                <span className="stage__n">{s.n}</span>
                <span className="stage__dot" />
              </div>
              <h3 className="stage__t">{s.t}</h3>
              <p className="stage__d">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
