import jus from "../assets/produits/jus.webp";
import yaourts from "../assets/produits/yaourts.webp";
import salade from "../assets/produits/salade.webp";

const catalogue = [
  {
    id: "jus",
    nom: "Pack de jus de fruits",
    image: jus,
    alt: "Bouteilles de jus d'ananas au gingembre Adùn Juice avec bouchons verts",
    resume: "Le pack de 6 jus d'ananas au gingembre, pasteurisés et sans sucre ajouté.",
    prix: 2500,
    unite: "le pack de 6",
    quantiteMin: 1,
    description: [
      "Retrouvez le jus d'ananas au gingembre Adùn Juice dans un format de bouteille pensé pour une présentation soignée et un service facile. Cette variante associe la saveur fruitée de l'ananas aux notes aromatiques du gingembre, pour une boisson à la belle couleur jaune doré.",
      "Son conditionnement est adapté au service à domicile, aux repas en famille et aux moments de partage. Il convient également aux commandes destinées à des réunions ou à de petites réceptions.",
      "Le pack permet de servir plusieurs portions, selon la contenance de la bouteille et la quantité souhaitée par personne. Les autres saveurs de la gamme peuvent être précisées à la commande.",
    ],
    ingredients: "Ananas, gingembre, menthe, pastèque",
    fabrication: [
      "Sélection et lavage des fruits [À confirmer]",
      "Extraction du jus [À confirmer : méthode d'extraction]",
      "Pasteurisation [À confirmer : température et durée]",
      "Mise en bouteille et refroidissement [À confirmer]",
    ],
  },
  {
    id: "yaourts",
    nom: "Les yaourts",
    image: yaourts,
    alt: "Bouteilles de yaourts Adùn Juice",
    resume: "Des yaourts onctueux en trois saveurs : chocolat, menthe et vanille.",
    prix: 500,
    unite: "le petit pot",
    quantiteMin: 1,
    description: [
      "Nos yaourts se dégustent au petit-déjeuner, au goûter ou à tout moment où vous souhaitez profiter d'une pause gourmande. Leur conditionnement permet de les servir facilement et de les emporter selon vos besoins.",
      "Plusieurs saveurs sont disponibles : chocolat, menthe et vanille. Les yaourts au chocolat séduiront les amateurs de douceur, tandis que la menthe et la vanille apportent fraîcheur et délicatesse.",
      "D'autres contenants sont possibles à la demande, selon votre budget.",
    ],
    ingredients: "Lait, saveur au choix (chocolat, menthe ou vanille)",
    fabrication: [
      "Préparation du lait [À confirmer]",
      "Fermentation [À confirmer]",
      "Ajout de la saveur choisie [À confirmer]",
      "Conditionnement et mise au frais [À confirmer]",
    ],
  },
  {
    id: "salade-de-fruits",
    nom: "La salade de fruits",
    image: salade,
    alt: "Salade de fruits Adùn Juice composée de morceaux de fruits frais aux couleurs variées",
    resume: "Un assortiment coloré de fruits découpés pour une pause gourmande, un dessert ou un moment de partage.",
    prix: 1000,
    unite: "le pot (à partir de 3 pots)",
    quantiteMin: 3,
    description: [
      "Apportez de la couleur et de la gourmandise à vos pauses avec la salade de fruits Adùn Juice. Ce mélange de fruits découpés met en valeur une diversité de couleurs, de formes et de textures.",
      "Elle est idéale pour les amateurs de fruits qui recherchent une dégustation variée et agréable : au petit-déjeuner, en dessert après un repas, au goûter ou lors d'une réception.",
      "Préparée et présentée dans un contenant adapté, elle constitue aussi une option intéressante pour les buffets, les réunions et les moments de partage. Vous choisissez vos fruits ; la commande minimale est de 3 pots.",
    ],
    ingredients: "Fruits frais au choix, notamment ananas, fraise, banane, orange, kiwi et raisin (selon la disponibilité)",
    fabrication: [
      "Choix des fruits avec vous [À confirmer]",
      "Lavage, épluchage et découpe [À confirmer]",
      "Mise en pots et au frais [À confirmer]",
    ],
  },
];

export default catalogue;