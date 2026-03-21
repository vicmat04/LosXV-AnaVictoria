"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Firefly {
  id: number;
  x: number;         // % horizontal
  y: number;         // % vertical
  size: number;      // px
  duration: number;  // segundos de animación
  delay: number;     // segundos de retraso
  hue: number;       // matiz de color (amarillo/verde)
}

/**
 * Fireflies — Sistema de partículas que simulan luciérnagas
 * flotando aleatoriamente por la pantalla con efecto de brillo.
 * Generadas solo en el cliente para evitar hydration mismatch.
 */
export default function Fireflies() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const generated = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,           // 2 – 6 px
      duration: Math.random() * 8 + 7,        // 7 – 15 s
      delay: Math.random() * 6,               // 0 – 6 s
      hue: Math.random() > 0.7 ? 140 : 55,   // 70% dorado, 30% verde
    }));
    setFireflies(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {fireflies.map((ff) => (
        <motion.div
          key={ff.id}
          className="absolute rounded-full"
          style={{
            width: ff.size,
            height: ff.size,
            left: `${ff.x}%`,
            top: `${ff.y}%`,
            background:
              ff.hue === 55
                ? "rgba(241, 207, 101, 0.9)"   // dorado
                : "rgba(120, 210, 120, 0.85)",  // verde
            boxShadow:
              ff.hue === 55
                ? `0 0 ${ff.size * 3}px ${ff.size}px rgba(241,207,101,0.5)`
                : `0 0 ${ff.size * 3}px ${ff.size}px rgba(100,200,100,0.4)`,
          }}
          animate={{
            y: [0, -(20 + Math.random() * 35), 15, -(40 + Math.random() * 20)],
            x: [0, 15 + Math.random() * 20, -20 + Math.random() * 15, 8],
            opacity: [0, 1, 0.3, 0.85, 0],
            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
          }}
          transition={{
            duration: ff.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: ff.delay,
          }}
        />
      ))}
    </div>
  );
}
