type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <span
      aria-label="IMOS logo"
      role="img"
      className={`brand-wordmark inline-block whitespace-nowrap uppercase ${className}`.trim()}
    >
      IMOS
    </span>
  )
}
