import React from 'react';
import { render, fireEvent, waitFor, RenderResult } from '@testing-library/react';
import CartItemView from '../../../app/component/cart/CartItem';
import { useCart } from '../../../context/CartContext';
import { CartItem } from '@/typings';

jest.mock('../../../context/CartContext', () => ({
  useCart: () => ({
    removeFromCart: jest.fn(),
    updateCartItemQuantity: jest.fn(),
  }),
}));

describe('CartItemView', () => {
  const mockItem: CartItem = {
    product: {
      _id: '1',
      name: 'Test Product',
      description: 'This is a test product',
      price: 10,
      category: [],
      origin: '',
      medicinalProperties: [],
      culinaryUses: [],
      stock: 0,
      images: [],
    },
    quantity: 2,
  };

  let renderResult: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

  beforeEach(() => {
    renderResult = render(<CartItemView item={mockItem} />);
  });

  test('renders product name correctly', () => {
    expect(renderResult.getByText(mockItem.product.name)).toBeInTheDocument();
  });

  test('renders product description correctly', () => {
    expect(renderResult.getByText(mockItem.product.description)).toBeInTheDocument();
  });

  test('renders product price correctly', () => {
    expect(renderResult.getByText(`$${(mockItem.product.price * mockItem.quantity).toFixed(2)}`)).toBeInTheDocument();
  });

  test('calls removeFromCart when remove button is clicked', () => {
    fireEvent.click(renderResult.getByText('Remove'));
    expect(useCart().removeFromCart).toHaveBeenCalledWith(mockItem.product._id);
  });

  test('calls updateCartItemQuantity with correct quantity when decrease button is clicked', () => {
    const decreaseButton = renderResult.getByLabelText('decrease');
    fireEvent.click(decreaseButton);
    expect(useCart().updateCartItemQuantity).toHaveBeenCalledWith(mockItem.product._id, 1);
  });

  test('calls updateCartItemQuantity with correct quantity when increase button is clicked', () => {
    const increaseButton = renderResult.getByLabelText('increase');
    fireEvent.click(increaseButton);
    expect(useCart().updateCartItemQuantity).toHaveBeenCalledWith(mockItem.product._id, 3);
  });
});