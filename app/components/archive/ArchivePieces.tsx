interface Piece {
  id: string;
  title: string;
  description: string;
}

interface ArchivePiecesProps {
  pieces: Piece[];
}

export default function ArchivePieces({
  pieces,
}: ArchivePiecesProps) {
  return (
    <section className="bg-[#050505] py-40 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <p className="text-sm uppercase tracking-[8px] text-white/40">
          Piezas del Archivo
        </p>

        <h2 className="mt-8 text-5xl md:text-7xl font-black">
          Cada pieza
          <br />
          conserva un recuerdo.
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {pieces.map((piece) => (
            <div
              key={piece.id}
              className="rounded-3xl border border-white/10 p-10 transition duration-300 hover:border-white/30 hover:bg-white/5"
            >

              <p className="uppercase tracking-[5px] text-sm text-white/40">
                Pieza {piece.id}
              </p>

              <h3 className="mt-5 text-4xl font-black">
                {piece.title}
              </h3>

              <p className="mt-8 leading-8 text-white/65">
                {piece.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
                  Playera
                </span>

                <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
                  Sudadera
                </span>

                <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
                  Gorra
                </span>

                <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
                  Termo
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}