import ArchiveLayout from "../../../components/archive/ArchiveLayout";

export default function DomingosPage() {
  return (
    <ArchiveLayout
      number="001"
      title="Domingos en Casa"
      subtitle="Hay recuerdos que nunca se fueron. Solo estaban esperando que alguien los volviera a vestir."
      heroImage="/images/collections/domingos.jpg"

      storyTitle="Los domingos no eran un día."
      storyText="Eran el aroma del café, el pan recién comprado, las tortillas calientes sobre la mesa y las conversaciones que parecían no terminar nunca. Este Archivo conserva esos momentos cotidianos que, sin darnos cuenta, terminaron convirtiéndose en recuerdos."

      gallery={[
        "/images/collections/story-01-cafe.jpg",
        "/images/collections/story-02-panadero.jpg",
        "/images/collections/story-05-tortillas.jpg",
        "/images/collections/story-06-desayuno.jpg",
        "/images/collections/story-07-azotea.jpg",
        "/images/collections/ninos-bicicleta.jpg",
      ]}

      pieces={[
        {
          id: "001",
          title: "El Café",
          description:
            "Hay mañanas que nunca olvidamos. El café era el comienzo de casi todos los domingos.",
        },
        {
          id: "002",
          title: "Las Tortillas",
          description:
            "El sonido del comal anunciaba que toda la familia estaba por reunirse.",
        },
        {
          id: "003",
          title: "El Desayuno Familiar",
          description:
            "No importaba el menú. Lo importante era compartir la mesa con quienes más queríamos.",
        },
        {
          id: "004",
          title: "El Panadero",
          description:
            "Su sonido recorría la calle y todos sabíamos que era momento de salir por el pan.",
        },
        {
          id: "005",
          title: "La Azotea",
          description:
            "Subir a ver el cielo y el Popocatépetl era parte de muchos domingos en casa.",
        },
        {
          id: "006",
          title: "Las Bicicletas",
          description:
            "La calle se convertía en nuestra pista. No hacían falta pantallas para pasarla bien.",
        },
        {
          id: "007",
          title: "Las Flores",
          description:
            "Siempre había un rincón de la casa que olía a flores recién cortadas.",
        },
        {
          id: "008",
          title: "El Periódico",
          description:
            "Mientras unos preparaban el desayuno, alguien leía las noticias acompañado de una taza de café.",
        },
      ]}

      products={[
        { name: "Playera", price: "$250 MXN" },
        { name: "Sudadera", price: "$350 MXN" },
        { name: "Gorra", price: "$220 MXN" },
        { name: "Termo", price: "$280 MXN" },
      ]}

      next={{
        number: "002",
        title: "Macuahuitl",
        href: "/archivos/macuahuitl",
      }}
    />
  );
}
