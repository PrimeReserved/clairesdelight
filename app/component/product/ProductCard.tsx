import Loading from "@/app/loading";
import { Product } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { Fragment, Suspense } from "react";

export default function ProductCard({ product }: { product: Product }) {
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
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Medicinal Properties: {product.medicinalProperties.join(', ')}</p>
      <p>Culinary Uses: {product.culinaryUses.join(', ')}</p>
      <Link href={`/shop-spices/${product._id}`}>
        <button className="btn">Read more</button>
      </Link>
    </Fragment>
  );
}
