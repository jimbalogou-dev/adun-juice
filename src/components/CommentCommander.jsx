import { Link } from "react-router-dom";
import "./CommentCommander.css";

const ETAPES = [
  {
    numero: "01",
    titre: "Choisissez",
    texte: "Parcourez nos produits et ouvrez la fiche de celui qui vous intéresse pour tout savoir sur sa fabrication.",
  },
  {
    numero: "02",
    titre: "Commandez",
    texte: "Ajoutez vos produits au panier ou commandez directement. Précisez la quantité, la date et votre besoin.",
  },
  {
    numero: "03",
    titre: "Nous confirmons",
    texte: "Nous vous répondons par WhatsApp pour confirmer le prix, la disponibilité et la remise de votre commande.",
  },
];

function CommentCommander() {
  return (
    <section className="comment">
      <div className="conteneur">
        <div className="comment__entete">
          <h2>Comment commander ?</h2>
        </div>

        <ol className="comment__etapes">
          {ETAPES.map((etape) => (
            <li key={etape.numero}>
              <span className="comment__numero">{etape.numero}</span>
              <h3>{etape.titre}</h3>
              <p>{etape.texte}</p>
            </li>
          ))}
        </ol>

        <div className="comment__action">
          <Link to="/produits" className="bouton">Voir nos produits</Link>
        </div>
      </div>
    </section>
  );
}

export default CommentCommander;