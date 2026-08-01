import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Imagen de fondo */}
      <Image
        src="/images/hero/home.png"
        alt="Meji"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Oscurecer imagen */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Degradado cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white">

        <span className="mb-6 text-xs uppercase tracking-[0.6em] text-white/70 md:text-sm">
          ARCHIVO 001
        </span>

        <h1 className="text-5xl font-black tracking-[0.20em] sm:text-6xl md:text-8xl">
          MEJI
        </h1>

        <h2 className="mt-6 text-3xl font-bold md:text-5xl">
          Vestimos recuerdos.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85 md:text-2xl">
          Hay historias que nunca terminan.
          <br />
          Solo esperan que alguien las vuelva a recordar.
        </p>

        <div className="mt-12">
          <Button>
            Entrar al Archivo →
          </Button>
        </div>

        <div className="mt-16 animate-bounce text-3xl text-white/60">
          ↓
        </div>

      </div>
    </section>
  );
}