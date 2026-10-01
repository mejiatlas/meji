"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type CartItem = {
  id: number | string;
  name: string;
  price: number;
  image?: string;
  color?: string;
  size?: string;
  quantity: number;
};

type CustomerData = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  calle: string;
  colonia: string;
  cp: string;
  ciudad: string;
  estado: string;
  referencias: string;
};

type CheckoutSummary = {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
};

export default function ConfirmationPage() {
  const [customer, setCustomer] =
    useState<CustomerData | null>(null);

  const [summary, setSummary] =
    useState<CheckoutSummary | null>(null);

  const [orderNumber, setOrderNumber] = useState("");

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCustomer = localStorage.getItem(
        "meji-checkout-customer"
      );

      const savedSummary = localStorage.getItem(
        "meji-checkout-summary"
      );

      let customerData: CustomerData | null = null;
      let summaryData: CheckoutSummary | null = null;

      if (savedCustomer) {
        customerData = JSON.parse(savedCustomer);
        setCustomer(customerData);
      }

      if (savedSummary) {
        summaryData = JSON.parse(savedSummary);
        setSummary(summaryData);
      }

      let savedOrderNumber = localStorage.getItem(
        "meji-order-number"
      );

      if (!savedOrderNumber) {
        const randomNumber = Math.floor(
          100000 + Math.random() * 900000
        );

        savedOrderNumber = `MEJI-${randomNumber}`;

        localStorage.setItem(
          "meji-order-number",
          savedOrderNumber
        );
      }

      setOrderNumber(savedOrderNumber);
    } catch (error) {
      console.error(
        "No se pudo cargar la confirmación:",
        error
      );
    }

    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">
        <Navbar />

        <section className="flex min-h-screen items-center justify-center px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Cargando pedido...
          </p>
        </section>
      </main>
    );
  }

  if (!customer || !summary) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">
        <Navbar />

        <section className="px-6 pb-32 pt-40 md:px-10 md:pt-48">
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs uppercase tracking-[0.5em] text-[#ff5c8a]">
              MEJI
            </p>

            <h1 className="mt-8 text-5xl font-black leading-none md:text-7xl">
              No encontramos tu pedido.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-white/40">
              No encontramos información de una compra
              reciente.
            </p>

            <Link
              href="/tienda"
              className="mt-10 inline-flex rounded-full bg-[#ff5c8a] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02] hover:bg-[#ff719a]"
            >
              Ir a la tienda
            </Link>

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
        <div className="mx-auto max-w-5xl">

          {/* CABECERA */}

          <div className="text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5c8a] text-4xl font-black text-black">
              ✓
            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.5em] text-[#ff5c8a]">
              Pedido recibido
            </p>

            <h1 className="mt-6 text-5xl font-black leading-none md:text-8xl">
              Gracias.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/40">
              Gracias por guardar un recuerdo con MEJI.
              Tu pedido ha sido registrado.
            </p>

          </div>

          {/* NUMERO DE PEDIDO */}

          <div className="mt-16 border border-white/10 bg-white/[0.02] p-8 text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-white/30">
              Número de pedido
            </p>

            <p className="mt-4 text-3xl font-black tracking-wider text-[#ff5c8a] md:text-4xl">
              {orderNumber}
            </p>

            <p className="mt-4 text-sm text-white/30">
              Guarda este número para consultar tu pedido.
            </p>

          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

            {/* INFORMACIÓN */}

            <div>

              <div className="border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                  01 - Datos del pedido
                </p>
              </div>

              <div className="mt-8 border border-white/10 p-6 md:p-8">

                <p className="text-lg font-bold">
                  {customer.nombre}{" "}
                  {customer.apellido}
                </p>

                <p className="mt-2 text-sm text-white/40">
                  {customer.email}
                </p>

                <p className="mt-1 text-sm text-white/40">
                  {customer.telefono}
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">

                  <p className="text-sm font-semibold">
                    Dirección de entrega
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {customer.calle}
                    <br />
                    {customer.colonia}
                    <br />
                    CP {customer.cp},{" "}
                    {customer.ciudad},{" "}
                    {customer.estado}
                  </p>

                  {customer.referencias && (
                    <p className="mt-5 text-sm leading-6 text-white/40">
                      <span className="text-white/70">
                        Referencias:
                      </span>{" "}
                      {customer.referencias}
                    </p>
                  )}

                </div>

              </div>

              {/* ESTADO */}

              <div className="mt-12 border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                  02 - Estado
                </p>
              </div>

              <div className="mt-8 border border-white/10 p-6 md:p-8">

                <div className="flex items-center gap-4">

                  <div className="h-3 w-3 rounded-full bg-[#ff5c8a]" />

                  <div>
                    <p className="font-bold">
                      Pedido registrado
                    </p>

                    <p className="mt-1 text-sm text-white/40">
                      Estamos esperando la confirmación
                      del pago.
                    </p>
                  </div>

                </div>

                <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-7 text-white/40">
                  Una vez confirmado el pago,
                  comenzaremos con la preparación de tu
                  pedido.
                </p>

              </div>

            </div>

            {/* RESUMEN */}

            <aside className="lg:sticky lg:top-32 lg:self-start">

              <div className="border border-white/10 p-6 md:p-8">

                <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                  Resumen
                </p>

                <h2 className="mt-6 text-3xl font-black">
                  Tu compra.
                </h2>

                <div className="mt-8 space-y-6">

                  {summary.items.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex gap-4 border-b border-white/10 pb-6"
                    >

                      <div className="h-20 w-20 shrink-0 overflow-hidden bg-white/5">

                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs text-white/20">
                            MEJI
                          </div>
                        )}

                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="font-semibold">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-white/40">
                          Cantidad: {item.quantity}
                        </p>

                        {item.size && (
                          <p className="text-xs text-white/40">
                            Talla: {item.size}
                          </p>
                        )}

                        {item.color && (
                          <p className="text-xs text-white/40">
                            Color: {item.color}
                          </p>
                        )}

                        <p className="mt-2 text-sm font-bold">
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toLocaleString("es-MX")}{" "}
                          MXN
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

                <div className="mt-8 space-y-4 border-t border-white/10 pt-6">

                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">
                      Subtotal
                    </span>

                    <span>
                      $
                      {summary.subtotal.toLocaleString(
                        "es-MX"
                      )}{" "}
                      MXN
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">
                      Envío
                    </span>

                    <span>
                      {summary.shipping === 0
                        ? "Gratis"
                        : `$${summary.shipping.toLocaleString(
                            "es-MX"
                          )} MXN`}
                    </span>
                  </div>

                  <div className="flex justify-between border-t border-white/10 pt-5">

                    <span className="text-lg font-bold">
                      Total
                    </span>

                    <span className="text-2xl font-black text-[#ff5c8a]">
                      $
                      {summary.total.toLocaleString(
                        "es-MX"
                      )}{" "}
                      MXN
                    </span>

                  </div>

                </div>

              </div>

            </aside>

          </div>

          {/* BOTONES */}

          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/tienda"
              className="w-full rounded-full bg-[#ff5c8a] px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02] hover:bg-[#ff719a] sm:w-auto"
            >
              Volver a la tienda
            </Link>

            <Link
              href="/"
              className="w-full rounded-full border border-white/15 px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white/70 transition hover:border-white/40 hover:text-white sm:w-auto"
            >
              Ir al inicio
            </Link>

          </div>

          <p className="mt-12 text-center text-xs leading-6 text-white/25">
            Todas nuestras piezas se producen bajo pedido.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}