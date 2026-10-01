import ArchiveLayout from "../../components/archive/ArchiveLayout";

export default function ComplementoPage() {
  return (
    <ArchiveLayout
      number="005"
      title="Complemento"
      subtitle="Hay historias que no están completas hasta que dos personas las viven juntas."

      heroImage="/images/archives/complemento/hero.jpg"

      storyTitle="Algunas cosas solo tienen sentido en compañía."
      storyText="Complemento nace de esos recuerdos compartidos que no pertenecen a una sola persona. Las canciones, los viajes, las fotografías, las conversaciones eternas y los pequeños momentos que terminan convirtiéndose en parte de una historia común."

      gallery={[
        "/images/archives/complemento/hero.jpg",
      ]}

      pieces={[
        {
          id: "001",
          title: "La Primera Mirada",
          description:
            "Hay encuentros que parecen pequeños hasta que terminan cambiándolo todo.",
        },
        {
          id: "002",
          title: "Las Conversaciones",
          description:
            "Las historias más importantes suelen comenzar con una conversación sencilla.",
        },
        {
          id: "003",
          title: "Las Fotografías",
          description:
            "Congelan momentos que el tiempo jamás podrá repetir exactamente igual.",
        },
        {
          id: "004",
          title: "Los Viajes",
          description:
            "No importa el destino. Lo importante siempre fue con quién compartimos el camino.",
        },
        {
          id: "005",
          title: "Las Canciones",
          description:
            "Algunas canciones dejan de pertenecernos y se convierten en recuerdos compartidos.",
        },
        {
          id: "006",
          title: "La Historia",
          description:
            "Cada detalle construye algo más grande que la suma de dos personas.",
        },
      ]}

      products={[
        { name: "Playera", price: "$250 MXN" },
        { name: "Sudadera", price: "$350 MXN" },
        { name: "Gorra", price: "$220 MXN" },
        { name: "Termo", price: "$280 MXN" },
      ]}

      next={{
        number: "006",
        title: "Fauna",
        href: "/archivos/fauna",
      }}
    />
  );
}