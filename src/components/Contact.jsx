import { useState } from "react";
import { Link } from "react-router-dom";
import contact from "../data/contact";
import { lienWhatsApp } from "../utils/whatsapp";
import { FORMSPREE_URL } from "../config";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ nom: "", telephone: "", sujet: "Question sur un produit", message: "" });
  const [statut, setStatut] = useState("saisie"); // saisie | envoi | termine
  const [resultat, setResultat] = useState({ lien: "", email: "inactif" });

  const lienCarte = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.adresse)}`;

  const modifier = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const construireMessage = () =>
    [
      "Bonjour Adùn Juice,",
      `Sujet : ${form.sujet}`,
      "",
      form.message,
      "",
      `Nom : ${form.nom}`,
      `Téléphone : ${form.telephone}`,
    ].join("\n");

  const envoyer = async (e) => {
    e.preventDefault();
    setStatut("envoi");

    const lien = lienWhatsApp(construireMessage());
    const fenetre = window.open("", "_blank");

    let email = "inactif";
    if (FORMSPREE_URL) {
      try {
        const reponse = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: `Message de ${form.nom} (${form.sujet})`,
            nom: form.nom,
            telephone: form.telephone,
            sujet: form.sujet,
            message: form.message,
          }),
        });
        email = reponse.ok ? "ok" : "echec";
      } catch {
        email = "echec";
      }
    }

    if (fenetre) fenetre.location.href = lien;
    setResultat({ lien, email });
    setStatut("termine");
  };

  return (
    <section className="contact">
      <div className="conteneur">
        <h1>Contactez Adùn Juice</h1>
        <p className="contact__intro">
          Une question sur nos produits, une commande ou un événement à préparer ?
          Écrivez-nous, nous vous répondons pour vous accompagner.
        </p>

        <div className="contact__grille">
          {/* Coordonnées */}
          <div className="contact__infos">
            <h2>Nos coordonnées</h2>

            <dl>
              <div>
                <dt>Adresse</dt>
                <dd>
                  {contact.adresse}
                  <a href={lienCarte} target="_blank" rel="noopener noreferrer">
                    Voir sur Google Maps
                  </a>
                </dd>
              </div>

              <div>
                <dt>Horaires</dt>
                <dd>{contact.horaires}</dd>
              </div>

              <div>
                <dt>Téléphone</dt>
                <dd>
                  {contact.telephone}
                  <span className="contact__actions">
                    <a href={`tel:${contact.telephoneLien}`}>Appeler</a>
                    <a href={lienWhatsApp("Bonjour Adùn Juice")} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </span>
                </dd>
              </div>

              <div>
                <dt>Responsable</dt>
                <dd>{contact.responsable}</dd>
              </div>
            </dl>
          </div>

          {/* Formulaire */}
          <div className="contact__formulaire">
            {statut === "termine" ? (
              <div className="contact__merci">
                <h2>Votre message est prêt</h2>
                <p>
                  Merci {form.nom}. Envoyez le message WhatsApp pré-rempli pour que nous le
                  recevions. S'il ne s'est pas ouvert, cliquez ci-dessous.
                </p>
                {resultat.email === "ok" && (
                  <p className="contact__info">Votre message a aussi été envoyé par e-mail.</p>
                )}
                {resultat.email === "echec" && (
                  <p className="contact__info contact__info--alerte">
                    L'envoi par e-mail n'a pas fonctionné. Utilisez WhatsApp pour nous écrire.
                  </p>
                )}
                <a className="bouton" href={resultat.lien} target="_blank" rel="noopener noreferrer">
                  Envoyer sur WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={envoyer}>
                <h2>Envoyez-nous un message</h2>

                <div className="contact__champs">
                  <label>
                    Nom et prénom *
                    <input type="text" name="nom" value={form.nom} onChange={modifier} required autoComplete="name" />
                  </label>
                  <label>
                    Téléphone / WhatsApp *
                    <input type="tel" name="telephone" value={form.telephone} onChange={modifier} required autoComplete="tel" />
                  </label>

                  <label className="contact__large">
                    Sujet
                    <select name="sujet" value={form.sujet} onChange={modifier}>
                      <option>Question sur un produit</option>
                      <option>Commande ou événement</option>
                      <option>Suivi d'une commande</option>
                      <option>Autre</option>
                    </select>
                  </label>

                  <label className="contact__large">
                    Votre message *
                    <textarea name="message" rows="6" value={form.message} onChange={modifier} required />
                  </label>
                </div>

                <button type="submit" className="bouton" disabled={statut === "envoi"}>
                  {statut === "envoi" ? "Envoi en cours…" : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;