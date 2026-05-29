import { useState } from 'react'
import { focusRing } from '../../constants/brandGlass'
import { contactTopics } from '../../data/contactForm'
import ContactUnderlineField from './ContactUnderlineField'

const initialState = {
  name: '',
  email: '',
  company: '',
  topic: '',
  message: '',
}

const ContactForm = () => {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-primary/30 bg-primary-light/60 px-6 py-10 text-secondary"
        role="status"
      >
        <p className="text-lg font-medium">Gracias por escribirnos.</p>
        <p className="mt-2 text-secondary/75">
          Recibimos tu mensaje y nos pondremos en contacto contigo pronto.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
          className={`mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline ${focusRing}`}
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-8 md:gap-10"
      noValidate
    >
      <ContactUnderlineField
        id="contact-name"
        label="Nombre"
        name="name"
        required
        autoComplete="name"
        value={form.name}
        onChange={handleChange}
      />
      <ContactUnderlineField
        id="contact-email"
        label="Correo"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={form.email}
        onChange={handleChange}
      />
      <ContactUnderlineField
        id="contact-company"
        label="Empresa"
        name="company"
        autoComplete="organization"
        value={form.company}
        onChange={handleChange}
      />
      <ContactUnderlineField
        id="contact-topic"
        label="Área de interés"
        name="topic"
        as="select"
        required
        options={contactTopics}
        value={form.topic}
        onChange={handleChange}
      />
      <ContactUnderlineField
        id="contact-message"
        label="Mensaje"
        name="message"
        as="textarea"
        required
        placeholder="Cuéntanos qué necesitas…"
        value={form.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className={`group flex w-full items-stretch overflow-hidden rounded-full bg-secondary text-primary-light transition-opacity hover:opacity-95 ${focusRing}`}
      >
        <span className="flex flex-1 items-center justify-center px-6 py-4 text-base font-medium tracking-wide">
          Enviar
        </span>
        <span
          className="m-1.5 flex w-14 shrink-0 items-center justify-center rounded-full bg-primary text-secondary transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 9H14M14 9L10 5M14 9L10 13"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </form>
  )
}

export default ContactForm
