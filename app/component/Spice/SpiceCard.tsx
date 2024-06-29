"use client";

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import {addToCart, addToCartLocal } from '@/features/carts/cartsSlice';
import Loading from "@/app/loading";
import { Product } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";


function SpiceCard({ product }: Readonly<{ product: Product }>) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.carts);

  const handleClick = async (product: Product) => {
    try {
      // Dispatch the addToCart async thunk
      await dispatch(addToCart(product));

      // Notify the user of successful addition to cart
      Notify.success(`${product.name} has been added to cart`, {
        ID: 'MKA',
        timeout: 1923,
        showOnlyTheLastOne: true,
      });
    } catch (error) {
      // Notify the user of any errors during addToCart
      Notify.failure('Failed to add product to cart');
    }
  };

  return (
    <div
      className="card card-compact w-[20rem] lg:w-[18rem] xl:w-[24rem] bg-base-100 shadow-md border-[1px] "
      key={product._id}
    >
      <figure className="bg-[#FFF8F6]">
        <Suspense fallback={<Loading />}>
          <div
            style={{
              width: "100%",
              maxWidth: "380px",
              height: "280px",
              overflow: "hidden",
            }}
          >
            <Image
              src={`${product.images}`}
              alt="Spice"
              width={380}
              height={380}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </Suspense>
      </figure>

      <div className="card-body">
        <Link href={`/shop-spices/${product.slug}`}>
          <h2 className="card-title text-customBlack font-bold text-[20px] py-3">
            {product.name}
          </h2>
        </Link>
        <div className="card-actions flex justify-between items-center">
          <p className="text-customBlack font-bold text-[25px] ">
          {" "}
                ₦
                {new Intl.NumberFormat("en-NG", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                }).format(product?.price)}
          </p>
          <button
            className="btn font-light text-white bg-orange w-[130px] hover:bg-green border-none"
            onClick={() => handleClick(product)}
          >
            {loading ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpiceCard;
