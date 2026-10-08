export interface AnimatedIconProps {
  size?: number | string
  color?: string
  strokeWidth?: number
  className?: string
  disableHover?: boolean
  autoplay?: boolean
  loop?: boolean
}

export interface AnimatedIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}
