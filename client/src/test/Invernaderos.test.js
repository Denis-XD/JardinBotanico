import React from 'react';
import { render, screen } from '@testing-library/react';
import Invernaderos from '../components/Invernaderos/Invernaderos';
import { within } from '@testing-library/react';

//import '@testing-library/jest-dom/extend-expect';

jest.mock('../components/Invernadero/Invernadero', () => (props) => (
  <div data-testid={`invernadero-${props.texto}`}>
    {props.imagenes.map((img, index) => (
      <img key={index} src={img} alt={`Invernadero ${props.texto} imagen ${index}`} />
    ))}
    <p>{props.texto}</p>
  </div>
));

describe('Invernaderos component tests', () => {
  test('debe renderizar los invernaderos con sus respectivos textos e imágenes', () => {
    render(<Invernaderos />);

    const textos = [
      "Texto para el primer invernadero 1",
      "Texto para el segundo invernadero 2",
      "Texto para el tercer invernadero 3",
      "Texto para el cuarto invernadero 4 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaae",
    ];

    textos.forEach((texto, index) => {
      const invernaderoElement = screen.getByTestId(`invernadero-${texto}`);
      expect(invernaderoElement).toBeInTheDocument();

      const imagenes = within(invernaderoElement).getAllByRole('img');
      expect(imagenes[0]).toHaveAttribute('src', '/image/img-portada1.jpg');
      expect(imagenes[1]).toHaveAttribute('src', '/image/img-portada2.jpg');
    });
  });
});
