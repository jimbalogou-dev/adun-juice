import Hero from "../components/Hero";
import Engagements from "../components/Engagements";
import Produits from "../components/Produits";
import CommentCommander from "../components/CommentCommander";
import BandeauEvenement from "../components/BandeauEvenement";

function PageAccueil() {
  return (
    <>
      <Hero />
      <Engagements />
      <Produits />
      <CommentCommander />
      <BandeauEvenement />
    </>
  );
}

export default PageAccueil;