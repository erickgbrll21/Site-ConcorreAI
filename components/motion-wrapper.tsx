"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode, ElementType } from "react"

const presets = {
  "fade-up": { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  "fade-down": { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  "fade-left": { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  "scale-up": { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  blur: {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
} satisfies Record<string, Variants>

type Preset = keyof typeof presets

interface MotionWrapperProps {
  children: ReactNode
  preset?: Preset
  variants?: Variants
  delay?: number
  duration?: number
  className?: string
  as?: ElementType
  once?: boolean
  amount?: number
  staggerChildren?: number
}

export function MotionWrapper({
  children,
  preset = "fade-up",
  variants,
  delay = 0,
  duration = 0.7,
  className,
  as = "div",
  once = true,
  amount = 0.15,
  staggerChildren,
}: MotionWrapperProps) {
  const Component = motion.create(as as "div")
  const v = variants ?? presets[preset]

  const containerVariants: Variants | undefined = staggerChildren
    ? {
        hidden: {},
        visible: { transition: { staggerChildren, delayChildren: delay } },
      }
    : undefined

  return (
    <Component
      variants={containerVariants ?? v}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={containerVariants ? undefined : { duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {staggerChildren
        ? children
        : children}
    </Component>
  )
}

export function MotionItem({
  children,
  preset = "fade-up",
  variants,
  duration = 0.65,
  className,
  as = "div",
}: {
  children: ReactNode
  preset?: Preset
  variants?: Variants
  duration?: number
  className?: string
  as?: ElementType
}) {
  const Component = motion.create(as as "div")
  const v = variants ?? presets[preset]

  return (
    <Component
      variants={v}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </Component>
  )
}
