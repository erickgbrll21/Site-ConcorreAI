import { Inter, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { LangProvider } from "@/components/lang-context"
import { CookieConsent } from "@/components/cookie-consent"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

const siteDescription = "Mais eficiência em licitações com Direito e Tecnologia"

export const metadata: Metadata = {
  title: "ConcorreAI | IA para licitações — Automatize a participação da sua empresa",
  description: siteDescription,
  keywords:
    "licitações empresa, automação licitação, IA licitações, captura editais, software licitações, ConcorreAI, direito, tecnologia",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "ConcorreAI | Automatize licitações com IA",
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConcorreAI",
    description: siteDescription,
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
