import Link from "next/link";

interface ArchiveFooterProps {
  nextNumber: string;
  nextTitle: string;
  href: string;
}

export default function ArchiveFooter({
  nextNumber,
  nextTitle,
  href,
}: ArchiveFooterProps) {
  return (
    <section className="bg-black py-32 text-white">

      <div className="mx-auto max-w-7xl px-8 text-center">

        <p className="uppercase tracking-[8px] text-white/40">
          Siguiente Archivo
        </p>

        <h2 className="mt-8 text-6xl font-black">
          {nextNumber}
        </h2>

        <p className="mt-6 text-4xl">
          {nextTitle}
        </p>

        <Link
          href={href}
          className="mt-12 inline-block rounded-full border border-white px-10 py-5 uppercase tracking-[0.35em] transition hover:bg-white hover:text-black"
        >
          Abrir Archivo →
        </Link>

      </div>

    </section>
  );
}