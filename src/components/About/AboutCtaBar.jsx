import { Link } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'
import { aboutCta } from '../../data/aboutPage'
import { RevealItem, ScrollReveal } from '../motion/ScrollReveal'

const AboutCtaBar = () => (
  <section className="bg-white px-6 pb-16 sm:px-8 sm:pb-20 md:pb-24">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal
        className="flex flex-col items-start gap-4 rounded-full border border-secondary/10 bg-white px-6 py-5 shadow-[0_8px_40px_rgba(3,81,42,0.08)] sm:flex-row sm:items-center sm:gap-5 sm:px-8 sm:py-6"
        stagger={0.12}
      >
        <RevealItem direction="scale">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary"
            aria-hidden="true"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 10h8M8 14h5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
              <path
                d="M6 6h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-3 3v-3H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </RevealItem>
        <RevealItem direction="up">
          <p className="text-sm font-medium tracking-wide text-secondary/80 uppercase sm:text-base">
            {aboutCta.text}{' '}
            <Link
              to={aboutCta.linkTo}
              className={`font-semibold text-secondary underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary ${focusRing}`}
            >
              {aboutCta.linkLabel}
            </Link>
          </p>
        </RevealItem>
      </ScrollReveal>
    </div>
  </section>
)

export default AboutCtaBar
