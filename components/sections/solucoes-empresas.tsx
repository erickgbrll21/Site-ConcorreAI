"use client"

import { useLang } from "@/components/lang-context"
import { MotionWrapper, MotionItem } from "@/components/motion-wrapper"
import { Download, Brain, Cog, MessageSquare, FileText, BarChart3 } from "lucide-react"
import { Backlight } from "@/components/ui/backlight"
import type { ReactNode } from "react"

const iconMap: Record<string, ReactNode> = {
  Download: <Download className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Cog: <Cog className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
}

export function SolucoesEmpresas() {
  const { t } = useLang()
  const d = t.empresas

  return (
    <section id="solucoes-empresas" className="py-[140px] bg-[#f8fafc] text-[#0f172a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <MotionWrapper preset="fade-up">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] uppercase text-[#0169fc] bg-[#0169fc]/[0.06] border border-[#0169fc]/15 px-4 py-[6px] rounded-full mb-5">
                <BarChart3 className="w-[10px] h-[10px]" /> {d.tag}
              </span>
            </MotionWrapper>

            <MotionWrapper preset="fade-up" delay={0.1}>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.2] tracking-[-0.5px] mb-5">
                {d.title}{" "}
                <span className="bg-gradient-to-r from-[#0169fc] to-[#38bdf8] bg-clip-text text-transparent">
                  {d.titleHighlight}
                </span>{" "}
                {d.titlePost}
              </h2>
            </MotionWrapper>

            <MotionWrapper preset="fade-up" delay={0.2}>
              <p className="text-base leading-[1.8] text-[#64748b] mb-7 max-w-[640px]">{d.lead}</p>
            </MotionWrapper>

            <MotionWrapper staggerChildren={0.1} className="flex flex-col gap-4">
              {d.cards.map((card, i) => (
                <MotionItem key={i} preset="fade-left">
                  <div className="flex gap-[18px] p-5 bg-white border border-[#e5e7eb] rounded-[20px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all hover:border-[#d1d5db] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-[#0169fc]/[0.08] border border-[#0169fc]/15 text-[#0169fc]">
                      {iconMap[card.icon]}
                    </div>
                    <div>
                      <h3 className="text-[1.05rem] font-bold mb-[6px] text-[#0f172a]">{card.title}</h3>
                      <p className="text-[0.92rem] text-[#64748b] leading-[1.65] m-0">{card.desc}</p>
                    </div>
                  </div>
                </MotionItem>
              ))}
            </MotionWrapper>

          </div>

          <MotionWrapper preset="blur" delay={0.2}>
            <Backlight blur={16} className="opacity-100">
              <Dashboard metrics={d.dash.metrics} title={d.dash.title} subtitle={d.dash.subtitle} />
            </Backlight>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}

function Dashboard({ metrics, title, subtitle }: { metrics: readonly string[]; title: string; subtitle: string }) {
  return (
    <div className="bg-[#071f43] border border-white/[0.08] rounded-[24px] p-7 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-[10px]">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0169fc] to-[#38bdf8] flex items-center justify-center">
            <BarChart3 className="w-[14px] h-[14px] text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#FFFFFF]">{title}</div>
            <div className="text-[11px] text-[#64748b] font-mono">{subtitle}</div>
          </div>
        </div>
        <div className="flex items-center gap-[6px] text-[11px] text-[#10b981] font-semibold">
          <span className="w-[6px] h-[6px] rounded-full bg-[#10b981] animate-[blink_1.5s_infinite]" /> LIVE
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5 relative z-10">
        {[{ val: "247", color: "text-[#38bdf8]" }, { val: "94%", color: "text-[#10b981]" }, { val: "12", color: "text-[#38bdf8]" }].map((m, i) => (
          <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-[14px] text-center">
            <div className={`text-2xl font-extrabold font-mono ${m.color}`}>{m.val}</div>
            <div className="text-[10px] text-[#64748b] mt-1 font-medium tracking-[0.5px]">{metrics[i]}</div>
          </div>
        ))}
      </div>

      <div className="text-[11px] text-[#64748b] font-mono tracking-[1px] mb-2 relative z-10">VOLUME MENSAL DE ANÁLISES</div>
      <div className="relative h-20 mb-5 z-10">
        <div className="flex items-end gap-[6px] h-full">
          {[45, 60, 50, 80, 65, 90, 75, 100, 85, 95, 88, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#0169fc]/20 to-[#0169fc] transition-all hover:from-[#38bdf8]/20 hover:to-[#38bdf8]" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[10px] relative z-10">
        {[
          { dot: "bg-[#10b981] shadow-[0_0_6px_#10b981]", text: "Edital #2847 — aderência alta", badge: "Score: 92", badgeClass: "text-[#10b981] bg-[rgba(16,185,129,0.12)]" },
          { dot: "bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]", text: "Pregão #1203 — análise IA", badge: "Em andamento", badgeClass: "text-[#38bdf8] bg-[rgba(56,189,248,0.12)]" },
          { dot: "bg-[#f59e0b] shadow-[0_0_6px_#f59e0b]", text: "Prazo esclarecimento — 2 dias", badge: "Ação robô", badgeClass: "text-[#eab308] bg-[rgba(234,179,8,0.12)]" },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between p-[10px_14px] bg-white/[0.03] border border-white/[0.06] rounded-lg text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${row.dot}`} />
              <span className="text-[13px] text-[#cbd5e1]">{row.text}</span>
            </div>
            <span className={`text-[11px] font-bold px-2 py-[2px] rounded-full font-mono ${row.badgeClass}`}>{row.badge}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
