"use client";

import { motion } from "framer-motion";
import { receptionTimeline } from "./Itinerary"; // Reutilizamos los datos que ya creamos

export default function CompactProgram() {
  return (
    <section className="w-full max-w-md mx-auto px-5 py-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-serif text-2xl text-gold text-center mb-8"
      >
        ✦ Programa (Opción Compacta) ✦
      </motion.h2>

      <div className="bg-moss-dark/40 backdrop-blur-sm border border-gold/20 rounded-xl p-6 shadow-[0_0_15px_rgba(212,175,55,0.05)] relative overflow-hidden">
        {/* Adorno superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
        
        <ul className="space-y-4">
          {receptionTimeline.map((evt, idx) => {
            const isLast = idx === receptionTimeline.length - 1;
            return (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                {/* Ícono pequeño */}
                <div className="text-gold mt-1 opacity-80 text-base">
                  {evt.icon}
                </div>
                
                {/* Contenido */}
                <div className={`flex-1 pb-3 ${!isLast ? 'border-b border-gold/10' : ''}`}>
                  <div className="flex justify-between items-baseline gap-2 mb-0.5">
                    <h3 className="font-serif text-[1.1rem] text-gold-light leading-none">{evt.title}</h3>
                    <span className="font-sans text-xs text-gold/60 whitespace-nowrap">{evt.time.replace('PM', 'pm')}</span>
                  </div>
                  {evt.description && (
                    <p className="font-sans text-[0.7rem] text-foreground/60 leading-relaxed mt-1">
                      {evt.description}
                    </p>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ul>

        {/* Adorno inferior */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      </div>
    </section>
  );
}
