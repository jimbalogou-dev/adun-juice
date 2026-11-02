import { useState } from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../context/PanierContext";
import { formaterPrix } from "../utils/prix";
import { lienWhatsApp } from "../utils/whatsapp";
import { FORMSPREE_URL } from "../config";
import "./Commander.css";

const LIMITE_MESSAGE = 500;

function Commander() {
  const { lignes, total, changerQuantite, retirer, vider } = usePanier();

  const [form, setForm] = useState({ nom: "", telephone: "", email: "", date: "", message: "" });
  const [statut, setStatut] = useState("saisie"); // saisie | envoi | termine
  const [resultat, setResultat] = useState({ lien: "", email: "inactif" });

  const panierVide = lignes.length === 0;

  const modifier = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const dateLisible = () =>
    form.date
      ? new Date(form.date).toLocaleDateString("fr-FR", { dateStyle: "full", timeZone: "UTC" })
      : "";

  const textePanier = () =>
    lignes
      .map((l) => `- ${l.produit.nom} : ${l.quantite} x ${formaterPrix(l.produit.prix)} = ${formaterPrix(l.sousTotal)}`)
      .join("\n");

  const construireMessage = () =>
    [
      "Bonjour Adùn Juice, je voudrais passer la commande suivante :",
      "",
      textePanier(),
      `Total : ${formaterPrix(total)}`,
      "",
      `Nom : ${form.nom}`,
      `Téléphone : ${form.telephone}`,
      form.date ? `Date de récupération / de l'événement : ${dateLisible()}` : null,
      form.message ? `Message : ${form.message}` : null,
    ]
      .filter((ligne) => ligne !== null)
      .join("\n");

  const envoyer = async (e) => {
    e.preventDefault();
    if (panierVide) return;

    setStatut("envoi");

    const lien = lienWhatsApp(construireMessage());

    // On ouvre l'onglet pendant le clic pour éviter le blocage du navigateur
    const fenetre = window.open("", "_blank");

    let email = "inactif";
    if (FORMSPREE_URL) {
      try {
        const donnees = {
          _subject: `Nouvelle commande de ${form.nom}`,
          nom: form.nom,
          telephone: form.telephone,
          produits: textePanier(),
          total: formaterPrix(total),
          date: dateLisible() || "Non précisée",
          message: form.message || "Aucun message",
        };
        if (form.email) donnees.email = form.email;

        const reponse = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(donnees),
        });
        email = reponse.ok ? "ok" : "echec";
      } catch {
        email = "echec";
      }
    }

    if (fenetre) fenetre.location.href = lien;

    setResultat({ lien, email });
    setStatut("termine");
    vider();
  };

  /* ===== Écran de confirmation ===== */
  if (statut === "termine") {
    return (
      <section className="commander">
        <div className="conteneur cmd-fin">
          <span className="cmd-fin__icone" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <h1>Votre commande est prête</h1>
          <p>
            Merci {form.nom}. Pour que nous recevions votre commande, envoyez le message
            WhatsApp pré-rempli. S'il ne s'est pas ouvert, cliquez sur le bouton ci-dessous.
          </p>

          {resultat.email === "ok" && (
            <p className="cmd-fin__info">Votre commande a aussi été envoyée par e-mail.</p>
          )}
          {resultat.email === "echec" && (
            <p className="cmd-fin__info cmd-fin__info--alerte">
              L'envoi par e-mail n'a pas fonctionné. Utilisez WhatsApp pour nous envoyer votre commande.
            </p>
          )}

          <div className="cmd-fin__boutons">
            <a className="bouton" href={resultat.lien} target="_blank" rel="noopener noreferrer">
              Envoyer ma commande sur WhatsApp
            </a>
            <Link className="bouton bouton--contour" to="/">Retour à l'accueil</Link>
          </div>
        </div>
      </section>
    );
  }

  /* ===== Page de commande ===== */
  return (
    <section className="commander">
      <div className="conteneur">

        <h1>Finaliser ma commande</h1>

        <form className="cmd-grille" onSubmit={envoyer}>
          <div className="cmd-colonne">
            {/* 1. Produits */}
            <div className="cmd-carte">
              <h2 className="cmd-carte__titre">
                <span className="cmd-num">1</span> Vos produits
              </h2>

              {panierVide ? (
                <div className="cmd-vide">
                  <p>Vous n'avez pas encore choisi de produit.</p>
                  <Link to="/produits" className="bouton">Voir nos produits</Link>
                </div>
              ) : (
                <ul className="cmd-lignes">
                  {lignes.map(({ id, produit, quantite, sousTotal }) => (
                    <li key={id} className="cmd-ligne">
                      <img src={produit.image} alt={produit.alt} />

                      <div className="cmd-ligne__info">
                        <strong>{produit.nom}</strong>
                        <span>
                          {formaterPrix(produit.prix)} {produit.unite}
                        </span>
                        {produit.quantiteMin > 1 && <small>Minimum : {produit.quantiteMin}</small>}
                        <button type="button" className="cmd-retirer" onClick={() => retirer(id)}>
                          Retirer
                        </button>
                      </div>

                      <div className="cmd-quantite">
                        <button
                          type="button"
                          onClick={() => changerQuantite(id, quantite - 1)}
                          disabled={quantite <= produit.quantiteMin}
                          aria-label={`Diminuer la quantité de ${produit.nom}`}
                        >
                          −
                        </button>
                        <span>{quantite}</span>
                        <button
                          type="button"
                          onClick={() => changerQuantite(id, quantite + 1)}
                          aria-label={`Augmenter la quantité de ${produit.nom}`}
                        >
                          +
                        </button>
                      </div>

                      <p className="cmd-ligne__total">{formaterPrix(sousTotal)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* 2. Coordonnées */}
            <div className="cmd-carte">
              <h2 className="cmd-carte__titre">
                <span className="cmd-num">2</span> Vos coordonnées
              </h2>

              <div className="cmd-champs">
                <label>
                  Nom et prénom *
                  <input type="text" name="nom" value={form.nom} onChange={modifier} required autoComplete="name" />
                </label>
                <label>
                  Téléphone / WhatsApp *
                  <input type="tel" name="telephone" value={form.telephone} onChange={modifier} required autoComplete="tel" />
                </label>
                <label className="cmd-champs__large">
                  E-mail <span>(facultatif)</span>
                  <input type="email" name="email" value={form.email} onChange={modifier} autoComplete="email" />
                </label>
              </div>
            </div>

            {/* 3. Précisions */}
            <div className="cmd-carte">
              <h2 className="cmd-carte__titre">
                <span className="cmd-num">3</span> Précisions sur votre commande
              </h2>

              <div className="cmd-champs">
                <label className="cmd-champs__large">
                  Date de récupération ou de l'événement <span>(facultatif)</span>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={modifier}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  <small>Indiquez-la si votre commande est destinée à une cérémonie, un anniversaire ou une date précise.</small>
                </label>

                <label className="cmd-champs__large">
                  Votre message <span>(facultatif)</span>
                  <textarea
                    name="message"
                    rows="5"
                    maxLength={LIMITE_MESSAGE}
                    value={form.message}
                    onChange={modifier}
                    placeholder="Parlez-nous de votre événement, de votre budget prévu et de ce que vous attendez."
                  />
                  <small className="cmd-compteur">
                    {form.message.length}/{LIMITE_MESSAGE}
                  </small>
                </label>
              </div>
            </div>
          </div>

          {/* Récapitulatif */}
          <aside className="cmd-resume">
            <h2>Récapitulatif</h2>

            {panierVide ? (
              <p className="cmd-resume__vide">Aucun produit pour le moment.</p>
            ) : (
              <ul>
                {lignes.map((l) => (
                  <li key={l.id}>
                    <span>
                      {l.produit.nom} × {l.quantite}
                    </span>
                    <strong>{formaterPrix(l.sousTotal)}</strong>
                  </li>
                ))}
              </ul>
            )}

            <p className="cmd-resume__total">
              <span>Total</span>
              <strong>{formaterPrix(total)}</strong>
            </p>

            <button type="submit" className="bouton" disabled={panierVide || statut === "envoi"}>
              {statut === "envoi" ? "Envoi en cours…" : "Envoyer ma commande"}
            </button>

            <p className="cmd-resume__note">
              Prix, disponibilité et mode de remise sont confirmés par Adùn Juice avant validation.
            </p>
          </aside>
        </form>
      </div>
    </section>
  );
}

export default Commander;