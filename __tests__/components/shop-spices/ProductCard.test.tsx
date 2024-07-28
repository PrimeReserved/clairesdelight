import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ProductCard from "../../../app/component/product/ProductCard";
import { CartProvider } from "../../../context/CartProvider";

describe("ProductCard", () => {
  const product = {
    _id: "1",
    name: "Test Product",
    images: ["https://m.media-amazon.com/images/I/91by0UlWPUL.jpg", "https://www.kroger.com/product/images/large/front/0074615575035"],
    description: "This is a test product",
    category: ["Test Category"],
    origin: "Test Origin",
    price: 10.99,
    stock: 10,
    medicinalProperties: ["Test Property 1", "Test Property 2"],
    culinaryUses: ["Test Use 1", "Test Use 2"],
  };

  it("renders the product name", () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    expect(getByText(product.name)).toBeInTheDocument();
  });

  it("renders the product images", () => {
    const { getAllByRole } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    const images = getAllByRole("img");
    expect(images.length).toBe(product.images.length);
  });

  it("renders the product description", () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    expect(getByText(product.description)).toBeInTheDocument();
  });

  it("renders the product category", () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    expect(getByText(product.category)).toBeInTheDocument();
  });

  it("renders the product origin", () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    expect(getByText(product.origin)).toBeInTheDocument();
  });

  it("renders the product price", () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    expect(getByText(`$${product.price.toFixed(2)}`)).toBeInTheDocument();
  });

  it("renders the product stock", () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    expect(getByText(`${product.stock}`)).toBeInTheDocument();
  });

  it("renders the product medicinal properties", () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    expect(
      getByText(product.medicinalProperties.join(", "))
    ).toBeInTheDocument();
  });

  it("renders the product culinary uses", () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    expect(getByText(product.culinaryUses.join(", "))).toBeInTheDocument();
  });

  it('renders the "Read more" button', () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    expect(getByText("Read more")).toBeInTheDocument();
  });

  it('renders the "Add to Cart" button', () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );
    expect(getByText("Add to Cart")).toBeInTheDocument();
  });

  it('calls the addToCart function when the "Add to Cart" button is clicked', () => {
    const addToCartMock = jest.fn();
    const { getByText } = render(
      <ProductCard product={product} addToCart={addToCartMock} />
    );
    const button = getByText("Add to Cart");
    fireEvent.click(button);
    expect(addToCartMock).toHaveBeenCalledWith(product);
  });
});
