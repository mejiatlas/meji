export default function DomingosPage() {
  return (
    <main className="bg-[#050505] text-white">

      {/* HERO */}

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <p className="uppercase tracking-[0.45em] text-white/40">
          Archivo 001
        </p>

        <h1 className="text-7xl md:text-9xl font-black mt-8">
          DOMINGOS
        </h1>

        <p className="text-3xl md:text-5xl font-light mt-20 max-w-4xl leading-tight">
          Los domingos nunca fueron un día.
        </p>

        <p className="mt-16 uppercase tracking-[0.5em] text-white/30 text-sm">
          Desliza para recordar
        </p>

      </section>

      {/* FRASE */}

      <section className="max-w-6xl mx-auto px-8 py-40">

        <h2 className="text-5xl md:text-7xl font-black leading-tight">

          No vendemos playeras.

          <br />

          Vestimos recuerdos.

        </h2>

      </section>

      {/* RECUERDOS */}

      <section className="max-w-4xl mx-auto py-32 space-y-24 text-3xl text-white/65">

        <p>El olor del café.</p>

        <p>El sonido del panadero.</p>

        <p>Las bicicletas en la calle.</p>

        <p>Los domingos con la familia.</p>

        <p>Las tortillas recién hechas.</p>

        <p>El balón rodando entre amigos.</p>

        <p>Los recuerdos no desaparecen.</p>

        <p>Solo esperan ser encontrados.</p>

      </section>

      {/* FINAL */}

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <p className="uppercase tracking-[0.45em] text-white/40">
          Archivo 001
        </p>

        <h2 className="text-6xl md:text-8xl font-black mt-8">
          Domingos en Casa
        </h2>

        <button className="mt-20 border border-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition">
          Ver colección
        </button>

      </section>

    </main>
  );
}