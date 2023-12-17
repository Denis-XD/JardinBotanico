import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar', () => {
  const mockOnLogout = jest.fn();
  beforeEach(() => {
    localStorage.setItem("userName", "TestUser");
  });

  afterEach(() => {
    localStorage.clear();
  });

  const renderNavbar = (isAdmin = false) => render(
    <Router>
      <Navbar isAdmin={isAdmin} onLogout={mockOnLogout} />
    </Router>
  )

  // Pruebas para usuarios no administradores
  it('debe mostrar el enlace a la página de inicio para usuarios no administradores', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-inicio')).toBeInTheDocument();
  });

  it('debe mostrar el enlace a la página de login para usuarios no administradores', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-login')).toHaveTextContent('Login');
  });

  it('debe mostrar el enlace a la página de galería para usuarios no administradores', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-galeria')).toHaveTextContent('Galería');
  });
  
  it('debe mostrar el enlace a la página de invernaderos para usuarios no administradores', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-invernaderos')).toHaveTextContent('Invernaderos');
  });

  it('debe mostrar el enlace a la página de historia para usuarios no administradores', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-historia')).toHaveTextContent('Historia');
  });

  // Pruebas para usuarios administradores
  it('debe mostrar el enlace a la página de agregar para administradores', () => {
    renderNavbar(true);
    expect(screen.getByTestId('nav-agregar')).toBeInTheDocument();
  });

  it('debe mostrar el enlace a la página de editar para administradores', () => {
    renderNavbar(true);
    expect(screen.getByTestId('nav-editar')).toBeInTheDocument();
  });

  it('debe mostrar el botón de salir para administradores', () => {
    renderNavbar(true);
    expect(screen.getByTestId('nav-logout')).toBeInTheDocument();
  });

  it('debe mostrar el nombre del administrador', () => {
    renderNavbar(true);
    expect(screen.getByTestId('nav-user')).toBeInTheDocument();
  });
});
