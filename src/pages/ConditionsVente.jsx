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
          Un acompte de 50 % du montant total est à régler au moment de la commande.
          Le solde de 50 % est dû à la livraison ou au retrait de la commande. Les
          moyens de paiement sont convenus avec Adùn Juice lors de la confirmation
          de la commande.
        </p>

        <h2>6. Livraison ou retrait</h2>
        <p>
          Zones desservies : Calavi, Cotonou et environs. Frais de livraison : [À confirmer à l'occasion de la commande].
          Délais : la date de livraison. Retrait possible sur place à {contact.adresse} :

        </p>

        <h2>7. Produits frais : conservation</h2>
        <p>
          Nos produits sont frais et doivent être conservés au froid. Durée de
          conservation conseillée : nos produits peuvent être conservés au froid pendant de bon moment que souhaité.
        </p>

        <h2>8. Annulation, retours et réclamations</h2>
        <p>
          Si le vous annulez une commande après le début de la production, l'acompte
          versé n'est pas remboursable. Si une commande confirmée n'est pas livrée
          du fait d'Adùn Juice, vous pouvez demander le remboursement des sommes
          déjà versées. En cas de produit non conforme ou d'erreur, contactez-nous
          dès que possible au {contact.telephone} afin que la situation soit examinée.
          Ces conditions s'appliquent sous réserve des dispositions légales en vigueur.
        </p>

        <h2>9. Contact</h2>
        <p>
          Pour toute question : {contact.telephone} (appel ou WhatsApp).
        </p>
      </div>
    </section>
  );
}

export default ConditionsVente;