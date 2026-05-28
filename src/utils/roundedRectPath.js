/** Path cerrado en sentido horario desde el centro del borde superior */
export const buildRoundedRectPath = (x, y, width, height, radius) => {
  const r = Math.min(radius, width / 2, height / 2)
  const midX = x + width / 2
  const right = x + width
  const bottom = y + height

  return [
    `M ${midX} ${y}`,
    `L ${right - r} ${y}`,
    `A ${r} ${r} 0 0 1 ${right} ${y + r}`,
    `L ${right} ${bottom - r}`,
    `A ${r} ${r} 0 0 1 ${right - r} ${bottom}`,
    `L ${x + r} ${bottom}`,
    `A ${r} ${r} 0 0 1 ${x} ${bottom - r}`,
    `L ${x} ${y + r}`,
    `A ${r} ${r} 0 0 1 ${x + r} ${y}`,
    `L ${midX} ${y}`,
  ].join(' ')
}

/** Longitud aproximada del contorno (suficiente para stroke-dasharray) */
export const roundedRectPerimeter = (width, height, radius) => {
  const r = Math.min(radius, width / 2, height / 2)
  return 2 * (width + height - 2 * r) + 2 * Math.PI * r
}
