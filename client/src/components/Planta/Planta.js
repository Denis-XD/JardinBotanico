import React from 'react';

const Planta = ({ imagen, nombre, nombreCientifico, beneficios, descripcion }) => {
  return (
    <div className="planta-card">
      <div className="planta-imagen-container">
        <img src={imagen} alt={`Imagen de ${nombre}`} className="planta-imagen" />
      </div>
      <div className="planta-info">
        <div className="planta-nombre">
          <span>Nombre: </span><h3>{nombre}</h3>
        </div>
        <div className="planta-nombre-cientifico">
          <span>Nombre científico: </span><h4>{nombreCientifico}</h4>
        </div>
        <div className="planta-beneficios">
          <span>Beneficios: </span><p>{beneficios}</p>
        </div>
        <div className="planta-descripcion">
          <span>Descripción: </span><p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Planta;
