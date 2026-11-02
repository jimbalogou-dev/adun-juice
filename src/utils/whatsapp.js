// Numéro WhatsApp au format international : 229 (Bénin) + numéro
const NUMERO = "2290162407267";

// Crée un lien WhatsApp, avec un message déjà écrit (facultatif)
export function lienWhatsApp(message = "") {
  const base = `https://wa.me/${NUMERO}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
