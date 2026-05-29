import { focusRing } from '../../constants/brandGlass'

const HeroArrowButton = ({ direction, onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-primary-light/25 bg-secondary/45 text-primary-light backdrop-blur-sm transition-colors hover:bg-secondary/65 sm:h-12 sm:w-12 ${focusRing}`}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      {direction === 'prev' ? (
        <path
          d="M11 4L6 9L11 14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M7 4L12 9L7 14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  </button>
)

export default HeroArrowButton
