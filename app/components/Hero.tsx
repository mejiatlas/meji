import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden text-white">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/home.png')",
        }}
      />

      {/* Oscurecer un poco */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#050505]" />

      {/* Luz central */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_65%)]" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-start pt-32 px-6 text-center">

        <p className="uppercase tracking-[12px] text-white/70 text-sm">
          ARCHIVO 001
        </p>

        <h1 className="mt-8 text-7xl font-black tracking-[14px] drop-shadow-2xl md:text-[10rem]">
          MEJI
        </h1>

        <h2 className="mt-8 text-3xl font-semibold md:text-5xl">
          Vestimos recuerdos.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/80 md:text-2xl">
          Hay historias que nunca terminan.
          <br />
          Solo esperan que alguien las vuelva a recordar.
        </p>

        <div className="mt-14">
          <Button>Entrar al Archivo →</Button>
        </div>

      </div>

      {/* Flecha */}
      <div className="absolute bottom-8 animate-bounce text-4xl text-white/60">
        ↓
      </div>

    </section>
  );
}