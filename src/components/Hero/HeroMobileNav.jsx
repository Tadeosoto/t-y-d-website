import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, stagger, useReducedMotion } from 'motion/react'
import { NavLink } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'
import { useNavDimensions } from '../../hooks/useNavDimensions'
import { useToggleOrigin } from '../../hooks/useToggleOrigin'
import MobileNavGroup from '../Nav/MobileNavGroup'
import WhatsAppLink from '../WhatsAppLink/WhatsAppLink'

const TOGGLE_RADIUS = 22
/** Header móvil usa z-[220]; capas del menú justo encima. */
// Navbar móvil: z-220 → backdrop z-221 → fondo circular z-222 → toggle z-230

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

const sidebarVariantsReduced = {
  open: { opacity: 1, transition: { duration: 0.2 } },
  closed: { opacity: 0, transition: { duration: 0.15 } },
}

const createSidebarVariants = (x, y) => ({
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at ${x}px ${y}px)`,
    transition: { type: 'spring', stiffness: 20, restDelta: 2 },
  }),
  closed: {
    clipPath: `circle(${TOGGLE_RADIUS}px at ${x}px ${y}px)`,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
})

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

const MenuToggle = ({ menuState, onToggle, style }) => (
  <button
    type="button"
    onClick={onToggle}
    style={style}
    className={`fixed z-[230] flex size-11 items-center justify-center rounded-full bg-transparent text-secondary ${focusRing}`}
    aria-label={menuState === 'open' ? 'Cerrar menú' : 'Abrir menú'}
    aria-expanded={menuState === 'open'}
    aria-controls="mobile-nav-overlay"
  >
    <motion.svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      className="block shrink-0 overflow-visible"
      initial={false}
      animate={menuState}
      aria-hidden="true"
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
  const toggleRef = useRef(null)
  const containerRef = useRef(null)
  const { height } = useNavDimensions(containerRef)
  const origin = useToggleOrigin(toggleRef, isOpen)
  const prefersReducedMotion = useReducedMotion()

  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((open) => !open)

  const menuState = isOpen ? 'open' : 'closed'
  const viewportHeight =
    height || (typeof window !== 'undefined' ? window.innerHeight : 800)

  const sidebarVariants = useMemo(
    () => createSidebarVariants(origin.x, origin.y),
    [origin.x, origin.y],
  )

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

  const toggleStyle =
    origin.x > 0
      ? {
          left: `${origin.x - TOGGLE_RADIUS}px`,
          top: `${origin.y - TOGGLE_RADIUS}px`,
        }
      : { visibility: 'hidden' }

  const mobileMenuPortal =
    typeof document !== 'undefined'
      ? createPortal(
          <>
            <AnimatePresence>
              {isOpen && (
                <motion.button
                  key="mobile-nav-backdrop"
                  type="button"
                  className="fixed inset-0 z-[221] bg-secondary/25"
                  aria-label="Cerrar menú"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
                  onClick={close}
                />
              )}
            </AnimatePresence>

            <motion.nav
              id="mobile-nav-overlay"
              ref={containerRef}
              initial={false}
              animate={menuState}
              custom={prefersReducedMotion ? 0 : viewportHeight}
              className={`fixed inset-0 z-[222] h-full w-full ${isOpen ? '' : 'pointer-events-none'}`}
              aria-hidden={!isOpen}
            >
              <motion.div
                className={`absolute inset-0 bg-white ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} ${
                  origin.x > 0 ? '' : 'invisible'
                }`}
                variants={
                  prefersReducedMotion ? sidebarVariantsReduced : sidebarVariants
                }
              />

              <div
                className={`absolute inset-0 flex items-center justify-center px-6 py-16 sm:px-8 ${
                  isOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
              >
                <motion.ul
                  className="flex w-full max-w-sm flex-col items-center gap-7 sm:gap-9"
                  initial={false}
                  animate={menuState}
                  variants={navListVariants}
                >
                  {links.map((link) =>
                    link.children ? (
                      <MobileNavGroup
                        key={link.id}
                        item={link}
                        onClose={close}
                        variants={itemVariants}
                      />
                    ) : (
                      <motion.li
                        key={link.id}
                        variants={itemVariants}
                        className="w-full text-center"
                      >
                        <NavLink
                          to={link.to}
                          onClick={close}
                          className={({ isActive }) =>
                            `inline-flex items-center justify-center gap-3 rounded-xl px-4 py-2 text-xl font-medium transition-colors sm:text-2xl ${focusRing} ${
                              isActive
                                ? 'text-secondary'
                                : 'text-secondary/80 hover:bg-primary-light/80'
                            }`
                          }
                        >
                          <span
                            className="h-2 w-2 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          {link.label}
                        </NavLink>
                      </motion.li>
                    ),
                  )}
                  <motion.li variants={itemVariants} className="w-full pt-4 text-center">
                    <WhatsAppLink
                      onClick={close}
                      className={`inline-flex min-w-[220px] items-center justify-center rounded-full border border-secondary/20 bg-primary-light/50 px-8 py-3.5 text-base font-semibold text-secondary sm:text-lg ${focusRing}`}
                    />
                  </motion.li>
                </motion.ul>
              </div>
            </motion.nav>

            <MenuToggle
              menuState={menuState}
              onToggle={toggle}
              style={toggleStyle}
            />
          </>,
          document.body,
        )
      : null

  return (
    <>
      <div ref={toggleRef} className="size-11 shrink-0 lg:hidden" aria-hidden="true" />
      {mobileMenuPortal}
    </>
  )
}

export default HeroMobileNav
