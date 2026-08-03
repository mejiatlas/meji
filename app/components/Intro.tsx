"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [visible, setVisible] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("meji-intro");

    if (alreadyVisited) {
      setHide(true);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        localStorage.setItem("meji-intro", "true");
        setHide(true);
      }, 700);

    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-white text-5xl md:text-7xl font-black tracking-[0.45em]">
        MEJI
      </h1>

      <p className="mt-8 uppercase tracking-[0.55em] text-white/60 text-xs md:text-sm">
        Archivo 001
      </p>

      <p className="mt-6 text-white text-xl md:text-2xl font-light">
        Vestimos recuerdos.
      </p>
    </div>
  );
}