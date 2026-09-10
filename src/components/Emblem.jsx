/** Stylised КазНМУ mark: shield + rod of Asclepius. Inherits `currentColor`. */
export default function Emblem({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 2.5 34.5 8.2V19.5C34.5 29 27.8 35.4 20 38.2 12.2 35.4 5.5 29 5.5 19.5V8.2L20 2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M20 10.5V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M20 13.5C25.5 14.4 25.5 19 20 20 14.5 21 14.5 25.6 20 26.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="12" r="1.6" fill="currentColor" />
    </svg>
  )
}
