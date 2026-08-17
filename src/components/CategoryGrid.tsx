import type { Category } from '../data/categories'
import { ChoiceButton } from './ChoiceButton'

interface CategoryGridProps {
  categories: Category[]
  onSelect: (category: Category) => void
}

export function CategoryGrid({ categories, onSelect }: CategoryGridProps) {
  return (
    <div className="screen">
      <h1 className="screen__title">なにをはなす？</h1>
      <p className="screen__subtitle">きかれたことに ちかい ものを えらんでね</p>
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
