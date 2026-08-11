import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CarritoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="px-6 pb-32 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#ff5c8a]" />

            <p className="text-xs uppercase tracking-[0.5em] text-white/40">
              Tu selección
            </p>
          </div>

          <h1 className="mt-8 text-6xl font-black md:text-8xl">
            Carrito.
          </h1>

          <div className="mt-16 border-y border-white/10 py-16 text-center">
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
        </div>
      </section>

      <Footer />
    </main>
  );
}