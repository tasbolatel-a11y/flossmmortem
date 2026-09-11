import Reveal from './Reveal.jsx'
import { PhoneMock } from './mockups.jsx'
import './ChatbotBand.css'

const POINTS = [
  'Автоматизация взаимодействия студентов с вузом',
  'Снижение нагрузки на сотрудников',
  'Сокращение времени ожидания ответа на 30%',
]

export default function ChatbotBand() {
  return (
    <section className="chatband" id="chatbot">
      <div className="container chatband__inner">
        <Reveal className="chatband__art">
          <PhoneMock />
        </Reveal>

        <Reveal className="chatband__body" delay={90}>
          <p className="eyebrow eyebrow--light">Реализованный проект · Чат-бот</p>
          <h2 className="chatband__title">
            Связь с университетом без долгого ожидания
          </h2>
          <p className="chatband__lead">
            Чат-бот автоматизирует взаимодействие студентов с вузом и снимает
            рутинную нагрузку с сотрудников: ответы на типовые вопросы приходят
            сразу, без очередей.
          </p>
          <ul className="chatband__points">
            {POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="chatband__foot">
            <span className="badge badge--done">
              <span className="badge__dot" />
              Проект реализован
            </span>
            <a href="#contacts" className="btn btn--outline-light">
              Связаться с университетом
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
