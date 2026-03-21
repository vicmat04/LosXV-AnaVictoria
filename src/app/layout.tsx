import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ana Victoria — Mis XV Años | Bosque Encantado",
  description:
    "Invitación oficial a la celebración de los XV años de Ana Victoria. Una noche mágica en el Bosque Encantado, 18 de abril de 2026.",
  openGraph: {
    title: "Ana Victoria — XV Años Bosque Encantado",
    description: "Celebra conmigo esta noche mágica ✨",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} ${cinzel.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
