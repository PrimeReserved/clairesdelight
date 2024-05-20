import ProductCard from "@/app/component/product/ProductCard";
import Loading from "@/app/loading";
import { Product } from "@/typings";
import { Suspense } from "react";


const getData = async() => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_URL}`);
    if (!res.ok) throw new Error(`Error fetching products.`)
    return res.json();
  } catch(error){
    console.log(`Error getting product data: ${error}`);
  }
};


export default async function Page() {
  const products: Product[] = await getData();
  
  return (
    <>
      <h1  className="text-5xl">The Spice page</h1>
      <section className="p-10">
      {
          products.map((product: any) => (
            <Suspense key={product.id} fallback={<Loading />}>
              <ProductCard product={product} />
            </Suspense>
          ))
        }
      </section>
    </>
  )
}
