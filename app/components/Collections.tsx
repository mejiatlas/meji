export default function Collections() {
  return (
    <section className="bg-[#050505] text-white py-44">

      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[10px] text-white/40 text-sm">
          Colecciones
        </p>

        <h2 className="mt-8 text-6xl md:text-8xl font-black">
          Cada colección
          <br />
          es un recuerdo.
        </h2>

        <div className="mt-24 space-y-10">

          {/* Domingos */}
          <div className="group relative h-[420px] overflow-hidden rounded-3xl cursor-pointer">

            <img
              src="/images/collections/domingos.jpg"
              alt="Domingos"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition" />

            <div className="absolute bottom-12 left-12">

              <p className="uppercase tracking-[6px] text-white/60 text-sm">
                Archivo 001
              </p>

              <h3 className="mt-3 text-5xl font-black">
                Domingos en Casa
              </h3>

            </div>

          </div>

          {/* Barrio */}
          <div className="group relative h-[420px] overflow-hidden rounded-3xl cursor-pointer">

            <img
              src="/images/collections/barrio.jpg"
              alt="Barrio"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition" />

            <div className="absolute bottom-12 left-12">

              <p className="uppercase tracking-[6px] text-white/60 text-sm">
                Archivo 002
              </p>

              <h3 className="mt-3 text-5xl font-black">
                Barrio
              </h3>

            </div>

          </div>

          {/* Infancia */}
          <div className="group relative h-[420px] overflow-hidden rounded-3xl cursor-pointer">

            <img
              src="/images/collections/infancia.jpg"
              alt="Infancia"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition" />

            <div className="absolute bottom-12 left-12">

              <p className="uppercase tracking-[6px] text-white/60 text-sm">
                Archivo 003
              </p>

              <h3 className="mt-3 text-5xl font-black">
                Infancia
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}