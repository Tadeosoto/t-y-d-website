import { Link } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'
import { RevealGroup, RevealItem } from '../motion/ScrollReveal'

const ServiceCard = ({ service }) => (
  <RevealGroup className="flex h-full flex-col" stagger={0.08}>
    <RevealItem direction="scale">
      <Link
        to={`/servicios/${service.slug}`}
        className={`group block overflow-hidden rounded-2xl ${focusRing}`}
      >
        <img
          src={service.image}
          alt={service.alt}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </Link>
    </RevealItem>
    <RevealItem>
      <h2 className="mt-6 text-xl font-semibold leading-snug text-secondary sm:text-2xl">
        <Link
          to={`/servicios/${service.slug}`}
          className={`transition-colors hover:text-primary ${focusRing}`}
        >
          {service.title}
        </Link>
      </h2>
    </RevealItem>
    <RevealItem>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary/70 sm:text-base">
        {service.description}
      </p>
    </RevealItem>
    <RevealItem>
      <Link
        to={`/servicios/${service.slug}`}
        className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary ${focusRing}`}
      >
        {service.linkLabel}
        <span aria-hidden="true">→</span>
      </Link>
    </RevealItem>
  </RevealGroup>
)

export default ServiceCard
