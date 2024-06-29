"use client"

import Loading from "@/app/loading";
import { Product } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { Fragment, Suspense } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addToCart } from "@/features/carts/cartsSlice";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Readonly<{ product: Product }>) {
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
    <div className="flex justify-center items-center mt-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            className="card card-compact w-[20rem] lg:w-[18rem] xl:w-[20rem] bg-base-100 shadow-md border-[1px] "
            key={product._id}
          >
            <figure>
                <Suspense fallback={<Loading />}>
                  <Image
                    src={`${product.images}`}
                    alt={`${product.name}`}
                    width={391}
                    height={248}
                    loading="lazy"
                  />
                </Suspense>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-customBlack font-bold text-[20px] py-3">
              {product.name}
              </h2>
              <div className="card-actions flex justify-between items-center">
                <p className="text-customBlack font-bold text-[25px] ">
                  ₦{' '}{product?.price?.toFixed(2)}
                </p>
                <button className="btn font-light text-white bg-orange w-[130px] hover:bg-green border-none"
                 onClick={() => handleClick(product)}
                 >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
