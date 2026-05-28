import { useCallback, useEffect, useRef, useState } from 'react'

export const useSlideProgress = (
  slideCount,
  durationMs,
  prefersReducedMotion = false,
) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(0)

  const slideDuration = prefersReducedMotion ? durationMs * 1.5 : durationMs

  const goToSlide = useCallback(
    (index) => {
      setActiveIndex(index % slideCount)
      setProgress(0)
      startRef.current = performance.now()
    },
    [slideCount],
  )

  useEffect(() => {
    if (slideCount < 1) return undefined

    startRef.current = performance.now()

    const tick = (now) => {
      const elapsed = now - startRef.current
      const nextProgress = Math.min(elapsed / slideDuration, 1)
      setProgress(nextProgress)

      if (nextProgress >= 1) {
        setProgress(0)
        setActiveIndex((current) => (current + 1) % slideCount)
        return
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [activeIndex, slideDuration, slideCount])

  return { activeIndex, progress, goToSlide }
}
