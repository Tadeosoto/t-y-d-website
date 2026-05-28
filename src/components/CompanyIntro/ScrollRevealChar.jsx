import { motion, useMotionTemplate, useTransform } from 'motion/react'

const ScrollRevealChar = ({ char, index, total, scrollYProgress }) => {
  const start = total <= 1 ? 0 : (index / total) * 0.9
  const end = Math.min(start + 0.07, 1)

  const opacity = useTransform(scrollYProgress, [start, end], [0.05, 1])
  const blur = useTransform(scrollYProgress, [start, end], [14, 0])
  const y = useTransform(scrollYProgress, [start, end], [14, 0])
  const blurFilter = useMotionTemplate`blur(${blur}px)`

  return (
    <motion.span
      className="inline-block"
      style={{
        opacity,
        filter: blurFilter,
        y,
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

export default ScrollRevealChar
