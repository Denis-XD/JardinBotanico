import React from 'react';
import { render, screen } from '@testing-library/react';
import Planta from '../components/Planta/Planta';

describe('Planta Component', () => {
  it('Debe mostrar la información correcta de la planta', () => {
    const fakePlanta = {
      imagen: 'ruta_imagen.jpg',
      nombre: 'Ficus',
      nombreCientifico: 'Ficus benjamina',
      beneficios: 'Purifica el aire',
      descripcion: 'Es una planta común en interiores',
    };

    render(<Planta {...fakePlanta} />);

    expect(screen.getByText('Nombre:')).toBeInTheDocument();
    expect(screen.getByText(fakePlanta.nombre)).toBeInTheDocument();
    expect(screen.getByText('Nombre científico:')).toBeInTheDocument();
    expect(screen.getByText(fakePlanta.nombreCientifico)).toBeInTheDocument();
    expect(screen.getByText('Beneficios:')).toBeInTheDocument();
    expect(screen.getByText(fakePlanta.beneficios)).toBeInTheDocument();
    expect(screen.getByText('Descripción:')).toBeInTheDocument();
    expect(screen.getByText(fakePlanta.descripcion)).toBeInTheDocument();
    expect(screen.getByAltText(`Imagen de ${fakePlanta.nombre}`)).toHaveAttribute('src', fakePlanta.imagen);
  });
});
