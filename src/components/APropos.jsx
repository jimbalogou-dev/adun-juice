import { Link } from "react-router-dom";
import contact from "../data/contact";
import apropos from "../data/apropos";
import catalogue from "../data/catalogue";
import banniere from "../assets/produits/jus.webp";
import "./APropos.css";

const PRODUITS = [
  {
    id: "jus",
    titre: "Les jus de fruits",
    texte:
      "Une gamme de boissons fruitées aux saveurs variées, conçues pour accompagner vos journées. Découvrez notamment nos associations telles que l'ananas-menthe, l'ananas-pastèque et l'ananas-gingembre, selon les variétés disponibles.",
  },
  {
    id: "yaourts",
    titre: "Les yaourts",
    texte:
      "Des yaourts gourmands déclinés en différentes saveurs, notamment chocolat, menthe et vanille, pour varier les plaisirs et profiter d'une pause savoureuse.",
  },
  {
    id: "salade-de-fruits",
    titre: "Les salades de fruits",
    texte:
      "Des compositions fruitées aux couleurs et aux textures variées, préparées pour offrir une expérience gourmande et mettre en valeur la diversité des fruits.",
  },
];

const ENGAGEMENTS = [
  {
    titre: "La qualité",
    texte: "Porter une attention constante aux ingrédients et aux conditions de préparation de nos produits.",
  },
  {
    titre: "La diversité",
    texte: "Proposer plusieurs saveurs et des associations adaptées aux différentes préférences.",
  },
  {
    titre: "La satisfaction client",
    texte: "Écouter les besoins de notre clientèle et chercher à améliorer continuellement notre offre.",
  },
  {
    titre: "La présentation",
    texte: "Soigner le conditionnement et la mise en valeur de nos produits.",
  },
  {
    titre: "L'amélioration continue",
    texte: "Faire évoluer nos créations et nos services pour mieux répondre aux attentes du marché.",
  },
];

function APropos() {
  return (
    <>
      {/* 1. Bannière */}
      <header
        className="apropos__banniere"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 39, 35, 0.62), rgba(31, 39, 35, 0.62)), url(${banniere})`,
        }}
      >
        <div className="conteneur">
          <h1>À propos d'Adùn Juice</h1>
          <p className="apropos__accroche">
            Adùn Juice, la fraîcheur qui donne du goût à vos journées.
          </p>
        </div>
      </header>

      {/* 2. Histoire et mission */}
      <section className="apropos__histoire">
        <div className="conteneur apropos__histoire-grille">
          <div className="apropos__histoire-texte">
            <h2>Notre histoire et notre mission</h2>

            <h3>Notre histoire</h3>
            <p>
              Adùn Juice est une entreprise spécialisée dans la production et la
              commercialisation de boissons et de préparations fruitées, notamment des jus de
              fruits, des yaourts et des salades de fruits. Notre ambition est de proposer des
              produits savoureux, accessibles et préparés avec soin, afin d'apporter une touche
              de fraîcheur et de plaisir aux petits comme aux grands.
            </p>
            <p>
              À travers nos différentes créations, nous mettons les fruits et leurs saveurs à
              l'honneur en proposant une variété de produits adaptés aux envies et aux moments
              de consommation de chacun. Des jus fruités aux associations originales, en passant
              par nos yaourts gourmands et nos salades de fruits colorées, nous souhaitons faire
              de chaque dégustation une expérience agréable.
            </p>

            <h3>Notre mission</h3>
            <p>
              Notre mission est de rendre les plaisirs fruités plus accessibles au quotidien, en
              proposant une gamme variée de produits qui allient goût, fraîcheur et qualité de
              préparation.
            </p>
            <p>
              Nous nous engageons à accorder une attention particulière au choix des ingrédients,
              à la préparation de nos produits, à leur présentation et à la satisfaction de nos
              clients. Chaque produit est pensé pour offrir un moment de plaisir, que ce soit au
              petit-déjeuner, pendant une pause, lors d'un repas ou à l'occasion d'un événement.
            </p>

            <h3>Notre vision</h3>
            <p>
              Nous ambitionnons de faire d'Adùn Juice une marque reconnue pour la qualité de ses
              produits, la diversité de son offre et la confiance qu'elle inspire à ses clients.
            </p>
            <p>
              Notre vision est de développer une entreprise moderne et dynamique, capable de
              répondre aux attentes d'une clientèle variée, tout en valorisant les saveurs des
              fruits et les possibilités qu'offre leur transformation.
            </p>
          </div>

          <aside className="apropos__bref">
            <dl>
              <div>
                <dt>Domaine d'activité</dt>
                <dd>Production et commercialisation de jus de fruits, yaourts et salades de fruits et pleins d'autres</dd>
              </div>
              <div>
                <dt>Responsable</dt>
                <dd>{contact.responsable}</dd>
              </div>
              <div>
                <dt>Siège</dt>
                <dd>{contact.adresse}</dd>
              </div>
              <div>
                <dt> Année de Création</dt>
                <dd> Créer en 2024</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* 3. Nos produits */}
      <section className="apropos__produits">
        <div className="conteneur">
          <h2>Une gamme fruitée pour chaque moment</h2>

          <div className="apropos__produits-grille">
            {PRODUITS.map((p) => {
              const produit = catalogue.find((c) => c.id === p.id);
              return (
                <article key={p.id}>
                  <Link to={`/produits/${p.id}`} className="apropos__produit-image">
                    <img src={produit.image} alt={produit.alt} loading="lazy" />
                  </Link>
                  <h3>{p.titre}</h3>
                  <p>{p.texte}</p>
                  <Link to={`/produits/${p.id}`} className="apropos__lien">
                    Découvrir →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Nos engagements */}
      <section className="apropos__engagements">
        <div className="conteneur">
          <h2>Nos engagements</h2>
          <p className="apropos__engagements-intro">
            Chez Adùn Juice, nous accordons une importance particulière à :
          </p>

          <ul>
            {ENGAGEMENTS.map((e, i) => (
              <li key={e.titre}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Pourquoi choisir Adùn Juice */}
      <section className="apropos__choisir">
        <div className="conteneur apropos__choisir-contenu">
          <h2>Pourquoi choisir Adùn Juice ?</h2>
          <p>
            Choisir Adùn Juice, c'est découvrir une gamme de produits fruités et gourmands,
            profiter d'un choix de saveurs variées et faire confiance à une entreprise qui
            souhaite placer la satisfaction de ses clients au cœur de ses priorités.
          </p>
          <p>
            Que vous recherchiez une boisson fruitée pour vous rafraîchir, un yaourt pour une
            pause gourmande ou une salade de fruits pour accompagner votre journée, Adùn Juice
            vous invite à découvrir ses produits et à trouver les saveurs qui vous correspondent.
          </p>

          <h3>Adùn Juice, la fraîcheur à partager</h3>
          <p>
            Notre aventure se construit avec nos clients, nos partenaires et toutes les
            personnes qui apprécient les plaisirs fruités. Nous souhaitons continuer à grandir,
            à innover et à proposer des produits qui trouvent naturellement leur place dans vos
            habitudes.
          </p>

          <p className="apropos__devise">Adùn Juice : buvez frais, savourez chaque instant !</p>
          <p>
            Découvrez notre gamme de produits et contactez-nous pour toute demande
            d'information, de commande ou de partenariat.
          </p>

          <div className="apropos__boutons">
            <Link to="/produits" className="bouton">Découvrir nos produits</Link>
            <Link to="/commander" className="bouton bouton--contour">Passer une commande</Link>
            <Link to="/contact" className="bouton bouton--contour">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default APropos;