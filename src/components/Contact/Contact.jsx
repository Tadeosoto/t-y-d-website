import { contactCopy } from '../../data/contactForm'
import ContactForm from './ContactForm'

const Contact = () => (
  <section
    id="contacto"
    className="bg-primary-light"
    aria-labelledby="contact-heading"
  >
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:gap-16 md:px-10 md:py-28 lg:grid-cols-2 lg:items-start lg:gap-20 lg:py-32">
      <header className="lg:sticky lg:top-24">
        <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
          <span
            className="inline-block h-2.5 w-2.5 shrink-0 bg-primary"
            aria-hidden="true"
          />
          {contactCopy.eyebrow}
        </p>
        <h2
          id="contact-heading"
          className="mt-6 max-w-xl text-3xl leading-[1.08] font-medium tracking-tight text-secondary sm:text-4xl md:text-5xl lg:text-[3.25rem]"
        >
          {contactCopy.title}
        </h2>
      </header>

      <ContactForm />
    </div>
  </section>
)

export default Contact
