import { Routes, Route } from "react-router-dom";
import ConditionsVente from "./pages/ConditionsVente";
import ProduitDetail from "./pages/ProduitDetail";
import Commander from "./pages/Commander";
import Panier from "./pages/Panier";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Accueil from "./pages/Accueil";
import Produits from "./pages/Produits";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import GalerieDetail from "./pages/GalerieDetail";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/produits/:id" element={<ProduitDetail />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commander" element={<Commander />} />
          <Route path="/conditions-de-vente" element={<ConditionsVente />} />
          <Route path="/galerie/:id" element={<GalerieDetail />} /> 
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;