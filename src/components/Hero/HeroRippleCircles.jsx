import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const bounceTransition = (delay = 0) => ({
  delay,
  type: 'spring',
  stiffness: 200,
  damping: 22,
  mass: 0.95,
})

const instantTransition = { duration: 0.01 }

const HeroRippleCircles = ({ slideKey, visible }) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={`ripples-${slideKey}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 h-[min(94vw,820px)] w-[min(94vw,820px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/78 shadow-[inset_0_0_80px_rgba(3,81,42,0.28)]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0, transition: { duration: 0.2 } }}
              transition={
                prefersReducedMotion
                  ? instantTransition
                  : bounceTransition(0.06)
              }
            />

            <motion.div
              className="absolute top-1/2 left-1/2 h-[min(76vw,560px)] w-[min(76vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/48 shadow-[0_0_0_1px_rgba(151,201,33,0.1),inset_0_0_48px_rgba(0,0,0,0.08)]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0, transition: { duration: 0.2 } }}
              transition={
                prefersReducedMotion ? instantTransition : bounceTransition(0)
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HeroRippleCircles
