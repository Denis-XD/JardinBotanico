import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import './Agregar.css';

const Agregar = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const validarTipoImagen = (file) => {
    const esImagen = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
    if (!esImagen) {
      message.error('Solo puedes subir archivos de imagen JPG/JPEG/PNG!');
    }
    return esImagen && Promise.resolve();
  };

  const customRequest = ({ onProgress, onSuccess, onError, file }) => {
    setTimeout(() => onSuccess("ok"), 0);
  };
  
  const onFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onFormSubmit = async (values) => {
    if (!fileList.length || !validarTipoImagen(fileList[0].originFileObj)) {
      message.error('Por favor, selecciona una imagen válida (JPG/JPEG/PNG) para subir.');
      return;
    }

    const formData = new FormData();
    formData.append("nombre", values.nombre);
    formData.append("nombreCientifico", values.nombreCientifico);
    formData.append("beneficios", values.beneficios);
    formData.append("descripcion", values.descripcion);
    formData.append("imagen", fileList[0].originFileObj);
    console.log(fileList[0].originFileObj);
    try {
      const response = await fetch('http://localhost:3001/api/plantas/agregar', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        message.success("Planta agregada con éxito");
        form.resetFields();
        setFileList([]);
      } else {
        message.error("Hubo un error al agregar la planta");
      }
    } catch (error) {
      message.error('Error al conectarse con el servidor: ' + error.message);
    }
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
              beforeUpload={validarTipoImagen}
              onChange={onFileChange}
              customRequest={customRequest}
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
