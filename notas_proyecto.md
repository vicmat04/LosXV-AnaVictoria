# Notas del Proyecto: Los XV de Ana Victoria 🌿✨

Este documento sirve como bitácora y guía técnica de la invitación web creada con la temática de "Bosque Encantado".

---

## Parte 1: Resumen del Proceso (Solo para recordar)

### ¿Qué hemos logrado juntos?
1. **Atmosfera Elegante:** Ajustamos los colores a dorado brillante con verde musgo e implementamos un **favicon personalizado** (una hermosa 'A' dorada en `src/app/icon.svg`).
2. **Itinerario Mejorado:** 
   - Configuramos la misa para el **Sábado 4 de abril**.
   - Configuramos la recepción para el **18 de abril**.
   - Desarrollamos una atractiva **Línea de Tiempo Vertical** detallando el programa de la fiesta (Recepción, Buffet, Vals, Hora Loca, etc.), cuidando de usar los íconos de etiqueta (como la corbata).
3. **Galería de Fotos:** Es ahora auto-deslizable sin interrupciones táctiles, para mantener siempre el flujo de la música instrumental de fondo.
4. **Confirmación Inteligente (RSVP):** El invitado debe ingresar obligatoriamente su "Nombre y Apellido". De lo contrario, saltará una animación visual (la caja del nombre tiembla y se pinta de rojo).
5. **Base de Datos Dinámica:** Los nombres se envían a un mensaje de WhatsApp (de la cumpleañera o la mamá) y paralelamente se quedan almacenados de forma vitalicia en un servicio externo de Supabase.
6. **Panel de Administración Secreto:** Si tocas **3 veces** rápidas sobre el adorno floral que está encima del título principal ("✦ ❧ ✦") e introduces la contraseña (`Ana15`), entras al panel VIP para la cumpleañera donde ve sus invitados, edita errores, elimina cancelados o copia la lista terminada directamente a WhatsApp.

---

## Parte 2: Ficha Técnica

### Tecnologías Utilizadas
- **Framework Principal:** Next.js (App Router, versión 15+) utilizando React.
- **Estilos:** Tailwind CSS.
- **Animaciones:** Framer Motion (maneja el scroll general, el menú secreto inferior del RSVP y el efecto "shake" de validación del nombre).
- **Íconos:** Paquete `react-icons` (usamos variantes desde `fa`: FontAwesome, hasta `gi`: GameIcons, para las campanas y corbatas).
- **Carrusel:** `SwiperJS`.
- **Base de Datos:** Supabase (implementación vía `@supabase/supabase-js`).

### ¿Por qué lo hicimos así y cómo funciona la Base de Datos?
- Se requería una base de datos sin un servidor propio, la cual construyera la lista para el panel de administración de Ana Victoria. Se usó una instancia gratuita de **Supabase (PostgreSQL)** alojada en `ncpbvodizzlccghchrgp.supabase.co`.
- Se configuró la clave anónima (`anon key`) pública directamente en el código de Next.js (`src/lib/supabase.ts`) usando acceso directo a la tabla `guests` sin RLS (Row Level Security), aprovechando que la interfaz de lectura se esconde bajo código estático (`Ana15`).

### ¿Cómo y dónde lo publicamos?
Al ser un proyecto desarrollado sobre **Next.js**, el escenario ideal para el despliegue es en su plataforma madre: Vercel.

**Pasos para el despliegue final (Publicación web):**
1. **Tener tu código en GitHub:** (Tu código ya reposa en `github.com/vicmat04/LosXV-AnaVictoria`).
2. Crea una cuenta gratuita en **[Vercel](https://vercel.com/)** iniciando sesión directamente con tu cuenta de GitHub.
3. Al entrar a Vercel, dale clic al botón superior derecho **`Add New...`** -> **`Project`**.
4. Del lado izquierdo aparecerán tus repositorios. Selecciona `LosXV-AnaVictoria` y dale al botón de **`Import`**.
5. Vercel detectará todo tu código. No cambies las variables, solo haz clic en **Deploy**.
6. En aproximadamente 1 minuto, ¡tu web estará publicada! Vercel te dará una primera dirección (URL) que podrías usar gratis con la terminación `.vercel.app` para que compartas la página inmediatamente a los invitados. (Y si deseas, desde la sección _Domains_ en Vercel puedes conectarle un nombre propio comprado).
