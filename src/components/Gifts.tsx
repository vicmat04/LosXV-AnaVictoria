"use client";

import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

/**
 * Gifts — Sección de sugerencia de regalo refinada (Lluvia de sobres).
 */
export default function Gifts() {
  return (
    <section className="w-full max-w-sm mx-auto px-5 py-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-moss-dark/40 backdrop-blur-md border border-gold/20 rounded-3xl p-6 shadow-[0_0_30px_rgba(212,175,55,0.1)] overflow-hidden"
      >
        {/* Adorno sutil de fondo */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 blur-[40px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col items-center gap-3">
          <FaEnvelopeOpenText size={28} className="text-gold/60 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]" />
          <div className="text-gold-light/70 font-serif text-lg italic tracking-widest">
            Lluvia de Sobres
          </div>
        </div>
      </motion.div>
    </section>
  );
}
