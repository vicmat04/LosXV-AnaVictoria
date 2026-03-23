"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LeafReveal from "@/components/LeafReveal";
import Fireflies from "@/components/Fireflies";
import PhotoGallery from "@/components/PhotoGallery";
import Countdown from "@/components/Countdown";
import AudioPlayer from "@/components/AudioPlayer";
import Itinerary, { eucharistEvent, receptionEvent } from "@/components/Itinerary";
import WhatsAppRSVP from "@/components/WhatsAppRSVP";
import DressCode from "@/components/DressCode";
import Gifts from "@/components/Gifts";

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);

  // ──────────────────────────────────────────────────────────────
  //  FECHA DEL EVENTO: 18 de abril de 2026 a las 7:30 PM (Recepción)
  // ──────────────────────────────────────────────────────────────
  const eventDate = "2026-04-18T19:30:00";

  return (
    <main className="relative min-h-screen w-full pb-32 overflow-x-hidden">

      {/* ── Foto de fondo fija (Ana Victoria) ── */}
      <div
        className="fixed inset-0 z-[-3] pointer-events-none"
        style={{
          backgroundImage: "url('/photos/HEN_6346.jpg')",
          backgroundSize: "auto 100vh",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ── Fondo degradado base (sobre la foto) ── */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-b from-[#060d04]/85 via-[#0d1a0a]/80 to-[#02060a]/90" />

      {/* ── Nebulosa de color ambiental ── */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-moss-green/10 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-deep-purple/20 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gold/5 blur-[80px]" />
      </div>

      {/* ── Luciérnagas ── */}
      <Fireflies />

      {/* ── Pantalla de apertura con hojas ── */}
      <LeafReveal onReveal={() => setIsRevealed(true)} />

      {/* ── Contenido principal (se revela tras la animación) ── */}
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* ── Reproductor de audio ── */}
          <AudioPlayer autoPlayTrigger={isRevealed} />

          {/* ────────────────────────────────────────────────────── */}
          {/*  HERO — Encabezado principal                           */}
          {/* ────────────────────────────────────────────────────── */}
          <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 min-h-[70vh]">
            {/* Ornamento floral */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-gold-light text-2xl tracking-[0.3em] mb-4 select-none"
              aria-hidden
            >
              ✦ ❧ ✦
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-sans text-xs tracking-[0.4em] uppercase text-moss-light mb-3"
            >
              Te invito a celebrar
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="font-serif italic text-3xl md:text-4xl text-gold/80 mb-4"
            >
              Mis XV Años
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl text-gold-light mb-6 leading-tight tracking-wide [animation:shimmer_3s_ease-in-out_infinite]"
              style={{
                fontFamily: "var(--font-cinzel)",
                textShadow: "0 0 20px rgba(212,175,55,0.5), 0 0 60px rgba(212,175,55,0.2)",
              }}
            >
              Ana Victoria
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="w-40 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="font-serif italic text-base md:text-lg text-foreground/70 max-w-sm leading-relaxed"
            >
              &ldquo;Hay momentos que son especiales por sí solos, pero
              compartirlos contigo los hace eternos.&rdquo;
            </motion.p>

            {/* ── Fecha con halo luminoso ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative flex flex-col items-center justify-center mt-8 mb-6"
            >
              {/* Halo de luz difusa detrás */}
              <div className="absolute w-64 h-16 rounded-full bg-gold/20 blur-[48px] pointer-events-none" />
              <div className="absolute w-40 h-10 rounded-full bg-gold/30 blur-[24px] pointer-events-none" />

              {/* Líneas decorativas */}
              <div className="flex items-center gap-3 mb-1">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
                <span className="text-gold/50 text-xs tracking-[0.3em] select-none">✦</span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
              </div>

              {/* Fecha */}
              <p
                className="relative font-serif text-2xl md:text-3xl text-gold-light tracking-widest"
                style={{
                  textShadow:
                    "0 0 18px rgba(212,175,55,0.7), 0 0 48px rgba(212,175,55,0.3)",
                }}
              >
                18 de abril · 2026
              </p>
            </motion.div>

            {/* Ornamento floral inferior */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-gold/40 text-xl tracking-[0.3em] mt-2 select-none"
              aria-hidden
            >
              ✦ ✦ ✦
            </motion.div>
          </section>

          {/* ────────────────────────────────────────────────────── */}
          {/*  GALERÍA DE FOTOS                                       */}
          {/* ────────────────────────────────────────────────────── */}
          <section className="px-4 mb-4">
            <PhotoGallery />

          </section>

          {/* Separador decorativo */}
          <div className="w-3/4 max-w-sm mx-auto h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent my-12" />

          {/* ────────────────────────────────────────────────────── */}
          {/*  EUCARISTÍA                                             */}
          {/* ────────────────────────────────────────────────────── */}
          <Itinerary showTitle={false} events={[eucharistEvent]} />

          {/* Separador */}
          <div className="w-3/4 max-w-sm mx-auto h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent my-12" />

          {/* ────────────────────────────────────────────────────── */}
          {/*  RECEPCIÓN                                              */}
          {/* ────────────────────────────────────────────────────── */}
          <Itinerary title="Itinerario" showTitle={true} events={[receptionEvent]} />

          {/* Separador */}
          <div className="w-3/4 max-w-sm mx-auto h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent my-12" />

          {/* ────────────────────────────────────────────────────── */}
          {/*  CONTADOR REGRESIVO                                     */}
          {/* ────────────────────────────────────────────────────── */}
          <section className="flex flex-col items-center px-4 mb-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-3xl text-gold text-center mb-2"
            >
              ✦ Faltan ✦
            </motion.h2>
            <p className="font-sans text-xs text-muted tracking-widest uppercase mb-6">
              18 de Abril · 7:30 PM
            </p>
            <Countdown targetDate={eventDate} />
          </section>

          {/* Separador */}
          <div className="w-3/4 max-w-sm mx-auto h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent my-12" />

          {/* ────────────────────────────────────────────────────── */}
          {/*  CÓDIGO DE VESTIMENTA                                   */}
          {/* ────────────────────────────────────────────────────── */}
          <DressCode />

          {/* Separador */}
          <div className="w-3/4 max-w-sm mx-auto h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent my-12" />

          {/* ────────────────────────────────────────────────────── */}
          {/*  CIERRE — FIRMA Y REGALOS                               */}
          {/* ────────────────────────────────────────────────────── */}
          <section className="flex flex-col items-center px-4 mt-8 mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pb-8 text-center"
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

            <Gifts />
          </section>

        </motion.div>
      )}

      {/* ── Botón RSVP flotante (siempre visible tras reveal) ── */}
      {isRevealed && <WhatsAppRSVP />}
    </main>
  );
}
