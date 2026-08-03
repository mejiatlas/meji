import type { Metadata } from "next";
import "./globals.css";
import Intro from "./components/Intro";

export const metadata: Metadata = {
  title: "MEJI",
  description: "Archivamos recuerdos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[#050505] text-white">
        <Intro />
        {children}
      </body>
    </html>
  );
}