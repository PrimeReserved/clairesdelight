"use client"

import Loading from "@/app/loading";
import { Product } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useCart } from "@/context/CartContext";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

interface Props {
  product: Product;
}

function SpiceCard({ product }: Readonly<{ product: Product }>) {
  const { addToCart } = useCart();

  const handleClick = (product: Product) => {
    addToCart(product);
    Notify.success(`${product.name} has been added to cart`, {
      ID: 'MKA',
      timeout: 1923,
      showOnlyTheLastOne: true,
    });
  } 

  return (
          <div
            className="card card-compact w-[20rem] lg:w-[18rem] xl:w-[20rem] bg-base-100 shadow-md border-[1px] "
            key={product._id}
          >
            <figure>
            <Suspense fallback={<Loading />}>
              <Image src={product.images} alt="Spice" width={391} height={248} />
            </Suspense>
            </figure>
            <div className="card-body">
              <Link href={`/shop-spices/${product._id}`}>
                <h2 className="card-title text-customBlack font-bold text-[20px] py-3">
                  {product.name}
                </h2>
              </Link>
              <div className="card-actions flex justify-between items-center">
                <p className="text-customBlack font-bold text-[25px] ">
                  ₦{' '}{product?.price?.toFixed(2)}
                </p>
                <button className="btn font-light text-white bg-orange w-[130px] hover:bg-green border-none"
                onClick={() => handleClick(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
  );
}

export default SpiceCard;
