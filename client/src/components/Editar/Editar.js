import React, { useState, useEffect } from "react";
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
       alert.error("Error al obtener las plantas: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/plantas/eliminar/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error en la solicitud Fetch");
      }
      alert.success("Planta eliminada con éxito");
      cargarPlantas(); // Recargar la lista de plantas
    } catch (error) {
      alert.error("Error al eliminar la planta: " + error.message);
    }
  };

  const handleSave = async (id, datosActualizados) => {
    try {
      const response = await fetch(`/api/plantas/actualizar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosActualizados),
      });
      if (!response.ok) {
        throw new Error("Error en la solicitud Fetch");
      }
      alert.success("Planta actualizada con éxito");
      cargarPlantas(); // Recargar la lista de plantas
    } catch (error) {
      alert.error("Error al actualizar la planta: " + error.message);
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
      <div className="carousel-with-buttons">
        <button onClick={handlePrev} className="editar-nav-btn">Anterior</button>
        <div className="carousel-container">
          {plantas.length > 0 && (
            <PlantaEditar
              key={plantas[currentIndex].id_planta}
              imagen={`http://localhost:3001/${plantas[currentIndex].ruta_imagen.replace(/\\/g, "/")}`}
              nombre={plantas[currentIndex].nombre_planta}
              nombreCientifico={plantas[currentIndex].nombre_cientifico}
              beneficios={plantas[currentIndex].beneficios}
              descripcion={plantas[currentIndex].descripcion}
              onDelete={handleDelete}
              onSave={handleSave}
            />
          )}
        </div>
        <button onClick={handleNext} className="editar-nav-btn">Siguiente</button>
      </div>
    </div>
  );
  
};

export default Editar;
