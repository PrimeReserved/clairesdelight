"use client";

import SpiceTitle from "@/app/component/Spice/SpiceTitle";
import { Suspense, useEffect } from "react";
import Image from "next/image";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "@/features/recipes/recipesSlice";
import { fetchProducts } from "@/features/products/productsSlice";
import SpiceCard from "../Spice/SpiceCard";
import { Product } from "@/typings";
import Title from "../typography/Title";
import Paragraph from "../typography/Paragraph";

export default function RecipeDetail({ item }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);

  const productSlice = products.slice(0, 6);

  useEffect(() => {
    dispatch(fetchRecipes);
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-20">
        <Suspense>
          <Image
            src={item?.image}
            alt={item?.title}
            width={800}
            height={500}
            loading="lazy"
            className="rounded-3xl"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Suspense>
        <div>
          <SpiceTitle title={item?.title} />
          <p>{item?.description}</p>
          <h3 className="font-bold py-3 text-3xl">Ingredients:</h3>
          <ul className="list-disc m-2">
            {item?.ingredients?.map((ingredient: string, index: number) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="font-bold py-3 text-3xl">Method:</h3>
          <ol>
            {item?.method?.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="my-10">
      <Title>{"Best Selling Spices"} </Title>
      <Paragraph>
        Recommended spices for you. Make a tasty and decilious meal using any of our spices.
        It is of a good quality and it is affordable
      </Paragraph>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 place-items-center place-content-center">
        {productSlice?.map((product: Product) => (
          <Suspense key={product._id}>
            <SpiceCard product={product} />
          </Suspense>
        ))}
      </div>
    </>
  );
}
