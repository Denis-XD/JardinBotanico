import React, { useState, useEffect } from "react";
import { message } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import PlantaEditar from "../PlantaEditar/PlantaEditar";
import "./Editar.css";

const Editar = () => {
  const [plantas, setPlantas] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    cargarPlantas();
  }, []);

  const cargarPlantas = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/plantas/obtener");
      if (!response.ok) {
        throw new Error("Error en la solicitud Fetch");
      }
      const data = await response.json();
      setPlantas(data);
    } catch (error) {
       message.error("Error al obtener las plantas: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/plantas/eliminar/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error en la solicitud Fetch");
      }
      message.success("Planta eliminada con éxito");
      setCurrentIndex(0);
      cargarPlantas(); 
    } catch (error) {
      message.error("Error al eliminar la planta: " + error.message);
    }
  };

  const handleSave = async (id, datosActualizados) => {
    try {
      const response = await fetch(`http://localhost:3001/api/plantas/actualizar/${id}`, {
        method: "PUT",
        body: datosActualizados, 
      });
      if (!response.ok) {
        throw new Error("Error en la solicitud Fetch");
      }
      message.success("Planta actualizada con éxito");
      cargarPlantas(); 
    } catch (error) {
      message.error("Error al actualizar la planta: " + error.message);
    }
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % plantas.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? plantas.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="editar-container">
      {plantas.length > 0 ? (
        <div className="carousel-with-buttons">
  
          <button onClick={handlePrev} className="editar-nav-btn"><LeftCircleOutlined style={{ fontSize: '40px', backgroundColor:'#35B09E'}} /></button>
          <div className="carousel-container">
          <PlantaEditar
              key={plantas[currentIndex].id_planta}
              id_planta={plantas[currentIndex].id_planta}
              imagen={`http://localhost:3001/${plantas[currentIndex].ruta_imagen.replace(/\\/g, "/")}`}
              nombre={plantas[currentIndex].nombre_planta}
              nombreCientifico={plantas[currentIndex].nombre_cientifico}
              beneficios={plantas[currentIndex].beneficios}
              descripcion={plantas[currentIndex].descripcion}
              onDelete={handleDelete}
              onSave={handleSave}
            />
          </div>
          <button onClick={handleNext} className="editar-nav-btn"><RightCircleOutlined style={{ fontSize: '40px', backgroundColor:'#35B09E'}} /></button>
        </div>
      ) : (
        <div className="editar-vacio">No hay plantas</div>
      )}
    </div>
  )
  
};

export default Editar;
