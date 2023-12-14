import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Invernadero from '../components/Invernadero/Invernadero';

describe('Invernadero component tests', () => {
  jest.useFakeTimers();

  const imagenesMock = [
    '/image/img1.jpg',
    '/image/img2.jpg',
  ];

  const textoMock = 'Texto de prueba para el invernadero';

  it('debe mostrar la primera imagen y el texto correctamente', () => {
    render(<Invernadero imagenes={imagenesMock} texto={textoMock} />);

    const imagen = screen.getByAltText('Invernadero 0');
    const texto = screen.getByText(textoMock);

    expect(imagen).toBeInTheDocument();
    expect(imagen).toHaveAttribute('src', imagenesMock[0]);
    expect(texto).toBeInTheDocument();
  });

  it('debe cambiar la imagen después de un intervalo de tiempo', () => {
    render(<Invernadero imagenes={imagenesMock} texto={textoMock} />);

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    const nuevaImagen = screen.getByAltText('Invernadero 1');
    expect(nuevaImagen).toHaveAttribute('src', imagenesMock[1]);
  });
});
