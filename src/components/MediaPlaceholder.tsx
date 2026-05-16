import type { CSSProperties } from 'react'

type Frame = 'arch' | 'blob' | 'rect'

type Props = {
  frame: Frame
  gradient: string
  aspect?: string
  className?: string
  style?: CSSProperties
}

export function MediaPlaceholder({ frame, gradient, aspect = '4 / 5', className = '', style }: Props) {
  const shape = frame === 'arch' ? 'arch' : frame === 'blob' ? 'blob' : ''
  return (
    <div
      className={`media-placeholder ${shape} ${className}`.trim()}
      style={{
        aspectRatio: aspect,
        background: gradient,
        ...style,
      }}
    />
  )
}
