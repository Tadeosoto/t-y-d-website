import { motion, useReducedMotion } from 'motion/react'
import { HERO_TEXT_FADE_DELAY_S } from '../../data/heroSlides'

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M4 9.5L7.5 13L14 5.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/** Aparece después de eyebrow, título, subtítulo y CTA */
const BADGE_APPEAR_DELAY_S = HERO_TEXT_FADE_DELAY_S + 0.42

const HeroQualityBadge = ({ lines, slideKey }) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      key={`badge-${slideKey}`}
      className="pointer-events-none absolute -top-11 -right-5 z-30 flex translate-z-0 will-change-transform sm:-top-12 sm:-right-4 md:-top-14 md:-right-2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
      style={{ transformOrigin: 'center center' }}
      transition={
        prefersReducedMotion
          ? { duration: 0.01, delay: BADGE_APPEAR_DELAY_S }
          : {
              delay: BADGE_APPEAR_DELAY_S,
              type: 'spring',
              stiffness: 200,
              damping: 22,
              mass: 0.95,
            }
      }
      aria-hidden="true"
    >
      <div className="flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center gap-1 rounded-full bg-primary px-2.5 py-2 text-secondary shadow-lg sm:h-24 sm:w-24 sm:px-3">
        <CheckIcon />
        <div className="flex w-full flex-col items-center justify-center gap-0.5 text-center">
          {lines.map((line) => (
            <span
              key={line}
              className="block w-full text-[7.5px] leading-[1.1] font-bold tracking-[0.14em] uppercase sm:text-[8.5px]"
            >
              {line}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default HeroQualityBadge
