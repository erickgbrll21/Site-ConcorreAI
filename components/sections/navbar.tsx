"use client"

import { useState, useEffect, useCallback } from "react"
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

  const links: { label: string; id: string }[] = [
    { label: t.nav.sobre, id: "sobre" },
    { label: t.nav.empresas, id: "solucoes-empresas" },
    { label: t.nav.orgaos, id: "solucoes-orgaos" },
    { label: t.nav.como, id: "como-funciona" },
    { label: t.nav.contato, id: "contato" },
  ]

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-2rem)] max-w-[1200px] transition-all duration-400 rounded-full px-6 ${
          scrolled
            ? "top-4 bg-white/95 backdrop-blur-[20px] border border-[#e5e7eb] shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-3"
            : "top-6 bg-white border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.04)] py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo-concorreai.png"
              alt="ConcorreAI"
              width={168}
              height={42}
              className="h-[38px] w-auto"
              priority
            />
          </button>

          <div className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-[0.85rem] font-medium text-[#64748b] px-3 py-2 rounded-lg transition-all hover:text-[#0f172a] hover:bg-[#f8fafc] whitespace-nowrap"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
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
              className="px-5 py-2.5 text-[13px] font-medium whitespace-nowrap bg-[#0169fc] text-white border border-[#0169fc] rounded-full transition-all duration-300 hover:bg-[#0155d0] hover:border-[#0155d0] shadow-[0_2px_8px_rgba(1,105,252,0.2)]"
            >
              {t.nav.demo}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#0f172a]"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed top-[80px] left-0 right-0 bg-white/98 backdrop-blur-[20px] border-b border-[#e5e7eb] p-5 pb-8 z-[999] flex flex-col gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
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
