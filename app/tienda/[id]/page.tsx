"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "next/navigation";

export default function ProductoPage() {
  const params = useParams();
  const id = params.id as string;

  const nombre = id
    .replaceAll("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const images: Record<string, string> = {
    "mundo-rosa": "/images/archives/mundo-rosa/hero.png",
    "sin-pedigree": "/images/archives/sin-pedigree/hero.jpeg",
    "dioses": "/images/archives/dioses/hero.jpg",
    "fauna": "/images/archives/fauna/hero.jpeg",
    "complemento": "/images/archives/complemento/hero.png",
    "domingos": "/images/collections/domingos.jpg",
    "macuahuilt": "/images/archives/macuahuilt/hero.jpg",
  };

  const image = images[id] || "/images/logo.png";

  const agregarAlCarrito = () => {
    const carrito = JSON.parse(
      localStorage.getItem("meji-cart") || "[]"
    );

    carrito.push({
      id,
      name: nombre,
      price: 250,
      image,
      quantity: 1,
    });

    localStorage.setItem(
      "meji-cart",
      JSON.stringify(carrito)
    );

    window.location.href = "/carrito";
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="px-6 pb-20 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/tienda"
            className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-white/50 transition hover:text-[#ff5c8a]"
          >
            ← Volver a la tienda
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">

            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src={image}
                alt={nombre}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">

              <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                Colección MEJI
              </p>

              <h1 className="mt-4 text-5xl font-black md:text-7xl">
                {nombre}
              </h1>

              <p className="mt-6 text-xl leading-relaxed text-white/60">
                Una pieza diseñada para conservar recuerdos.
                Producción bajo pedido.
              </p>

              <div className="mt-10">
                <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                  Precio desde
                </p>

                <p className="mt-2 text-5xl font-black text-[#ff5c8a]">
                  $250 MXN
                </p>

                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/40">
                  Disponible en negro, blanco y rosa
                </p>
              </div>

              <div className="mt-10">
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/40">
                  Talla
                </p>

                <div className="flex flex-wrap gap-3">
                  {["CH", "M", "G", "XG"].map((size) => (
                    <button
                      key={size}
                      className="h-12 w-12 rounded-full border border-white/20 transition hover:border-[#ff5c8a] hover:text-[#ff5c8a]"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/40">
                  Color
                </p>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full border-2 border-white bg-black" />
                  <div className="h-10 w-10 rounded-full border border-white/20 bg-white" />
                  <div className="h-10 w-10 rounded-full border border-white/20 bg-[#ff5c8a]" />
                </div>
              </div>

              <button
                onClick={agregarAlCarrito}
                className="mt-10 rounded-full bg-[#ff5c8a] px-10 py-5 text-lg font-bold text-black transition hover:scale-105"
              >
                Agregar al carrito
              </button>

              <p className="mt-6 text-sm text-white/40">
                Producción bajo pedido • Envíos a todo México
              </p>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}