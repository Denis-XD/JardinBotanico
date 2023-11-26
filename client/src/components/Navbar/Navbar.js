import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar = ({ isAdmin, onLogout }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Aquí iría la lógica para manejar el cierre de sesión.
    onLogout(); // Suponiendo que esta función actualizará el estado de autenticación en tu contexto o Redux store.
    navigate('/'); // Redirige al usuario a la página de inicio después de cerrar sesión.
  };

  const adminMenuItems = [
    {
      label: (<Link to="/Agregar/agregar" data-testid="nav-agregar">Agregar</Link>),
      key: 'agregar',
    },
    {
      label: (<Link to="/Eliminar/eliminar" data-testid="nav-eliminar">Eliminar</Link>),
      key: 'eliminar',
    },
    {
      label: (<Link to="/Editar/editar" data-testid="nav-editar">Editar</Link>),
      key: 'editar',
    },
    {
      label: (<button onClick={handleLogout} data-testid="nav-logout">Salir</button>),
      key: 'salir',
    },
  ];

  const defaultMenuItems = [
    {
      label: (<Link to="/" data-testid="nav-inicio">Inicio</Link>),
      key: 'inicio',
    },
    {
      label: (<Link to="/Historia/historia" data-testid="nav-historia">Historia</Link>),
      key: 'historia',
    },
    {
      label: (<Link to="/Galeria/galeria" data-testid="nav-galeria">Galería</Link>),
      key: 'galeria',
    },
    {
      label: (<Link to="/Invernaderos/invernaderos" data-testid="nav-invernaderos">Invernaderos</Link>),
      key: 'invernaderos',
    },
    {
      label: (<Link to="../Ubicacion/ubicacion" data-testid="nav-ubicacion">Ubicación</Link>),
      key: 'ubicacion',
    },
    // Considera incluir una condición para cambiar el texto si el usuario está logueado
    {
      label: (<Link to="/Login/login" data-testid="nav-login">{isAdmin ? 'Dashboard' : 'Login'}</Link>),
      key: 'login',
    },
  ];

  const menuItems = isAdmin ? adminMenuItems : defaultMenuItems;

  return (
    <Menu mode="horizontal" items={menuItems} />
  );
};

export default Navbar;
