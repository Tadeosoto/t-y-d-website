import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { NavLink, useLocation } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'

const ChevronIcon = ({ open }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
  >
    <path
      d="M2.5 4.5L6 8L9.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const subListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
}

const subItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
}

const subItemClass = ({ isActive }) =>
  `inline-flex rounded-lg px-4 py-2.5 text-base font-medium transition-colors sm:text-lg ${focusRing} ${
    isActive
      ? 'bg-primary-light text-secondary'
      : 'text-secondary/70 hover:bg-primary-light/60 hover:text-secondary'
  }`

const MobileNavGroup = ({ item, onClose, variants }) => {
  const location = useLocation()
  const isSectionActive = location.pathname.startsWith(item.to)
  const [expanded, setExpanded] = useState(isSectionActive)

  const toggle = () => setExpanded((value) => !value)

  return (
    <motion.li variants={variants} className="w-full text-center">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={expanded}
        aria-controls={`mobile-subnav-${item.id}`}
        className={`inline-flex items-center justify-center gap-3 rounded-xl px-4 py-2 text-xl font-medium transition-colors sm:text-2xl ${focusRing} ${
          isSectionActive
            ? 'text-secondary'
            : 'text-secondary/80 hover:bg-primary-light/80'
        }`}
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
        {item.label}
        <ChevronIcon open={expanded} />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`mobile-subnav-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.ul
              className="mt-3 flex flex-col items-center gap-1"
              role="group"
              aria-label={`Subpáginas de ${item.label}`}
              variants={subListVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={subItemVariants} className="text-center">
                <NavLink to={item.to} onClick={onClose} className={subItemClass}>
                  Ver todos los servicios
                </NavLink>
              </motion.li>
              {item.children.map((child) => (
                <motion.li key={child.id} variants={subItemVariants} className="text-center">
                  <NavLink to={child.to} onClick={onClose} className={subItemClass}>
                    {child.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default MobileNavGroup
