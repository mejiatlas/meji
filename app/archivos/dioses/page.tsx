import ArchiveLayout from "../../components/archive/ArchiveLayout";

export default function DiosesPage() {
  return (
    <ArchiveLayout
      number="004"
      title="Dioses"
      subtitle="Antes de convertirse en leyenda, también fueron niños."
      heroImage="/images/archives/dioses/hero.jpg"

      storyTitle="Los dioses también jugaron."
      storyText="Antes de convertirse en figuras eternas, fueron niños curiosos, traviesos y llenos de imaginación. Esta colección reimagina a los grandes dioses desde una mirada infantil."

      gallery={[
        "/images/archives/dioses/hero.jpg",
      ]}

      pieces={[
        {
          id: "001",
          title: "Quetzalcóatl",
          description: "La serpiente emplumada en sus primeros años.",
        },
        {
          id: "002",
          title: "Tláloc",
          description: "El señor de la lluvia cuando aún jugaba bajo las nubes.",
        },
      ]}

      products={[
        { name: "Playera", price: "$250 MXN" },
        { name: "Sudadera", price: "$350 MXN" },
      ]}

      next={{
        number: "005",
        title: "Complemento",
        href: "/archivos/complemento",
      }}
    />
  );
}