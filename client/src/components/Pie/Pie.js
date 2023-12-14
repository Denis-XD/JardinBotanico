import React from 'react';
import './Pie.css';

const Pie = () => {
  return (
    <footer className="pie-container">
      <p>&copy; {new Date().getFullYear()} Jardín Botánico Martín Cárdenas. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Pie;
