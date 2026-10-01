import ArchiveLayout from "../../components/archive/ArchiveLayout";

export default function FaunaPage() {
  return (
    <ArchiveLayout
      number="006"
      title="Fauna"
      subtitle="Algunos recuerdos tienen cuatro patas, plumas o bigotes. Y aun así forman parte de la familia."
      heroImage="/images/archives/fauna/hero.jpeg"
      storyTitle="Nunca fueron solo mascotas."
      storyText="Fauna nace de todos esos compañeros silenciosos que crecieron con nosotros. El perro que nos esperaba al volver de la escuela, el gato que dormía en el sillón, el canario que despertaba la casa o el caballo que parecía entender cada palabra. Este Archivo conserva esos vínculos que dejaron huellas mucho después de haberse ido."
      gallery={[
        "/images/archives/fauna/hero.jpeg",
      ]}
      pieces={[
        {
          id: "001",
          title: "El Perro de la Casa",
          description:
            "Siempre estaba ahí. En los días buenos, en los malos y en todos los que parecían normales.",
        },
        {
          id: "002",
          title: "El Gato",
          description:
            "Independiente, misterioso y dueño de cada rincón que decidía ocupar.",
        },
        {
          id: "003",
          title: "Las Aves",
          description:
            "Su canto se mezclaba con las mañanas y formaba parte de la rutina familiar.",
        },
        {
          id: "004",
          title: "Los Compañeros de Juego",
          description:
            "Muchos recuerdos de infancia tienen un animal corriendo a nuestro lado.",
        },
        {
          id: "005",
          title: "Las Huellas",
          description:
            "Pueden desaparecer del piso, pero nunca de la memoria.",
        },
        {
          id: "006",
          title: "La Despedida",
          description:
            "Porque amar también significa aprender a recordar.",
        },
      ]}
      products={[
        { name: "Playera", price: "$250 MXN" },
        { name: "Sudadera", price: "$350 MXN" },
        { name: "Gorra", price: "$220 MXN" },
        { name: "Termo", price: "$280 MXN" },
      ]}
      next={{
        number: "007",
        title: "Artesanías",
        href: "/archivos/artesanias",
      }}
    />
  );
}