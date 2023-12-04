import React from 'react';
import Invernadero from '../Invernadero/Invernadero';
import './Invernaderos.css'; 

const Invernaderos = () => {

  const invernaderoDatos = [
    {
      imagenes: ['/image/img-portada1.jpg', '/image/img-portada2.jpg'],
      texto: "Texto para el primer invernadero 1"
    },
    {
      imagenes: ['/image/img-portada1.jpg', '/image/img-portada2.jpg'],
      texto: "Texto para el segundo invernadero 2"
    },
    {
      imagenes: ['/image/img-portada1.jpg', '/image/img-portada2.jpg'],
      texto: "Texto para el tercer invernadero 3"
    },
    {
      imagenes: ['/image/img-portada1.jpg', '/image/img-portada2.jpg'],
      texto: "Texto para el cuarto invernadero 4 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaae"
    },
  ];

  return (
    <div className="invernaderos-container">
      <h2>Invernaderos</h2>
      {invernaderoDatos.map((invernadero, index) => (
        <Invernadero key={index} imagenes={invernadero.imagenes} texto={invernadero.texto} />
      ))}
    </div>
  );
};

export default Invernaderos;
