"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          {/* Logo */}
          <h1 className="text-3xl font-black tracking-[0.35em]">
            MEJI
          </h1>

          {/* Menú escritorio */}
          <nav className="hidden md:flex gap-14 text-sm uppercase tracking-[0.35em]">

            <a href="#" className="transition hover:text-white/60">
              Archivo
            </a>

            <a href="#" className="transition hover:text-white/60">
              Historia
            </a>

            <a href="#" className="transition hover:text-white/60">
              Colecciones
            </a>

          </nav>

          {/* Botón móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </header>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-[#050505] text-white">

          <div className="px-10">

            <p className="mb-10 text-xs uppercase tracking-[0.5em] text-white/40">
              Archivo
            </p>

            <nav className="space-y-8">

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block text-4xl font-light"
              >
                001 Domingos
              </a>

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block text-4xl font-light"
              >
                002 Infancia
              </a>

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block text-4xl font-light"
              >
                003 Barrio
              </a>

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block text-3xl text-white/70"
              >
                Especial · Sin Pedigree
              </a>

            </nav>

          </div>

        </div>
      )}
    </>
  );
}