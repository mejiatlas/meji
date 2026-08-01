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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-black tracking-[0.35em]">
          MEJI
        </h1>

        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-[0.35em]">
          <a href="#" className="hover:text-white/60 transition">
            Archivo
          </a>

          <a href="#" className="hover:text-white/60 transition">
            Historia
          </a>

          <a href="#" className="hover:text-white/60 transition">
            Colecciones
          </a>
        </nav>
      </div>
    </header>
  );
}