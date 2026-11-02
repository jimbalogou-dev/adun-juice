import { Link, useParams } from "react-router-dom";
import catalogue from "../data/catalogue";
import FicheProduit from "../components/FicheProduit";

function ProduitDetail() {
  const { id } = useParams();
  const produit = catalogue.find((p) => p.id === id);

  if (!produit) {
    return (
      <section className="detail">
        <div className="conteneur">
          <h1>Produit introuvable</h1>
          <p>Ce produit n'existe pas ou n'est plus disponible.</p>
          <Link to="/produits" className="bouton">Voir tous nos produits</Link>
        </div>
      </section>
    );
  }

  return (
    <FicheProduit
      key={id}
      fil={[
        { label: "Accueil", to: "/" },
        { label: "Nos produits", to: "/produits" },
        { label: produit.nom },
      ]}
      titre={produit.nom}
      image={produit.image}
      alt={produit.alt}
      prix={{ montant: produit.prix, unite: produit.unite }}
      description={produit.description}
      ingredients={produit.ingredients}
      fabrication={produit.fabrication}
      produitId={produit.id}
    />
  );
}

export default ProduitDetail;