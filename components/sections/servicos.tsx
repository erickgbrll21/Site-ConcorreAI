"use client"

import { useState, useCallback } from "react"
import { useLang } from "@/components/lang-context"
import { MotionWrapper, MotionItem } from "@/components/motion-wrapper"
import { LayoutGrid, Scale, BarChart3, Map, Gauge, Zap, Star, Search, Coins, ArrowRight, ChevronRight, Trophy, AlertCircle, AlertTriangle, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import type { ReactNode } from "react"

const iconMap: Record<string, ReactNode> = {
  Scale: <Scale className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  Map: <Map className="w-6 h-6" />,
  Gauge: <Gauge className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Coins: <Coins className="w-6 h-6" />,
}

type SectionItem = { type: string; text?: string; items?: readonly string[] }

function ModalBody({ sections }: { sections: readonly SectionItem[] }) {
  return (
    <div className="space-y-5">
      {sections.map((sec, i) => {
        if (sec.type === "label")
          return (
            <p key={i} className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#38bdf8] flex items-center gap-2">
              <span className="w-[3px] h-[14px] bg-gradient-to-b from-[#0169fc] to-[#38bdf8] rounded" />
              {sec.text}
            </p>
          )
        if (sec.type === "list")
          return (
            <ul key={i} className="space-y-[10px]">
              {sec.items?.map((item, j) => (
                <li key={j} className="flex items-start gap-3 p-3 bg-white/[0.03] border border-white/[0.06] rounded-[10px] text-[0.9rem] text-[#94a3b8] leading-[1.5]">
                  <ChevronRight className="w-3 h-3 text-[#38bdf8] mt-1 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          )
        if (sec.type === "text")
          return <p key={i} className="text-[0.93rem] text-[#94a3b8] leading-[1.7]">{sec.text}</p>
        if (sec.type === "result")
          return (
            <div key={i} className="flex items-start gap-[14px] p-[18px_20px] bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.25)] rounded-xl">
              <Trophy className="w-5 h-5 text-[#10b981] shrink-0 mt-[2px]" />
              <p className="text-[0.92rem] text-[#6ee7b7] leading-[1.6] font-medium">{sec.text}</p>
            </div>
          )
        if (sec.type === "alert")
          return (
            <div key={i} className="flex items-start gap-[14px] p-[18px_20px] bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.3)] rounded-xl">
              <AlertCircle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-[2px]" />
              <p className="text-[0.92rem] text-[#fcd34d] leading-[1.6] italic">{sec.text}</p>
            </div>
          )
        if (sec.type === "alert-danger")
          return (
            <div key={i} className="flex items-start gap-[14px] p-[18px_20px] bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.3)] rounded-xl">
              <AlertTriangle className="w-5 h-5 text-[#ef4444] shrink-0 mt-[2px] animate-pulse" />
              <p className="text-[0.92rem] text-[#fca5a5] leading-[1.6]">{sec.text}</p>
            </div>
          )
        if (sec.type === "conclusion")
          return (
            <div key={i} className="pl-5 border-l-[3px] border-[#38bdf8] bg-[rgba(1,105,252,0.06)] rounded-r-[10px] p-4 text-[0.9rem] text-[#94a3b8] leading-[1.7]">
              {sec.text}
            </div>
          )
        return null
      })}
    </div>
  )
}

export function Servicos() {
  const { lang, t } = useLang()
  const d = t.servicos
  const modalData = t.servicosModal
  const [open, setOpen] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)

  const openModal = useCallback((i: number) => {
    setCurrentIdx(i)
    setOpen(true)
  }, [])

  const navigate = useCallback(
    (dir: number) => {
      const next = currentIdx + dir
      if (next >= 0 && next < modalData.length) setCurrentIdx(next)
    },
    [currentIdx, modalData.length],
  )

  const current = modalData[currentIdx]

  return (
    <section id="servicos" className="py-[140px] bg-[#f8fafc] text-[#0f172a] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <MotionWrapper preset="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] uppercase text-[#0169fc] bg-[#0169fc]/[0.06] border border-[#0169fc]/15 px-4 py-[6px] rounded-full mb-5">
              <LayoutGrid className="w-[10px] h-[10px]" /> {d.tag}
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

        <MotionWrapper staggerChildren={0.18} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {d.cards.map((card, i) => (
            <MotionItem key={i} preset="scale-up">
              <div className="bg-[#f8fafc] border border-[#e5e7eb] rounded-[24px] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d1d5db] relative overflow-hidden group flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#0169fc]/[0.08] border border-[#0169fc]/15 flex items-center justify-center text-[#0169fc] transition-all">
                    {iconMap[card.icon]}
                  </div>
                  <span className="text-[11px] font-bold text-[#64748b] font-mono tracking-[1px]">{card.num}</span>
                </div>
                <h3 className="text-[17px] font-extrabold mb-[10px] leading-[1.3]">{card.title}</h3>
                <p className="text-sm text-[#64748b] mb-5 leading-[1.6]">{card.desc}</p>
                <div className="mt-auto pt-4 border-t border-[#e5e7eb] flex items-center gap-2 text-[13px] font-semibold text-[#0169fc]">
                  <ArrowRight className="w-3 h-3" /> {card.benefit}
                </div>
                <button
                  onClick={() => openModal(i)}
                  className="mt-[14px] text-[13px] font-bold text-[#94a3b8] hover:text-[#0169fc] transition-colors flex items-center gap-[7px] p-0 bg-transparent border-none cursor-pointer"
                >
                  {d.saibaMais} <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </MotionItem>
          ))}
        </MotionWrapper>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="!max-w-[1000px] max-h-[85vh] sm:max-h-[80vh] bg-gradient-to-b from-[rgba(15,23,42,0.98)] to-[rgba(10,15,35,0.98)] !border !border-white/10 !rounded-[20px] shadow-[0_0_60px_rgba(1,105,252,0.2),0_30px_80px_rgba(0,0,0,0.6)] text-[#FFFFFF] !p-0 !gap-0 !ring-0 flex flex-col overflow-hidden"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-white cursor-pointer transition-all hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-400 hover:rotate-90 shadow-lg backdrop-blur-sm"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <DialogHeader className="p-6 md:p-10 pb-6 md:pb-7 border-b border-white/[0.08] bg-[linear-gradient(180deg,rgba(1,105,252,0.06),transparent)] shrink-0">
            <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#38bdf8] font-mono opacity-80 mb-[14px]">
              {current?.badge}
            </p>
            <div className="w-12 h-12 md:w-[54px] md:h-[54px] flex items-center justify-center bg-[#0169fc]/10 border border-[#0169fc]/20 rounded-xl md:rounded-[14px] mb-3 md:mb-[18px]">
              {current && iconMap[current.icon]}
            </div>
            <DialogTitle className="!text-[clamp(1.2rem,2.8vw,1.6rem)] !font-bold !leading-[1.3] mb-3 text-[#FFFFFF]">
              {current?.title}
            </DialogTitle>
            <DialogDescription className="!text-[0.95rem] !text-[#64748b] !leading-[1.65] max-w-[620px]">
              {current?.lead}
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-6 md:p-7 px-6 md:px-10 min-h-0">
            {current && <ModalBody sections={current.sections} />}
          </div>

          <div className="flex items-center justify-between gap-3 px-6 md:px-10 py-4 md:py-[18px] border-t border-white/[0.08] bg-[rgba(5,8,20,0.5)] shrink-0">
            <button
              onClick={() => navigate(-1)}
              disabled={currentIdx === 0}
              className="flex items-center gap-2 px-[18px] py-[9px] bg-white/5 border border-white/10 rounded-lg text-[#94a3b8] text-[0.85rem] font-semibold transition-all hover:bg-[rgba(1,105,252,0.15)] hover:border-[rgba(1,105,252,0.4)] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← {lang === "en" ? "Previous" : "Anterior"}
            </button>
            <span className="text-[0.78rem] font-bold tracking-[0.12em] text-[#64748b] font-mono">
              {String(currentIdx + 1).padStart(2, "0")} / {String(modalData.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => navigate(1)}
              disabled={currentIdx === modalData.length - 1}
              className="flex items-center gap-2 px-[18px] py-[9px] bg-[linear-gradient(135deg,rgba(1,105,252,0.2),rgba(1,105,252,0.2))] border border-[rgba(1,105,252,0.3)] rounded-lg text-white text-[0.85rem] font-semibold transition-all hover:bg-[linear-gradient(135deg,rgba(1,105,252,0.35),rgba(1,105,252,0.35))] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {lang === "en" ? "Next" : "Próximo"} →
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
