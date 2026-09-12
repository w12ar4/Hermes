interface VoiceSettingsProps {
  voices: SpeechSynthesisVoice[]
  voiceURI: string | null
  rate: number
  supported: boolean
  onSelectVoice: (uri: string) => void
  onChangeRate: (rate: number) => void
  onTryVoice: (uri: string) => void
  onBack: () => void
}

const RATE_OPTIONS: { value: number; label: string }[] = [
  { value: 0.7, label: 'ゆっくり' },
  { value: 0.95, label: 'ふつう' },
  { value: 1.2, label: 'はやい' },
]

export function VoiceSettings({
  voices,
  voiceURI,
  rate,
  supported,
  onSelectVoice,
  onChangeRate,
  onTryVoice,
  onBack,
}: VoiceSettingsProps) {
  return (
    <div className="screen">
      <div className="screen__header">
        <button type="button" className="back-button" onClick={onBack}>
          ← もどる
        </button>
        <h1 className="screen__title screen__title--inline">🔊 こえの せってい</h1>
      </div>

      {!supported && (
        <p className="screen__subtitle">このブラウザは音声読み上げに対応していません。</p>
      )}

      {supported && (
        <>
          <p className="screen__subtitle">はやさ</p>
          <div className="rate-options">
            {RATE_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`rate-option${rate === option.value ? ' is-selected' : ''}`}
                onClick={() => onChangeRate(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <p className="screen__subtitle" style={{ marginTop: '1.5rem' }}>
            こえ
          </p>
          {voices.length === 0 ? (
            <p className="screen__subtitle">つかえる こえが みつかりません。</p>
          ) : (
            <ul className="voice-list">
              {voices.map((voice) => (
                <li key={voice.voiceURI} className="voice-list__item">
                  <button
                    type="button"
                    className={`voice-option${voice.voiceURI === voiceURI ? ' is-selected' : ''}`}
                    onClick={() => onSelectVoice(voice.voiceURI)}
                  >
                    <span className="voice-option__name">{voice.name}</span>
                    <span className="voice-option__lang">{voice.lang}</span>
                  </button>
                  <button
                    type="button"
                    className="voice-try-button"
                    aria-label={`${voice.name} をためす`}
                    onClick={() => onTryVoice(voice.voiceURI)}
                  >
                    ▶
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}
