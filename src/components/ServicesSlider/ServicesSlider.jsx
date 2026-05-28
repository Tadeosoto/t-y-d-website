import { useMemo } from 'react'
import { useReducedMotion } from 'motion/react'
import {
  servicesSlides,
  SERVICES_HOLD_MS,
  SERVICES_TRANSITION_MS,
} from '../../data/servicesSlides'
import { useServicesSlider } from '../../hooks/useServicesSlider'
import ServicesSliderPagination from './ServicesSliderPagination'
import ServicesSliderPanel from './ServicesSliderPanel'
import {
  getIncomingTransform,
  getOutgoingTransform,
  HOLD_TRANSFORM,
} from './servicesSliderTransforms'

const ServicesSlider = () => {
  const prefersReducedMotion = useReducedMotion()
  const {
    activeIndex,
    phase,
    holdProgress,
    transitionProgress,
    outgoingIndex,
    incomingIndex,
    direction,
    goToSlide,
  } = useServicesSlider(
    servicesSlides.length,
    SERVICES_HOLD_MS,
    SERVICES_TRANSITION_MS,
    prefersReducedMotion,
  )

  const paginationProgress = phase === 'hold' ? holdProgress : 1
  const paginationIndex =
    phase === 'transition' ? outgoingIndex : activeIndex

  const outgoingTransform = useMemo(
    () => getOutgoingTransform(transitionProgress, direction),
    [transitionProgress, direction],
  )

  const incomingTransform = useMemo(
    () => getIncomingTransform(transitionProgress, direction),
    [transitionProgress, direction],
  )

  return (
    <section
      id="servicios"
      className="relative h-svh min-h-[520px] w-full overflow-hidden bg-primary-light"
      aria-label="Servicios"
    >
      <div className="relative h-full w-full">
        {phase === 'hold' && (
          <ServicesSliderPanel
            slide={servicesSlides[activeIndex]}
            transform={HOLD_TRANSFORM}
          />
        )}

        {phase === 'transition' && (
          <>
            <ServicesSliderPanel
              slide={servicesSlides[outgoingIndex]}
              transform={outgoingTransform}
            />
            <ServicesSliderPanel
              slide={servicesSlides[incomingIndex]}
              transform={incomingTransform}
            />
          </>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-30 flex justify-center md:bottom-10">
        <div className="pointer-events-auto">
          <ServicesSliderPagination
            count={servicesSlides.length}
            activeIndex={paginationIndex}
            progress={paginationProgress}
            onSelect={goToSlide}
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSlider
