// src/App.js
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { Home } from "./pages/HomePage";
import { Catalog } from "./pages/CatalogPage";
import { Cart } from "./pages/CartPage";

import { Footer } from "./Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
