import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { heroSlides, HERO_SLIDE_DURATION_MS } from '../../data/heroSlides'
import HeroBackground from './HeroBackground'
import HeroCarousel from './HeroCarousel'
import HeroContent from './HeroContent'
import HeroNav from './HeroNav'

const getSlideDuration = (index, prefersReducedMotion) => {
  const ms = heroSlides[index]?.durationMs ?? HERO_SLIDE_DURATION_MS
  const safeMs = ms > 0 ? ms : HERO_SLIDE_DURATION_MS
  return prefersReducedMotion ? safeMs * 1.5 : safeMs
}

const Hero = () => {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(0)

  const activeSlide = heroSlides[activeIndex]
  const slideDuration = getSlideDuration(activeIndex, prefersReducedMotion)

  const goToSlide = useCallback((index) => {
    setActiveIndex(index % heroSlides.length)
    setProgress(0)
    startRef.current = performance.now()
  }, [])

  useEffect(() => {
    startRef.current = performance.now()

    const tick = (now) => {
      const elapsed = now - startRef.current
      const nextProgress = Math.min(elapsed / slideDuration, 1)
      setProgress(nextProgress)

      if (nextProgress >= 1) {
        setProgress(0)
        setActiveIndex((current) => (current + 1) % heroSlides.length)
        return
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [activeIndex, slideDuration])

  return (
    <section
      className="relative flex min-h-svh w-full flex-col overflow-hidden"
      aria-label="Hero"
    >
      <HeroBackground slide={activeSlide} slideKey={activeIndex} />

      <div className="relative z-10 flex min-h-svh flex-col">
        <header className="flex w-full justify-center px-4 pt-5 md:pt-8 lg:justify-stretch lg:pt-9 lg:pl-4 lg:pr-4 xl:pl-6 xl:pr-6 2xl:pl-8 2xl:pr-8">
          <HeroNav />
        </header>

        <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
          <HeroContent />
        </div>

        <footer className="flex justify-center px-4 pb-8 sm:pb-10">
          <HeroCarousel
            slides={heroSlides}
            activeIndex={activeIndex}
            progress={progress}
            onSelect={goToSlide}
          />
        </footer>
      </div>
    </section>
  )
}

export default Hero
