"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import CartItemView from "./CartItem";
import Title from "../typography/Title";
import { useRouter } from "next/navigation";
import Subtitle from "../typography/Subtitle";
import Button from "../button/Button";
import ServiceCard from "../LandingPage/our-service/ServiceCard";
import SpiceTitle from "../Spice/SpiceTitle";
import { cartImage } from "@/public/image/cdn/cdn";
import Link from "next/link";
import BodyWrapper from "../layout/BodyWrapper";

export default function CartView() {
  const { cartCount, cartItems, cartTotal } = useCart();
  const router = useRouter();

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
          <Subtitle title="Empty Card" />
          <p>Use the button below to shop for spices and add to your cart</p>

          <Button
            className="btn xl:px-10 lg:px-5 py-1 bg-orange border-none text-white font-normal lg:text-[12px] hover:bg-orange hidden md:flex"
            text="Shop spices"
            onClick={() => router.push(`/shop-spices`)}
          />
        </div>
      ) : (
        <div className="flex justify-evenly">
          <div className="">
            <SpiceTitle title={`Spices in cart (${cartCount})`} />
            {cartItems.map((item: any) => (
              <div
                key={item.product._id}
                className="flex justify-between flex-col pb-3 items-center"
              >
                <CartItemView item={item} />
              </div>
            ))}
          </div>
          <div className="pt-[3rem]">
            <ServiceCard className="">
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
                  <p>Amount</p>
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
                    onClick={() =>
                      router.push(`https://paystack.com/pay/cart-checkout`)
                    }
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


// http://localhost:3000/shop-spices?reference=T096364820155057