"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import { dictionaries, type Lang, type Dictionary } from "@/lib/i18n"

interface LangContextValue {
  lang: Lang
  t: Dictionary
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt")

  useEffect(() => {
    const saved = localStorage.getItem("siteLang") as Lang | null
    if (saved === "en" || saved === "pt") setLangState(saved)
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem("siteLang", l)
    document.documentElement.lang = l === "en" ? "en" : "pt-BR"
  }, [])

  const toggleLang = useCallback(() => {
    setLang(lang === "pt" ? "en" : "pt")
  }, [lang, setLang])

  const t = dictionaries[lang]

  return <LangContext value={{ lang, t, setLang, toggleLang }}>{children}</LangContext>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LangProvider")
  return ctx
}
