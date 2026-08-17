"use client";

import { useState } from "react";

interface Product {
  id?: number;
  name: string;
  price: string;
  category?: string;
  image?: string;
}

interface ArchiveProductsProps {
  products: Product[];
}

const colors = [
  { name: "Crema", value: "#F2E6D5" },
  { name: "Blanco", value: "#F5F5F5" },
  { name: "Negro", value: "#111111" },
  { name: "Verde Jade", value: "#5E8C7B" },
  { name: "Gris Jaspe", value: "#A7A7A7" },
  { name: "Azul Marino", value: "#182B49" },
  { name: "Arena", value: "#D8C3A5" },
  { name: "Rosa Pastel", value: "#F3B6C8" },
];

const sizes = ["S", "M", "L", "XL"];

function getProductId(product: Product, index: number) {
  return product.id ?? index + 1;
}

function getNumericPrice(price: string) {
  const numeric = Number(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

export default function ArchiveProducts({
  products,
}: ArchiveProductsProps) {
  const [selectedColors, setSelectedColors] = useState<
    Record<number, string>
  >({});

  const [selectedSizes, setSelectedSizes] = useState<
    Record<number, string>
  >({});

  const [quantities, setQuantities] = useState<
    Record<number, number>
  >({});

  const [added, setAdded] = useState<number | null>(null);

  const getColor = (index: number) => {
    const selectedName = selectedColors[index];

    return (
      colors.find((color) => color.name === selectedName) ??
      colors[0]
    );
  };

  const getSize = (index: number) => {
    return selectedSizes[index] ?? "";
  };

  const getQuantity = (index: number) => {
    return quantities[index] ?? 1;
  };

  const addToCart = (product: Product, index: number) => {
    const size = getSize(index);

    if (!size) {
      alert("Selecciona una talla antes de agregar el producto.");
      return;
    }

    const color = getColor(index);
    const quantity = getQuantity(index);
    const id = getProductId(product, index);

    const storedCart = localStorage.getItem("meji-cart");

    let cart: {
      id: number;
      name: string;
      category: string;
      price: number;
      image: string;
      size: string;
      color: string;
      colorValue: string;
      quantity: number;
    }[] = [];

    if (storedCart) {
      try {
        cart = JSON.parse(storedCart);
      } catch {
        cart = [];
      }
    }

    const existingIndex = cart.findIndex(
      (item) =>
        item.id === id &&
        item.size === size &&
        item.color === color.name
    );

    const price = getNumericPrice(product.price);

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id,
        name: product.name,
        category: product.category ?? "Colección MEJI",
        price,
        image:
          product.image ??
          "/images/collections/domingos.jpg",
        size,
        color: color.name,
        colorValue: color.value,
        quantity,
      });
    }

    localStorage.setItem("meji-cart", JSON.stringify(cart));

    setAdded(id);

    setTimeout(() => {
      setAdded(null);
    }, 1800);
  };

  return (
    <section className="bg-[#050505] py-32 text-white md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* ENCABEZADO */}
        <div>
          <p className="text-sm uppercase tracking-[8px] text-[#ff5c8a]">
            Productos
          </p>

          <h2 className="mt-8 text-5xl font-black leading-[0.95] md:text-7xl">
            Lleva el
            <br />
            recuerdo contigo.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
            Elige tu prenda, selecciona el color y la talla.
            Cada pieza se prepara especialmente para tu pedido.
          </p>
        </div>

        {/* PRODUCTOS */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {products.map((product, index) => {
            const id = getProductId(product, index);
            const selectedColor = getColor(index);
            const selectedSize = getSize(index);
            const quantity = getQuantity(index);

            return (
              <article
                key={id}
                className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 md:p-10"
              >

                {/* NOMBRE Y PRECIO */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                      Pieza
                    </p>

                    <h3 className="mt-3 text-3xl font-black">
                      {product.name}
                    </h3>
                  </div>

                  <p className="whitespace-nowrap text-2xl font-bold">
                    {product.price}
                  </p>
                </div>

                {/* COLOR */}
                <div className="mt-10">

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Color
                    </p>

                    <p className="text-sm text-white/60">
                      {selectedColor.name}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">

                    {colors.map((color) => {
                      const active =
                        selectedColor.name === color.name;

                      return (
                        <button
                          key={color.name}
                          type="button"
                          title={color.name}
                          aria-label={`Seleccionar color ${color.name}`}
                          onClick={() =>
                            setSelectedColors((current) => ({
                              ...current,
                              [index]: color.name,
                            }))
                          }
                          className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition ${
                            active
                              ? "scale-110 border-[#ff5c8a]"
                              : "border-white/20 hover:border-white/60"
                          }`}
                        >
                          <span
                            className="h-8 w-8 rounded-full border border-black/10"
                            style={{
                              backgroundColor: color.value,
                            }}
                          />

                          {active && (
                            <span className="absolute -bottom-2 h-1.5 w-1.5 rounded-full bg-[#ff5c8a]" />
                          )}
                        </button>
                      );
                    })}

                  </div>
                </div>

                {/* TALLA */}
                <div className="mt-10">

                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
                    Talla
                  </p>

                  <div className="flex flex-wrap gap-3">

                    {sizes.map((size) => {
                      const active = selectedSize === size;

                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() =>
                            setSelectedSizes((current) => ({
                              ...current,
                              [index]: size,
                            }))
                          }
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
                        setQuantities((current) => ({
                          ...current,
                          [index]: Math.max(1, quantity - 1),
                        }))
                      }
                      className="text-xl text-white/60 hover:text-white"
                    >
                      −
                    </button>

                    <span>{quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuantities((current) => ({
                          ...current,
                          [index]: quantity + 1,
                        }))
                      }
                      className="text-xl text-white/60 hover:text-white"
                    >
                      +
                    </button>

                  </div>
                </div>

                {/* RESUMEN */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Tu elección
                  </p>

                  <div className="mt-4 flex items-center gap-4">

                    <span
                      className="h-9 w-9 rounded-full border border-white/20"
                      style={{
                        backgroundColor: selectedColor.value,
                      }}
                    />

                    <div>
                      <p className="text-sm font-medium">
                        {selectedColor.name}
                      </p>

                      <p className="text-xs text-white/40">
                        {selectedSize
                          ? `Talla ${selectedSize}`
                          : "Selecciona una talla"}{" "}
                        · {quantity}{" "}
                        {quantity === 1 ? "pieza" : "piezas"}
                      </p>
                    </div>

                  </div>
                </div>

                {/* BOTÓN */}
                <button
                  type="button"
                  onClick={() => addToCart(product, index)}
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-[#ff5c8a] px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02] hover:bg-[#ff719a]"
                >
                  {added === id
                    ? "Agregado al carrito ✓"
                    : "Agregar al carrito"}
                </button>

              </article>
            );
          })}

        </div>

        {/* NOTA */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-sm leading-relaxed text-white/30">
            Vestimos recuerdos.
            <br />
            No tendencias.
          </p>
        </div>

      </div>
    </section>
  );
}
