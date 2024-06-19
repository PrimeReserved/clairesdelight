"use client"

import Loading from "@/app/loading";
import { Suspense, useEffect } from "react";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";
import SpiceCard from "../Spice/SpiceCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchProducts } from "@/features/products/productsSlice";
 

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
      <div className="flex justify-center items-center mt-5 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product: any) => (
            <Suspense key={product._id}>
              <SpiceCard product={product} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Spice;
