"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type CartItem = {
  id: number | string;
  name: string;
  category?: string;
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

export default function PagoPage() {
  const [customer, setCustomer] = useState<CustomerData | null>(null);
  const [summary, setSummary] = useState<CheckoutSummary | null>(null);
  const [loaded, setLoaded] = useState(false);

  const [isCreatingPayment, setIsCreatingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  useEffect(() => {
    try {
      const savedCustomer = localStorage.getItem(
        "meji-checkout-customer"
      );

      const savedSummary = localStorage.getItem(
        "meji-checkout-summary"
      );

      if (savedCustomer) {
        setCustomer(JSON.parse(savedCustomer));
      }

      if (savedSummary) {
        setSummary(JSON.parse(savedSummary));
      }
    } catch (error) {
      console.error(
        "No se pudo cargar la información del pedido:",
        error
      );
    }

    setLoaded(true);
  }, []);

  async function handleMercadoPago() {
    if (!summary) {
      setPaymentError("No encontramos la información de tu pedido.");
      return;
    }

    setIsCreatingPayment(true);
    setPaymentError("");

    try {
      const orderId =
        localStorage.getItem("meji-order-number") ||
        `MEJI-${Date.now()}`;

      const mercadoPagoItems = summary.items.map((item) => ({
        id: String(item.id),
        title: item.name,
        quantity: Number(item.quantity),
        unit_price: Number(item.price),
      }));

      if (summary.shipping > 0) {
        mercadoPagoItems.push({
          id: "shipping",
          title: "Envío MEJI",
          quantity: 1,
          unit_price: Number(summary.shipping),
        });
      }

      const response = await fetch(
        "/api/mercadopago/create-preference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: mercadoPagoItems,
            orderId,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "No se pudo crear el pago con Mercado Pago."
        );
      }

      const paymentUrl =
        data?.sandbox_init_point || data?.init_point;

      if (!paymentUrl) {
        throw new Error(
          "Mercado Pago no devolvió una dirección de pago."
        );
      }

      window.location.href = paymentUrl;
    } catch (error) {
      console.error(
        "Error iniciando Mercado Pago:",
        error
      );

      setPaymentError(
        error instanceof Error
          ? error.message
          : "No se pudo iniciar el pago. Intenta nuevamente."
      );

      setIsCreatingPayment(false);
    }
  }

  if (!loaded) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">
        <Navbar />

        <section className="flex min-h-screen items-center justify-center px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
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
              Pago
            </p>

            <h1 className="mt-8 text-5xl font-black md:text-7xl">
              No encontramos tu pedido.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-white/40">
              Regresa al checkout y completa tus datos para
              continuar con el pago.
            </p>

            <Link
              href="/checkout"
              className="mt-10 inline-flex rounded-full bg-[#ff5c8a] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02] hover:bg-[#ff719a]"
            >
              Volver al checkout
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
        <div className="mx-auto max-w-7xl">

          {/* ENCABEZADO */}

          <div className="mb-16">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#ff5c8a]" />

              <p className="text-xs uppercase tracking-[0.5em] text-white/40">
                Pago
              </p>
            </div>

            <h1 className="mt-8 text-6xl font-black leading-none md:text-8xl">
              Tu pedido.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/40">
              Revisa tus datos y el total antes de realizar el
              pago.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr]">

            {/* COLUMNA PRINCIPAL */}

            <div>

              {/* DATOS DE ENVÍO */}

              <div className="border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                  01 — Datos de envío
                </p>
              </div>

              <div className="mt-8 border border-white/10 p-6 md:p-8">

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-lg font-bold">
                      {customer.nombre}{" "}
                      {customer.apellido}
                    </p>

                    <p className="mt-2 text-sm text-white/50">
                      {customer.email}
                    </p>

                    <p className="mt-1 text-sm text-white/50">
                      {customer.telefono}
                    </p>
                  </div>

                  <Link
                    href="/checkout"
                    className="text-xs uppercase tracking-[0.2em] text-[#ff5c8a] hover:text-white"
                  >
                    Editar
                  </Link>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold">
                    Dirección de entrega
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/50">
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

              {/* MÉTODO DE PAGO */}

              <div className="mt-16 border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                  02 — Método de pago
                </p>
              </div>

              <div className="mt-8 border border-white/10 p-6 md:p-8">

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff5c8a] text-xl font-black text-black">
                    $
                  </div>

                  <div>
                    <p className="font-bold">
                      Mercado Pago
                    </p>

                    <p className="mt-1 text-sm text-white/40">
                      Pago seguro y protegido.
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm leading-7 text-white/50">
                    Serás dirigido a Mercado Pago para
                    completar tu compra de forma segura.
                  </p>
                </div>

                {paymentError && (
                  <div className="mt-6 border border-red-500/30 bg-red-500/5 px-5 py-4">
                    <p className="text-sm leading-6 text-red-300">
                      {paymentError}
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleMercadoPago}
                  disabled={isCreatingPayment}
                  className={`mt-8 flex w-full items-center justify-center rounded-full bg-[#ff5c8a] px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition ${
                    isCreatingPayment
                      ? "cursor-wait opacity-60"
                      : "hover:scale-[1.01] hover:bg-[#ff719a]"
                  }`}
                >
                  {isCreatingPayment
                    ? "Conectando con Mercado Pago..."
                    : "Pagar con Mercado Pago"}
                </button>

                <p className="mt-4 text-center text-xs text-white/25">
                  Serás enviado a Mercado Pago para
                  completar tu pago.
                </p>
              </div>

              <Link
                href="/checkout"
                className="mt-8 inline-flex text-sm text-white/40 transition hover:text-white"
              >
                ← Volver a mis datos
              </Link>
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
                            item.price * item.quantity
                          ).toLocaleString("es-MX")}
                          {" MXN"}
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

                <p className="mt-8 text-xs leading-6 text-white/25">
                  Todas nuestras piezas se producen bajo
                  pedido.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}