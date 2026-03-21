"use client";

import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

/**
 * Gifts — Sección de sugerencia de regalo (Lluvia de sobres).
 */
export default function Gifts() {
  return (
    <section className="w-full max-w-sm mx-auto px-5 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        {/* Ornamento superior */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-8 bg-gold/20" />
          <FaEnvelopeOpenText className="text-gold/60 text-xl" />
          <div className="h-px w-8 bg-gold/20" />
        </div>

        <h2 className="font-serif text-3xl text-gold mb-4">
          Presentes
        </h2>

        <div className="bg-moss-dark/30 backdrop-blur-sm border border-gold/10 rounded-2xl p-8 shadow-sm">
          <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-6">
            &ldquo;Tu presencia es mi mejor regalo, pero si deseas tener un detalle conmigo, te agradezco que sea en la modalidad de:&rdquo;
          </p>
          
          <div className="inline-block py-3 px-8 rounded-full border border-gold/30 bg-gold/5 text-gold-light tracking-[0.2em] font-serif text-lg shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            Lluvia de Sobres
          </div>
        </div>

        {/* Adorno inferior */}
        <motion.div 
          className="mt-8 text-gold-light/20 text-lg tracking-[0.4em]"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✧ ✧ ✧
        </motion.div>
      </motion.div>
    </section>
  );
}
