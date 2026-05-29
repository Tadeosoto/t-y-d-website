const HeroSliderPanel = ({ slide, transform, priority = false }) => {
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
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <div
        className="absolute inset-0 bg-secondary/35"
        aria-hidden="true"
      />
    </>
  )

  if (isFullscreen) {
    return (
      <article
        className="absolute inset-0 overflow-hidden will-change-transform"
        style={shared}
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
      aria-hidden="true"
    >
      {content}
    </article>
  )
}

export default HeroSliderPanel
