import React, {useRef, useState, useEffect} from 'react';
import { data } from '../../assets/data';
import './Historia.css';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;


export const Historia = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }

  }, [currentIndex]);


  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className="container-images">

          <ul ref={listRef}>
            {
              data.map((item) => {
                return <li key={item.id}>
                  <img src={item.imgUrl} width={500} height={280} />
                </li>
              })
            }
          </ul>
        </div>
        <div className="dots-container">
          {
            data.map((_, idx) => (
              <div key={idx}
                className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(idx)}>
                &#9865;
              </div>))
          }
        </div>
      </div>
      <div>
      <Divider />


<Typography>
  <Title>Introducción</Title>

  <Paragraph>
  El valor medicinal de la planta curativa se debe a la presencia en los tejidos de las plantas de una sustancia química que produce un efecto fisiológico en las personas. 
  Por lo general, pertenecen a una de estas seis categorías: Alcaloides, glucósidos, aceites esenciales, gomas y resinas, aceites grasos y sustancias antibióticas.
  Los alcaloides son un grupo diverso de compuestos alcalinos con marcada actividad fisiológica.
  Los glucósidos son compuestos que, cuando están hidrolizados, producen un componente de uno o varios azúcares y uno sin azúcar.
  Los aceites esenciales muchos son germicidas, se debe a su volatilidad y capacidad para penetrar en el protoplasma de las células, pero son insolubles en agua.
  Los aceites grasos o lípidos se emplean en emulsiones y como purgantes.
  Los antibióticos son compuestos orgánicos complejos.
  </Paragraph>

  <Paragraph>
  La investigación de las plantas utilizadas en medicina popular de Bolivia aún no ha sido iniciada desde el punto de vista farmacognósico ni botánico. Existen referencias 
  aisladas sobre la composición química y efecto farmacodinámico de nuestras drogas vegetales, investigadas por botánicos o farmacéuticos extranjeros que no son muy difundidos
  en nuestro país. {' '}
    <Text strong>
    El Jardín Botánico Martín Cárdenas de Cochabamba
    </Text>
  , después de 15 años de su fundación, mantienen una colección de 60 especies de plantas medicinales provenientes principalmente del Valle de Cochabamba y otras zonas de otros 
  departamentos del país, dicha colección fue organizado por el centro cultural Kuska (Juntos para vivir mejor), en coordinación con la Sociedad Boliviana de Historia Natural.
  Recientemente, viene ampliándose otras secciones técnicas de campo, con nuevas colecciones de plantas medicinales.
  Las metas programadas son: aumentar la colección a 150 especies, iniciar un programa de propagación de especies amenazadas o en peligro de extinción, conocer la biología de 
  las diferentes especies, realizar estudios históricos actuales de las plantas medicinales empleadas por los Incas y Aymaras de Bolivia.
  Los Jardines Botánicos en el mundo entero han tomado conciencia cada vez más de papel decisivo que deben desempeñar en la conversación de las plantas, en América Latina no 
  son la excepción.
  El propósito principal de las instituciones de la Sociedad Boliviana de Historia Natural y el Centro Cultural Kuska, es establecer, desarrollar y fortalecer los jardines 
  botánicos de las plantas medicinales para colaborar en la conservación de la flora boliviana.  
  </Paragraph>

  <Title level={2}>Antecedentes</Title>

  <Paragraph>
  Pocas regiones de tamaño comparable de la tierra poseen una flora tan rica como la que se encuentra en territorio boliviano. La complicada orografía del país y la forma en 
  que sus montañas, valles y llanuras se ven sujetos a los cambios estacionales y a las diferencias climáticas, se suman a la posición del país para dar a la flora una 
  complejidad maravillosa.
  </Paragraph>

  <Paragraph>
  Por otra parte, se ha calculado que solo se ha estudiado el 10% de los componentes vegetales del Reino Plantae, la Fitoquímica moderna, con técnicas refinadas nuevas que debe 
  asegurar nuevos descubrimientos sorprendentes.
  </Paragraph>

  <Paragraph>
  Sin duda, hay un surgimiento del interés en la medicina vegetal. No interesa únicamente al particular, interesa igualmente a todas las personas, En tal sentido existe 
  necesidad imperiosa del estudio de las plantas medicinales, por tres razones:
  </Paragraph>

  <Paragraph>
  La primera, por el número creciente de efectos tóxicos que producen las potentes drogas sintéticas que surgen masivamente de los laboratorios de investigación de las compañías
  farmacéuticas del mundo.
  </Paragraph>

  <Paragraph>
  La segunda, es que debemos a la naturaleza el mayor de los progresos terapéuticos: producción de Antibióticos, el descubrimiento de la penicilina fue el resultado de la aguda 
  observación de un cultivo bacteriológico contaminado, realizado por Sir Alexander Fleming, que constituye uno de los más trascendentales avances de la historia médica.
  </Paragraph>
  
  <Paragraph>
  La tercera razón constituye el creciente reconocimiento de que vivimos en un mundo natural que proporciona al hombre el proceso de curación a través de numerosas plantas 
  medicinales.
  </Paragraph>

  <Title level={3}>Objetivos</Title>

  <Paragraph>
  Establecer un Programa de Ampliación de las Secciones Tecnicas de Campo de plantas medicinales en el Jardín Botánico para desempeñar un papel decisivo en la estrategia de 
  la conservación de los recursos naturales vegetales de Bolivia.
  </Paragraph>

  <Paragraph>
    1º Reunir y mantener una colección viva de plantas medicinales del Valle de Cochabamba.
  </Paragraph>

  <Paragraph>
    2º Introducir poblaciones representativas de especies amenazadas o en peligro de extinción.
  </Paragraph>

  <Paragraph>
    3º Registrar el conocimiento empírico tradicional que sirve de base para el uso de la flora nacional.
  </Paragraph>

  <Paragraph>
    4º Contribuir a la enseñanza objetiva de nuestras especies de valor medicinal y promover la investigación botánica.
  </Paragraph>

  <Paragraph>
    5º Realizar la publicación de artículos científicos de la flora de plantas medicinales nativas y exóticas.
  </Paragraph>

  <Paragraph>
    Prestar asesoramiento y cooperación técnica a otras instituciones estatales y privadas en problemas relacionados con el uso de plantas medicinales.
  </Paragraph>

</Typography>

      </div>
    </div >
  )
}



//)

export default Historia;
