import { useState } from 'react'
import { categories, type Category } from './data/categories'
import { CategoryGrid } from './components/CategoryGrid'
import { ChoiceScreen } from './components/ChoiceScreen'
import { SpokenBanner } from './components/SpokenBanner'
import { VoiceSettings } from './components/VoiceSettings'
import { useSpeech } from './hooks/useSpeech'

interface LastSpoken {
  icon: string
  label: string
}

type Screen = 'home' | 'category' | 'settings'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [category, setCategory] = useState<Category | null>(null)
  const [pageIndex, setPageIndex] = useState(0)
  const [lastSpoken, setLastSpoken] = useState<LastSpoken | null>(null)
  const { speak, speakingId, supported, voices, voiceURI, setVoice, rate, setRate } = useSpeech()

  const handleSelectCategory = (next: Category) => {
    setCategory(next)
    setPageIndex(0)
    setLastSpoken(null)
    setScreen('category')
  }

  const handleBack = () => {
    setCategory(null)
    setLastSpoken(null)
    setScreen('home')
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

      {screen === 'settings' && (
        <VoiceSettings
          voices={voices}
          voiceURI={voiceURI}
          rate={rate}
          supported={supported}
          onSelectVoice={setVoice}
          onChangeRate={setRate}
          onTryVoice={(uri) => speak('こんにちは、よろしくね', 'voice-preview', uri)}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'category' && category && (
        <ChoiceScreen
          category={category}
          pageIndex={pageIndex}
          speakingId={speakingId}
          onBack={handleBack}
          onOtherChoices={handleOtherChoices}
          onPick={handlePick}
        />
      )}

      {screen === 'home' && (
        <CategoryGrid
          categories={categories}
          onSelect={handleSelectCategory}
          onOpenSettings={() => setScreen('settings')}
        />
      )}

      {lastSpoken && screen === 'category' && (
        <SpokenBanner icon={lastSpoken.icon} label={lastSpoken.label} />
      )}
    </div>
  )
}
