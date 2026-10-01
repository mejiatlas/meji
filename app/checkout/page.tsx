"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createPendingOrder } from "../data/order";

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

const FREE_SHIPPING_MINIMUM = 750;
const SHIPPING_COST = 150;

export default function CheckoutPage() {
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [customer, setCustomer] = useState<CustomerData>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    calle: "",
    colonia: "",
    cp: "",
    ciudad: "",
    estado: "",
    referencias: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const possibleKeys = [
        "meji-cart",
        "mejiCart",
        "cart",
        "cartItems",
      ];

      let savedCart: unknown = null;

      for (const key of possibleKeys) {
        const data = localStorage.getItem(key);

        if (!data) {
          continue;
        }

        try {
          const parsed = JSON.parse(data);

          if (Array.isArray(parsed)) {
            savedCart = parsed;
            break;
          }

          if (
            parsed &&
            typeof parsed === "object" &&
            "items" in parsed &&
            Array.isArray(parsed.items)
          ) {
            savedCart = parsed.items;
            break;
          }

          if (
            parsed &&
            typeof parsed === "object" &&
            "cart" in parsed &&
            Array.isArray(parsed.cart)
          ) {
            savedCart = parsed.cart;
            break;
          }
        } catch {
          continue;
        }
      }

      if (Array.isArray(savedCart)) {
        const normalized: CartItem[] = savedCart
          .map((item: any) => ({
            id: item.id,
            name: item.name || "Producto MEJI",
            category: item.category || "",
            price: Number(item.price) || 0,
            image: item.image || "",
            color:
              item.color ||
              item.colorName ||
              item.colour ||
              "",
            size:
              item.size ||
              item.talla ||
              "Única",
            quantity:
              Number(
                item.quantity ??
                  item.qty ??
                  item.cantidad
              ) || 1,
          }))
          .filter((item) => item.price > 0);

        setCart(normalized);
      }
    } catch (error) {
      console.error(
        "No se pudo cargar el carrito:",
        error
      );
    }

    setLoaded(true);
  }, []);

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [cart]);

  const shipping =
    subtotal >= FREE_SHIPPING_MINIMUM
      ? 0
      : SHIPPING_COST;

  const total = subtotal + shipping;

  const totalItems = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  }, [cart]);

  const updateCustomer = (
    field: keyof CustomerData,
    value: string
  ) => {
    setCustomer((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const validateCustomer = () => {
    if (!customer.nombre.trim()) {
      return "Escribe tu nombre.";
    }

    if (!customer.apellido.trim()) {
      return "Escribe tu apellido.";
    }

    if (!customer.email.trim()) {
      return "Escribe tu correo electrónico.";
    }

    if (!customer.email.includes("@")) {
      return "Escribe un correo electrónico válido.";
    }

    if (!customer.telefono.trim()) {
      return "Escribe tu teléfono.";
    }

    if (
      customer.telefono.replace(/\D/g, "").length !== 10
    ) {
      return "El teléfono debe tener 10 dígitos.";
    }

    if (!customer.calle.trim()) {
      return "Escribe tu calle y número.";
    }

    if (!customer.colonia.trim()) {
      return "Escribe tu colonia.";
    }

    if (!customer.cp.trim()) {
      return "Escribe tu código postal.";
    }

    if (
      customer.cp.replace(/\D/g, "").length !== 5
    ) {
      return "El código postal debe tener 5 dígitos.";
    }

    if (!customer.ciudad.trim()) {
      return "Escribe tu ciudad.";
    }

    if (!customer.estado.trim()) {
      return "Escribe tu estado.";
    }

    return "";
  };

  const handleContinue = () => {
    if (cart.length === 0) {
      setError("Tu carrito está vacío.");
      return;
    }

    const validationError = validateCustomer();

    if (validationError) {
      setError(validationError);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    setError("");

    localStorage.setItem(
      "meji-checkout-customer",
      JSON.stringify(customer)
    );

    localStorage.setItem(
      "meji-checkout-summary",
      JSON.stringify({
        items: cart,
        subtotal,
        shipping,
        total,
      })
    );

    const order = createPendingOrder({
      customer,
      items: cart,
      subtotal,
      shipping,
      total,
    });

    localStorage.setItem(
      "meji-order-number",
      order.orderNumber
    );

    router.push("/pago");
  };

  if (!loaded) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">
        <Navbar />

        <section className="flex min-h-screen items-center justify-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Cargando...
          </p>
        </section>
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
                Finalizar compra
              </p>
            </div>

            <h1 className="mt-8 text-6xl font-black leading-none md:text-8xl">
              Tus datos.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/40">
              Queremos saber dónde enviarte tus recuerdos.
            </p>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-10 border border-[#ff5c8a]/40 bg-[#ff5c8a]/10 px-6 py-5">
              <p className="text-sm font-semibold text-[#ff5c8a]">
                {error}
              </p>
            </div>
          )}

          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.8fr]">

            {/* DATOS */}
            <div>

              <div className="border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                  01 - Datos de envío
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                {/* NOMBRE */}
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/40">
                    Nombre
                  </label>

                  <input
                    type="text"
                    value={customer.nombre}
                    onChange={(e) =>
                      updateCustomer(
                        "nombre",
                        e.target.value
                      )
                    }
                    placeholder="Tu nombre"
                    className="w-full border border-white/15 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5c8a]"
                  />
                </div>

                {/* APELLIDO */}
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/40">
                    Apellido
                  </label>

                  <input
                    type="text"
                    value={customer.apellido}
                    onChange={(e) =>
                      updateCustomer(
                        "apellido",
                        e.target.value
                      )
                    }
                    placeholder="Tu apellido"
                    className="w-full border border-white/15 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5c8a]"
                  />
                </div>

                {/* CORREO */}
                <div className="md:col-span-2">
                  <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/40">
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    value={customer.email}
                    onChange={(e) =>
                      updateCustomer(
                        "email",
                        e.target.value
                      )
                    }
                    placeholder="tucorreo@email.com"
                    className="w-full border border-white/15 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5c8a]"
                  />
                </div>

                {/* TELÉFONO */}
                <div className="md:col-span-2">
                  <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/40">
                    Teléfono
                  </label>

                  <input
                    type="tel"
                    value={customer.telefono}
                    onChange={(e) =>
                      updateCustomer(
                        "telefono",
                        e.target.value.replace(/\D/g, "")
                      )
                    }
                    placeholder="10 dígitos"
                    maxLength={10}
                    className="w-full border border-white/15 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5c8a]"
                  />
                </div>

                {/* CALLE */}
                <div className="md:col-span-2">
                  <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/40">
                    Calle y número
                  </label>

                  <input
                    type="text"
                    value={customer.calle}
                    onChange={(e) =>
                      updateCustomer(
                        "calle",
                        e.target.value
                      )
                    }
                    placeholder="Calle, número exterior e interior"
                    className="w-full border border-white/15 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5c8a]"
                  />
                </div>

                {/* COLONIA */}
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/40">
                    Colonia
                  </label>

                  <input
                    type="text"
                    value={customer.colonia}
                    onChange={(e) =>
                      updateCustomer(
                        "colonia",
                        e.target.value
                      )
                    }
                    placeholder="Colonia"
                    className="w-full border border-white/15 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5c8a]"
                  />
                </div>

                {/* CP */}
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/40">
                    Código postal
                  </label>

                  <input
                    type="text"
                    value={customer.cp}
                    onChange={(e) =>
                      updateCustomer(
                        "cp",
                        e.target.value.replace(/\D/g, "")
                      )
                    }
                    placeholder="00000"
                    maxLength={5}
                    className="w-full border border-white/15 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5c8a]"
                  />
                </div>

                {/* CIUDAD */}
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/40">
                    Ciudad
                  </label>

                  <input
                    type="text"
                    value={customer.ciudad}
                    onChange={(e) =>
                      updateCustomer(
                        "ciudad",
                        e.target.value
                      )
                    }
                    placeholder="Ciudad"
                    className="w-full border border-white/15 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5c8a]"
                  />
                </div>

                {/* ESTADO */}
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/40">
                    Estado
                  </label>

                  <input
                    type="text"
                    value={customer.estado}
                    onChange={(e) =>
                      updateCustomer(
                        "estado",
                        e.target.value
                      )
                    }
                    placeholder="Estado"
                    className="w-full border border-white/15 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5c8a]"
                  />
                </div>

                {/* REFERENCIAS */}
                <div className="md:col-span-2">
                  <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/40">
                    Referencias de entrega
                  </label>

                  <textarea
                    value={customer.referencias}
                    onChange={(e) =>
                      updateCustomer(
                        "referencias",
                        e.target.value
                      )
                    }
                    placeholder="Alguna referencia para encontrar tu domicilio"
                    rows={4}
                    className="w-full resize-none border border-white/15 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5c8a]"
                  />
                </div>

              </div>

              {/* ENVÍO */}
              <div className="mt-16 border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                  02 - Envío
                </p>
              </div>

              <div className="mt-8 border border-white/10 p-6 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-bold">
                      Envío estándar
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      Envío nacional.
                      <br />
                      Gratis en compras de $750 MXN o más.
                    </p>
                  </div>

                  <p className="font-bold">
                    {shipping === 0
                      ? "GRATIS"
                      : `$${shipping.toLocaleString(
                          "es-MX"
                        )} MXN`}
                  </p>
                </div>
              </div>

              {/* PAGO */}
              <div className="mt-16 border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#ff5c8a]">
                  03 - Pago
                </p>
              </div>

              <div className="mt-8 border border-white/10 p-6 md:p-8">
                <p className="font-bold">
                  Pago seguro
                </p>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Después de confirmar tus datos te
                  llevaremos al método de pago seguro.
                </p>
              </div>

              <button
                type="button"
                disabled={cart.length === 0}
                onClick={handleContinue}
                className="mt-8 flex w-full items-center justify-center rounded-full bg-[#ff5c8a] px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02] hover:bg-[#ff719a] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continuar al pago
              </button>

              <Link
                href="/carrito"
                className="mt-6 inline-flex text-sm text-white/40 transition hover:text-white"
              >
                ← Volver al carrito
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

                <p className="mt-2 text-sm text-white/40">
                  {totalItems}{" "}
                  {totalItems === 1
                    ? "producto"
                    : "productos"}
                </p>

                <div className="mt-8 space-y-6">

                  {cart.map((item, index) => (
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
                      {subtotal.toLocaleString(
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
                      {shipping === 0
                        ? "Gratis"
                        : `$${shipping.toLocaleString(
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
                      {total.toLocaleString(
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