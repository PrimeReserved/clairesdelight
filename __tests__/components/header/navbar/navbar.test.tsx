import { render, fireEvent } from "@testing-library/react";
import Navbar from "../../../../app/component/header/navbar/Navbar";
import { CartProvider } from "../../../../context/CartProvider";

describe("Navbar", () => {
  it("should render the Navbar component with the initial background color of bg-white", () => {
    const { getByTestId } = render(<CartProvider><Navbar /></CartProvider>);
    const navbar = getByTestId("navbar");
    expect(navbar).toHaveClass("bg-white");
  });

  it("should change the background color to bg-lightGreen when scroll position is greater than 100", () => {
    const { getByTestId } = render(<CartProvider><Navbar /></CartProvider>);
    const navbar = getByTestId("navbar");

    // Simulate scroll position change
    fireEvent.scroll(window, { target: { scrollY: 150 } });

    expect(navbar).toHaveClass("bg-lightGreen");
  });

  it("should not change the background color when scroll position is less than or equal to 100", () => {
    const { getByTestId } = render(<CartProvider><Navbar /></CartProvider>);
    const navbar = getByTestId("navbar");

    // Simulate scroll position change
    fireEvent.scroll(window, { target: { scrollY: 50 } });

    expect(navbar).toHaveClass("bg-white");
  });

  it("should change the background color to hover:bg-lightGreen when mouse enters the navbar", () => {
    const { getByTestId } = render(<CartProvider><Navbar /></CartProvider>);
    const navbar = getByTestId("navbar");

    // Simulate mouse enter event
    fireEvent.mouseEnter(navbar);

    expect(navbar).toHaveClass("hover:bg-lightGreen");
  });

  it("should change the background color to bg-white when mouse leaves the navbar", () => {
    const { getByTestId } = render(<CartProvider><Navbar /></CartProvider>);
    const navbar = getByTestId("navbar");

    // Simulate mouse leave event
    fireEvent.mouseLeave(navbar);

    expect(navbar).toHaveClass("bg-white");
  });
});