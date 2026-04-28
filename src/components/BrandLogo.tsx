type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 420 140"
      aria-label="Connect AI logo"
      role="img"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M120 28H214L194 60H126C101 60 81 81 81 106C81 131 101 152 126 152H214L194 184H120C78 184 44 150 44 108C44 66 78 28 120 28Z"
        fill="url(#brandGradient)"
        transform="translate(0 -22) scale(1 0.86)"
      />
      <path
        d="M216 121L261 68H291L277 91H295L305 75H337L309 121H278L291 99H274L260 121H216Z"
        fill="url(#brandGradient)"
      />
      <path
        d="M281 121L339 28H373L420 121H385L355 61L322 121H281Z"
        fill="url(#brandGradient)"
      />
      <path d="M86 96L248 35" stroke="url(#brandGradient)" strokeWidth="12" strokeLinecap="round" />
      <path d="M193 69L238 101" stroke="url(#brandGradient)" strokeWidth="12" strokeLinecap="round" />
      <circle cx="84" cy="96" r="17" fill="url(#brandGradient)" />
      <circle cx="192" cy="69" r="17" fill="url(#brandGradient)" />
      <circle cx="249" cy="36" r="17" fill="url(#brandGradient)" />
      <defs>
        <linearGradient id="brandGradient" x1="36" y1="16" x2="387" y2="138" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7F7F7" />
          <stop offset="0.5" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#D8D8D8" />
        </linearGradient>
      </defs>
    </svg>
  )
}
