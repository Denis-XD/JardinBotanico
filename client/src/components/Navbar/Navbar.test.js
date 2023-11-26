// Navbar.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar', () => {
  const renderNavbar = () => render(
    <Router>
      <Navbar />
    </Router>
  );

  it('debe mostrar el enlace a la página de inicio', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-inicio')).toBeInTheDocument();
  });

  it('debe mostrar el enlace a la página de historia', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-historia')).toBeInTheDocument();
  });

  it('debe mostrar el enlace a la página de galería', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-galeria')).toBeInTheDocument();
  });

  it('debe mostrar el enlace a la página de invernaderos', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-invernaderos')).toBeInTheDocument();
  });

  it('debe mostrar el enlace a la página de ubicacion', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-ubicacion')).toBeInTheDocument();
  });

  it('debe mostrar el enlace a la página de login', () => {
    renderNavbar();
    expect(screen.getByTestId('nav-login')).toBeInTheDocument();
  });


  // Agrega aquí más pruebas según los elementos que tenga tu Navbar
});
