import Loading from "@/app/loading";
import Image from "next/image";
import { Fragment, Suspense } from "react";

export default function ProductCard({ product }: any) {
  return (
    <Fragment>
      <h2>{product.title}</h2>
      <Suspense fallback={<Loading />}>
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          loading="lazy"
        />
      </Suspense>
      <p>{product.description}</p>
      <p> $ {product.price}</p>
    </Fragment>
  );
}
