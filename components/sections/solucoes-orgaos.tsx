"use client"

import { useLang } from "@/components/lang-context"
import { MotionWrapper, MotionItem } from "@/components/motion-wrapper"
import { Landmark, FolderOpen, Bot, Eye, ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

const iconMap: Record<string, ReactNode> = {
  FolderOpen: <FolderOpen className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  Eye: <Eye className="w-6 h-6" />,
}

export function SolucoesOrgaos() {
  const { t } = useLang()
  const d = t.orgaos

  return (
    <section id="solucoes-orgaos" className="py-[140px] bg-white text-[#0f172a] border-t border-[#e5e7eb]/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <MotionWrapper preset="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] uppercase text-[#0169fc] bg-[#0169fc]/[0.06] border border-[#0169fc]/15 px-4 py-[6px] rounded-full mb-5">
              <Landmark className="w-[10px] h-[10px]" /> {d.tag}
            </span>
          </MotionWrapper>
          <MotionWrapper preset="fade-up" delay={0.1}>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.2] tracking-[-0.5px]">
              {d.title}{" "}
              <span className="bg-gradient-to-r from-[#0169fc] to-[#38bdf8] bg-clip-text text-transparent">
                {d.titleHighlight}
              </span>{" "}
              {d.titlePost}
            </h2>
          </MotionWrapper>
          <MotionWrapper preset="fade-up" delay={0.2}>
            <p className="text-[17px] text-[#64748b] mt-4 leading-[1.7]">{d.lead}</p>
          </MotionWrapper>
        </div>

        <MotionWrapper staggerChildren={0.14} className="grid md:grid-cols-3 gap-6 mt-2">
          {d.cards.map((card, i) => (
            <MotionItem key={i} preset="scale-up">
              <div className="h-full flex flex-col p-7 bg-[#f8fafc] border border-[#e5e7eb] rounded-[24px]">
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center bg-[#0169fc]/[0.08] text-[#0169fc] text-[1.35rem] mb-[18px] shrink-0">
                  {iconMap[card.icon]}
                </div>
                <h3 className="text-[1.1rem] font-bold mb-[10px]">{card.title}</h3>
                <p className="text-[0.95rem] text-[#64748b] leading-[1.65] m-0 flex-1">{card.desc}</p>
              </div>
            </MotionItem>
          ))}
        </MotionWrapper>

        <MotionWrapper preset="fade-up" className="flex justify-center mt-10">
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 text-[15px] font-medium px-7 py-3.5 rounded-full bg-[#0169fc] text-white border border-[#0169fc] transition-all duration-300 hover:bg-[#0155d0] hover:border-[#0155d0] shadow-[0_2px_8px_rgba(1,105,252,0.2)]"
          >
            {d.cta} <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </MotionWrapper>
      </div>
    </section>
  )
}
