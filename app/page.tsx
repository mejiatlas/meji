import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ActiveArchive from "./components/ActiveArchive";
import Story from "./components/Story";
import Collections from "./components/Collections";
import HugoCollab from "./components/HugoCollab";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <ActiveArchive />
      <Story />
      <HugoCollab />
      <Collections />
      <Footer />
    </main>
  );
}