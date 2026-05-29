import { Link } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'
import { servicesCategoryLabel } from '../../data/services'
import { RevealGroup, RevealItem, ScrollReveal } from '../motion/ScrollReveal'

const ServiceDetailHero = ({ service }) => {
  const { detail } = service

  return (
    <section className="grid min-h-[calc(100svh-72px)] lg:min-h-svh lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-primary-light px-6 py-12 pt-[calc(72px+2.5rem)] sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
        <ScrollReveal stagger={0.12} animateOnMount>
          <RevealItem>
            <nav aria-label="Ruta de navegación">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-secondary/50">
                <li>
                  <Link
                    to="/"
                    className={`transition-colors hover:text-secondary ${focusRing}`}
                  >
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">—</li>
                <li>
                  <Link
                    to="/servicios"
                    className={`transition-colors hover:text-secondary ${focusRing}`}
                  >
                    Servicios
                  </Link>
                </li>
                <li aria-hidden="true">—</li>
                <li className="text-secondary/70">{service.shortTitle}</li>
              </ol>
            </nav>
          </RevealItem>

          <RevealGroup className="mt-8" stagger={0.08}>
            <RevealItem>
              <p className="text-base font-medium text-secondary sm:text-lg">
                {servicesCategoryLabel}
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-2 text-4xl leading-[1.08] font-semibold tracking-tight text-primary sm:text-5xl md:text-[3.25rem]">
                {service.shortTitle}
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary/80 sm:text-lg">
                {detail.lead}
              </p>
            </RevealItem>
            <RevealItem>
              <a
                href="#mas-informacion"
                className={`mt-10 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10 ${focusRing}`}
              >
                Saber más
                <span aria-hidden="true">↓</span>
              </a>
            </RevealItem>
          </RevealGroup>
        </ScrollReveal>
      </div>

      <ScrollReveal
        className="relative min-h-[280px] lg:min-h-full"
        stagger={0.1}
        animateOnMount
      >
        <RevealItem direction="right" className="absolute inset-0">
          <img
            src={service.image}
            alt={service.alt}
            className="h-full w-full object-cover"
          />
        </RevealItem>
      </ScrollReveal>
    </section>
  )
}

export default ServiceDetailHero
