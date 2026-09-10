import Reveal from './Reveal.jsx'
import './Overview.css'

const DIRECTIONS = [
  {
    t: 'Автоматизация обучения',
    d: 'Генерация тем работ и подготовка к экзаменам без ручной рутины.',
    p: 'TopicMaster · ИИ-тьютор',
  },
  {
    t: 'Поддержка студентов',
    d: 'Быстрый доступ к нужным учебным материалам и подсказкам.',
    p: 'ИИ-помощник по материалам',
  },
  {
    t: 'Перевод медицинских терминов',
    d: 'Понятный перевод сложных терминов и зарубежных статей.',
    p: 'ИИ-переводчик терминов',
  },
  {
    t: 'Взаимодействие с вузом',
    d: 'Ответы на типовые вопросы студентов без очередей и ожидания.',
    p: 'Чат-бот',
  },
]

const RESULTS = [
  { k: '5', t: 'проектов на базе ИИ' },
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
          <p className="eyebrow">О проектах</p>
          <h2 className="h2">
            Цифровые ассистенты для обучения, поддержки и коммуникации
          </h2>
          <p className="lead">
            Казахский национальный медицинский университет им. С.Д. Асфендиярова
            развивает пять проектов на основе искусственного интеллекта. Все они
            работают в четырёх направлениях повседневной жизни университета.
          </p>
        </Reveal>

        <ul className="overview__grid">
          {DIRECTIONS.map((item, i) => (
            <Reveal as="li" key={item.t} className="dircard" delay={i * 70}>
              <span className="dircard__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="dircard__title">{item.t}</h3>
              <p className="dircard__text">{item.d}</p>
              <span className="dircard__proj">{item.p}</span>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="container results" id="results">
        <Reveal className="results__head">
          <p className="eyebrow">Результаты</p>
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
