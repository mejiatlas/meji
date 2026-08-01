"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <div className="flex items-center gap-4">
          <span className="text-xl">✦</span>

          <h1 className="text-2xl font-black tracking-[0.35em]">
            MEJI
          </h1>
        </div>

        <nav className="hidden gap-10 text-sm uppercase tracking-[0.35em] md:flex">

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

      </div>
    </header>
  );
}