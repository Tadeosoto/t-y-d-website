import { RevealGroup, RevealItem } from '../motion/ScrollReveal'
import CompanyStatsIcon from './CompanyStatsIcon'

const CompanyStatsItem = ({ stat }) => (
  <div className="flex min-h-[88px] w-full flex-1 items-center justify-center px-6 py-8 sm:min-h-[96px] sm:px-8 md:py-10 lg:px-10">
    <RevealGroup
      className="flex w-full max-w-[280px] items-center gap-4 sm:gap-5"
      stagger={0.08}
    >
      <RevealItem direction="scale">
        <CompanyStatsIcon name={stat.icon} />
      </RevealItem>
      <RevealGroup className="min-w-0 text-left" stagger={0.07}>
        <RevealItem>
          <p className="text-3xl leading-none font-bold tracking-tight text-secondary sm:text-4xl md:text-[2.5rem]">
            {stat.value}
          </p>
        </RevealItem>
        <RevealItem>
          <p className="mt-1.5 text-sm leading-snug font-medium text-secondary/70 sm:text-[15px]">
            {stat.label}
          </p>
        </RevealItem>
      </RevealGroup>
    </RevealGroup>
  </div>
)

export default CompanyStatsItem
