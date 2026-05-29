import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, stagger, useReducedMotion } from 'motion/react'
import { focusRing } from '../../constants/brandGlass'
import { useNavDimensions } from '../../hooks/useNavDimensions'

const TOGGLE_X = 'calc(100% - 2rem)'
const TOGGLE_Y = '2.25rem'

const navListVariants = {
  open: {
    transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
  },
  closed: {
    transition: { delayChildren: stagger(0.05, { from: 'last' }) },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 40,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
}

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at ${TOGGLE_X} ${TOGGLE_Y})`,
    transition: { type: 'spring', stiffness: 20, restDelta: 2 },
  }),
  closed: {
    clipPath: `circle(28px at ${TOGGLE_X} ${TOGGLE_Y})`,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const sidebarVariantsReduced = {
  open: { opacity: 1, transition: { duration: 0.2 } },
  closed: { opacity: 0, transition: { duration: 0.15 } },
}

const Path = ({ d, variants: pathVariants, transition }) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="currentColor"
    strokeLinecap="round"
    d={d}
    variants={pathVariants}
    transition={transition}
  />
)

const MenuToggle = ({ menuState, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className={`relative z-[70] flex h-11 w-11 items-center justify-center rounded-full text-secondary transition-colors hover:bg-primary-light/60 ${focusRing}`}
    aria-label={menuState === 'open' ? 'Cerrar menú' : 'Abrir menú'}
    aria-expanded={menuState === 'open'}
  >
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 23 23"
      className="overflow-visible"
      initial={false}
      animate={menuState}
    >
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </motion.svg>
  </button>
)

const HeroMobileNav = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const { height } = useNavDimensions(containerRef)
  const prefersReducedMotion = useReducedMotion()

  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((open) => !open)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const menuState = isOpen ? 'open' : 'closed'
  const viewportHeight =
    height || (typeof window !== 'undefined' ? window.innerHeight : 800)

  return (
    <div className="lg:hidden">
      <MenuToggle menuState={menuState} onToggle={toggle} />

      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            className="fixed inset-0 z-[55] bg-secondary/20 backdrop-blur-[2px]"
            aria-label="Cerrar menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
        )}
      </AnimatePresence>

      <motion.nav
        ref={containerRef}
        initial={false}
        animate={menuState}
        custom={prefersReducedMotion ? 0 : viewportHeight}
        className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
        aria-hidden={!isOpen}
      >
        <motion.div
          className="pointer-events-auto absolute top-0 right-0 h-full w-full bg-white"
          variants={prefersReducedMotion ? sidebarVariantsReduced : sidebarVariants}
        />

        <div className="pointer-events-auto absolute inset-0 flex items-center justify-center px-8 pt-16 pb-12">
          <motion.ul
            className="flex w-full max-w-sm flex-col items-center gap-7 sm:gap-9"
            variants={navListVariants}
          >
            {links.map((link) => (
              <motion.li
                key={link.id}
                variants={itemVariants}
                className="w-full text-center"
              >
                <a
                  href={link.href}
                  onClick={close}
                  className={`inline-flex items-center justify-center gap-3 rounded-xl px-4 py-2 text-xl font-medium text-secondary transition-colors hover:bg-primary-light/80 sm:text-2xl ${focusRing}`}
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              </motion.li>
            ))}
            <motion.li variants={itemVariants} className="w-full pt-4 text-center">
              <a
                href="#contacto"
                onClick={close}
                className={`inline-flex min-w-[220px] items-center justify-center rounded-full border border-secondary/20 bg-primary-light/50 px-8 py-3.5 text-base font-semibold text-secondary sm:text-lg ${focusRing}`}
              >
                Consulta gratis
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </motion.nav>
    </div>
  )
}

export default HeroMobileNav
