"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDirections } from "react-icons/fa";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  locationName: string;
  address: string;
  mapQuery: string;      // query para el iframe de Google Maps
  navigateTo: string;   // URL de la app (Maps o Waze)
  appName: "Maps" | "Waze";
}

export default function MapModal({
  isOpen,
  onClose,
  locationName,
  address,
  mapQuery,
  navigateTo,
  appName,
}: MapModalProps) {
  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed&hl=es&z=16`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel del modal */}
          <motion.div
            className="fixed inset-x-4 top-[50%] z-[90] max-w-lg mx-auto -translate-y-1/2 rounded-3xl overflow-hidden
                       border border-gold/30 shadow-[0_0_60px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.1)]"
            style={{ maxHeight: "85vh" }}
            initial={{ opacity: 0, scale: 0.9, y: "-45%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%" }}
            exit={{ opacity: 0, scale: 0.92, y: "-45%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="relative flex items-start justify-between gap-3 px-5 pt-5 pb-4 bg-[#0d1a0a]/95 border-b border-gold/20">
              {/* Halo decorativo */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent rounded-full" />

              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold/50 mb-0.5">
                  Cómo llegar
                </p>
                <h3
                  className="font-serif text-xl text-gold-light leading-tight"
                  style={{ textShadow: "0 0 20px rgba(212,175,55,0.4)" }}
                >
                  {locationName}
                </h3>
                <p className="font-sans text-xs text-foreground/50 mt-1">{address}</p>
              </div>

              <button
                onClick={onClose}
                className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full
                           bg-black/40 border border-gold/20 text-foreground/50
                           hover:border-gold/50 hover:text-gold-light transition-all duration-200"
                aria-label="Cerrar"
              >
                <FaTimes size={13} />
              </button>
            </div>

            {/* Mapa */}
            <div className="relative w-full bg-black" style={{ height: "340px" }}>
              <iframe
                src={iframeSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.7) brightness(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${locationName}`}
              />
            </div>

            {/* Footer con botón Ir */}
            <div className="flex gap-3 px-5 py-4 bg-[#0d1a0a]/95 border-t border-gold/20">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-full border border-gold/25 text-foreground/60
                           hover:border-gold/50 hover:text-gold-light transition-all duration-200
                           font-sans text-sm font-medium"
              >
                Cerrar
              </button>
              <a
                href={navigateTo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-[2] items-center justify-center gap-2 py-2.5 rounded-full
                           bg-gold hover:bg-gold-light text-black font-sans text-sm font-semibold
                           transition-all duration-200 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <FaDirections size={15} />
                Ir con {appName}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
