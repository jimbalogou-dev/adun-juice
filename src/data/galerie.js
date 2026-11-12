import photo1 from "../assets/galerie/photo-1.jpg";
import photo2 from "../assets/galerie/photo-2.webp";
import photo3 from "../assets/galerie/photo-3.webp";
import photo4 from "../assets/galerie/Photo-4.jpg";
import photo5 from "../assets/galerie/Photo-5.jpg";
import photo6 from "../assets/galerie/Photo-6.jpg";
import photo7 from "../assets/galerie/Photo-7.jpg";
import photo8 from "../assets/galerie/Photo-8.jpg";
import photo11 from "../assets/galerie/Photo-11.jpg";


const galerie = [
  {
    id: 1,
    image: photo2,
    alt: "Bouteille de jus d'ananas au gingembre Adùn Juice",
    titre: "Jus d'ananas gingembre",
    description: "Une association d'ananas et de gingembre pour une boisson fraîche et pleine de caractère.",
    detail: [
      "À savourer lors d'une pause dans la journée, au petit-déjeuner ou pour accompagner un repas, ce jus apporte une touche de fraîcheur à vos moments de dégustation.",
      "Il associe la saveur fruitée de l'ananas à la note plus prononcée du gingembre, pour une dégustation pleine de caractère. Son format en bouteille facilite le service et la conservation.",
    ],
    ingredients: "Ananas, gingembre...",
    produit: "jus",
  },
  {
    id: 2,
    image: photo5,
    alt: "Bouteilles de jus d'ananas à la pastèque Adùn Juice",
    titre: "Jus d'ananas pastèque",
    description: "Une association fruitée d'ananas et de pastèque pour une pause rafraîchissante.",
    detail: [
      "Un jus idéal pour accompagner les repas, les pauses gourmandes, les moments de détente ou les rencontres entre amis et en famille.",
      "Il associe l'ananas et la pastèque pour varier les plaisirs et profiter d'une boisson rafraîchissante. Présenté dans une bouteille pratique, il s'intègre facilement à vos habitudes de consommation.",
    ],
    ingredients: "Ananas, pastèque...",
    produit: "jus",
  },
  {
    id: 3,
    image: photo6,
    alt: "Bouteille de jus d'ananas au pastèque Adùn Juice",
    titre: "Jus d'ananas pastèque",
    description: "Le jus d'ananas, une boisson fruitée naturelle aux notes aromatiques.",
    detail: [
      "Une composition qui convient aux personnes qui apprécient les boissons fruitées naturelles : l'ananas dans une boisson aux notes aromatiques et au caractère affirmé.",
      "Il se sert frais, pour accompagner un repas ou agrémenter une pause gourmande.",
    ],
    ingredients: "Ananas, pastèque...",
    produit: "jus",
  },
  {
    id: 4,
    image: photo11,
    alt: "Les boissons Adùn Juice de différentes couleurs et saveurs, présents sur vos événements",
    titre: "Boissons pour vos événements",
    description: "Des boissons idéales pour vos événements.",
    detail: [
      "Une expérience rafraîchissante, directement sur votre lieu de réception.",
      "Chez Adùn Juice, nous accompagnons vos événements avec une sélection de jus de fruits naturels et de yaourts.",
      "Grâce à notre service de distribution sur place, vos invités peuvent profiter de leurs boissons préférées, servies directement dans des gobelets avec pailles.",
      "Mariages, anniversaires, séminaires, formations ou cérémonies : nous adaptons notre prestation à vos besoins et au nombre de participants.",
      "Vous organisez, Adùn s'occupe de rafraîchir vos invités !",
    ],
    ingredients: "Selon le jus choisi.",
    produit: "jus",
  },
  {
    id: 5,
    image: photo7,
    alt: "Bouteilles de jus d'ananas à la menthe Adùn Juice de couleur rosée",
    titre: "Pack de jus d'ananas à menthe",
    description: "Une boisson fruitée à base d'ananas, présentée dans un format pratique pour toutes vos occasions.",
    detail: [
      "Son apparence colorée, de teinte rosée, attire le regard et apporte de la variété à la gamme de jus Adùn Juice. Il se sert frais, notamment lors des repas en famille, des rencontres ou des événements.",
      "Plusieurs bouteilles peuvent être prévues pour les commandes en quantité, selon les formats et les disponibilités.",
    ],
    ingredients: "Ananas, menthe",
    produit: "jus",
  },
  {
    id: 6,
    image: photo3,
    alt: "Gamme de yaourts Adùn Juice comprenant plusieurs variétés d'ananas, de menthe, de pastèque et de gingembre",
    titre: "Une gamme de yaourts aux différentes saveurs",
    description: "Découvrez la gamme de yaourts Adùn, préparés pour vous offrir un délicieux moment de gourmandise.",
    detail: [
      "Vanille, chocolat ou menthe : choisissez la saveur qui vous fait plaisir et profitez d’une texture onctueuse et d’un goût savoureux.",
      "Que ce soit pour votre petit-déjeuner, une pause gourmande ou pour accompagner vos moments de partage, les yaourts Adùn trouvent leur place à chaque occasion.",
      "Nos yaourts sont préparés avec soin, en respectant les standards de qualité et d’hygiène, pour vous garantir une expérience gustative agréable et satisfaisante.",
      "Une envie de douceur ? Laissez-vous tenter par Adùn !",
    ],
    ingredients: "Lait, saveur au choix (vanille, chocolat ou menthe)",
    produit: "yaourts",
  },
  {
    id: 7,
    image: photo1,
    alt: "Plusieurs bouteilles de jus d'ananas à la pastèque Adùn Juice préparées pour des commandes",
    titre: "Jus d'ananas pastèque en série",
    description: "Le jus d'ananas à la pastèque, une option pour vos repas, cérémonies et commandes groupées.",
    detail: [
      "Cette option intéressera les familles, les anniversaires, les cérémonies, les réunions professionnelles et les événements nécessitant plusieurs boissons. L'ananas associé à la pastèque propose une alternative colorée aux boissons classiques.",
      "Pour toute commande en quantité, renseignez-vous auprès d'Adùn Juice sur les volumes disponibles, les tarifs applicables et les modalités de livraison ou de retrait.",
    ],
    ingredients: "Ananas, gingembre...",
    produit: "jus",
  },
  {
    id: 8,
    image: photo8,
    alt: "Assortiment de bouteilles de jus Adùn Juice de différentes couleurs rangées dans un réfrigérateur",
    titre: "Assortiment de jus à conserver au frais",
    description: "Retrouvez les différentes variétés de jus Adùn Juice et choisissez les boissons qui accompagneront vos moments de partage.",
    detail: [
      "Les différentes couleurs permettent de distinguer visuellement plusieurs préparations et de proposer un choix adapté aux préférences de chacun. Cet assortiment répond aux besoins des particuliers comme à ceux des clients qui commandent plusieurs boissons pour une occasion particulière.",
      "Pour profiter pleinement de nos jus, conservez-les au frais, selon nos recommandations de conservation. Les saveurs et les quantités disponibles sont précisées au moment de la commande.",
    ],
    ingredients: "Selon la variété choisie [À confirmer...]",
    produit: "jus",
  },
  {
    id: 9,
    image: photo4,
    alt: "Lots de bouteilles en verre de jus Adùn Juice avec capsules dorées et étiquettes de marque",
    titre: "Nos jus en bouteilles de verre",
    description: "Les jus Adùn Juice en bouteilles de verre, une présentation adaptée aux commandes groupées et aux professionnels.",
    detail: [
      "Cette présentation en bouteilles de verre, avec capsules dorées et étiquettes de la marque, convient aux restaurants, aux points de vente, aux événements et aux clients souhaitant commander plusieurs bouteilles à la fois. Les lots facilitent aussi l'organisation du stockage et de la distribution.",
      "La variété des jus présents dans chaque lot est précisée lors de la commande, selon les références et les disponibilités.",
    ],
    ingredients: "Selon la variété choisie...",
    produit: "jus",
  },
];

export default galerie;