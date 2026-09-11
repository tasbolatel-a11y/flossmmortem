import Reveal from './Reveal.jsx'
import './Timeline.css'

const MILESTONES = [
  {
    when: 'Сентябрь 2025',
    items: ['TopicMaster', 'ИИ-помощник для поиска учебных материалов'],
    done: false,
  },
  {
    when: 'Декабрь 2025',
    items: ['ИИ-переводчик медицинских терминов', 'ИИ-тьютор для подготовки к экзаменам'],
    done: false,
  },
  {
    when: 'Реализован',
    items: ['Чат-бот'],
    done: true,
  },
]

export default function Timeline() {
  return (
    <section className="section timeline" id="timeline">
      <div className="container">
        <Reveal className="timeline__head">
          <p className="eyebrow">Сроки</p>
          <h2 className="h2">Сроки первых проектов</h2>
          <p className="lead">
            Первая волна ИИ-проектов КазНМУ реализуется в 2025 году. Сроки более
            новых решений указаны в карточках выше.
          </p>
        </Reveal>

        <div className="timeline__grid">
          <Reveal className="timeline__rail">
            {MILESTONES.map((m, i) => (
              <div className={`node${m.done ? ' node--done' : ''}`} key={m.when}>
                <span className="node__dot" />
                <span className="node__when">{m.when}</span>
                <ul className="node__items">
                  {m.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                {i < MILESTONES.length - 1 && <span className="node__line" />}
              </div>
            ))}
          </Reveal>

          <Reveal className="timeline__roles" delay={90}>
            <div className="rolecard">
              <span className="rolecard__label">Ответственный</span>
              <span className="rolecard__value">Проректор У.М. Датхаев</span>
            </div>
            <div className="rolecard">
              <span className="rolecard__label">Исполнитель</span>
              <span className="rolecard__value">Департамент цифровизации</span>
            </div>
            <div className="rolecard rolecard--muted">
              <span className="rolecard__label">Период</span>
              <span className="rolecard__value">2025 год — все проекты</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
