/*
  Lightweight SVG interface mock-ups for each project.
  Colours pull from the CSS palette via var(); text is Russian UI copy.
*/

function Window({ title, children, accent = 'var(--violet)' }) {
  return (
    <svg className="mock" viewBox="0 0 560 430" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="532" height="402" rx="22" fill="#fff" stroke="var(--line-strong)" />
      <rect x="14" y="14" width="532" height="52" rx="22" fill="var(--bg-raise)" />
      <rect x="14" y="44" width="532" height="22" fill="var(--bg-raise)" />
      <circle cx="40" cy="40" r="5" fill={accent} />
      <circle cx="58" cy="40" r="5" fill="var(--violet-soft)" />
      <circle cx="76" cy="40" r="5" fill="var(--line-strong)" />
      <text x="100" y="45" fontFamily="Onest, sans-serif" fontSize="14" fontWeight="600" fill="var(--ink-soft)">
        {title}
      </text>
      {children}
    </svg>
  )
}

function Bar({ x, y, w, h = 9, c = 'var(--line-strong)', r = 4.5 }) {
  return <rect x={x} y={y} width={w} height={h} rx={r} fill={c} />
}

export function TopicMasterMock() {
  return (
    <Window title="TopicMaster" accent="var(--wine)">
      <text x="42" y="108" fontFamily="Onest" fontSize="13" fontWeight="600" fill="var(--ink-faint)">
        НАПРАВЛЕНИЕ РАБОТЫ
      </text>
      <rect x="42" y="120" width="476" height="44" rx="12" fill="var(--bg-raise)" stroke="var(--line-strong)" />
      <text x="58" y="147" fontFamily="Onest" fontSize="15" fill="var(--ink)">
        Кардиология · дипломная работа
      </text>
      <rect x="386" y="182" width="132" height="40" rx="11" fill="var(--wine)" />
      <text x="452" y="207" textAnchor="middle" fontFamily="Onest" fontSize="14" fontWeight="600" fill="#fdf5ef">
        Сгенерировать
      </text>
      <text x="42" y="212" fontFamily="Onest" fontSize="13" fontWeight="600" fill="var(--ink-faint)">
        ПРЕДЛОЖЕННЫЕ ТЕМЫ
      </text>
      {[248, 306, 364].map((y, i) => (
        <g key={y}>
          <rect x="42" y={y} width="476" height="44" rx="12" fill="#fff" stroke="var(--line)" />
          <circle cx="66" cy={y + 22} r="9" fill="var(--violet-soft)" />
          <path
            d={`M66 ${y + 16.5}l1.6 3.4 3.7.5-2.7 2.6.7 3.7-3.3-1.8-3.3 1.8.7-3.7-2.7-2.6 3.7-.5z`}
            fill="var(--violet)"
          />
          <Bar x={88} y={y + 13} w={i === 1 ? 360 : 300} h={8} c="var(--ink-soft)" />
          <Bar x={88} y={y + 27} w={i === 2 ? 250 : 200} h={7} c="var(--line-strong)" />
        </g>
      ))}
    </Window>
  )
}

export function SearchMock() {
  return (
    <Window title="Поиск учебных материалов">
      <rect x="42" y="96" width="476" height="46" rx="23" fill="var(--bg-raise)" stroke="var(--line-strong)" />
      <circle cx="70" cy="119" r="8" fill="none" stroke="var(--violet)" strokeWidth="2.4" />
      <path d="M76 125l7 7" stroke="var(--violet)" strokeWidth="2.4" strokeLinecap="round" />
      <text x="92" y="124" fontFamily="Onest" fontSize="15" fill="var(--ink-soft)">
        фармакология · механизмы действия
      </text>
      <text x="42" y="176" fontFamily="Onest" fontSize="13" fontWeight="600" fill="var(--ink-faint)">
        РЕЛЕВАНТНОСТЬ
      </text>
      {[
        { y: 192, r: 470 },
        { y: 248, r: 360 },
        { y: 304, r: 300 },
        { y: 360, r: 230 },
      ].map((row) => (
        <g key={row.y}>
          <rect x="42" y={row.y} width="476" height="44" rx="12" fill="#fff" stroke="var(--line)" />
          <rect x="42" y={row.y} width="6" height="44" rx="3" fill="var(--violet)" />
          <Bar x={64} y={row.y + 12} w={row.r * 0.62} h={8} c="var(--ink-soft)" />
          <rect x="64" y={row.y + 27} width={row.r * 0.9} height="6" rx="3" fill="var(--violet-soft)" />
        </g>
      ))}
    </Window>
  )
}

export function TranslatorMock() {
  return (
    <Window title="ИИ-переводчик медицинских терминов" accent="var(--violet)">
      <rect x="42" y="92" width="230" height="300" rx="14" fill="var(--bg-raise)" stroke="var(--line-strong)" />
      <rect x="288" y="92" width="230" height="300" rx="14" fill="#fff" stroke="var(--line-strong)" />
      <text x="58" y="118" fontFamily="Onest" fontSize="12" fontWeight="700" fill="var(--ink-faint)">
        EN — ИСТОЧНИК
      </text>
      <text x="304" y="118" fontFamily="Onest" fontSize="12" fontWeight="700" fill="var(--wine)">
        RU — ПЕРЕВОД
      </text>
      {[150, 178, 206, 234, 262].map((y, i) => (
        <Bar key={y} x={58} y={y} w={i === 4 ? 120 : 196} c="var(--line-strong)" />
      ))}
      {[150, 178, 206, 234, 262].map((y, i) => (
        <Bar key={y} x={304} y={y} w={i === 4 ? 150 : 196} c="var(--violet-soft)" />
      ))}
      <circle cx="280" cy="242" r="22" fill="var(--violet)" />
      <path d="M272 242h16M281 235l7 7-7 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="58" y="322" width="196" height="48" rx="10" fill="#fff" stroke="var(--line)" />
      <text x="70" y="351" fontFamily="Onest" fontSize="13" fill="var(--ink-soft)">
        myocardial infarction
      </text>
      <rect x="304" y="322" width="200" height="48" rx="10" fill="var(--bg-raise)" stroke="var(--line)" />
      <text x="316" y="351" fontFamily="Onest" fontSize="13" fontWeight="600" fill="var(--wine)">
        инфаркт миокарда
      </text>
    </Window>
  )
}

export function TutorMock() {
  return (
    <Window title="ИИ-тьютор · подготовка к экзаменам" accent="var(--wine)">
      <rect x="60" y="96" width="440" height="180" rx="16" fill="var(--wine)" />
      <text x="82" y="128" fontFamily="Onest" fontSize="12" fontWeight="700" fill="#e8b7c4">
        КАРТОЧКА 7 / 20
      </text>
      <text x="82" y="164" fontFamily="Onest" fontSize="17" fontWeight="600" fill="#fdf5ef">
        Норма ЧСС у взрослого
      </text>
      <text x="82" y="192" fontFamily="Onest" fontSize="17" fontWeight="600" fill="#fdf5ef">
        в покое?
      </text>
      <rect x="82" y="214" width="150" height="38" rx="10" fill="rgba(253,245,239,0.16)" />
      <text x="157" y="238" textAnchor="middle" fontFamily="Onest" fontSize="13" fontWeight="600" fill="#fdf5ef">
        Показать ответ
      </text>
      <text x="60" y="312" fontFamily="Onest" fontSize="13" fontWeight="600" fill="var(--ink-faint)">
        УРОВЕНЬ АДАПТАЦИИ
      </text>
      <rect x="60" y="326" width="440" height="10" rx="5" fill="var(--line-strong)" />
      <rect x="60" y="326" width="286" height="10" rx="5" fill="var(--violet)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle
          key={i}
          cx={78 + i * 40}
          cy="372"
          r="11"
          fill={i < 3 ? 'var(--violet)' : '#fff'}
          stroke="var(--violet)"
          strokeWidth="2"
        />
      ))}
      <text x="250" y="377" fontFamily="Onest" fontSize="13" fill="var(--ink-soft)">
        серия правильных ответов
      </text>
    </Window>
  )
}

export function ChatbotCardMock() {
  return (
    <Window title="Чат-бот КазНМУ" accent="var(--wine)">
      <rect x="42" y="92" width="300" height="40" rx="14" fill="var(--bg-raise)" />
      <text x="60" y="117" fontFamily="Onest" fontSize="13" fill="var(--ink-soft)">
        Как продлить сессию в библиотеке?
      </text>
      <rect x="150" y="146" width="368" height="70" rx="14" fill="var(--wine)" />
      <Bar x={168} y={166} w={300} h={8} c="rgba(253,245,239,0.85)" />
      <Bar x={168} y={184} w={250} h={8} c="rgba(253,245,239,0.55)" />
      <rect x="42" y="230" width="300" height="40" rx="14" fill="var(--bg-raise)" />
      <text x="60" y="255" fontFamily="Onest" fontSize="13" fill="var(--ink-soft)">
        Где посмотреть расписание?
      </text>
      <rect x="150" y="284" width="368" height="52" rx="14" fill="var(--wine)" />
      <Bar x={168} y={304} w={330} h={8} c="rgba(253,245,239,0.85)" />
      <rect x="42" y="356" width="476" height="42" rx="21" fill="#fff" stroke="var(--line-strong)" />
      <text x="60" y="382" fontFamily="Onest" fontSize="13" fill="var(--ink-faint)">
        Сообщение…
      </text>
      <circle cx="496" cy="377" r="15" fill="var(--violet)" />
      <path d="M490 377h10M496 372l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Window>
  )
}

/** Phone with a chat dialogue — used in the dark band. */
export function PhoneMock() {
  return (
    <svg className="mock" viewBox="0 0 320 620" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="10" width="288" height="600" rx="46" fill="#140a0f" stroke="rgba(246,236,233,0.16)" />
      <rect x="28" y="22" width="264" height="576" rx="36" fill="#faf6ee" />
      <rect x="112" y="30" width="96" height="20" rx="10" fill="#140a0f" />
      {/* header */}
      <circle cx="60" cy="82" r="16" fill="var(--wine)" />
      <path d="M53 82a7 7 0 0114 0" stroke="#fdf5ef" strokeWidth="2" />
      <circle cx="60" cy="78" r="4" fill="#fdf5ef" />
      <text x="86" y="79" fontFamily="Onest" fontSize="14" fontWeight="700" fill="var(--ink)">
        Чат-бот КазНМУ
      </text>
      <text x="86" y="95" fontFamily="Onest" fontSize="11" fill="#3a8f5a">
        отвечает сразу
      </text>
      <line x1="28" y1="112" x2="292" y2="112" stroke="var(--line)" />
      {/* user bubble 1 */}
      <rect x="96" y="128" width="184" height="46" rx="16" fill="var(--wine)" />
      <text x="112" y="149" fontFamily="Onest" fontSize="11.5" fill="#fdf5ef">
        Когда начинается
      </text>
      <text x="112" y="164" fontFamily="Onest" fontSize="11.5" fill="#fdf5ef">
        зимняя сессия?
      </text>
      {/* bot bubble 1 */}
      <rect x="40" y="188" width="204" height="74" rx="16" fill="#fff" stroke="var(--line-strong)" />
      <text x="56" y="210" fontFamily="Onest" fontSize="11.5" fill="var(--ink)">
        Сессия — с 5 января.
      </text>
      <text x="56" y="226" fontFamily="Onest" fontSize="11.5" fill="var(--ink)">
        Расписание доступно
      </text>
      <text x="56" y="242" fontFamily="Onest" fontSize="11.5" fill="var(--ink)">
        в личном кабинете.
      </text>
      {/* user bubble 2 */}
      <rect x="86" y="278" width="194" height="46" rx="16" fill="var(--wine)" />
      <text x="102" y="299" fontFamily="Onest" fontSize="11.5" fill="#fdf5ef">
        Как получить справку
      </text>
      <text x="102" y="314" fontFamily="Onest" fontSize="11.5" fill="#fdf5ef">
        с места учёбы?
      </text>
      {/* bot bubble 2 */}
      <rect x="40" y="338" width="214" height="90" rx="16" fill="#fff" stroke="var(--line-strong)" />
      <text x="56" y="360" fontFamily="Onest" fontSize="11.5" fill="var(--ink)">
        Заявку можно оформить
      </text>
      <text x="56" y="376" fontFamily="Onest" fontSize="11.5" fill="var(--ink)">
        онлайн. Документ будет
      </text>
      <text x="56" y="392" fontFamily="Onest" fontSize="11.5" fill="var(--ink)">
        готов за 1 рабочий день.
      </text>
      <rect x="56" y="404" width="120" height="16" rx="8" fill="var(--violet-soft)" />
      {/* input */}
      <rect x="28" y="556" width="264" height="40" rx="20" fill="#fff" stroke="var(--line-strong)" />
      <text x="46" y="581" fontFamily="Onest" fontSize="12" fill="var(--ink-faint)">
        Ваш вопрос…
      </text>
      <circle cx="270" cy="576" r="14" fill="var(--violet)" />
      <path d="M264 576h11M270 570l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
