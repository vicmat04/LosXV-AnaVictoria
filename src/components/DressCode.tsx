import { motion } from "framer-motion";
import { GiLargeDress, GiTie } from "react-icons/gi";

/**
 * DressCode — Sección de código de vestimenta simplificada.
 */
export default function DressCode() {
  return (
    <section className="w-full max-w-sm mx-auto px-5 py-8 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-serif text-3xl text-gold mb-6"
      >
        ✦ Código de Vestimenta ✦
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-moss-dark/40 backdrop-blur-md border border-gold/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.1)] overflow-hidden"
      >
        {/* Adorno sutil de fondo */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 blur-[40px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-moss-light/5 blur-[40px] rounded-full pointer-events-none" />

        <div className="flex justify-center gap-8 mb-6 text-gold-light/60">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <GiTie size={32} className="filter drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <GiLargeDress size={32} className="filter drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
          </motion.div>
        </div>

        <p className="font-serif text-xl text-gold-light mb-2">
          Semi-formal
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/50 italic">
          (guapos y divinas)
        </p>
      </motion.div>

      {/* Firma final */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 pb-4"
      >
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mb-4" />
        <p className="font-serif italic text-foreground/40 text-sm">
          Con amor,
        </p>
        <p
          className="font-serif text-2xl text-gold-light/70 mt-1"
          style={{ 
            fontFamily: "var(--font-cinzel)",
            textShadow: "0 0 15px rgba(212,175,55,0.2)" 
          }}
        >
          Ana Victoria
        </p>
        <p className="font-sans text-xs tracking-widest uppercase text-foreground/30 mt-2">
          ✦ 18 · Abril · 2026 ✦
        </p>
      </motion.div>
    </section>
  );
}
