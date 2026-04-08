"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLang } from "@/components/lang-context"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

function AnimatedCounter({ value, locale }: { value: string; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const original = value
    const loc = locale === "en" ? "en-US" : "pt-BR"

    if (original.startsWith("+") && !original.includes("%") && !original.includes("/")) {
      const target = parseInt(original.replace(/[^0-9]/g, ""))
      let start = 0
      const duration = 2000
      const startTime = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        start = Math.floor(target * progress)
        el.textContent = `+${start.toLocaleString(loc)}`
        if (progress < 1) requestAnimationFrame(tick)
        else el.textContent = original
      }
      requestAnimationFrame(tick)
      return
    }

    if (original.endsWith("%")) {
      const target = parseInt(original.replace(/[^0-9]/g, ""))
      const duration = 2000
      const startTime = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        el.textContent = `${Math.floor(target * progress)}%`
        if (progress < 1) requestAnimationFrame(tick)
        else el.textContent = original
      }
      requestAnimationFrame(tick)
      return
    }

    if (original.includes("/")) {
      const parts = original.split("/")
      const target = parseInt(parts[0])
      const suffix = "/" + parts[1]
      const duration = 1600
      const startTime = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        el.textContent = `${Math.floor(target * progress)}${suffix}`
        if (progress < 1) requestAnimationFrame(tick)
        else el.textContent = original
      }
      requestAnimationFrame(tick)
    }
  }, [value, locale])

  return <span ref={ref}>{value}</span>
}

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const blurUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  const { lang, t } = useLang()
  const d = t.hero

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#071f43] overflow-hidden pt-[140px] pb-28">
      <InteractiveGridPattern
        width={60}
        height={60}
        squares={[30, 20]}
        className="absolute inset-0 z-[2] h-full w-full border-none [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        squaresClassName="stroke-white/[0.08] hover:fill-[#0169fc]/30"
      />
      <div className="relative z-[3] max-w-[1000px] mx-auto px-6 pointer-events-none">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto text-center [&_a]:pointer-events-auto [&_button]:pointer-events-auto"
        >
          <motion.div
            variants={blurUp}
            transition={{ duration: 0.8 }}
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-[10px] gap-y-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-2.5 sm:px-5 mb-10 text-balance"
          >
            <span className="w-2 h-2 shrink-0 rounded-full bg-[#38bdf8] animate-[pulse-dot_2s_infinite]" />
            <AnimatedShinyText shimmerWidth={150} className="!mx-0 !max-w-[min(100%,420px)] min-w-0 text-center text-[12px] font-medium tracking-[0.5px] sm:!max-w-none sm:text-[13px]">
              {d.badge}
            </AnimatedShinyText>
          </motion.div>

          <motion.h1
            variants={blurUp}
            transition={{ duration: 1.1 }}
            className="text-[clamp(2.25rem,6vw,5rem)] font-black leading-[1.1] tracking-[-1.5px] mb-8 text-balance"
          >
            {d.titlePre}{" "}
            <span className="bg-gradient-to-r from-[#0169fc] to-[#38bdf8] bg-clip-text text-transparent">
              {d.titleHighlight}
            </span>{" "}
            {d.titlePost}
          </motion.h1>

          <motion.p
            variants={blurUp}
            transition={{ duration: 0.9 }}
            className="text-[clamp(1.05rem,1.8vw,1.2rem)] text-white/50 max-w-[560px] mx-auto mb-12 leading-[1.7] text-pretty px-1"
          >
            {d.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center mb-20"
          >
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" }) }}
              className="group inline-flex items-center gap-3 text-[15px] font-medium px-7 py-3.5 rounded-full bg-white/[0.06] text-white border border-white/15 transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30"
            >
              {d.ctaPrimary}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center flex-wrap gap-6 px-1 pt-10 sm:gap-10"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.15] overflow-hidden">
              <motion.div
                className="h-full w-[40%] bg-gradient-to-r from-transparent via-white/80 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "300%" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </div>
            {d.stats.map((s, i) => (
              <span key={i} className="contents">
                {i > 0 && <span className="hidden sm:block w-px h-10 bg-white/[0.08]" />}
                <span className="flex flex-col gap-1.5">
                  <span className="text-[2.2rem] font-black tracking-[-1px] text-white">
                    <AnimatedCounter value={s.value} locale={lang} />
                  </span>
                  <span className="text-[13px] text-white/40 font-medium">{s.label}</span>
                </span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
