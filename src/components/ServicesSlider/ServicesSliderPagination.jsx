const DOT_SIZE = 'h-1.5 w-1.5'
const BAR_WIDTH = 48

const ServicesSliderPagination = ({
  count,
  activeIndex,
  progress,
  onSelect,
}) => (
  <div
    className="flex items-center gap-2.5 rounded-full border border-primary/30 bg-white/40 px-4 py-3 shadow-sm backdrop-blur-md"
    role="tablist"
    aria-label="Paginación de servicios"
  >
    {Array.from({ length: count }, (_, index) => {
      const isActive = index === activeIndex

      const handleClick = () => onSelect(index)

      const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(index)
        }
      }

      return (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={isActive}
          aria-label={`Servicio ${index + 1}`}
          tabIndex={isActive ? 0 : -1}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="flex items-center justify-center rounded-full p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {isActive ? (
            <span
              className="block h-1 overflow-hidden rounded-full bg-secondary/20"
              style={{ width: BAR_WIDTH }}
            >
              <span
                className="block h-full rounded-full bg-primary transition-[width] duration-75 ease-linear"
                style={{ width: `${Math.min(Math.max(progress, 0), 1) * 100}%` }}
              />
            </span>
          ) : (
            <span
              className={`block rounded-full bg-secondary/45 ${DOT_SIZE}`}
            />
          )}
        </button>
      )
    })}
  </div>
)

export default ServicesSliderPagination
