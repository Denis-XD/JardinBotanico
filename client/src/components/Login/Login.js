import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';
import './Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const verificarDatos = async (datos) => {
    try {
      const response = await fetch('http://localhost:3001/api/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('userToken', data.token); 
        onLogin(); 
        navigate('/Agregar/agregar'); 
      } else {
        message.error(data.error || 'Error en el inicio de sesión');
      }
    } catch (error) {
      message.error('Error al conectarse con el servidor');
    }
  };

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
