import { useEffect, useState } from 'react'

export const useNavDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const update = () => {
      setDimensions({
        width: element.offsetWidth,
        height: element.offsetHeight,
      })
    }

    update()

    const observer = new ResizeObserver(update)
    observer.observe(element)

    return () => observer.disconnect()
  }, [ref])

  return dimensions
}
