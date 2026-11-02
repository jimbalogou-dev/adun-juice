import { createContext, useContext, useEffect, useState } from "react";
import tousLesProduits from "../data/tousLesProduits";

const PanierContext = createContext(null);
const CLE = "adun-panier";

function lireSauvegarde() {
  try {
    const brut = localStorage.getItem(CLE);
    const donnees = brut ? JSON.parse(brut) : [];
    if (!Array.isArray(donnees)) return [];
    return donnees.filter((l) => tousLesProduits.some((p) => p.cle === l.id));
  } catch {
    return [];
  }
}

export function PanierProvider({ children }) {
  const [lignes, setLignes] = useState(lireSauvegarde);

  useEffect(() => {
    try {
      localStorage.setItem(CLE, JSON.stringify(lignes));
    } catch {
    }
  }, [lignes]);

  const trouver = (id) => tousLesProduits.find((p) => p.cle === id);

  const ajouter = (id, quantite) => {
    const produit = trouver(id);
    if (!produit) return;
    const qte = quantite ?? produit.quantiteMin;
    setLignes((prev) => {
      const existe = prev.find((l) => l.id === id);
      if (existe) {
        return prev.map((l) => (l.id === id ? { ...l, quantite: l.quantite + qte } : l));
      }
      return [...prev, { id, quantite: qte }];
    });
  };

  const changerQuantite = (id, quantite) => {
    const produit = trouver(id);
    if (!produit) return;
    const q = Math.max(produit.quantiteMin, Math.floor(Number(quantite)) || produit.quantiteMin);
    setLignes((prev) => prev.map((l) => (l.id === id ? { ...l, quantite: q } : l)));
  };

  const retirer = (id) => setLignes((prev) => prev.filter((l) => l.id !== id));
  const vider = () => setLignes([]);

  const detail = lignes.map((l) => {
    const produit = trouver(l.id);
    return { ...l, produit, sousTotal: produit.prix * l.quantite };
  });
  const total = detail.reduce((somme, l) => somme + l.sousTotal, 0);
  const nombreArticles = lignes.reduce((somme, l) => somme + l.quantite, 0);

  return (
    <PanierContext.Provider
      value={{ lignes: detail, total, nombreArticles, ajouter, changerQuantite, retirer, vider }}
    >
      {children}
    </PanierContext.Provider>
  );
}

export function usePanier() {
  const contexte = useContext(PanierContext);
  if (!contexte) throw new Error("usePanier doit être utilisé dans PanierProvider");
  return contexte;
}