"use client";

import { useEffect, useState } from "react";
import Moon from "./ui/Moon";

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
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#ff5c8a] shadow-lg shadow-black/20"
            : "bg-[#ff5c8a]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* MEJI + LUNA */}
          <a
            href="/"
            aria-label="MEJI"
            className="group flex items-center gap-2 text-3xl font-black tracking-[0.35em] text-[#050505] transition-all duration-300 hover:text-white"
          >
            <span>MEJI</span>

            <Moon
              className="
                h-7
                w-7
                text-[#050505]
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:rotate-12
                group-hover:scale-110
                group-hover:text-white
              "
            />
          </a>

          {/* MENÚ DESKTOP */}
          <nav className="hidden items-center gap-12 text-sm font-semibold uppercase tracking-[0.25em] md:flex">
            {/* ARCHIVOS */}
            <a
              href="/archivos"
              className="group relative text-[#050505] transition-all duration-300 hover:text-white"
            >
              Archivos

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>

            {/* HISTORIA */}
            <a
              href="/#historia"
              className="group relative text-[#050505] transition-all duration-300 hover:text-white"
            >
              Historia

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>

            {/* TIENDA */}
            <a
              href="/tienda"
              className="group relative text-[#050505] transition-all duration-300 hover:text-white"
            >
              Tienda

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>

            {/* CARRITO */}
            <a
              href="/carrito"
              aria-label="Carrito"
              className="group flex items-center gap-2 text-[#050505] transition-all duration-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <circle cx="9" cy="20" r="1" />
                <circle cx="19" cy="20" r="1" />
                <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 1.9-1.4L22 8H6" />
              </svg>

              <span>Carrito</span>
            </a>
          </nav>

          {/* MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="text-3xl font-light text-[#050505] transition-all duration-300 hover:text-white md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* MENÚ MOBILE */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-[#050505] text-white">
          <div className="px-10">
            <div className="mb-12 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.5em] text-white/40">
                El Gran Archivo
              </span>

              <Moon className="h-5 w-5 text-[#ff5c8a]" />
            </div>

            <nav className="space-y-8">
              {/* ARCHIVOS */}
              <a
                href="/archivos"
                onClick={() => setMenuOpen(false)}
                className="group block text-4xl font-light transition-all duration-300 hover:text-[#ff5c8a]"
              >
                Archivos

                <span className="ml-3 text-[#ff5c8a] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  →
                </span>
              </a>

              {/* HISTORIA */}
              <a
                href="/#historia"
                onClick={() => setMenuOpen(false)}
                className="group block text-4xl font-light transition-all duration-300 hover:text-[#ff5c8a]"
              >
                Historia

                <span className="ml-3 text-[#ff5c8a] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  →
                </span>
              </a>

              {/* TIENDA */}
              <a
                href="/tienda"
                onClick={() => setMenuOpen(false)}
                className="group block text-4xl font-light transition-all duration-300 hover:text-[#ff5c8a]"
              >
                Tienda

                <span className="ml-3 text-[#ff5c8a] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  →
                </span>
              </a>

              {/* CARRITO */}
              <a
                href="/carrito"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-4 text-3xl text-white/70 transition-all duration-300 hover:text-[#ff5c8a]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 transition-transform duration-300 group-hover:-translate-y-0.5"
                >
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="19" cy="20" r="1" />
                  <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 1.9-1.4L22 8H6" />
                </svg>

                <span>Carrito</span>

                <span className="text-[#ff5c8a] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  →
                </span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}