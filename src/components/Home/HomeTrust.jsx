import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { focusRing } from '../../constants/brandGlass'
import { homeTrust } from '../../data/homeTrust'
import { RevealGroup, RevealItem, ScrollReveal } from '../motion/ScrollReveal'
import PartnerLogo from './PartnerLogo'

const HomeTrust = () => {
  const [index, setIndex] = useState(0)
  const testimonial = homeTrust.testimonials[index]
  const count = homeTrust.testimonials.length

  const goPrev = () => setIndex((i) => (i - 1 + count) % count)
  const goNext = () => setIndex((i) => (i + 1) % count)

  return (
    <section
      className="border-t border-secondary/10 bg-primary-light/40 px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="home-trust-title"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.1}>
          <RevealItem>
            <h2
              id="home-trust-title"
              className="text-center text-2xl font-semibold tracking-tight text-secondary sm:text-3xl md:text-4xl"
            >
              {homeTrust.title}
            </h2>
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal className="relative mt-12 sm:mt-14" stagger={0.12}>
          <RevealItem>
            <div className="relative mx-auto max-w-4xl rounded-3xl border border-secondary/8 bg-white px-6 py-10 sm:px-10 sm:py-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, var(--color-secondary) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              />

              <div className="relative flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Testimonio anterior"
                  className={`shrink-0 rounded-full p-2 text-secondary/60 transition-colors hover:bg-primary-light hover:text-secondary ${focusRing}`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M12 4L7 10L12 16"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div className="grid min-w-0 flex-1 items-center gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
                  <div className="mx-auto shrink-0">
                    <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-primary-light sm:h-32 sm:w-32">
                      <span className="text-2xl font-bold text-primary sm:text-3xl">
                        {testimonial.initials}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.figure
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="min-w-0 text-center sm:text-left"
                    >
                      <blockquote className="relative px-1 sm:px-2">
                        <p className="text-lg leading-relaxed text-secondary/75 sm:text-xl">
                          <span
                            className="mr-0.5 align-[-0.2em] font-serif text-3xl leading-none text-primary sm:text-4xl"
                            aria-hidden="true"
                          >
                            “
                          </span>
                          <span>{testimonial.quote}</span>
                          <span
                            className="ml-0.5 align-[-0.2em] font-serif text-3xl leading-none text-primary sm:text-4xl"
                            aria-hidden="true"
                          >
                            ”
                          </span>
                        </p>
                      </blockquote>
                      <figcaption className="mt-5 text-sm font-bold tracking-wide text-primary uppercase">
                        {testimonial.author}, {testimonial.company}
                      </figcaption>
                    </motion.figure>
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Testimonio siguiente"
                  className={`shrink-0 rounded-full p-2 text-secondary/60 transition-colors hover:bg-primary-light hover:text-secondary ${focusRing}`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M8 4L13 10L8 16"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal
          as="ul"
          className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-3"
          stagger={0.1}
        >
          {homeTrust.caseCards.map((card) => (
            <RevealItem as="li" key={card.id}>
              <article className="overflow-hidden rounded-2xl border border-secondary/10 bg-white shadow-sm">
                <div className="flex min-h-[100px] items-center justify-center border-b border-secondary/10 bg-white px-6 py-8">
                  {card.logo ? (
                    <PartnerLogo
                      partner={{
                        name: card.client,
                        src: card.logo,
                        fallback: card.logoFallback,
                      }}
                      className="h-9 w-auto max-w-[160px] object-contain"
                    />
                  ) : (
                    <span className="text-sm font-semibold tracking-wide text-secondary/50 uppercase">
                      {card.client}
                    </span>
                  )}
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-sm font-medium text-secondary">{card.metric}</p>
                  <p className="mt-1 text-sm text-secondary/60">{card.result}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </ScrollReveal>

        <ScrollReveal
          className="mt-12 flex flex-wrap items-center justify-center gap-12 sm:mt-14 sm:gap-16 md:gap-24"
          stagger={0.12}
        >
          {homeTrust.partners.map((partner) => (
            <RevealItem key={partner.id} direction="scale">
              <PartnerLogo partner={partner} className="h-11 w-auto max-w-[180px] object-contain sm:h-14" />
            </RevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}

export default HomeTrust
