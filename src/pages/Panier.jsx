import { Link } from "react-router-dom";
import { usePanier } from "../context/PanierContext";
import { formaterPrix } from "../utils/prix";
import "./Panier.css";

function Panier() {
  const { lignes, total, nombreArticles, changerQuantite, retirer, vider } = usePanier();

  if (lignes.length === 0) {
    return (
      <section className="panier">
        <div className="conteneur panier__vide">
          <h1>Votre panier est vide</h1>
          <p>Découvrez nos jus, yaourts et salades de fruits, puis ajoutez-les à votre panier.</p>
          <Link to="/produits" className="bouton">Voir nos produits</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="panier">
      <div className="conteneur">
        <h1>Mon panier</h1>

        <div className="panier__contenu">
          <ul className="panier__liste">
            {lignes.map(({ id, produit, quantite, sousTotal }) => (
              <li key={id} className="panier__ligne">
                <img src={produit.image} alt={produit.alt} />

                <div className="panier__info">
                  <h2>{produit.nom}</h2>
                  <p>
                    {formaterPrix(produit.prix)} <small>{produit.unite}</small>
                  </p>
                  {produit.quantiteMin > 1 && (
                    <p className="panier__min">Minimum : {produit.quantiteMin}</p>
                  )}
                  <button type="button" className="panier__retirer" onClick={() => retirer(id)}>
                    Retirer
                  </button>
                </div>

                <div className="panier__quantite">
                  <button
                    type="button"
                    onClick={() => changerQuantite(id, quantite - 1)}
                    disabled={quantite <= produit.quantiteMin}
                    aria-label={`Diminuer la quantité de ${produit.nom}`}
                  >
                    −
                  </button>
                  <span>{quantite}</span>
                  <button
                    type="button"
                    onClick={() => changerQuantite(id, quantite + 1)}
                    aria-label={`Augmenter la quantité de ${produit.nom}`}
                  >
                    +
                  </button>
                </div>

                <p className="panier__soustotal">{formaterPrix(sousTotal)}</p>
              </li>
            ))}
          </ul>

          <aside className="panier__resume">
            <h2>Récapitulatif</h2>
            <p className="panier__ligne-resume">
              <span>Articles</span>
              <span>{nombreArticles}</span>
            </p>
            <p className="panier__ligne-resume panier__total">
              <span>Total</span>
              <strong>{formaterPrix(total)}</strong>
            </p>

            <Link to="/commander" className="bouton">Passer la commande</Link>
            <Link to="/produits" className="panier__continuer">Continuer mes achats</Link>
            <button type="button" className="panier__vider" onClick={vider}>
              Vider le panier
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Panier;