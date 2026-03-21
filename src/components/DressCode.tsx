import { motion } from "framer-motion";

/**
 * DressCode — Sección de código de vestimenta con paleta de colores
 * sugeridos y colores a evitar.
 */
export default function DressCode() {
  const suggested = [
    { color: "#1b2e14", label: "Verde Bosque" },
    { color: "#477038", label: "Verde Musgo" },
    { color: "#d4af37", label: "Dorado" },
    { color: "#3b1a6e", label: "Violeta Profundo" },
    { color: "#1a1a1a", label: "Negro Elegante" },
  ];

  const avoid = [
    { color: "#ffffff", label: "Blanco" },
    { color: "#f472b6", label: "Rosa Intenso" },
  ];

  return (
    <section className="w-full max-w-sm mx-auto px-5 py-4 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-serif text-3xl text-gold mb-2"
      >
        ✦ Código de Vestimenta ✦
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-sans text-base uppercase tracking-widest text-foreground/80 mb-8"
      >
        Formal / Elegante
      </motion.p>

      {/* Colores sugeridos */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4">
          Colores sugeridos
        </p>
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {suggested.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5">
              <div
                className="w-11 h-11 rounded-full border border-gold/30 shadow-[0_0_10px_rgba(212,175,55,0.15)]"
                style={{ backgroundColor: s.color }}
                title={s.label}
              />
              <span className="font-sans text-[9px] text-muted uppercase tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Colores a evitar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p className="font-sans text-xs uppercase tracking-widest text-red-400/70 mb-4">
          Favor de evitar
        </p>
        <div className="flex justify-center gap-4">
          {avoid.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-1.5">
              <div className="relative w-11 h-11 rounded-full border border-red-500/40 overflow-hidden shadow-md">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: a.color }}
                  title={a.label}
                />
                {/* Tachado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[140%] h-[2px] bg-red-500/70 -rotate-45" />
                </div>
              </div>
              <span className="font-sans text-[9px] text-red-400/60 uppercase tracking-wide">
                {a.label}
              </span>
            </div>
          ))}
        </div>
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
          style={{ textShadow: "0 0 15px rgba(212,175,55,0.2)" }}
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
