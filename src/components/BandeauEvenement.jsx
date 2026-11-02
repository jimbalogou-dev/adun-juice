import { Link } from "react-router-dom";
import "./BandeauEvenement.css";

function BandeauEvenement() {
  return (
    <section className="evenement">
      <div className="conteneur evenement__contenu">
        <h2>Un événement à préparer ?</h2>
        <p>
          Cérémonie, anniversaire, réunion… Dites-nous la date et votre budget,
          nous préparons vos jus, yaourts et salades de fruits.
        </p>
        <Link to="/commander" className="bouton bouton--ocre">
          Passer une commande
        </Link>
      </div>
    </section>
  );
}

export default BandeauEvenement;