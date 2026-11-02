import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import tousLesProduits from "../data/tousLesProduits";
import "./AutresProduits.css";

function AutresProduits() {
  const { pathname } = useLocation();
  const piste = useRef(null);

  const autres = tousLesProduits.filter((p) => p.lien !== pathname);

  const defiler = (sens) => {
    const el = piste.current;
    if (!el) return;
    el.scrollBy({ left: sens * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="autres" aria-label="Découvrir d'autres produits">
      <div className="autres__entete">
        <h2>Découvrir d'autres produits</h2>

        <div className="autres__actions">
          <Link to="/produits" className="lien-plus">
            Voir tous nos produits <span aria-hidden="true">→</span>
          </Link>
          <button type="button" onClick={() => defiler(-1)} aria-label="Produits précédents">
            ‹
          </button>
          <button type="button" onClick={() => defiler(1)} aria-label="Produits suivants">
            ›
          </button>
        </div>
      </div>

      <ul className="autres__piste" ref={piste}>
        {autres.map((p) => (
          <li key={p.cle}>
            <Link to={p.lien} className="autres__carte">
              <img src={p.image} alt={p.alt} loading="lazy" />
              <strong>{p.titre}</strong>
              <span className="autres__lien">En savoir plus →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AutresProduits;