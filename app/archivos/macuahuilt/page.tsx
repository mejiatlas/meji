import ArchiveLayout from "../../components/archive/ArchiveLayout";

export default function MacuahuitlPage() {
  return (
    <ArchiveLayout
      number="002"
      title="Macuahuitl"
      subtitle="La memoria de México no vive en los libros. Vive en las manos, en los símbolos y en las historias que seguimos contando."

      heroImage="/images/archives/macuahuitl/hero.jpg"

      storyTitle="Antes de ser historia, fue identidad."
      storyText="Macuahuitl nace de las raíces que nos formaron. De los mercados, los volcanes, las leyendas, los colores y los símbolos que siguen presentes en nuestra vida cotidiana. Este Archivo no busca mirar al pasado con nostalgia, sino reconocer que una parte de nosotros siempre ha estado ahí."

      gallery={[
        "/images/archives/macuahuitl/hero.jpg",
      ]}

      pieces={[
        {
          id: "001",
          title: "El Guerrero",
          description:
            "La fuerza no siempre estaba en las armas. Muchas veces estaba en la voluntad de proteger lo que importaba.",
        },
        {
          id: "002",
          title: "El Volcán",
          description:
            "Presente desde cualquier horizonte, recordándonos que la tierra también tiene memoria.",
        },
        {
          id: "003",
          title: "El Mercado",
          description:
            "Colores, aromas y voces que siguen siendo el corazón de nuestras ciudades.",
        },
        {
          id: "004",
          title: "La Piedra",
          description:
            "Las historias grabadas en piedra sobrevivieron siglos para seguir hablándonos.",
        },
        {
          id: "005",
          title: "El Maíz",
          description:
            "Mucho antes de convertirse en alimento, fue símbolo de origen y comunidad.",
        },
        {
          id: "006",
          title: "Los Símbolos",
          description:
            "Cada forma y cada patrón cuentan algo sobre quiénes fuimos y quiénes seguimos siendo.",
        },
      ]}

      products={[
        { name: "Playera", price: "$250 MXN" },
        { name: "Sudadera", price: "$350 MXN" },
        { name: "Gorra", price: "$220 MXN" },
        { name: "Termo", price: "$280 MXN" },
      ]}

      next={{
        number: "003",
        title: "Mundo Rosa",
        href: "/archivos/mundo-rosa",
      }}
    />
  );
}