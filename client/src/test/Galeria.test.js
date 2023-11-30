import { render, screen, waitFor } from '@testing-library/react';
import Galeria from '../components/Galeria/Galeria';

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

describe('Tests Galeria', () => {
  test('Render 2 plantas', async () => {
    const fakeData = [
      { id_planta: 1, nombre_planta: 'Planta 1', nombre_cientifico: 'Alo', beneficios: '', descripcion: '', ruta_imagen: 'upload/' },
      { id_planta: 2, nombre_planta: 'Planta 2', nombre_cientifico: 'Alo2', beneficios: '', descripcion: '', ruta_imagen: 'upload/' },
    ];
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(fakeData),
    });

    render(<Galeria />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:3001/api/plantas/obtener');
    });

    const plantas1 = await screen.findAllByText('Planta 1');
    const plantas2 = await screen.findAllByText('Planta 2');

    expect(plantas1).toHaveLength(2);
    expect(plantas2).toHaveLength(2);

    plantas1.forEach(planta => {
      expect(planta).toBeVisible();
    });
    plantas2.forEach(planta => {
      expect(planta).toBeVisible();
    });
  });

  test('Render 1 planta', async () => {
    const fakeData = [
      { id_planta: 1, nombre_planta: 'Planta 1', nombre_cientifico: 'Alo', beneficios: '', descripcion: '', ruta_imagen: 'upload/' },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(fakeData),
    });

    render(<Galeria />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:3001/api/plantas/obtener');
    });

    const plantas = await screen.findAllByText('Planta 1');

    expect(plantas).toHaveLength(2); 

    plantas.forEach(planta => {
      expect(planta).toBeVisible();
    });
  });

  test('Render 0 plantas', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([]), 
    });

    render(<Galeria />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:3001/api/plantas/obtener');
    });

    const plantas = screen.queryAllByTestId('galeria-container');
    expect(plantas).toHaveLength(0); 
  });
});
