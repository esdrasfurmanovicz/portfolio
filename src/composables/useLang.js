import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'lang'
const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
const browserLang = typeof navigator !== 'undefined' && navigator.language?.startsWith('pt') ? 'pt' : 'en'

export const lang = ref(stored || browserLang)

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang.value === 'pt' ? 'pt-BR' : 'en'
  }
  try {
    localStorage.setItem(STORAGE_KEY, lang.value)
  } catch {
    // localStorage unavailable, ignore
  }
})

export function toggleLang() {
  lang.value = lang.value === 'pt' ? 'en' : 'pt'
}

export function useLang() {
  return { lang, toggleLang }
}
