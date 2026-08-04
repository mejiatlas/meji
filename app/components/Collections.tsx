import Link from "next/link";

const collections = [
  {
    id: "001",
    title: "Domingos en Casa",
    image: "/images/collections/domingos.jpg",
    href: "/archivos/domingos",
  },
  {
    id: "002",
    title: "Barrio",
    image: "/images/collections/barrio.jpg",
    href: "/archivos/barrio",
  },
  {
    id: "003",
    title: "Infancia",
    image: "/images/collections/infancia.jpg",
    href: "/archivos/infancia",
  },
];

export default function Collections() {
  return (
    <section
      id="archivos"
      className="bg-[#050505] py-40 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-sm uppercase tracking-[8px] text-white/40">
          ARCHIVOS
        </p>

        <h2 className="mt-6 text-5xl font-black md:text-7xl">
          Elige un recuerdo.
        </h2>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-white/60">
          Cada Archivo reúne historias, fotografías y piezas inspiradas
          en momentos que forman parte de nuestra memoria.
        </p>

        <div className="mt-20 space-y-8">

          {collections.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative block h-[460px] overflow-hidden rounded-3xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/25" />

              <div className="absolute bottom-12 left-12">

                <p className="text-sm uppercase tracking-[6px] text-white/60">
                  Archivo {item.id}
                </p>

                <h3 className="mt-3 text-5xl font-black">
                  {item.title}
                </h3>

                <p className="mt-5 text-white/80 opacity-0 transition duration-500 group-hover:opacity-100">
                  Abrir Archivo →
                </p>

              </div>

            </Link>
          ))}

        </div>

        <div className="mt-20 text-center">

          <Link
            href="/archivos"
            className="inline-flex items-center rounded-full border border-white/20 px-10 py-5 text-sm uppercase tracking-[0.35em] transition hover:bg-white hover:text-black"
          >
            Ver todos los Archivos →
          </Link>

        </div>

      </div>
    </section>
  );
}