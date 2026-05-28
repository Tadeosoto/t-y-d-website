import { useMemo } from 'react'
import {
  buildRoundedRectPath,
  roundedRectPerimeter,
} from '../../utils/roundedRectPath'

const THUMB_WIDTH = 128
const THUMB_HEIGHT = 72
const RADIUS = 14
const STROKE = 2.5
const INSET = STROKE / 2 + 0.5

const rectW = THUMB_WIDTH - INSET * 2
const rectH = THUMB_HEIGHT - INSET * 2
const BORDER_PATH = buildRoundedRectPath(INSET, INSET, rectW, rectH, RADIUS)
const BORDER_LENGTH = roundedRectPerimeter(rectW, rectH, RADIUS)

const HeroCarouselThumb = ({
  slide,
  isActive,
  progress,
  onSelect,
  index,
}) => {
  const clampedProgress = useMemo(
    () => Math.min(Math.max(progress, 0), 1),
    [progress],
  )

  const strokeDashoffset = BORDER_LENGTH * (1 - clampedProgress)

  const handleClick = () => onSelect(index)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(index)
    }
  }

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-label={slide.label}
      tabIndex={isActive ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`relative shrink-0 overflow-hidden rounded-2xl transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
        isActive ? 'opacity-100' : 'opacity-55 hover:opacity-80'
      }`}
      style={{ width: THUMB_WIDTH, height: THUMB_HEIGHT }}
    >
      <img
        src={slide.thumbnail}
        alt=""
        className="h-full w-full object-cover"
      />

      {isActive && (
        <svg
          className="pointer-events-none absolute inset-0 text-primary-light"
          width={THUMB_WIDTH}
          height={THUMB_HEIGHT}
          viewBox={`0 0 ${THUMB_WIDTH} ${THUMB_HEIGHT}`}
          aria-hidden="true"
        >
          <path
            d={BORDER_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={BORDER_LENGTH}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
      )}
    </button>
  )
}

export default HeroCarouselThumb
