/** Suma los delays de frames de un GIF (Graphic Control Extension) en ms */
export const parseGifDurationMs = (bytes) => {
  if (bytes.length < 13) return 0

  const sig = String.fromCharCode(...bytes.slice(0, 6))
  if (sig !== 'GIF87a' && sig !== 'GIF89a') return 0

  let duration = 0
  let i = 13
  const packed = bytes[10]

  if (packed & 0x80) {
    i += 3 * 2 ** ((packed & 0x07) + 1)
  }

  while (i < bytes.length) {
    const block = bytes[i]

    if (block === 0x21) {
      const label = bytes[i + 1]
      if (label === 0xf9) {
        duration += (bytes[i + 4] + bytes[i + 5] * 256) * 10
      }
      i += 2
      let size = bytes[i]
      while (size > 0) {
        i += 1 + size
        size = bytes[i]
      }
      i += 1
      continue
    }

    if (block === 0x2c) {
      const imagePacked = bytes[i + 9]
      i += 10
      if (imagePacked & 0x80) {
        i += 3 * 2 ** ((imagePacked & 0x07) + 1)
      }
      i += 1
      let size = bytes[i]
      while (size > 0) {
        i += 1 + size
        size = bytes[i]
      }
      i += 1
      continue
    }

    if (block === 0x3b) break
    i += 1
  }

  return duration
}

export const getGifDurationMs = async (url, fallbackMs = 6000) => {
  try {
    const response = await fetch(url)
    if (!response.ok) return fallbackMs

    const buffer = await response.arrayBuffer()
    const duration = parseGifDurationMs(new Uint8Array(buffer))

    return duration > 0 ? duration : fallbackMs
  } catch {
    return fallbackMs
  }
}
