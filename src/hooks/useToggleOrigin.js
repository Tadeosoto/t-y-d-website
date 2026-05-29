import { useLayoutEffect, useState } from 'react'

/** Centro del botón menú en coordenadas del viewport (para clip-path del círculo). */
export const useToggleOrigin = (toggleRef, isOpen) => {
  const [origin, setOrigin] = useState({ x: 0, y: 0 })

  useLayoutEffect(() => {
    const update = () => {
      const el = toggleRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      setOrigin({
        x: Math.round(rect.left + rect.width / 2),
        y: Math.round(rect.top + rect.height / 2),
      })
    }

    update()
    window.addEventListener('resize', update)
    window.addEventListener('scroll', update, true)
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update, true)
    }
  }, [toggleRef, isOpen])

  return origin
}
