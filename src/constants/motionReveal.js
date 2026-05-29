export const revealEase = [0.22, 1, 0.36, 1]

export const revealViewport = {
  once: true,
  amount: 0.22,
  margin: '0px 0px -48px 0px',
}

export const getRevealContainerVariants = (staggerChildren = 0.12, prefersReducedMotion = false) => ({
  hidden: {},
  visible: {
    transition: prefersReducedMotion
      ? { staggerChildren: 0, delayChildren: 0 }
      : { staggerChildren, delayChildren: 0.06 },
  },
})

export const revealItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: revealEase },
  },
}

export const revealItemFromLeftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: revealEase },
  },
}

export const revealItemFromRightVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: revealEase },
  },
}

export const revealItemScaleVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: revealEase },
  },
}

export const revealSlideContentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.04 },
  },
}
