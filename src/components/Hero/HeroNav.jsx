import { NavLink } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'
import { siteNavLinks } from '../../data/siteRoutes'
import DesktopNav from '../Nav/DesktopNav'
import WhatsAppLink from '../WhatsAppLink/WhatsAppLink'
import HeroMobileNav from './HeroMobileNav'

const LOGO_SRC = '/images/logos/t&d-logo.png'

const HeroNav = () => (
  <header
    data-site-header
    className="fixed inset-x-0 top-0 z-[220] w-full border-b border-secondary/8 bg-white shadow-sm lg:z-50"
  >
    <nav
      className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 sm:h-20 sm:px-6 lg:px-8"
      aria-label="Navegación principal"
    >
      <NavLink
        to="/"
        className={`flex shrink-0 items-center ${focusRing}`}
        aria-label="T&D Ingeniería — inicio"
      >
        <img
          src={LOGO_SRC}
          alt="T&D Ingeniería"
          className="h-12 w-auto object-contain sm:h-14 md:h-16"
        />
      </NavLink>

      <DesktopNav />

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <WhatsAppLink className="hidden rounded-full border border-secondary/20 px-4 py-2 text-sm font-medium text-secondary transition-colors hover:border-secondary/40 hover:bg-primary-light/50 sm:inline-flex sm:px-5 sm:py-2.5" />

        <HeroMobileNav links={siteNavLinks} />
      </div>
    </nav>
  </header>
)

export default HeroNav
