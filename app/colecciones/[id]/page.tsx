import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ArchiveProducts from "../../components/archive/ArchiveProducts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const collections = {
  domingos: {
    name: "Domingos en Casa",
    description:
      "Café, pan, periódico y esos domingos que se quedan para siempre.",
    image: "/images/collections/domingos.jpg",
  },

  "mundo-rosa": {
    name: "Mundo Rosa",
    description:
      "Una colección para recordar que, a veces, el mundo se ve mejor en rosa.",
    image: "/images/archives/mundo-rosa/hero.png",
  },

  macuahuitl: {
    name: "Macuahuitl",
    description:
      "México, nuestras raíces y la historia que llevamos en la piel.",
    image: "/images/archives/macuahuitl/hero.jpg",
  },

  fauna: {
    name: "Fauna",
    description:
      "Historias, instintos y compañeros que forman parte de nuestra vida.",
    image: "/images/archives/fauna/hero.jpeg",
  },

  dioses: {
    name: "Dioses",
    description:
      "Grandes poderes, pequeñas travesuras. La mitología mexicana en versión mini.",
    image: "/images/archives/dioses/hero.jpg",
  },

  complemento: {
    name: "Complemento",
    description:
      "Dos personas. Dos prendas. Una historia que solamente tiene sentido cuando están juntas.",
    image: "/images/archives/parejas/héroe.png",
  },

  "sin-pedigree": {
    name: "Sin Pedigree",
    description:
      "No tienen pedigree. Tienen historia. Una colección hecha para los que aman sin etiquetas.",
    image: "/images/archives/sin-pedigree/hero.jpeg",
  },
};

type CollectionId = keyof typeof collections;

const products = [
  {
    id: 1,
    name: "Playera",
    price: "$250 MXN",
  },
  {
    id: 2,
    name: "Sudadera",
    price: "$350 MXN",
  },
  {
    id: 3,
    name: "Gorra",
    price: "$220 MXN",
  },
  {
    id: 4,
    name: "Termo",
    price: "$280 MXN",
  },
];

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!(id in collections)) {
    notFound();
  }

  const collection = collections[id as CollectionId];

  const collectionProducts = products.map((product) => ({
    ...product,
    category: collection.name,
    image: collection.image,
  }));

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/tienda"
            className="text-xs uppercase tracking-[0.3em] text-white/40 transition hover:text-[#ff5c8a]"
          >
            ← Volver a la tienda
          </Link>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">

            {/* TEXTO */}
            <div>

              <p className="text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
                Colección MEJI
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.95] md:text-7xl">
                {collection.name}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
                {collection.description}
              </p>

              <p className="mt-7 text-xs uppercase tracking-[0.3em] text-white/30">
                Todas nuestras piezas se producen bajo pedido.
              </p>

              <a
                href="#productos"
                className="mt-10 inline-flex rounded-full bg-[#ff5c8a] px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:scale-105"
              >
                Ver prendas
              </a>

            </div>

            {/* IMAGEN */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b]">

              <Image
                src={collection.image}
                alt={collection.name}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            </div>

          </div>
        </div>
      </section>

      {/* MENSAJE */}
      <section className="border-y border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
            Bajo pedido
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Tú eliges la prenda.
            <br />
            <span className="text-white/30">
              Nosotros hacemos el recuerdo.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/50">
            Elige cómo quieres llevar esta colección.
            Selecciona tu prenda, color, talla y cantidad.
            Nosotros hacemos el resto.
          </p>

        </div>
      </section>

      {/* PRODUCTOS */}
      <div id="productos">
        <ArchiveProducts
          products={collectionProducts}
        />
      </div>

      {/* CIERRE */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10 md:py-32">
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
