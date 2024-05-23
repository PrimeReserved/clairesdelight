"use client"

import { useCart } from "@/context/CartContext";
import CartItemView from "./CartItem"
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import { useRouter } from "next/navigation";


export default function CartView(){

    const { cartItems, cartTotal } = useCart();
    const router = useRouter();

    return (
        <>
          <Title>Shopping Cart</Title>
            { cartItems.length === 0 ? (
                <Paragraph>Your cart is empty</Paragraph>
            ) : (
                <>
                { cartItems.map((item: any) => (
                    <div key={item.product._id}>
                        <CartItemView item={item} />
                    </div>
                ))}
                </>
            )}
            <div>
                <Paragraph> Total Cost: ${cartTotal.toFixed(2)}</Paragraph>
            </div>
            <div>
            { cartItems.length === 0 ? (
                <button className="btn" onClick={() => router.push(`/shop-spices`)}>Shop Spice</button>
                
            ) : (
                <button className="btn">Checkout</button>
            )}
            </div>
        </>
    );
}