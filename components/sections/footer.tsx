"use client"

import Image from "next/image"
import Link from "next/link"
import { useLang } from "@/components/lang-context"
import { MotionWrapper } from "@/components/motion-wrapper"
import { Award, CreditCard, ShieldCheck } from "lucide-react"
import { FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const navAnchors = ["solucoes-empresas", "solucoes-orgaos", "como-funciona", "servicos", "sobre", "contato"]
const serviceIndices = [0, 1, 2, 5, 6, 7]

export function Footer() {
  const { t } = useLang()
  const d = t.footer

  return (
    <footer className="bg-[#071f43] border-t border-white/[0.06] pt-[80px] pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <MotionWrapper staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-[10px]">
              <Image src="/logo-concorreai.png" alt="ConcorreAI" width={136} height={34} className="h-[34px] w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-[#64748b] leading-[1.65] max-w-[300px]">{d.brandDesc}</p>
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex items-center gap-2 text-xs text-[#64748b] font-medium">
                <Award className="w-[11px] h-[11px] text-[#38bdf8] shrink-0" /> OAB/XX 000.000 — Registro Ativo
              </div>
              <div className="flex items-center gap-2 text-xs text-[#64748b] font-medium">
                <CreditCard className="w-[11px] h-[11px] text-[#38bdf8] shrink-0" /> CNPJ 65.743.424/0001-91
              </div>
            </div>
            <div className="flex gap-[10px]">
              {[
                { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
                { icon: <FaInstagram />, href: "#", label: "Instagram" },
                { icon: <FaYoutube />, href: "#", label: "YouTube" },
                { icon: <FaWhatsapp />, href: "https://wa.me/5500000000000", label: "WhatsApp" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#64748b] text-sm transition-all hover:bg-white/10 hover:border-white/20 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold mb-4 text-[#FFFFFF]">{d.colTitles[0]}</div>
            <div className="flex flex-col gap-[10px]">
              {d.navLinks.map((link, i) => (
                <a key={i} href={`#${navAnchors[i]}`} className="text-sm text-[#64748b] no-underline transition-colors hover:text-[#FFFFFF]">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold mb-4 text-[#FFFFFF]">{d.colTitles[1]}</div>
            <div className="flex flex-col gap-[10px]">
              {d.serviceLinks.map((link, i) => (
                <a key={i} href="#servicos" className="text-sm text-[#64748b] no-underline transition-colors hover:text-[#FFFFFF]">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold mb-4 text-[#FFFFFF]">{d.colTitles[2]}</div>
            <div className="flex flex-col gap-3 mb-5">
              {[
                { icon: <MapPin className="w-3 h-3 text-[#38bdf8] shrink-0 mt-[3px]" />, text: "Rua Exemplo, 1000 — Sala 100\nCidade, Estado — CEP 00000-000" },
                { icon: <Phone className="w-3 h-3 text-[#38bdf8] shrink-0 mt-[3px]" />, text: "(00) 0000-0000" },
                { icon: <Mail className="w-3 h-3 text-[#38bdf8] shrink-0 mt-[3px]" />, text: "contato@concorreai.com.br" },
                { icon: <Clock className="w-3 h-3 text-[#38bdf8] shrink-0 mt-[3px]" />, text: "Seg–Sex: 8h às 18h" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-[10px] text-[13px] text-[#64748b] leading-[1.55]">
                  {item.icon}
                  <span>{item.text.split("\n").map((l, j) => <span key={j}>{l}<br /></span>)}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap pt-4 border-t border-white/[0.06]">
              {d.legalLinks.map((link, i) => (
                <Link key={i} href={i === 0 ? "/politica-de-privacidade" : "#"} className="text-[11px] text-[#64748b] no-underline transition-colors hover:text-[#38bdf8]">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </MotionWrapper>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/[0.06] text-[13px] text-[#64748b] gap-3 text-center sm:text-left">
          <span>{d.copyright}</span>
          <div className="flex items-center gap-[6px]">
            <ShieldCheck className="w-4 h-4 text-[#38bdf8]" /> {d.oab}
          </div>
        </div>
      </div>
    </footer>
  )
}
