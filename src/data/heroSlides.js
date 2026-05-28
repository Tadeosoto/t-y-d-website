const gif = (name) => `/images/gifs-bg/${name}`

/**
 * Duración de un ciclo completo del GIF (ms), medida del archivo local.
 * El timer del carousel y el borde de progreso usan este valor.
 */
export const heroSlides = [
  {
    id: 'electricas',
    label: 'Instalaciones eléctricas',
    background: gif('instalando-luces.gif'),
    thumbnail: gif('instalando-luces.gif'),
    durationMs: 25100,
  },
  {
    id: 'solar',
    label: 'Instalación de paneles solares',
    background: gif('paneles-solares.gif'),
    thumbnail: gif('paneles-solares.gif'),
    durationMs: 14400,
  },
  {
    id: 'interiores-2',
    label: 'Diseño de interiores corporativos',
    background: gif('oficinas-interiores-2.gif'),
    thumbnail: gif('oficinas-interiores-2.gif'),
    durationMs: 8400,
  },
  {
    id: 'interiores',
    label: 'Mantenimiento de interiores',
    background: gif('oficinas-interiores.gif'),
    thumbnail: gif('oficinas-interiores.gif'),
    durationMs: 30600,
  },
]

export const HERO_SLIDE_DURATION_MS = 6000
