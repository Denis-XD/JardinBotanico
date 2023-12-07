import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Inicio from '../components/Inicio/Inicio';

describe('Inicio component tests', () => {
  beforeEach(() => {
    // Configura los temporizadores falsos antes de cada prueba.
    jest.useFakeTimers();
  });

  afterEach(() => {
    // Limpia y restablece los temporizadores después de cada prueba.
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('debe renderizar el título del jardín botánico', () => {
    act(() => {
      // Renderiza el componente dentro de la prueba.
      render(<Inicio />);
    });
    
    // Asegúrate de que el título esté en el documento.
    expect(screen.getByText('JARDÍN BOTÁNICO MARTÍN CÁRDENAS')).toBeInTheDocument();
  });

  it('debe cambiar la imagen después de un intervalo de tiempo', () => {
    act(() => {
      render(<Inicio />);
    });

    // Avanza los temporizadores falsos para simular el paso del tiempo.
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Realiza aserciones sobre la nueva imagen mostrada.
    const displayedImage = screen.getByAltText('Jardín Botánico');
    expect(displayedImage).toBeInTheDocument();
    // Asegúrate de actualizar la siguiente línea con el atributo 'src' esperado para la nueva imagen.
    expect(displayedImage).toHaveAttribute('src', '/image/img-portada2.jpg');
  });

  // Puedes agregar más pruebas según sea necesario...
});
