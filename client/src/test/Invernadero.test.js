import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Invernadero from '../components/Invernadero/Invernadero';
//import '@testing-library/jest-dom/extend-expect';

jest.useFakeTimers();

describe('Pruebas para el componente Invernadero', () => {
  test('debe renderizar la primera imagen y el texto correctamente', () => {

    const imagenesMock = [
        'imagen1.jpg',
        'imagen2.jpg',
        'imagen3.jpg'
      ];

    const textoMock = 'Texto de prueba para el invernadero';

    render(<Invernadero imagenes={imagenesMock} texto={textoMock} />);

        const imagen = screen.getByAltText(`Invernadero 0`);
        const texto = screen.getByText(textoMock);
    
        expect(imagen).toBeInTheDocument();
        expect(texto).toBeInTheDocument();
   });

  test('debe cambiar la imagen después de un intervalo de tiempo', async () => {
  
    const imagenesMock = ['imagen1.jpg', 'imagen2.jpg'];
    render(<Invernadero imagenes={imagenesMock} texto="Texto de prueba" />);

    let imagen = screen.getByAltText(`Invernadero 0`);
    expect(imagen).toHaveAttribute('src', imagenesMock[0]);

    jest.advanceTimersByTime(3000);
  
    await waitFor(() => {
      imagen = screen.getByAltText(`Invernadero 1`);
      expect(imagen).toHaveAttribute('src', imagenesMock[1]);
    });
  });
  
});
