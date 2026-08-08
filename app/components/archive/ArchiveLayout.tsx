import ArchiveHero from "./ArchiveHero";
import ArchiveStory from "./ArchiveStory";
import ArchiveGallery from "./ArchiveGallery";
import ArchivePieces from "./ArchivePieces";
import ArchiveProducts from "./ArchiveProducts";
import ArchiveFooter from "./ArchiveFooter";

interface ArchiveLayoutProps {
  number: string;
  title: string;
  subtitle: string;
  heroImage: string;

  storyTitle: string;
  storyText: string;

  gallery: string[];

  pieces: {
    id: string;
    title: string;
    description: string;
  }[];

  products: {
    name: string;
    price: string;
  }[];

  next: {
    number: string;
    title: string;
    href: string;
  };
}

export default function ArchiveLayout({
  number,
  title,
  subtitle,
  heroImage,
  storyTitle,
  storyText,
  gallery,
  pieces,
  products,
  next,
}: ArchiveLayoutProps) {
  return (
    <main className="bg-[#050505]">

      <ArchiveHero
        number={number}
        title={title}
        subtitle={subtitle}
        image={heroImage}
      />

      <ArchiveStory
        title={storyTitle}
        text={storyText}
      />

      <ArchiveGallery
        images={gallery}
      />

      <ArchivePieces
        pieces={pieces}
      />

      <ArchiveProducts
        products={products}
      />

      <ArchiveFooter
        nextNumber={next.number}
        nextTitle={next.title}
        href={next.href}
      />

    </main>
  );
}