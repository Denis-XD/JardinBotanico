import React from 'react';
import './Planta.css';

const Planta = ({ imagen, nombre, nombreCientifico, beneficios, descripcion }) => {
  return (
    <div className="planta-card">
      <div className="planta-imagen-container">
        <img src={imagen} alt={`Imagen de ${nombre}`} className="planta-imagen" />
      </div>
      <div className="planta-info">
        <div className="planta-nombre">
          <strong>Nombre: </strong>
          <p>{nombre}</p>
        </div>
        <div className="planta-nombre-cientifico">
          <strong>Nombre científico: </strong>
          <p>{nombreCientifico}</p>
        </div>
        <div className="planta-beneficios">
          <strong>Beneficios: </strong>
          <p>{beneficios}</p>
        </div>
        <div className="planta-descripcion">
          <strong>Descripción: </strong>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Planta;
