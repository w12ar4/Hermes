import type { Category } from '../data/categories'
import { ChoiceButton } from './ChoiceButton'

interface CategoryGridProps {
  categories: Category[]
  onSelect: (category: Category) => void
  onOpenSettings: () => void
}

export function CategoryGrid({ categories, onSelect, onOpenSettings }: CategoryGridProps) {
  return (
    <div className="screen">
      <div className="screen__header screen__header--home">
        <div>
          <h1 className="screen__title">なにをはなす？</h1>
          <p className="screen__subtitle">きかれたことに ちかい ものを えらんでね</p>
        </div>
        <button type="button" className="settings-button" aria-label="こえのせってい" onClick={onOpenSettings}>
          🔊
        </button>
      </div>
      <div className="choice-grid">
        {categories.map((category) => (
          <ChoiceButton
            key={category.id}
            icon={category.icon}
            label={category.label}
            color={category.color}
            onClick={() => onSelect(category)}
          />
        ))}
      </div>
    </div>
  )
}
