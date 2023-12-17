import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Historia from '../components/Historia/Historia';
import { data } from '../../src/assets/data';

describe('Pruebas para el componente Historia', () => {
  test('debe renderizar el carrusel de imágenes y cambiar de imagen al hacer clic en los botones', () => {
    render(<Historia />);
    
    expect(screen.getByAltText(`Slide 0`)).toBeInTheDocument();

    fireEvent.click(screen.getByText('>'));
    expect(screen.getByAltText(`Slide 1`)).toBeInTheDocument();

    fireEvent.click(screen.getByText('<'));
    expect(screen.getByAltText(`Slide 0`)).toBeInTheDocument();

    fireEvent.click(screen.getByText('>'));
    expect(screen.getByAltText(`Slide 1`)).toBeInTheDocument();

    fireEvent.click(screen.getByText('>'));
    expect(screen.getByAltText(`Slide 2`)).toBeInTheDocument();
  });

  test('debe renderizar el contenido 1 de texto correctamente', () => {
    render(<Historia />);
  
    expect(screen.getByText('Introducción')).toBeInTheDocument();
   
  });

  test('debe renderizar el contenido 2 de texto correctamente', () => {
    render(<Historia />);

    expect(screen.getByText('Antecedentes')).toBeInTheDocument();
   
  });

  test('debe renderizar el contenido 3 de texto correctamente', () => {
    render(<Historia />);

    expect(screen.getByText('Objetivos')).toBeInTheDocument();
   
  });
  
});
