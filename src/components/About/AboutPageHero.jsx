import { aboutHero } from '../../data/aboutPage'
import { RevealItem, ScrollReveal } from '../motion/ScrollReveal'

const AboutPageHero = () => (
  <section
    className="relative flex min-h-[min(52vh,420px)] items-center justify-center pt-[72px] sm:min-h-[min(56vh,480px)] sm:pt-20"
    aria-labelledby="about-page-title"
  >
    <img
      src={aboutHero.image}
      alt={aboutHero.alt}
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-secondary/70" aria-hidden="true" />
    <ScrollReveal
      className="relative flex flex-col items-center gap-4 px-6 text-center"
      stagger={0.18}
      animateOnMount
    >
      <RevealItem as="h1" id="about-page-title" direction="up">
        <span className="text-4xl font-semibold tracking-tight text-primary-light sm:text-5xl md:text-6xl">
          {aboutHero.title}
        </span>
      </RevealItem>
      <RevealItem direction="scale" aria-hidden="true">
        <span className="inline-block text-primary-light/80">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 4v12M6 12l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </RevealItem>
    </ScrollReveal>
  </section>
)

export default AboutPageHero
