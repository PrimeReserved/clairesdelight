import ProductCard from "@/app/component/product/ProductCard";
import Loading from "@/app/loading";
import { Product } from "@/typings";
import { Suspense } from "react";


const getProduct = async() => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_ROUTE}`);
    if (!res.ok) throw new Error(`Error fetching products.`)
    const data = await res.json();
    return data;
  } catch(error){
    console.log(`Error getting product data: ${error}`);
  }
};


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
