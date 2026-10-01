import Collections from "../components/Collections";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ColeccionesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="pt-32">
        <Collections />
      </section>

      <Footer />
    </main>
  );
}