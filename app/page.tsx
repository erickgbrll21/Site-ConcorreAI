"use client"

import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Ticker } from "@/components/sections/ticker"
import { SolucoesEmpresas } from "@/components/sections/solucoes-empresas"
import { SolucoesOrgaos } from "@/components/sections/solucoes-orgaos"
import { ComoFunciona } from "@/components/sections/como-funciona"
import { Beneficios } from "@/components/sections/beneficios"
import { Servicos } from "@/components/sections/servicos"
import { Sobre } from "@/components/sections/sobre"
import { CtaFinal } from "@/components/sections/cta-final"
import { Contato } from "@/components/sections/contato"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Sobre />
      <SolucoesEmpresas />
      <SolucoesOrgaos />
      <ComoFunciona />
      <Beneficios />
      <Servicos />
      <CtaFinal />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
