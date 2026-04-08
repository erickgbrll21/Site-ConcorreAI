"use client"

import { useLang } from "@/components/lang-context"
import { MotionWrapper, MotionItem } from "@/components/motion-wrapper"
import { TrendingUp, Clock, BarChart3, Zap, CheckCheck, ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

const iconMap: Record<string, ReactNode> = {
  Clock: <Clock className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  CheckCheck: <CheckCheck className="w-5 h-5" />,
}

export function Beneficios() {
  const { t } = useLang()
  const d = t.beneficios

  return (
    <section id="beneficios" className="py-[140px] bg-white text-[#0f172a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <MotionWrapper preset="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] uppercase text-[#0169fc] bg-[#0169fc]/[0.06] border border-[#0169fc]/15 px-4 py-[6px] rounded-full mb-5">
              <TrendingUp className="w-[10px] h-[10px]" /> {d.tag}
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
          <MotionWrapper preset="fade-up" delay={0.2}>
            <p className="text-[17px] text-[#64748b] mt-4 leading-[1.7]">{d.lead}</p>
          </MotionWrapper>
        </div>

        <MotionWrapper staggerChildren={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-5 my-8">
          {d.stats.map((stat, i) => (
            <MotionItem key={i} preset="scale-up">
              <div className="text-center p-6 bg-[#f8fafc] border border-[#e5e7eb] rounded-[20px]">
                <div className="text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold bg-gradient-to-r from-[#0169fc] to-[#38bdf8] bg-clip-text text-transparent leading-[1.1]">
                  {stat.value}
                </div>
                <div className="text-[0.82rem] text-[#64748b] mt-2 leading-[1.4]">{stat.label}</div>
              </div>
            </MotionItem>
          ))}
        </MotionWrapper>

        <MotionWrapper preset="fade-up">
          <p className="text-[0.8rem] text-[#94a3b8] text-center mb-9">{d.footnote}</p>
        </MotionWrapper>

        <MotionWrapper staggerChildren={0.12} className="grid md:grid-cols-2 gap-[22px]">
          {d.cards.map((card, i) => (
            <MotionItem key={i} preset="fade-up">
              <div className="p-7 rounded-[20px] border border-[#e5e7eb] bg-[#f8fafc]">
                <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center bg-[#0169fc]/[0.08] text-[#0169fc] text-[1.2rem] mb-4">
                  {iconMap[card.icon]}
                </div>
                <h3 className="text-[1.05rem] font-bold mb-[10px]">{card.title}</h3>
                <p className="text-[0.93rem] text-[#64748b] leading-[1.6] m-0">{card.desc}</p>
              </div>
            </MotionItem>
          ))}
        </MotionWrapper>

        <MotionWrapper preset="fade-up" className="flex justify-center mt-12">
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 text-[15px] font-medium px-7 py-3.5 rounded-full bg-[#0169fc] text-white border border-[#0169fc] transition-all duration-300 hover:bg-[#0155d0] hover:border-[#0155d0] shadow-[0_2px_8px_rgba(1,105,252,0.2)]"
          >
            {d.ctaPrimary}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </MotionWrapper>
      </div>
    </section>
  )
}
