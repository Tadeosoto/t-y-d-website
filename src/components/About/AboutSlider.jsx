import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { focusRing } from '../../constants/brandGlass'
import { revealEase, revealSlideContentVariants } from '../../constants/motionReveal'
import { aboutExperience, aboutSliderSlides } from '../../data/aboutPage'
import { RevealGroup, RevealItem, ScrollReveal } from '../motion/ScrollReveal'

const slideItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: revealEase },
  },
}

const AboutSlider = () => {
  const [index, setIndex] = useState(0)
  const slide = aboutSliderSlides[index]
  const count = aboutSliderSlides.length
  const prefersReducedMotion = useReducedMotion()

  const goPrev = () => setIndex((i) => (i - 1 + count) % count)
  const goNext = () => setIndex((i) => (i + 1) % count)

  return (
    <section
      className="overflow-hidden bg-white px-6 py-16 sm:px-8 sm:py-20 md:py-24"
      aria-label="Visión, valores y misión"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="relative mx-auto w-full max-w-lg lg:mx-0" stagger={0.14}>
          <RevealItem
            direction="left"
            className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop"
              alt="Profesionales en reunión de trabajo"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </RevealItem>

          <RevealItem
            direction="scale"
            className="absolute top-8 -left-2 z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-primary text-center text-secondary shadow-lg sm:h-32 sm:w-32"
          >
            <span className="text-3xl leading-none font-bold sm:text-4xl">
              {aboutExperience.value}
            </span>
            <span className="mt-1 max-w-[5.5rem] text-[10px] leading-tight font-semibold sm:text-xs">
              {aboutExperience.label}
            </span>
          </RevealItem>

          <RevealItem
            direction="right"
            className="absolute right-0 bottom-0 z-10 w-[58%] overflow-hidden rounded-2xl border-4 border-white shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop"
              alt="Especialista en sitio de trabajo"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal className="relative lg:pl-4" stagger={0.12}>
          <div
            className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 opacity-30"
            aria-hidden="true"
            style={{
              backgroundImage:
                'radial-gradient(circle, var(--color-secondary) 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px',
            }}
          />

          <RevealItem>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial="hidden"
                animate="visible"
                exit={
                  prefersReducedMotion
                    ? { opacity: 0, transition: { duration: 0.01 } }
                    : { opacity: 0, x: -20, transition: { duration: 0.25, ease: revealEase } }
                }
                variants={revealSlideContentVariants}
              >
                <motion.p
                  variants={slideItemVariants}
                  className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary uppercase"
                >
                  {slide.eyebrow}
                </motion.p>
                <motion.h2
                  variants={slideItemVariants}
                  className="mt-5 text-2xl leading-[1.15] font-semibold tracking-tight text-secondary sm:text-3xl md:text-4xl"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  variants={slideItemVariants}
                  className="mt-5 max-w-xl text-base leading-relaxed text-secondary/70"
                >
                  {slide.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </RevealItem>

          <RevealGroup className="mt-10 flex items-center gap-3" stagger={0.08}>
            <RevealItem direction="scale">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Slide anterior"
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-secondary/15 bg-white text-secondary shadow-sm transition-colors hover:border-primary/40 hover:bg-primary-light/50 ${focusRing}`}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M11 4L6 9L11 14"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </RevealItem>
            <RevealItem direction="scale">
              <button
                type="button"
                onClick={goNext}
                aria-label="Slide siguiente"
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-secondary/15 bg-white text-secondary shadow-sm transition-colors hover:border-primary/40 hover:bg-primary-light/50 ${focusRing}`}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M7 4L12 9L7 14"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </RevealItem>
          </RevealGroup>

          <span className="sr-only">
            {index + 1} de {count}
          </span>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default AboutSlider
