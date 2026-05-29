import { useMemo } from 'react'
import { useReducedMotion } from 'motion/react'
import {
  heroSlides,
  HERO_HOLD_MS,
  HERO_TRANSITION_MS,
} from '../../data/heroSlides'
import { useHeroSlider } from '../../hooks/useHeroSlider'
import HeroArrowButton from './HeroArrowButton'
import HeroNav from './HeroNav'
import HeroSlideOverlay from './HeroSlideOverlay'
import HeroSliderPanel from './HeroSliderPanel'
import {
  getIncomingTransform,
  getOutgoingTransform,
  HOLD_TRANSFORM,
} from './heroSliderTransforms'

const Hero = () => {
  const prefersReducedMotion = useReducedMotion()
  const {
    activeIndex,
    phase,
    transitionProgress,
    outgoingIndex,
    incomingIndex,
    direction,
    goToNext,
    goToPrev,
  } = useHeroSlider(
    heroSlides.length,
    HERO_HOLD_MS,
    HERO_TRANSITION_MS,
    prefersReducedMotion,
  )

  const outgoingTransform = useMemo(
    () => getOutgoingTransform(transitionProgress, direction),
    [transitionProgress, direction],
  )

  const incomingTransform = useMemo(
    () => getIncomingTransform(transitionProgress, direction),
    [transitionProgress, direction],
  )

  const showContent = phase === 'hold'
  const activeSlide = heroSlides[activeIndex]

  return (
    <section
      id="servicios"
      className="flex min-h-svh w-full flex-col bg-white"
      aria-label="Hero"
    >
      <HeroNav />

      <div className="relative min-h-0 flex-1">
        <div className="absolute inset-0 overflow-hidden bg-primary-light">
          {phase === 'hold' && (
            <HeroSliderPanel
              slide={heroSlides[activeIndex]}
              transform={HOLD_TRANSFORM}
              priority
            />
          )}

          {phase === 'transition' && (
            <>
              <HeroSliderPanel
                slide={heroSlides[outgoingIndex]}
                transform={outgoingTransform}
              />
              <HeroSliderPanel
                slide={heroSlides[incomingIndex]}
                transform={incomingTransform}
              />
            </>
          )}
        </div>

        <HeroSlideOverlay
          slide={activeSlide}
          slideKey={activeIndex}
          visible={showContent}
        />

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-3 sm:px-5 md:px-8">
          <HeroArrowButton
            direction="prev"
            label="Slide anterior"
            onClick={goToPrev}
          />
          <HeroArrowButton
            direction="next"
            label="Slide siguiente"
            onClick={goToNext}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
