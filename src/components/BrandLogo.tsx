import { useId } from 'react'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  const glowId = useId()
  const gradientId = useId()
  const orbitLeftId = useId()
  const orbitRightId = useId()

  return (
    <svg
      width="48"
      height="24"
      viewBox="0 0 240 120"
      aria-label="Connect logo"
      role="img"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#${glowId})`}>
        <path
          d="M38 60C53 24 83 24 101 60C119 96 149 96 164 60C149 24 119 24 101 60C83 96 53 96 38 60Z"
          stroke={`url(#${gradientId})`}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 60C24 37 40 18 64 18C80 18 94 26 102 39"
          stroke={`url(#${orbitLeftId})`}
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <path
          d="M24 60C24 83 40 102 64 102C80 102 94 94 102 81"
          stroke={`url(#${orbitLeftId})`}
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <path
          d="M138 39C146 26 160 18 176 18C200 18 216 37 216 60"
          stroke={`url(#${orbitRightId})`}
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <path
          d="M138 81C146 94 160 102 176 102C200 102 216 83 216 60"
          stroke={`url(#${orbitRightId})`}
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <circle cx="24" cy="60" r="4" fill="#FFFFFF" />
        <circle cx="63" cy="18" r="4.8" fill="#FFFFFF" />
        <circle cx="63" cy="102" r="4.8" fill="#FFFFFF" />
        <circle cx="216" cy="60" r="4" fill="#FFFFFF" />
        <circle cx="177" cy="18" r="4.8" fill="#FFFFFF" />
        <circle cx="177" cy="102" r="4.8" fill="#FFFFFF" />
        <circle cx="120" cy="60" r="4.4" fill="#FFFFFF" />
      </g>
      <defs>
        <filter id={glowId} x="0" y="0" width="240" height="120" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id={gradientId} x1="38" y1="60" x2="164" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.55" stopColor="#FFF8F4" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id={orbitLeftId} x1="24" y1="18" x2="102" y2="102" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#DADADA" />
        </linearGradient>
        <linearGradient id={orbitRightId} x1="138" y1="18" x2="216" y2="102" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#DADADA" />
        </linearGradient>
      </defs>
    </svg>
  )
}
