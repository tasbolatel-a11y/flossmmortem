/*
  SVG interface mock-ups for the AI-Sana project cards (projects 6–12).
  Same visual language as mockups.jsx: light "window" panels, violet accents,
  Russian UI copy, colours from CSS variables. No embedded photos.
*/

function Frame({ title, accent = 'var(--violet)', children }) {
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

const B = ({ x, y, w, h = 9, c = 'var(--line-strong)', r = 4.5 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={c} />
)

const Label = ({ x, y, children, fill = 'var(--ink-faint)' }) => (
  <text x={x} y={y} fontFamily="Onest" fontSize="13" fontWeight="600" fill={fill} letterSpacing="0.04em">
    {children}
  </text>
)

/* 6 — ANaMED Info: multilingual document assistant with cited sources */
export function AnamedInfoMock() {
  return (
    <Frame title="ANaMED Info" accent="var(--wine)">
      <rect x="42" y="92" width="320" height="38" rx="14" fill="var(--bg-raise)" />
      <text x="58" y="116" fontFamily="Onest" fontSize="13" fill="var(--ink-soft)">
        Қашан басталады қысқы сессия?
      </text>
      <rect x="150" y="146" width="368" height="96" rx="16" fill="var(--wine)" />
      <B x={168} y={166} w={330} h={8} c="rgba(246,242,251,0.9)" />
      <B x={168} y={184} w={300} h={8} c="rgba(246,242,251,0.6)" />
      <B x={168} y={202} w={250} h={8} c="rgba(246,242,251,0.45)" />
      <Label x={168} y={230} fill="rgba(246,242,251,0.85)">ИСТОЧНИК · Академ. календарь, п. 4.2</Label>
      <Label x="42" y="280">ЯЗЫК ОТВЕТА</Label>
      {['KZ', 'RU', 'EN'].map((l, i) => (
        <g key={l}>
          <rect x={42 + i * 74} y="292" width="64" height="34" rx="10" fill={i === 0 ? 'var(--violet)' : '#fff'} stroke="var(--violet)" strokeWidth="1.6" />
          <text x={42 + i * 74 + 32} y="314" textAnchor="middle" fontFamily="Onest" fontSize="13" fontWeight="700" fill={i === 0 ? '#fff' : 'var(--violet)'}>
            {l}
          </text>
        </g>
      ))}
      <rect x="42" y="350" width="476" height="44" rx="14" fill="#fff" stroke="var(--line-strong)" />
      <text x="58" y="377" fontFamily="Onest" fontSize="13" fill="var(--ink-faint)">Спросить по документам…</text>
    </Frame>
  )
}

/* 7 — ANaMED CARES: independent appeal scoring, accuracy gauge */
export function AnamedCaresMock() {
  const r = 46
  const c = 2 * Math.PI * r
  return (
    <Frame title="ANaMED CARES" accent="var(--wine)">
      <Label x="42" y="104">НЕЗАВИСИМАЯ ОЦЕНКА АПЕЛЛЯЦИИ</Label>
      <circle cx="120" cy="200" r={r} fill="none" stroke="var(--line-strong)" strokeWidth="14" />
      <circle
        cx="120" cy="200" r={r} fill="none" stroke="var(--violet)" strokeWidth="14"
        strokeLinecap="round" strokeDasharray={`${c * 0.89} ${c}`} transform="rotate(-90 120 200)"
      />
      <text x="120" y="196" textAnchor="middle" fontFamily="Onest" fontSize="30" fontWeight="700" fill="var(--ink)">89%</text>
      <text x="120" y="218" textAnchor="middle" fontFamily="Onest" fontSize="12" fill="var(--ink-faint)">точность</text>
      {[
        ['16 452', 'критериальных записи'],
        ['46', 'дисциплин'],
        ['r = 0,914', 'корреляция Пирсона'],
      ].map(([k, t], i) => (
        <g key={t} transform={`translate(232 ${150 + i * 46})`}>
          <text x="0" y="0" fontFamily="Onest" fontSize="18" fontWeight="700" fill="var(--wine)">{k}</text>
          <text x="0" y="18" fontFamily="Onest" fontSize="12" fill="var(--ink-soft)">{t}</text>
        </g>
      ))}
      <rect x="42" y="300" width="476" height="1" fill="var(--line)" />
      <Label x="42" y="332">РЕЖИМ</Label>
      <text x="42" y="360" fontFamily="Onest" fontSize="14" fill="var(--ink)">Инструмент эксперта · тренажёр подготовки</text>
    </Frame>
  )
}

/* 8 — OlympiadPro: online olympiad platform with AI proctoring */
export function OlympiadProMock() {
  return (
    <Frame title="OlympiadPro" accent="var(--wine)">
      <Label x="42" y="102">ЦИФРОВОЙ ПРОКТОРИНГ</Label>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={42 + (i % 2) * 120} y={114 + Math.floor(i / 2) * 92} width="104" height="76" rx="10" fill="var(--bg-raise)" stroke="var(--line-strong)" />
          <circle cx={42 + (i % 2) * 120 + 52} cy={114 + Math.floor(i / 2) * 92 + 30} r="14" fill="var(--violet-soft)" />
          <rect x={42 + (i % 2) * 120 + 24} y={114 + Math.floor(i / 2) * 92 + 52} width="56" height="7" rx="3.5" fill="var(--line-strong)" />
          <circle cx={42 + (i % 2) * 120 + 92} cy={114 + Math.floor(i / 2) * 92 + 12} r="4" fill="#3a8f5a" />
        </g>
      ))}
      <rect x="292" y="114" width="226" height="184" rx="12" fill="#fff" stroke="var(--line-strong)" />
      <Label x="312" y="140">AI-ГЕНЕРАЦИЯ ВОПРОСА</Label>
      <B x={312} y={156} w={186} h={8} c="var(--ink-soft)" />
      <B x={312} y={174} w={160} h={8} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="320" cy={202 + i * 22} r="6" fill={i === 1 ? 'var(--violet)' : '#fff'} stroke="var(--violet)" strokeWidth="1.6" />
          <B x={336} y={198 + i * 22} w={i === 1 ? 150 : 120} h={7} c="var(--line-strong)" />
        </g>
      ))}
      <rect x="42" y="322" width="476" height="72" rx="12" fill="var(--bg-raise)" />
      <text x="60" y="352" fontFamily="Onest" fontSize="15" fontWeight="700" fill="var(--wine)">247 участников · 3 страны · 3 языка</text>
      <text x="60" y="374" fontFamily="Onest" fontSize="12" fill="var(--ink-soft)">Пилот секции «Иммунология», 17 апреля 2026</text>
    </Frame>
  )
}

/* 9 — Virtual Microbiology Lab */
export function MicroLabMock() {
  return (
    <Frame title="Virtual Microbiology Lab">
      <Label x="42" y="104">ВИРТУАЛЬНАЯ ПРАКТИКА</Label>
      <circle cx="170" cy="238" r="96" fill="var(--bg-raise)" stroke="var(--line-strong)" />
      <circle cx="170" cy="238" r="96" fill="none" stroke="var(--violet)" strokeWidth="3" strokeDasharray="4 8" opacity="0.5" />
      {[[150, 210], [196, 232], [162, 268], [206, 200], [140, 250], [188, 276]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 2 ? 9 : 6} fill="var(--violet)" opacity={0.35 + i * 0.1} />
      ))}
      <rect x="300" y="150" width="218" height="176" rx="12" fill="#fff" stroke="var(--line-strong)" />
      <Label x="320" y="178">ПРОТОКОЛ</Label>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="320" y={192 + i * 30} width="16" height="16" rx="4" fill={i < 2 ? 'var(--violet)' : '#fff'} stroke="var(--violet)" strokeWidth="1.6" />
          <B x={346} y={196 + i * 30} w={i === 2 ? 120 : 150} h={7} c="var(--line-strong)" />
        </g>
      ))}
      <text x="42" y="374" fontFamily="Onest" fontSize="12" fill="var(--ink-faint)">Безопасное многократное прохождение сценариев</text>
    </Frame>
  )
}

/* 10 — IRBIS Analysis Hub: guided data-analysis cycle + data firewall */
export function IrbisAnalysisMock() {
  return (
    <Frame title="IRBIS · Analysis Hub">
      <Label x="42" y="104">УПРАВЛЯЕМЫЙ ЦИКЛ АНАЛИЗА</Label>
      {['Данные', 'Анализ', 'Отчёт'].map((s, i) => (
        <g key={s}>
          <rect x={42 + i * 160} y="122" width="132" height="48" rx="12" fill={i === 1 ? 'var(--violet)' : 'var(--bg-raise)'} stroke="var(--line-strong)" />
          <text x={42 + i * 160 + 66} y="151" textAnchor="middle" fontFamily="Onest" fontSize="14" fontWeight="600" fill={i === 1 ? '#fff' : 'var(--ink)'}>{s}</text>
          {i < 2 && <path d={`M${42 + i * 160 + 138} 146h14m-5-5l5 5-5 5`} stroke="var(--ink-faint)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        </g>
      ))}
      <rect x="42" y="196" width="476" height="128" rx="12" fill="#fff" stroke="var(--line-strong)" />
      <path d="M64 300 L120 262 L176 278 L232 226 L288 244 L344 200" fill="none" stroke="var(--violet)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {[[64, 300], [120, 262], [176, 278], [232, 226], [288, 244], [344, 200]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="var(--violet)" />
      ))}
      <g transform="translate(400 210)">
        <path d="M28 0 L52 10 V30 C52 46 41 56 28 60 C15 56 4 46 4 30 V10 Z" fill="var(--wine)" opacity="0.12" stroke="var(--wine)" strokeWidth="1.6" />
        <path d="M18 30 l7 7 13-15" fill="none" stroke="var(--wine)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="42" y="356" fontFamily="Onest" fontSize="12" fill="var(--ink-faint)">AI Data Firewall · R · Python · Stan</text>
    </Frame>
  )
}

/* 11 — IRBIS Research Hub: literature search + citation check */
export function IrbisResearchMock() {
  return (
    <Frame title="IRBIS · Research Hub">
      <rect x="42" y="92" width="476" height="44" rx="22" fill="var(--bg-raise)" stroke="var(--line-strong)" />
      <circle cx="70" cy="114" r="8" fill="none" stroke="var(--violet)" strokeWidth="2.4" />
      <path d="M76 120l7 7" stroke="var(--violet)" strokeWidth="2.4" strokeLinecap="round" />
      <text x="92" y="119" fontFamily="Onest" fontSize="14" fill="var(--ink-soft)">систематический обзор · критерии включения</text>
      <Label x="42" y="166">ИСТОЧНИКИ И ЦИТИРОВАНИЕ</Label>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="42" y={180 + i * 50} width="476" height="40" rx="10" fill="#fff" stroke="var(--line)" />
          <rect x="42" y={180 + i * 50} width="5" height="40" rx="2.5" fill="var(--violet)" />
          <B x={62} y={192 + i * 50} w={300 - i * 30} h={7} c="var(--ink-soft)" />
          <B x={62} y={205 + i * 50} w={200 - i * 20} h={6} c="var(--violet-soft)" />
          <circle cx="494" cy={200 + i * 50} r="10" fill={i === 3 ? '#fff' : 'var(--violet)'} stroke="var(--violet)" strokeWidth="1.6" />
          {i !== 3 && <path d={`M489 ${200 + i * 50} l3 3 6 -7`} stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        </g>
      ))}
      <text x="42" y="404" fontFamily="Onest" fontSize="12" fill="var(--ink-faint)">Проверка утверждений · контроль источников</text>
    </Frame>
  )
}

/* 12 — Handwritten medical record OCR → structured data */
export function HandwrittenOcrMock() {
  return (
    <Frame title="OCR историй болезни" accent="var(--wine)">
      <rect x="42" y="92" width="220" height="300" rx="12" fill="var(--bg-raise)" stroke="var(--line-strong)" />
      <Label x="58" y="118">РУКОПИСНЫЙ ЛИСТ</Label>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M58 ${140 + i * 30} q 20 -12 40 0 t 40 0 t 40 0 t 30 -4`}
          fill="none" stroke="var(--ink-faint)" strokeWidth="2" strokeLinecap="round" opacity="0.55"
        />
      ))}
      <path d="M262 240 h28 m-10 -8 l10 8 -10 8" stroke="var(--violet)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="300" y="92" width="218" height="300" rx="12" fill="#fff" stroke="var(--line-strong)" />
      <Label x="318" y="118" fill="var(--wine)">СТРУКТУРИРОВАННЫЕ ДАННЫЕ</Label>
      {['ФИО пациента', 'Диагноз', 'Жалобы', 'Анамнез', 'Назначения'].map((f, i) => (
        <g key={f}>
          <text x="318" y={150 + i * 44} fontFamily="Onest" fontSize="11" fontWeight="700" fill="var(--ink-faint)">{f.toUpperCase()}</text>
          <rect x="318" y={158 + i * 44} width="182" height="26" rx="7" fill="var(--bg-raise)" stroke="var(--line)" />
          <B x={330} y={168 + i * 44} w={120 - i * 8} h={7} c="var(--violet-soft)" />
        </g>
      ))}
    </Frame>
  )
}
