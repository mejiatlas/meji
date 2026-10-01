import Moon from "./ui/Moon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-16 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

        {/* MEJI */}
        <div>
          <h3 className="mb-4 text-2xl font-black tracking-[0.25em]">
            MEJI
          </h3>

          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Vestimos recuerdos. No tendencias.
          </p>
        </div>

        {/* ARCHIVO */}
        <div>
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/40">
            <Moon className="h-4 w-4 text-[#ff5c8a]" />
            <span>Archivamos recuerdos.</span>
          </div>

          <div className="space-y-2 text-sm text-white/60">
            <a href="/archivos" className="block hover:text-white">
              Colecciones
            </a>

            <a href="/#historia" className="block hover:text-white">
              Historia
            </a>

            <a href="/tienda" className="block hover:text-white">
              Tienda
            </a>
          </div>
        </div>

        {/* GRAN ARCHIVO */}
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">
            El Gran Archivo
          </h4>

          <div className="space-y-2 text-sm text-white/60">
            <p>Puebla, México</p>

            <p>hola@meji.mx</p>

            <a href="#" className="block hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.25em] text-white/30">
        © 2026 MEJI · EL ARCHIVO SIGUE ABIERTO.
      </div>
    </footer>
  );
}