import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Imagen */}
      <Image
        src="/images/hero/home.png"
        alt="MEJI"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* Capas */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#050505]" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center text-white">

        <span className="mb-8 text-xs uppercase tracking-[0.8em] text-white/50">
          ARCHIVO GENERAL
        </span>

        <h1 className="text-7xl font-black tracking-[0.35em] md:text-[9rem]">
          MEJI
        </h1>

        <div className="mt-16 space-y-4">

          <p className="text-2xl font-light text-white/90 md:text-4xl">
            No coleccionamos prendas.
          </p>

          <p className="text-5xl font-black md:text-7xl">
            Archivamos recuerdos.
          </p>

        </div>

        <div className="mt-14 h-px w-28 bg-white/20" />

        <p className="mt-14 max-w-3xl text-lg leading-9 text-white/70 md:text-xl">
          Cada pieza pertenece a un Archivo.
          <br />
          Cada Archivo conserva una parte de nuestra historia.
        </p>

        <div className="mt-16">
          <a href="#archivos">
            <Button>
              Explorar Archivos →
            </Button>
          </a>
        </div>

      </div>

      {/* Flecha */}
      <a
        href="#archivos"
        className="absolute bottom-10 text-3xl text-white/40 transition hover:text-white animate-bounce"
      >
        ↓
      </a>

    </section>
  );
}