import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePanier } from "../context/PanierContext";
import { formaterPrix } from "../utils/prix";
import AutresProduits from "./AutresProduits";
import MiniPanier from "./MiniPanier";
import "../pages/ProduitDetail.css";

function FicheProduit({ fil, titre, image, alt, prix, description, ingredients, fabrication, produitId }) {
  const navigate = useNavigate();
  const { ajouter, nombreArticles } = usePanier();
  const [panierOuvert, setPanierOuvert] = useState(false);

  const ajouterAuPanier = () => {
    ajouter(produitId);
    setPanierOuvert(true);
  };

  const commanderMaintenant = () => {
    ajouter(produitId);
    navigate("/commander");
  };

  return (
    <section className="detail">
      <div className="conteneur">
        
        <div className="fiche">
          <figure className="fiche__photo">
            <img src={image} alt={alt} />
          </figure>

          <div className="fiche__texte">
            <h1>{titre}</h1>

            {prix ? (
              <p className="fiche__prix">
                {formaterPrix(prix.montant)} <small>{prix.unite}</small>
              </p>
            ) : (
              <p className="fiche__note">Prix et disponibilité confirmés à la commande.</p>
            )}

            <div className="fiche__description">
              {description.map((paragraphe) => (
                <p key={paragraphe}>{paragraphe}</p>
              ))}
            </div>

            <div className="fiche__fabrication">
              <h2>Ingrédients</h2>
              <p>{ingredients}</p>
            </div>

            <div className="fiche__fabrication">
              <h2>Comment est-il fabriqué ?</h2>
              <p>
                Les étapes ci-dessous sont une proposition indicative. Elles sont à valider
                et à adapter aux recettes, aux équipements et aux pratiques réelles d’Adùn Juice
                avant d’être présentées comme son procédé effectif.
              </p>
              <ol>
                {fabrication.map((etape) => (
                  <li key={etape}>{etape}</li>
                ))}
              </ol>
            </div>

            <div className="fiche__boutons">
              <button type="button" className="bouton bouton--contour" onClick={ajouterAuPanier}>
                Ajouter au panier
              </button>
              <button type="button" className="bouton" onClick={commanderMaintenant}>
                Commander maintenant
              </button>
            </div>

            {nombreArticles > 0 && (
              <button type="button" className="lien-plus fiche__voir-panier" onClick={() => setPanierOuvert(true)}>
                Voir mon panier ({nombreArticles}) <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        </div>

        <AutresProduits />
      </div>

      <MiniPanier ouvert={panierOuvert} onFermer={() => setPanierOuvert(false)} />
    </section>
  );
}

export default FicheProduit;