import { useCallback, useEffect, useState } from 'react'

const VOICE_STORAGE_KEY = 'hermes-voice-uri'
const RATE_STORAGE_KEY = 'hermes-speech-rate'
const DEFAULT_RATE = 0.95

function loadStoredVoiceURI(): string | null {
  try {
    return localStorage.getItem(VOICE_STORAGE_KEY)
  } catch {
    return null
  }
}

function loadStoredRate(): number {
  try {
    const stored = localStorage.getItem(RATE_STORAGE_KEY)
    return stored ? Number(stored) : DEFAULT_RATE
  } catch {
    return DEFAULT_RATE
  }
}

/**
 * Web Speech API (speechSynthesis) を使った日本語読み上げフック。
 * 端末にある日本語音声の一覧を提供し、選んだ声・速さを localStorage に保存する。
 */
export function useSpeech() {
  const [supported] = useState(() => typeof window !== 'undefined' && 'speechSynthesis' in window)
  const [speakingId, setSpeakingId] = useState<string | null>(null)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceURI, setVoiceURI] = useState<string | null>(loadStoredVoiceURI)
  const [rate, setRateState] = useState<number>(loadStoredRate)

  useEffect(() => {
    if (!supported) return

    const loadVoices = () => {
      const all = window.speechSynthesis.getVoices()
      const japanese = all.filter((v) => v.lang.startsWith('ja'))
      setVoices(japanese.length > 0 ? japanese : all)
    }

    loadVoices()
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
  }, [supported])

  const setVoice = useCallback((uri: string) => {
    setVoiceURI(uri)
    try {
      localStorage.setItem(VOICE_STORAGE_KEY, uri)
    } catch {
      // localStorage が使えない環境では保存をあきらめる
    }
  }, [])

  const setRate = useCallback((next: number) => {
    setRateState(next)
    try {
      localStorage.setItem(RATE_STORAGE_KEY, String(next))
    } catch {
      // localStorage が使えない環境では保存をあきらめる
    }
  }, [])

  const speak = useCallback(
    (text: string, id?: string, voiceOverrideURI?: string) => {
      if (!supported) return
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ja-JP'
      utterance.rate = rate
      utterance.pitch = 1.1

      const selected = voices.find((v) => v.voiceURI === (voiceOverrideURI ?? voiceURI))
      if (selected) {
        utterance.voice = selected
        utterance.lang = selected.lang
      }

      utterance.onstart = () => setSpeakingId(id ?? text)
      utterance.onend = () => setSpeakingId(null)
      utterance.onerror = () => setSpeakingId(null)

      window.speechSynthesis.speak(utterance)
    },
    [supported, voices, voiceURI, rate],
  )

  return { speak, speakingId, supported, voices, voiceURI, setVoice, rate, setRate }
}
