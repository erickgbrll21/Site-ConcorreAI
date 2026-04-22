"use client"

import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5519998045442"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-7 right-7 z-[999] w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] flex items-center justify-center shadow-[0_4px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:shadow-[0_8px_40px_rgba(37,211,102,0.55)] animate-[float-pulse_3s_ease-in-out_infinite]"
    >
      <FaWhatsapp className="text-white text-[28px]" />
    </a>
  )
}
