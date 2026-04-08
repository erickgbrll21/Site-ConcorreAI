"use client"

import { useState, type FormEvent } from "react"
import { useLang } from "@/components/lang-context"
import { MotionWrapper } from "@/components/motion-wrapper"
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function Contato() {
  const { t } = useLang()
  const d = t.contato
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      ;(e.target as HTMLFormElement).reset()
    }, 4000)
  }

  return (
    <section id="contato" className="py-[140px] bg-[#f8fafc] text-[#0f172a] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <MotionWrapper preset="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] uppercase text-[#0169fc] bg-[#0169fc]/[0.06] border border-[#0169fc]/15 px-4 py-[6px] rounded-full mb-5">
              <Mail className="w-[10px] h-[10px]" /> {d.tag}
            </span>
          </MotionWrapper>
          <MotionWrapper preset="fade-up" delay={0.1}>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.2] tracking-[-0.5px]">
              {d.title}{" "}
              <span className="bg-gradient-to-r from-[#0169fc] to-[#38bdf8] bg-clip-text text-transparent">
                {d.titleHighlight}
              </span>
            </h2>
          </MotionWrapper>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <div className="flex flex-col gap-7">
            {[
              { icon: <Phone className="w-5 h-5" />, label: d.labels ? undefined : undefined, title: "Telefone", value: "(00) 0000-0000", href: "tel:+5500000000000" },
              { icon: <FaWhatsapp className="w-5 h-5" />, title: "WhatsApp", value: "(00) 00000-0000", href: "https://wa.me/5500000000000" },
              { icon: <Mail className="w-5 h-5" />, title: "E-mail", value: "contato@concorreai.com.br", href: "mailto:contato@concorreai.com.br" },
              { icon: <MapPin className="w-5 h-5" />, title: "Endereço", value: "Av. Principal, 1000 — Sala 500\nBrasília — DF, 70000-000" },
            ].map((item, i) => (
              <MotionWrapper key={i} preset="fade-left" delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-[14px] shrink-0 bg-[#0169fc]/[0.06] border border-[#0169fc]/10 flex items-center justify-center text-[#0169fc]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#64748b] font-semibold tracking-[1px] uppercase mb-1">{item.title}</div>
                    <div className="text-[15px] font-semibold text-[#0f172a]">
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[#0f172a] no-underline hover:text-[#0169fc] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        item.value.split("\n").map((line, j) => <span key={j}>{line}<br /></span>)
                      )}
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}

            <MotionWrapper preset="fade-up" delay={0.4}>
              <div className="p-6 bg-[#0169fc]/[0.04] border border-[#0169fc]/10 rounded-2xl">
                <div className="text-[13px] font-bold mb-2 text-[#0169fc] flex items-center gap-[6px]">
                  <Clock className="w-3 h-3" /> {d.hours.title}
                </div>
                <div className="text-sm text-[#64748b] leading-[1.8]">
                  {d.hours.lines.map((l, i) => <span key={i}>{l}<br /></span>)}
                  <span className="text-[#0169fc] font-semibold">{d.hours.urgent}</span>
                </div>
              </div>
            </MotionWrapper>
          </div>

          <MotionWrapper preset="fade-right" delay={0.2}>
            <div className="bg-white border border-[#e5e7eb] rounded-[24px] p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <h3 className="text-[22px] font-extrabold mb-2 text-[#0f172a]">{d.formTitle}</h3>
              <p className="text-sm text-[#64748b] mb-7">{d.formSubtitle}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label={d.labels[0]} placeholder={d.placeholders[0]} required type="text" />
                  <FormField label={d.labels[1]} placeholder={d.placeholders[1]} type="text" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label={d.labels[2]} placeholder={d.placeholders[2]} required type="email" />
                  <FormField label={d.labels[3]} placeholder={d.placeholders[3]} required type="tel" />
                </div>
                <FormField label={d.labels[4]} placeholder={d.placeholders[4]} required type="text" />
                <div>
                  <label className="block text-[13px] font-semibold text-[#334155] mb-2">{d.labels[5]}</label>
                  <textarea
                    placeholder={d.placeholders[5]}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[10px] p-[13px_16px] text-sm text-[#0f172a] outline-none transition-all focus:border-[#0169fc] focus:bg-white focus:shadow-[0_0_0_3px_rgba(1,105,252,0.06)] placeholder:text-[#94a3b8] resize-y min-h-[120px]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sent}
                  className={`w-full inline-flex items-center justify-center gap-[10px] text-[17px] font-semibold px-9 py-[18px] rounded-xl text-white transition-all ${
                    sent
                      ? "bg-gradient-to-br from-[#10b981] to-[#059669]"
                      : "bg-gradient-to-br from-[#0169fc] to-[#38bdf8] shadow-[0_2px_8px_rgba(1,105,252,0.2)] hover:-translate-y-0.5"
                  }`}
                >
                  {sent ? <><Check className="w-5 h-5" /> {d.sent}</> : <><Send className="w-5 h-5" /> {d.submit}</>}
                </button>
              </form>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, placeholder, required, type }: { label: string; placeholder: string; required?: boolean; type: string }) {
  return (
    <div>
      <label className="block text-[13px] font-semibold text-[#334155] mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white border border-[#e5e7eb] rounded-[10px] p-[13px_16px] text-sm text-[#0f172a] outline-none transition-all focus:border-[#0169fc] focus:bg-white focus:shadow-[0_0_0_3px_rgba(1,105,252,0.06)] placeholder:text-[#94a3b8]"
      />
    </div>
  )
}
