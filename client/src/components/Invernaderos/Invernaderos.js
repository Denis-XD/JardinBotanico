import React from 'react';
import Invernadero from '../Invernadero/Invernadero';
import './Invernaderos.css'; 

const Invernaderos = () => {

  const invernaderoDatos = [
    {
      imagenes: ['/image/img-inv1-1.jpeg', '/image/img-inv1-2.jpeg'],
      texto: "Invernadero 1  \nAqui se alojan plantas de la familia \nCactaceae."
    },
    {
      imagenes: ['/image/img-inv2-1.jpeg', '/image/img-inv2-2.jpeg'],
      texto: "Invernadero 2  \nAqui se alojan plantas Tropicales."
    },
    {
      imagenes: ['/image/img-inv3-1.jpeg', '/image/img-inv3-2.jpeg'],
      texto: "Invernadero 3  \nAqui se alojan plantas de la familia \nPalmetum."
    },
    {
      imagenes: ['/image/img-inv4-1.jpeg'],
      texto: "Invernadero 4  \nAqui se alojan plantas hornamentales."
    },
  ];

  return (
    <div className="invernaderos-container">
      <h2>Invernaderos</h2>
      {invernaderoDatos.map((invernadero, index) => (
         <Invernadero key={index} imagenes={invernadero.imagenes} texto={invernadero.texto}  index={index} data-testid={`invernadero-${index}`} />
      ))}
    </div>
  );
};

export default Invernaderos;
