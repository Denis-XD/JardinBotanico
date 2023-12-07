import React, { useState, useEffect } from "react";
import { data } from "../../assets/data";
import "./Historia.css";
import { Divider, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

export const Historia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
    setWindowWidth(window.innerWidth);
    };

     window.addEventListener('resize', handleResize);

    return () => {
       window.removeEventListener('resize', handleResize);
    };

  }, []);

  const typographyStyle = {
    maxWidth: '80%',
    margin: '2rem auto',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    borderRadius: '10px',
    textAlign: 'center', 
    backgroundColor: '#f0f0f0'
  };
  
  const titleStyle = {
    fontSize: windowWidth < 768 ? '1.5rem' : windowWidth < 480 ? '1.25rem' : '2rem',
    marginBottom: '1rem' 
  };
  
  const paragraphStyle = {
    fontSize: windowWidth < 768 ? '1rem' : windowWidth < 480 ? '0.875rem' : '1.25rem',
    textAlign: 'justify', 
    marginBottom: '1rem' 
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="main-container">
      <div className="historia-slider-container">
        <button className="prev" onClick={prevSlide}>
          &lt;
        </button>
        <ul style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {data.map((item, index) => (
            <li key={index}>
              <img src={item.imgUrl} alt={`Slide ${index}`} />
            </li>
          ))}
        </ul>
        <button className="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div style={typographyStyle}>
        <Divider />

        <Typography>
          <Title style={titleStyle}>Introducción</Title>

          <Paragraph style={paragraphStyle}>
            El valor medicinal de la planta curativa se debe a la presencia en
            los tejidos de las plantas de una sustancia química que produce un
            efecto fisiológico en las personas. Por lo general, pertenecen a una
            de estas seis categorías: Alcaloides, glucósidos, aceites
            esenciales, gomas y resinas, aceites grasos y sustancias
            antibióticas. Los alcaloides son un grupo diverso de compuestos
            alcalinos con marcada actividad fisiológica. Los glucósidos son
            compuestos que, cuando están hidrolizados, producen un componente de
            uno o varios azúcares y uno sin azúcar. Los aceites esenciales
            muchos son germicidas, se debe a su volatilidad y capacidad para
            penetrar en el protoplasma de las células, pero son insolubles en
            agua. Los aceites grasos o lípidos se emplean en emulsiones y como
            purgantes. Los antibióticos son compuestos orgánicos complejos.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            La investigación de las plantas utilizadas en medicina popular de
            Bolivia aún no ha sido iniciada desde el punto de vista
            farmacognósico ni botánico. Existen referencias aisladas sobre la
            composición química y efecto farmacodinámico de nuestras drogas
            vegetales, investigadas por botánicos o farmacéuticos extranjeros
            que no son muy difundidos en nuestro país.{" "}
            <Text strong style={{fontSize: '18px'}}>El Jardín Botánico Martín Cárdenas de Cochabamba</Text>
            , después de 15 años de su fundación, mantienen una colección de 60
            especies de plantas medicinales provenientes principalmente del
            Valle de Cochabamba y otras zonas de otros departamentos del país,
            dicha colección fue organizado por el centro cultural Kuska (Juntos
            para vivir mejor), en coordinación con la Sociedad Boliviana de
            Historia Natural. Recientemente, viene ampliándose otras secciones
            técnicas de campo, con nuevas colecciones de plantas medicinales.
            Las metas programadas son: aumentar la colección a 150 especies,
            iniciar un programa de propagación de especies amenazadas o en
            peligro de extinción, conocer la biología de las diferentes
            especies, realizar estudios históricos actuales de las plantas
            medicinales empleadas por los Incas y Aymaras de Bolivia. Los
            Jardines Botánicos en el mundo entero han tomado conciencia cada vez
            más de papel decisivo que deben desempeñar en la conversación de las
            plantas, en América Latina no son la excepción. El propósito
            principal de las instituciones de la Sociedad Boliviana de Historia
            Natural y el Centro Cultural Kuska, es establecer, desarrollar y
            fortalecer los jardines botánicos de las plantas medicinales para
            colaborar en la conservación de la flora boliviana.
          </Paragraph>

          <Title level={2} style={titleStyle}>Antecedentes</Title>

          <Paragraph style={paragraphStyle}>
            Pocas regiones de tamaño comparable de la tierra poseen una flora
            tan rica como la que se encuentra en territorio boliviano. La
            complicada orografía del país y la forma en que sus montañas, valles
            y llanuras se ven sujetos a los cambios estacionales y a las
            diferencias climáticas, se suman a la posición del país para dar a
            la flora una complejidad maravillosa.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            Por otra parte, se ha calculado que solo se ha estudiado el 10% de
            los componentes vegetales del Reino Plantae, la Fitoquímica moderna,
            con técnicas refinadas nuevas que debe asegurar nuevos
            descubrimientos sorprendentes.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            Sin duda, hay un surgimiento del interés en la medicina vegetal. No
            interesa únicamente al particular, interesa igualmente a todas las
            personas, En tal sentido existe necesidad imperiosa del estudio de
            las plantas medicinales, por tres razones:
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            La primera, por el número creciente de efectos tóxicos que producen
            las potentes drogas sintéticas que surgen masivamente de los
            laboratorios de investigación de las compañías farmacéuticas del
            mundo.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            La segunda, es que debemos a la naturaleza el mayor de los progresos
            terapéuticos: producción de Antibióticos, el descubrimiento de la
            penicilina fue el resultado de la aguda observación de un cultivo
            bacteriológico contaminado, realizado por Sir Alexander Fleming, que
            constituye uno de los más trascendentales avances de la historia
            médica.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            La tercera razón constituye el creciente reconocimiento de que
            vivimos en un mundo natural que proporciona al hombre el proceso de
            curación a través de numerosas plantas medicinales.
          </Paragraph>

          <Title level={3} style={titleStyle}>Objetivos</Title>

          <Paragraph style={paragraphStyle}>
            Establecer un Programa de Ampliación de las Secciones Tecnicas de
            Campo de plantas medicinales en el Jardín Botánico para desempeñar
            un papel decisivo en la estrategia de la conservación de los
            recursos naturales vegetales de Bolivia.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            1º Reunir y mantener una colección viva de plantas medicinales del
            Valle de Cochabamba.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            2º Introducir poblaciones representativas de especies amenazadas o
            en peligro de extinción.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            3º Registrar el conocimiento empírico tradicional que sirve de base
            para el uso de la flora nacional.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            4º Contribuir a la enseñanza objetiva de nuestras especies de valor
            medicinal y promover la investigación botánica.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            5º Realizar la publicación de artículos científicos de la flora de
            plantas medicinales nativas y exóticas.
          </Paragraph>

          <Paragraph style={paragraphStyle}>
            Prestar asesoramiento y cooperación técnica a otras instituciones
            estatales y privadas en problemas relacionados con el uso de plantas
            medicinales.
          </Paragraph>
        </Typography>
      </div>
    </div>
  );
};

export default Historia;
