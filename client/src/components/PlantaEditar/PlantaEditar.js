import React, { useState } from "react";
import { Button, Input, Form, message, Modal, Upload } from "antd";
import {
  DeleteOutlined,
  SaveOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./PlantaEditar.css";

const PlantaEditar = ({
  id_planta,
  imagen,
  nombre,
  nombreCientifico,
  beneficios,
  descripcion,
  onDelete,
  onSave,
}) => {
  const [datosPlanta, setDatosPlanta] = useState({
    imagen,
    nombre,
    nombreCientifico,
    beneficios,
    descripcion,
  });
  const [fileList, setFileList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosPlanta((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    onSave(id_planta, datosPlanta);
  };

  const handleDelete = async () => {
    onDelete(id_planta);
  };

  const showDeleteConfirm = () => {
    Modal.confirm({
      title: "¿Estás seguro de que deseas eliminar esta planta?",
      content:
        "Esta acción es irreversible y eliminará permanentemente la planta.",
      okText: "Sí, eliminar",
      okType: "danger",
      cancelText: "No, cancelar",
      onOk() {
        handleDelete();
      },
    });
  };

  const validarTipoImagen = (file) => {
    const esImagen = file.type === "image/jpeg" || file.type === "image/png";
    if (!esImagen) {
      message.error("Solo puedes subir archivos de imagen JPG/PNG!");
    }
    return esImagen ? Promise.resolve() : Promise.reject();
  };

  const onFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <div className="planta-editar-container">
      <Form layout="vertical" onFinish={handleSubmit}>
        <div className="imagen-container">
          {datosPlanta.imagen && (
            <img src={datosPlanta.imagen} alt={datosPlanta.nombre} />
          )}
          <div className="boton-cambiar-container">
            <Upload
              beforeUpload={validarTipoImagen}
              onChange={onFileChange}
              customRequest={customRequest}
              listType="picture"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Cambiar Imagen</Button>
            </Upload>
          </div>
        </div>

        <Form.Item label="Nombre">
          <Input
            name="nombre"
            value={datosPlanta.nombre}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Nombre Científico">
          <Input
            name="nombreCientifico"
            value={datosPlanta.nombreCientifico}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Beneficios">
          <Input
            name="beneficios"
            value={datosPlanta.beneficios}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Descripción">
          <Input.TextArea
            name="descripcion"
            value={datosPlanta.descripcion}
            onChange={handleChange}
          />
        </Form.Item>
        <div className="botones-container">
          <Button type="primary" icon={<SaveOutlined />} htmlType="submit">
            Guardar
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            style={{color:'red'}}
            onClick={showDeleteConfirm}
          >
            Eliminar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PlantaEditar;
