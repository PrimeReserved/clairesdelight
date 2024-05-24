import ProductCard from "@/app/component/product/ProductCard";
import Loading from "@/app/loading";
import { Suspense } from "react";
import { getProduct } from "@/lib/data";


export default async function Page() {
  const products = await getProduct();

  if (!Array.isArray(products) || products.length === 0) {
    return (
      <p>No Spice available</p>
    );
  }
  
  return (
    <>
      <h1  className="text-5xl">The Spice page</h1>
      <section className="p-10">
      {
          products.map((product: any) => (
            <Suspense key={product._id} fallback={<Loading />}>
              <ProductCard product={product} />
            </Suspense>
          ))
        }
      </section>
    </>
  )
}
