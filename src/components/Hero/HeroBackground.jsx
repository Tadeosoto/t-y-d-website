import { AnimatePresence, motion } from 'motion/react'

const HeroBackground = ({ slide, slideKey }) => {
  if (!slide) return null

  return (
    <div className="absolute inset-0 overflow-hidden bg-secondary">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            key={`${slide.id}-${slideKey}`}
            src={slide.background}
            alt=""
            className="h-full w-full scale-105 object-cover brightness-[0.55] saturate-[0.85]"
          />
          <div
            className="absolute inset-0 bg-black/45"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-linear-to-b from-black/55 via-black/40 to-black/65"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default HeroBackground
