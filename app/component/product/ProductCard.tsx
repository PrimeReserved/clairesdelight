"use client"

import Loading from "@/app/loading";
import { Product } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { Fragment, Suspense } from "react";
import { useCart } from "@/context/CartContext";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: { product: Product }) {
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
    <Fragment>
      <h2>{product.name}</h2>
      <div className="product-images">
        {product.images.map((image: string, index: number) => (
          <Suspense key={index} fallback={<Loading />}>
            <Image
              src={image}
              alt={`${product.name} image ${index + 1}`}
              width={100}
              height={100}
              loading="lazy"
            />
          </Suspense>
        ))}
      </div>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Origin: {product.origin}</p>
      <p>Price: ${product?.price?.toFixed(2)}</p>
      <p>Stock: {product.stock}</p>
      <p>Medicinal Properties: {product.medicinalProperties.join(', ')}</p>
      <p>Culinary Uses: {product.culinaryUses.join(', ')}</p>
      <Link href={`/shop-spices/${product._id}`}>
        <button className="btn">Read more</button>
      </Link>
      <div>
        <button className="btn"
        onClick={() => handleClick(product)}>Add to Cart</button>
      </div>
    </Fragment>
  );
}
