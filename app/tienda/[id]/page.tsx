"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const products = [
  {
    id: 1,
    name: "Playera Meji — Domingos",
    category: "Domingos en Casa",
    price: 250,
    image: "/images/collections/domingos.jpg",
    description:
      "Una playera inspirada en esos domingos que huelen a café, pan recién hecho y tardes sin prisa.",
  },
  {
    id: 2,
    name: "Playera Meji — Macuahuitl",
    category: "Macuahuitl",
    price: 250,
    image: "/images/archives/macuahuitl/hero.jpg",
    description:
      "Una pieza inspirada en México, sus símbolos y la memoria que permanece.",
  },
  {
    id: 3,
    name: "Playera Meji — Mundo Rosa",
    category: "Mundo Rosa",
    price: 250,
    image: "/images/archives/mundo-rosa/hero.png",
    description:
      "Una colección para recordar que, a veces, el mundo se ve mejor en rosa.",
  },
  {
    id: 4,
    name: "Playera Meji — Fauna",
    category: "Fauna",
    price: 250,
    image: "/images/archives/fauna/hero.jpeg",
    description:
      "Los animales también forman parte de nuestras historias, recuerdos y momentos.",
  },
];

type CartItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  const product = products.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">
        <Navbar />

        <section className="px-6 pb-32 pt-40 md:px-10 md:pt-48">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-5xl font-black">Producto no encontrado.</h1>

            <Link
              href="/tienda"
              className="mt-10 inline-flex border border-[#ff5c8a] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5c8a]"
            >
              Volver a tienda
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  const addToCart = () => {
    if (!selectedSize) {
      alert("Selecciona una talla antes de agregar el producto.");
      return;
    }

    const storedCart = localStorage.getItem("meji-cart");

    const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

    const existingIndex = cart.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
        size: selectedSize,
        quantity,
      });
    }

    localStorage.setItem("meji-cart", JSON.stringify(cart));

    router.push("/carrito");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* PRODUCTO */}
      <section className="px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          {/* IMAGEN */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* INFORMACIÓN */}
          <div className="max-w-xl">
            <Link
              href="/tienda"
              className="text-xs uppercase tracking-[0.35em] text-white/40 transition hover:text-[#ff5c8a]"
            >
              ← Volver a tienda
            </Link>

            <p className="mt-10 text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
              {product.category}
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] md:text-7xl">
              {product.name}
            </h1>

            <p className="mt-8 text-3xl font-semibold">
              ${product.price} MXN
            </p>

            <p className="mt-8 text-lg leading-relaxed text-white/50">
              {product.description}
            </p>

            {/* TALLAS */}
            <div className="mt-10">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
                Talla
              </p>

              <div className="flex flex-wrap gap-3">
                {["S", "M", "L", "XL"].map((size) => {
                  const active = selectedSize === size;

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`flex h-12 w-14 items-center justify-center rounded-full border text-sm font-medium transition ${
                        active
                          ? "border-[#ff5c8a] bg-[#ff5c8a] text-black"
                          : "border-white/20 text-white hover:border-[#ff5c8a] hover:text-[#ff5c8a]"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CANTIDAD */}
            <div className="mt-8">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
                Cantidad
              </p>

              <div className="flex h-12 w-36 items-center justify-between rounded-full border border-white/20 px-5">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  className="text-xl text-white/60 hover:text-white"
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="text-xl text-white/60 hover:text-white"
                >
                  +
                </button>
              </div>
            </div>

            {/* BOTÓN */}
            <div className="mt-10">
              <button
                type="button"
                onClick={addToCart}
                className="flex w-full items-center justify-center rounded-full bg-[#ff5c8a] px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02] hover:bg-[#ff719a]"
              >
                Agregar al carrito
              </button>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-sm leading-relaxed text-white/40">
                Vestimos recuerdos.
                <br />
                No tendencias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
            MEJI
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
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