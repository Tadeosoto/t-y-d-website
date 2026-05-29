const icons = {
  building: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-full w-full">
      <path
        d="M6 28V10l10-6 10 6v18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 28v-8h8v8M12 14h2M18 14h2M12 18h2M18 18h2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-full w-full">
      <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M22 12.5a3 3 0 0 1 0 6M26 26c0-3.5-2-6.5-5-7.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-full w-full">
      <rect
        x="5"
        y="7"
        width="22"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M5 13h22M11 5v4M21 5v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M11 18h3M18 18h3M11 23h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-full w-full">
      <path
        d="M16 4l10 4v8c0 7-4.5 11.5-10 13-5.5-1.5-10-6-10-13V8l10-4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 16l3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-full w-full">
      <path
        d="M4 16s5-9 12-9 12 9 12 9-5 9-12 9-12-9-12-9z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-full w-full">
      <path
        d="M8 18v4a3 3 0 0 0 3 3h1v-8H9a1 1 0 0 0-1 1zm16 0v4a3 3 0 0 1-3 3h-1v-8h3a1 1 0 0 1 1 1z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M11 17a5 5 0 0 1 10 0"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  ),
}

const CompanyStatsIcon = ({ name }) => (
  <span className="flex h-10 w-10 shrink-0 text-primary sm:h-11 sm:w-11 md:h-12 md:w-12">
    {icons[name]}
  </span>
)

export default CompanyStatsIcon
