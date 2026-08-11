import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Playera Meji — Domingos",
    category: "Domingos en Casa",
    price: "$250",
    image: "/images/collections/domingos.jpg",
  },
  {
    id: 2,
    name: "Playera Meji — Macuahuitl",
    category: "Macuahuitl",
    price: "$250",
    image: "/images/archives/macuahuitl/hero.jpg",
  },
  {
    id: 3,
    name: "Playera Meji — Mundo Rosa",
    category: "Mundo Rosa",
    price: "$250",
    image: "/images/archives/mundo-rosa/hero.png",
  },
  {
    id: 4,
    name: "Playera Meji — Fauna",
    category: "Fauna",
    price: "$250",
    image: "/images/archives/fauna/hero.jpeg",
  },
];

export default function TiendaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* HERO TIENDA */}
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
            <span className="text-[#ff5c8a]">guardar cerca.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/50 md:text-2xl">
            No vendemos tendencias.
            <br />
            Vendemos recuerdos que puedes ponerte.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="border-y border-white/10 px-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 py-5">
          <button className="rounded-full border border-[#ff5c8a] bg-[#ff5c8a] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black">
            Todo
          </button>

          <button className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:border-white/60 hover:text-white">
            Playeras
          </button>

          <button className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:border-white/60 hover:text-white">
            Sudaderas
          </button>

          <button className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:border-white/60 hover:text-white">
            Gorras
          </button>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                Colección actual
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                La tienda
              </h2>
            </div>

            <p className="hidden text-sm text-white/40 md:block">
              {products.length} piezas
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.id} className="group">
                <Link href={`/tienda/${product.id}`}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0b0b]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                    <span className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.25em] text-white/60">
                      Ver producto →
                    </span>
                  </div>
                </Link>

                <div className="pt-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#ff5c8a]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-lg font-medium">
                      {product.price} MXN
                    </p>

                    <Link
                      href={`/tienda/${product.id}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-[#ff5c8a] hover:text-[#ff5c8a]"
                    >
                      +
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
              MEJI
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Una prenda puede ser solamente una prenda.
              <br />
              <span className="text-white/40">
                O puede convertirse en un recuerdo.
              </span>
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}