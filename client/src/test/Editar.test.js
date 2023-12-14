import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Editar from '../components/Editar/Editar';

jest.mock('../components/PlantaEditar/PlantaEditar', () => {
  return ({ nombre, onDelete, onSave }) => (
    <div>
      <div>{nombre}</div>
      <button onClick={() => onDelete()}>Eliminar</button>
      <button onClick={() => onSave()}>Guardar</button>
    </div>
  );
});

describe('Editar component tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
            { id_planta: 1, nombre_planta: 'Planta 1', nombre_cientifico: 'Alo', beneficios: '', descripcion: '', ruta_imagen: 'upload/' },
            { id_planta: 2, nombre_planta: 'Planta 2', nombre_cientifico: 'Alo2', beneficios: '', descripcion: '', ruta_imagen: 'upload/' }
        ]),
      })
    );
  });

  it('debe renderizar plantas y permitir la navegación', async () => {
    render(<Editar />);
    await waitFor(() => {
      expect(screen.getByText('Planta 1')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/siguiente/i));
    await waitFor(() => {
      expect(screen.getByText('Planta 2')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/anterior/i));
    await waitFor(() => {
      expect(screen.getByText('Planta 1')).toBeInTheDocument();
    });
  });

});
