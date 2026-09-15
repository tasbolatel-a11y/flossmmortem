import Reveal from './Reveal.jsx'
import './Overview.css'

const RESULTS = [
  { k: '12', t: 'ИИ-проектов КазНМУ' },
  { k: '5000+', t: 'студентов старших курсов охвачено' },
  { k: 'до 50%', t: 'меньше времени на выбор темы' },
  { k: '30%', t: 'меньше время ожидания ответа' },
  { k: '30%', t: 'меньше времени на перевод' },
  { k: '20%', t: 'выше доступность зарубежных источников' },
]

export default function Results() {
  return (
    <section className="section overview" id="results">
      <div className="container">
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
