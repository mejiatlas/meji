export interface Piece {
  id: string;
  title: string;
  description: string;
}

export interface Product {
  name: string;
  price: string;
}

export interface ArchiveData {
  number: string;
  title: string;
  subtitle: string;
  heroImage: string;
  storyTitle: string;
  storyText: string;
  gallery: string[];
  pieces: Piece[];
  products: Product[];
  next: {
    number: string;
    title: string;
    href: string;
  };
}