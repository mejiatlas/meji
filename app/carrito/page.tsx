"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type CartItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
};

const FREE_SHIPPING_MINIMUM = 750;
const SHIPPING_COST = 150;

export default function CarritoPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("meji-cart");

    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);

        // Compatibilidad con productos agregados antes de implementar colores.
        const normalizedCart: CartItem[] = parsedCart.map(
          (item: CartItem) => ({
            ...item,
            color: item.color || "No especificado",
          })
        );

        setCart(normalizedCart);
      } catch {
        setCart([]);
      }
    }

    setLoaded(true);
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("meji-cart", JSON.stringify(newCart));
  };

  const increaseQuantity = (index: number) => {
    const newCart = [...cart];

    newCart[index].quantity += 1;

    saveCart(newCart);
  };

  const decreaseQuantity = (index: number) => {
    const newCart = [...cart];

    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }

    saveCart(newCart);
  };

  const removeItem = (index: number) => {
    const newCart = [...cart];

    newCart.splice(index, 1);

    saveCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("meji-cart");
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const qualifiesForFreeShipping =
    subtotal >= FREE_SHIPPING_MINIMUM;

  const shipping = qualifiesForFreeShipping
    ? 0
    : SHIPPING_COST;

  const total = subtotal + shipping;

  const amountUntilFreeShipping = Math.max(
    FREE_SHIPPING_MINIMUM - subtotal,
    0
  );

  if (!loaded) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">
        <Navbar />

        <section className="px-6 pb-32 pt-40 md:px-10 md:pt-48">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-white/40">
              Cargando carrito...
            </p>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="px-6 pb-32 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-6xl">

          {/* ENCABEZADO */}
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#ff5c8a]" />

            <p className="text-xs uppercase tracking-[0.5em] text-white/40">
              Tu selección
            </p>
          </div>

          <h1 className="mt-8 text-6xl font-black md:text-8xl">
            Carrito.
          </h1>

          {cart.length === 0 ? (
            /* CARRITO VACÍO */
            <div className="mt-16 border-y border-white/10 py-20 text-center">
              <p className="text-2xl text-white/50">
                Tu carrito está vacío.
              </p>

              <Link
                href="/tienda"
                className="mt-8 inline-flex border border-[#ff5c8a] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff5c8a] transition hover:bg-[#ff5c8a] hover:text-black"
              >
                Explorar la tienda
              </Link>
            </div>
          ) : (
            <div className="mt-16">

              {/* AVISO ENVÍO GRATIS */}
              <div className="mb-10 rounded-2xl border border-[#ff5c8a]/30 bg-[#ff5c8a]/5 px-6 py-5">
                {qualifiesForFreeShipping ? (
                  <div>
                    <p className="text-lg font-bold text-[#ff5c8a]">
                      🎉 ¡Tienes envío gratis!
                    </p>

                    <p className="mt-1 text-sm text-white/50">
                      Tu compra supera los $750 MXN.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-lg font-bold">
                      🚚 Envío gratis en compras de $750 MXN o más.
                    </p>

                    <p className="mt-1 text-sm text-white/50">
                      Te faltan{" "}
                      <span className="font-semibold text-[#ff5c8a]">
                        ${amountUntilFreeShipping} MXN
                      </span>{" "}
                      para obtener envío gratis.
                    </p>
                  </div>
                )}
              </div>

              {/* PRODUCTOS */}
              <div className="divide-y divide-white/10 border-y border-white/10">
                {cart.map((item, index) => (
                  <div
                    key={`${item.id}-${item.color}-${item.size}`}
                    className="flex flex-col gap-6 py-8 md:flex-row md:items-center"
                  >

                    {/* IMAGEN */}
                    <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] md:h-44 md:w-36">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* INFORMACIÓN */}
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.3em] text-[#ff5c8a]">
                        {item.category}
                      </p>

                      <h2 className="mt-2 text-2xl font-bold">
                        {item.name}
                      </h2>

                      {/* COLOR Y TALLA */}
                      <div className="mt-2 space-y-1 text-sm text-white/40">
                        <p>
                          Color:{" "}
                          <span className="text-white">
                            {item.color || "No especificado"}
                          </span>
                        </p>

                        <p>
                          Talla:{" "}
                          <span className="text-white">
                            {item.size}
                          </span>
                        </p>
                      </div>

                      <p className="mt-3 text-lg font-semibold">
                        ${item.price} MXN
                      </p>
                    </div>

                    {/* CANTIDAD */}
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/40">
                        Cantidad
                      </p>

                      <div className="flex h-11 w-32 items-center justify-between rounded-full border border-white/20 px-4">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(index)
                          }
                          className="text-xl text-white/60 hover:text-white"
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(index)
                          }
                          className="text-xl text-white/60 hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* SUBTOTAL */}
                    <div className="md:w-32 md:text-right">
                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                        Subtotal
                      </p>

                      <p className="mt-2 text-xl font-bold">
                        ${item.price * item.quantity} MXN
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          removeItem(index)
                        }
                        className="mt-4 text-xs uppercase tracking-[0.2em] text-white/30 transition hover:text-[#ff5c8a]"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* RESUMEN */}
              <div className="mt-10 flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-start md:justify-between">

                {/* ACCIONES */}
                <div>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs uppercase tracking-[0.25em] text-white/40 transition hover:text-[#ff5c8a]"
                  >
                    Vaciar carrito
                  </button>

                  <div className="mt-8">
                    <Link
                      href="/tienda"
                      className="text-xs uppercase tracking-[0.25em] text-white/50 transition hover:text-[#ff5c8a]"
                    >
                      ← Seguir comprando
                    </Link>
                  </div>
                </div>

                {/* RESUMEN DE COMPRA */}
                <div className="w-full md:max-w-md">

                  <div className="space-y-4 border-b border-white/10 pb-6">

                    {/* SUBTOTAL */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/50">
                        Subtotal
                      </span>

                      <span className="font-medium">
                        ${subtotal} MXN
                      </span>
                    </div>

                    {/* ENVÍO */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/50">
                        Envío
                      </span>

                      {qualifiesForFreeShipping ? (
                        <span className="font-semibold text-[#ff5c8a]">
                          GRATIS
                        </span>
                      ) : (
                        <span className="font-medium">
                          ${shipping} MXN
                        </span>
                      )}
                    </div>
                  </div>

                  {/* TOTAL */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.25em] text-white/40">
                      Total
                    </span>

                    <span className="text-3xl font-black">
                      ${total} MXN
                    </span>
                  </div>

                  {/* CHECKOUT */}
                  <Link
                    href="/checkout"
                    className="mt-6 flex w-full items-center justify-center rounded-full bg-[#ff5c8a] px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02] hover:bg-[#ff719a]"
                  >
                    Continuar compra
                  </Link>

                  <p className="mt-4 text-center text-xs leading-relaxed text-white/30">
                    Envío nacional: $150 MXN.
                    <br />
                    Gratis en compras de $750 MXN o más.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
