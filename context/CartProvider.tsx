"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { CartItem, Product } from "@/typings";
import CartContext from "./CartContext";

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
}

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const updateLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const addToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => {
      const existingCartItemIndex = prevItems.findIndex(
        (item) => item.product._id === product._id
      );

      let updatedCartItems;

      if (existingCartItemIndex !== -1) {
        updatedCartItems = [...prevItems];
        updatedCartItems[existingCartItemIndex] = {
          ...updatedCartItems[existingCartItemIndex],
          quantity: updatedCartItems[existingCartItemIndex].quantity + 1,
        };
      } else {
        updatedCartItems = [...prevItems, { product, quantity: 1 }];
      }

      updateLocalStorage(updatedCartItems);
      return updatedCartItems;
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prevItems) => {
      const updatedCartItems = prevItems.filter(
        (item) => item.product._id !== productId
      );
      updateLocalStorage(updatedCartItems);
      return updatedCartItems;
    });
  }, []);

  const updateCartItemQuantity = useCallback((productId: string, quantity: number) => {
    setCartItems((prevItems) => {
      const existingCartItemIndex = prevItems.findIndex(
        (item) => item.product._id === productId
      );

      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...prevItems];
        updatedCartItems[existingCartItemIndex] = {
          ...updatedCartItems[existingCartItemIndex],
          quantity,
        };
        updateLocalStorage(updatedCartItems);
        return updatedCartItems;
      }

      return prevItems;
    });
  }, []);

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ),
    [cartItems]
  );

  const cartCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems]
  );

  const values: CartContextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      cartTotal,
      cartCount,
    }),
    [cartItems, addToCart, removeFromCart, updateCartItemQuantity, cartTotal, cartCount]
  );

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};
