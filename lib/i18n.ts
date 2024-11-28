"use client"

import { create } from 'zustand'

type LanguageStore = {
  language: 'en' | 'ar'
  direction: 'ltr' | 'rtl'
  setLanguage: (lang: 'en' | 'ar') => void
}

export const useLanguage = create<LanguageStore>((set) => ({
  language: 'en',
  direction: 'ltr',
  setLanguage: (lang) => set({ 
    language: lang,
    direction: lang === 'ar' ? 'rtl' : 'ltr'
  }),
}))