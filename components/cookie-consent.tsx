"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLang } from "@/components/lang-context"

export function CookieConsent() {
  const { lang } = useLang()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShow(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true")
    setShow(false)
  }

  if (!show) return null

  const content = {
    pt: {
      text: "Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com a nossa",
      link: "Política de Privacidade",
      button: "Aceitar",
    },
    en: {
      text: "We use cookies to improve your experience. By continuing to browse, you agree to our",
      link: "Privacy Policy",
      button: "Accept",
    }
  }

  const d = content[lang === "en" ? "en" : "pt"]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-[#e5e7eb] shadow-[0_-4px_24px_rgba(0,0,0,0.06)] p-4 sm:p-6 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[0.9rem] text-[#64748b] leading-[1.6] text-center sm:text-left flex-1">
          {d.text}{" "}
          <Link href="/politica-de-privacidade" className="text-[#0169fc] font-semibold hover:underline">
            {d.link}
          </Link>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="shrink-0 px-6 py-2.5 text-[0.9rem] font-bold bg-[#0169fc] text-white rounded-full transition-all hover:bg-[#0155d0] hover:shadow-[0_2px_8px_rgba(1,105,252,0.25)]"
        >
          {d.button}
        </button>
      </div>
    </div>
  )
}
