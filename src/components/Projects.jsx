import Reveal from './Reveal.jsx'
import {
  TopicMasterMock,
  SearchMock,
  TranslatorMock,
  TutorMock,
  ChatbotCardMock,
} from './mockups.jsx'
import './Projects.css'

const PROJECTS = [
  {
    n: '01',
    name: 'TopicMaster',
    kicker: 'Генератор тем работ',
    purpose:
      'ИИ-генератор тем для научных и квалификационных работ студентов старших курсов.',
    features: [
      'Генерирует темы для курсовых, дипломных и диссертационных работ',
      'Помогает быстро определиться с направлением исследования',
    ],
    result:
      'Сокращение времени на выбор темы на 50%. Охват — более 5000 студентов старших курсов.',
    term: 'Срок реализации — сентябрь 2025 года',
    status: { label: 'Реализуется в 2025 году', done: false },
    stat: { k: '−50%', t: 'времени на выбор темы' },
    Mock: TopicMasterMock,
  },
  {
    n: '02',
    name: 'ИИ-помощник для поиска учебных материалов',
    kicker: 'Интеллектуальный поиск',
    purpose: 'Быстрый поиск нужных учебных материалов по запросу.',
    features: [
      'Быстрый поиск учебных материалов',
      'Предлагает наиболее релевантные материалы',
    ],
    result: 'Экономия времени студентов и преподавателей.',
    term: 'Срок реализации — сентябрь 2025 года',
    status: { label: 'Реализуется в 2025 году', done: false },
    stat: { k: 'сент. 2025', t: 'срок реализации' },
    Mock: SearchMock,
  },
  {
    n: '03',
    name: 'ИИ-переводчик медицинских терминов',
    kicker: 'Перевод терминов',
    purpose: 'Перевод сложных медицинских терминов и целых статей.',
    features: [
      'Переводит сложные медицинские термины и статьи',
      'Повышает доступность зарубежных источников',
    ],
    result:
      'Снижение времени на перевод на 30%. Доступность зарубежных источников выше на 20%.',
    term: 'Срок реализации — декабрь 2025 года',
    status: { label: 'Реализуется в 2025 году', done: false },
    stat: { k: '−30%', t: 'времени на перевод' },
    Mock: TranslatorMock,
  },
  {
    n: '04',
    name: 'ИИ-тьютор для подготовки к экзаменам',
    kicker: 'Тесты и карточки',
    purpose: 'Подготовка к экзаменам с тестовыми вопросами и карточками для запоминания.',
    features: [
      'Создаёт тестовые вопросы и карточки для запоминания',
      'Адаптирует вопросы под уровень знаний студента',
    ],
    result: 'Повышение успеваемости студентов.',
    term: 'Срок реализации — декабрь 2025 года',
    status: { label: 'Реализуется в 2025 году', done: false },
    stat: { k: 'дек. 2025', t: 'срок реализации' },
    Mock: TutorMock,
  },
  {
    n: '05',
    name: 'Чат-бот',
    kicker: 'Взаимодействие с вузом',
    purpose: 'Автоматизация взаимодействия студентов с университетом.',
    features: [
      'Отвечает на типовые вопросы студентов',
      'Снижает нагрузку на сотрудников',
    ],
    result: 'Сокращение времени ожидания ответа на 30%. Подробнее — в разделе ниже.',
    term: 'Проект реализован',
    status: { label: 'Реализован', done: true },
    stat: { k: '−30%', t: 'времени ожидания' },
    Mock: ChatbotCardMock,
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal className="projects__head">
          <p className="eyebrow">ИИ-агенты</p>
          <h2 className="h2">Пять проектов КазНМУ</h2>
          <p className="lead">
            Каждый проект решает конкретную задачу университета — от выбора темы
            работы до общения с деканатом.
          </p>
        </Reveal>
      </div>

      <div className="projects__list">
        {PROJECTS.map((p, i) => (
          <article
            className={`project${i % 2 ? ' project--flip' : ''}`}
            key={p.n}
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
                <span className="project__n">{p.n}</span>
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
                    className={`badge${p.status.done ? ' badge--done' : ''}`}
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
