import { focusRing, glassShell, glassShellLogo } from '../../constants/brandGlass'

const LOGO_SRC = '/images/logos/t&d-logo.png'

const navLinks = [
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
]

const HeroNav = () => (
  <nav
    className="pointer-events-auto flex w-auto items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:w-full lg:justify-between lg:gap-0"
    aria-label="Navegación principal"
  >
    <a
      href="/"
      className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full p-0 transition-transform hover:scale-[1.03] ${glassShellLogo} ${focusRing} md:h-auto md:w-auto md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none`}
      aria-label="T&D Ingeniería — inicio"
    >
      <img
        src={LOGO_SRC}
        alt=""
        className="h-auto w-full max-w-full scale-[1.35] object-contain object-center drop-shadow-[0_0_14px_rgba(238,246,220,0.55)] max-md:brightness-110 md:h-16 md:w-auto md:max-w-none md:scale-100 md:brightness-100 md:drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] lg:h-19 xl:h-28 2xl:h-32"
      />
    </a>

    <div
      className={`flex h-14 shrink-0 items-center rounded-full px-1.5 md:h-auto md:px-2 md:py-1.5 lg:px-2.5 lg:py-2 ${glassShell}`}
    >
      <ul className="flex h-full items-center gap-0.5 md:h-auto">
        {navLinks.map((link) => (
          <li key={link.id} className="flex h-full items-center md:h-auto">
            <a
              href={link.href}
              className={`inline-flex h-full items-center justify-center rounded-full px-2.5 text-xs font-semibold leading-none tracking-wide text-primary-light transition-colors hover:bg-primary-light/15 sm:px-4 sm:text-sm md:h-auto md:px-5 md:py-2.5 md:leading-normal lg:px-6 lg:py-3 lg:text-base ${focusRing}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)

export default HeroNav
