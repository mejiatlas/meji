import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Moon from "../../components/ui/Moon";

const objects = [
  {
    title: "Yoyó",
    text: "Un pedazo de madera, una cuerda y horas enteras de juego.",
  },
  {
    title: "Balero",
    text: "La paciencia también era parte del juego.",
  },
  {
    title: "Trompo",
    text: "Antes de una pantalla, había que aprender a hacerlo girar.",
  },
  {
    title: "Luchadores",
    text: "Héroes pintados a mano que cabían en nuestras manos.",
  },
];

export default function ArtesaniasPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Imagen */}
        <div className="absolute inset-0">
          <Image
            src="/images/archives/artesanias/hero.jpg"
            alt="Artesanías mexicanas pintadas a mano"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-[#050505]" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-24 md:px-10 md:pb-32">

          <div className="max-w-5xl">

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#ff5c8a]" />

              <p className="text-xs uppercase tracking-[0.55em] text-white/50">
                Archivo 007
              </p>

              <Moon className="h-4 w-4 text-[#ff5c8a]" />
            </div>

            <h1 className="mt-8 text-7xl font-black leading-[0.85] tracking-tight md:text-9xl">
              Artesanías
            </h1>

            <p className="mt-10 max-w-3xl text-3xl font-light leading-tight text-white/85 md:text-5xl">
              Antes jugábamos
              <br />
              con las manos.
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="px-6 py-28 md:px-10 md:py-40">

        <div className="mx-auto grid max-w-7xl gap-20 md:grid-cols-2 md:gap-32">

          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-white/35">
              El recuerdo
            </p>

            <h2 className="mt-8 text-5xl font-black leading-[0.95] md:text-7xl">
              Lo que se hace
              <br />
              <span className="text-white/35">
                con las manos.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <div>

              <p className="text-2xl font-light leading-relaxed text-white/80 md:text-3xl">
                Hubo juguetes que no necesitaban baterías.
              </p>

              <p className="mt-8 text-lg leading-8 text-white/55">
                Se pintaban a mano.
                <br />
                Se gastaban jugando.
                <br />
                A veces se rompían.
                <br />
                Y muchas veces volvíamos a arreglarlos.
              </p>

              <p className="mt-10 text-xl font-semibold text-[#ff5c8a]">
                Algunos todavía sobreviven.
              </p>

            </div>
          </div>

        </div>

      </section>

      {/* OBJETOS */}
      <section className="border-y border-white/10 bg-[#080808] px-6 py-28 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between gap-8">

            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/35">
                Objetos del Archivo
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Cosas que recordamos.
              </h2>
            </div>

            <Moon className="hidden h-8 w-8 text-[#ff5c8a] md:block" />

          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">

            {objects.map((object, index) => (
              <div
                key={object.title}
                className="
                  group
                  bg-[#080808]
                  p-8
                  transition-colors
                  duration-500
                  hover:bg-[#101010]
                  md:p-12
                "
              >

                <div className="flex items-start justify-between">

                  <span className="text-xs tracking-[0.4em] text-white/25">
                    0{index + 1}
                  </span>

                  <Moon
                    className="
                      h-5
                      w-5
                      text-[#ff5c8a]
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:rotate-12
                      group-hover:opacity-100
                    "
                  />

                </div>

                <h3 className="mt-16 text-4xl font-black md:text-5xl">
                  {object.title}
                </h3>

                <p className="mt-5 max-w-md text-lg leading-8 text-white/50">
                  {object.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* NARRATIVA */}
      <section className="px-6 py-32 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.5em] text-white/35">
              Archivo 007
            </p>

            <h2 className="mt-10 text-5xl font-black leading-[0.95] md:text-8xl">
              No eran
              <br />
              solamente juguetes.
            </h2>

            <div className="mt-16 h-px w-24 bg-[#ff5c8a]" />

            <p className="mt-16 max-w-3xl text-2xl font-light leading-relaxed text-white/70 md:text-4xl">
              Eran tardes enteras.
              <br />
              Eran amigos.
              <br />
              Eran competencia.
              <br />
              Eran imaginación.
            </p>

          </div>

        </div>

      </section>

      {/* CIERRE */}
      <section className="px-6 pb-32 md:px-10 md:pb-44">

        <div className="mx-auto max-w-7xl">

          <div className="border-t border-white/10 pt-12">

            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

              <div>

                <p className="text-xs uppercase tracking-[0.5em] text-white/30">
                  El Archivo queda abierto
                </p>

                <p className="mt-6 max-w-3xl text-3xl font-light leading-relaxed text-white/75 md:text-4xl">
                  Lo que se hizo con las manos,
                  <br />
                  terminó quedándose en la memoria.
                </p>

              </div>

              <Moon className="h-10 w-10 shrink-0 text-[#ff5c8a]" />

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}