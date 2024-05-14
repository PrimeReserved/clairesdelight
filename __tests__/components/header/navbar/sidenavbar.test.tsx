import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SideNavbar from "../../../../app/component/header/navbar/SideNavbar";

describe("SideNavbar", () => {
  it("should render the SideNavbar component with the correct background color and close icon", () => {
    const { getByTestId, getByText } = render(<SideNavbar onClose={() => {}} />);
    const sideNavbar = getByTestId("side-navbar");
    const closeIcon = getByTestId('close-icon');  
    expect(sideNavbar).toHaveClass("bg-lighterGreen");
    expect(closeIcon).toBeInTheDocument();
  });

  it("should call the onClose function when the close icon is clicked", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<SideNavbar onClose={onClose} />);
    const closeIcon = getByTestId('close-icon');

    fireEvent.click(closeIcon);

    expect(onClose).toHaveBeenCalled();
  });

  it("should render the correct links", () => {
    const { getByText } = render(<SideNavbar onClose={() => {}} />);

    const links = [
      "Home",
      "Shop Spices",
      "Recipes",
      "About Us",
      "Blog"
    ];

    links.forEach(link => {
      expect(getByText(link)).toBeInTheDocument();
    });
  });

  it("should render the contact us button", () => {
    const { getByText } = render(<SideNavbar onClose={() => {}} />);

    expect(getByText(/contact us/i)).toBeInTheDocument();
  });
});