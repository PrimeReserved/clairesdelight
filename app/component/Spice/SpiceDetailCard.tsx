"use client";

import Image from "next/image";
import Loading from "@/app/loading";
import { Suspense, useEffect } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";
import Subtitle from "../typography/Subtitle";
import { useRouter } from "next/navigation";
import BodyWrapper from "../layout/BodyWrapper";
import {
  removeFromCart,
  updateCartItemQuantityLocal,
} from "@/features/carts/cartsSlice";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/features/products/productsSlice";


export default function SpiceDetailCard({ item }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const { cartItems, cartTotal, cartCount } = useSelector(
    (state: RootState) => state.carts
  );
  const router = useRouter();

  const productSlice = products.slice(0, 6);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantityLocal(item._id);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item._id);
  };

  return (
    <BodyWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div className="rounded-xl bg[#FFF8F6]">
          <Suspense>
            <div
              className="p-10 rounded-3xl bg-[#FFF8F6]"
              style={{
                width: "100%",
                maxWidth: "600px",
                overflow: "hidden",
              }}
            >
              <Image
                src={item.images}
                alt={item.name}
                width={600}
                height={600}
                className="rounded-2xl p-1"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Suspense>
        </div>
        <div className="">
          <Subtitle title={item.name} />
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center py-5">
              <span className="flex justify-between text-orange">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </span>
              <p className="ml-2">20 Reviews</p>
            </div>
          </div>
          <div>
            <p className="line-clamp-2">{item.description}</p>
          </div>
          {/* <SpiceTitle title={`${item.product.price}`} /> */}
          <div className="pt-10">
            <div>
              <small className="text-teritaryGrey">Price</small>
              <p className="font-bold text-2xl text-balance">
                {" "}
                ₦
                {new Intl.NumberFormat("en-NG", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                }).format(item.price)}
              </p>
            </div>
            <div className="mt-5 mb-2">
              <small className="text-teritaryGrey pb-2">Quantity</small>
            </div>
            <div className="flex justify-between gap-10 items-center">
              <div className="flex flex-row items-center pr-5">
                <div className="border flex flex-row justify-around items-center w-[10rem] h-[3rem] rounded-md">
                  <button
                    className="bg-white hover:bg-gray-100 border-r text-center"
                    aria-label="decrease"
                    onClick={() => {
                      handleQuantityChange(item.quantity - 1);
                    }}
                  >
                    <AiOutlineMinus />
                  </button>
                  <p className="bg-white border-r border-l">{item.quantity}</p>
                  <button
                    className="bg-white hover:bg-gray-100 border-l"
                    aria-label="increase"
                    onClick={() => {
                      handleQuantityChange(item.quantity + 1);
                    }}
                  >
                    <MdOutlineAdd />
                  </button>
                </div>
              </div>
              <div>
                <button
                  className="bg-orange btn text-white w-[10rem]"
                  onClick={() => router.push("")}
                >
                  Buy Now
                </button>
              </div>
              <button
                onClick={() => alert(`Add to cart`)}
                className="btn text-orange w-[10rem]"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 bg-[#FFF8F6]">
        <div className="">
          <h3>Recipe Suggestion</h3>
          <p>{item.origin}</p>
          <ul>
            {item.culinaryUses.map((use: any, index: any) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Health Benefit</h3>
          <ul>
            {item.healthBenefit.map((benefit: any, index: number) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </BodyWrapper>
  );
}
