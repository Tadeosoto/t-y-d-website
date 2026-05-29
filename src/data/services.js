export const servicesCategoryLabel = 'Nuestros servicios'

export const servicesIntro = {
  eyebrow: 'Nuestros servicios',
  title: 'Más que ejecución: tu aliado integral en ingeniería corporativa.',
  description:
    'Integramos obra civil, instalaciones eléctricas, energía solar y adecuación de espacios con un solo equipo técnico, desde el diseño hasta la entrega.',
  cta: 'Explorar servicios',
  ctaHref: '/servicios#servicios-principales',
}

export const mainServices = [
  {
    id: 'interiores',
    slug: 'interiores',
    shortTitle: 'Interiores corporativos',
    title: 'Mantenimiento y adecuación de interiores empresariales',
    description:
      'Diseñamos, ejecutamos y mantenemos ambientes de trabajo con estándares corporativos, acabados de calidad y plazos de entrega eficientes.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop',
    alt: 'Oficina corporativa con acabados de interiores',
    linkLabel: 'Más información',
    detail: {
      eyebrow: 'Espacios corporativos',
      lead: 'Transformamos oficinas e instalaciones empresariales con soluciones de interiorismo ejecutadas por equipos propios y supervisión técnica en cada etapa.',
      headline:
        'Espacios de trabajo que reflejan la operación y el crecimiento de tu empresa.',
      body: [
        'Realizamos adecuaciones, remodelaciones y mantenimiento preventivo y correctivo en espacios corporativos, alineados a la operación diaria de tu empresa.',
        'Coordinamos mobiliario, acabados, señalética y obra menor con procesos claros para garantizar continuidad operativa durante la ejecución.',
      ],
      secondaryImage:
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80&auto=format&fit=crop',
      secondaryAlt: 'Detalle de espacio de trabajo corporativo',
    },
  },
  {
    id: 'solar',
    slug: 'paneles-solares',
    shortTitle: 'Energía solar',
    title: 'Instalación de paneles solares para empresas',
    description:
      'Soluciones fotovoltaicas con supervisión técnica, cumplimiento normativo y ahorro energético medible para instalaciones industriales y corporativas.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop',
    alt: 'Paneles solares en cubierta industrial',
    linkLabel: 'Más información',
    detail: {
      eyebrow: 'Energía solar',
      lead: 'Diseñamos e instalamos sistemas fotovoltaicos que reducen costos energéticos y fortalecen la sostenibilidad de tu operación empresarial.',
      headline:
        'Tu transición energética empieza con una estrategia técnica y legalmente sólida.',
      body: [
        'Evaluamos consumo, sombras y condiciones de cubierta para proponer la solución técnica y económica más adecuada a tu instalación.',
        'Gestionamos ingeniería, instalación, pruebas y documentación para cumplir normativa y facilitar la operación del sistema a largo plazo.',
      ],
      secondaryImage:
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80&auto=format&fit=crop',
      secondaryAlt: 'Detalle de instalación solar',
    },
  },
  {
    id: 'electrico',
    slug: 'instalaciones-electricas',
    shortTitle: 'Instalaciones eléctricas',
    title: 'Obra civil e instalaciones de baja y media tensión',
    description:
      'Proyectos integrales para oficinas e industria: eléctrico, infraestructura y adecuaciones con un solo equipo y supervisión especializada.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop',
    alt: 'Instalación eléctrica en entorno industrial',
    linkLabel: 'Más información',
    detail: {
      eyebrow: 'Instalaciones eléctricas',
      lead: 'Ejecutamos obra civil y sistemas eléctricos de baja y media tensión con enfoque en seguridad, normativa y continuidad operativa.',
      headline:
        'Infraestructura eléctrica confiable para operaciones industriales y corporativas.',
      body: [
        'Atendemos ampliaciones, remodelaciones e instalaciones nuevas en plantas, oficinas y naves industriales con un solo equipo técnico.',
        'Integramos tableros, canalizaciones, tierras físicas y pruebas de puesta en marcha con documentación técnica completa.',
      ],
      secondaryImage:
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&auto=format&fit=crop',
      secondaryAlt: 'Detalle de trabajo eléctrico en sitio',
    },
  },
]

export const getServiceBySlug = (slug) =>
  mainServices.find((service) => service.slug === slug)
