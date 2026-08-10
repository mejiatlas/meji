import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Moon from "../components/ui/Moon";

const archives = [
  {
    number: "001",
    title: "Domingos en Casa",
    description:
      "Los pequeños rituales que terminaron convirtiéndose en recuerdos.",
    image: "/images/archives/domingos/hero.jpg",
    href: "/archivos/domingos",
  },
  {
    number: "002",
    title: "Macuahuitl",
    description:
      "México, sus símbolos y la memoria que permanece.",
    image: "/images/archives/macuahuitl/hero.jpg",
    href: "/archivos/macuahuilt",
  },
  {
    number: "003",
    title: "Mundo Rosa",
    description:
      "Porque a veces el mundo se ve mejor en rosa.",
    image: "/images/archives/mundo-rosa/hero.png",
    href: "/archivos/mundo-rosa",
  },
  {
    number: "004",
    title: "Dioses",
    description:
      "Antes de convertirse en leyenda, también fueron niños.",
    image: "/images/archives/dioses/hero.jpg",
    href: "/archivos#archivo-004",
  },
  {
    number: "005",
    title: "Parejas",
    description:
      "Hay recuerdos que solo existen cuando se viven entre dos.",
    image: "/images/archives/parejas/hero.png",
    href: "/archivos#archivo-005",
  },
  {
    number: "006",
    title: "Fauna",
    description:
      "Los animales que también forman parte de nuestra historia.",
    image: "/images/archives/fauna/hero.jpeg",
    href: "/archivos#archivo-006",
  },
  {
    number: "007",
    title: "Artesanías",
    description:
      "Antes jugábamos con las manos.",
    image: "/images/archives/artesanias/hero.jpeg",
    href: "/archivos/artesanias",
  },
  {
    number: "008",
    title: "Sin Pedigree",
    description:
      "Porque para ser familia no necesitas un apellido.",
    image: "/images/archives/sin-pedigree/hero.jpeg",
    href: "/archivos/sin-pedigree",
  },
];

export default function ArchivesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36">

        <div className="mx-auto max-w-7xl">

          <div className="flex items-center gap-4">

            <span className="h-px w-10 bg-[#ff5c8a]" />

            <p className="text-xs uppercase tracking-[0.55em] text-white/40">
              Archivo General
            </p>

            <Moon className="h-4 w-4 text-[#ff5c8a]" />

          </div>

          <h1 className="mt-8 max-w-5xl text-6xl font-black leading-[0.9] md:text-8xl">
            No coleccionamos
            <br />
            prendas.
          </h1>

          <p className="mt-8 max-w-3xl text-2xl font-light leading-relaxed text-white/60 md:text-4xl">
            Archivamos recuerdos.
          </p>

          <div className="mt-12 h-px w-full bg-white/10" />

        </div>

      </section>


      {/* ARCHIVOS */}
      <section className="px-6 pb-32 md:px-10 md:pb-44">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2">

            {archives.map((archive) => (

              <Link
                key={archive.number}
                id={`archivo-${archive.number}`}
                href={archive.href}
                className="
                  group
                  relative
                  min-h-[520px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-[#080808]
                  transition-all
                  duration-500
                  hover:border-[#ff5c8a]/60
                  hover:shadow-[0_0_50px_rgba(255,92,138,0.10)]
                "
              >

                {/* IMAGEN */}
                {archive.image && (
                  <Image
                    src={archive.image}
                    alt={archive.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />
                )}

                {/* OSCURECIMIENTO */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/55
                    to-black/10
                    transition-all
                    duration-500
                    group-hover:via-black/40
                  "
                />

                {/* LUNA */}
                <Moon
                  className="
                    absolute
                    right-8
                    top-8
                    z-10
                    h-7
                    w-7
                    text-[#ff5c8a]
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:rotate-12
                    group-hover:scale-110
                    group-hover:opacity-100
                  "
                />

                {/* CONTENIDO */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-10">

                  <div className="flex items-center gap-4">

                    <span className="text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
                      Archivo
                    </span>

                    <span className="text-xs tracking-[0.35em] text-white/40">
                      {archive.number}
                    </span>

                  </div>

                  <h2
                    className="
                      mt-4
                      text-4xl
                      font-black
                      leading-none
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                      md:text-5xl
                    "
                  >
                    {archive.title}
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-base
                      leading-7
                      text-white/60
                      transition-colors
                      duration-500
                      group-hover:text-white/90
                    "
                  >
                    {archive.description}
                  </p>

                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-white/60
                      transition-all
                      duration-500
                      group-hover:text-[#ff5c8a]
                    "
                  >
                    Abrir Archivo

                    <span className="transition-transform duration-500 group-hover:translate-x-2">
                      →
                    </span>
                  </div>

                </div>

              </Link>

            ))}

          </div>


          {/* CIERRE */}
          <div className="mt-20 border-t border-white/10 pt-10">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

              <p className="max-w-3xl text-xl font-light leading-relaxed text-white/50 md:text-2xl">
                Cada pieza conserva un instante.
                <br />
                Cada Archivo protege una historia.
              </p>

              <Moon className="h-8 w-8 shrink-0 text-[#ff5c8a]" />

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}
