export interface AnimatedIconProps {
  size?: number | string
  color?: string
  strokeWidth?: number
  className?: string
  /** Disable hover-triggered animation. Use the exposed `startAnimation`/`stopAnimation` handle instead. */
  disableHover?: boolean
}

export interface AnimatedIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}
