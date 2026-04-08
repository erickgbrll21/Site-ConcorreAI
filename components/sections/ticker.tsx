"use client"

import { useLang } from "@/components/lang-context"
import { Download, Brain, Bot, FileText, BarChart3, Scale } from "lucide-react"
import type { ReactNode } from "react"

const icons: ReactNode[] = [
  <Download key="d" className="w-3 h-3 text-[#0169fc]" />,
  <Brain key="b" className="w-3 h-3 text-[#0169fc]" />,
  <Bot key="r" className="w-3 h-3 text-[#0169fc]" />,
  <FileText key="f" className="w-3 h-3 text-[#0169fc]" />,
  <BarChart3 key="c" className="w-3 h-3 text-[#0169fc]" />,
  <Scale key="s" className="w-3 h-3 text-[#0169fc]" />,
]

function TickerRow({ items }: { items: string[] }) {
  return (
    <>
      {items.map((text, i) => (
        <span key={i} className="contents">
          <span className="flex items-center gap-[10px] text-[13px] font-medium text-[#64748b] whitespace-nowrap">
            {icons[i % icons.length]} {text}
          </span>
          <span className="w-[5px] h-[5px] rounded-full bg-[#0169fc] opacity-50 shrink-0" />
        </span>
      ))}
    </>
  )
}

export function Ticker() {
  const { t } = useLang()
  const items = t.ticker as unknown as string[]

  return (
    <div className="bg-[#f8fafc] border-y border-[#e5e7eb] py-3 overflow-hidden">
      <div className="flex items-center gap-10 animate-ticker whitespace-nowrap w-max hover:[animation-play-state:paused]">
        <TickerRow items={items} />
        <TickerRow items={items} />
      </div>
    </div>
  )
}
