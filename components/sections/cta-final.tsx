"use client"

import { useLang } from "@/components/lang-context"
import { MotionWrapper } from "@/components/motion-wrapper"
import { Rocket, ArrowRight, Lock } from "lucide-react"

export function CtaFinal() {
  const { t } = useLang()
  const d = t.ctaFinal

  return (
    <section id="cta" className="py-[140px] bg-white text-[#0f172a] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <MotionWrapper preset="blur">
          <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-[32px] py-20 px-[60px] text-center relative overflow-hidden">
            <div className="relative z-10 max-w-[680px] mx-auto">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] uppercase text-[#0169fc] bg-[#0169fc]/[0.06] border border-[#0169fc]/15 px-4 py-[6px] rounded-full mb-6">
                <Rocket className="w-[10px] h-[10px]" /> {d.tag}
              </span>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.2] tracking-[-0.5px]">
                {d.title}{" "}
                <span className="bg-gradient-to-r from-[#0169fc] to-[#38bdf8] bg-clip-text text-transparent">
                  {d.titleHighlight}
                </span>{" "}
                {d.titlePost}
              </h2>
              <p className="text-lg text-[#64748b] my-5 leading-[1.7]">{d.text}</p>
              <div className="flex items-center justify-center">
                <a
                  href="#contato"
                  className="group inline-flex items-center gap-3 text-[15px] font-medium px-7 py-3.5 rounded-full bg-[#0169fc] text-white border border-[#0169fc] transition-all duration-300 hover:bg-[#0155d0] hover:border-[#0155d0] shadow-[0_2px_8px_rgba(1,105,252,0.2)]"
                >
                  {d.ctaPrimary}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 mt-7 text-[13px] text-[#94a3b8]">
                <Lock className="w-3 h-3 text-[#0169fc]" />
                <span>{d.trust}</span>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
