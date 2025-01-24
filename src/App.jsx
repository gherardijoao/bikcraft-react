import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./pages/inicial/Inicial";
import Termos from "./pages/Termos/Termos";
import Bicicletas from "./pages/Bicicletas/Bicicletas";
import Seguros from "./pages/Seguros/Seguros";
import Nimbus from "./pages/Nimbus/Nimbus";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Inicial />} />
        {/* Outras páginas */}
        <Route path="/termos" element={<Termos />} />
        <Route path="/bicicletas" element={<Bicicletas />} />
        <Route path="/seguros" element={<Seguros />} />
        <Route path="/nimbus" element={<Nimbus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
