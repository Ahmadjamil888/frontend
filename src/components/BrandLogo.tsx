type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <span
      aria-label="connect ai logo"
      role="img"
      className={`brand-wordmark inline-block whitespace-nowrap lowercase text-white ${className}`.trim()}
    >
      connect ai
    </span>
  )
}
