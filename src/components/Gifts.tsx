"use client";

import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

/**
 * Gifts — Sección de sugerencia de regalo refinada (Lluvia de sobres).
 */
export default function Gifts() {
  return (
    <section className="w-full max-w-sm mx-auto px-5 py-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-moss-dark/40 backdrop-blur-md border border-gold/20 rounded-2xl p-4 shadow-[0_0_20px_rgba(212,175,55,0.1)] overflow-hidden"
      >
        {/* Adorno sutil de fondo */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-gold/5 blur-[30px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col items-center gap-2">
          <FaEnvelopeOpenText size={20} className="text-gold/60 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]" />
          <div className="text-gold-light/70 font-serif text-base italic tracking-widest">
            Lluvia de Sobres
          </div>
        </div>
      </motion.div>
    </section>
  );
}
