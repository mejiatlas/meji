export default function Story() {
  return (
    <section
      id="historia"
      className="bg-[#050505] text-white py-52"
    >
      <div className="mx-auto max-w-6xl px-8">

        <p className="text-sm uppercase tracking-[10px] text-white/40">
          Historia
        </p>

        <h2 className="mt-10 text-5xl md:text-8xl font-black leading-tight">
          No coleccionamos prendas.
          <br />
          Archivamos recuerdos.
        </h2>

        <div className="mt-20 h-px w-40 bg-white/20" />

        <div className="mt-20 grid gap-24 md:grid-cols-2">

          <div>

            <p className="text-3xl leading-relaxed text-white/90">
              Hay recuerdos que nunca desaparecen.
            </p>

            <p className="mt-10 text-xl leading-10 text-white/60">
              No importa cuántos años pasen.
              <br />
              Hay momentos que siguen viviendo en nosotros.
            </p>

          </div>

          <div className="space-y-8 text-xl leading-10 text-white/60">

            <p>☕ El aroma del café por la mañana.</p>

            <p>🥖 El panadero recorriendo la calle.</p>

            <p>🚲 Las bicicletas esperando afuera de casa.</p>

            <p>🪨 Las calles empedradas del barrio.</p>

            <p>🌽 Las tortillas recién hechas.</p>

            <p>⚽ Un balón rodando entre amigos.</p>

            <p>🏔️ Una tarde viendo el Popocatépetl.</p>

            <p className="pt-8 text-2xl font-semibold text-white">
              Eso es MEJI.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}