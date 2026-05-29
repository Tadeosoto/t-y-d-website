import { useCallback, useEffect, useRef, useState } from 'react'

const getDirection = (from, to, count) => {
  if (from === to) return 0
  let diff = to - from
  if (diff > count / 2) diff -= count
  if (diff < -count / 2) diff += count
  return diff > 0 ? 1 : -1
}

export const useHeroSlider = (
  slideCount,
  holdMs,
  transitionMs,
  prefersReducedMotion = false,
) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [phase, setPhase] = useState('hold')
  const [holdProgress, setHoldProgress] = useState(0)
  const [transitionProgress, setTransitionProgress] = useState(0)
  const [outgoingIndex, setOutgoingIndex] = useState(0)
  const [incomingIndex, setIncomingIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const rafRef = useRef(null)
  const startRef = useRef(0)

  const holdDuration = prefersReducedMotion ? holdMs * 1.5 : holdMs
  const transitionDuration = prefersReducedMotion
    ? transitionMs * 0.6
    : transitionMs

  const beginTransition = useCallback(
    (targetIndex) => {
      const dir = getDirection(activeIndex, targetIndex, slideCount)
      if (dir === 0) return

      setOutgoingIndex(activeIndex)
      setIncomingIndex(targetIndex)
      setDirection(dir)
      setPhase('transition')
      setTransitionProgress(0)
      startRef.current = performance.now()
    },
    [activeIndex, slideCount],
  )

  const goToSlide = useCallback(
    (targetIndex) => {
      const next = ((targetIndex % slideCount) + slideCount) % slideCount
      if (next === activeIndex && phase === 'hold') {
        setHoldProgress(0)
        startRef.current = performance.now()
        return
      }
      beginTransition(next)
    },
    [activeIndex, beginTransition, phase, slideCount],
  )

  useEffect(() => {
    if (phase !== 'hold') return undefined

    startRef.current = performance.now()

    const tick = (now) => {
      const elapsed = now - startRef.current
      const next = Math.min(elapsed / holdDuration, 1)
      setHoldProgress(next)

      if (next >= 1) {
        const nextIndex = (activeIndex + 1) % slideCount
        beginTransition(nextIndex)
        return
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [activeIndex, beginTransition, holdDuration, phase, slideCount])

  useEffect(() => {
    if (phase !== 'transition') return undefined

    startRef.current = performance.now()

    const tick = (now) => {
      const elapsed = now - startRef.current
      const next = Math.min(elapsed / transitionDuration, 1)
      setTransitionProgress(next)

      if (next >= 1) {
        setActiveIndex(incomingIndex)
        setPhase('hold')
        setTransitionProgress(0)
        return
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [incomingIndex, phase, transitionDuration])

  const goToNext = useCallback(() => {
    if (phase !== 'hold') return
    goToSlide((activeIndex + 1) % slideCount)
  }, [activeIndex, goToSlide, phase, slideCount])

  const goToPrev = useCallback(() => {
    if (phase !== 'hold') return
    goToSlide((activeIndex - 1 + slideCount) % slideCount)
  }, [activeIndex, goToSlide, phase, slideCount])

  return {
    activeIndex,
    phase,
    holdProgress,
    transitionProgress,
    outgoingIndex,
    incomingIndex,
    direction,
    goToSlide,
    goToNext,
    goToPrev,
  }
}
