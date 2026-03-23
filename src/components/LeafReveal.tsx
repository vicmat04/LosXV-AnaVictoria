"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * LeafReveal — Pantalla de bienvenida del Bosque Encantado.
 * Al hacer clic, las dos "puertas de follaje" se abren hacia
 * los lados revelando la invitación.
 */
export default function LeafReveal({ onReveal }: { onReveal: () => void }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    // Esperamos que terminen las animaciones antes de mostrar el contenido
    setTimeout(() => onReveal(), 1400);
  };

  return (
    <div style={{ pointerEvents: isRevealed ? "none" : "auto" }}>
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none"
            onClick={handleReveal}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
          >
            {/* ── Puerta izquierda (follaje oscuro) ── */}
            <motion.div
              className="absolute top-0 left-0 w-1/2 h-full bg-moss-dark overflow-hidden"
              exit={{ x: "-100%" }}
              transition={{ duration: 1.4, ease: [0.645, 0.045, 0.355, 1.0] }}
            >
              <Image
                src="/photos/HEN_6346.jpg"
                alt="Bosque izquierdo"
                fill
                className="object-cover object-center scale-110 opacity-70 mix-blend-luminosity"
                priority
              />
              {/* Overlay de color musgo */}
              <div className="absolute inset-0 bg-moss-dark/60 mix-blend-multiply" />
              {/* Sombra en el borde derecho */}
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/70 to-transparent z-10" />
            </motion.div>

            {/* ── Puerta derecha (follaje claro) ── */}
            <motion.div
              className="absolute top-0 right-0 w-1/2 h-full bg-moss-green overflow-hidden"
              exit={{ x: "100%" }}
              transition={{ duration: 1.4, ease: [0.645, 0.045, 0.355, 1.0] }}
            >
              <Image
                src="/photos/HEN_6170.jpg"
                alt="Bosque derecho"
                fill
                className="object-cover scale-150 opacity-70 mix-blend-luminosity"
                style={{ objectPosition: "35% 2%" }}
                priority
              />
              <div className="absolute inset-0 bg-moss-green/60 mix-blend-multiply" />
              {/* Sombra en el borde izquierdo */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/70 to-transparent z-10" />
            </motion.div>

            {/* ── Medallón central ── */}
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center p-5"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              exit={{ scale: 1.3, opacity: 0 }}
            >
              {/* Círculo con blur de fondo */}
              <div className="relative flex flex-col items-center justify-center w-52 h-52 rounded-full border border-gold/40 bg-black/30 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.6),inset_0_0_30px_rgba(212,175,55,0.05)]">

                {/* Anillo ornamental exterior */}
                <div className="absolute inset-0 rounded-full border-2 border-gold/10 scale-110" />

                {/* Ornamento superior */}
                <span className="text-gold-light/70 text-base tracking-[0.3em] mb-1 select-none">❧</span>

                {/* Nombre */}
                <h2
                  className="text-xl text-gold-light text-center leading-tight mb-1 tracking-wide"
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    textShadow: "0 0 30px rgba(212,175,55,0.6), 0 0 60px rgba(212,175,55,0.2)",
                  }}
                >
                  Ana Victoria
                </h2>

                {/* Subtítulo */}
                <p className="font-serif italic text-sm text-gold/70 mb-3">
                  XV Años
                </p>

                <div className="w-14 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-3" />

                {/* Call to action con ícono de hoja animado */}
                <motion.div
                  className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.2em] uppercase text-foreground/70"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-moss-light text-xs">🌿</span>
                  <span>Toca para descubrir</span>
                  <span className="text-moss-light text-xs">🌿</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
