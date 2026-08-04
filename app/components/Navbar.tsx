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
          <a
            href="/"
            className="text-3xl font-black tracking-[0.35em] transition hover:opacity-70"
          >
            MEJI
          </a>

          {/* Menú escritorio */}
          <nav className="hidden md:flex gap-14 text-sm uppercase tracking-[0.35em]">

            <a
              href="#archivos"
              className="transition hover:text-white/60"
            >
              Archivos
            </a>

            <a
              href="#historia"
              className="transition hover:text-white/60"
            >
              Historia
            </a>

            <a
              href="#tienda"
              className="transition hover:text-white/60"
            >
              Tienda
            </a>

          </nav>

          {/* Botón móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl transition"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </header>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] text-white flex flex-col justify-center">

          <div className="px-10">

            <p className="mb-10 text-xs uppercase tracking-[0.5em] text-white/40">
              ARCHIVOS
            </p>

            <nav className="space-y-8">

              <a
                href="#archivos"
                onClick={() => setMenuOpen(false)}
                className="block text-5xl font-light transition hover:text-white/70"
              >
                Archivo 001
                <br />
                <span className="text-2xl text-white/60">
                  Domingos
                </span>
              </a>

              <a
                href="#archivos"
                onClick={() => setMenuOpen(false)}
                className="block text-5xl font-light transition hover:text-white/70"
              >
                Archivo 002
                <br />
                <span className="text-2xl text-white/60">
                  Barrio
                </span>
              </a>

              <a
                href="#archivos"
                onClick={() => setMenuOpen(false)}
                className="block text-5xl font-light transition hover:text-white/70"
              >
                Archivo 003
                <br />
                <span className="text-2xl text-white/60">
                  Infancia
                </span>
              </a>

              <div className="pt-10">

                <a
                  href="#historia"
                  onClick={() => setMenuOpen(false)}
                  className="block text-xl uppercase tracking-[0.35em] text-white/60 hover:text-white transition"
                >
                  Historia
                </a>

                <a
                  href="#tienda"
                  onClick={() => setMenuOpen(false)}
                  className="mt-6 block text-xl uppercase tracking-[0.35em] text-white/60 hover:text-white transition"
                >
                  Tienda
                </a>

              </div>

            </nav>

          </div>

        </div>
      )}
    </>
  );
}