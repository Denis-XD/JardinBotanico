import React, { useState, useEffect } from "react";
import "./Inicio.css"; // Asegúrate de crear este archivo CSS

const Inicio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/image/img-portada1.jpg",
    "/image/img-portada2.jpg",
    "/image/img-portada3.jpg",
  ]; // Reemplaza con las rutas de tus imágenes

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div className="inicio-container">
      <h1>JARDÍN BOTÁNICO MARTÍN CÁRDENAS</h1>
      <div className="inicio-content">
        <div className="inicio-images">
          <img src={images[currentImageIndex]} alt="Jardín Botánico" />
        </div>

        <div className="inicio-text">
          <section>
            <p>
              El Jardín Botánico Martín Cárdenas se encuentra ubicado en la ciudad de Cochabamba,
            </p>
            <p>
              es miembro de la Asociación de Jardines Botánicos de Latinoamérica y del{'\u00A0\u00A0'}Caribe,{'\u00A0\u00A0'}{'\u00A0\u00A0'}y 
            </p>
            <p>
              presenta trabajos para la  Agenda  Internacional  {'\u00A0\u00A0'}{'\u00A0\u00A0'}para  {'\u00A0\u00A0'}{'\u00A0\u00A0'}la{'\u00A0\u00A0'}{'\u00A0\u00A0'}Conservación{'\u00A0\u00A0'}{'\u00A0\u00A0'}en{'\u00A0\u00A0'}{'\u00A0\u00A0'}los 
            </p>
            <p>
              Jardines Botánicos, su código  de  reconocimiento {'\u00A0\u00A0'}{'\u00A0\u00A0'}internacional{'\u00A0\u00A0'}{'\u00A0\u00A0'}como{'\u00A0\u00A0'}{'\u00A0\u00A0'}institución   
            </p>
            <p>botánica es COCHA.</p>
          </section>
          <section>
            <p>
              El jardín tiene la finalidad  de{'\u00A0\u00A0'}{'\u00A0\u00A0'}contribuir{'\u00A0\u00A0'}{'\u00A0\u00A0'}a{'\u00A0\u00A0'}{'\u00A0\u00A0'}la{'\u00A0\u00A0'}{'\u00A0\u00A0'}conservación{'\u00A0\u00A0'}{'\u00A0\u00A0'}de{'\u00A0\u00A0'}{'\u00A0\u00A0'}los{'\u00A0\u00A0'}{'\u00A0\u00A0'}recursos              
            </p>
            <p>
              vegetales de la región, realizando investigaciones científicas y enseñando{'\u00A0\u00A0'}{'\u00A0\u00A0'}a{'\u00A0\u00A0'}{'\u00A0\u00A0'}través              
            </p>
            <p>de sus instalaciones sobre áreas de botánica y medio ambiente.</p>
          </section>
          <section>
            <p>
              El Jardín  Botánico  Martín  Cárdenas  posee  variadas  secciones{'\u00A0\u00A0'}{'\u00A0\u00A0'}como{'\u00A0\u00A0'}{'\u00A0\u00A0'}el{'\u00A0\u00A0'}{'\u00A0\u00A0'}área{'\u00A0\u00A0'}{'\u00A0\u00A0'}de                         
            </p>
            <p>
              Bromelias, Cactus, Amarilis, Arboretum con muchas especies nativas y exóticas.  
                   
            </p>
            <p>
              Además de esas  secciones también tiene las secciones de Plantas medicinales y Vivero.              
            </p>
            <p>
              También existe el Herbario Forestal Nacional <strong>Martín Cárdenas</strong>, creado  en  1976  y  que                        
            </p>
            <p>
              cuenta con aproximadamente  40,000 especies  de  toda  Bolivia  en{'\u00A0\u00A0'}{'\u00A0\u00A0'}las{'\u00A0\u00A0'}{'\u00A0\u00A0'}instalaciones
            </p>
            <p>
              de la  Universidad  Mayor  de  San  Simón,  además  de  una  biblioteca especializada{'\u00A0\u00A0'}{'\u00A0\u00A0'}en 
                           
            </p>
            <p>
              temas de botánica.
            </p>
          </section>
          <section>
            <p>
              Los senderos del  jardín  permiten  descubrir  cómodamente  las{'\u00A0\u00A0'}{'\u00A0\u00A0'}diferentes{'\u00A0\u00A0'}{'\u00A0\u00A0'}especies            
            </p>
            <p>
              mostradas, además de contar con zonas de recreación para disfrutar de  la  naturaleza            
            </p>
            <p>
              y un paseo relajante.
            </p>
          </section>
          <section>
            <p>
              <strong>Dirección: </strong>Av. General Galindo entre Av. Villazón
              y Calle Raúl Rivero.
            </p>
            <p>
              <strong>Horario: </strong>Lunes a viernes: 9:00 am. &#8211; 4:30
              pm. y Sábados: 10:00 am. &#8211; 4:30 pm.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
