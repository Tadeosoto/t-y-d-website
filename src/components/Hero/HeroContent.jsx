import { focusRing, glassShell } from '../../constants/brandGlass'

const HeroContent = () => {
  const handleCtaClick = () => {
    document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="pointer-events-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
      <h1 className="text-4xl font-medium leading-[1.05] tracking-tight text-primary-light sm:text-5xl md:text-6xl lg:text-7xl">
        Soluciones integrales para espacios corporativos
      </h1>
      <p className="max-w-2xl text-base leading-relaxed text-primary-light/80 sm:text-lg">
        Mantenimiento de interiores, diseño para oficinas empresariales, paneles
        solares, instalaciones eléctricas de baja y media tensión, y mobiliario
        para recepción, coffee stations y áreas comunes.
      </p>
      <button
        type="button"
        onClick={handleCtaClick}
        className={`rounded-full px-6 py-2.5 text-sm font-medium text-primary-light transition-colors hover:bg-primary-light/20 ${glassShell} ${focusRing}`}
      >
        Conocer más
      </button>
    </div>
  )
}

export default HeroContent
