import { Link } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'
import { homeExperience } from '../../data/homeExperience'
import CompanyStatsIcon from '../CompanyStats/CompanyStatsIcon'
import { RevealGroup, RevealItem, ScrollReveal } from '../motion/ScrollReveal'

const ExperienceVisual = () => (
  <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center lg:max-w-none">
    <div
      className="absolute inset-[8%] rounded-full bg-primary/15"
      aria-hidden="true"
    />
    <div
      className="absolute inset-[18%] rounded-full bg-primary-light"
      aria-hidden="true"
    />
    <div
      className="absolute top-[12%] right-[10%] flex h-20 w-20 items-center justify-center rounded-full bg-primary text-center shadow-md sm:h-24 sm:w-24"
      aria-hidden="true"
    >
      <span className="text-[10px] leading-tight font-bold text-secondary uppercase sm:text-xs">
        {homeExperience.experience.badge}
      </span>
    </div>
    <div className="relative z-10 text-center">
      <p className="text-6xl leading-none font-bold text-secondary sm:text-7xl md:text-8xl">
        {homeExperience.experience.value}
      </p>
      <p className="mt-3 max-w-[12rem] text-lg font-medium text-secondary/80 sm:text-xl">
        {homeExperience.experience.label}
      </p>
    </div>
  </div>
)

const HomeExperience = () => (
  <section className="bg-white" aria-labelledby="home-experience-title">
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <ScrollReveal className="order-2 lg:order-1" stagger={0.12}>
          <RevealItem direction="scale">
            <ExperienceVisual />
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal className="order-1 lg:order-2" stagger={0.12}>
          <RevealItem>
            <p className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary uppercase">
              {homeExperience.eyebrow}
            </p>
          </RevealItem>
          <RevealGroup stagger={0.08}>
            <RevealItem>
              <h2
                id="home-experience-title"
                className="mt-5 text-3xl leading-[1.12] font-semibold tracking-tight text-secondary sm:text-4xl md:text-[2.65rem]"
              >
                {homeExperience.title}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary/70 sm:text-lg">
                {homeExperience.description}
              </p>
            </RevealItem>
          </RevealGroup>

          <RevealItem>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                to={homeExperience.cta.to}
                className={`inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-primary-light transition-opacity hover:opacity-95 ${focusRing}`}
              >
                {homeExperience.cta.label}
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`tel:${homeExperience.phone.replace(/\s/g, '')}`}
                className={`inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary ${focusRing}`}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary/15 bg-primary-light/60"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.6 10.8a12.4 12.4 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 4 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.24 1Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {homeExperience.phone}
              </a>
            </div>
          </RevealItem>
        </ScrollReveal>
      </div>

      <ScrollReveal
        as="ul"
        className="mt-14 grid grid-cols-2 gap-8 border-t border-secondary/10 pt-10 sm:grid-cols-4 lg:mt-16"
        stagger={0.1}
      >
        {homeExperience.bottomStats.map((stat) => (
          <RevealItem as="li" key={stat.id} className="text-center">
            <div
              className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary sm:h-12 sm:w-12"
              aria-hidden="true"
            >
              <CompanyStatsIcon name={stat.icon} />
            </div>
            <p className="text-xs font-semibold tracking-[0.16em] text-secondary/60 uppercase sm:text-[13px]">
              {stat.label}
            </p>
          </RevealItem>
        ))}
      </ScrollReveal>
    </div>
  </section>
)

export default HomeExperience
