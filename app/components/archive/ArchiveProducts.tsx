interface Product {
  name: string;
  price: string;
}

interface ArchiveProductsProps {
  products: Product[];
}

export default function ArchiveProducts({
  products,
}: ArchiveProductsProps) {
  return (
    <section className="bg-[#050505] py-40 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <p className="uppercase tracking-[8px] text-white/40 text-sm">
          Productos
        </p>

        <h2 className="mt-8 text-5xl md:text-7xl font-black">
          Lleva el
          <br />
          recuerdo contigo.
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 p-10 transition hover:border-white/30 hover:bg-white/5"
            >
              <h3 className="text-3xl font-black">
                {product.name}
              </h3>

              <p className="mt-4 text-2xl text-white/70">
                {product.price}
              </p>

              <button className="mt-10 rounded-full border border-white px-8 py-4 uppercase tracking-[0.3em] transition hover:bg-white hover:text-black">
                Ver producto
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}