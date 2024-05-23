"use client"

import { useState, useMemo, useCallback } from "react";
import { CartItem, Product } from "@/typings";
import CartContext from "./CartContext"

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

    const addToCart = useCallback((product: Product) => {
        const existingCartItemIndex = cartItems.findIndex(
            (item) => item.product._id === product._id
        );
        if (existingCartItemIndex !== -1) {
            const existingCartItem = cartItems[existingCartItemIndex];
            const updatedCartItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { product, quantity: 1 }]);
        }
    }, [cartItems]);

    const removeFromCart = useCallback((productId: string) => {
        const updatedCartItems = cartItems.filter(
            (item) => item.product._id !== productId
        );
        setCartItems(updatedCartItems);
    }, [cartItems]);

    const updateCartItemQuantity = useCallback((productId: string, quantity: number) => {
        const existingCartItemIndex = cartItems.findIndex(
            (item) => item.product._id === productId
        );
        if (existingCartItemIndex !== -1) {
            const existingCartItem = cartItems[existingCartItemIndex];
            const updatedCartItem = {
                ...existingCartItem,
                quantity,
            };
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
            setCartItems(updatedCartItems);
        }
    }, [cartItems]);

    const cartTotal = useMemo(() => cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    ), [cartItems]);

    const cartCount = useMemo(() => cartItems.reduce((count, item) => count + item.quantity, 0), [cartItems]);

    const values: CartContextValue = useMemo(() => ({
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        cartTotal,
        cartCount
    }), [cartItems, addToCart, removeFromCart, updateCartItemQuantity, cartTotal, cartCount]);
    return (
        <CartContext.Provider
            value={values}
        >
            {children}
        </CartContext.Provider>
    );
};