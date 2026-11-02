import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PanierProvider } from "./context/PanierContext";
import "./styles/variables.css";
import "./styles/global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <PanierProvider>
      <App />
    </PanierProvider>
    </BrowserRouter>
  </StrictMode>
);