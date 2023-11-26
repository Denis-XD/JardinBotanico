import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Inicio from './components/Inicio';
import Historia from './components/Historia/Historia';
import Galeria from './components/Galeria/Galeria';
import Invernaderos from './components/Invernaderos/Invernaderos';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Login from './components/Login/Login';
import Agregar from './components/Agregar/Agregar';
import Eliminar from './components/Eliminar/Eliminar';
import Editar from './components/Editar/Editar';
import './App.css';

function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);


  const iniciarSesion = () => {
      setUsuarioAutenticado(true);
  };
  const cerrarSesion = () => {
    setUsuarioAutenticado(false);
  };

  return (
    <Router>
      <div>
        <Navbar isAdmin={usuarioAutenticado} onLogout={cerrarSesion } />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Historia/historia" element={<Historia />} />
          <Route path="/Galeria/galeria" element={<Galeria />} />
          <Route path="/Invernaderos/invernaderos" element={<Invernaderos />} />
          <Route path="/Ubicacion/ubicacion" element={<Ubicacion />} />
          <Route path="/Login/login" element={<Login onLogin={iniciarSesion} />} />
          {/* Rutas protegidas que solo deben ser accesibles si el usuario está autenticado */}
          {usuarioAutenticado && (
            <>
              <Route path="/Agregar/agregar" element={<Agregar />} />
              <Route path="/Eliminar/eliminar" element={<Eliminar />} />
              <Route path="/Editar/editar" element={<Editar />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
