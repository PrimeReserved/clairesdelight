"use client";

import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { removeFromCartLocal, updateCartItemQuantityLocal } from '@/features/carts/cartsSlice';
import CartItemView from "./CartItem";
import { useRouter } from "next/navigation";
import Subtitle from "../typography/Subtitle";
import Button from "../button/Button";
import ServiceCard from "../LandingPage/our-service/ServiceCard";
import SpiceTitle from "../Spice/SpiceTitle";
import { cartImage } from "@/public/image/cdn/cdn";
import Link from "next/link";
import BodyWrapper from "../layout/BodyWrapper";
import { CartItem } from "@/typings";

export default function CartView() {
  const dispatch = useDispatch();
  const { cartItems, cartTotal, cartCount } = useSelector((state: RootState) => state.carts);
  const router = useRouter();


  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCartLocal(productId));
  };

  const handleUpdateCartItemQuantity = (productId: string, quantity: number) => {
    dispatch(updateCartItemQuantityLocal({ productId, quantity }));
  };

  return (
    <BodyWrapper>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/shop-spices">Shop Spices</Link>
          </li>
          <li>All Spices</li>
          <li className="font-blog">My Cart</li>
        </ul>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-5 h-[30rem]">
          <Image src={cartImage} alt="carting" width={300} height={200} />
          <Subtitle title="Empty Cart" />
          <p>Use the button below to shop for spices and add to your cart</p>
          <Button
            className="btn xl:px-10 lg:px-5 py-1 bg-orange border-none text-white font-normal lg:text-[12px] hover:bg-orange hidden md:flex"
            text="Shop spices"
            onClick={() => router.push(`/shop-spices`)}
          />
        </div>
      ) : (
        <div className="flex justify-evenly">
          <div>
            <SpiceTitle title={`Spices in cart (${cartCount})`} />
            {cartItems.map((item: CartItem) => (
              <div
                key={item.product._id}
                className="flex justify-between flex-col pb-3 items-center"
              >
                <CartItemView
                  item={item}
                  onRemove={() => handleRemoveFromCart(item.product._id)}
                  onUpdateQuantity={(quantity: number) => handleUpdateCartItemQuantity(item.product._id, quantity)}
                />
              </div>
            ))}
          </div>
          <div className="pt-[3rem]">
            <ServiceCard>
              <div className="p-5">
                <SpiceTitle title="CART SUMMARY" />
                <div className="flex justify-between items-center">
                  <p>Amount</p>
                  <SpiceTitle
                    title={`₦${new Intl.NumberFormat("en-NG", {
                      style: "decimal",
                      minimumFractionDigits: 2,
                    }).format(cartTotal)}`}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p>Discount</p>
                  <SpiceTitle title={`₦00.00`} />
                </div>
                <hr className="px-5" />
                <div className="flex justify-between items-center">
                  <p>Total Amount</p>
                  <SpiceTitle
                    title={`₦${new Intl.NumberFormat("en-NG", {
                      style: "decimal",
                      minimumFractionDigits: 2,
                    }).format(cartTotal)}`}
                  />
                </div>
                <div className="flex justify-center p-10">
                  <Button
                    className="btn xl:px-10 lg:px-5 py-1 bg-orange border-none text-white font-normal lg:text-[12px] hover:bg-orange hidden md:flex"
                    text={`Checkout (₦${new Intl.NumberFormat("en-NG", {
                      style: "decimal",
                      minimumFractionDigits: 2,
                    }).format(cartTotal)})`}
                    onClick={() => router.push(`https://paystack.com/pay/cart-checkout`)}
                  />
                </div>
              </div>
            </ServiceCard>
          </div>
        </div>
      )}
    </BodyWrapper>
  );
}
