import { useEffect, useRef } from 'react'

const SWIPE_THRESHOLD_PX = 48
const MAX_VERTICAL_DRIFT_PX = 72

const isInteractiveTarget = (target) =>
  target?.closest?.(
    'a, button, input, textarea, select, label, [role="button"], [data-no-swipe]',
  )

export const useHeroSwipe = (
  ref,
  { onSwipeLeft, onSwipeRight, enabled = true },
) => {
  const touchStart = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !enabled) return undefined

    const handleTouchStart = (event) => {
      if (isInteractiveTarget(event.target)) {
        touchStart.current = null
        return
      }

      const touch = event.touches[0]
      if (!touch) return

      touchStart.current = { x: touch.clientX, y: touch.clientY }
    }

    const handleTouchEnd = (event) => {
      if (!touchStart.current) return

      const touch = event.changedTouches[0]
      if (!touch) return

      const deltaX = touch.clientX - touchStart.current.x
      const deltaY = touch.clientY - touchStart.current.y
      touchStart.current = null

      if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return
      if (Math.abs(deltaY) > MAX_VERTICAL_DRIFT_PX && Math.abs(deltaY) > Math.abs(deltaX)) {
        return
      }

      if (deltaX < 0) onSwipeLeft()
      else onSwipeRight()
    }

    element.addEventListener('touchstart', handleTouchStart, {
      passive: true,
      capture: true,
    })
    element.addEventListener('touchend', handleTouchEnd, {
      passive: true,
      capture: true,
    })

    return () => {
      element.removeEventListener('touchstart', handleTouchStart, { capture: true })
      element.removeEventListener('touchend', handleTouchEnd, { capture: true })
    }
  }, [enabled, onSwipeLeft, onSwipeRight, ref])
}
