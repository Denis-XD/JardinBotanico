import React, { useState, useEffect } from 'react';
import './Invernadero.css'; 

const Invernadero = ({ imagenes, texto }) => {
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImagenActual((prevImagenActual) => (prevImagenActual + 1) % imagenes.length);
    }, 4000); 

    return () => clearInterval(intervalId);
  }, [imagenes.length]);

  return (
    <div className="invernadero-container">
      <div className="imagen">
        <img src={imagenes[imagenActual]} alt={`Invernadero ${imagenActual}`} />
      </div>
      <div className="texto">{texto}</div>
    </div>
  );
};

export default Invernadero;
