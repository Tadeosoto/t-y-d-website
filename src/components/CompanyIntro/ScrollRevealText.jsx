import { useMemo } from 'react'
import { useReducedMotion } from 'motion/react'
import ScrollRevealChar from './ScrollRevealChar'

const buildCharGroups = (text) => {
  const words = text.split(' ')
  const groups = []
  let globalIndex = 0

  words.forEach((word, wordIndex) => {
    const chars = word.split('').map((char) => ({
      char,
      index: globalIndex++,
    }))
    groups.push({ id: `w-${wordIndex}`, chars })

    if (wordIndex < words.length - 1) {
      groups.push({
        id: `s-${wordIndex}`,
        chars: [{ char: ' ', index: globalIndex++ }],
      })
    }
  })

  return { groups, total: globalIndex }
}

const ScrollRevealText = ({ text, scrollYProgress }) => {
  const prefersReducedMotion = useReducedMotion()
  const { groups, total } = useMemo(() => buildCharGroups(text), [text])

  if (prefersReducedMotion) {
    return (
      <p className="max-w-5xl text-center text-3xl leading-[1.15] font-medium tracking-tight text-primary md:text-5xl lg:text-6xl">
        {text}
      </p>
    )
  }

  return (
    <p className="txrev max-w-5xl text-center text-3xl leading-[1.15] font-medium tracking-tight text-primary md:text-5xl lg:text-6xl">
      {groups.map((group) => (
        <span
          key={group.id}
          className="word inline-block"
        >
          {group.chars.map(({ char, index }) => (
            <ScrollRevealChar
              key={`${group.id}-${index}`}
              char={char}
              index={index}
              total={total}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </span>
      ))}
    </p>
  )
}

export default ScrollRevealText
