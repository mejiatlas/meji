export default function ActiveArchive() {
  return (
    <section className="bg-[#050505] py-40 text-center text-white">

      <p className="text-sm uppercase tracking-[10px] text-white/40">
        Archivo Activo
      </p>

      <h2 className="mt-8 text-6xl font-black md:text-8xl">
        Domingos en Casa
      </h2>

      <div className="mx-auto mt-10 h-px w-40 bg-white/20" />

      <p className="mx-auto mt-12 max-w-xl text-2xl leading-relaxed text-white/70">
        19 hogares ya guardan esta historia.
      </p>

      <h3 className="mt-10 text-5xl font-black">
        Quedan 31 piezas.
      </h3>

      <button className="mt-14 rounded-full border border-white/30 px-10 py-4 transition hover:bg-white hover:text-black">
        Ver colección →
      </button>

    </section>
  );
}