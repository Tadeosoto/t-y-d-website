import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { focusRing } from '../../constants/brandGlass'
import { HERO_TEXT_FADE_DELAY_S } from '../../data/heroSlides'
import HeroQualityBadge from './HeroQualityBadge'
import HeroRippleCircles from './HeroRippleCircles'

const RibbonIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-primary"
  >
    <path
      d="M8 1.5L9.8 5.8H14.4L10.8 8.4L12.2 12.8L8 10.2L3.8 12.8L5.2 8.4L1.6 5.8H6.2L8 1.5Z"
      fill="currentColor"
    />
  </svg>
)

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: HERO_TEXT_FADE_DELAY_S + i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const HeroSlideOverlay = ({ slide, slideKey, visible }) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <HeroRippleCircles slideKey={slideKey} visible={visible} />

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 py-16 sm:px-6">
        <AnimatePresence mode="wait">
          {visible && (
            <motion.div
              key={slideKey}
              className="pointer-events-auto relative isolate flex w-full max-w-[min(92vw,640px)] flex-col items-center text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <HeroQualityBadge lines={slide.badgeLines} slideKey={slideKey} />

              <motion.div
                className="flex w-full flex-col items-center"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: prefersReducedMotion
                      ? { staggerChildren: 0 }
                      : { staggerChildren: 0.08, delayChildren: 0 },
                  },
                }}
              >
                <motion.p
                  custom={0}
                  variants={itemVariants}
                  className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-primary-light/90 uppercase sm:text-xs"
                >
                  <RibbonIcon />
                  {slide.eyebrow}
                </motion.p>

                <motion.h1
                  custom={1}
                  variants={itemVariants}
                  className="mt-5 max-w-xl text-[1.75rem] leading-[1.12] font-semibold tracking-tight text-primary-light sm:text-4xl md:text-[2.65rem]"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={itemVariants}
                  className="mt-4 max-w-md text-sm leading-relaxed text-primary-light/85 sm:text-base"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.a
                  custom={3}
                  variants={itemVariants}
                  layout={false}
                  href={slide.ctaHref}
                  className={`group mt-8 inline-flex translate-z-0 items-stretch overflow-hidden rounded-full bg-linear-to-r from-primary to-secondary text-primary-light shadow-lg backface-hidden hover:brightness-[1.03] ${focusRing}`}
                >
                  <span className="flex items-center px-7 py-3.5 text-sm font-semibold tracking-wide sm:px-8 sm:text-base">
                    {slide.cta}
                  </span>
                  <span
                    className="m-1.5 flex w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-secondary transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default HeroSlideOverlay
