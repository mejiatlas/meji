import Moon from "./ui/Moon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-12 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <p className="text-2xl font-black tracking-[0.25em]">MEJI</p>

        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/40">
          <Moon className="h-4 w-4 text-[#ff5c8a]" />
          <span>Archivamos recuerdos.</span>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          El Gran Archivo
        </p>
      </div>
    </footer>
  );
}
