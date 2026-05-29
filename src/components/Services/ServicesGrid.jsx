import { mainServices } from '../../data/services'
import { RevealItem, ScrollReveal } from '../motion/ScrollReveal'
import ServiceCard from './ServiceCard'

const ServicesGrid = () => (
  <section
    id="servicios-principales"
    className="bg-white px-6 py-16 sm:px-8 sm:py-20 md:py-24"
    aria-label="Servicios principales"
  >
    <div className="mx-auto max-w-7xl">
      <ScrollReveal stagger={0.1}>
        <RevealItem>
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-secondary sm:text-3xl">
            Servicios principales
          </h2>
          <p className="mt-3 max-w-xl text-base text-secondary/65">
            Soluciones integrales para empresas e industria en un solo equipo técnico.
          </p>
        </RevealItem>
      </ScrollReveal>

      <ScrollReveal
        as="ul"
        className="mt-12 grid gap-12 md:mt-14 md:grid-cols-3 md:gap-8 lg:gap-10"
        stagger={0.12}
      >
        {mainServices.map((service) => (
          <RevealItem as="li" key={service.id} className="h-full">
            <ServiceCard service={service} />
          </RevealItem>
        ))}
      </ScrollReveal>
    </div>
  </section>
)

export default ServicesGrid
