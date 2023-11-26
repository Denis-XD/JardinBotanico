import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import './Login.css';

 const Login = ({ onLogin }) => {

  const {Item} = Form;
  const {Password} = Input;
  const navigate = useNavigate();
  const verificarDatos = async (datos) => {
  
    console.log(datos);
    if (true) {
      onLogin();
      navigate('/Agregar/agregar');
    } else {
      
    }
  };

  const errorEnvioFormulario = (error) => {
    console.log(error);


  };

  return(
    <div className='containerPrincipal'>
      <div className='containerSecundario'>
        <Form name='formulario' onFinish={verificarDatos} onFinishFailed={errorEnvioFormulario}>
          
          <Item label="Usuario"
          name='username'
          rules={[{
            required: true,
            message: "Por favor ingresa tu nombre de Usuario"
          }]}
          >
            <Input />
          </Item>

          <Item label='Contraseña'
          name='password'
          rules={[{
            required: true,
            message: "Por favor ingresa tu Contraseña"
          }]}
          >
            <Password />
          </Item>

          <Item name='recordar' valuePropName='checked'>
            <Checkbox>Recordar Usuario</Checkbox>
          </Item>

          <Item>
            <Button type='primary' htmlType='submit'>Iniciar Sesion</Button>
          </Item>
        </Form>
      </div>

    </div>

  );
}
export default Login;
