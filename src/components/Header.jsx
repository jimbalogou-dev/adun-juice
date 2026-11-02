import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { usePanier } from "../context/PanierContext";
import logo from "../assets/logo/logo.webp";
import "./Header.css";

function Header() {
  const [ouvert, setOuvert] = useState(false);
  const fermer = () => setOuvert(false);
  const { nombreArticles } = usePanier();

  return (
    <header className="header">
      <div className="conteneur header__interieur">
        <Link to="/" className="header__logo" onClick={fermer}>
          <img src={logo} alt="Adùn Juice" width="516" height="356" />
        </Link>

        <nav
          id="menu-principal"
          className={`header__menu ${ouvert ? "header__menu--ouvert" : ""}`}
          aria-label="Navigation principale"
        >
          <ul>
            <li><NavLink to="/" end onClick={fermer}>Accueil</NavLink></li>
            <li><NavLink to="/produits" onClick={fermer}>Nos produits</NavLink></li>
            <li><NavLink to="/a-propos" onClick={fermer}>A propos</NavLink></li>
            <li><NavLink to="/contact" onClick={fermer}>Contact</NavLink></li>
          </ul>
        </nav>

        <NavLink
          to="/panier"
          className="header__panier"
          onClick={fermer}
          aria-label={
            nombreArticles > 0
              ? `Panier, ${nombreArticles} article${nombreArticles > 1 ? "s" : ""}`
              : "Panier"
          }
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {nombreArticles > 0 && (
            <span className="header__badge">{nombreArticles}</span>
          )}
        </NavLink>

        <button
          type="button"
          className={`header__burger ${ouvert ? "header__burger--ouvert" : ""}`}
          aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={ouvert}
          aria-controls="menu-principal"
          onClick={() => setOuvert(!ouvert)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;