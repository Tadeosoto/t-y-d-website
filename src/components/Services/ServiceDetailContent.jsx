import { Link } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'
import { RevealGroup, RevealItem, ScrollReveal } from '../motion/ScrollReveal'

const ServiceDetailContent = ({ service }) => {
  const { detail } = service

  return (
    <section
      id="mas-informacion"
      className="scroll-mt-28 bg-white px-6 py-16 sm:px-8 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,42%)] lg:items-center lg:gap-10 xl:gap-16">
          <ScrollReveal className="max-w-xl lg:max-w-none" stagger={0.12}>
            <RevealItem>
              <h2 className="text-3xl leading-[1.15] font-semibold tracking-tight text-primary sm:text-4xl md:text-[2.5rem] md:leading-[1.12]">
                {detail.headline}
              </h2>
            </RevealItem>

            <RevealGroup className="mt-8 space-y-5" stagger={0.08}>
              {detail.body.map((paragraph) => (
                <RevealItem key={paragraph.slice(0, 28)}>
                  <p className="text-base leading-relaxed text-secondary/80 sm:text-lg">
                    {paragraph}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>

            <RevealItem>
              <Link
                to="/contacto"
                className={`mt-10 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-primary-light/60 px-8 py-3.5 text-sm font-semibold text-secondary transition-colors hover:bg-primary-light ${focusRing}`}
              >
                Solicitar asesoría
                <span aria-hidden="true">→</span>
              </Link>
            </RevealItem>
          </ScrollReveal>

          <ScrollReveal
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
            stagger={0.14}
          >
            <RevealItem
              direction="right"
              className="relative ml-auto w-[88%] max-w-[420px] lg:w-full lg:max-w-none"
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </RevealItem>

            {detail.secondaryImage && (
              <RevealItem
                direction="scale"
                className="absolute top-1/2 -left-2 z-10 w-[42%] max-w-[200px] -translate-y-1/2 sm:-left-4 lg:-left-8 xl:-left-12"
              >
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg ring-4 ring-white">
                  <img
                    src={detail.secondaryImage}
                    alt={detail.secondaryAlt ?? ''}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </RevealItem>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailContent
