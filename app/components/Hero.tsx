import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Fondo */}
      <Image
        src="/images/hero/home.png"
        alt="Meji"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Oscurecer imagen */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white">

        <span className="mb-8 text-xs uppercase tracking-[0.7em] text-white/60">
          EL ARCHIVO
        </span>

        <h1 className="text-6xl font-black tracking-[0.25em] md:text-8xl">
          MEJI
        </h1>

        <p className="mt-12 text-2xl font-light md:text-4xl">
          No coleccionamos prendas.
        </p>

        <p className="mt-2 text-3xl font-semibold md:text-5xl">
          Archivamos recuerdos.
        </p>

        <p className="mt-12 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
          Hay historias que nunca terminan.
          <br />
          Solo esperan que alguien las vuelva a recordar.
        </p>

        <div className="mt-14">
          <Button>
            Abrir Archivo →
          </Button>
        </div>

      </div>

      <div className="absolute bottom-8 animate-bounce text-3xl text-white/50">
        ↓
      </div>

    </section>
  );
}