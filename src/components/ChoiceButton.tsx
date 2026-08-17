interface ChoiceButtonProps {
  icon: string
  label: string
  color: string
  active?: boolean
  onClick: () => void
}

export function ChoiceButton({ icon, label, color, active, onClick }: ChoiceButtonProps) {
  return (
    <button
      type="button"
      className={`choice-button${active ? ' is-active' : ''}`}
      style={{ '--choice-color': color } as React.CSSProperties}
      onClick={onClick}
    >
      <span className="choice-button__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="choice-button__label">{label}</span>
    </button>
  )
}
