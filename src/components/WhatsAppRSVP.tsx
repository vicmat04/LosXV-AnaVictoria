"use client";

import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { pauseAudio } from "@/lib/audioControl";
import { supabase } from "@/lib/supabase";

/**
 * WhatsAppRSVP — Botón flotante de confirmación de asistencia.
 *
 * Al tocar el botón se abre un panel inferior (bottom sheet) con
 * dos opciones para confirmar:
 *   1. Ana Victoria  → número de la quinceañera
 *   2. Mamá de Ana   → número de la mamá
 *
 * Cada opción abre WhatsApp con un mensaje pre-cargado.
 */

// ── Números de WhatsApp (con código de país, sin el +) ──
const ANA_PHONE   = "50761853683";
const MAMA_PHONE  = "50765217447";

function buildWaLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

const options = [
  {
    id: "ana",
    label: "Ana Victoria",
    sublabel: "Confirmar con la quinceañera",
    phone: ANA_PHONE,
    message:
      "¡Hola Ana Victoria! Confirmo mi asistencia para celebrar tus XV años en el Bosque Encantado. 🌿✨",
    color:
      "from-gold/20 to-moss-green/20 border-gold/30 hover:bg-gold/10",
    iconColor: "text-gold-light",
  },
  {
    id: "mama",
    label: "Mamá de Ana",
    sublabel: "Confirmar con la mamá",
    phone: MAMA_PHONE,
    message:
      "¡Hola! Confirmo mi asistencia a los XV años de Ana Victoria en el Bosque Encantado. 🌿✨",
    color:
      "from-moss-light/20 to-deep-purple/20 border-moss-light/30 hover:bg-moss-light/10",
    iconColor: "text-moss-light",
  },
] as const;

export default function WhatsAppRSVP() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {/* ── Bottom Sheet Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel inferior */}
            <motion.div
              key="panel"
              className="fixed bottom-0 left-0 right-0 z-[80] bg-gradient-to-t from-[#0a1208] to-[#0d1a0b] border-t border-gold/20 rounded-t-3xl px-6 pt-6 pb-10 shadow-[0_-10px_60px_rgba(0,0,0,0.5)]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
            >
              {/* Manija decorativa */}
              <div className="w-10 h-1 bg-gold/30 rounded-full mx-auto mb-5" />

              <h3 className="font-serif text-2xl text-gold text-center mb-1">
                Confirmar Asistencia
              </h3>
              
              <div className="max-w-xs mx-auto mt-4 mb-4">
                <input
                  type="text"
                  placeholder="Tu Nombre y Apellido"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  disabled={isLoading}
                  className="w-full bg-black/40 border border-gold/30 rounded-xl px-4 py-3 text-gold-light placeholder:text-gold/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 font-sans text-sm text-center"
                />
              </div>

              <p className="font-sans text-xs text-muted text-center tracking-wider mb-4">
                ¿A quién deseas enviar el mensaje?
              </p>

              <div className="space-y-3 max-w-xs mx-auto">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    disabled={isLoading}
                    className={`flex items-center gap-4 w-full p-4 rounded-2xl border bg-gradient-to-r ${opt.color} transition-all active:scale-95 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={async () => {
                      if (!guestName.trim()) {
                        alert("Por favor, ingresa tu Nombre y Apellido para continuar.");
                        return;
                      }

                      setIsLoading(true);
                      
                      try {
                        // Guardar en Supabase
                        await supabase.from("guests").insert([{ 
                          name: guestName.trim(), 
                          confirmed_to: opt.label 
                        }]);
                      } catch (error) {
                        console.error("Error saving to db", error);
                      }
                      
                      setIsLoading(false);
                      pauseAudio();
                      
                      // Mensaje modificado
                      const customMessage = `¡Hola! Soy *${guestName.trim()}*. ` + 
                        (opt.id === "ana" ? "Confirmo mi asistencia para celebrar tus XV años en el Bosque Encantado. 🌿✨" : "Confirmo mi asistencia a los XV años de Ana Victoria en el Bosque Encantado. 🌿✨");

                      window.open(buildWaLink(opt.phone, customMessage), "_blank", "noopener,noreferrer");
                      
                      setTimeout(() => {
                        setIsOpen(false);
                        setGuestName("");
                      }, 500);
                    }}
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-black/30 ${opt.iconColor}`}>
                      <FaWhatsapp size={20} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-sans font-semibold text-foreground text-sm">
                        {opt.label}
                      </p>
                      <p className="font-sans text-xs text-muted">
                        {opt.sublabel}
                      </p>
                    </div>
                    {/* Flecha */}
                    <span className="text-foreground/30 text-lg">›</span>
                  </button>
                ))}
              </div>

              {/* Cerrar */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mx-auto mt-5 font-sans text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
              >
                <FaTimes size={10} />
                Cancelar
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Botón flotante principal ── */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]"
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 280, damping: 28 }}
      >
        {/* Halo pulsante */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]/20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20c05c] active:scale-95 text-white font-sans font-semibold text-xs py-3 px-6 w-[80vw] max-w-[280px] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-200 whitespace-nowrap"
          aria-label="Confirmar asistencia por WhatsApp"
        >
          <FaWhatsapp size={16} />
          Confirmar asistencia
        </button>
      </motion.div>
    </>
  );
}
