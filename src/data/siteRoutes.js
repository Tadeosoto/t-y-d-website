import { mainServices } from './services'

export const serviceNavChildren = mainServices.map((service) => ({
  id: service.id,
  label: service.shortTitle,
  to: `/servicios/${service.slug}`,
}))

export const siteNavLinks = [
  { id: 'inicio', label: 'Inicio', to: '/' },
  { id: 'quienes-somos', label: '¿Quiénes somos?', to: '/quienes-somos' },
  {
    id: 'servicios',
    label: 'Servicios',
    to: '/servicios',
    children: serviceNavChildren,
  },
  { id: 'contacto', label: 'Contacto', to: '/contacto' },
]
