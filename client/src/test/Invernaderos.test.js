import React from "react";
import { render, screen, within } from "@testing-library/react";
import Invernaderos from "../components/Invernaderos/Invernaderos";

jest.mock("../components/Invernadero/Invernadero", () => {
  return function MockInvernadero({ imagenes, texto, index }) {
    return (
      <div data-testid={`invernadero-${index}`}>
        {imagenes.map((img, idx) => (
          <img key={idx} src={img} alt={`Invernadero ${index} imagen ${idx}`} />
        ))}
        <p>{texto}</p>
      </div>
    );
  };
});

describe("Invernaderos component tests", () => {
  test("debe renderizar el invernadero 1 con sus respectivo texto e imágenes", () => {
    render(<Invernaderos />);

    const invernaderoElement = screen.getByTestId(`invernadero-${0}`);
    expect(invernaderoElement).toBeInTheDocument();

    const imagenes = within(invernaderoElement).getAllByRole("img");
    expect(imagenes.length).toBeGreaterThanOrEqual(1); 
  });

  test("debe renderizar el invernadero 2 con sus respectivo texto e imágenes", () => {
    render(<Invernaderos />);

    const invernaderoElement = screen.getByTestId(`invernadero-${1}`);
    expect(invernaderoElement).toBeInTheDocument();

    const imagenes = within(invernaderoElement).getAllByRole("img");
    expect(imagenes.length).toBeGreaterThanOrEqual(1); 
  });

  test("debe renderizar el invernadero 3 con sus respectivo texto e imágenes", () => {
    render(<Invernaderos />);

    const invernaderoElement = screen.getByTestId(`invernadero-${2}`);
    expect(invernaderoElement).toBeInTheDocument();

    const imagenes = within(invernaderoElement).getAllByRole("img");
    expect(imagenes.length).toBeGreaterThanOrEqual(1); 
  });

  test("debe renderizar el invernadero 4 con sus respectivo texto e imágenes", () => {
    render(<Invernaderos />);

    const invernaderoElement = screen.getByTestId(`invernadero-${3}`);
    expect(invernaderoElement).toBeInTheDocument();

    const imagenes = within(invernaderoElement).getAllByRole("img");
    expect(imagenes.length).toBeGreaterThanOrEqual(1); 
  });
});
