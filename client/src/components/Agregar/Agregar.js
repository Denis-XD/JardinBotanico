import React, { useState } from "react";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import './Agregar.css';

const Agregar = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  // Esta función se ejecutará cuando el usuario seleccione un archivo
  const onFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onFormSubmit = (values) => {
    // Si hay archivos seleccionados, toma el primer archivo de la lista
    const file = fileList.length ? fileList[0].originFileObj : null;

    console.log("Received values of form:", values);
    console.log("Selected file:", file);

    // Crea un FormData para enviarlo como multipart/form-data
    const formData = new FormData();
    formData.append("nombre", values.nombre);
    formData.append("nombreCientifico", values.nombreCientifico);
    formData.append("beneficios", values.beneficios);
    formData.append("descripcion", values.descripcion);
    if (file) {
      formData.append("imagen", file);
    }

    // Aquí deberías tener la lógica para enviar el FormData al servidor
    // Por ejemplo:
    // fetch('tu-endpoint-de-carga', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(...)
    // .catch(...);
  };

  // Este es un ejemplo de cómo manejar la subida de archivos (esto debe adaptarse a tu backend)
  const onUpload = (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    // Ejemplo de cómo podrías manejar la carga del archivo
    // Deberías reemplazar esto con tu lógica de carga real
    const formData = new FormData();
    formData.append("file", file);

    fetch("tu-endpoint-de-carga", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        onSuccess(data);
      })
      .catch(onError);

    // Simula el progreso de carga
    setTimeout(() => onProgress({ percent: 50 }), 500);
  };

  return (
    <div className="agregar-container">
      <div className="agregar-header">
        <h2>Agregar Nueva Planta</h2>
      </div>
      <div className="agregar-form-container">
        <Form form={form} onFinish={onFormSubmit} layout="vertical">
          <Form.Item
            name="nombre"
            label="Nombre"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el nombre de la planta",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nombreCientifico"
            label="Nombre científico"
            rules={[
              {
                required: true,
                message: "Por favor ingresa el nombre científico de la planta",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="beneficios" label="Beneficios">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="descripcion" label="Descripción">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="imagen"
            label="Imagen"
            valuePropName="fileList"
            getValueFromEvent={onFileChange}
          >
            <Upload
              beforeUpload={() => false}
              onChange={onFileChange}
              customRequest={onUpload}
              listType="picture"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Seleccionar Imagen</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Agregar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Agregar;
