import catalogue from "../data/catalogue";
import ProduitCard from "./ProduitCard";
import "./Produits.css";

function Produits() {
  return (
    <section className="produits">
      <div className="conteneur">
        <div className="produits__entete">
          <h2>Nos produits les plus vendus</h2>
          <p>Des produits savoureux, sains et naturels, préparés avec soin.</p>
        </div>

        <div className="produits__grille">
          {catalogue.map((produit) => (
            <ProduitCard key={produit.id} produit={produit} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Produits;