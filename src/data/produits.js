// Les produits du client. Pour changer un prix ou un texte, on modifie UNIQUEMENT ce fichier.
import jus from "../assets/produits/jus.webp";
import yaourts from "../assets/produits/yaourts.webp";
import salade from "../assets/produits/salade.webp";

const produits = [
  {
    id: 1,
    nom: "Jus de fruits",
    description: "Le pack de 6 jus pasteurisés, naturels, sans sucre ajouté.",
    prix: "2 500 F CFA",
    precisionPrix: "le pack de 6",
    image: jus,
    alt: "Bouteilles de jus de fruits Adùn Juice",
    message: "Bonjour, je voudrais commander un pack de jus de fruits.",
  },
  {
    id: 2,
    nom: "Yaourts onctueux",
    description:
      "3 saveurs : vanille, chocolat, menthe. D'autres contenants sont disponibles à la demande en fonction de votre budget.",
    prix: "500 F CFA",
    precisionPrix: "le petit pot",
    image: yaourts,
    alt: "Yaourts onctueux Adùn Juice",
    message: "Bonjour, je voudrais commander des yaourts.",
  },
  {
    id: 3,
    nom: "Salade de fruits",
    description:
      "Choisissez vos fruits et composez votre salade, à partir de 3 pots minimum.",
    prix: "À partir de 1 000 F CFA",
    precisionPrix: "",
    image: salade,
    alt: "Salade de fruits Adùn Juice",
    message: "Bonjour, je voudrais commander une salade de fruits.",
  },
];

export default produits;
