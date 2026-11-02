import { Link } from "react-router-dom";
import galerie from "../data/galerie";
import "./Galerie.css";

function Galerie() {
  return (
    <section className="galerie">
      <div className="conteneur">
        <div className="galerie__entete">
          <h2>Un aperçu de nos produits</h2>
        </div>

        <div className="galerie__grille">
          {galerie.map((photo) => (
            <article className="galerie__carte" key={photo.id}>
              <Link to={`/galerie/${photo.id}`} className="galerie__image">
                <img src={photo.image} alt={photo.alt} loading="lazy" />
              </Link>
              <div className="galerie__texte">
                <h3>{photo.titre}</h3>
                <p>{photo.description}</p>
                <Link to={`/galerie/${photo.id}`} className="lien-plus">
                     En savoir plus <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galerie;