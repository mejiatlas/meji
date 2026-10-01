import Image from "next/image";

export default function HugoCollab() {
  return (
    <section className="border-y border-white/10">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">

        {/* IMAGEN */}
        <div className="relative min-h-[500px]">
          <Image
            src="/images/collections/hugo.jpg"
            alt="Hugo Blanquet x MEJI"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        </div>

        {/* TEXTO */}
        <div className="flex items-center px-6 py-20 md:px-14">
          <div>

            <p className="text-xs uppercase tracking-[0.45em] text-[#ff5c8a]">
              Próximo Archivo
            </p>

            <h2 className="mt-6 text-5xl font-black leading-none md:text-7xl">
              HUGO × MEJI
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/50">
              Una colaboración construida desde recuerdos,
              cultura popular e historias que merecen permanecer.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.35em] text-white/30">
              Muy pronto.
            </p>

            <a
              href="/colaboraciones/hugo"
              className="mt-10 inline-flex rounded-full border border-[#ff5c8a] px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-[#ff5c8a] transition-all duration-300 hover:bg-[#ff5c8a] hover:text-black"
            >
              Conocer colaboración
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}