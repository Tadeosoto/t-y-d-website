import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'

const CLOSE_DELAY_MS = 220

const ChevronIcon = ({ open }) => (
  <svg
    width="12"
    height="12"
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

const NavDropdown = ({ item }) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const closeTimerRef = useRef(null)
  const location = useLocation()
  const isSectionActive = location.pathname.startsWith(item.to)

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS)
  }

  const handleOpen = () => {
    clearCloseTimer()
    setOpen(true)
  }

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => () => clearCloseTimer(), [])

  return (
    <li
      ref={containerRef}
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={scheduleClose}
      onFocus={handleOpen}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget)) {
          scheduleClose()
        }
      }}
    >
      <div className="inline-flex items-center gap-0.5">
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            `text-[15px] font-medium transition-colors ${focusRing} ${
              isActive || isSectionActive
                ? 'text-secondary'
                : 'text-secondary/75 hover:text-secondary'
            }`
          }
        >
          {item.label}
        </NavLink>
        <button
          type="button"
          className={`rounded-md p-1.5 text-secondary/75 transition-colors hover:text-secondary ${focusRing}`}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={`Submenú de ${item.label}`}
          onClick={() => setOpen((value) => !value)}
        >
          <ChevronIcon open={open} />
        </button>
      </div>

      {open && (
        <div
          className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3"
          onMouseEnter={handleOpen}
          onMouseLeave={scheduleClose}
        >
          <ul
            className="min-w-[16rem] rounded-2xl border border-secondary/10 bg-white py-2 shadow-lg"
            role="menu"
          >
            <li role="none">
              <NavLink
                to={item.to}
                role="menuitem"
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-sm font-medium transition-colors ${focusRing} ${
                    isActive
                      ? 'bg-primary-light text-secondary'
                      : 'text-secondary/80 hover:bg-primary-light/70 hover:text-secondary'
                  }`
                }
              >
                Ver todos los servicios
              </NavLink>
            </li>
            {item.children.map((child) => (
              <li key={child.id} role="none">
                <NavLink
                  to={child.to}
                  role="menuitem"
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm font-medium transition-colors ${focusRing} ${
                      isActive
                        ? 'bg-primary-light text-secondary'
                        : 'text-secondary/80 hover:bg-primary-light/70 hover:text-secondary'
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

export default NavDropdown
