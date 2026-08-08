import Moon from "./ui/Moon";

export default function Story() {
  const memories = [
    "El aroma del café por la mañana.",
    "El panadero recorriendo la calle.",
    "Las bicicletas esperando afuera de casa.",
    "Las calles empedradas del barrio.",
    "Las tortillas recién hechas.",
    "Un balón rodando entre amigos.",
    "Una tarde viendo el Popocatépetl.",
  ];

  return (
    <section
      id="historia"
      className="bg-[#050505] py-40 text-white md:py-52"
    >
      <div className="mx-auto max-w-6xl px-8">

        {/* ENCABEZADO */}
        <div className="flex items-center gap-4">

          <span className="h-px w-10 bg-[#ff5c8a]" />

          <p className="text-sm uppercase tracking-[10px] text-white/40">
            Historia
          </p>

          <Moon className="h-4 w-4 text-[#ff5c8a]" />

        </div>

        {/* MANIFIESTO */}
        <h2 className="mt-10 text-5xl font-black leading-tight md:text-8xl">
          No coleccionamos prendas.
          <br />
          Archivamos{" "}
          <span className="text-[#ff5c8a]">
            recuerdos.
          </span>
        </h2>

        {/* SEPARADOR */}
        <div className="mt-20 h-px w-40 bg-white/20" />

        {/* CONTENIDO */}
        <div className="mt-20 grid gap-20 md:grid-cols-2 md:gap-24">

          {/* IZQUIERDA */}
          <div>

            <p className="text-3xl leading-relaxed text-white/90 md:text-4xl">
              Hay recuerdos que nunca desaparecen.
            </p>

            <p className="mt-10 text-xl leading-10 text-white/60">
              No importa cuántos años pasen.
              <br />
              Hay momentos que siguen viviendo en nosotros.
            </p>

            <div className="mt-12 flex items-center gap-4 text-sm uppercase tracking-[0.35em] text-white/30">

              <Moon className="h-4 w-4 text-[#ff5c8a]" />

              Fragmentos de memoria

            </div>

          </div>

          {/* DERECHA */}
          <div className="space-y-6">

            {memories.map((memory, index) => (
              <div
                key={index}
                className="
                  group
                  flex
                  items-start
                  gap-5
                  border-b
                  border-white/5
                  pb-5
                  text-xl
                  leading-8
                  text-white/55
                  transition-all
                  duration-300
                  hover:border-[#ff5c8a]/30
                  hover:text-white
                "
              >

                <Moon
                  className="
                    mt-2
                    h-4
                    w-4
                    shrink-0
                    text-[#ff5c8a]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:scale-110
                  "
                />

                <p>
                  {memory}
                </p>

              </div>
            ))}

            {/* CIERRE */}
            <div className="pt-8">

              <p className="text-2xl font-semibold text-white md:text-3xl">
                Eso es{" "}
                <span className="text-[#ff5c8a]">
                  MEJI.
                </span>
              </p>

              <div className="mt-5 flex items-center gap-3">

                <span className="h-px w-12 bg-[#ff5c8a]" />

                <span className="text-xs uppercase tracking-[0.4em] text-white/30">
                  El Archivo queda abierto
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}