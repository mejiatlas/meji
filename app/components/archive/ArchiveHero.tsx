import Image from "next/image";

interface ArchiveHeroProps {
  number: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function ArchiveHero({
  number,
  title,
  subtitle,
  image,
}: ArchiveHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] text-white">

      {/* Imagen */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Oscurecer */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#050505]" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8">

        <p className="uppercase tracking-[8px] text-white/40 text-sm">
          Archivo {number}
        </p>

        <h1 className="mt-6 text-6xl md:text-8xl font-black leading-none">
          {title}
        </h1>

        <div className="mt-16 grid md:grid-cols-2 gap-16">

          <div>

            <div className="space-y-8 text-white/70">

              <div>

                <p className="uppercase tracking-[4px] text-xs">
                  Clasificación
                </p>

                <p className="mt-2 text-2xl text-white">
                  Archivo Abierto
                </p>

              </div>

              <div>

                <p className="uppercase tracking-[4px] text-xs">
                  Origen
                </p>

                <p className="mt-2 text-2xl text-white">
                  México
                </p>

              </div>

              <div>

                <p className="uppercase tracking-[4px] text-xs">
                  Año
                </p>

                <p className="mt-2 text-2xl text-white">
                  2026
                </p>

              </div>

            </div>

          </div>

          <div>

            <p className="text-3xl md:text-5xl font-light leading-tight">
              {subtitle}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}