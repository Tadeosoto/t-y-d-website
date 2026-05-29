/** Número en formato internacional sin + (ej. 525512345678) */
export const WHATSAPP_PHONE = '5200000000000'

export const getWhatsAppUrl = (message = 'Hola, me gustaría recibir más información.') => {
  const base = `https://wa.me/${WHATSAPP_PHONE}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
