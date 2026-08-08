import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Moon from "../../components/ui/Moon";

export default function MundoRosaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="/images/archives/mundo-rosa/hero.png"
            alt="Mundo Rosa — MEJI"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Overlay muy ligero */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Solo ayuda a leer el texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

          {/* Transición inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 via-transparent to-transparent" />

        </div>

        {/* FRESAS */}
        <div className="pointer-events-none absolute right-[12%] top-[25%] z-10 hidden text-4xl md:block">
          🍓
        </div>

        <div className="pointer-events-none absolute bottom-[20%] right-[18%] z-10 hidden text-3xl md:block">
          🍓
        </div>

        {/* CONTENIDO */}
        <div className="relative z-20 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 md:px-10">

          <div className="max-w-4xl">

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-[#ff5c8a]" />

              <p className="text-xs uppercase tracking-[0.55em] text-white">
                Archivo 003
              </p>

              <Moon className="h-4 w-4 text-[#ff5c8a]" />

            </div>

            <h1 className="mt-8 text-6xl font-black leading-[0.82] tracking-tight md:text-8xl">
              Mundo
              <br />
              <span className="text-[#ff5c8a]">
                Rosa
              </span>
            </h1>

            <p className="mt-10 max-w-3xl text-3xl font-light leading-tight text-white md:text-5xl">
              Porque a veces
              <br />
              el mundo se ve mejor en rosa.
            </p>

            <div className="mt-10 flex items-center gap-3">

              <span className="text-2xl">
                🍓
              </span>

              <span className="text-sm uppercase tracking-[0.35em] text-white/80">
                Una colección para sonreír
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="bg-[#fff4f7] px-6 py-24 text-[#111] md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">

          <div>

            <div className="mb-8 h-1 w-12 bg-[#ff5c8a]" />

            <h2 className="text-5xl font-black leading-[0.9] md:text-7xl">
              No todo tiene
              <br />
              que ser
              <br />
              <span className="text-[#ff5c8a]">
                serio.
              </span>
            </h2>

          </div>

          <div className="relative">

            <span className="absolute -right-2 -top-12 text-5xl">
              🍓
            </span>

            <p className="text-2xl font-semibold leading-relaxed md:text-3xl">
              Hay días que merecen un poco más de color.
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60 md:text-xl">
              Mundo Rosa nace para guardar esos momentos:
              lo bonito, lo dulce, lo divertido y todo aquello
              que simplemente nos hace sentir bien.
            </p>

            <p className="mt-8 text-lg leading-8 text-black/60 md:text-xl">
              No es solamente un color.
              <br />
              Es una actitud.
            </p>

            <p className="mt-8 text-xl font-bold text-[#ff5c8a] md:text-2xl">
              Lo dulce está en lo sencillo.
            </p>

          </div>

        </div>

      </section>

      {/* BLOQUE ROSA */}
      <section className="bg-[#ff5c8a] px-6 py-24 text-[#050505] md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.5em]">
                Mundo Rosa · MEJI
              </p>

              <h2 className="mt-8 max-w-5xl text-5xl font-black leading-[0.88] md:text-8xl">
                Lo dulce está
                <br />
                en lo sencillo.
              </h2>

            </div>

            <div className="text-7xl md:text-9xl">
              🍓
            </div>

          </div>

          <div className="mt-14 h-px w-full bg-black/20" />

          <p className="mt-10 max-w-3xl text-xl leading-8 text-black/65 md:text-2xl">
            Una canción.
            Un color.
            Una tarde.
            Una persona.
            Un recuerdo.
          </p>

        </div>

      </section>

      {/* CIERRE */}
      <section className="bg-[#050505] px-6 py-32 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <div className="border-t border-white/10 pt-12">

            <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">

              <div>

                <p className="text-xs uppercase tracking-[0.5em] text-white/30">
                  Archivo 003
                </p>

                <p className="mt-6 max-w-4xl text-3xl font-light leading-relaxed text-white/75 md:text-5xl">
                  Hay recuerdos que no necesitan
                  <br />
                  explicación.
                  <br />
                  Solo necesitan un poco de color.
                </p>

              </div>

              <div className="flex items-center gap-5">

                <span className="text-4xl">
                  🍓
                </span>

                <Moon className="h-9 w-9 text-[#ff5c8a]" />

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}