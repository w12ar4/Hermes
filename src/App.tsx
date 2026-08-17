import { useState } from 'react'
import { categories, type Category } from './data/categories'
import { CategoryGrid } from './components/CategoryGrid'
import { ChoiceScreen } from './components/ChoiceScreen'
import { SpokenBanner } from './components/SpokenBanner'
import { useSpeech } from './hooks/useSpeech'

interface LastSpoken {
  icon: string
  label: string
}

export default function App() {
  const [category, setCategory] = useState<Category | null>(null)
  const [pageIndex, setPageIndex] = useState(0)
  const [lastSpoken, setLastSpoken] = useState<LastSpoken | null>(null)
  const { speak, speakingId, supported } = useSpeech()

  const handleSelectCategory = (next: Category) => {
    setCategory(next)
    setPageIndex(0)
    setLastSpoken(null)
  }

  const handleBack = () => {
    setCategory(null)
    setLastSpoken(null)
  }

  const handleOtherChoices = () => {
    if (!category) return
    setPageIndex((prev) => (prev + 1) % category.pages.length)
  }

  const handlePick = (optionId: string, icon: string, label: string, speechText: string) => {
    speak(speechText, optionId)
    setLastSpoken({ icon, label })
  }

  return (
    <div className="app">
      {!supported && (
        <div className="unsupported-banner">
          このブラウザは音声読み上げに対応していません。えらんだ内容は画面に表示されます。
        </div>
      )}

      {category ? (
        <ChoiceScreen
          category={category}
          pageIndex={pageIndex}
          speakingId={speakingId}
          onBack={handleBack}
          onOtherChoices={handleOtherChoices}
          onPick={handlePick}
        />
      ) : (
        <CategoryGrid categories={categories} onSelect={handleSelectCategory} />
      )}

      {lastSpoken && <SpokenBanner icon={lastSpoken.icon} label={lastSpoken.label} />}
    </div>
  )
}
