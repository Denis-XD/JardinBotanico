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
  test("debe renderizar los invernaderos con sus respectivos textos e imágenes", () => {
    render(<Invernaderos />);

    for (let index = 0; index < 4; index++) {
      const invernaderoElement = screen.getByTestId(`invernadero-${index}`);
      expect(invernaderoElement).toBeInTheDocument();

      const imagenes = within(invernaderoElement).getAllByRole("img");
      expect(imagenes.length).toBeGreaterThanOrEqual(1); 
    }
  });
});
