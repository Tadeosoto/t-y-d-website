import { glassShell } from '../../constants/brandGlass'
import HeroCarouselThumb from './HeroCarouselThumb'

const HeroCarousel = ({
  slides,
  activeIndex,
  progress,
  onSelect,
}) => (
  <div
    className={`pointer-events-auto mx-auto w-fit max-w-[calc(100vw-2rem)] overflow-x-auto rounded-full p-2 shadow-lg sm:p-2.5 ${glassShell}`}
    role="tablist"
    aria-label="Escenas del hero"
  >
    <div className="flex w-max items-center gap-2 sm:gap-3">
      {slides.map((slide, index) => (
        <HeroCarouselThumb
          key={slide.id}
          slide={slide}
          index={index}
          isActive={index === activeIndex}
          progress={index === activeIndex ? progress : 0}
          onSelect={onSelect}
        />
      ))}
    </div>
  </div>
)

export default HeroCarousel
