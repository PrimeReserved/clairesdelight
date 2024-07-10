"use client"

import Loading from "@/app/loading";
import { Suspense, useEffect } from "react";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import SpiceCard from "../Spice/SpiceCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchProducts } from "@/features/products/productsSlice";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
 

const Spice = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  if (!Array.isArray(products) || products.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <Title>{"Our Spice Collection"} </Title>
      <Paragraph>
        {
          "Explore our diverse spice collection sourced from around the globe, each ingredient carefully chosen for its exceptional quality and distinctive taste"
        }
      </Paragraph>
      <div className="px-10 mt-5 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center place-content-center">
          {products.map((product: any) => (
            <Suspense key={product._id}>
              <SpiceCard product={product} />
            </Suspense>
          ))}
        </div>
      </div>
      <div className="flex justify-center font-bold">
        <Link href="/shop-spices" className="text-orange hover:text-green flex items-center gap-1"> View All <FaArrowRight /></Link>
      </div>
    </div>
  );
}

export default Spice;
