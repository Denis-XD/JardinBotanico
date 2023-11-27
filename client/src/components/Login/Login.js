import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';
import './Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const verificarDatos = async (datos) => {
    try {
      console.log(datos);
      const response = await fetch('http://localhost:3001/api/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });
      const data = await response.json();
      if (response.ok) {
        // Suponiendo que la respuesta del servidor incluye un token
        localStorage.setItem('userToken', data.token); // Guardar el token en localStorage
        onLogin(); // Actualizar el estado de autenticación en tu aplicación
        navigate('/Agregar/agregar'); // Redirigir al usuario a la página de Agregar
      } else {
        // Manejar errores de inicio de sesión (credenciales incorrectas, etc.)
        message.error(data.error || 'Error en el inicio de sesión');
      }
    } catch (error) {
      // Manejar errores de red o del servidor
      message.error('Error al conectarse con el servidor');
    }
  };

  // No es necesario manejar errores en el envío del formulario
  // ya que Ant Design se encarga de la validación antes de llamar a onFinish

  return (
    <div className='containerPrincipal'>
      <div className='containerSecundario'>
        <Form
          form={form}
          name='formulario'
          onFinish={verificarDatos}
          layout="vertical"
        >
          <Form.Item
            label="Usuario"
            name='username'
            rules={[{ required: true, message: "Por favor ingresa tu nombre de Usuario" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Contraseña'
            name='password'
            rules={[{ required: true, message: "Por favor ingresa tu Contraseña" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name='recordar' valuePropName='checked'>
            <Checkbox>Recordar Usuario</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>Iniciar Sesión</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
