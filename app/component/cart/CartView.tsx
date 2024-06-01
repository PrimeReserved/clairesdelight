"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import CartItemView from "./CartItem";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import { useRouter } from "next/navigation";
import Subtitle from "../typography/Subtitle";
import Button from "../button/Button";
import ServiceCard from "../LandingPage/our-service/ServiceCard";
import SpiceTitle from "../Spice/SpiceTitle";

export default function CartView() {
  const { cartItems, cartTotal } = useCart();
  const router = useRouter();

  return (
    <>
      <Title>Shopping Cart</Title>
      {cartItems.length === 0 ? (
        <>
          <Image src={``} alt="carting" width={200} height={200} />
          <Subtitle title="Empty Card" />
          <p>Use the button below to shop for spices and add to your cart</p>
        
          
          <Button 
            className="btn xl:px-10 lg:px-5 py-1 bg-orange border-none text-white font-normal lg:text-[12px] hover:bg-orange hidden md:flex" 
            text="Shop spices"
            onSubmit={() => router.push(`/shop-spices`)}
        />
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {cartItems.map((item: any) => (
            <div key={item.product._id}>
              <CartItemView item={item} />
            </div>
          ))}
         <ServiceCard>
            <SpiceTitle title="CART SUMMARY" />
            <div className="flex flex-col justify-between items-center">
                <div>
                <p>Amount</p>
                <SpiceTitle title={`${cartTotal.toFixed(2)}`} />
                </div>
                <div>
                <p>Amount</p>
                <SpiceTitle title={`₦00.00`} />
                <hr />
                <p>Total Amount</p>
                <SpiceTitle title={`₦${cartTotal.toFixed(2)}`} />
                </div>
                <div className="mx-auto">
                    <Button
                        className="btn xl:px-10 lg:px-5 py-1 bg-orange border-none text-white font-normal lg:text-[12px] hover:bg-orange hidden md:flex"
                        text={`Checkout (${cartTotal.toFixed(2)})`}
                        onSubmit={() => router.push(`https://paystack.com/pay/property`)}
                    />
                </div>
            </div>
         </ServiceCard>
        </div>
      )}
    </>
  );
}
