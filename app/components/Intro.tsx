"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("meji-intro");

    if (visited) return;

    setMounted(true);

    const t1 = setTimeout(() => {
      setShow(true);
    }, 100);

    const t2 = setTimeout(() => {
      setShow(false);
    }, 2500);

    const t3 = setTimeout(() => {
      localStorage.setItem("meji-intro", "true");
      setMounted(false);
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black transition-opacity duration-700 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-[0.45em] text-white">
          MEJI
        </h1>

        <p className="mt-8 text-sm uppercase tracking-[0.55em] text-white/60">
          Archivamos recuerdos.
        </p>
      </div>
    </div>
  );
}