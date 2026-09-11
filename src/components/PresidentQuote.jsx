import Reveal from './Reveal.jsx'
import tokayevPhoto from '../assets/photos/tokayev.jpg'
import './PresidentQuote.css'

export default function PresidentQuote() {
  return (
    <section className="pquote" id="president" aria-label="Цитата Президента Республики Казахстан">
      <div className="pquote__glow" aria-hidden="true" />
      <div className="container pquote__grid">
        <Reveal className="pquote__figure-wrap">
          <figure className="pquote__figure">
            <img
              src={tokayevPhoto}
              alt="Президент Республики Казахстан Касым-Жомарт Токаев"
              width="698"
              height="580"
              loading="lazy"
            />
            <figcaption className="pquote__caption">
              <span className="pquote__name">Касым-Жомарт Токаев</span>
              <span className="pquote__role">Президент Республики Казахстан</span>
              <span className="pquote__source">Фото: Акорда</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="pquote__body" delay={90}>
          <span className="pquote__mark" aria-hidden="true">&ldquo;</span>
          <blockquote className="pquote__text" cite="https://www.akorda.kz">
            <p>
              Отечественные и международные образовательные программы в сфере
              ИИ-технологий могут внести вклад в укрепление кадрового потенциала
              нашей страны. Поручаю Правительству проработать вопрос поэтапной
              реализации программы AI-Sana для подготовки специалистов в области
              искусственного интеллекта. Программа должна способствовать
              формированию динамичной экосистемы, объединяющей обучение,
              исследования и разработку стартапов. Необходимо использовать опыт
              акселерации ведущих мировых университетов. Предстоит донести до
              каждого жителя Казахстана пользу искусственного интеллекта,
              объяснить, для чего он нужен и как его правильно применять.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
