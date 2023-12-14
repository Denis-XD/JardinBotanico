import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Inicio from '../components/Inicio';

jest.useFakeTimers();

describe('Inicio component tests', () => {
  const imagenesMock = [
    '/image/img-portada1.jpeg',
    '/image/img-portada2.jpeg',
    '/image/img-portada3.jpeg',
    '/image/img-portada4.jpeg',
    '/image/img-portada5.jpeg',
    '/image/img-portada6.jpeg'
  ];

  it('debe mostrar la primera imagen correctamente', () => {
    render(<Inicio />);

    const imagen = screen.getByAltText('Jardín Botánico');
    expect(imagen).toBeInTheDocument();
    expect(imagen).toHaveAttribute('src', imagenesMock[0]);
  });

  it('debe cambiar la imagen después de un intervalo de tiempo', () => {
    render(<Inicio />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen).toHaveAttribute('src', imagenesMock[1]);
  });

});
