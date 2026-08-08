interface ArchiveGalleryProps {
  images: string[];
}

export default function ArchiveGallery({
  images,
}: ArchiveGalleryProps) {
  return (
    <section className="bg-[#050505] py-40 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <p className="text-sm uppercase tracking-[8px] text-white/40">
          Archivo Fotográfico
        </p>

        <h2 className="mt-8 text-5xl md:text-7xl font-black">
          El origen
          <br />
          del recuerdo.
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-3">

          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl"
            >

              <img
                src={image}
                alt=""
                className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}