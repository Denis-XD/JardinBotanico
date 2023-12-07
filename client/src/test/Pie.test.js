import React from 'react';
import { render, screen } from '@testing-library/react';
import Pie from '../components/Pie/Pie';

describe('Pruebas para el componente Pie', () => {
  test('debe renderizar el footer con el texto correcto', () => {
    render(<Pie />);
    const year = new Date().getFullYear();
    const footerText = `© ${year} Jardín Botánico Martín Cárdenas. Todos los derechos reservados.`;
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });
});

