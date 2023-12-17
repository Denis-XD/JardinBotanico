import React, { useState, useEffect } from 'react';
import { Spin, message, Card } from 'antd';
import './Galeria.css';
import Planta from '../Planta/Planta';

const Galeria = () => {
  const [plantas, setPlantas] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const fetchPlantas = async () => {
      setCargando(true);
      try {
        const response = await fetch('http://localhost:3001/api/plantas/obtener');
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const data = await response.json();
        setPlantas(data);
      } catch (error) {
        message.error('Error al cargar las plantas');
      }
      setCargando(false);
    };

    fetchPlantas();
  }, []);

  return (
    <div>
      <h2>Galería de Plantas</h2>
      {cargando ? (
        <Spin size="large" />
      ) : plantas.length > 0 ? (
        <div className="galeria-container">
          {plantas.map(planta => (
            <Card key={planta.id_planta} title={planta.nombre_planta} bordered={false}>
              <Planta
                imagen={`http://localhost:3001/${planta.ruta_imagen.replace(/\\/g, '/')}`}
                nombre={planta.nombre_planta}
                nombreCientifico={planta.nombre_cientifico}
                beneficios={planta.beneficios}
                descripcion={planta.descripcion}
              />
            </Card>
          ))}
        </div>
      ) : (
        <div data-testid="galeria-vacia" className="galeria-vacia">Galería vacía</div> 
      )}
    </div>
  );
};

export default Galeria;
