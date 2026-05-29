import { Link } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'
import { servicesIntro } from '../../data/services'
import { RevealGroup, RevealItem, ScrollReveal } from '../motion/ScrollReveal'

const ServiciosIntro = () => (
  <section
    className="relative overflow-hidden bg-secondary px-6 pt-[calc(72px+3rem)] pb-20 sm:px-8 sm:pt-[calc(5rem+3.5rem)] sm:pb-24 md:pb-28"
    aria-labelledby="servicios-intro-title"
  >
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -top-16 -left-24 h-56 w-80 rotate-12 rounded-full bg-white/6" />
      <div className="absolute top-1/3 -right-20 h-72 w-96 -rotate-6 rounded-full bg-white/5" />
      <div className="absolute bottom-0 left-1/4 h-48 w-64 rotate-45 rounded-full bg-white/4" />
      <div className="absolute top-12 left-1/2 h-32 w-48 -rotate-12 rounded-full bg-primary/10" />
    </div>

    <ScrollReveal
      className="relative mx-auto max-w-3xl text-center"
      stagger={0.14}
      animateOnMount
    >
      <RevealItem>
        <p className="text-sm font-medium tracking-wide text-primary-light/90 uppercase">
          {servicesIntro.eyebrow}
        </p>
      </RevealItem>
      <RevealGroup stagger={0.1}>
        <RevealItem>
          <h1
            id="servicios-intro-title"
            className="mt-4 text-3xl leading-[1.12] font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl"
          >
            {servicesIntro.title}
          </h1>
        </RevealItem>
        <RevealItem>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-light/80 sm:text-lg">
            {servicesIntro.description}
          </p>
        </RevealItem>
        <RevealItem>
          <Link
            to={servicesIntro.ctaHref}
            className={`mt-8 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 text-sm font-medium text-primary-light transition-colors hover:bg-primary/10 ${focusRing}`}
          >
            {servicesIntro.cta}
            <span aria-hidden="true">↓</span>
          </Link>
        </RevealItem>
      </RevealGroup>
    </ScrollReveal>
  </section>
)

export default ServiciosIntro
