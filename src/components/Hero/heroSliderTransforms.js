import { lerp } from '../../utils/lerp'

const CARD_W = 68
const CARD_H = 74
const CARD_RADIUS = 52
const CARD_BLUR = 20
const GAP_VW = 10
const PASS_TRAVEL = CARD_W + GAP_VW

const PASS_START = 0.38
const PASS_END = 0.64

const sampleKeyframes = (frames, t) => {
  const clamped = Math.min(Math.max(t, 0), 1)
  let i = 0
  while (i < frames.length - 2 && frames[i + 1].t < clamped) i += 1
  const a = frames[i]
  const b = frames[i + 1]
  const span = b.t - a.t || 1
  const p = (clamped - a.t) / span

  const pick = (key, fallback = 0) => lerp(a[key] ?? fallback, b[key] ?? fallback, p)

  return {
    mode: p < 0.5 ? a.mode : b.mode,
    widthVw: pick('widthVw', 100),
    heightVh: pick('heightVh', 100),
    xVw: pick('xVw', 0),
    radiusPx: pick('radiusPx', 0),
    blur: pick('blur', 0),
    opacity: pick('opacity', 1),
    titleOpacity: pick('titleOpacity', 0),
    zIndex: pick('zIndex', 2),
  }
}

const OUTGOING_FRAMES = [
  {
    t: 0,
    mode: 'fullscreen',
    widthVw: 100,
    heightVh: 100,
    xVw: 0,
    radiusPx: 0,
    blur: 0,
    opacity: 1,
    titleOpacity: 1,
    zIndex: 2,
  },
  {
    t: 0.14,
    mode: 'card',
    widthVw: 94,
    heightVh: 88,
    xVw: 0,
    radiusPx: 48,
    blur: 2,
    opacity: 1,
    titleOpacity: 1,
    zIndex: 2,
  },
  {
    t: 0.32,
    mode: 'card',
    widthVw: CARD_W,
    heightVh: CARD_H,
    xVw: 0,
    radiusPx: CARD_RADIUS,
    blur: CARD_BLUR,
    opacity: 1,
    titleOpacity: 0.12,
    zIndex: 2,
  },
  {
    t: PASS_START,
    mode: 'card',
    widthVw: CARD_W,
    heightVh: CARD_H,
    xVw: 0,
    radiusPx: CARD_RADIUS,
    blur: CARD_BLUR,
    opacity: 1,
    titleOpacity: 0,
    zIndex: 1,
  },
  {
    t: PASS_END,
    mode: 'card',
    widthVw: CARD_W,
    heightVh: CARD_H,
    xVw: -PASS_TRAVEL,
    radiusPx: CARD_RADIUS,
    blur: CARD_BLUR,
    opacity: 1,
    titleOpacity: 0,
    zIndex: 1,
  },
  {
    t: 0.78,
    mode: 'card',
    widthVw: CARD_W,
    heightVh: CARD_H,
    xVw: -PASS_TRAVEL - 36,
    radiusPx: CARD_RADIUS,
    blur: CARD_BLUR,
    opacity: 0,
    titleOpacity: 0,
    zIndex: 1,
  },
]

const INCOMING_FRAMES = [
  {
    t: 0,
    mode: 'card',
    widthVw: CARD_W,
    heightVh: CARD_H,
    xVw: PASS_TRAVEL,
    radiusPx: CARD_RADIUS,
    blur: CARD_BLUR,
    opacity: 0,
    titleOpacity: 0,
    zIndex: 1,
  },
  {
    t: PASS_START - 0.001,
    mode: 'card',
    widthVw: CARD_W,
    heightVh: CARD_H,
    xVw: PASS_TRAVEL,
    radiusPx: CARD_RADIUS,
    blur: CARD_BLUR,
    opacity: 0,
    titleOpacity: 0,
    zIndex: 2,
  },
  {
    t: PASS_START,
    mode: 'card',
    widthVw: CARD_W,
    heightVh: CARD_H,
    xVw: PASS_TRAVEL,
    radiusPx: CARD_RADIUS,
    blur: CARD_BLUR,
    opacity: 1,
    titleOpacity: 0,
    zIndex: 2,
  },
  {
    t: PASS_END,
    mode: 'card',
    widthVw: CARD_W,
    heightVh: CARD_H,
    xVw: 0,
    radiusPx: CARD_RADIUS,
    blur: 14,
    opacity: 1,
    titleOpacity: 0.55,
    zIndex: 2,
  },
  {
    t: 0.82,
    mode: 'card',
    widthVw: 94,
    heightVh: 88,
    xVw: 0,
    radiusPx: 36,
    blur: 4,
    opacity: 1,
    titleOpacity: 0.9,
    zIndex: 2,
  },
  {
    t: 1,
    mode: 'fullscreen',
    widthVw: 100,
    heightVh: 100,
    xVw: 0,
    radiusPx: 0,
    blur: 0,
    opacity: 1,
    titleOpacity: 1,
    zIndex: 2,
  },
]

export const HOLD_TRANSFORM = {
  mode: 'fullscreen',
  widthVw: 100,
  heightVh: 100,
  xVw: 0,
  radiusPx: 0,
  blur: 0,
  opacity: 1,
  titleOpacity: 1,
  zIndex: 2,
}

const applyDirection = (sampled, direction) => ({
  ...sampled,
  xVw: sampled.xVw * direction,
})

export const getOutgoingTransform = (t, direction = 1) =>
  applyDirection(sampleKeyframes(OUTGOING_FRAMES, t), direction)

export const getIncomingTransform = (t, direction = 1) =>
  applyDirection(sampleKeyframes(INCOMING_FRAMES, t), direction)
