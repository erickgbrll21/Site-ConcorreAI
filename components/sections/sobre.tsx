"use client"

import { useLang } from "@/components/lang-context"
import { MotionWrapper } from "@/components/motion-wrapper"
import { Building, Target, Eye, CheckCircle } from "lucide-react"

export function Sobre() {
  const { lang, t } = useLang()
  const d = t.sobre

  return (
    <section id="sobre" className="py-[140px] bg-white text-[#0f172a] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-[72px] items-start">
          <div>
            <MotionWrapper preset="fade-up">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] uppercase text-[#0169fc] bg-[#0169fc]/[0.06] border border-[#0169fc]/15 px-4 py-[6px] rounded-full mb-5">
                <Building className="w-[10px] h-[10px]" /> {d.tag}
              </span>
            </MotionWrapper>
            <MotionWrapper preset="fade-up" delay={0.1}>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.2] tracking-[-0.5px]">
                <span className="bg-gradient-to-r from-[#0169fc] to-[#38bdf8] bg-clip-text text-transparent">
                  {d.titleHighlight}
                </span>{" "}
                {d.titlePost}
              </h2>
            </MotionWrapper>
            <MotionWrapper preset="fade-up" delay={0.2}>
              <p
                className="text-base text-[#64748b] leading-[1.85] my-5 [&_strong]:text-[#0f172a] [&_strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: d.lead }}
              />
            </MotionWrapper>

            <MotionWrapper preset="fade-up" delay={0.3} className="flex flex-col gap-4">
              {[
                { icon: <Target className="w-[15px] h-[15px]" />, title: lang === "en" ? "Mission" : "Missão", desc: d.mission },
                { icon: <Eye className="w-[15px] h-[15px]" />, title: lang === "en" ? "Vision" : "Visão", desc: d.vision },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-5 bg-[#f8fafc] border border-[#e5e7eb] rounded-[20px] transition-all hover:border-[#d1d5db]"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-[#0169fc]/10 border border-[#0169fc]/20 flex items-center justify-center shrink-0 text-[#0169fc]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-extrabold uppercase tracking-[1.5px] text-[#0f172a] mb-[6px]">
                      {item.title}
                    </div>
                    <div className="text-sm text-[#64748b] leading-[1.75]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </MotionWrapper>
          </div>

          <MotionWrapper preset="fade-right" delay={0.2}>
            <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-[24px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sticky top-[90px]">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase text-[#64748b] mb-6 pb-4 border-b border-[#e5e7eb]">
                <span className="w-[7px] h-[7px] rounded-full bg-[#0169fc] animate-pulse" />
                <span className="font-mono">{d.panelHeader}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {d.panelStats.map((s, i) => (
                  <div key={i} className="p-4 bg-white border border-[#e5e7eb] rounded-xl text-center transition-all hover:border-[#d1d5db]">
                    <span className="block text-2xl font-black bg-gradient-to-r from-[#0169fc] to-[#38bdf8] bg-clip-text text-transparent leading-none mb-1">
                      {s.value}
                    </span>
                    <span className="text-[11px] text-[#64748b] font-medium">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="mb-[22px]">
                <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#64748b] mb-3">{d.expertise}</div>
                <div className="flex flex-wrap gap-[7px]">
                  {d.chips.map((chip, i) => (
                    <span key={i} className="inline-flex items-center px-3 py-1 bg-[#0169fc]/[0.06] border border-[#0169fc]/15 rounded-full text-[11px] font-semibold text-[#0169fc] tracking-[0.3px]">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-5 border-t border-[#e5e7eb]">
                {d.values.map((v, i) => (
                  <div key={i} className="flex items-center gap-[10px] text-[13px] font-semibold text-[#64748b]">
                    <CheckCircle className="w-[11px] h-[11px] text-[#10b981]" /> {v}
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}

