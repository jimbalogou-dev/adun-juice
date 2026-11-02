import { Link } from "react-router-dom";
import { formaterPrix } from "../utils/prix";
import "./ProduitCard.css";

function ProduitCard({ produit }) {
  return (
    <article className="produit-carte">
      <Link to={`/produits/${produit.id}`} className="produit-carte__image">
        <img src={produit.image} alt={produit.alt} loading="lazy" />
      </Link>

      <div className="produit-carte__texte">
        <h3>{produit.nom}</h3>
        <p className="produit-carte__resume">{produit.resume}</p>
        <p className="produit-carte__prix">
          {formaterPrix(produit.prix)} <small>{produit.unite}</small>
        </p>

        <Link to={`/produits/${produit.id}`} className="lien-plus">
          En savoir plus <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default ProduitCard;