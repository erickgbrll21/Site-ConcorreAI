"use client"

import { useLang } from "@/components/lang-context"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  const { lang } = useLang()

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] pt-[120px]">
      <Navbar />
      
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#0169fc] transition-colors font-medium mb-8">
          <ArrowLeft className="w-4 h-4" />
          {lang === "en" ? "Back to Home" : "Voltar ao Início"}
        </Link>

        <h1 className="text-4xl font-extrabold mb-6 text-[#071f43]">
          {lang === "en" ? "Privacy Policy" : "Política de Privacidade"}
        </h1>
        
        <p className="text-[#64748b] mb-10">
          {lang === "en" ? "Last updated:" : "Última atualização:"} 07/04/2026
        </p>

        <div className="space-y-8 text-[0.95rem] leading-[1.8] text-[#334155]">
          <section>
            <h2 className="text-xl font-bold text-[#071f43] mb-4">1. {lang === "en" ? "Introduction" : "Introdução"}</h2>
            <p>
              {lang === "en" 
                ? "Welcome to ConcorreAI. We are committed to protecting your personal information and your right to privacy."
                : "Bem-vindo à ConcorreAI. Estamos comprometidos em proteger suas informações pessoais e seu direito à privacidade."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071f43] mb-4">2. {lang === "en" ? "Information We Collect" : "Informações que Coletamos"}</h2>
            <p className="mb-3">
              {lang === "en" 
                ? "We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services."
                : "Coletamos informações pessoais que você nos fornece voluntariamente ao expressar interesse em obter informações sobre nós ou nossos produtos e serviços."}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{lang === "en" ? "Names, email addresses, and phone numbers." : "Nomes, endereços de e-mail e números de telefone."}</li>
              <li>{lang === "en" ? "Company details." : "Dados da empresa."}</li>
              <li>{lang === "en" ? "Usage data and cookies." : "Dados de uso e cookies."}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071f43] mb-4">3. {lang === "en" ? "How We Use Your Information" : "Como Usamos Suas Informações"}</h2>
            <p className="mb-3">
              {lang === "en" ? "We use personal information collected via our Website for a variety of business purposes:" : "Usamos as informações pessoais coletadas por meio de nosso Site para diversos fins comerciais:"}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{lang === "en" ? "To provide and maintain our Service." : "Para fornecer e manter nosso Serviço."}</li>
              <li>{lang === "en" ? "To notify you about changes to our Service." : "Para notificá-lo sobre alterações em nosso Serviço."}</li>
              <li>{lang === "en" ? "To provide customer support." : "Para fornecer suporte ao cliente."}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071f43] mb-4">4. Cookies</h2>
            <p>
              {lang === "en"
                ? "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
                : "Usamos cookies e tecnologias de rastreamento semelhantes para rastrear a atividade em nosso Serviço e reter certas informações. Você pode instruir seu navegador a recusar todos os cookies ou a indicar quando um cookie está sendo enviado."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#071f43] mb-4">5. {lang === "en" ? "Contact Us" : "Fale Conosco"}</h2>
            <p>
              {lang === "en"
                ? "If you have any questions about this Privacy Policy, you can contact us at: contato@concorreai.com.br"
                : "Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em: contato@concorreai.com.br"}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}