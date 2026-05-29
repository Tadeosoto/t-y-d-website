import { motion, useReducedMotion } from 'motion/react'
import {
  getRevealContainerVariants,
  revealItemFromLeftVariants,
  revealItemFromRightVariants,
  revealItemScaleVariants,
  revealItemVariants,
  revealViewport,
} from '../../constants/motionReveal'

const variantMap = {
  up: revealItemVariants,
  left: revealItemFromLeftVariants,
  right: revealItemFromRightVariants,
  scale: revealItemScaleVariants,
}

export const ScrollReveal = ({
  children,
  className,
  as = 'div',
  stagger = 0.12,
  viewport,
  animateOnMount = false,
  ...rest
}) => {
  const prefersReducedMotion = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      initial="hidden"
      {...(animateOnMount
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { ...revealViewport, ...viewport } })}
      variants={getRevealContainerVariants(stagger, prefersReducedMotion)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Agrupa hijos RevealItem sin variantes propias, para que hereden el estado
 * visible del ScrollReveal ancestro (un motion.div contenedor intermedio
 * bloqueaba la propagación y dejaba el texto en opacity: 0).
 */
export const RevealGroup = ({ children, className, as: Tag = 'div', stagger: _stagger = 0.08, ...rest }) => (
  <Tag className={className} {...rest}>
    {children}
  </Tag>
)

export const RevealItem = ({ children, className, as = 'div', direction = 'up', ...rest }) => {
  const Tag = motion[as]

  return (
    <Tag className={className} variants={variantMap[direction] ?? revealItemVariants} {...rest}>
      {children}
    </Tag>
  )
}
