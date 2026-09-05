import React, { createContext, useContext, useEffect, useState } from 'react'
import { en, es, type Dictionary, type Language } from '../i18n/translations'

const STORAGE_KEY = 'cv-language'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (saved === 'es' || saved === 'en') {
      setLanguageState(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }

  const t = language === 'es' ? es : en

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  const base =
    'px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200'
  const active = 'bg-accent-600 text-white'
  const inactive = 'text-neutral-500 hover:text-accent-600'

  return (
    <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white p-1">
      <button
        onClick={() => setLanguage('es')}
        className={`${base} ${language === 'es' ? active : inactive}`}
        aria-pressed={language === 'es'}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`${base} ${language === 'en' ? active : inactive}`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  )
}
