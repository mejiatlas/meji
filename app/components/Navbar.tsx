"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <div className="flex items-center gap-4">

          <span className="text-2xl">✦</span>

          <h1 className="text-3xl font-black tracking-[8px]">
            MEJI
          </h1>

        </div>

        <nav className="hidden gap-12 uppercase tracking-[4px] text-sm md:flex">

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