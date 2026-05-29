import { companyStats } from '../../data/companyStats'
import { RevealGroup, RevealItem, ScrollReveal } from '../motion/ScrollReveal'
import CompanyStatsItem from './CompanyStatsItem'

const dividerClass = (index) => {
  const isLast = index === companyStats.length - 1
  const isLeftCol = index % 2 === 0
  const isTopRow = index < 2

  if (isLast) {
    return 'border-secondary/12 sm:border-r-0 lg:border-r-0'
  }

  return [
    'border-secondary/12',
    'border-b sm:border-b-0',
    isTopRow && 'sm:border-b',
    isLeftCol && 'sm:border-r',
    'lg:border-b-0 lg:border-r',
  ]
    .filter(Boolean)
    .join(' ')
}

const CompanyStats = () => (
  <section
    className="border-y border-secondary/10 bg-white"
    aria-label="Indicadores de la empresa"
  >
    <div className="mx-auto max-w-7xl">
      <ScrollReveal
        as="ul"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.12}
      >
        {companyStats.map((stat, index) => (
          <RevealItem as="li" key={stat.id} className={`flex ${dividerClass(index)}`}>
            <CompanyStatsItem stat={stat} />
          </RevealItem>
        ))}
      </ScrollReveal>
    </div>
  </section>
)

export default CompanyStats
