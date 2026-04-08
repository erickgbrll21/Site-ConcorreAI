"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import { Globe, Menu, X } from "lucide-react"
import { useLang } from "@/components/lang-context"
import type { Lang } from "@/lib/i18n"

export function Navbar() {
  const { lang, t, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: "smooth" })
    setMobileOpen(false)
  }, [])

  const links = useMemo(
    () => [
      { label: t.nav.sobre, id: "sobre" },
      { label: t.nav.empresas, id: "solucoes-empresas" },
      { label: t.nav.orgaos, id: "solucoes-orgaos" },
      { label: t.nav.como, id: "como-funciona" },
      { label: t.nav.contato, id: "contato" },
    ],
    [t],
  )

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-[1000] w-[min(1200px,calc(100%-1rem))] max-w-[1200px] transition-all duration-400 rounded-full px-3 sm:px-6 ${
          scrolled
            ? "top-4 bg-white/95 backdrop-blur-[20px] border border-[#e5e7eb] shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-3"
            : "top-6 bg-white border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.04)] py-4"
        }`}
      >
        <div className="flex min-w-0 items-center justify-between gap-2">
          <button
            onClick={() => scrollTo("hero")}
            className="flex shrink-0 items-center gap-2 sm:gap-2.5"
            aria-label="ConcorreAI — início"
          >
            <Image
              src="/icon.png"
              alt=""
              width={40}
              height={40}
              className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 object-contain"
              priority
            />
            <span className="text-left text-[0.95rem] font-extrabold tracking-tight text-[#0f172a] sm:text-[1.02rem]">
              Concorre<span className="text-[#0169fc]">AI</span>
            </span>
          </button>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex xl:px-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="rounded-lg px-1.5 py-2 text-center text-[0.72rem] font-medium leading-tight text-[#64748b] transition-all hover:bg-[#f8fafc] hover:text-[#0f172a] 2xl:px-2.5 2xl:text-[0.85rem]"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 xl:flex xl:gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 h-10 bg-[#f8fafc] border border-[#e5e7eb] rounded-full transition-all hover:bg-[#f1f5f9]"
              >
                <Globe className="w-3 h-3 text-[#0169fc]" />
                <span className="text-sm font-bold text-[#0f172a]">{lang.toUpperCase()}</span>
              </button>
              {langOpen && (
                <div className="absolute top-[46px] right-0 min-w-[136px] flex flex-col bg-white border border-[#e5e7eb] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-[6px] z-[1100]">
                  {(["pt", "en"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false) }}
                      className="text-left rounded-lg px-[10px] py-2 text-sm text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-colors"
                    >
                      {l === "pt" ? "🇧🇷 Português" : "🇺🇸 English"}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => scrollTo("contato")}
              className="px-3 py-2 text-[11px] font-medium leading-tight sm:px-4 sm:py-2.5 sm:text-[12px] xl:px-5 xl:text-[13px] bg-[#0169fc] text-white border border-[#0169fc] rounded-full transition-all duration-300 hover:bg-[#0155d0] hover:border-[#0155d0] shadow-[0_2px_8px_rgba(1,105,252,0.2)]"
            >
              {t.nav.demo}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#0f172a] xl:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed top-[88px] left-0 right-0 z-[999] flex max-h-[calc(100vh-5.5rem)] flex-col gap-2 overflow-y-auto border-b border-[#e5e7eb] bg-white/98 p-5 pb-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-[20px] sm:top-[96px]">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left text-[15px] font-medium text-[#64748b] px-4 py-3 rounded-lg transition-all hover:text-[#0f172a] hover:bg-[#f8fafc]"
            >
              {l.label}
            </button>
          ))}
          <div className="flex items-center gap-4 px-4 pt-3">
            <button
              onClick={() => { setLang(lang === "pt" ? "en" : "pt") }}
              className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
            >
              <Globe className="w-4 h-4 text-[#0169fc]" />
              {lang === "pt" ? "EN" : "PT"}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
