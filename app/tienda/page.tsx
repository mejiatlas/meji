import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const collections = [
  {
    id: "domingos",
    name: "Domingos en Casa",
    shortName: "Domingos",
    description:
      "Café, pan, periódico y esos domingos que se quedan para siempre.",
    image: "/images/collections/domingos.jpg",
    available: true,
  },
  {
    id: "mundo-rosa",
    name: "Mundo Rosa",
    shortName: "Mundo Rosa",
    description:
      "Una colección para recordar que, a veces, el mundo se ve mejor en rosa.",
    image: "/images/archives/mundo-rosa/hero.png",
    available: true,
  },
  {
    id: "macuahuitl",
    name: "Macuahuitl",
    shortName: "Macuahuitl",
    description:
      "México, nuestras raíces y la historia que llevamos en la piel.",
    image: "/images/archives/macuahuitl/hero.jpg",
    available: true,
  },
  {
    id: "fauna",
    name: "Fauna",
    shortName: "Fauna",
    description:
      "Historias, instintos y compañeros que forman parte de nuestra vida.",
    image: "/images/archives/fauna/hero.jpeg",
    available: true,
  },
  {
    id: "dioses",
    name: "Dioses",
    shortName: "Dioses",
    description:
      "Grandes poderes, pequeñas travesuras. La mitología mexicana en versión mini.",
    image: "/images/archives/dioses/hero.jpg",
    available: true,
  },
  {
    id: "complemento",
    name: "Complemento",
    shortName: "Complemento",
    description:
      "Porque juntos hacemos más. Diseños que se complementan para contar una historia.",
    image: "/images/archives/complemento/hero.png",
    available: true,
  },
  {
    id: "sin-pedigree",
    name: "Sin Pedigree",
    shortName: "Sin Pedigree",
    description:
      "No tienen pedigree. Tienen historia. Una colección hecha para los que aman sin etiquetas.",
    image: "/images/archives/sin-pedigree/hero.jpeg",
    available: true,
  },
];

const categories = [
  "Todo",
  "Playeras",
  "Sudaderas",
  "Gorras",
];

export default function TiendaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#ff5c8a]" />

            <p className="text-xs uppercase tracking-[0.55em] text-white/40">
              Tienda MEJI
            </p>
          </div>

          <h1 className="mt-8 max-w-5xl text-6xl font-black leading-[0.9] md:text-8xl">
            Prendas para
            <br />
            <span className="text-[#ff5c8a]">
              guardar cerca.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/50 md:text-2xl">
            No vendemos tendencias.
            <br />
            Vendemos recuerdos que puedes ponerte.
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/30">
            Todas nuestras piezas se producen bajo pedido.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="border-y border-white/10 px-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 py-5">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                index === 0
                  ? "border-[#ff5c8a] bg-[#ff5c8a] text-black"
                  : "border-white/20 text-white/60 hover:border-white/60 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* COLECCIONES */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                Colecciones
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Historias para vestir.
              </h2>
            </div>

            <p className="hidden text-sm text-white/40 md:block">
              {collections.length} colecciones
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <article
                key={collection.id}
                className="group"
              >
                <Link
                  href={`/colecciones/${collection.id}`}
                  className="block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0b0b]">

                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-[#ff5c8a]">
                        Colección
                      </p>

                      <h3 className="mt-2 text-3xl font-black">
                        {collection.name}
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
                        {collection.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.25em] text-white/60">
                          Ver colección
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl transition group-hover:border-[#ff5c8a] group-hover:text-[#ff5c8a]">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BAJO PEDIDO */}
      <section className="border-y border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
              Hecho para ti
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              No almacenamos
              <br />
              recuerdos.
              <br />
              <span className="text-white/30">
                Los hacemos.
              </span>
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-white/50 md:text-xl">
              Cada pieza MEJI se produce bajo pedido.
              Elegimos trabajar así para producir solamente lo
              que alguien realmente quiere llevar consigo.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/50 md:text-xl">
              Tú eliges la prenda, el color y la talla.
              Nosotros hacemos el resto.
            </p>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
            MEJI
          </p>

          <h2 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Una prenda puede ser solamente una prenda.
            <br />
            <span className="text-white/30">
              O puede convertirse en un recuerdo.
            </span>
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
