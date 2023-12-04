import React from 'react';
import './Pie.css';

const Pie = () => {
  return (
    <footer className="pie-container">
      <p>&copy; {new Date().getFullYear()} Jardín Botánico Martín Cárdenas. Todos los derechos reservados.</p>
      {/* Aquí puedes añadir más contenido al footer si es necesario */}
    </footer>
  );
};

export default Pie;
