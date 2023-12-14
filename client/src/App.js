import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./components/Inicio";
import Historia from "./components/Historia/Historia";
import Galeria from "./components/Galeria/Galeria";
import Invernaderos from "./components/Invernaderos/Invernaderos";
import Ubicacion from "./components/Ubicacion/Ubicacion";
import Login from "./components/Login/Login";
import Agregar from "./components/Agregar/Agregar";
import Editar from "./components/Editar/Editar";
import Pie from "./components/Pie/Pie";
import "./App.css";

function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(localStorage.getItem('userToken') ? true : false);

  const iniciarSesion = (token) => {
    localStorage.setItem('userToken', token);
    setUsuarioAutenticado(true);
  };

  const cerrarSesion = () => {
    localStorage.removeItem('userToken');
    setUsuarioAutenticado(false);
  };

  const RutaPrivada = ({ children }) => {
    return usuarioAutenticado ? children : <Navigate to="/Login/login" />;
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar isAdmin={usuarioAutenticado} onLogout={cerrarSesion} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Historia/historia" element={<Historia />} />
            <Route path="/Galeria/galeria" element={<Galeria />} />
            <Route path="/Invernaderos/invernaderos" element={<Invernaderos />} />
            <Route path="/Ubicacion/ubicacion" element={<Ubicacion />} />
            <Route path="/Login/login" element={<Login onLogin={iniciarSesion} />} />

            <Route path="/Agregar/agregar" element={<RutaPrivada><Agregar /></RutaPrivada>} />
            <Route path="/Editar/editar" element={<RutaPrivada><Editar /></RutaPrivada>} />
          </Routes>
        </main>

        <Pie className="footer" />
      </div>
    </Router>
  );
}

export default App;
