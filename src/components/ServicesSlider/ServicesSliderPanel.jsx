const ServicesSliderPanel = ({ slide, transform }) => {
  const isFullscreen = transform.mode === 'fullscreen'

  const shared = {
    zIndex: transform.zIndex,
    opacity: transform.opacity,
    borderRadius: transform.radiusPx,
    filter: `blur(${transform.blur}px)`,
  }

  const content = (
    <>
      <img
        src={slide.image}
        alt={slide.alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-black/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 py-10 md:px-14 md:py-14"
        style={{ opacity: transform.titleOpacity }}
      >
        <h2 className="max-w-3xl text-center text-xl leading-[1.12] font-medium tracking-tight text-primary-light sm:text-2xl md:text-4xl lg:text-[2.75rem]">
          {slide.title}
        </h2>
      </div>
    </>
  )

  if (isFullscreen) {
    return (
      <article
        className="absolute inset-0 overflow-hidden will-change-transform"
        style={shared}
        aria-hidden={transform.titleOpacity < 0.05}
      >
        {content}
      </article>
    )
  }

  return (
    <article
      className="absolute top-1/2 left-1/2 overflow-hidden will-change-transform"
      style={{
        ...shared,
        width: `${transform.widthVw}vw`,
        height: `${transform.heightVh}vh`,
        transform: `translate(calc(-50% + ${transform.xVw}vw), -50%)`,
      }}
      aria-hidden={transform.titleOpacity < 0.05}
    >
      {content}
    </article>
  )
}

export default ServicesSliderPanel
