import Image from "next/image";
import Button from "./ui/Button";
import Moon from "./ui/Moon";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* FONDO */}
      <Image
        src="/images/hero/home.png"
        alt="MEJI"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* OSCURECER */}
      <div className="absolute inset-0 bg-black/55" />

      {/* GRADIENTE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-[#050505]" />

      {/* LUNAS DECORATIVAS */}
      <Moon className="absolute left-[28%] top-[48%] h-4 w-4 rotate-[-20deg] text-[#ff5c8a]/60" />

      <Moon className="absolute right-[24%] top-[35%] h-5 w-5 rotate-12 text-[#ff5c8a]/70" />

      <Moon className="absolute right-[32%] bottom-[22%] h-3 w-3 rotate-[-10deg] text-[#ff5c8a]/50" />

      {/* CONTENIDO */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-6xl
          flex-col
          items-center
          justify-center
          px-6
          pb-24
          pt-32
          text-center
        "
      >

        {/* ARCHIVO GENERAL */}
        <div className="mb-5 flex items-center gap-4">

          <span className="h-px w-8 bg-[#ff5c8a]/70" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.65em] text-white/60">
            Archivo General
          </p>

          <Moon className="h-4 w-4 text-[#ff5c8a]" />

        </div>

        {/* LOGO */}
        <h1 className="text-6xl font-black leading-none tracking-[0.25em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          MEJI
        </h1>

        {/* FRASE */}
        <div className="mt-9">

          <p className="text-xl font-light text-white/80 md:text-3xl">
            No coleccionamos prendas.
          </p>

          <h2 className="mt-2 text-4xl font-black md:text-6xl">
            Archivamos{" "}
            <span className="text-[#ff5c8a]">
              recuerdos.
            </span>
          </h2>

        </div>

        {/* SEPARADOR */}
        <div className="my-8 h-px w-24 bg-[#ff5c8a]/60" />

        {/* TEXTO */}
        <p className="max-w-2xl text-base leading-8 text-white/65 md:text-lg">
          Cada pieza pertenece a un Archivo.
          <br />
          Cada Archivo conserva una parte de nuestra historia.
        </p>

        {/* BOTÓN */}
        <div className="mt-8">
          <Button href="/archivos">
            Explorar Archivos
          </Button>
        </div>

        {/* DESCUBRIR */}
        <a
          href="#archivos"
          className="mt-8 flex flex-col items-center gap-1 text-white/40 transition duration-300 hover:text-[#ff5c8a]"
        >
          <span className="text-[9px] uppercase tracking-[0.45em]">
            Descubrir
          </span>

          <span className="animate-bounce text-xl">
            ↓
          </span>
        </a>

      </div>

    </section>
  );
}