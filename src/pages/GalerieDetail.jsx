import { Link, useParams } from "react-router-dom";
import galerie from "../data/galerie";
import catalogue from "../data/catalogue";
import FicheProduit from "../components/FicheProduit";

function GalerieDetail() {
  const { id } = useParams();
  const photo = galerie.find((p) => String(p.id) === id);

  if (!photo) {
    return (
      <section className="detail">
        <div className="conteneur">
          <h1>Page introuvable</h1>
          <p>Cette page n'existe pas ou n'est plus disponible.</p>
          <Link to="/" className="bouton">Retour à l'accueil</Link>
        </div>
      </section>
    );
  }

  const produit = catalogue.find((p) => p.id === photo.produit);

  return (
    <FicheProduit
      key={id}
      fil={[{ label: "Accueil", to: "/" }, { label: photo.titre }]}
      titre={photo.titre}
      image={photo.image}
      alt={photo.alt}
      prix={null}
      description={photo.detail}
      ingredients={photo.ingredients}
      fabrication={photo.fabrication ?? produit.fabrication}
      produitId={`g-${photo.id}`}
    />
  );
}

export default GalerieDetail;