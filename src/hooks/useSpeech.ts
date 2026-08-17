import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Web Speech API (speechSynthesis) を使った日本語読み上げフック。
 * 端末に日本語音声がある場合はそれを優先して選ぶ。
 */
export function useSpeech() {
  const [supported] = useState(() => typeof window !== 'undefined' && 'speechSynthesis' in window)
  const [speakingId, setSpeakingId] = useState<string | null>(null)
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    if (!supported) return

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices()
      voiceRef.current =
        voices.find((v) => v.lang === 'ja-JP') ??
        voices.find((v) => v.lang.startsWith('ja')) ??
        null
    }

    pickVoice()
    window.speechSynthesis.addEventListener('voiceschanged', pickVoice)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', pickVoice)
  }, [supported])

  const speak = useCallback(
    (text: string, id?: string, rate = 0.95) => {
      if (!supported) return
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ja-JP'
      utterance.rate = rate
      utterance.pitch = 1.1
      if (voiceRef.current) utterance.voice = voiceRef.current

      utterance.onstart = () => setSpeakingId(id ?? text)
      utterance.onend = () => setSpeakingId(null)
      utterance.onerror = () => setSpeakingId(null)

      window.speechSynthesis.speak(utterance)
    },
    [supported],
  )

  return { speak, speakingId, supported }
}
