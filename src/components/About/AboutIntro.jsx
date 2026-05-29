import { aboutIntro } from '../../data/aboutPage'
import { RevealGroup, RevealItem, ScrollReveal } from '../motion/ScrollReveal'
import AboutFeatureIcon from './AboutFeatureIcon'

const AboutIntro = () => (
  <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 md:py-24" aria-label="Introducción">
    <div className="mx-auto max-w-7xl">
      <ScrollReveal className="grid gap-10 lg:grid-cols-2 lg:gap-16" stagger={0.14}>
        <RevealGroup>
          <RevealItem>
            <p className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-secondary uppercase">
              {aboutIntro.eyebrow}
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-5 max-w-lg text-3xl leading-[1.12] font-semibold tracking-tight text-secondary sm:text-4xl md:text-[2.65rem]">
              {aboutIntro.title}
            </h2>
          </RevealItem>
        </RevealGroup>

        <RevealItem direction="right">
          <p className="text-base leading-relaxed text-secondary/70 lg:pt-10 lg:text-lg">
            {aboutIntro.description}
          </p>
        </RevealItem>
      </ScrollReveal>

      <ScrollReveal as="ul" className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8" stagger={0.1}>
        {aboutIntro.features.map((feature) => (
          <RevealItem as="li" key={feature.id}>
            <RevealGroup stagger={0.07}>
              <RevealItem direction="scale">
                <AboutFeatureIcon name={feature.icon} />
              </RevealItem>
              <RevealItem>
                <h3 className="mt-5 text-lg font-semibold text-secondary">{feature.title}</h3>
              </RevealItem>
              <RevealItem>
                <p className="mt-2 text-sm leading-relaxed text-secondary/65">
                  {feature.description}
                </p>
              </RevealItem>
            </RevealGroup>
          </RevealItem>
        ))}
      </ScrollReveal>
    </div>
  </section>
)

export default AboutIntro
