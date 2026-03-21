import { FaChurch, FaGlassCheers, FaMapMarkerAlt, FaWaze } from "react-icons/fa";
import { motion } from "framer-motion";

interface Event {
  title: string;
  time: string;
  location: string;
  address: string;
  gmapsLink: string;
  wazeLink: string;
  icon: React.ReactNode;
}

/**
 * Itinerary — Lista de eventos del día con botones de navegación.
 *
 * ─────────────────────────────────────────────────────────────────
 *  📍  PERSONALIZA AQUÍ:
 *  - Cambia `location` y `address` al lugar real del evento.
 *  - Actualiza `gmapsLink` y `wazeLink` con las URLs de tu ubicación.
 *    Google Maps: Busca el lugar → Compartir → Copiar enlace
 *    Waze:        https://waze.com/ul?ll=LAT,LON&navigate=yes
 * ─────────────────────────────────────────────────────────────────
 */
const events: Event[] = [
  {
    title: "Ceremonia Religiosa",
    time: "5:00 PM",
    location: "Iglesia — Por confirmar",
    address: "Dirección por confirmar",
    gmapsLink: "https://maps.google.com",
    wazeLink: "https://waze.com",
    icon: <FaChurch className="text-2xl text-gold-light" />,
  },
  {
    title: "Recepción & Fiesta",
    time: "7:00 PM",
    location: "Salón Bosque Encantado",
    address: "Dirección por confirmar",
    gmapsLink: "https://maps.google.com",
    wazeLink: "https://waze.com",
    icon: <FaGlassCheers className="text-2xl text-gold-light" />,
  },
];

export default function Itinerary() {
  return (
    <section className="w-full max-w-sm mx-auto px-5 py-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-serif text-3xl text-gold text-center mb-10"
      >
        ✦ Itinerario ✦
      </motion.h2>

      <div className="relative">
        {/* Línea vertical decorativa */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/10 via-gold/30 to-gold/10" />

        <div className="space-y-8">
          {events.map((evt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex items-start gap-5"
            >
              {/* Ícono circular */}
              <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-moss-dark border border-gold/30 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)] z-10">
                {evt.icon}
              </div>

              {/* Contenido */}
              <div className="flex-1 bg-moss-dark/50 backdrop-blur-sm border border-moss-light/20 rounded-2xl p-5 shadow-md">
                <p className="font-sans text-xs uppercase tracking-widest text-gold/60 mb-1">
                  {evt.time}
                </p>
                <h3 className="font-serif text-xl text-gold-light mb-1">
                  {evt.title}
                </h3>
                <p className="font-sans text-sm text-foreground/80 mb-1">
                  {evt.location}
                </p>
                <p className="font-sans text-xs text-foreground/50 mb-4">
                  {evt.address}
                </p>

                {/* Botones de navegación */}
                <div className="flex gap-3">
                  <a
                    href={evt.gmapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-black/40 border border-gold/25 text-gold-light hover:bg-gold hover:text-black transition-colors text-xs font-sans font-medium"
                    aria-label={`Cómo llegar a ${evt.title} por Google Maps`}
                  >
                    <FaMapMarkerAlt />
                    <span>Maps</span>
                  </a>
                  <a
                    href={evt.wazeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#33ccff]/10 border border-[#33ccff]/25 text-[#33ccff] hover:bg-[#33ccff] hover:text-black transition-colors text-xs font-sans font-medium"
                    aria-label={`Cómo llegar a ${evt.title} por Waze`}
                  >
                    <FaWaze />
                    <span>Waze</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
