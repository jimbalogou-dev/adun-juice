import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../context/PanierContext";
import { formaterPrix } from "../utils/prix";
import "./MiniPanier.css";

function MiniPanier({ ouvert, onFermer }) {
  const { lignes, total, nombreArticles, changerQuantite, retirer } = usePanier();

  useEffect(() => {
    if (!ouvert) return;
    const surTouche = (e) => e.key === "Escape" && onFermer();
    document.addEventListener("keydown", surTouche);
    return () => document.removeEventListener("keydown", surTouche);
  }, [ouvert, onFermer]);

  return (
    <>
      <div
        className={`mini-panier__voile ${ouvert ? "mini-panier__voile--ouvert" : ""}`}
        onClick={onFermer}
      />

      <aside
        className={`mini-panier ${ouvert ? "mini-panier--ouvert" : ""}`}
        aria-label="Mon panier"
        aria-hidden={!ouvert}
      >
        <header className="mini-panier__entete">
          <h2>Mon panier ({nombreArticles})</h2>
          <button type="button" onClick={onFermer} aria-label="Fermer le panier">
            ✕
          </button>
        </header>

        {lignes.length === 0 ? (
          <p className="mini-panier__vide">Votre panier est vide.</p>
        ) : (
          <ul className="mini-panier__liste">
            {lignes.map((l) => (
              <li key={l.id} className="mini-panier__ligne">
                <img src={l.produit.image} alt={l.produit.alt} />

                <div className="mini-panier__infos">
                  <strong>{l.produit.nom}</strong>
                  <span className="mini-panier__prix">
                    {formaterPrix(l.produit.prix)} <small>{l.produit.unite}</small>
                  </span>

                  <div className="mini-panier__quantite">
                    <button
                      type="button"
                      onClick={() => changerQuantite(l.id, l.quantite - 1)}
                      disabled={l.quantite <= l.produit.quantiteMin}
                      aria-label="Diminuer la quantité"
                    >
                      −
                    </button>
                    <span>{l.quantite}</span>
                    <button
                      type="button"
                      onClick={() => changerQuantite(l.id, l.quantite + 1)}
                      aria-label="Augmenter la quantité"
                    >
                      +
                    </button>
                    <button type="button" className="mini-panier__retirer" onClick={() => retirer(l.id)}>
                      Retirer
                    </button>
                  </div>
                </div>

                <span className="mini-panier__sous-total">{formaterPrix(l.sousTotal)}</span>
              </li>
            ))}
          </ul>
        )}

        {lignes.length > 0 && (
          <footer className="mini-panier__pied">
            <p className="mini-panier__total">
              <span>Total</span>
              <strong>{formaterPrix(total)}</strong>
            </p>

            <Link to="/commander" className="bouton">
              Passer la commande
            </Link>
            <button type="button" className="bouton bouton--contour" onClick={onFermer}>
              Continuer mes achats
            </button>
            <Link to="/panier" className="lien-plus mini-panier__voir">
              Voir la page panier <span aria-hidden="true">→</span>
            </Link>
          </footer>
        )}
      </aside>
    </>
  );
}

export default MiniPanier;