import { focusRing } from '../../constants/brandGlass'
import { heroNavLinks } from '../../data/heroSlides'
import HeroMobileNav from './HeroMobileNav'

const LOGO_SRC = '/images/logos/t&d-logo.png'

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12.5 12.5L16 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect
      x="1.5"
      y="3.5"
      width="13"
      height="9"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.25"
    />
    <path
      d="M1.5 5L8 9L14.5 5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
)

const HeroNav = () => (
  <header className="relative z-50 w-full shrink-0 border-b border-secondary/8 bg-white">
    <nav
      className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 sm:h-20 sm:px-6 lg:px-8"
      aria-label="Navegación principal"
    >
      <a
        href="/"
        className={`flex shrink-0 items-center ${focusRing}`}
        aria-label="T&D Ingeniería — inicio"
      >
        <img
          src={LOGO_SRC}
          alt="T&D Ingeniería"
          className="h-12 w-auto object-contain sm:h-14 md:h-16"
        />
      </a>

      <ul className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">
        {heroNavLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className={`text-[15px] font-medium text-secondary/75 transition-colors hover:text-secondary ${focusRing}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className={`hidden items-center justify-center p-2 text-secondary/60 transition-colors hover:text-secondary lg:flex ${focusRing}`}
          aria-label="Buscar"
        >
          <SearchIcon />
        </button>

        <a
          href="#contacto"
          className={`hidden items-center gap-2 rounded-full border border-secondary/20 px-4 py-2 text-sm font-medium text-secondary transition-colors hover:border-secondary/40 hover:bg-primary-light/50 sm:inline-flex sm:px-5 sm:py-2.5 ${focusRing}`}
        >
          <MailIcon />
          <span>Consulta gratis</span>
        </a>

        <HeroMobileNav links={heroNavLinks} />
      </div>
    </nav>
  </header>
)

export default HeroNav
