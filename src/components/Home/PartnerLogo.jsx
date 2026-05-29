import { useState } from 'react'

const PartnerLogo = ({ partner, className = 'h-10 w-auto max-w-[140px] object-contain sm:h-12' }) => {
  const [src, setSrc] = useState(partner.src)

  return (
    <img
      src={src}
      alt={partner.name}
      className={className}
      onError={() => {
        if (partner.fallback && src !== partner.fallback) {
          setSrc(partner.fallback)
        }
      }}
    />
  )
}

export default PartnerLogo
