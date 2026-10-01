import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function HugoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
            Colaboración Especial
          </p>

          <h1 className="mt-6 text-5xl font-black leading-none md:text-8xl">
            HUGO × MEJI
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            Una colección construida desde recuerdos, cultura popular,
            irreverencia y nostalgia. Una colaboración que celebra
            personajes que han dejado huella.
          </p>

        </div>
      </section>

      {/* IMAGEN */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10">

          <Image
            src="/images/collections/hugo.jpg"
            alt="Hugo Blanquet x MEJI"
            width={1600}
            height={1000}
            priority
            className="h-auto w-full object-contain"
          />

        </div>
      </section>

      {/* TEXTO */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-5xl">

          <p className="text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
            Próximamente
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Una colaboración hecha para quienes crecieron
            coleccionando recuerdos.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/60">
            Estamos preparando diseños exclusivos inspirados en
            personajes, historias y momentos que forman parte
            de nuestra memoria colectiva.
          </p>

          <p className="mt-8 text-lg leading-relaxed text-white/60">
            Muy pronto revelaremos las primeras piezas de esta
            colaboración.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}