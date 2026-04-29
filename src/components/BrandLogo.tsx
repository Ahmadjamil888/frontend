import { useId } from 'react'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  const blurId = useId()

  return (
    <svg
      width="240"
      height="120"
      viewBox="0 0 240 120"
      aria-label="VEX logo"
      role="img"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={blurId} x="0" y="0" width="240" height="120" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter={`url(#${blurId})`} stroke="#FFF" strokeLinecap="round" strokeLinejoin="round">
        <path d="M52 60C70 32 95 32 120 60C145 88 170 88 188 60C170 32 145 32 120 60C95 88 70 88 52 60Z" strokeWidth="8.5" />
        <path d="M28 60C28 35.2 45.9 15 69 15C84.8 15 98.4 23.6 107.5 37.2" strokeWidth="2.8" />
        <path d="M28 60C28 84.8 45.9 105 69 105C84.8 105 98.4 96.4 107.5 82.8" strokeWidth="2.8" />
        <path d="M132.5 37.2C141.6 23.6 155.2 15 171 15C194.1 15 212 35.2 212 60" strokeWidth="2.8" />
        <path d="M132.5 82.8C141.6 96.4 155.2 105 171 105C194.1 105 212 84.8 212 60" strokeWidth="2.8" />
        <circle cx="28" cy="60" r="3.8" fill="#FFF" stroke="none" />
        <circle cx="69" cy="15" r="4.8" fill="#FFF" stroke="none" />
        <circle cx="69" cy="105" r="4.8" fill="#FFF" stroke="none" />
        <circle cx="212" cy="60" r="3.8" fill="#FFF" stroke="none" />
        <circle cx="171" cy="15" r="4.8" fill="#FFF" stroke="none" />
        <circle cx="171" cy="105" r="4.8" fill="#FFF" stroke="none" />
        <circle cx="120" cy="60" r="5" fill="#FFF" stroke="none" />
      </g>
    </svg>
  )
}
