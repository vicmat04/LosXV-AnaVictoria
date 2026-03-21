import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Las imágenes locales en /public no necesitan configuración adicional
    // Si en el futuro usas imágenes externas, agrega sus dominios aquí
    remotePatterns: [],
  },
};

export default nextConfig;
