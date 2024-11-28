"use client"

import { useLanguage } from "@/lib/i18n"
import { translations } from "@/lib/translations"

interface TranslateProps {
  path: string
  children: string
}

export function Translate({ path, children }: TranslateProps) {
  const { language } = useLanguage()
  
  // Split the path into parts (e.g., "home.hero.title" -> ["home", "hero", "title"])
  const parts = path.split('.')
  
  // Navigate through the translations object
  let translation: any = translations[language]
  for (const part of parts) {
    translation = translation?.[part]
  }
  
  // Return the translation if found, otherwise return the children as fallback
  return translation || children
}