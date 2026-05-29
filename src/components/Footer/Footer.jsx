import { Link, NavLink } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'
import {
  footerContact,
  footerLegalLinks,
  footerNavLinks,
  footerTagline,
} from '../../data/footer'
import { RevealGroup, RevealItem, ScrollReveal } from '../motion/ScrollReveal'
import WhatsAppLink from '../WhatsAppLink/WhatsAppLink'

const LOGO_SRC = '/images/logos/t&d-logo.png'

const footerNavClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${focusRing} ${
    isActive ? 'text-primary' : 'text-primary-light/85 hover:text-primary'
  }`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-primary-light" aria-label="Pie de página">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 md:py-20">
        <ScrollReveal
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10"
          stagger={0.12}
          viewport={{ amount: 0.12, margin: '0px 0px -24px 0px' }}
        >
          <RevealItem className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
            <RevealGroup className="flex w-full flex-col items-center lg:items-start" stagger={0.08}>
              <RevealItem direction="scale">
                <Link
                  to="/"
                  className={`inline-flex items-center justify-center lg:justify-start ${focusRing}`}
                  aria-label="T&D Ingeniería — inicio"
                >
                  <img
                    src={LOGO_SRC}
                    alt="T&D Ingeniería"
                    className="h-20 w-auto max-w-[280px] object-contain brightness-0 invert sm:h-24 md:h-28"
                  />
                </Link>
              </RevealItem>
              <RevealItem>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-light/75">
                  {footerTagline}
                </p>
              </RevealItem>
            </RevealGroup>
          </RevealItem>

          <RevealItem className="flex flex-col items-center text-center lg:col-span-3 lg:col-start-7 lg:items-start lg:text-left">
            <RevealGroup className="flex w-full flex-col items-center lg:items-start" stagger={0.07}>
              <RevealItem>
                <h2 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Navegación
                </h2>
              </RevealItem>
              <RevealGroup
                as="ul"
                className="mt-5 flex flex-col items-center gap-3 lg:items-start"
                stagger={0.06}
              >
                {footerNavLinks.map((link) => (
                  <RevealItem as="li" key={link.id}>
                    <NavLink to={link.to} className={footerNavClass}>
                      {link.label}
                    </NavLink>
                  </RevealItem>
                ))}
              </RevealGroup>
            </RevealGroup>
          </RevealItem>

          <RevealItem className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left">
            <RevealGroup className="flex w-full flex-col items-center lg:items-start" stagger={0.07}>
              <RevealItem>
                <h2 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Contacto
                </h2>
              </RevealItem>
              <RevealGroup
                as="ul"
                className="mt-5 flex flex-col items-center gap-3 text-sm text-primary-light/85 lg:items-start"
                stagger={0.06}
              >
                <RevealItem as="li">
                  <a
                    href={`mailto:${footerContact.email}`}
                    className={`font-medium transition-colors hover:text-primary ${focusRing}`}
                  >
                    {footerContact.email}
                  </a>
                </RevealItem>
                <RevealItem as="li">
                  <a
                    href={`tel:${footerContact.phone.replace(/\s/g, '')}`}
                    className={`font-medium transition-colors hover:text-primary ${focusRing}`}
                  >
                    {footerContact.phone}
                  </a>
                </RevealItem>
                <RevealItem as="li" className="text-primary-light/70">
                  {footerContact.location}
                </RevealItem>
              </RevealGroup>
              <RevealItem direction="scale" className="flex w-full justify-center lg:justify-start">
                <WhatsAppLink className="mt-6 rounded-full border border-primary/40 bg-primary/15 px-5 py-2.5 text-sm font-semibold text-primary-light transition-colors hover:bg-primary/25" />
              </RevealItem>
            </RevealGroup>
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal
          className="mt-12 flex flex-col items-center gap-4 border-t border-primary-light/15 pt-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:items-end"
          stagger={0.1}
          viewport={{ amount: 0.3, margin: '0px 0px 0px 0px' }}
        >
          <RevealItem>
            <p className="text-sm text-primary-light/55">
              © {year} T&amp;D Ingeniería. Todos los derechos reservados.
            </p>
          </RevealItem>
          <RevealGroup
            as="ul"
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end"
            stagger={0.06}
          >
            {footerLegalLinks.map((link) => (
              <RevealItem as="li" key={link.id}>
                <a
                  href={link.href}
                  className={`text-sm text-primary-light/55 transition-colors hover:text-primary-light ${focusRing}`}
                >
                  {link.label}
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </ScrollReveal>
      </div>
    </footer>
  )
}

export default Footer
