import { useRef } from 'react'
import { useScroll } from 'motion/react'
import { companyIntroText } from '../../data/companyIntro'
import ScrollRevealText from './ScrollRevealText'

const CompanyIntro = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="relative h-[260vh] bg-primary-light"
      aria-label="Sobre la empresa"
    >
      <div className="sticky top-0 flex h-svh w-full items-center justify-center px-6 py-16 md:px-12 md:py-24">
        <ScrollRevealText
          text={companyIntroText}
          scrollYProgress={scrollYProgress}
        />
      </div>
    </section>
  )
}

export default CompanyIntro
