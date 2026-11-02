import catalogue from "./catalogue";
import galerie from "./galerie";

const parId = Object.fromEntries(catalogue.map((p) => [p.id, p]));

const duCatalogue = catalogue.map((p) => ({
  ...p,
  cle: p.id,
  lien: `/produits/${p.id}`,
  titre: p.nom,
}));

const delaGalerie = galerie.map((p) => {
  const parent = parId[p.produit];
  return {
    cle: `g-${p.id}`,
    lien: `/galerie/${p.id}`,
    nom: p.titre,
    titre: p.titre,
    image: p.image,
    alt: p.alt,
    prix: parent.prix,
    unite: parent.unite,
    quantiteMin: parent.quantiteMin,
  };
});

const tousLesProduits = [...duCatalogue, ...delaGalerie];

export default tousLesProduits;