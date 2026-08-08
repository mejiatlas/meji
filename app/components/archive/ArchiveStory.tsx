interface ArchiveStoryProps {
  title: string;
  text: string;
}

export default function ArchiveStory({
  title,
  text,
}: ArchiveStoryProps) {
  return (
    <section className="bg-[#050505] py-40 text-white">
      <div className="mx-auto max-w-5xl px-8">

        <p className="text-sm uppercase tracking-[8px] text-white/40">
          Historia
        </p>

        <h2 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
          {title}
        </h2>

        <div className="mt-14 h-px w-24 bg-white/20" />

        <p className="mt-14 max-w-3xl text-xl leading-10 text-white/70">
          {text}
        </p>

      </div>
    </section>
  );
}