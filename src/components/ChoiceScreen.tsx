import type { Category } from '../data/categories'
import { ChoiceButton } from './ChoiceButton'

interface ChoiceScreenProps {
  category: Category
  pageIndex: number
  speakingId: string | null
  onBack: () => void
  onOtherChoices: () => void
  onPick: (optionId: string, icon: string, label: string, speech: string) => void
}

export function ChoiceScreen({
  category,
  pageIndex,
  speakingId,
  onBack,
  onOtherChoices,
  onPick,
}: ChoiceScreenProps) {
  const options = category.pages[pageIndex]
  const hasMorePages = category.pages.length > 1

  return (
    <div className="screen">
      <div className="screen__header">
        <button type="button" className="back-button" onClick={onBack}>
          ← もどる
        </button>
        <h1 className="screen__title screen__title--inline">
          <span aria-hidden="true">{category.icon}</span> {category.label}
        </h1>
      </div>

      <div className="choice-grid" key={pageIndex}>
        {options.map((option) => (
          <ChoiceButton
            key={option.id}
            icon={option.icon}
            label={option.label}
            color={category.color}
            active={speakingId === option.id}
            onClick={() => onPick(option.id, option.icon, option.label, option.speech ?? option.label)}
          />
        ))}
      </div>

      {hasMorePages && (
        <button type="button" className="other-choices-button" onClick={onOtherChoices}>
          🔄 べつの せんたくしを みる
        </button>
      )}
    </div>
  )
}
