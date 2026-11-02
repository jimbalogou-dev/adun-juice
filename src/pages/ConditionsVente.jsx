import contact from "../data/contact";
import "./ConditionsVente.css";

function ConditionsVente() {
  return (
    <section className="cgv">
      <div className="conteneur cgv__contenu">
        <h1>Conditions générales de vente</h1>

        <h2>1. Présentation</h2>
        <p>
          Adùn Juice propose des jus de fruits frais et pasteurisés, des yaourts et
          des salades de fruits. L'entreprise est basée à {contact.adresse} par M. / Mme : {contact.responsable}.
        </p>

        <h2>2. Produits</h2>
        <p>
          Les produits présentés sur le site sont décrits avec le plus grand soin.
          Les photos sont données à titre indicatif et peuvent légèrement différer
          du produit livré. Nos produits sont préparés sans sucre ajouté, sans
          additifs et sans conservateurs.
        </p>

        <h2>3. Prix</h2>
        <p>
          Les prix sont indiqués en francs CFA (F CFA). Ils peuvent évoluer ; le prix
          applicable est celui confirmé par Adùn Juice au moment de la commande.
          Pour les salades de fruits, la commande minimale est de 3 pots.
        </p>

        <h2>4. Commande</h2>
        <p>
          Ce site est un site vitrine : il n'y a pas de panier ni de paiement en
          ligne. Les commandes se font par WhatsApp ou par téléphone au{" "}
          {contact.telephone}. La commande est définitive une fois confirmée par
          Adùn Juice (produits, quantités, prix, mode de remise).
        </p>

        <h2>5. Paiement</h2>
        <p>
          Modes de paiement acceptés : [À confirmer : espèces, mobile money, etc.].
          Moment du paiement : [À confirmer : à la commande, à la livraison].
        </p>

        <h2>6. Livraison ou retrait</h2>
        <p>
          Zones desservies : [À confirmer]. Frais de livraison : [À confirmer].
          Délais : [À confirmer]. Retrait possible sur place à {contact.adresse} :
          [À confirmer].
        </p>

        <h2>7. Produits frais : conservation</h2>
        <p>
          Nos produits sont frais et doivent être conservés au froid. Durée de
          conservation conseillée : [À confirmer]. Une fois remis au client, la
          conservation devient sa responsabilité.
        </p>

        <h2>8. Annulation, retours et réclamations</h2>
        <p>
          Les produits étant périssables, [À confirmer : conditions d'annulation et
          d'échange]. En cas de problème avec une commande (produit non conforme,
          erreur), contactez-nous le plus vite possible au {contact.telephone}.
        </p>

        <h2>9. Contact</h2>
        <p>
          Pour toute question : {contact.telephone} (appel ou WhatsApp).
        </p>

        <h2>10. Droit applicable</h2>
        <p>[À confirmer : droit applicable et juridiction compétente.]</p>
      </div>
    </section>
  );
}

export default ConditionsVente;