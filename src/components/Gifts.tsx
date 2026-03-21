"use client";

import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

/**
 * Gifts — Sección de sugerencia de regalo refinada (Lluvia de sobres).
 */
export default function Gifts() {
  return (
    <section className="w-full max-w-sm mx-auto px-5 py-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaEnvelopeOpenText className="text-gold/40 text-lg" />
          <h2 className="font-serif text-2xl text-gold/80 tracking-widest uppercase">
            Presentes
          </h2>
        </div>

        <div className="inline-block py-2 px-6 border-b border-gold/20 text-gold-light/60 font-serif text-lg italic tracking-wider">
          Lluvia de Sobres
        </div>

        {/* Adorno inferior sutil */}
        <div className="mt-6 flex gap-2">
          <div className="w-1 h-1 rounded-full bg-gold/20" />
          <div className="w-1 h-1 rounded-full bg-gold/40" />
          <div className="w-1 h-1 rounded-full bg-gold/20" />
        </div>
      </motion.div>
    </section>
  );
}
