import { Inter, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { LangProvider } from "@/components/lang-context"
import { CookieConsent } from "@/components/cookie-consent"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "ConcorreAI | IA para licitações — Automatize a participação da sua empresa",
  description:
    "Plataforma com IA que captura editais, analisa oportunidades, automatiza trâmites com órgãos públicos e gera documentos. Apoio jurídico para empresas concorrerem em licitações.",
  keywords:
    "licitações empresa, automação licitação, IA licitações, captura editais, software licitações, ConcorreAI",
  openGraph: {
    title: "ConcorreAI | Automatize licitações com IA",
    description:
      "Captação de editais, análise preditiva, automação e painel em tempo real — com assessoria jurídica especializada.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={cn("antialiased", inter.variable, jetbrains.variable)}>
      <body className="font-sans bg-[#071f43] text-white overflow-x-hidden">
        <LangProvider>
          {children}
          <CookieConsent />
        </LangProvider>
      </body>
    </html>
  )
}
