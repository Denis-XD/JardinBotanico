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

  it('debe mostrar el titulo correctamente', () => {
    render(<Inicio />);

    const imagen = screen.getByAltText('Jardín Botánico');
    expect(imagen).toBeInTheDocument();
  });


  it('debe mostrar la primera imagen correctamente', () => {
    render(<Inicio />);

    const imagen = screen.getByAltText('Jardín Botánico');
    expect(imagen).toBeInTheDocument();
    expect(imagen).toHaveAttribute('src', imagenesMock[0]);
  });

  it('debe cambiar a la imagen 2 después de un intervalo de tiempo', () => {
    render(<Inicio />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen).toHaveAttribute('src', imagenesMock[1]);
  });

  it('debe cambiar a la imagen 3 después de un intervalo de tiempo', () => {
    render(<Inicio />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen).toHaveAttribute('src', imagenesMock[1]);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen2 = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen2).toHaveAttribute('src', imagenesMock[2]);

  });

  it('debe cambiar a la imagen 4 después de un intervalo de tiempo', () => {
    render(<Inicio />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen).toHaveAttribute('src', imagenesMock[1]);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen2 = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen2).toHaveAttribute('src', imagenesMock[2]);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen3 = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen3).toHaveAttribute('src', imagenesMock[3]);
  });

  it('debe cambiar a la imagen 5 después de un intervalo de tiempo', () => {
    render(<Inicio />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen).toHaveAttribute('src', imagenesMock[1]);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen2 = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen2).toHaveAttribute('src', imagenesMock[2]);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen3 = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen3).toHaveAttribute('src', imagenesMock[3]);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen4 = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen4).toHaveAttribute('src', imagenesMock[4]);
  });

  it('debe cambiar a la imagen 6 después de un intervalo de tiempo', () => {
    render(<Inicio />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen).toHaveAttribute('src', imagenesMock[1]);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen2 = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen2).toHaveAttribute('src', imagenesMock[2]);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen3 = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen3).toHaveAttribute('src', imagenesMock[3]);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen4 = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen4).toHaveAttribute('src', imagenesMock[4]);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const nuevaImagen5 = screen.getByAltText('Jardín Botánico');
    expect(nuevaImagen5).toHaveAttribute('src', imagenesMock[5]);
  });

});
