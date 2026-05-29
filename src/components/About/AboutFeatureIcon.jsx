const icons = {
  trust: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      d="M7 11v5M12 8v8M17 11v5M4 14h16M6 6l6-3 6 3"
    />
  ),
  work: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
        d="M4 7l8-4 8 4v10l-8 4-8-4V7z"
      />
      <path strokeLinecap="round" strokeWidth="1.75" d="M12 3v18" />
    </>
  ),
  award: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      d="M8 4h8l1 4 4 1-4 1-1 4-1-4-4-1 4-1 1-4zm0 8v4m8-4v4M6 20h12"
    />
  ),
  support: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
        d="M8 10h8M8 14h5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
        d="M6 6h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-3 3v-3H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
      />
    </>
  ),
}

const AboutFeatureIcon = ({ name }) => (
  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  </span>
)

export default AboutFeatureIcon
