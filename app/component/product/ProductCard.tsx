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

export default function ProductCard({ product }: Readonly<{ product: Product }>) {
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
    // <Fragment>
    //   <h2>{product.name}</h2>
    //   <div className="product-images">
    //     {product.images.map((image: string, index: number) => (
    //       <Suspense key={index} fallback={<Loading />}>
    //         <Image
    //           src={image}
    //           alt={`${product.name} image ${index + 1}`}
    //           width={100}
    //           height={100}
    //           loading="lazy"
    //         />
    //       </Suspense>
    //     ))}
    //   </div>
    //   <p>{product.description}</p>
    //   <p>Category: {product.category}</p>
    //   <p>Origin: {product.origin}</p>
    //   <p>Price: ${product?.price?.toFixed(2)}</p>
    //   <p>Stock: {product.stock}</p>
    //   <p>Medicinal Properties: {product.healthBenefit?.join(', ')}</p>
    //   <p>Culinary Uses: {product.culinaryUses.join(', ')}</p>
    //   <Link href={`/shop-spices/${product._id}`}>
    //     <button className="btn">Read more</button>
    //   </Link>
    //   <div>
    //     <button className="btn"
    //     onClick={() => handleClick(product)}>Add to Cart</button>
    //   </div>
    // </Fragment>
    <div className="flex justify-center items-center mt-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            className="card card-compact w-[20rem] lg:w-[18rem] xl:w-[20rem] bg-base-100 shadow-md border-[1px] "
            key={product._id}
          >
            <figure>
              {/* <Image src={product.images} alt="Spice" width={391}
                    height={248} /> */}
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
