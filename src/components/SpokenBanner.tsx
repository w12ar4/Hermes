interface SpokenBannerProps {
  icon: string
  label: string
}

export function SpokenBanner({ icon, label }: SpokenBannerProps) {
  return (
    <div className="spoken-banner" role="status" aria-live="polite">
      <span className="spoken-banner__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="spoken-banner__label">{label}</span>
    </div>
  )
}
