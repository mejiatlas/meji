import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Moon from "../../components/ui/Moon";

const values = [
  {
    number: "01",
    title: "Rescate",
    text: "Una segunda oportunidad para quienes alguna vez no tuvieron ninguna.",
  },
  {
    number: "02",
    title: "Familia",
    text: "Porque una familia no se define por un apellido, sino por el amor.",
  },
  {
    number: "03",
    title: "Historia",
    text: "Cada animal tiene una historia. Nosotros queremos ayudar a contarla.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Imagen */}
        <div className="absolute inset-0">
          <Image
            src="/images/archives/sin-pedigree/hero.jpg"
            alt="Sin Pedigree - MEJI"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-[#050505]" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-24 md:px-10 md:pb-32">

          <div className="max-w-5xl">

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-[#ff5c8a]" />

              <p className="text-xs uppercase tracking-[0.55em] text-white/50">
                Archivo 008
              </p>

              <Moon className="h-4 w-4 text-[#ff5c8a]" />

            </div>

            <h1 className="mt-8 text-7xl font-black leading-[0.85] tracking-tight md:text-9xl">
              Sin
              <br />
              Pedigree
            </h1>

            <p className="mt-10 max-w-3xl text-3xl font-light leading-tight text-white/90 md:text-5xl">
              Porque para ser familia
              <br />
              no necesitas un apellido.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCCIÓN */}
      <section className="px-6 py-28 md:px-10 md:py-40">

        <div className="mx-auto grid max-w-7xl gap-20 md:grid-cols-2 md:gap-32">

          <div>

            <p className="text-xs uppercase tracking-[0.5em] text-white/35">
              Una campaña de MEJI
            </p>

            <h2 className="mt-8 text-5xl font-black leading-[0.95] md:text-7xl">
              Algunas historias
              <br />
              <span className="text-white/35">
                empiezan de nuevo.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-2xl font-light leading-relaxed text-white/85 md:text-3xl">
              No todos nacen con un hogar.
              <br />
              Pero todos merecen encontrar uno.
            </p>

            <p className="mt-10 text-lg leading-8 text-white/55">
              Sin Pedigree nace para apoyar historias reales de rescate,
              cuidado y adopción.
            </p>

            <p className="mt-8 text-lg leading-8 text-white/55">
              MEJI une su voz con quienes todos los días trabajan para
              darles una segunda oportunidad.
            </p>

          </div>

        </div>

      </section>

      {/* CAMPAÑA */}
      <section className="border-y border-white/10 bg-[#080808] px-6 py-28 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between gap-8">

            <div>

              <p className="text-xs uppercase tracking-[0.5em] text-white/35">
                La causa
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                No es una colección.
              </h2>

              <p className="mt-4 text-2xl font-light text-white/55 md:text-3xl">
                Es una forma de ayudar.
              </p>

            </div>

            <Moon className="hidden h-8 w-8 text-[#ff5c8a] md:block" />

          </div>

          {/* VALORES */}
          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">

            {values.map((value) => (
              <div
                key={value.number}
                className="
                  group
                  bg-[#080808]
                  p-8
                  transition-colors
                  duration-500
                  hover:bg-[#101010]
                  md:p-10
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs tracking-[0.4em] text-white/25">
                    {value.number}
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

                <h3 className="mt-16 text-3xl font-black md:text-4xl">
                  {value.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-white/50">
                  {value.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* REFUGIO */}
      <section className="px-6 py-32 md:px-10 md:py-44">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.5em] text-white/35">
              Unidos por una causa
            </p>

            <h2 className="mt-10 text-5xl font-black leading-[0.95] md:text-8xl">
              Historias que
              <br />
              <span className="text-white/35">
                merecen otra oportunidad.
              </span>
            </h2>

            <div className="mt-16 h-px w-24 bg-[#ff5c8a]" />

            <p className="mt-16 max-w-3xl text-2xl font-light leading-relaxed text-white/70 md:text-4xl">
              Esta campaña se construye junto al trabajo de quienes
              rescatan, cuidan y buscan un hogar para estos animales.
            </p>

          </div>

        </div>

      </section>

      {/* HISTORIAS REALES */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-2 md:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.5em] text-white/35">
                Próximamente
              </p>

              <h2 className="mt-8 text-5xl font-black leading-[0.95] md:text-7xl">
                Aquí estarán
                <br />
                sus historias.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
                Cada animal que forme parte de la campaña tendrá su propio
                espacio para contar quién es, de dónde viene y cómo podemos
                ayudar.
              </p>

            </div>

            <div className="flex min-h-[360px] items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-[#080808]">

              <div className="text-center">

                <Moon className="mx-auto h-10 w-10 text-[#ff5c8a]/70" />

                <p className="mt-6 text-xs uppercase tracking-[0.4em] text-white/30">
                  Historias reales
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* APOYO */}
      <section className="bg-[#ff5c8a] px-6 py-28 text-[#050505] md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.5em]">
              Sin Pedigree · MEJI
            </p>

            <h2 className="mt-8 text-5xl font-black leading-[0.9] md:text-8xl">
              Comprar también
              <br />
              puede ayudar.
            </h2>

            <p className="mt-10 max-w-2xl text-xl leading-8 text-[#050505]/70 md:text-2xl">
              Cada producto de esta campaña tendrá un propósito claro:
              convertir una compra en apoyo para una causa que importa.
            </p>

            <button
              type="button"
              className="
                mt-10
                rounded-full
                border-2
                border-[#050505]
                px-8
                py-4
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                transition-all
                duration-300
                hover:bg-[#050505]
                hover:text-[#ff5c8a]
              "
            >
              Conocer la campaña
            </button>

          </div>

        </div>

      </section>

      {/* CIERRE */}
      <section className="px-6 pb-32 pt-28 md:px-10 md:pb-44">

        <div className="mx-auto max-w-7xl">

          <div className="border-t border-white/10 pt-12">

            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

              <div>

                <p className="text-xs uppercase tracking-[0.5em] text-white/30">
                  El Archivo queda abierto
                </p>

                <p className="mt-6 max-w-3xl text-3xl font-light leading-relaxed text-white/75 md:text-4xl">
                  No importa de dónde vienes.
                  <br />
                  Importa dónde encuentras tu hogar.
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