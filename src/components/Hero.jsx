   import { Link } from "react-router-dom";
import photo from "../assets/galerie/photo-2.webp";
import { lienWhatsApp } from "../utils/whatsapp";
import "./Hero.css";

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="conteneur hero__interieur">
        <div className="hero__texte">
          <p className="hero__badge">Jus, yaourts, salades de fruits</p>

          <h1>
            Avec Adùn, buvez frais, <span>buvez sain</span>
          </h1>

          <p className="hero__description">
            Des jus de fruits frais et pasteurisés naturels, sans sucre, sans
            additifs et sans conservateurs, des yaourts onctueux de plusieurs
            saveurs ainsi que des salades de fruits, le tout en fonction de
            votre budget.
          </p>

          <div className="hero__boutons">
               <Link to="/produits" className="bouton">Découvrir nos produits</Link>
            <a
              href={lienWhatsApp("Bonjour, je voudrais passer une commande.")}
              className="bouton bouton--contour"
            >
              Contacter nous sur WhatsApp
            </a>
          </div>
        </div>

        <div className="hero__image">
          <img
            src={photo}
            alt="Trois bouteilles de jus Adùn Juice : ananas menthe, pastèque, ananas gingembre"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;