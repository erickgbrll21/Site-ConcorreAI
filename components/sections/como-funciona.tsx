"use client"

import { useLang } from "@/components/lang-context"
import { MotionWrapper } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { Route, ArrowDown } from "lucide-react"

function BlurStep({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(16px)", scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.6, margin: "-50px" }}
    >
      {children}
    </motion.div>
  )
}

export function ComoFunciona() {
  const { t } = useLang()
  const d = t.como

  return (
    <section id="como-funciona" className="py-[140px] bg-[#f8fafc] text-[#0f172a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <MotionWrapper preset="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] uppercase text-[#0169fc] bg-[#0169fc]/[0.06] border border-[#0169fc]/15 px-4 py-[6px] rounded-full mb-5">
              <Route className="w-[10px] h-[10px]" /> {d.tag}
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

        <div className="max-w-[720px] mx-auto">
          {d.steps.map((step, i) => (
            <BlurStep key={i}>
              <div className="flex gap-[22px] items-start p-6 bg-[#f8fafc] border border-[#e5e7eb] rounded-[20px]">
                <div className="shrink-0 w-[52px] h-[52px] rounded-[14px] flex items-center justify-center font-mono font-bold text-base bg-gradient-to-br from-[#0169fc] to-[#38bdf8] text-white shadow-[0_4px_16px_rgba(1,105,252,0.3)]">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-[1.08rem] font-bold mb-2 text-[#0f172a]">{step.title}</h3>
                  <p className="text-[0.95rem] text-[#64748b] leading-[1.65] m-0">{step.desc}</p>
                </div>
              </div>
              {i < d.steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-[2px] h-5 bg-gradient-to-b from-[#d1d5db] to-[#e5e7eb] rounded-full" />
                    <ArrowDown className="w-6 h-6 text-[#cbd5e1]" strokeWidth={2.5} />
                  </div>
                </div>
              )}
            </BlurStep>
          ))}
        </div>
      </div>
    </section>
  )
}
